"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf6ee] text-[#1c2826] flex flex-col font-sans selection:bg-[#d64550] selection:text-white relative">

      {/* ─── PIECE 1: NAVIGATION (100% Width) ──────────────────────────── */}
      <header className="sticky top-0 z-50 border-b-4 border-[#ea9e8d] bg-[#1c2826] text-white">
        <div className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto w-full">
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-tighter uppercase"
          >
            Shafbitz<span className="text-[#d64550]">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 md:gap-8 text-xs font-bold uppercase tracking-widest">
            <Link
              href="/projects"
              className="px-2 py-2 transition-colors duration-200 hover:text-[#ea9e8d]"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="px-2 py-2 transition-colors duration-200 hover:text-[#ea9e8d]"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-2 py-2 transition-colors duration-200 hover:text-[#ea9e8d]"
            >
              About
            </Link>
          </nav>

          <button className="md:hidden text-white font-bold text-xs uppercase tracking-widest">
            Menu
          </button>
        </div>
      </header>

      {/* ─── MAIN MANGA MATRIX CONTAINER ───────────────────────────────── */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 z-10 my-4 md:my-12">
        {/* On mobile, this wrapper is transparent with a gap. On desktop, it takes on the heavy outer frame */}
        <div className="max-w-4xl w-full flex flex-col gap-4 md:gap-1 md:border-4 md:border-[#1c2826] md:bg-[#1c2826] md:shadow-[8px_8px_0px_0px_#1c2826]">
          
          {/* ─── PIECE 2: MAIN HERO PANEL (100% Mobile Width Stack) ───────── */}
          <motion.div 
            className="w-full bg-[#faf6ee] p-5 sm:p-6 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[340px] border-2 border-[#1c2826] shadow-[4px_4px_0px_0px_#1c2826] md:border-0 md:shadow-none transition-colors duration-300 ease-in-out hover:bg-[#ea9e8d] group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[10px] md:text-[11px] font-bold tracking-wider text-[#1c2826]/60 uppercase gap-1">
              <span>// COMMERCIAL PORTFOLIO & CASE STUDIES</span>
              <span className="text-[#d64550] group-hover:text-[#1c2826]">
                AVAILABILITY: OPEN FOR MASTER CONTRACTS
              </span>
            </div>

            <div className="my-6 md:my-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.05] break-words">
                Shafayet Rahman
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed text-[#1c2826]/90">
                I engineer high-performance web applications that bridge elite creative direction with secure, enterprise-grade architecture. By transforming complex technical objectives into clean interactive assets, I build digital experiences designed to establish market authority, optimize performance, and maximize conversion metrics.
              </p>
            </div>

            <div className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#1c2826]/50 uppercase group-hover:text-[#1c2826]/80 pt-2 border-t border-[#1c2826]/10 md:border-t-0">
              ENGINEERING UNCOMPROMISING PRODUCTION INFRASTRUCTURE THAT DRIVES REAL REVENUE
            </div>
          </motion.div>

          {/* INNER ROW RESPONSIVE PIPELINE */}
          {/* On mobile, this container collapses into a vertical stack with a gap. On desktop, it acts as a cohesive grid layout */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-10 md:gap-1 md:bg-[#1c2826]">
            
            {/* ─── PIECE 3: STACK & INFO PANEL (100% Mobile Width | 70% Desktop) ─── */}
            <motion.div 
              className="w-full md:col-span-7 bg-[#faf6ee] p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[240px] border-2 border-[#1c2826] shadow-[4px_4px_0px_0px_#1c2826] md:border-0 md:shadow-none transition-colors duration-300 ease-in-out hover:bg-[#ea9e8d] group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className="space-y-2 md:space-y-3">
                <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-[#1c2826]/60 block">
                  // VALUE ARCHITECTURE
                </span>
                <p className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-tight text-[#d64550] group-hover:text-[#1c2826] transition-colors duration-200 leading-tight">
                  “Addicted To Curiosity.”
                </p>
                <p className="text-xs md:text-sm font-medium text-[#1c2826]/70 max-w-xl">
                  Strategic execution built entirely around conversion engineering and robust digital scaling.
                </p>
              </div>

              <div className="border-t-2 border-[#1c2826] pt-4 mt-6">
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-40 block mb-1">
                  CORE CAPABILITY SPECIFICATIONS
                </span>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-tight leading-normal">
                  Next.js · GSAP · React Three Fiber · GLSL · Supabase · Python · TypeScript
                </p>
              </div>
            </motion.div>

            {/* ─── PIECE 4: CTA DIRECTORY PANEL (100% Mobile Width | 30% Desktop) ─── */}
            <motion.div 
              className="w-full md:col-span-3 bg-[#faf6ee] p-5 sm:p-6 flex flex-col justify-between min-h-[200px] md:min-h-[240px] border-2 border-[#1c2826] shadow-[4px_4px_0px_0px_#1c2826] md:border-0 md:shadow-none transition-colors duration-300 ease-in-out hover:bg-[#ea9e8d] group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-[#1c2826]/60 block">
                // ACQUISITION
              </span>

              <div className="my-auto py-3 space-y-2 w-full">
                <Link
                  href="/projects"
                  className="w-full text-center block bg-[#1c2826] text-white text-xs font-black uppercase tracking-wider py-3.5 px-2 border-2 border-[#1c2826] hover:bg-[#d64550] hover:border-[#d64550] transition-colors duration-200 shadow-[3px_3px_0px_0px_#ea9e8d] md:shadow-[4px_4px_0px_0px_#ea9e8d] group-hover:shadow-[3px_3px_0px_0px_#1c2826]"
                >
                  Review Case Studies
                </Link>
                <p className="text-[9px] md:text-[10px] font-medium text-[#1c2826]/60 text-center">
                  Analyze high-conversion production deployments.
                </p>
              </div>

              <div className="text-[9px] md:text-[10px] font-bold tracking-widest opacity-50 uppercase group-hover:opacity-100 transition-opacity pt-2 border-t border-[#1c2826]/10 md:border-t-0">
                MAXIMUM VALUE REVENUE
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* ─── PIECE 5: EDITORIAL IMPRINT FOOTER (100% Width) ─────────────── */}
      <footer className="w-full bg-[#faf6ee] border-t-4 border-[#1c2826] py-8 md:py-10 px-4 md:px-6 mt-auto">
        <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Side Metadata */}
          <div className="flex flex-col gap-1 text-center sm:text-left text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-[#1c2826]/70">
            <div>SHAFAYET RAHMAN IMPRINT</div>
            <div className="text-[8px] md:text-[9px] font-medium opacity-50">
              © 2026 ALL RIGHTS RESERVED. DATA-DRIVEN ARCHITECTURE.
            </div>
          </div>

          {/* Right Side Red Publisher Stamp */}
          <div className="flex items-center gap-3 justify-center">
            <span className="hidden sm:inline text-[9px] font-mono opacity-40 uppercase tracking-widest">
             PORTFOLIO // 026
            </span>
            <div className="bg-[#d64550] text-white font-black text-[10px] md:text-[11px] p-2 leading-none border-2 border-[#1c2826] uppercase select-none tracking-tighter shadow-[3px_3px_0px_0px_#1c2826]">
              制作
              <br />
              確実
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}