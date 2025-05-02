import React, { useState, useEffect, useCallback } from "react";
import { FileIcon } from "../components/FileIcon";
import { BreadcrumbNav } from "../components/BreadcrumbNav";
import {
  listFiles,
  FileObject,
  uploadFile,
  deleteFile,
  getFileUrl,
  createFolder,
} from "../lib/documentApi";
import {
  Upload,
  RefreshCw,
  Search,
  Grid,
  List,
  Trash2,
  Download,
  FileQuestion,
  Loader2,
  FolderPlus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";

export default function Documents() {
  // State variables
  const [currentPath, setCurrentPath] = useState("");
  const [pathSegments, setPathSegments] = useState<string[]>([]);
  const [files, setFiles] = useState<FileObject[]>([]);
  const [folders, setFolders] = useState<FileObject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<FileObject | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // New folder state
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [creatingFolder, setCreatingFolder] = useState(false);

  // Function to load files and folders for the current path
  const loadFiles = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await listFiles(currentPath);
      setFiles(result.files);
      setFolders(result.folders);
      setPathSegments(result.pathSegments);
    } catch (err) {
      console.error("Error loading files:", err);
      setError("Failed to load files. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [currentPath]);

  // Load files on component mount and when currentPath changes
  useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  // Handle navigation to a folder
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    setSelectedItem(null);
  };

  // Handle file/folder click
  const handleItemClick = (item: FileObject) => {
    if (item.isFolder) {
      handleNavigate(item.key);
    } else {
      setSelectedItem((prev) => (prev?.key === item.key ? null : item));
    }
  };

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError(null);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        await uploadFile(file, currentPath);
      }

      // Refresh the file list
      await loadFiles();

      // Reset the file input
      e.target.value = "";
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("Failed to upload file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  // Handle file deletion
  const handleDeleteFile = async () => {
    if (!selectedItem || selectedItem.isFolder) return;

    if (
      !window.confirm(`Are you sure you want to delete ${selectedItem.name}?`)
    ) {
      return;
    }

    try {
      await deleteFile(selectedItem.key);
      setSelectedItem(null);
      await loadFiles();
    } catch (err) {
      console.error("Error deleting file:", err);
      setError("Failed to delete file. Please try again.");
    }
  };

  // Handle file download
  const handleDownloadFile = async () => {
    if (!selectedItem || selectedItem.isFolder) return;

    try {
      const url = await getFileUrl(selectedItem.key);

      // Create a temporary link and click it to trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = selectedItem.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error downloading file:", err);
      setError("Failed to download file. Please try again.");
    }
  };

  // Handle folder creation
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;

    setCreatingFolder(true);
    setError(null);

    try {
      await createFolder(newFolderName.trim(), currentPath);

      // Reset states
      setNewFolderName("");
      setIsCreateFolderOpen(false);

      // Refresh file list to show the new folder
      await loadFiles();
    } catch (err) {
      console.error("Error creating folder:", err);
      setError("Failed to create folder. Please try again.");
    } finally {
      setCreatingFolder(false);
    }
  };

  // Filter files and folders based on search query
  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Windows 11-style UI components
  return (
    <div className="flex flex-col h-full p-4 space-y-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold dark:text-gray-100">Documents</h1>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            const fileInput = document.getElementById("fileUpload");
            if (fileInput) fileInput.click();
          }}
          disabled={uploading}
        >
          {uploading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Upload className="w-4 h-4 mr-2" />
          )}
          Upload
        </Button>
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          multiple
          onChange={handleFileUpload}
        />

        {/* New Folder Button */}
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsCreateFolderOpen(true)}
          disabled={creatingFolder}
        >
          {creatingFolder ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <FolderPlus className="w-4 h-4 mr-2" />
          )}
          New Folder
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={loadFiles}
          disabled={isLoading}
        >
          <RefreshCw
            className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
          />
          Refresh
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center border rounded-md px-2 py-1 flex-grow dark:border-gray-700">
          <Search className="w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant={viewMode === "grid" ? "default" : "ghost"}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Grid View</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant={viewMode === "list" ? "default" : "ghost"}
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>List View</TooltipContent>
        </Tooltip>
      </div>

      {/* Error display */}
      {error && (
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 p-2 rounded">
          {error}
        </div>
      )}

      {/* Create Folder Dialog */}
      {isCreateFolderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Create New Folder</h3>
            <form onSubmit={handleCreateFolder}>
              <Input
                type="text"
                placeholder="Folder name"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                className="mb-4"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsCreateFolderOpen(false);
                    setNewFolderName("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!newFolderName.trim() || creatingFolder}
                >
                  {creatingFolder ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    "Create"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Breadcrumb navigation */}
      <BreadcrumbNav paths={pathSegments} onNavigate={handleNavigate} />

      {/* Main content area */}
      <Card className="flex-grow overflow-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
          </div>
        ) : filteredFolders.length === 0 && filteredFiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
            <FileQuestion className="w-16 h-16 mb-4" />
            <p>No files or folders found</p>
            {searchQuery && <p>Try a different search term</p>}
          </div>
        ) : (
          <div
            className={`p-4 ${
              viewMode === "grid"
                ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
                : "space-y-2"
            }`}
          >
            {/* Folders section */}
            {filteredFolders.map((folder) => (
              <div
                key={folder.key}
                onClick={() => handleItemClick(folder)}
                className={`
                  cursor-pointer rounded-lg transition-colors
                  ${
                    viewMode === "grid"
                      ? "flex flex-col items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      : "flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
              >
                <FileIcon
                  type="folder"
                  isFolder={true}
                  size={viewMode === "grid" ? 48 : 24}
                />
                <span
                  className={`
                  truncate
                  ${viewMode === "grid" ? "mt-2 text-center w-full" : "ml-2"}
                `}
                >
                  {folder.name}
                </span>
              </div>
            ))}

            {/* Files section */}
            {filteredFiles.map((file) => (
              <div
                key={file.key}
                onClick={() => handleItemClick(file)}
                className={`
                  cursor-pointer rounded-lg transition-colors
                  ${
                    selectedItem?.key === file.key
                      ? "bg-blue-100 dark:bg-blue-900"
                      : ""
                  }
                  ${
                    viewMode === "grid"
                      ? "flex flex-col items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      : "flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
              >
                <FileIcon
                  type={file.type}
                  extension={file.extension}
                  size={viewMode === "grid" ? 48 : 24}
                />
                <div
                  className={`
                  ${
                    viewMode === "grid"
                      ? "mt-2 text-center w-full"
                      : "ml-2 flex-grow"
                  }
                `}
                >
                  <span className="truncate block">{file.name}</span>
                  {viewMode === "list" && (
                    <span className="text-xs text-gray-500">
                      {file.size ? `${Math.round(file.size / 1024)} KB` : ""}
                      {file.lastModified
                        ? ` • ${new Date(
                            file.lastModified
                          ).toLocaleDateString()}`
                        : ""}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Action bar for selected file */}
      {selectedItem && !selectedItem.isFolder && (
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
          <div className="flex items-center">
            <FileIcon
              type={selectedItem.type}
              extension={selectedItem.extension}
              size={24}
            />
            <span className="ml-2 truncate">{selectedItem.name}</span>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" onClick={handleDownloadFile}>
              <Download className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="ghost" onClick={handleDeleteFile}>
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
