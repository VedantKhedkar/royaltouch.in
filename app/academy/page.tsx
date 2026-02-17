"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

const academySections = [
  {
    id: "pro-courses",
    sectionId: "courses",
    title: "Pro Academy",
    highlight: "Courses",
    subtitle: "Master the Craft",
    image: "https://images.unsplash.com/photo-1522338223523-decac27515c3?q=80&w=1000&auto=format&fit=crop",
    desc: "From basic fundamentals to advanced professional mastery, our curriculum is designed for aspiring artists looking to lead the industry in Amravati.",
    items: ["Basic Beautician Course", "Advanced Makeup Mastery", "Professional Hair Styling", "Bridal Artistry Specialization"],
    label: "Education",
    icon: <BookOpen className="w-10 h-10" />
  },
  {
    id: "workshops",
    sectionId: "masterclass",
    title: "Masterclass",
    highlight: "Workshops",
    subtitle: "Refine Your Skills",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
    desc: "Short-term intensive sessions focusing on trending techniques like Airbrushing, International Hair-styles, and Skin Science.",
    items: ["Self-Makeup Workshops", "Airbrush Masterclasses", "Celebrity Style Hair", "Product Knowledge Sessions"],
    label: "Upskill",
    icon: <Sparkles className="w-10 h-10" />
  }
];

