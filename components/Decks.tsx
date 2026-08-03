"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function Decks() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="decks" className="relative py-24 md:py-32 w-full mx-auto bg-[#FDFBF7]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionLabel id="decks.subtitle" defaultText="CUSTOM DECK SOLUTIONS" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-display)] text-[#1E2B1F] font-bold leading-[1.1] tracking-tight mt-4"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
            >
              Extend your living space outdoors.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://wa.me/14378552790"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#BBD885] text-[#1E2B1F]
                         rounded-full font-bold text-xs tracking-[0.1em] uppercase shadow-lg
                         hover:bg-[#A5C768] transition-colors duration-300 whitespace-nowrap"
            >
              Get an Estimate
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Deck Types Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Composite Deck Card */}
          <motion.div variants={itemVariants} className="group relative rounded-[30px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#1E2B1F]/5">
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
              <Image 
                src="/composite-deck.png" 
                alt="Modern Composite Deck"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B1F]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-[family-name:var(--font-display)] text-3xl font-bold mb-2 drop-shadow-md">Composite Decking</h3>
                <div className="flex gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-widest uppercase">Low Maintenance</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-widest uppercase">Ultra Durable</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#1E2B1F]/70 font-medium leading-relaxed mb-6">
                Experience the ultimate in modern outdoor living with our premium composite decking. Engineered for incredible durability, composite boards resist fading, staining, and rot, giving you a beautiful deck that requires virtually zero maintenance year after year.
              </p>
              <a href="https://wa.me/14378552790?text=I%27m%20interested%20in%20a%20composite%20deck%20quote" className="text-[#4A6741] font-bold uppercase text-xs tracking-wider flex items-center gap-2 group-hover:text-[#2A3E24] transition-colors">
                Quote for Composite <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Natural Wood Deck Card */}
          <motion.div variants={itemVariants} className="group relative rounded-[30px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#1E2B1F]/5">
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
              <Image 
                src="/wood-deck.png" 
                alt="Natural Wood Deck"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B1F]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-[family-name:var(--font-display)] text-3xl font-bold mb-2 drop-shadow-md">Natural Wood Decking</h3>
                <div className="flex gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-widest uppercase">Classic Warmth</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-widest uppercase">Natural Grain</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#1E2B1F]/70 font-medium leading-relaxed mb-6">
                Nothing beats the timeless appeal and authentic warmth of a natural wood deck. We use high-grade cedar and pressure-treated lumber to craft stunning, custom-built wooden structures that age beautifully and blend seamlessly into your natural garden environment.
              </p>
              <a href="https://wa.me/14378552790?text=I%27m%20interested%20in%20a%20natural%20wood%20deck%20quote" className="text-[#4A6741] font-bold uppercase text-xs tracking-wider flex items-center gap-2 group-hover:text-[#2A3E24] transition-colors">
                Quote for Wood <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
