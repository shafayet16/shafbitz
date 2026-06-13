"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf6ee] text-[#1c2826] flex flex-col font-sans selection:bg-[#d64550] selection:text-white relative">
      {/* ─── MAIN MANGA MATRIX CONTAINER ───────────────────────────────── */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 z-10 my-4 md:my-12">
        {/* Mobile stack uses a transparent gap column. Desktop uses the tight grid framework */}
        <div className="max-w-4xl w-full flex flex-col gap-4 md:gap-1 md:border-4 md:border-[#1c2826] md:bg-[#1c2826] md:shadow-[8px_8px_0px_0px_#1c2826]">
          
          {/* ─── PIECE 2: MAIN HERO PANEL (100% Mobile Width Stack) ───────── */}
          <motion.div 
            className="w-full bg-[#faf6ee] p-6 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px] border-2 border-[#1c2826] shadow-[4px_4px_0px_0px_#1c2826] md:border-0 md:shadow-none transition-colors duration-300 ease-in-out hover:bg-[#ea9e8d] group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-[10px] md:text-[11px] font-bold tracking-wider text-[#1c2826]/60 uppercase gap-2">
              <span>// SELECTED PORTFOLIO & CREATIVE WORK</span>
              <span className="text-[#d64550] group-hover:text-[#1c2826]">
                AVAILABILITY: OPEN FOR CONTRACTS
              </span>
            </div>

            <div className="my-6 md:my-8 space-y-4">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[1.1] break-words">
                Shafayet Rahman
              </h1>
              <p className="text-sm md:text-lg font-medium max-w-2xl leading-relaxed text-[#1c2826]/80">
                I craft immaculate, visually‑driven designs that don’t just look beautiful — 
                they perform. Under the hood, I engineer secure, high‑performance web platforms 
                that turn complex business requirements into clear, measurable results. 
                Creative precision meets full‑stack power. Zero fluff.
              </p>
            </div>

            <div className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#1c2826]/50 uppercase group-hover:text-[#1c2826]/80 pt-2 border-t border-[#1c2826]/10 md:border-t-0">
              BUILDING SYSTEMS THAT YOUR BUSINESS CAN TRUST — AND CLIENTS LOVE TO LOOK AT
            </div>
          </motion.div>

          {/* INNER ROW RESPONSIVE PIPELINE */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-10 md:gap-1 md:bg-[#1c2826]">
            
            {/* ─── PIECE 3: STACK & INFO PANEL (100% Mobile Width | 70% Desktop) ─── */}
            <motion.div 
              className="w-full md:col-span-7 bg-[#faf6ee] p-5 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[220px] border-2 border-[#1c2826] shadow-[4px_4px_0px_0px_#1c2826] md:border-0 md:shadow-none transition-colors duration-300 ease-in-out hover:bg-[#ea9e8d] group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              <div className="space-y-3">
                <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-[#1c2826]/60 block">
                  // CORE PARTNERSHIP MODEL
                </span>
                <p className="text-xl md:text-3xl font-black italic tracking-tight text-[#d64550] group-hover:text-[#1c2826] transition-colors duration-200 leading-tight">
                  “Addicted To Curiosity.”
                </p>
                <p className="text-xs md:text-sm font-medium text-[#1c2826]/70 max-w-xl">
                  Your business goals become my engineering roadmap.
                </p>
              </div>

              <div className="border-t-2 border-[#1c2826] pt-4 mt-4">
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-40 block mb-1">
                  CURRENT STACK
                </span>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-tight leading-normal">
                  Next.js · GSAP · React Three Fiber · GLSL · Supabase · Python · TypeScript
                </p>
              </div>
            </motion.div>

            {/* ─── PIECE 4: CTA DIRECTORY PANEL (100% Mobile Width | 30% Desktop) ─── */}
            <motion.div 
              className="w-full md:col-span-3 bg-[#faf6ee] p-5 md:p-6 flex flex-col justify-between min-h-[200px] md:min-h-[220px] border-2 border-[#1c2826] shadow-[4px_4px_0px_0px_#1c2826] md:border-0 md:shadow-none transition-colors duration-300 ease-in-out hover:bg-[#ea9e8d] group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
            >
              <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-[#1c2826]/60 block">
                // GET IN TOUCH
              </span>

              <div className="my-auto py-2 space-y-3 w-full">
                <Link
                  href="/projects"
                  className="w-full text-center block bg-[#1c2826] text-white text-xs font-black uppercase tracking-wider py-3 md:py-4 px-2 border-2 border-[#1c2826] hover:bg-[#d64550] hover:border-[#d64550] transition-colors duration-200 shadow-[3px_3px_0px_0px_#ea9e8d] md:shadow-[4px_4px_0px_0px_#ea9e8d] group-hover:shadow-[3px_3px_0px_0px_#1c2826]"
                >
                  View Projects
                </Link>
                <p className="text-[9px] md:text-[10px] font-medium text-[#1c2826]/60 text-center">
                  Browse my latest creative work & case studies.
                </p>
              </div>

              <div className="text-[9px] md:text-[10px] font-bold tracking-widest opacity-50 uppercase group-hover:opacity-100 transition-opacity pt-2 border-t border-[#1c2826]/10 md:border-t-0">
                IMMACULATE EXECUTION
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
              © 2026 ALL RIGHTS RESERVED. HIGH‑PERFORMANCE DEPLOYMENTS.
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
//fix animation and add sound effects 