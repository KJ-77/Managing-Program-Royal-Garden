// API client for document management system

// Base API URL - replace with your deployed API endpoint in production
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://gfv4zwbkl9.execute-api.us-east-1.amazonaws.com";

// Common headers for all API requests
const commonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

/**
 * Interface for file objects from S3
 */
export interface FileObject {
  key: string;
  isFolder: boolean;
  lastModified?: Date;
  size?: number;
  signedUrl?: string;
  // Used for UI display
  name: string;
  type: string;
  extension?: string;
}

/**
 * Interface representing a path segment for breadcrumb navigation
 */
export interface PathSegment {
  name: string;
  path: string;
}

/**
 * Interface for folder listing response
 */
export interface FolderContents {
  files: FileObject[];
  folders: FileObject[];
  pathSegments: PathSegment[]; // Changed from string[] to PathSegment[]
  currentPath: string;
}

/**
 * Get the name part from a file key
 */
function getNameFromKey(key: string): string {
  // Remove any trailing slashes for folders
  const cleanKey = key.endsWith("/") ? key.slice(0, -1) : key;
  // Get the last part of the path
  const parts = cleanKey.split("/");
  return parts[parts.length - 1];
}

/**
 * Get file extension from key
 */
function getExtension(key: string): string | undefined {
  if (key.includes(".")) {
    const parts = key.split(".");
    return parts[parts.length - 1].toLowerCase();
  }
  return undefined;
}

/**
 * Get mime type based on file extension
 */
function getMimeType(extension: string | undefined): string {
  if (!extension) return "application/octet-stream";

  const mimeTypes: Record<string, string> = {
    pdf: "application/pdf",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    txt: "text/plain",
    // Add more as needed
  };

  return mimeTypes[extension] || "application/octet-stream";
}

/**
 * Enhanced fetch function with retry capability
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries = 3,
  delay = 500
): Promise<Response> {
  try {
    // Merge common headers with provided headers
    const mergedOptions = {
      ...options,
      headers: {
        ...commonHeaders,
        ...(options.headers || {}),
      },
    };

    const response = await fetch(url, mergedOptions);

    // If we get a 503, let's try again after a delay
    if (response.status === 503 && retries > 0) {
      console.log(`Got 503, retrying... (${retries} retries left)`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay * 1.5);
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      console.log(`Network error, retrying... (${retries} retries left)`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay * 1.5);
    }
    throw error;
  }
}

/**
 * Fetch files and folders from a specific path
 */
export async function listFiles(
  path: string = "",
  generateUrls: boolean = false
): Promise<FolderContents> {
  try {
    console.log(`Fetching files from ${path}...`);

    const url = `${API_BASE_URL}/files?prefix=${encodeURIComponent(
      path
    )}&generateUrls=${generateUrls}`;

    console.log(`Request URL: ${url}`);

    const response = await fetchWithRetry(url);

    if (!response.ok) {
      console.error(
        `Error response from API: ${response.status} ${response.statusText}`
      );
      throw new Error(`API error: ${response.status}`);
    }

    const data: FolderContents = await response.json();
    console.log("API response data:", data);

    // Process file metadata for UI display
    data.files = data.files.map((file) => ({
      ...file,
      name: getNameFromKey(file.key),
      extension: getExtension(file.key),
      type: getExtension(file.key)
        ? getMimeType(getExtension(file.key))
        : "application/octet-stream",
    }));

    // Process folder metadata for UI display
    data.folders = data.folders.map((folder) => ({
      ...folder,
      name: getNameFromKey(folder.key),
      type: "folder",
    }));

    return data;
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
}

/**
 * Get a signed URL for downloading or viewing a file
 */
export async function getFileUrl(
  key: string,
  useCdn: boolean = false
): Promise<string> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE_URL}/files/${encodeURIComponent(key)}?cdn=${useCdn}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error("Error getting file URL:", error);
    throw error;
  }
}

/**
 * Get a pre-signed URL for uploading a file
 */
export async function getUploadUrl(
  key: string,
  contentType: string
): Promise<{
  uploadUrl: string;
  key: string;
  uploadMethod: string;
  headers: Record<string, string>;
}> {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/files`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key, contentType }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting upload URL:", error);
    throw error;
  }
}

/**
 * Upload a file to S3 using a pre-signed URL
 */
export async function uploadFile(
  file: File,
  path: string = ""
): Promise<string> {
  try {
    // Generate a key for the file by combining the path and filename
    const key = path
      ? `${path}${path.endsWith("/") ? "" : "/"}${file.name}`
      : file.name;

    // Get a pre-signed upload URL
    const { uploadUrl, uploadMethod, headers } = await getUploadUrl(
      key,
      file.type
    );

    // Upload the file using the pre-signed URL
    const uploadResponse = await fetchWithRetry(uploadUrl, {
      method: uploadMethod,
      headers: headers,
      body: file,
    });

    if (!uploadResponse.ok) {
      throw new Error(`Upload failed: ${uploadResponse.status}`);
    }

    return key;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

/**
 * Delete a file from S3
 */
export async function deleteFile(key: string): Promise<void> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE_URL}/files/${encodeURIComponent(key)}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
}

/**
 * Create a new folder in S3
 */
export async function createFolder(
  folderName: string,
  currentPath: string = ""
): Promise<string> {
  try {
    // Construct the folder path based on current directory
    const folderPath = currentPath
      ? `${currentPath}${currentPath.endsWith("/") ? "" : "/"}${folderName}`
      : folderName;

    const response = await fetchWithRetry(`${API_BASE_URL}/folders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folderPath }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.folderPath;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
}
