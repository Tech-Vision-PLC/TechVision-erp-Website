"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-[120px]" />;
  }

  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
          theme === "light"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Use light theme"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
          theme === "dark"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Use dark theme"
      >
        <Moon className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        className={`flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
          theme === "system"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Use system theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}