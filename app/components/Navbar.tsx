import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { container, interactive } from "../lib/styles";

export default function Navbar() {
  return (
    <header className={`flex h-[68px] items-center justify-between min-[701px]:h-16 ${container}`}>
      <Link href="/" className={`inline-flex min-h-11 items-center gap-[11px] text-sm font-normal tracking-[2.5px] uppercase min-[701px]:text-base min-[701px]:tracking-[3px] ${interactive}`} aria-label="Muneeb — Home">
        <span className="size-[7px] rounded-full bg-[#737580] [html[data-theme=dark]_&]:bg-[#94949f]" aria-hidden="true" />Muneeb
      </Link>
      <ThemeToggle />
    </header>
  );
}