export default function AcademyPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-royal-purple selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section id="academy-hero" className="relative h-[90vh] landscape:h-[110vh] flex items-end md:items-center px-6 overflow-hidden bg-royal-purple pb-12 md:pb-0">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[5000ms] hover:scale-105"
          style={{ backgroundImage: `url('/assets/academy.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-royal-purple via-royal-purple/85 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col gap-4 pt-40 pb-10 md:pt-56">
            <span className="text-royal-gold tracking-[0.6em] text-[10px] md:text-[12px] font-black uppercase mb-2 block drop-shadow-md">
              ISO 9001:2015 Certified Institute
            </span>
            <h1 className="text-white text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-serif leading-[0.85] uppercase tracking-tighter drop-shadow-2xl">
              Royal <br /> <span className="text-royal-gold ml-0 md:ml-24">Academy</span>
            </h1>

            <div className="grid md:grid-cols-2 mt-10 pt-10 border-t border-white/10 gap-12 items-end">
               <p className="text-white/70 max-w-sm text-[11px] md:text-[12px] uppercase tracking-[0.2em] leading-loose font-medium">
                 Amravati's premier vocational institute for high-end beauty education. Learn from industry leaders in a professional environment.
               </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* --- 1. PRO COURSES SECTION --- */}
      <section id="courses" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-1/2 aspect-square relative group">
                 <div className="absolute -top-10 -left-10 text-[18rem] font-serif text-slate-50 select-none z-0 leading-none">
                   {academySections[0].title.charAt(0)}
                 </div>
                 <div className="relative z-10 w-full h-full bg-[#1A0B21] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-2xl">
                    <img 
                      src={academySections[1].image} 
                      alt={academySections[1].title} 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-royal-purple/40">
                        <div className="text-royal-gold group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                            {academySections[0].icon}
                        </div>
                        <span className="mt-6 text-royal-gold text-[10px] font-black tracking-[0.5em] uppercase">
                            {academySections[0].label}
                        </span>
                    </div>
                 </div>
              </div>

              <div className="w-full lg:w-1/2 pt-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 bg-royal-gold rotate-45" />
                    <span className="text-royal-purple font-black tracking-[0.4em] text-[10px] uppercase">
                        {academySections[0].subtitle}
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-royal-purple mb-8 leading-tight uppercase tracking-tighter">
                  {academySections[0].title} <br /> <span className="text-royal-gold">{academySections[0].highlight}</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-md font-light italic">
                  {academySections[0].desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 py-10 border-y border-slate-100">
                  {academySections[0].items.map((item) => (
                    <div key={item} className="flex items-center gap-4 group/item cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-royal-gold shadow-sm" />
                      <span className="text-[11px] font-bold text-royal-purple/60 tracking-widest uppercase group-hover:text-royal-purple transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* --- 2. CERTIFICATION SECTION --- */}
      <section id="certification" className="py-32 bg-[#FAF9F6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[1.4/1] bg-white p-8 md:p-12 shadow-2xl rounded-sm border-[12px] border-royal-purple relative group">
                    <div className="absolute inset-0 border-2 border-royal-gold/30 m-2 pointer-events-none" />
                    <div className="flex justify-between items-start mb-8">
                        <Award className="w-12 h-12 text-royal-gold" />
                        <div className="text-right">
                           <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Credential ID: RT-2024-882</p>
                        </div>
                    </div>
                    <div className="text-center space-y-4">
                        <h4 className="font-serif text-2xl md:text-3xl text-royal-purple uppercase tracking-widest">Diploma of Professional Excellence</h4>
                        <p className="font-serif text-lg italic text-slate-500">Presented to</p>
                        <div className="h-px bg-slate-200 w-3/4 mx-auto" />
                        <p className="font-serif text-3xl text-royal-gold">Artistry Graduate</p>
                        <p className="text-[10px] uppercase tracking-[0.3em] leading-relaxed max-w-sm mx-auto text-slate-400">
                            Validated by Royal Touch Beauty Care & Academy for fulfilling all curriculum requirements.
                        </p>
                    </div>
                    <div className="flex justify-between items-end mt-12">
                        <div className="w-20 h-px bg-slate-300" />
                        <div className="w-20 h-20 rounded-full bg-royal-purple/5 border-2 border-royal-gold/20 flex items-center justify-center">
                            <span className="text-royal-gold/40 font-serif text-xs italic">Seal</span>
                        </div>
                        <div className="w-20 h-px bg-slate-300" />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-royal-gold tracking-[0.5em] text-[10px] font-black uppercase">Validation</span>
                <h2 className="text-4xl md:text-6xl font-serif text-royal-purple uppercase tracking-tighter">Government & ISO <br/> <span className="text-royal-gold">Recognized</span></h2>
                <p className="text-slate-500 text-base leading-loose font-light">
                    Our diplomas are Skill India validated and ISO certified. We provide students with credentials that are respected across the international beauty industry.
                </p>
                <ul className="space-y-4">
                    {["ISO 9001:2015 Certified Institute", "Skill India Validated Diploma", "International Placement Support", "Professional Business Kit"].map(t => (
                        <li key={t} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-royal-gold rounded-full" />
                            <span className="text-xs font-black uppercase tracking-widest text-royal-purple/70">{t}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. WORKSHOPS SECTION --- */}
      <section id="masterclass" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
              <div className="w-full lg:w-1/2 aspect-square relative group">
                 <div className="absolute -top-10 -left-10 text-[18rem] font-serif text-slate-50 select-none z-0 leading-none">
                   {academySections[1].title.charAt(0)}
                 </div>
                 <div className="relative z-10 w-full h-full bg-[#1A0B21] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-2xl">
                    <img 
                      src={academySections[1].image} 
                      alt={academySections[1].title} 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-royal-purple/40">
                        <div className="text-royal-gold group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                            {academySections[1].icon}
                        </div>
                        <span className="mt-6 text-royal-gold text-[10px] font-black tracking-[0.5em] uppercase">
                            {academySections[1].label}
                        </span>
                    </div>
                 </div>
              </div>

              <div className="w-full lg:w-1/2 pt-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 bg-royal-gold rotate-45" />
                    <span className="text-royal-purple font-black tracking-[0.4em] text-[10px] uppercase">
                        {academySections[1].subtitle}
                    </span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-royal-purple mb-8 leading-tight uppercase tracking-tighter">
                  {academySections[1].title} <br /> <span className="text-royal-gold">{academySections[1].highlight}</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-md font-light italic">
                  {academySections[1].desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 py-10 border-y border-slate-100">
                  {academySections[1].items.map((item) => (
                    <div key={item} className="flex items-center gap-4 group/item cursor-default">
                      <CheckCircle2 className="w-4 h-4 text-royal-gold shadow-sm" />
                      <span className="text-[11px] font-bold text-royal-purple/60 tracking-widest uppercase group-hover:text-royal-purple transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* --- ENROLLMENT CTA --- */}
      <section id="enroll" className="bg-slate-50 border-t border-slate-200 py-40 text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h3 className="text-royal-purple font-serif text-5xl md:text-7xl mb-8 uppercase tracking-tighter leading-none">
                Start Your <br/> <span className="text-royal-gold">Career Journey</span>
            </h3>
            <p className="text-slate-400 mb-14 text-[11px] uppercase tracking-[0.5em] font-black max-w-sm mx-auto leading-loose">
                Amravati's top-rated academy for the next generation of professional artists.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
                <button className="group relative px-14 py-6 bg-royal-purple rounded-full overflow-hidden transition-all shadow-[0_25px_50px_-12px_rgba(45,22,56,0.5)]">
                   <span className="relative z-10 text-white text-[11px] font-black tracking-[0.4em] uppercase transition-colors group-hover:text-royal-gold">Apply Online</span>
                   <div className="absolute top-0 left-0 w-full h-full bg-black -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                </button>
               
            </div>
         </div>
         <GraduationCap className="absolute -bottom-20 -right-20 opacity-[0.03] text-royal-purple select-none pointer-events-none w-96 h-96 -rotate-12" />
      </section>

      <Footer />
    </div>
  );
}