"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const serviceCategories = [
  {
    id: "01",
    sectionId: "bridal",
    title: "Royal Bridal",
    highlight: "Makeover",
    subtitle: "The Gold Standard",
    desc: "Premium HD and Airbrush techniques tailored for the modern bride. We specialize in creating a royal standard of elegance for your big day in Amravati.",
    features: ["Pre-Bridal Consultation", "On-Location Service", "Hairstyling & Draping", "Premium Brands"]
  },
  {
    id: "02",
    sectionId: "party",
    title: "Glamour Party",
    highlight: "Makeup",
    subtitle: "Celebration Ready",
    desc: "From subtle daytime elegance to high-glam evening looks, we ensure you stand out at every event with a sophisticated finish.",
    features: ["Customized Look Design", "Long-lasting Finish", "Eyelash Application", "Contouring"]
  },
  {
    id: "03",
    sectionId: "hair",
    title: "Professional",
    highlight: "Hairstyling",
    subtitle: "Sculpting Elegance",
    desc: "Expert chemical treatments including Smoothening and Rebonding. We craft the perfect silhouette for your hair.",
    features: ["Bridal Buns & Updos", "Smoothening & Rebonding", "Global Highlights", "Advanced Care"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-royal-purple selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION: OPTIMIZED FOR LANDSCAPE & TEXT POSITIONING --- */}
      <section 
        id="welcome" 
        className="relative h-[90vh] landscape:h-[110vh] flex items-end md:items-center px-6 overflow-hidden bg-royal-purple pb-12 md:pb-0"
      >
        {/* Background Image with Scale Effect */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[3000ms] scale-110 hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop')` }}
        >
          {/* Layered Overlays for Text Protection */}
          <div className="absolute inset-0 bg-gradient-to-r from-royal-purple via-royal-purple/70 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* pt-32 md:pt-48 pushes the content lower to avoid navbar overlap */}
          <div className="flex flex-col gap-4 pt-40 pb-10 md:pt-56">
            <span className="text-royal-gold tracking-[0.6em] text-[10px] md:text-[12px] font-black uppercase mb-2 block drop-shadow-md">
                Premium Salon Experience
            </span>
            
            <h1 className="text-white text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-serif leading-[0.85] uppercase tracking-tighter drop-shadow-2xl">
              The Art <br />
              <span className="text-royal-gold ml-0 md:ml-24">Of Beauty</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mt-12 md:mt-15 gap-8 border-t border-white/10 pt-10">
               <p className="text-white/80 max-w-sm text-[11px] md:text-[12px] uppercase tracking-[0.1em] leading-loose font-medium">
                 Professional Salon Services based in Amravati, specializing in Royal Bridal and High-Fashion Aesthetics.
               </p>
               
               {/* MODERN GHOST BUTTON */}
               
            </div>
          </div>
        </div>

        {/* Signature Bottom Separator */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* --- SERVICES LIST --- */}
      <section id="offerings" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((service, i) => (
            <div 
              key={service.id} 
              id={service.sectionId}
              className={`flex flex-col lg:flex-row gap-16 items-start mb-48 last:mb-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Visual Card with Deep Shadows */}
              <div className="w-full lg:w-1/2 aspect-square bg-royal-purple relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-2xl">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/5 font-serif text-[15vw] lg:text-[12vw] select-none uppercase tracking-tighter transition-all duration-1000 group-hover:scale-110">
                        {service.id}
                    </span>
                 </div>
                 <div className="absolute top-10 left-10 w-px h-20 bg-royal-gold/40 group-hover:h-32 transition-all duration-700" />
                 <div className="absolute inset-0 bg-royal-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>

              {/* Text Information */}
              <div className="w-full lg:w-1/2 pt-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 bg-royal-gold rotate-45" />
                    <span className="text-royal-purple font-black tracking-[0.5em] text-[10px] uppercase">
                        {service.subtitle}
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-royal-purple mb-8 leading-tight uppercase tracking-tighter">
                  {service.title} <br />
                  <span className="text-royal-gold">{service.highlight}</span>
                </h2>

                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-md font-light tracking-wide italic">
                  {service.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 mb-12 py-10 border-y border-slate-100">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 group/feat cursor-default">
                      <div className="w-1.5 h-1.5 bg-royal-gold rounded-full transition-all group-hover/feat:scale-150 shadow-sm" />
                      <span className="text-[11px] font-bold text-royal-purple/60 tracking-[0.2em] uppercase group-hover:text-royal-purple transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* MODERN GRADIENT ACTION BUTTON */}
                <button className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold rounded-xl shadow-[0_20px_40px_rgba(45,22,56,0.2)] transition duration-300 ease-out">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-royal-purple via-[#402052] to-royal-purple"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-royal-gold opacity-10 group-hover:scale-[2] ease-out"></span>
                  <span className="relative text-white text-[11px] font-black tracking-[0.4em] uppercase flex items-center gap-3">
                    Book Session
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT FOOTER CALLOUT --- */}
      <section id="contact" className="bg-slate-50 border-t border-slate-200 py-40 text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h3 className="text-royal-purple font-serif text-5xl md:text-7xl mb-8 uppercase tracking-tighter leading-none">
                Experience <br/> <span className="text-royal-gold">Royal Luxury</span>
            </h3>
            <p className="text-slate-400 mb-14 text-[11px] uppercase tracking-[0.5em] font-black">
                Amravati's Premier Artistry Studio
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
                <button className="group relative px-14 py-6 bg-royal-purple rounded-full overflow-hidden transition-all shadow-[0_25px_50px_-12px_rgba(45,22,56,0.5)]">
                   <span className="relative z-10 text-white text-[11px] font-black tracking-[0.4em] uppercase transition-colors group-hover:text-royal-gold">Direct Message</span>
                   <div className="absolute top-0 left-0 w-full h-full bg-black -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                </button>

                <button className="group relative px-14 py-6 border border-royal-purple/30 rounded-full overflow-hidden transition-all hover:border-royal-purple shadow-sm">
                   <span className="relative z-10 text-royal-purple text-[11px] font-black tracking-[0.4em] uppercase transition-colors group-hover:text-white">Studio Location</span>
                   <div className="absolute inset-0 bg-royal-purple translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                </button>
            </div>
         </div>
         {/* Subtle background branding */}
         <div className="absolute -bottom-20 -right-20 opacity-[0.03] select-none pointer-events-none">
            <span className="font-serif text-[25vw] uppercase">Royal</span>
         </div>
      </section>

      <Footer />
    </div>
  );
}