"use client"
import { useTheme } from "next-themes"

export default function ClientThemeTest() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 bg-card p-4 rounded-md shadow-lg z-50">
      <p className="text-sm mb-2">
        Debug: Current theme is <strong>{theme}</strong>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setTheme("light")}
          className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded"
        >
          Force Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded"
        >
          Force Dark
        </button>
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark")
            console.log("Toggled dark class manually")
          }}
          className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded"
        >
          Toggle Class
        </button>
      </div>
    </div>
  )
}

