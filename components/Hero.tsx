"use client";
import { motion } from "framer-motion";
import { T } from "@/context/ContentContext";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section id="home" className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#FDFBF7]">

        {/* ── Background Image ── */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png"
            alt="Maplescape Landscape Design"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#1E2B1F]/70" />
          {/* Radial light glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(187,216,133,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,103,65,0.5),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-0" />
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-16 pt-20 md:pt-0">
          <div className="max-w-2xl">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4"
            >
              <T as="span" id="hero.subtitle" className="text-xs uppercase tracking-[0.15em] text-white/80 font-bold">
                Landscape Design & Construction
              </T>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-[family-name:var(--font-display)] text-white font-medium
                         leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              <T id="hero.title">Outdoor spaces designed for life outside.</T>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-white/90 text-sm md:text-base leading-relaxed mb-10 max-w-lg font-medium"
            >
              <T id="hero.description">We create beautiful, functional landscapes that bring people together and elevate everyday living.</T>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <a href="https://wa.me/14378552790"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#BBD885] text-[#1E2B1F]
                           rounded-full font-bold text-xs tracking-[0.05em] uppercase
                           hover:bg-[#A5C768] transition-colors duration-300">
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-4 md:left-16 z-10 flex items-center gap-3">
          <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="text-white text-[10px] font-medium tracking-wide">
            Proudly serving Toronto<br/>and surrounding areas.
          </span>
        </div>

        {/* ── Torn Edge SVG Divider ── */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-[2px] text-[#FDFBF7]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20" fill="currentColor">
            <path d="M0,120 C150,100 300,120 450,90 C600,60 750,100 900,80 C1050,60 1200,90 1200,90 L1200,120 L0,120 Z" opacity="0.5" />
            <path d="M0,120 C200,90 400,110 600,70 C800,30 1000,90 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>

      </section>

      {/* ── Stats Bar ── */}
      <section className="w-full bg-[#FDFBF7] border-b border-[#1E2B1F]/10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1E2B1F]/10">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
              <svg className="mb-3 text-[#BBD885]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[#1E2B1F] mb-1">15+</h3>
              <p className="text-[10px] text-[#1E2B1F]/50 uppercase tracking-widest font-bold">Years of Experience</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
              <svg className="mb-3 text-[#BBD885]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[#1E2B1F] mb-1">200+</h3>
              <p className="text-[10px] text-[#1E2B1F]/50 uppercase tracking-widest font-bold">Projects Completed</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
              <svg className="mb-3 text-[#BBD885]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[#1E2B1F] mb-1">100%</h3>
              <p className="text-[10px] text-[#1E2B1F]/50 uppercase tracking-widest font-bold">Client Satisfaction</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
              <svg className="mb-3 text-[#BBD885]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <h3 className="font-sans text-sm font-medium text-[#1E2B1F] mb-1 mt-2 tracking-wide">Licensed & Insured</h3>
              <p className="text-[10px] text-[#1E2B1F]/50 uppercase tracking-widest font-bold">Landscape Professionals</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
