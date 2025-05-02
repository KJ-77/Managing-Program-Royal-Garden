import React from "react";
import { ChevronRight, Home } from "lucide-react";

interface PathSegment {
  name: string;
  path: string;
}

interface BreadcrumbNavProps {
  paths: PathSegment[]; // Updated to accept objects instead of strings
  onNavigate: (path: string) => void;
}

export function BreadcrumbNav({ paths, onNavigate }: BreadcrumbNavProps) {
  return (
    <div className="flex items-center gap-1 px-2 py-3 overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
      {/* Home/root button */}
      <button
        onClick={() => onNavigate("")}
        className="flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded"
      >
        <Home size={18} className="mr-1" />
        <span>Home</span>
      </button>

      {/* Show breadcrumbs only if we're in a subfolder */}
      {paths.length > 0 && (
        <>
          <ChevronRight size={16} className="text-gray-500" />

          {/* Map through path segments to create breadcrumb trail */}
          {paths.map((segment, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => onNavigate(segment.path)}
                className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded whitespace-nowrap"
              >
                {segment.name}
              </button>

              {/* Add separator between segments, except for the last one */}
              {index < paths.length - 1 && (
                <ChevronRight size={16} className="text-gray-500" />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
}
