"use client"; // Required if this component handles interactive hover transitions or client-side video methods later

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string; // This will receive your video string ("/feral-overview.mp4") or image string
  tags: string[];
  liveUrl: string;
  caseStudyUrl?: string;
  isComingSoon?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  caseStudyUrl,
  isComingSoon = false,
}: ProjectCardProps) {
  // Check if the media path points to a video file
  const isVideo = image.endsWith(".mp4");

  if (isComingSoon) {
    return (
      <div className="border-4 border-dashed border-[#1c2826]/40 bg-[#faf6ee]/60 p-8 flex flex-col items-center justify-center text-center min-h-[360px] group hover:bg-[#ea9e8d]/30 transition-colors duration-300">
        <span className="text-6xl opacity-30 mb-6">〰️</span>
        <h3 className="font-black text-3xl text-[#1c2826]/50 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[#1c2826]/40 mt-3 max-w-md">
          {description}
        </p>
        <p className="mt-8 text-xs font-bold uppercase tracking-widest text-[#d64550]">
          • Ink still wet — coming soon •
        </p>
      </div>
    );
  }

  return (
    <div className="group border-4 border-[#1c2826] bg-[#faf6ee] transition-colors duration-300 hover:bg-[#ea9e8d]">
      {/* Dynamic Asset Block – large, full width */}
      <div className="aspect-[16/9] overflow-hidden border-b-4 border-[#1c2826] bg-[#1c2826]">
        {isVideo ? (
          <video
            src={image}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        )}
      </div>

      {/* Content block */}
      <div className="p-6 md:p-8 flex flex-col justify-between min-h-[260px]">
        <div>
          {/* Title + year / label */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-[#1c2826]">
              {title}
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#d64550] opacity-60">
              PRODUCTION
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-[#1c2826]/70 leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 border border-[#1c2826]/30 text-[#1c2826]/60 group-hover:border-[#1c2826]/60 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons row */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {/* Live site button – primary */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#1c2826] text-white text-xs font-black uppercase tracking-wider py-4 px-4 border-2 border-[#1c2826] hover:bg-[#d64550] hover:border-[#d64550] transition-colors shadow-[3px_3px_0px_0px_#ea9e8d]"
          >
            Live Site ↗
          </a>

          {/* Case study link (optional) */}
          {caseStudyUrl && (
            <Link
              href={caseStudyUrl}
              className="flex-1 text-center border-2 border-[#1c2826] text-[#1c2826] text-xs font-black uppercase tracking-wider py-4 px-4 hover:bg-[#1c2826] hover:text-white transition-colors"
            >
              Case Study
            </Link>
          )}
        </div>

        {/* Bottom seal */}
        <div className="flex items-center justify-end mt-5">
          <div className="w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 100" className="text-[#d64550]">
              <rect
                x="15"
                y="15"
                width="70"
                height="70"
                rx="8"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
              />
              <text
                x="50"
                y="65"
                textAnchor="middle"
                fill="currentColor"
                fontSize="36"
                fontWeight="bold"
              >
                SB
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}