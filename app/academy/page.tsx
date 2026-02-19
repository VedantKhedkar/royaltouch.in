"use client";
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2, ChevronDown, User, Phone, Mail, Scissors, Heart } from "lucide-react";

// --- DETAILED COURSE DATA ---
const detailedCurriculum = [
  {
    category: "SKIN & BEAUTY",
    courses: [
      { 
        title: "1. Basic Beautician Course", 
        subtitle: "Beginner Level",
        items: ["Skin Basics & Hygiene", "Threading & Waxing", "Basic Facials & Cleanup", "Bleach Application", "Basic Manicure & Pedicure", "Basic Hair Cutting", "Basic Hair Styling", "Mehendi Basics", "Client Handling"] 
      },
      { 
        title: "6. Advanced Skin Treatment", 
        subtitle: "Skin Specialist",
        items: ["Skin analysis", "Acne & Pigmentation treatment", "Anti-ageing therapies", "Chemical peel basics", "Hydrafacial procedure", "Skin polishing", "Detan therapy", "Oily & dry skin solutions"] 
      },
      { 
        title: "7. Salon Advanced Skin Therapy", 
        subtitle: "Add-on Module",
        items: ["Microdermabrasion basics", "Open pores treatment", "Dark circle treatment", "Skin rejuvenation therapy"] 
      }
    ]
  },
  {
    category: "MAKEUP ARTISTRY",
    courses: [
      { 
        title: "2. Professional Makeup Course", 
        subtitle: "Beginner to Pro",
        items: ["Skin preparation", "Foundation & base correction", "Day & Party Makeup", "Engagement & Bridal Makeup", "HD Makeup", "Nude Makeup", "South Indian Bridal Look", "Contouring & Highlighting", "Saree Draping"] 
      },
      { 
        title: "3. Advanced Bridal Masterclass", 
        subtitle: "Bridal Specialist",
        items: ["HD & Airbrush Techniques", "Long-lasting bridal base", "Waterproof makeup", "Bridal eye detailing", "Lash application", "Face correction & sculpting", "Jewellery & Dupatta setting", "Photography Look"] 
      }
    ]
  },
  {
    category: "HAIR & DESIGN",
    courses: [
      { 
        title: "4. Professional Hair Styling", 
        subtitle: "Event Specialist",
        items: ["Basic to advanced styling", "Party hairstyles", "Bridal bun styles", "Juda & flower setting", "Curls & waves", "Volume techniques", "Hair padding & extensions use"] 
      },
      { 
        title: "5. Chemical Hair Treatment", 
        subtitle: "High Demand Service",
        items: ["Hair Smoothening", "Rebonding", "Keratin Treatment", "Hair Botox", "Global Coloring", "Highlights & Balayage", "Hair Spa Techniques", "Damage control & after care"] 
      }
    ]
  },
  {
    category: "BUSINESS & ART",
    courses: [
      { 
        title: "11. Salon Management", 
        subtitle: "Business Training",
        items: ["Salon setup guidance", "Client consultation", "Pricing & packages", "Marketing & Instagram growth", "Bridal package planning", "Customer retention tips"] 
      },
      { 
        title: "9. Nail Art & Extension", 
        subtitle: "Modern Art",
        items: ["Basic nail art", "Gel polish", "Nail extensions", "French nails", "Bridal nail designs"] 
      },
      { 
        title: "8. Saree Draping & Wrapping", 
        subtitle: "Bridal Specialized",
        items: ["Bridal saree draping", "Pre-pleating techniques", "Side wrapping styles", "South Indian drape", "Lehenga draping", "Dupatta draping styles"] 
      }
    ]
  }
];

