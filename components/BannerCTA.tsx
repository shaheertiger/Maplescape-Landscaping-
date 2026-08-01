"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function BannerCTA() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto px-4 md:px-16 py-12 md:py-20 bg-[#FDFBF7]">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[30px] md:rounded-[50px] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-[#C1DF9E] min-h-[400px] md:min-h-[450px]">
        
        {/* RIGHT SIDE: Light Green Background + Gardener Image */}
        <div className="absolute top-0 right-0 w-full md:w-[45%] h-full pointer-events-none z-10">
          <div className="relative w-full h-full">
            <Image 
              src="/images/gardener.png" 
              alt="Gardener" 
              fill 
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* LEFT SIDE: Dark Green Background */}
        <div className="relative w-full md:w-[65%] z-20 flex flex-col items-center justify-center py-16 px-6 md:py-20 md:px-12 overflow-hidden">
          
          {/* SVG mask to create the wavy right edge */}
          <div className="absolute inset-0 w-full h-full bg-[#184824]" style={{ clipPath: "url(#wave-mask)" }}></div>
          
          <svg width="0" height="0">
            <defs>
              {/* S-curve wave mask for the dark green section */}
              <clipPath id="wave-mask" clipPathUnits="objectBoundingBox">
                <path d="M 0,0 L 0.85,0 C 0.7,0.3 0.9,0.7 0.85,1 L 0,1 Z" />
              </clipPath>
              
              {/* Curve mask for the left plant image */}
              <clipPath id="left-image-mask" clipPathUnits="objectBoundingBox">
                <path d="M 0,0 L 1,0 C 0.7,0.3 0.9,0.7 0.8,1 L 0,1 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Curved image on the far left */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-[30%] z-20 pointer-events-none" style={{ clipPath: "url(#left-image-mask)" }}>
             <div className="relative w-full h-full">
                <Image src="/images/plants.png" alt="Nursery Plants" fill className="object-cover" />
             </div>
          </div>
          
          {/* Content */}
          <div className="relative z-30 flex flex-col items-center md:items-start text-center md:text-left text-white lg:ml-[30%] w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-display)] font-medium text-3xl md:text-5xl leading-[1.2] tracking-tight mb-8"
            >
              Transform your space with<br/>Maplescape landscaping!
            </motion.h2>

            <motion.a 
              href="https://wa.me/14378552790"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#486F4E] hover:bg-[#3D5E42] text-white px-8 py-3 rounded-full flex items-center gap-5 transition-colors shadow-lg w-fit mx-auto md:mx-0"
            >
              <div className="bg-white rounded-full p-2.5 text-[#486F4E]">
                <Phone size={20} className="fill-current" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">Book A Session</span>
                <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] tracking-wide">+1 (437) 855-2790</span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* STARBURST BADGE */}
        <div className="absolute top-[85%] md:top-1/2 left-1/2 md:left-[62%] -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 z-30">
          <motion.a 
            href="https://wa.me/14378552790"
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-center group"
          >
            {/* 12-point starburst */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#99D35A] drop-shadow-md group-hover:scale-105 transition-transform duration-300">
              <polygon fill="currentColor" stroke="white" strokeWidth="2" points="50,2 61,16 78,13 83,29 98,34 92,50 98,66 83,71 78,87 61,84 50,98 39,84 22,87 17,71 2,66 8,50 2,34 17,29 22,13 39,16" />
            </svg>
            <div className="relative z-10 text-[#184824] font-bold leading-tight text-sm md:text-base tracking-wide">
              Book<br/>our team
              <ArrowRight size={20} strokeWidth={2.5} className="mx-auto mt-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
