"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <div
        className="theme-surface theme-border h-10 w-10 rounded-full border"
        aria-hidden="true"
        />
    );
  }

  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-surface theme-border theme-text flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-violet-500 hover:text-violet-500"
      aria-label={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
      title={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}