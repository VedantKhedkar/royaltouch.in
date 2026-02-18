"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getImagePath, BRAND_ASSETS } from "@/lib/media";
import { FaPlay, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

const fbVideos = [
    {
    id: 4,
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F878202848331665%2F&show_text=false&width=267&t=0",
  },
  {
    id: 1,
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1615999286413649%2F&show_text=false&width=267&t=0",
  },
  {
    id: 2,
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1390916742164550%2F&show_text=false&width=267&t=0",
  },
  {
    id: 3,
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F878202848331665%2F&show_text=false&width=267&t=0",
  },

];


  return (
    <div className="bg-[#FAF9F6] selection:bg-royal-gold selection:text-royal-purple overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. TRUST / BRAND STATEMENT */}
        <section className="py-20 md:py-10 bg-white px-6">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-[18px] tracking-[0.4em] uppercase text-royal-yellow font-bold">
              Since 2016
            </span>
            <h2 className="mt-6 text-3xl md:text-6xl font-serif text-royal-purple leading-tight md:leading-tight">
              A luxury destination for{" "}
              <span className="italic text-royal-gold">beauty transformations</span>{" "}
              and <span className="italic">professional artistry</span>.
            </h2>
            <p className="mt-6 md:mt-10 text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4">
              Royal Touch blends premium bridal services with industry-ready
              professional training. Every look is crafted with precision, every
              student trained with purpose.
            </p>

            <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-serif text-royal-purple group-hover:text-royal-gold transition-colors">9+</div>
                <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                  Years Experience
                </p>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-serif text-royal-purple group-hover:text-royal-gold transition-colors">500+</div>
                <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                  Bridal Clients
                </p>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-serif text-royal-purple group-hover:text-royal-gold transition-colors">1000+</div>
                <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                  Students Trained
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVICES SHOWCASE */}
        <section className="py-20 md:py-28 bg-royal-purple text-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-serif text-royal-gold">
                Our Signature Worlds
              </h2>
              <p className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mt-4">
                Artistry • Education • Care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { title: "Royal Bridal", desc: "High-definition bridal makeup, custom hairstyles, and luxury pre-wedding grooming." },
                { title: "Pro Academy", desc: "Career-focused beautician and makeup courses with practical industry training." },
                { title: "Studio Services", desc: "Party makeup, skin treatments, hair care, and personal styling sessions." },
              ].map((item, i) => (
                <div key={i} className="group p-8 md:p-10 border border-white/10 hover:border-royal-gold transition-all bg-white/5 backdrop-blur-sm relative overflow-hidden">
                  <h3 className="text-2xl font-serif mb-4 md:mb-6 group-hover:text-royal-gold transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 md:mb-10">{item.desc}</p>
                  <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-white group-hover:text-royal-gold transition-colors">Explore More →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. REELS / VIDEO PREVIEW */}
    <section className="py-20 md:py-28 bg-royal-dark text-white px-6">
  <div className="max-w-7xl mx-auto">
    <div className="mb-12 text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-royal-gold">
        Beauty in Motion
      </h2>
      <p className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mt-4">
        Watch Our Work
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {fbVideos.map((video) => (
        <div
          key={video.id}
          className="aspect-[9/16] overflow-hidden relative rounded-2xl border border-white/10 shadow-xl bg-black"
        >
          <iframe
            src={video.embedUrl}
            className="absolute inset-0 w-full h-full"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />

          {/* Subtle premium border */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      ))}
    </div>
  </div>
</section>


        {/* VIDEO LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedVideo(null)}
            >
              <button className="absolute top-8 right-8 text-white/50 hover:text-royal-gold transition-colors z-[210]">
                <X size={40} strokeWidth={1} />
              </button>
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} 
                animate={{ scale: 1, y: 0 }} 
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-w-sm w-full aspect-[9/16] shadow-2xl rounded-2xl overflow-hidden bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <video src={selectedVideo} className="w-full h-full object-contain" controls autoPlay loop />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 6. CALL TO ACTION */}
 {/* 6. CALL TO ACTION — OLD / PREMIUM UI STYLE */}
 <section
          id="contact"
          className="py-20 md:py-32 bg-royal-purple text-white relative overflow-hidden px-6"
        >
          {/* Smaller blur circles for mobile so they don't block content */}
          <div className="absolute -top-16 -right-16 md:-top-32 md:-right-32 w-48 h-48 md:w-96 md:h-96 bg-royal-gold/20 blur-[80px] md:blur-[140px] rounded-full" />
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-serif uppercase leading-tight mb-6 md:mb-8">
              Begin Your <br />
              <span className="italic text-royal-gold">Royal Journey</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-sm md:text-base px-4">
              Book your bridal consultation or enroll in our academy today. Let
              us craft your transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-royal-gold text-royal-purple font-black tracking-widest text-[10px] hover:scale-105 transition-transform"
              >
                <FaWhatsapp size={16}/> WHATSAPP US
              </a>
              <a
                href="https://instagram.com"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-black tracking-widest text-[10px] hover:border-royal-gold hover:text-royal-gold transition-all"
              >
                <FaInstagram size={16}/> INSTAGRAM
              </a>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}