import FolderView from "~/components/folder-view"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <FolderView folderId="root" />
    </div>
  )
}

