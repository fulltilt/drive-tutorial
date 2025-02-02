import { Folder } from "lucide-react"

interface FolderItemProps {
  folder: {
    id: string
    name: string
  }
  onClick: () => void
}

export default function FolderItem({ folder, onClick }: FolderItemProps) {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
    >
      <Folder className="w-8 h-8 text-blue-500 mb-2" />
      <p className="text-sm font-medium truncate">{folder.name}</p>
    </div>
  )
}

