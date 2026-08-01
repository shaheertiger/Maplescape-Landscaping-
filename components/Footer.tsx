"use client";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_INFO = [
  { 
    id: "phone",
    icon: <Phone size={16} />,
    text: "+1 (437) 855-2790", 
    href: "https://wa.me/14378552790" 
  },
  { 
    id: "address",
    icon: <MapPin size={16} />,
    text: "Toronto, ON, Canada", 
    href: "#" 
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Footer() {
  return (
    <>
      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-[#111912] relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-16 lg:gap-20 mb-16">

            {/* Brand */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
              className="pr-0 lg:pr-16"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <span className="font-[family-name:var(--font-display)] text-white font-bold text-4xl md:text-5xl tracking-tight leading-none block mb-4">
                  MAPLE<span className="text-[#BBD885]">SCAPE</span>
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#BBD885] font-bold">
                  Landscaping Services
                </p>
              </motion.div>
              <motion.p variants={itemVariants} className="text-white/70 text-base md:text-lg leading-relaxed max-w-[340px] font-medium">
                Creating and maintaining premium outdoor spaces. Quality craftsmanship and dedicated service for a modern, luxurious lifestyle.
              </motion.p>
            </motion.div>

            {/* Navigation */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
            >
              <ul className="flex flex-col border-t border-white/10 mt-4 lg:mt-0">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Our Services", href: "#services" },
                  { label: "Our Process", href: "#process" }
                ].map((l) => (
                  <motion.li key={l.label} variants={itemVariants} className="border-b border-white/10">
                    <a href={l.href} className="group flex items-center py-5 text-white/60 hover:text-[#BBD885] transition-all duration-300 font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold">
                      <span className="w-0 h-px bg-[#BBD885] mr-0 group-hover:w-8 group-hover:mr-4 transition-all duration-500 ease-out"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-500 ease-out">{l.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
            >
              <ul className="flex flex-col border-t border-white/10 mt-4 lg:mt-0">
                {CONTACT_INFO.map((c) => (
                  <motion.li key={c.id} variants={itemVariants} className="border-b border-white/10">
                    <a href={c.href} 
                       className="group flex items-center gap-5 hover:bg-transparent py-5">
                      <div className="w-12 h-12 rounded-full border border-[#BBD885]/30 flex items-center justify-center flex-shrink-0 text-[#BBD885] group-hover:bg-[#BBD885] group-hover:text-[#111912] transition-colors duration-500">
                        {c.icon}
                      </div>
                      <span className="text-white/70 group-hover:text-white text-lg leading-snug transition-colors duration-300 font-medium">
                        {c.text}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-white/40 pt-8 font-bold"
          >
            <p>Copyright © {new Date().getFullYear()} Maplescape Landscaping. All rights reserved.</p>
            <p className="text-white/60">Toronto · Ontario</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
