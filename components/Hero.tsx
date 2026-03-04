"use client";
import { getImagePath, BRAND_ASSETS } from "@/lib/media";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-royal-purple flex items-center py-12 lg:py-0">
      {/* Ambient Background Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-royal-gold/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-royal-gold/10 blur-[140px] rounded-full" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-20">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 flex-1 pt-0 lg:pt-30">
          
          {/* ESTD Line - Reduced pt on mobile */}
          <div className="flex items-center gap-4 mb-2 lg:mb-6 pt-4 lg:pt-12">
            <div className="w-6 md:w-12 h-px bg-royal-gold/40 "></div>
            <span className="text-royal-gold font-bold text-[10px] md:text-[11px] tracking-[0.4em] uppercase pt-1">
              Estd . 2016
            </span>
            <div className="hidden lg:block w-12 h-px bg-royal-gold/40"></div>
          </div>

          {/* Heading: Optimized viewBox for mobile to remove vertical gaps */}
          <h1 className="w-full max-w-4xl">
            <svg
              viewBox="0 0 1200 340" 
              className="w-full h-auto overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="nameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0cc0df" />
                  <stop offset="100%" stopColor="#ffde59" />
                </linearGradient>
              </defs>

              {/* First line - Adjusted Y for mobile tightness */}
              <text
                x="50%"
                y="140"
                textAnchor="middle"
                fill="url(#nameGradient)"
                className="font-serif font-black uppercase tracking-tight lg:hidden"
                style={{ fontSize: "180px" }}
              >
                Pooja
              </text>
              <text
                x="0"
                y="160"
                fill="url(#nameGradient)"
                className="font-serif font-black uppercase tracking-tight hidden lg:block"
                style={{ fontSize: "200px" }}
              >
                Pooja
              </text>

              {/* Second line - Adjusted Y for mobile tightness */}
              <text
                x="50%"
                y="300"
                textAnchor="middle"
                fill="url(#nameGradient)"
                className="font-serif font-black uppercase tracking-tight lg:hidden"
                style={{ fontSize: "180px" }}
              >
                Mankar
              </text>
              <text
                x="0"
                y="320"
                fill="url(#nameGradient)"
                className="font-serif font-black uppercase tracking-tight hidden lg:block"
                style={{ fontSize: "200px" }}
              >
                Mankar
              </text>
            </svg>
          </h1>

          <div className="mt-2 lg:mt-0 flex items-center gap-0">
            <p className="text-white text-[10px] md:text-sm lg:text-base tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold opacity-90">
              Founder & Professional Makeup Artist
            </p>
          </div>

          <p className="mt-4 lg:mt-8 max-w-lg text-white/60 text-xs md:text-base lg:text-lg leading-relaxed lg:leading-loose font-medium">
            Experience premium beauty, professional training, and a royal standard
            of care. Redefining elegance and expertise in the heart of Amravati.
          </p>

          <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-10 py-4 lg:py-5 bg-royal-gold rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:scale-95">
              <span className="relative z-10 text-royal-purple font-black text-[10px] lg:text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                Book Session <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </span>
            </button>

            <button className="group relative w-full sm:w-auto px-10 py-4 lg:py-5 border border-white/20 rounded-full transition-all duration-500 hover:border-royal-gold active:scale-95">
              <span className="relative z-10 text-white font-bold text-[10px] lg:text-[11px] tracking-[0.2em] uppercase transition-colors group-hover:text-royal-gold">
                Explore Courses
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Portrait Image */}
        <div className="relative flex items-center justify-center w-full lg:w-1/2 order-1 lg:order-2">
          {/* Reduced Pulse Glow size for mobile */}
          <div className="absolute w-[80%] lg:w-[60%] h-[80%] lg:h-[60%] bg-royal-gold/20 blur-[80px] lg:blur-[100px] rounded-full animate-pulse" />

          <div className="relative z-20 w-full max-w-[220px] sm:max-w-[320px] lg:max-w-[500px]">
            <img
              src={getImagePath(BRAND_ASSETS.MAIN_HERO)}
              alt="Pooja Mankar"
              className="w-full h-auto object-contain drop-shadow-2xl pt-4 lg:pt-12"
              style={{
                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              }}
              loading="eager"
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}