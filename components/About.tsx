"use client";
import { motion } from "framer-motion";
import { T } from "@/context/ContentContext";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

export default function About() {
  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden w-full max-w-[1600px] mx-auto bg-transparent">
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* LEFT COLUMN - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[35%] relative aspect-[3/4] rounded-[30px] overflow-hidden"
        >
          {/* I will use one of the images that features a person or team if possible, or just a nice landscape detail. Let's use w10.jpeg */}
          <Image 
            src="/images/generated/about.png" 
            alt="Maplescape Landscaping Professional" 
            fill 
            quality={100}
            unoptimized
            className="object-cover" 
          />
        </motion.div>

        {/* MIDDLE COLUMN - Main Text */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel id="about.subtitle" defaultText="About Maplescape" />
            
            <motion.h2 className="font-[family-name:var(--font-display)] font-medium text-[#162818] leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
              <T id="about.title">Built on passion.<br/>Focused on you.</T>
            </motion.h2>

            <div className="space-y-4 text-[#162818]/60 text-sm leading-relaxed font-medium mb-8">
              <T as="p" id="about.p1">
                Maplescape Landscaping is a locally owned and operated business with a passion for creating outdoor spaces that enhance the way you live.
              </T>
              <T as="p" id="about.p2">
                We believe in honest communication, quality craftsmanship and attention to detail — on every project, big or small.
              </T>
            </div>

            <a href="#team"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4A6741] text-white
                           rounded-full font-bold text-[10px] tracking-[0.05em] uppercase
                           hover:bg-[#3A5233] transition-colors duration-300 w-fit">
              Meet the Team
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - 3 Features */}
        <div className="w-full lg:w-[30%] flex flex-col gap-10 lg:pl-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-full border border-[#162818]/10 flex items-center justify-center flex-shrink-0 text-[#162818]/70">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h4 className="text-[#162818] font-bold text-sm mb-2 mt-1">Local & Reliable</h4>
              <p className="text-[#162818]/60 text-xs leading-relaxed font-medium">We&apos;re based locally and understand the unique landscapes and climate of the region.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-full border border-[#162818]/10 flex items-center justify-center flex-shrink-0 text-[#162818]/70">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h4 className="text-[#162818] font-bold text-sm mb-2 mt-1">Sustainable Approach</h4>
              <p className="text-[#162818]/60 text-xs leading-relaxed font-medium">We use eco-friendly practices and materials that are better for your landscape and the environment.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-full border border-[#111111]/10 flex items-center justify-center flex-shrink-0 text-[#111111]/70">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-[#111111] font-bold text-sm mb-2 mt-1">Client Focused</h4>
              <p className="text-[#111111]/60 text-xs leading-relaxed font-medium">Your vision is our priority. We work closely with you to create a space you&apos;ll love for years to come.</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
