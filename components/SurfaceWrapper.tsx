"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SurfaceWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#FDFBF7] via-[#E2F0C8] to-[#BBD885] overflow-hidden">
      
      {/* Decorative Side Leaves */}
      <div className="absolute top-[10%] left-0 opacity-20 pointer-events-none">
        <svg width="120" height="200" viewBox="0 0 100 200" fill="#9CBF62">
          <path d="M0 50 C40 40 80 80 50 150 C20 120 0 90 0 50 Z" />
        </svg>
      </div>
      
      <div className="absolute top-[40%] right-0 opacity-20 pointer-events-none transform scale-x-[-1]">
        <svg width="150" height="250" viewBox="0 0 100 200" fill="#8EAD57">
          <path d="M0 50 C40 40 80 80 50 150 C20 120 0 90 0 50 Z" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-0 opacity-15 pointer-events-none">
        <svg width="100" height="150" viewBox="0 0 100 200" fill="#759344">
          <path d="M0 50 C40 40 80 80 50 150 C20 120 0 90 0 50 Z" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Smooth Wave Divider at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[1px]">
        {/* Match the wave SVG to the cream background of the Process section */}
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-12 md:h-24" fill="#FDFBF7">
          <path d="M0,120 L1440,120 L1440,70 C1080,130 720,10 360,70 C180,100 90,90 0,70 Z" />
        </svg>
      </div>

    </div>
  );
}
