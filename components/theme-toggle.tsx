"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center gap-3 px-4 py-2 w-full text-xs font-semibold text-muted-foreground opacity-0">
                <Sun className="h-4 w-4" />
                <span className="uppercase tracking-widest text-[9px]">Loading...</span>
            </div>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-3 px-4 py-2 w-full text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            title="Toggle theme"
        >
            <div className="flex items-center transition-transform group-hover:rotate-12">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
            <span className="uppercase tracking-widest text-[9px]">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
        </button>
    )
}
