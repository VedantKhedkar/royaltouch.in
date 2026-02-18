"use client";
import { getImagePath, BRAND_ASSETS } from "@/lib/media";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-royal-purple flex items-center py-16 lg:py-0">
      {/* Ambient Background Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-royal-gold/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-royal-gold/10 blur-[140px] rounded-full" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:32px_32px]" />

      {/* CONTAINER STRATEGY:
          - Mobile: flex-col (Portrait stacked on top of text)
          - Landscape/Desktop: lg:flex-row (Side-by-side layout)
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        {/* LEFT COLUMN: Text Content 
            - Mobile: order-2 (Appears below the image), items-center (Centered text), pt-12
            - Landscape/Desktop: lg:order-1 (Appears on the left), lg:items-start (Left-aligned text), lg:pt-0
        */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 flex-1 pt-8 lg:pt-30">
          
          {/* ESTD Line: Horizontal lines on mobile; single line on desktop */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 md:w-12 h-px bg-royal-gold/40"></div>
            <span className="text-royal-gold font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase">
              Estd . 2016
            </span>
            <div className="hidden lg:block w-12 h-px bg-royal-gold/40"></div>
          </div>

          {/* Heading: Responsive font sizes from text-5xl (Mobile) to text-8xl (Desktop) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-black text-royal-gold leading-[0.9] uppercase tracking-tighter">
            Pooja <br className="hidden lg:block" /> Mankar
          </h1>

          <div className="mt-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-royal-gold/60" />
            <p className="text-white text-xs md:text-sm lg:text-base tracking-[0.3em] lg:tracking-[0.4em] uppercase font-bold opacity-90">
              Founder & Professional Makeup Artist
            </p>
          </div>

          <p className="mt-8 max-w-lg text-white/60 text-sm md:text-base lg:text-lg leading-loose font-medium">
            Experience premium beauty, professional training, and a royal standard
            of care. Redefining elegance and expertise in the heart of Amravati.
          </p>

          {/* BUTTONS:
              - Mobile: flex-col (Stacked buttons)
              - Tablet/Desktop: sm:flex-row (Side-by-side buttons)
          */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-10 py-5 bg-royal-gold rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:scale-95">
              <span className="relative z-10 text-royal-purple font-black text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                Book Session <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </span>
            </button>

            <button className="group relative w-full sm:w-auto px-10 py-5 border border-white/20 rounded-full transition-all duration-500 hover:border-royal-gold active:scale-95">
              <span className="relative z-10 text-white font-bold text-[11px] tracking-[0.2em] uppercase transition-colors group-hover:text-royal-gold">
                Explore Courses
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Portrait Image
            - Mobile: order-1 (Appears at the top), max-w-[280px]
            - Landscape/Desktop: lg:order-2 (Appears on the right), lg:w-1/2, lg:max-w-[500px]
        */}
        <div className="relative flex items-center justify-center w-full lg:w-1/2 order-1 lg:order-2">
          {/* Backlight glow centered behind the portrait */}
          <div className="absolute w-[60%] h-[60%] bg-royal-gold/20 blur-[100px] rounded-full animate-pulse" />

          <div className="relative z-20 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px]">
            <img
              src={getImagePath(BRAND_ASSETS.MAIN_HERO)}
              alt="Pooja Mankar"
              className="w-full h-auto object-contain drop-shadow-2xl pt-12"
              style={{
                /* Linear gradient mask ensures the image blends into the background at the bottom */
                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              }}
              loading="eager"
            />
          </div>
        </div>

      </div>

      {/* Visual Anchor / Bottom Gradient for a smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}