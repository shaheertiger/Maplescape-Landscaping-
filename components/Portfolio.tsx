"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

const PROJECTS = [
  { id: 1, image: "/images/portfolio-real-1.jpg", alt: "Interlocking stone patio" },
  { id: 2, image: "/images/portfolio-real-2.jpg", alt: "Screened porch with natural stone" },
  { id: 3, image: "/images/portfolio-real-3.jpg", alt: "Custom wooden deck" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full max-w-[1600px] mx-auto py-24 md:py-32 px-4 md:px-16 overflow-hidden bg-[#2C4033]">
      
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionLabel id="portfolio.subtitle" defaultText="Featured Projects" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-display)] font-medium text-white tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              Spaces we&apos;re proud of.
            </motion.h2>
          </div>
        </div>

        {/* 3 Column Vertical Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-[30px] group"
            >
              <Image 
                src={project.image} 
                alt={project.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Optional dark gradient overlay at bottom for a moody effect, though inspiration just has straight images. I'll add a very subtle one. */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Smooth Wave Divider at the bottom transitioning into Reviews */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[1px]">
        {/* Match the wave SVG to the cream background of the Reviews section */}
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-12 md:h-24" fill="#FDFBF7">
          <path d="M0,120 L1440,120 L1440,70 C1080,130 720,10 360,70 C180,100 90,90 0,70 Z" />
        </svg>
      </div>

    </section>
  );
}
