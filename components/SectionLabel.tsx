import { motion } from "framer-motion";
import { T } from "@/context/ContentContext";
import React from "react";

interface SectionLabelProps {
  id: string;
  defaultText: string;
}

export default function SectionLabel({ id, defaultText }: SectionLabelProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center relative mb-6"
    >
      <div className="bg-[#2D7336] text-white px-5 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-widest pr-10 shadow-sm uppercase">
        <T id={id}>{defaultText}</T>
      </div>
      
      {/* Custom Leaves SVG overlapping the right side */}
      <div className="absolute right-[-14px] top-[-16px] z-10 pointer-events-none drop-shadow-sm">
        <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Leaf */}
          <path d="M 50 65 C 20 60, 10 30, 30 15 C 45 30, 48 50, 50 65 Z" fill="#2D7336" stroke="white" strokeWidth="5" strokeLinejoin="round"/>
          <path d="M 50 65 C 45 50, 35 30, 30 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Right Leaf */}
          <path d="M 50 65 C 52 45, 60 25, 75 10 C 95 25, 85 55, 50 65 Z" fill="#2D7336" stroke="white" strokeWidth="5" strokeLinejoin="round"/>
          <path d="M 50 65 C 55 45, 65 25, 75 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Stem */}
          <path d="M 50 65 Q 45 75 42 85" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>
    </motion.div>
  );
}
