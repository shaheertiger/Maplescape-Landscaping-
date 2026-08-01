"use client";
import { motion, Variants } from "framer-motion";
import { T } from "@/context/ContentContext";
import SectionLabel from "@/components/SectionLabel";

const STEPS = [
  { 
    num: "1", 
    title: "Tree Plantation",
    desc: "For nearly 20 years, Maplescape Landscape Services has been Canada's premier landscape partner.",
    img: "/process-planting.jpg",
    posX: "14.28%",
    posY: "65%",
    imgPos: "50% 60%" // Slightly lower than center to capture planting action
  },
  { 
    num: "2", 
    title: "Watering Plants",
    desc: "From residential to commercial, Maplescape's dedication to satisfaction truly stands out.",
    img: "/process-watering.jpg",
    posX: "35.71%",
    posY: "35%",
    imgPos: "15% 10%" // Inline style objectPosition
  },
  { 
    num: "3", 
    title: "Grown Garden",
    desc: "Their passion for nature and details make them the trusted choice for landscaping nationwide.",
    img: "/process-grown-garden.jpg",
    posX: "57.14%",
    posY: "65%"
  },
  { 
    num: "4", 
    title: "Garden Expansion",
    desc: "From private yards to corporate spaces, Maplescape's excellence and client happiness shine brightly.",
    img: "/process-garden-expansion.jpg",
    posX: "78.57%",
    posY: "35%"
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Process() {
  return (
    <section id="process" className="relative pt-12 pb-32 md:pt-16 md:pb-72 w-full mx-auto bg-gradient-to-b from-[#FDFBF7] via-[#E2F0C8] to-[#BBD885] overflow-hidden">

      {/* Decorative Side Leaves */}
      <div className="absolute top-[5%] left-[-2%] opacity-30 pointer-events-none">
        <svg width="150" height="250" viewBox="0 0 100 200" fill="#1A3B22">
          <path d="M0 50 C40 40 80 80 50 150 C20 120 0 90 0 50 Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-[5%] right-[-2%] opacity-30 pointer-events-none transform scale-x-[-1]">
        <svg width="200" height="300" viewBox="0 0 100 200" fill="#1A3B22">
          <path d="M0 50 C40 40 80 80 50 150 C20 120 0 90 0 50 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* HEADER SECTION (Left Aligned) */}
        <div className="max-w-2xl mb-8 md:mb-4">
          <SectionLabel id="process.subtitle" defaultText="OUR WORK PROCESS" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-[#14361C] font-medium leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            <T id="process.title" className="whitespace-pre-line">We follow standard
method of gardening</T>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#14361C]/70 text-lg md:text-xl font-medium max-w-lg leading-relaxed"
          >
            <T as="span" id="process.description">Elevate your environment with our unrivaled expertise and passion for excellence!</T>
          </motion.p>
        </div>

        {/* ── DESKTOP HORIZONTAL TIMELINE ── */}
        <div className="hidden md:block relative w-full h-[600px] z-10 mt-4">
          
          {/* The Winding SVG Path */}
          <div className="absolute inset-0 z-0">
            <svg viewBox="0 0 1400 600" preserveAspectRatio="none" className="w-full h-full">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M -50 250 C 100 250, 100 450, 200 450 C 350 450, 350 150, 500 150 C 650 150, 650 450, 800 450 C 950 450, 950 150, 1100 150 C 1250 150, 1250 250, 1450 250" 
                fill="none" 
                stroke="#2D5A27" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke" 
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Nodes and Content */}
          {STEPS.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              className="absolute flex flex-col items-center z-10"
              style={{ left: step.posX, top: step.posY, transform: "translate(-50%, -50%)" }}
            >
              
              {/* Photo Node with Wreath */}
              <div className="relative mb-6">
                
                {/* Wreath SVG */}
                <div className="absolute inset-0 scale-125 pointer-events-none opacity-40 text-[#2D5A27]">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full animate-[spin_60s_linear_infinite]">
                    {/* Simplified wreath representation */}
                    <circle cx="50" cy="50" r="45" strokeDasharray="2 4" />
                    <path d="M 50 5 Q 60 15 50 25 Q 40 15 50 5" fill="currentColor" />
                    <path d="M 95 50 Q 85 60 75 50 Q 85 40 95 50" fill="currentColor" />
                    <path d="M 50 95 Q 40 85 50 75 Q 60 85 50 95" fill="currentColor" />
                    <path d="M 5 50 Q 15 40 25 50 Q 15 60 5 50" fill="currentColor" />
                  </svg>
                </div>

                {/* Circular Photo */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white relative z-10">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: step.imgPos || 'center' }}
                  />
                </div>

                {/* Number Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#14361C] text-white flex items-center justify-center font-bold text-lg border-2 border-white z-20 shadow-lg">
                  {step.num}
                </div>
              </div>

              {/* Text Content */}
              <div className="w-64 text-center mt-2">
                <h3 className="text-[#14361C] font-bold text-2xl mb-3 font-[family-name:var(--font-display)]">{step.title}</h3>
                <p className="text-[#14361C]/70 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ── MOBILE VERTICAL TIMELINE ── */}
        <div className="md:hidden relative w-full mt-12 z-10">
          
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-[#2D5A27]/30 rounded-full z-0 transform -translate-x-1/2"></div>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-16"
          >
            {STEPS.map((step) => (
              <motion.div key={step.num} variants={item} className="relative flex flex-col items-center z-10">
                
                {/* Photo Node with Wreath */}
                <div className="relative mb-6">
                  
                  {/* Circular Photo */}
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white relative z-10">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: step.imgPos || 'center' }}
                    />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#14361C] text-white flex items-center justify-center font-bold text-lg border-2 border-white z-20 shadow-lg">
                    {step.num}
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-72 text-center mt-2 bg-white/40 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/50">
                  <h3 className="text-[#14361C] font-bold text-xl mb-2 font-[family-name:var(--font-display)]">{step.title}</h3>
                  <p className="text-[#14361C]/70 text-sm leading-relaxed font-medium">{step.desc}</p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Smooth Wave Divider at the bottom transitioning into Portfolio */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[1px]">
        {/* Match the wave SVG to the dark green background of the Portfolio section */}
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-12 md:h-24" fill="#2C4033">
          <path d="M0,120 L1440,120 L1440,70 C1080,130 720,10 360,70 C180,100 90,90 0,70 Z" />
        </svg>
      </div>

    </section>
  );
}
