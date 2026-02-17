"use client";
import { getImagePath, BRAND_ASSETS } from "@/lib/media";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-royal-purple flex items-center pt-20 lg:pt-0">
      {/* Ambient Background Glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-royal-gold/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-royal-teal/20 blur-[160px] rounded-full" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* TOP (Mobile) / RIGHT (Desktop): Landscape-Optimized Artist Image */}
        {/* We move this div up in the DOM or use order-first on mobile */}
        <div className="relative flex items-center justify-center w-full order-1 lg:order-2 mt-10 lg:mt-0 min-h-[300px] md:min-h-[450px] lg:min-h-[600px]">
          {/* Soft glow behind subject */}
          <div className="absolute w-[80%] h-[50%] bg-royal-gold/15 blur-[100px] rounded-full"></div>

          <img
            src={getImagePath(BRAND_ASSETS.MAIN_HERO)}
            alt="Lead Artist Portrait"
            className="relative z-20 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px] h-auto object-contain transition-transform duration-1000 hover:scale-105 mt-2.5"
            loading="eager"
          />
        </div>

        {/* BOTTOM (Mobile) / LEFT (Desktop): Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* ESTD Line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 md:w-16 h-[1.5px] bg-royal-gold/60"></div>
            <span className="text-royal-gold font-bold text-[10px] md:text-[12px] tracking-[0.4em] uppercase">
              Estd . 2016
            </span>
            <div className="w-8 md:w-16 h-[1.5px] bg-royal-gold/60"></div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-royal-gold leading-[1.05] uppercase tracking-tight drop-shadow-md">
            Artistry & <br className="hidden lg:block" /> Education
          </h1>

          <p className="mt-4 text-white text-xs md:text-lg lg:text-xl tracking-[0.5em] uppercase font-light opacity-95">
            Beauty Care & Academy
          </p>

          <p className="mt-6 lg:mt-8 max-w-xl text-white/70 text-sm md:text-lg leading-relaxed">
            Experience premium beauty, professional training, and a royal standard
            of care. Where elegance meets expertise in the heart of Amravati.
          </p>

          <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center gap-6 lg:gap-8 w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-14 py-4 bg-royal-gold text-royal-purple font-black text-xs tracking-[0.3em] transition-all hover:bg-royal-yellow hover:scale-105 active:scale-95 shadow-[0_15px_30px_-10px_rgba(212,175,55,0.4)] overflow-hidden">
              <span className="relative z-10">BOOK SESSION</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
            </button>

            <button className="relative text-white py-3 px-2 text-xs tracking-[0.4em] font-bold transition-all uppercase group">
              Explore Courses
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-royal-gold group-hover:w-full transition-all duration-500"></span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}