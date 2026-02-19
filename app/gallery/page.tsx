"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Camera, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPES & DATA ---
type GalleryImage = { id: number; url: string; title: string; orientation?: 'landscape' | 'portrait' };
type GalleryData = Record<string, GalleryImage[]>;

const galleryData: GalleryData = {
  "TRANSFORMATIONS": [
    { id: 101, url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000", title: "Dewy Skin Finish" },
    { id: 102, url: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1000", title: "Evening Glamour" },
    { id: 103, url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000", title: "Soft Occasion Look", orientation: 'landscape' },
    { id: 104, url: "https://images.unsplash.com/photo-1503236123135-083567c9033b?q=80&w=1000", title: "Matte Elegance" },
    { id: 105, url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000", title: "Smokey Eyes", orientation: 'landscape' },
    { id: 106, url: "https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=1000", title: "Natural Glow" }
  ],
  "ROYAL BRIDAL": [
    { id: 201, url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1000", title: "The Maharani Bride" },
    { id: 202, url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000", title: "Traditional Heritage", orientation: 'landscape' },
    { id: 203, url: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1000", title: "Classic Red Bridal" },
    { id: 204, url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000", title: "Modern Nude Bridal" },
    { id: 205, url: "https://images.unsplash.com/photo-1604548628005-950274f83b1a?q=80&w=1000", title: "Golden Hour Glow", orientation: 'landscape' },
    { id: 206, url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000", title: "The Royal Veil" }
  ],
  "GLAMOUR & PARTY": [
    { id: 301, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000", title: "Cocktail Party Glam", orientation: 'landscape' },
    { id: 302, url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000", title: "Celebration Sparkle" },
    { id: 303, url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000", title: "Red Carpet Ready" },
    { id: 304, url: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1000", title: "Bold & Beautiful", orientation: 'landscape' },
    { id: 305, url: "https://images.unsplash.com/photo-1522338223523-decac27515c3?q=80&w=1000", title: "High-Fashion Look" },
    { id: 306, url: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1000", title: "Street Style Glam" }
  ],
  "ACADEMY LIFE": [
    { id: 401, url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000", title: "Studio Masterclass" },
    { id: 402, url: "https://images.unsplash.com/photo-1522338223523-decac27515c3?q=80&w=1000", title: "Technique Training", orientation: 'landscape' },
    { id: 403, url: "https://images.unsplash.com/photo-1471333027242-0f605f98c857?q=80&w=1000", title: "Student Artistry" },
    { id: 404, url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000", title: "Theory Session", orientation: 'landscape' },
    { id: 405, url: "https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=1000", title: "Live Demos" },
    { id: 406, url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000", title: "Certification Day" }
  ],
  "HAIR DESIGN": [
    { id: 501, url: "https://images.unsplash.com/photo-1560869713-7d0a29430863?q=80&w=1000", title: "Floral Bridal Bun", orientation: 'landscape' },
    { id: 502, url: "https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1000", title: "Hollywood Waves" },
    { id: 503, url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000", title: "Messy Textures" },
    { id: 504, url: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1000", title: "Sleek High Pony", orientation: 'landscape' },
    { id: 505, url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000", title: "Intricate Braids" },
    { id: 506, url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000", title: "Classic Updos" }
  ]
};

const categories = ["VIEW ALL", "TRANSFORMATIONS", "ROYAL BRIDAL", "GLAMOUR & PARTY", "ACADEMY LIFE", "HAIR DESIGN"];

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');
  
  const [active, setActive] = useState("VIEW ALL");
  const [displayImages, setDisplayImages] = useState<GalleryImage[]>([]);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    if (categoryQuery) {
      const decoded = decodeURIComponent(categoryQuery).toUpperCase();
      if (categories.includes(decoded)) {
        setActive(decoded);
      }
    }
  }, [categoryQuery]);

  useEffect(() => {
    if (active === "VIEW ALL") {
      const allImages = Object.values(galleryData).flat() as GalleryImage[];
      setDisplayImages(allImages);
    } else {
      setDisplayImages(galleryData[active] || []);
    }
  }, [active]);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] landscape:h-[80vh] flex items-center px-6 overflow-hidden bg-royal-purple">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200')` }}
        />
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center pt-24 md:pt-32">
          <span className="text-royal-gold tracking-[0.8em] text-[10px] md:text-[12px] font-sans font-black uppercase block mb-6 drop-shadow-md">
            Established 2018
          </span>
          <h1 className="text-white text-5xl md:text-[6rem] lg:text-[8rem] font-serif leading-[0.9] uppercase tracking-tighter drop-shadow-lg">
            The <br /> <span className="text-royal-gold ml-0 md:ml-32">Portfolio</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10" />
      </section>

      {/* --- FILTER BAR --- */}
      <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 mb-16 border-b border-slate-200 pb-8 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[10px] md:text-[12px] font-sans font-black tracking-[0.3em] transition-all duration-300 uppercase relative pb-4 whitespace-nowrap ${
                active === cat ? 'text-royal-purple' : 'text-slate-400 hover:text-royal-purple'
              }`}
            >
              {cat}
              {active === cat && (
                <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-royal-gold" />
              )}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC SECTION HEADING --- */}
        <div className="mb-12 px-2">
          <h2 className="text-royal-purple font-serif text-4xl md:text-6xl uppercase tracking-tighter transition-all duration-700">
            {active === "VIEW ALL" ? "Masterpiece Collection" : active}
            <span className="text-royal-gold block text-[11px] md:text-[13px] font-sans font-black tracking-[0.6em] mt-4 uppercase">
              Redefining Elegance
            </span>
          </h2>
        </div>

        {/* --- IMAGE GRID --- */}
        {active === "TRANSFORMATIONS" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {(() => {
              const pairs: GalleryImage[][] = [];
              for (let i = 0; i < displayImages.length; i += 2) {
                pairs.push(displayImages.slice(i, i + 2));
              }

              return pairs.map((pair, idx) => (
                <div key={idx} className="relative p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-br from-royal-purple/5 to-royal-gold/5 border border-royal-gold/20 shadow-inner">
                  {/* Visual Background Element to show grouping */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[2.5rem] -z-10" />
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
                    {pair.map((img, imgIdx) => (
                      <div 
                        key={img.id} 
                        onClick={() => setSelectedImg(img.url)}
                        className="group relative rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-700 cursor-pointer aspect-[4/5]"
                      >
                        {/* Before/After Label */}
                        <div className="absolute top-3 left-3 z-30">
                          <span className="bg-royal-purple text-royal-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-royal-gold/30 shadow-lg">
                            {imgIdx === 0 ? "Before" : "After"}
                          </span>
                        </div>

                        <img 
                          src={img.url} 
                          alt={img.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />

                        {/* Central View Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                          <div className="bg-white/95 backdrop-blur-md text-royal-purple p-3 rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                             <Plus size={20} />
                          </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Sub-label for the pair */}
                  <div className="mt-6 text-center">
                    <p className="text-royal-purple font-sans font-black text-[10px] tracking-[0.4em] uppercase opacity-60">
                      Transformation Series • {pair[0].title.split('-')[0]}
                    </p>
                  </div>
                </div>
              ));
            })()}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {displayImages.map((img) => (
              <div 
                key={img.id} 
                onClick={() => setSelectedImg(img.url)}
                className={`group relative rounded-2xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 cursor-pointer
                  ${img.orientation === 'landscape' ? 'sm:col-span-2 lg:col-span-1 aspect-video lg:aspect-[4/5]' : 'aspect-[4/5]'}`}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="bg-white/95 backdrop-blur-md text-royal-purple px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest">View Masterpiece</span>
                    <div className="w-8 h-8 rounded-full bg-royal-gold flex items-center justify-center text-royal-purple">
                      <Plus size={14} />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur shadow-xl translate-y-[160%] group-hover:translate-y-0 transition-transform duration-500 rounded-lg z-20">
                  <p className="text-royal-purple font-sans font-black text-[9px] tracking-widest uppercase text-center">
                    Amravati Studio • {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- FULLSCREEN LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-royal-purple/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-royal-gold transition-colors z-[210]">
              <X size={40} strokeWidth={1} />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
            >
              <img src={selectedImg} alt="Full Preview" className="max-w-full max-h-full object-contain shadow-2xl rounded-lg" />
              <div className="absolute -bottom-8 text-center w-full">
                <p className="text-royal-gold/40 text-[9px] font-black tracking-[0.8em] uppercase">
                  Royal Touch Artistry • Amravati
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-royal-purple selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Suspense fallback={
        <div className="h-screen bg-royal-purple flex items-center justify-center text-royal-gold font-serif text-2xl uppercase tracking-widest animate-pulse">
          Loading Portfolio...
        </div>
      }>
        <GalleryContent />
      </Suspense>
      <Footer />
    </div>
  );
}