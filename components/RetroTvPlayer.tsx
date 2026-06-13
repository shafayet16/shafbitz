"use client";

import { useState, useRef } from "react";

interface RetroTvPlayerProps {
  src: string;
  alt: string;
  isVideo: boolean;
}

export default function RetroTvPlayer({ src, alt, isVideo }: RetroTvPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlaybackToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasPlayed(true);
    }
  };

  if (!isVideo) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden border-4 border-[#1c2826] bg-[#1c2826]">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div 
      onClick={handlePlaybackToggle}
      className="relative aspect-[16/9] w-full overflow-hidden border-4 border-[#1c2826] bg-black cursor-pointer select-none group"
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.005]"
      />

      {/* ─── RETRO OVERLAY STATES ────────────────────────────────────── */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center backdrop-blur-[1px] transition-all duration-300">
          <div className="flex flex-col items-center gap-3 scale-95 group-hover:scale-100 transition-transform duration-200">
            {/* Clean Mechanical Play Token */}
            <div className="w-14 h-14 bg-[#faf6ee] border-4 border-[#1c2826] flex items-center justify-center shadow-[4px_4px_0px_0px_#d64550] group-hover:shadow-[4px_4px_0px_0px_#1c2826] transition-all">
              <span className="text-[#1c2826] text-xl ml-1">▶</span>
            </div>
          </div>
        </div>
      )}

      {/* VCR Status Bug (Only displays when running active feed) */}
      {isPlaying && (
        <div className="absolute top-4 left-4 pointer-events-none font-mono text-[10px] text-[#faf6ee] tracking-widest bg-[#1c2826]/90 px-2 py-1 border border-[#faf6ee]/10 flex items-center gap-2">
          <span className="text-[#d64550] animate-pulse">●</span>
          <span>PLAY</span>
        </div>
      )}

      {/* CRT Targeting Crosshairs */}
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#faf6ee]/30 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#faf6ee]/30 pointer-events-none" />

      {/* Subtle CRT Scanline Texture Layer */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.12)_50%)] bg-[length:100%_4px]" />
    </div>
  );
}