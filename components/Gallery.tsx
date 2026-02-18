"use client";
import { useState } from "react";
import { getImagePath, GALLERY_ITEMS } from "@/lib/media";
import { Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-6xl font-serif text-royal-purple leading-none uppercase tracking-tighter">
            The Master <br /> 
            <span className="text-royal-gold">Portfolio</span>
          </h2>
          <p className="max-w-xs text-slate-400 text-[11px] uppercase tracking-widest leading-loose font-bold">
            A curated collection of transformations that define elegance and royal sophistication.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(getImagePath(item.id))}
              className={`relative overflow-hidden group cursor-pointer rounded-2xl bg-royal-purple 
                ${idx === 0 ? "md:col-span-8 aspect-video" : "md:col-span-4 aspect-square"}`}
            >
              {/* Image */}
              <img
                src={getImagePath(item.id)}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:opacity-40 group-hover:scale-105"
              />

              {/* View Button (Appears on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-royal-gold text-royal-purple p-4 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                  <Maximize2 size={24} />
                </div>
              </div>

              {/* Dynamic Overlay Info */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-royal-gold text-[10px] tracking-[0.4em] font-black uppercase mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-serif uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FULLSCREEN LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-royal-purple/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-royal-gold transition-colors z-[210]"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>

            {/* Large Image Container */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImg}
                alt="Full Preview"
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              />
              
              {/* Branding Tag on Fullscreen */}
              <div className="absolute bottom-4 text-center">
                 <p className="text-royal-gold/40 text-[9px] font-black tracking-[0.8em] uppercase">Royal Touch Artistry</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}