import { notFound } from "next/navigation";
import { projects } from "../../../lib/project";
import Link from "next/link";
import RetroTvPlayer from "../../../components/RetroTvPlayer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const isVideo = project.media?.endsWith(".mp4");

  if (project.isComingSoon) {
    return (
      <div className="min-h-screen bg-[#faf6ee] flex items-center justify-center p-4 selection:bg-[#d64550] selection:text-white">
        <div className="border-[6px] border-[#1c2826] bg-[#faf6ee] p-8 md:p-12 text-center max-w-lg shadow-[8px_8px_0px_0px_#1c2826] relative">
          <div className="absolute top-3 right-3 bg-[#d64550] text-white font-mono text-[9px] px-1.5 py-0.5 border border-[#1c2826] uppercase">
            STANDBY
          </div>
          <span className="text-5xl block select-none">〰️</span>
          <h1 className="font-black text-3xl text-[#1c2826] uppercase mt-6 tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xs md:text-sm font-medium text-[#1c2826]/60 mt-3 leading-relaxed">
            {project.longDescription}
          </p>
          <div className="mt-8 pt-4 border-t-2 border-dashed border-[#1c2826]/20">
            <p className="text-xs font-black uppercase tracking-widest text-[#d64550]">
              // ARCHIVE MATRIX LOCKED
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf6ee] text-[#1c2826] flex flex-col font-sans selection:bg-[#d64550] selection:text-white">
      
      {/* Detail Hero Banner */}
      <section className="py-12 md:py-20 px-4 md:px-6 border-b-4 border-[#1c2826]">
        <div className="max-w-5xl mx-auto w-full">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-[#d64550] block tracking-tight">
              // DATA STREAM DEPLOYMENT
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.05] break-words">
              {project.title}
            </h1>
            <p className="text-sm md:text-base font-medium text-[#1c2826]/85 mt-4 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Terminal Frame Area */}
      <section className="py-10 md:py-16 px-4 md:px-6 flex-1">
        <div className="max-w-5xl mx-auto w-full">
          
          {/* Outer Heavy TV Box Wrapper */}
          <div className="border-4 md:border-[6px] border-[#1c2826] bg-[#1c2826] shadow-[8px_8px_0px_0px_#1c2826]">
            <div className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4">
              
              {/* Left Column: Screen Display */}
              <div className="flex-1 flex flex-col">
                <div className="w-full text-[#faf6ee]/60 text-[9px] font-mono uppercase tracking-widest pb-2 flex justify-between items-center px-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d64550]" />
                    <span className="font-bold text-[#faf6ee]">CHANNEL_0{currentIndex + 1} // SYS_FEED</span>
                  </div>
                  <span>MONITOR OUTPUT</span>
                </div>

                <RetroTvPlayer src={project.media} alt={project.title} isVideo={isVideo} />
              </div>

              {/* Right Column: Tactile Hardware Control Column */}
              <div className="w-full md:w-16 bg-[#faf6ee] border-4 border-[#1c2826] p-3 md:py-5 flex flex-row md:flex-col justify-between items-center gap-4 select-none">
                
                {/* Mechanical Control Dials */}
                <div className="flex flex-row md:flex-col gap-4 items-center">
                  {/* Dial 1 */}
                  <div className="w-7 h-7 rounded-full border-4 border-[#1c2826] bg-[#1c2826]/5 relative rotate-[45deg] shadow-inner">
                    <div className="w-1 h-2.5 bg-[#1c2826] absolute top-0 left-1/2 -translate-x-1/2" />
                  </div>
                  {/* Dial 2 */}
                  <div className="w-7 h-7 rounded-full border-4 border-[#1c2826] bg-[#1c2826]/5 relative rotate-[135deg] shadow-inner">
                    <div className="w-1 h-2.5 bg-[#1c2826] absolute top-0 left-1/2 -translate-x-1/2" />
                  </div>
                </div>

                {/* Ventilation Speaker Mesh Grill */}
                <div className="hidden md:flex flex-col gap-1 w-full px-1 opacity-40">
                  <div className="h-0.5 bg-[#1c2826] w-full" />
                  <div className="h-0.5 bg-[#1c2826] w-full" />
                  <div className="h-0.5 bg-[#1c2826] w-full" />
                  <div className="h-0.5 bg-[#1c2826] w-full" />
                </div>

                {/* Sub‑Panel Power Node */}
                <div className="flex items-center gap-2 md:flex-col">
                  <span className="text-[8px] font-mono font-bold text-[#1c2826]/50 tracking-tighter uppercase">PWR</span>
                  <div className="w-4 h-4 bg-[#d64550] border-2 border-[#1c2826] shadow-[1px_1px_0px_0px_#1c2826]" />
                </div>
              </div>

            </div>

            {/* Bottom Content Area Info Blocks */}
            <div className="p-6 md:p-10 bg-[#faf6ee] border-t-4 border-[#1c2826]">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-8 items-start">
                
                <div className="md:col-span-7 space-y-4">
                  <span className="text-[10px] font-bold tracking-wider text-[#1c2826]/40 block uppercase">
                    // ARCHITECTURE DEPLOYMENT SPECIFICATION
                  </span>
                  <p className="text-sm md:text-base font-medium leading-relaxed whitespace-pre-line text-[#1c2826]/90">
                    {project.longDescription}
                  </p>
                </div>

                <div className="md:col-span-3 border-t-2 md:border-t-0 md:border-l-2 border-[#1c2826] pt-6 md:pt-0 md:pl-6 space-y-5">
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#1c2826]/40 block mb-2">
                      CORE SPECIFICATIONS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-tight px-2 py-1 bg-[#1c2826] text-[#faf6ee] border border-[#1c2826]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center block bg-[#d64550] text-white text-xs font-black uppercase tracking-wider py-3.5 px-4 border-2 border-[#1c2826] hover:bg-[#1c2826] transition-colors shadow-[3px_3px_0px_0px_#1c2826]"
                    >
                      Launch Live Interface ↗
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Manga Row Navigation Elements */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-[#faf6ee] border-t-4 border-[#1c2826]">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#1c2826]/70 hover:text-[#d64550] transition-colors max-w-[40%] text-left"
            >
              <span className="text-xl md:text-2xl font-normal transition-transform group-hover:-translate-x-1">←</span>
              <span className="truncate border-b border-transparent group-hover:border-[#d64550] hidden sm:inline">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="w-10" />
          )}

          <Link
            href="/projects"
            className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#1c2826] px-4 py-2 border-2 border-[#1c2826] hover:bg-[#ea9e8d] transition-colors bg-[#faf6ee]"
          >
            BACK TO PROJECTS
          </Link>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#1c2826]/70 hover:text-[#d64550] transition-colors max-w-[40%] text-right"
            >
              <span className="truncate border-b border-transparent group-hover:border-[#d64550] hidden sm:inline">
                {nextProject.title}
              </span>
              <span className="text-xl md:text-2xl font-normal transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ) : (
            <div className="w-10" />
          )}
        </div>
      </section>
    </div>
  );
}