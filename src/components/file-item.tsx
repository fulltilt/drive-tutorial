import { FileText } from "lucide-react"

interface FileItemProps {
  file: {
    id: string
    name: string
    url: string
  }
}

export default function FileItem({ file }: FileItemProps) {
  return (
    <a
      href={file.url}
      className="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50 transition-colors duration-200 block"
    >
      <FileText className="w-8 h-8 text-gray-500 mb-2" />
      <p className="text-sm font-medium truncate">{file.name}</p>
    </a>
  )
}