export default function AcademyPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'SELECT COURSE'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "919021541314"; // Replace with your actual number
    const message = `Dear Team Royal Touch Beauty Care & Academy,

I recently visited your website and saw your amazing growth and achievements. I am interested in joining the Academy.

Kindly guide me through the admission process.

Looking forward to joining the makeup artist journey.

*My Details:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Interested Course:* ${formData.course}

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen selection:bg-royal-purple selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* --- HERO SECTION (Original) --- */}
      <section id="academy-hero" className="relative h-[90vh] flex items-end md:items-center px-6 overflow-hidden bg-royal-purple pb-12 md:pb-0">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
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

      {/* --- PRO COURSES SECTION --- */}
      <section id="courses" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-1/2 aspect-square relative group">
                  <div className="absolute -top-10 -left-10 text-[18rem] font-serif text-slate-50 select-none z-0 leading-none">P</div>
                  <div className="relative z-10 w-full h-full bg-[#1A0B21] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522338223523-decac27515c3?q=80&w=1000" 
                      alt="Academy" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-royal-purple/40">
                        <BookOpen className="w-12 h-12 text-royal-gold" />
                        <span className="mt-6 text-royal-gold text-[10px] font-black tracking-[0.5em] uppercase">Education</span>
                    </div>
                  </div>
              </div>

              <div className="w-full lg:w-1/2 pt-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 bg-royal-gold rotate-45" />
                    <span className="text-royal-purple font-black tracking-[0.4em] text-[10px] uppercase">Master the Craft</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-royal-purple mb-8 leading-tight uppercase tracking-tighter">
                  Pro Academy <br /> <span className="text-royal-gold">Courses</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-md font-light italic">
                  From basic fundamentals to advanced professional mastery, our curriculum is designed for aspiring artists looking to lead the industry in Amravati.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 py-10 border-y border-slate-100">
                  {["Basic Beautician Course", "Advanced Makeup Mastery", "Professional Hair Styling", "Bridal Artistry Specialization"].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <CheckCircle2 className="w-4 h-4 text-royal-gold shadow-sm" />
                      <span className="text-[11px] font-bold text-royal-purple/60 tracking-widest uppercase">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* --- DETAILED CURRICULUM --- */}
      <section id="curriculum" className="py-24 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-royal-gold text-xs font-black uppercase tracking-[0.5em]">Academic Catalogue</span>
            <h2 className="text-4xl md:text-6xl font-serif text-royal-purple mt-4 uppercase tracking-tighter">Specialized <span className="text-royal-gold">Modules</span></h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {detailedCurriculum.map((cat, idx) => (
              <button 
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === idx ? 'bg-royal-purple text-white shadow-xl' : 'bg-white text-slate-400 hover:text-royal-purple border border-slate-200'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedCurriculum[activeTab].courses.map((course, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-royal-gold/30 transition-all group shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-royal-purple/5 text-royal-purple rounded-xl flex items-center justify-center group-hover:bg-royal-purple group-hover:text-royal-gold transition-colors">
                    <Sparkles size={18} />
                  </div>
                  <span className="text-royal-gold text-[8px] font-black uppercase tracking-widest border border-royal-gold/20 px-2 py-1 rounded">
                    {course.subtitle}
                  </span>
                </div>
                <h3 className="text-royal-purple font-serif text-xl mb-6 uppercase tracking-tight">{course.title}</h3>
                <ul className="space-y-3">
                  {course.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={12} className="text-royal-gold mt-1 shrink-0" />
                      <span className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-wider font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATION SECTION --- */}
      <section id="certification" className="py-32 bg-white border-y border-slate-200">
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
                </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-royal-gold tracking-[0.5em] text-[10px] font-black uppercase">Validation</span>
                <h2 className="text-4xl md:text-6xl font-serif text-royal-purple uppercase tracking-tighter">Government & ISO <br/> <span className="text-royal-gold">Recognized</span></h2>
                <p className="text-slate-500 text-base leading-loose font-light">
                    Our diplomas are Skill India validated and ISO certified. We provide students with credentials that are respected across the international beauty industry.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENROLLMENT CTA & FORM --- */}
      <section id="enroll" className="bg-royal-purple py-32 px-6 relative overflow-hidden">
        <GraduationCap className="absolute top-0 right-0 opacity-10 text-white w-64 h-64 rotate-12" />
        <Heart className="absolute bottom-0 left-0 opacity-10 text-royal-gold w-48 h-48 -rotate-12" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-white space-y-8">
              <h3 className="text-5xl md:text-7xl font-serif uppercase tracking-tighter leading-[0.9]">
                Start Your <br/> <span className="text-royal-gold">Career Journey</span>
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md font-light uppercase tracking-widest">
                Amravati's top-rated academy for the next generation of professional artists. Learn Makeup, Hair, Skin and Business from the masters.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <p className="text-royal-gold text-2xl font-serif">10+</p>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em]">Specialized Courses</p>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <p className="text-royal-gold text-2xl font-serif">100%</p>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em]">Hands-on Training</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <h4 className="text-royal-purple font-serif text-3xl uppercase tracking-tight mb-2">Apply Online</h4>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-8">Secure your seat for the upcoming batch</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
                  <input 
                    type="text" 
                    required
                    placeholder="FULL NAME" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl text-[10px] font-bold outline-none focus:ring-1 focus:ring-royal-gold" 
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
                  <input 
                    type="tel" 
                    required
                    placeholder="PHONE NUMBER" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl text-[10px] font-bold outline-none focus:ring-1 focus:ring-royal-gold" 
                  />
                </div>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
                  <select 
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-xl text-[10px] font-bold outline-none appearance-none cursor-pointer"
                  >
                    <option>SELECT COURSE</option>
                    <option>BASIC BEAUTICIAN</option>
                    <option>PROFESSIONAL MAKEUP</option>
                    <option>ADVANCED BRIDAL MASTERCLASS</option>
                    <option>SALON MANAGEMENT</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-royal-purple text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-xl hover:bg-black transition-colors shadow-lg shadow-royal-purple/20"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}