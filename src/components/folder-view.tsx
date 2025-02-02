"use client";

import { useState } from "react";
import { ChevronRight, Folder, FileText, Upload } from "lucide-react";
import { Button } from "~/components/ui/button";

// Mock data
const mockData = {
  root: {
    name: "My Drive",
    items: [
      { id: "folder1", name: "Documents", type: "folder" },
      { id: "folder2", name: "Images", type: "folder" },
      { id: "file1", name: "Report.pdf", type: "file", url: "#" },
      { id: "file2", name: "Presentation.pptx", type: "file", url: "#" },
    ],
  },
  folder1: {
    name: "Documents",
    items: [
      { id: "file3", name: "Resume.docx", type: "file", url: "#" },
      { id: "file4", name: "Budget.xlsx", type: "file", url: "#" },
    ],
  },
  folder2: {
    name: "Images",
    items: [
      { id: "file5", name: "Vacation.jpg", type: "file", url: "#" },
      { id: "file6", name: "Profile.png", type: "file", url: "#" },
    ],
  },
};

export default function FolderView({ folderId }: { folderId: string }) {
  const [folderPath, setFolderPath] = useState([
    { id: folderId, name: mockData[folderId as keyof typeof mockData].name },
  ]);

  const currentFolder =
    mockData[folderPath[folderPath.length - 1].id as keyof typeof mockData];

  const handleFolderClick = (newFolderId: string, folderName: string) => {
    setFolderPath([...folderPath, { id: newFolderId, name: folderName }]);
  };

  const handleBreadcrumbClick = (index: number) => {
    setFolderPath(folderPath.slice(0, index + 1));
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        {folderPath.map((folder, index) => (
          <div key={folder.id} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            )}
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white"
              onClick={() => handleBreadcrumbClick(index)}
            >
              {folder.name}
            </Button>
          </div>
        ))}
        <Button className="mb-4">
          <Upload className="mr-2 h-4 w-4" /> Upload
        </Button>
      </div>
      <div className="overflow-hidden rounded-lg bg-gray-800 shadow">
        <div className="bg-gray-700 px-4 py-3 font-medium text-gray-200">
          Name
        </div>
        <ul>
          {currentFolder.items.map((item) => (
            <li
              key={item.id}
              className="border-b border-gray-700 last:border-b-0"
            >
              {item.type === "folder" ? (
                <button
                  className="flex w-full items-center px-4 py-3 transition-colors duration-200 hover:bg-gray-700"
                  onClick={() => handleFolderClick(item.id, item.name)}
                >
                  <Folder className="mr-3 h-5 w-5 text-blue-400" />
                  <span>{item.name}</span>
                </button>
              ) : (
                <a
                  href={item.url}
                  className="flex w-full items-center px-4 py-3 transition-colors duration-200 hover:bg-gray-700"
                >
                  <FileText className="mr-3 h-5 w-5 text-gray-400" />
                  <span>{item.name}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
