"use client"; // needed for mobile menu later

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#ea9e8d]">
      <div className="flex items-center justify-between bg-[#1c2826] px-6 py-4 text-white">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Shafbitz
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <Link
            href="/projects"
            className="px-3 py-2 rounded transition hover:bg-[#d64550] hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="px-3 py-2 rounded transition hover:bg-[#d64550] hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded transition hover:bg-[#d64550] hover:text-white"
          >
            About
          </Link>
        </nav>

        {/* Hamburger placeholder (for mobile menu later) */}
        <button className="md:hidden text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}