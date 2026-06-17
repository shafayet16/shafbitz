import Link from "next/link";
import { projects } from "../../lib/project";  // relative import – no alias needed

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-[#faf6ee] text-[#1c2826] flex flex-col justify-between">
      
      {/* Upper Layout Wrapper */}
      <div>
        <section className="py-16 md:py-24 px-6 border-b-4 border-[#1c2826]">
          <div className="max-w-4xl mx-auto">
            <span className="text-[11px] font-bold tracking-widest text-[#1c2826]/60 uppercase">
              // Portfolio Index
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mt-4">
              Projects
            </h1>
            <p className="text-sm md:text-lg text-[#1c2826]/70 mt-4 max-w-xl">
              Select a project to view the full case study.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group border-4 border-[#1c2826] p-6 hover:bg-[#ea9e8d] transition-colors flex items-center justify-between"
              >
                <div>
                  <h2 className="font-black text-2xl uppercase tracking-tight">
                    {project.title}
                    {project.isComingSoon && (
                      <span className="ml-3 text-[10px] font-bold text-[#d64550] uppercase tracking-widest">
                        (Coming Soon)
                      </span>
                    )}
                  </h2>
                  <p className="text-sm text-[#1c2826]/60 mt-1">{project.description}</p>
                </div>
                <span className="text-[#d64550] text-2xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ─── PROJECTS NAVIGATION SYSTEM (Now nested inside the component block) ─── */}
      <footer className="max-w-4xl mx-auto w-full px-6 pt-12 pb-16 md:pb-24 border-t border-[#1c2826]/20 flex justify-between items-center text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase select-none">
        <Link 
          href="/" 
          className="flex items-center gap-2 group text-[#1c2826] hover:text-[#500b0b] transition-colors duration-300"
        >
          <span className="transform inline-block group-hover:-translate-x-1.5 transition-transform duration-300 ease-out text-lg leading-none">
            ←
          </span> 
          HOME
        </Link>
        <Link 
          href="/about" 
          className="flex items-center gap-2 group text-[#1c2826] hover:text-[#500b0b] transition-colors duration-300"
        >
          ABOUT 
          <span className="transform inline-block group-hover:translate-x-1.5 transition-transform duration-300 ease-out text-lg leading-none">
            →
          </span>
        </Link>
      </footer>

    </div>
  );
}//waka time works or nah