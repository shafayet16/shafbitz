import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shafbitz — Portfolio",
  description: "Full‑stack developer & creative engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#faf6ee] text-[#1c2826] flex flex-col">
        {/* HEADER – now global */}
        <header className="sticky top-0 z-50 border-b-4 border-[#ea9e8d] bg-[#1c2826] text-white">
          <div className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto w-full">
            <Link
              href="/"
              className="text-xl md:text-2xl font-black tracking-tighter uppercase"
            >
              Shafbitz<span className="text-[#d64550]">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 md:gap-8 text-xs font-bold uppercase tracking-widest">
              <Link href="/projects" className="px-2 py-2 hover:text-[#ea9e8d] transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="px-2 py-2 hover:text-[#ea9e8d] transition-colors">
                Blog
              </Link>
              <Link href="/about" className="px-2 py-2 hover:text-[#ea9e8d] transition-colors">
                About
              </Link>
            </nav>

            <button className="md:hidden text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}