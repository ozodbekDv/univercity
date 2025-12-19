"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border px-3 py-2 text-sm
                 bg-white text-black
                 dark:bg-black dark:text-white"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
