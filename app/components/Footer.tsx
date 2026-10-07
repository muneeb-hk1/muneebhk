import Link from "next/link";
import { border, container, interactive, muted } from "../lib/styles";

export default function Footer() {
  return (
    <footer className={`mt-[65px] border-t pt-5 pb-9 ${container} ${border}`}>
      <nav className={`flex flex-wrap gap-x-7 gap-y-1 text-sm leading-[22px] ${muted}`} aria-label="Portfolio navigation">
        <Link className={`inline-flex min-h-11 items-center ${interactive}`} href="/">Home</Link>
        <Link className={`inline-flex min-h-11 items-center ${interactive}`} href="/tech">Skills</Link>
        <Link className={`inline-flex min-h-11 items-center ${interactive}`} href="/experience">Experience</Link>
        <Link className={`inline-flex min-h-11 items-center ${interactive}`} href="/projects">Projects</Link>
        <a className={`inline-flex min-h-11 items-center gap-1 ${interactive}`} href="https://wa.me/919569034040" target="_blank" rel="noopener noreferrer">Contact <span aria-hidden="true">↗</span></a>
      </nav>
    </footer>
  );
}
