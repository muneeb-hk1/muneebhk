"use client";

import { useSyncExternalStore } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { interactive, muted } from "../lib/styles";

const eventName = "portfolio-theme-change";
function subscribe(callback: () => void) {
  window.addEventListener(eventName, callback);
  return () => window.removeEventListener(eventName, callback);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme || "dark", () => "dark");
  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("portfolio-theme", nextTheme); } catch { /* Switching still works without storage. */ }
    window.dispatchEvent(new Event(eventName));
  }
  return (
    <button className={`grid size-11 cursor-pointer place-items-center border-0 bg-transparent ${muted} ${interactive}`} type="button" onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
      <FiSun className="hidden size-5 stroke-[1.7] [html[data-theme=dark]_&]:block" aria-hidden="true" />
      <FiMoon className="size-5 stroke-[1.7] [html[data-theme=dark]_&]:hidden" aria-hidden="true" />
    </button>
  );
}
