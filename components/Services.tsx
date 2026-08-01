"use client";
import { motion } from "framer-motion";
import { T } from "@/context/ContentContext";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

const SERVICES = [
  { 
    id: "design",
    name: "Landscape Design", 
    image: "/images/whatsapp/w22.jpeg", 
    desc: "Custom designs that combine beauty, functionality and sustainability.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  { 
    id: "construction",
    name: "Construction", 
    image: "/images/service-construction.png", 
    desc: "Expert craftsmanship to bring your landscape design to life with precision.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  { 
    id: "planting",
    name: "Planting & Styling", 
    image: "/images/whatsapp/w19.jpeg", 
    desc: "Thoughtful plant selection and styling for a vibrant, timeless outdoor space.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c4-4 4-10 0-14-4 4-4 10 0 14z"></path>
        <path d="M12 22V8"></path>
      </svg>
    )
  },
  { 
    id: "maintenance",
    name: "Maintenance", 
    image: "/images/service-maintenance.png", 
    desc: "Keep your landscape healthy and looking its best all year round.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20"></path>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full mx-auto py-12 md:py-16 px-4 md:px-8 overflow-hidden bg-transparent">

        {/* Header - Left Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <SectionLabel id="services.subtitle" defaultText="Our Services" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-display)] font-medium text-[#1E2B1F] tracking-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              <T id="services.title">Comprehensive landscape solutions.</T>
            </motion.h2>
            <T as="p" id="services.description" className="text-[#1E2B1F]/70 text-sm leading-relaxed font-medium">
              From initial design concepts to the final planted shrub, our team provides end-to-end services to transform your property.
            </T>
          </div>
        </div>

      {/* Grid of Services */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group flex flex-col bg-transparent"
          >
            {/* Image Container with floating icon */}
            <div className="relative w-full aspect-[4/3] mb-10">
              <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  fill 
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              
              {/* Floating Icon overlapping image bottom left */}
              <div className="absolute -bottom-5 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#132015] shadow-md z-10">
                {service.icon}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="font-[family-name:var(--font-display)] text-[#132015] font-semibold text-2xl mb-4">
                {service.name}
              </h3>
              <p className="text-[#132015]/80 text-[15px] leading-relaxed font-medium mb-8 flex-grow">
                {service.desc}
              </p>
              
              {/* Link */}
              <a href="https://wa.me/14378552790" className="inline-flex items-center text-[#132015] font-bold text-xs tracking-wider uppercase group/link mt-auto">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
