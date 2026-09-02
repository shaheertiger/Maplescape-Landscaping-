"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const REVIEWS = [
  {
    author: "Rachel Ballinger",
    title: "CEO, Bizzbreak Inc.",
    image: "/images/avatar.png",
    text: "I saved over 50% contacting Maplescape over my garden landscaping. I will definitely contact Maplescape for all my future gardening projects. Thank you !!!",
    rating: 5,
  },
  {
    author: "Michael R.",
    title: "Patio Installation",
    image: "/images/avatar.png",
    text: "MapleScape Landscaping did an amazing job on our backyard patio. The stonework looks clean, level, and professionally finished. The crew was respectful, kept the property organized, and completed everything exactly how we discussed. Our backyard looks completely different now.",
    rating: 5,
  },
  {
    author: "Daniel P.",
    title: "Interlocking Driveway",
    image: "/images/avatar.png",
    text: "We hired MapleScape for a new interlocking driveway and couldn’t be happier with the result. They helped us choose the right stone and design, explained the whole process, and paid attention to every detail. The driveway looks beautiful and feels very solid.",
    rating: 5,
  },
  {
    author: "Sarah M.",
    title: "Backyard Hardscaping",
    image: "/images/avatar.png",
    text: "Excellent experience from beginning to end. MapleScape transformed our plain backyard into a beautiful outdoor space with interlocking, steps, and a seating area. The workmanship is impressive and the crew clearly takes pride in what they do.",
    rating: 5,
  },
  {
    author: "Jason T.",
    title: "Retaining Wall",
    image: "/images/avatar.png",
    text: "MapleScape replaced our old retaining wall and the difference is incredible. Everything looks straight, strong, and professionally installed. They also made sure the drainage was properly handled instead of just focusing on appearance. Highly recommended.",
    rating: 5,
  },
  {
    author: "Amanda L.",
    title: "Front Entrance & Walkway",
    image: "/images/avatar.png",
    text: "We wanted to improve the curb appeal of our home and MapleScape delivered. They installed a new stone walkway and completely redesigned the front entrance. The finished work looks modern, clean, and matches our house perfectly.",
    rating: 5,
  },
  {
    author: "Kevin S.",
    title: "Interlocking Patio",
    image: "/images/avatar.png",
    text: "Very happy with our new interlocking patio. The MapleScape team showed up when they said they would, worked efficiently, and kept us updated throughout the project. The cuts around the edges and steps were especially well done. Great attention to detail.",
    rating: 5,
  },
  {
    author: "Emily C.",
    title: "Outdoor Living Area",
    image: "/images/avatar.png",
    text: "MapleScape helped us create the outdoor entertaining space we had been wanting for years. They handled the patio, border design, steps, and landscaping around it. Everything flows together beautifully. We’ve already received so many compliments.",
    rating: 5,
  },
  {
    author: "Robert K.",
    title: "Driveway & Walkway",
    image: "/images/avatar.png",
    text: "Professional company and excellent quality of work. We had our driveway and front walkway redone and MapleScape made the entire property look newer. The base preparation was thorough and the interlock looks extremely well installed. Would definitely hire them again.",
    rating: 5,
  },
  {
    author: "Nicole B.",
    title: "Backyard Patio & Steps",
    image: "/images/avatar.png",
    text: "Our backyard had uneven ground and an old damaged patio. MapleScape completely rebuilt the area and added beautiful stone steps. The final result exceeded our expectations. The team was friendly, knowledgeable, and easy to communicate with throughout the project.",
    rating: 5,
  },
  {
    author: "Andrew G.",
    title: "Hardscape Renovation",
    image: "/images/avatar.png",
    text: "We contacted MapleScape Landscaping for a complete hardscape renovation and they did a fantastic job. From the initial design ideas to the final cleanup, everything was handled professionally. The workmanship is excellent and our property looks significantly better.",
    rating: 5,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  const current = REVIEWS[currentIndex];

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    let text = `*New Quote Request*\n`;
    text += `Name: ${data.name}\n`;
    text += `Email: ${data.email}\n`;
    text += `Phone: ${data.phone}\n`;
    text += `Service: ${data.service}\n`;
    text += `Days: ${data.days}\n`;
    
    const url = `https://wa.me/14378552790?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="reviews" className="relative w-full overflow-hidden">
      
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none">
        
        {/* Left Light Green Background */}
        <div className="w-full lg:w-1/2 h-full bg-[#EBF5EA] relative overflow-hidden">
          {/* Subtle decorative leaf vectors */}
          <svg className="absolute -top-10 -left-10 w-96 h-96 text-[#CDE6CB] opacity-30 rotate-45" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C 20 20 10 50 20 70 C 50 100 80 80 90 50 C 100 20 80 0 50 0 Z" />
          </svg>
          <svg className="absolute top-[40%] -right-20 w-80 h-80 text-[#CDE6CB] opacity-40 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C 20 20 10 50 20 70 C 50 100 80 80 90 50 C 100 20 80 0 50 0 Z" />
          </svg>
        </div>

        {/* Right Dark Green Background */}
        <div className="w-full lg:w-1/2 h-full bg-[#103E1E] relative overflow-hidden">
          {/* Subtle decorative leaf vectors */}
          <svg className="absolute -top-20 -right-10 w-[400px] h-[400px] text-[#164F27] opacity-60 -rotate-45" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C 20 20 10 50 20 70 C 50 100 80 80 90 50 C 100 20 80 0 50 0 Z" />
          </svg>
          <svg className="absolute bottom-0 -left-20 w-[500px] h-[500px] text-[#164F27] opacity-50 rotate-[30deg]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C 20 20 10 50 20 70 C 50 100 80 80 90 50 C 100 20 80 0 50 0 Z" />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
        
        {/* LEFT COLUMN: Request Quote Form */}
        <div className="flex justify-center lg:justify-end lg:pr-12">
        <div className="flex justify-center lg:justify-end lg:pr-12">
          <form onSubmit={handleWhatsAppSubmit} className="w-full max-w-[550px] bg-[#2A7E39] rounded-[30px] p-8 md:p-12 text-white shadow-2xl relative">
             <h3 className="text-3xl md:text-[2rem] font-[family-name:var(--font-display)] mb-8 tracking-wide">Request Quote Form</h3>
             
             <p className="text-sm font-bold tracking-wide mb-4">Personal Information</p>
             
             <input name="name" required type="text" placeholder="Name" className="w-full bg-white text-[#111111] px-6 py-3 rounded-[30px] mb-4 outline-none text-sm placeholder:text-gray-400 font-medium" />
             
             <div className="flex flex-col sm:flex-row gap-4 mb-10">
               <input name="email" required type="email" placeholder="Email" className="w-full bg-white text-[#111111] px-6 py-3 rounded-[30px] outline-none text-sm placeholder:text-gray-400 font-medium" />
               <input name="phone" required type="tel" placeholder="Phone" className="w-full bg-white text-[#111111] px-6 py-3 rounded-[30px] outline-none text-sm placeholder:text-gray-400 font-medium" />
             </div>

             <div className="flex flex-col sm:flex-row gap-4 mb-10">
               <div className="w-full">
                 <p className="text-sm font-bold tracking-wide mb-3">Service Type</p>
                 <div className="relative">
                    <select name="service" required className="w-full bg-white text-[#111111] px-6 py-3.5 rounded-[30px] outline-none text-sm appearance-none cursor-pointer font-medium">
                      <option value="">Select</option>
                      <option value="Landscape Design">Landscape Design</option>
                      <option value="Hardscaping">Hardscaping</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                 </div>
               </div>
               <div className="w-full">
                 <p className="text-sm font-bold tracking-wide mb-3">Working Days</p>
                 <div className="relative">
                    <select name="days" required className="w-full bg-white text-[#111111] px-6 py-3.5 rounded-[30px] outline-none text-sm appearance-none cursor-pointer font-medium">
                      <option value="">Select</option>
                      <option value="Weekdays">Weekdays</option>
                      <option value="Weekends">Weekends</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                 </div>
               </div>
             </div>

             <button type="submit" className="w-full bg-[#124320] text-white font-bold py-4 rounded-[30px] mb-10 hover:bg-[#0A2913] transition-colors shadow-lg">
               Get A Quote
             </button>

             <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 px-2">
               <span className="text-[1.35rem] font-medium font-[family-name:var(--font-display)]">Or Give us a call</span>
               <span className="text-xl md:text-[1.35rem] font-bold font-[family-name:var(--font-display)] tracking-wide">+1 (437) 855-2790</span>
             </div>
             
             <div className="w-full h-px bg-white/20 mb-4" />
             <p className="text-center text-xs font-bold tracking-wide text-white/90">The Support Centre is available 24/7</p>

          </form>
        </div>
        </div>

        {/* RIGHT COLUMN: Testimonials */}
        <div className="flex flex-col justify-center lg:pl-12 pt-8 lg:pt-0">
          <div className="w-full max-w-[550px]">
             <SectionLabel id="testimonial.label" defaultText="TESTIMONIAL" />
             
             <h2 className="text-4xl md:text-5xl font-medium font-[family-name:var(--font-display)] text-white mt-6 mb-4 leading-[1.1] tracking-tight">
               What our clients say<br/>about our service
             </h2>
             
             <p className="text-white/80 text-base mb-12 max-w-[480px] font-medium leading-relaxed">
               Maplescape landscaping service deliver the knowledge & opportunity to optimize every project.
             </p>

             {/* Carousel Card */}
             <div className="relative bg-[#205A32] rounded-[30px] p-8 md:p-10 pt-16 md:pt-14 mt-12 shadow-xl min-h-[220px]">
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentIndex}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                   {/* Avatar removed as per request */}

                   {/* Giant Quote Icon top right */}
                   <div className="absolute -top-4 right-8">
                     <svg width="60" height="60" viewBox="0 0 100 100" fill="#99D35A">
                       <path d="M 20 60 C 20 40, 35 25, 55 25 L 55 40 C 45 40, 40 45, 40 60 L 55 60 L 55 90 L 20 90 Z M 65 60 C 65 40, 80 25, 100 25 L 100 40 C 90 40, 85 45, 85 60 L 100 60 L 100 90 L 65 90 Z" />
                     </svg>
                   </div>

                   <p className="text-white text-base font-medium leading-relaxed mb-10 pr-4 mt-2">
                     &ldquo;{current.text}&rdquo;
                   </p>

                   <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 pt-0">
                     <div className="flex items-center gap-2">
                       <span className="text-white font-bold tracking-wide text-sm mr-1">Rating:</span>
                       <div className="flex gap-1">
                         {[...Array(5)].map((_, i) => (
                           <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#99D35A" stroke="#99D35A" strokeWidth="1">
                             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                           </svg>
                         ))}
                       </div>
                     </div>
                     
                     <div className="text-left sm:text-right">
                       <p className="text-white font-[family-name:var(--font-display)] text-xl font-medium">{current.author}</p>
                       <p className="text-white/80 text-xs font-bold tracking-wide mt-1">{current.title}</p>
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>

             {/* Carousel Navigation */}
             <div className="flex items-center gap-6 mt-10">
               <button onClick={prev} className="flex items-center gap-2 text-white font-bold text-sm tracking-wide hover:text-[#99D35A] transition-colors">
                 <ArrowLeft size={18} strokeWidth={2.5} />
                 <span>Prev</span>
               </button>
               <button onClick={next} className="flex items-center gap-2 text-white font-bold text-sm tracking-wide hover:text-[#99D35A] transition-colors">
                 <span>Next</span>
                 <ArrowRight size={18} strokeWidth={2.5} />
               </button>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
}
