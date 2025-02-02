import type React from "react"
import Sidebar from "./sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto p-4">{children}</main>
    </div>
  )
}

