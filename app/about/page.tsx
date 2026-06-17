"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf6ee] text-[#1c2826] font-sans antialiased selection:bg-[#500b0b] selection:text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        {/* ─── HERO SECTION ─── */}
        <section className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#500b0b] uppercase block">
              // CORE ARCHITECT MANIFEST
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-[#1c2826] leading-[0.9] text-balance">
              Shafayet Rahman
            </h1>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1c2826]/90 font-serif italic pt-1">
              Young and ambitious upcoming engineer
            </h2>
          </div>
          
          <div className="w-20 h-[4px] bg-[#1c2826]" />
          
          <p className="text-base md:text-lg text-[#1c2826]/80 leading-relaxed font-medium max-w-2xl pt-2">
            Starting with artistic and systemically secure fully fledged complete scale web solutions 
            that work flawlessly while being secure and also pleasing to gaze at.
          </p>
        </section>

        {/* ─── PREMIUM HOBBIES SECTION ─── */}
        <section className="space-y-8">
          <div className="border-b-2 border-[#1c2826] pb-2">
            <h3 className="text-3xl font-black uppercase tracking-tight font-serif">Hobbies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track 01: Programming */}
            <div className="border-l-2 border-b-2 border-[#1c2826] p-6 bg-[#fffdfa] shadow-[2px_2px_0px_0px_rgba(28,40,38,0.05)] space-y-4 hover:border-[#500b0b] transition-colors duration-300">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#500b0b] uppercase block">
                  // 01 . CORE DEVELOPMENT
                </span>
                <span className="text-[10px] font-mono opacity-30">01 // 04</span>
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight text-[#1c2826]">Programming</h4>
              <p className="text-sm text-[#1c2826]/80 leading-relaxed">
                Deep-diving into high-leverage frameworks and logic engines built for deployment speed and maximum monetization.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Full-Stack Engineering", "Web Scraping Automation", "Data Pipelines", "Creative Coding / Shaders"].map((branch) => (
                  <span key={branch} className="text-[9px] font-mono font-bold uppercase bg-[#1c2826] text-[#faf6ee] px-2 py-0.5">
                    {branch}
                  </span>
                ))}
              </div>
            </div>

            {/* Track 02: Academics */}
            <div className="border-l-2 border-b-2 border-[#1c2826] p-6 bg-[#fffdfa] shadow-[2px_2px_0px_0px_rgba(28,40,38,0.05)] space-y-3 hover:border-[#500b0b] transition-colors duration-300">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#500b0b] uppercase block">
                  // 02 . ACADEMICS & NARRATIVE
                </span>
                <span className="text-[10px] font-mono opacity-30">02 // 04</span>
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight text-[#1c2826]">Theory & Exploration</h4>
              <p className="text-sm text-[#1c2826]/80 leading-relaxed">
                Studying foundational math and complex physics to sharpen systemic problem-solving skills, paired with regular fiction reading and analytical writing.
              </p>
            </div>

            {/* Track 03: Athletics */}
            <div className="border-l-2 border-b-2 border-[#1c2826] p-6 bg-[#fffdfa] shadow-[2px_2px_0px_0px_rgba(28,40,38,0.05)] space-y-3 hover:border-[#500b0b] transition-colors duration-300">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#500b0b] uppercase block">
                  // 03 . KINETIC ENERGY
                </span>
                <span className="text-[10px] font-mono opacity-30">03 // 04</span>
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight text-[#1c2826]">Athletics & Combat</h4>
              <p className="text-sm text-[#1c2826]/80 leading-relaxed">
                Maintaining mental intensity and high physical output through regular boxing training, football matches, and focused calisthenics/strength exercises.
              </p>
            </div>

            {/* Track 04: Production */}
            <div className="border-l-2 border-b-2 border-[#1c2826] p-6 bg-[#fffdfa] shadow-[2px_2px_0px_0px_rgba(28,40,38,0.05)] space-y-3 hover:border-[#500b0b] transition-colors duration-300">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#500b0b] uppercase block">
                  // 04 . AUDIO & VISUAL ART
                </span>
                <span className="text-[10px] font-mono opacity-30">04 // 04</span>
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight text-[#1c2826]">Creative Production</h4>
              <p className="text-sm text-[#1c2826]/80 leading-relaxed">
                Translating concepts across mediums through vocal tracking, custom music composition, digital audio processing, and fine sketching.
              </p>
            </div>
          </div>
        </section>

        {/* ─── WORK HISTORY SECTION ─── */}
        <section className="space-y-12">
          <div className="border-b-2 border-[#1c2826] pb-2">
            <h3 className="text-3xl font-black uppercase tracking-tight font-serif">Work History</h3>
          </div>

          <div className="max-w-4xl">
            <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
              
              {/* Left Column: Structural Vector Line with explicit gap */}
              <div className="col-span-4 md:col-span-4 h-32 relative self-start mt-2">
                <div className="absolute top-0 left-0 w-[2px] h-[calc(100%-8px)] bg-[#1c2826]" />
                <div className="absolute bottom-0 left-[8px] w-full h-[2px] bg-[#1c2826]" />
              </div>
              
              {/* Right Column: Punchy Baby Blue Card */}
              <a 
                href="https://feralbd.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-8 md:col-span-8 block bg-[#cbd5f0] text-[#1c2826] p-6 md:p-8 border-2 border-[#1c2826] shadow-[6px_6px_0px_0px_#1c2826] hover:shadow-[12px_12px_0px_0px_#1c2826] hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group select-none"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#1c2826] group-hover:text-[#500b0b] transition-colors duration-300">
                    FERAL <span className="text-sm font-normal opacity-40 group-hover:opacity-100 inline-block transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                  </h4>
                  <span className="text-[9px] font-mono font-bold bg-[#1c2826] text-[#faf6ee] px-2.5 py-1 uppercase tracking-widest whitespace-nowrap shadow-[2px_2px_0px_0px_#500b0b]">
                    ACTIVE PRODUCTION
                  </span>
                </div>
                
                <p className="text-xs md:text-sm text-[#1c2826]/90 leading-relaxed max-w-xl font-medium">
                  Complete production eCommerce ecosystem engineered for a Dhaka-based streetwear brand. 
                  Built natively from the ground up to handle high-volume product matrix assets, fluid user transitions, 
                  and secure storage architectures.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-5 opacity-90">
                  {["Next.js", "Supabase", "Tailwind"].map((tag) => (
                    <span key={tag} className="text-[9px] font-mono font-bold uppercase bg-[#1c2826]/10 px-2.5 py-0.5 border border-[#1c2826]/20 text-[#1c2826]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* ─── NAVIGATION FOOTER ─── */}
        <footer className="pt-12 border-t border-[#1c2826]/20 flex justify-between items-center text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase select-none">
          <a href="/projects" className="flex items-center gap-2 group text-[#1c2826] hover:text-[#500b0b] transition-colors duration-300">
            <span className="transform inline-block group-hover:-translate-x-1.5 transition-transform duration-300 ease-out text-lg leading-none">←</span> 
            PROJECTS
          </a>
          <a href="/blog" className="flex items-center gap-2 group text-[#1c2826] hover:text-[#500b0b] transition-colors duration-300">
            BLOG 
            <span className="transform inline-block group-hover:translate-x-1.5 transition-transform duration-300 ease-out text-lg leading-none">→</span>
          </a>
        </footer>

      </div>
    </div>
  );
}