"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Portfolio", "#portfolio"],
    ["About", "#about"],
    ["Process", "#process"],
  ];

  const isDark = scrolled || mobileMenuOpen;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 22, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isDark
            ? "bg-white/95 backdrop-blur-xl border-b border-[#1E2B1F]/5 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none group relative z-50">
            <span className={`font-[family-name:var(--font-display)] font-bold text-xl md:text-2xl tracking-tight leading-none transition-colors duration-300 ${isDark ? "text-[#1E2B1F]" : "text-white"}`}>
              MAPLE<span className={isDark ? "text-[#BBD885]" : "text-white/70"}>SCAPE</span>
            </span>
            <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.22em] mt-1 font-medium transition-colors duration-300 ${isDark ? "text-[#1E2B1F]/40" : "text-white/60"}`}>
              Landscape Design
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(([l, h]) => (
              <li key={h}>
                <a href={h} className={`text-xs tracking-[0.08em] uppercase font-bold transition-colors duration-200 relative group ${isDark ? "text-[#1E2B1F]/70 hover:text-[#BBD885]" : "text-white/80 hover:text-white"}`}>
                  {l}
                  <span className={`absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 ${isDark ? "bg-[#BBD885] group-hover:w-full" : "bg-white group-hover:w-full"}`} />
                </a>
              </li>
            ))}
            <li>
              <a href="https://wa.me/14378552790"
                 className={`text-[10px] uppercase tracking-[0.15em] font-bold px-6 py-2.5 rounded-full transition-all duration-300 border ${
                  isDark 
                    ? "border-[#1E2B1F]/10 text-[#1E2B1F] hover:bg-[#1E2B1F] hover:text-white" 
                    : "border-white/30 text-white hover:bg-white hover:text-[#1E2B1F]"
                }`}>
                Get a Quote
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Toggle */}
          <button 
            className={`md:hidden relative z-50 focus:outline-none p-2 transition-colors duration-300 ${isDark ? "text-[#1E2B1F]" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-28 px-6 md:hidden flex flex-col h-[100svh]"
          >
            <ul className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map(([l, h]) => (
                <motion.li 
                  key={h}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a href={h} onClick={() => setMobileMenuOpen(false)} className="text-[#1E2B1F] font-[family-name:var(--font-display)] text-3xl font-medium tracking-wide hover:text-[#BBD885]">
                    {l}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-16 flex justify-center">
              <a href="https://wa.me/14378552790"
                 onClick={() => setMobileMenuOpen(false)}
                 className="inline-block text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 bg-[#BBD885] text-white hover:bg-[#3A5233] rounded-full transition-all">
                Get a Quote
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-12 border-t border-[#1E2B1F]/10 pt-8">
                <a href="https://wa.me/14378552790" className="text-[#1E2B1F]/50 hover:text-[#BBD885] transition-colors p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://wa.me/14378552790" className="text-[#1E2B1F]/50 hover:text-[#BBD885] transition-colors p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
