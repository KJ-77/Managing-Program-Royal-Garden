// Different file type icons
import {
  File,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileSpreadsheet,
  FileArchive,
  Folder,
} from "lucide-react";

interface FileIconProps {
  type: string;
  extension?: string;
  isFolder?: boolean;
  size?: number;
  className?: string;
}

/**
 * Component to display the appropriate icon for a file based on its type/extension
 */
export function FileIcon({
  type,
  extension,
  isFolder = false,
  size = 24,
  className = "",
}: FileIconProps) {
  // If it's a folder, use the folder icon
  if (isFolder) {
    return <Folder size={size} className={`text-blue-500 ${className}`} />;
  }

  // Determine icon based on file type or extension
  switch (true) {
    // Images
    case type.startsWith("image/") ||
      ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"].includes(
        extension || ""
      ):
      return (
        <FileImage size={size} className={`text-green-500 ${className}`} />
      );

    // PDFs
    case type === "application/pdf" || extension === "pdf":
      return <File size={size} className={`text-red-500 ${className}`} />;

    // Text files
    case type.startsWith("text/") ||
      ["txt", "md", "rtf"].includes(extension || ""):
      return <FileText size={size} className={`text-gray-500 ${className}`} />;

    // Spreadsheets
    case ["xls", "xlsx", "csv"].includes(extension || "") ||
      [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ].includes(type):
      return (
        <FileSpreadsheet
          size={size}
          className={`text-green-700 ${className}`}
        />
      );

    // Code files
    case [
      "js",
      "jsx",
      "ts",
      "tsx",
      "html",
      "css",
      "java",
      "py",
      "c",
      "cpp",
    ].includes(extension || ""):
      return (
        <FileCode size={size} className={`text-purple-500 ${className}`} />
      );

    // Archive files
    case ["zip", "rar", "7z", "tar", "gz"].includes(extension || ""):
      return (
        <FileArchive size={size} className={`text-amber-600 ${className}`} />
      );

    // Video files
    case type.startsWith("video/") ||
      ["mp4", "avi", "mov", "wmv", "flv", "webm"].includes(extension || ""):
      return <FileVideo size={size} className={`text-blue-600 ${className}`} />;

    // Audio files
    case type.startsWith("audio/") ||
      ["mp3", "wav", "ogg", "flac"].includes(extension || ""):
      return (
        <FileAudio size={size} className={`text-yellow-500 ${className}`} />
      );

    // Default file icon
    default:
      return <File size={size} className={`text-gray-400 ${className}`} />;
  }
}
