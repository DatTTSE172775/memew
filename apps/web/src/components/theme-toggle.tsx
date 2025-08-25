"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="px-3 py-2 rounded border bg-card text-card-foreground">
        Loading...
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      className="px-3 py-2 rounded border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
