import { Upload } from "lucide-react"
import { Button } from "~/components/ui/button"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow">
      <h1 className="text-2xl font-bold mb-4">My Drive</h1>
      <Button className="w-full mb-4">
        <Upload className="mr-2 h-4 w-4" /> Upload
      </Button>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              My Drive
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Shared with me
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Recent
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

