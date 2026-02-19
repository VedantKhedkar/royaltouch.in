"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Check } from "lucide-react";

const WHATSAPP_NUMBER = "919685232913"; 

const serviceCategories = [
  {
    id: "01",
    sectionId: "makeup",
    title: "Makeup",
    highlight: "Services",
    subtitle: "Artistry & Elegance",
    image: "./assets/makeupservices.png",
    desc: "Professional makeup services include bridal and event looks tailored to your unique features and occasions.",
    features: ["Bridal Makeup", "HD Makeup", "Airbrush Makeup", "Party Makeup", "Engagement Makeup", "Reception Makeup", "Haldi / Mehendi Makeup", "South Indian Bridal Look", "Nude / Natural Makeup", "Portfolio & Photoshoot Makeup", "Saree Draping & Hair Styling"]
  },
  {
    id: "02",
    sectionId: "facials",
    title: "Skin Care &",
    highlight: "Facials",
    subtitle: "Radiant Glow",
    image: "./assets/skincare.png",
    desc: "Advanced facials and skin treatments designed to improve glow, treat acne, and reduce pigmentation.",
    features: ["Basic Cleanup", "Gold Facial", "Diamond Facial", "Pearl Facial", "Anti-Tan Facial", "Acne Treatment Facial", "Pigmentation Treatment", "Skin Brightening Treatment", "Anti-Ageing Facial", "Hydrating Facial (Dry Skin)", "Oily Skin Treatment", "Chemical Peel Treatment", "Hydrafacial", "Skin Polishing"]
  },
  {
    id: "03",
    sectionId: "advanced-skin",
    title: "Advanced",
    highlight: "Skin Clinic",
    subtitle: "Clinical Care",
    image: "./assets/skinclinic.png",
    desc: "Targeted therapy for specific skin concerns using modern dermatological approaches.",
    features: ["Acne & Pimple Treatment", "Dark Circle Treatment", "Open Pores Treatment", "Skin Whitening Therapy", "Detan Therapy", "Microdermabrasion", "Body Polishing"]
  },
  {
    id: "04",
    sectionId: "hair",
    title: "Hair",
    highlight: "Studio",
    subtitle: "The Hair Street",
    image: "./assets/hairstudio.png",
    desc: "From precision cuts to chemical smoothing, we improve hair health and manageability.",
    features: ["Hair Cutting", "Hair Styling & Blow Dry", "Hair Spa", "Hair Smoothening", "Hair Straightening / Rebonding", "Keratin Treatment", "Hair Botox", "Hair Colour (Global / Highlights)", "Root Touch-Up", "Hair Fall Treatment", "Dandruff Treatment"]
  },
  {
    id: "05",
    sectionId: "hair-scalp",
    title: "Scalp",
    highlight: "Therapy",
    subtitle: "Deep Care",
    image: "./assets/scalptherapy.png",
    desc: "Revitalize your roots with our deep conditioning and detox therapies.",
    features: ["Deep Conditioning Therapy", "Dry & Damaged Hair Repair", "Scalp Detox", "Oil Therapy & Massage"]
  },
  {
    id: "06",
    sectionId: "hand-foot",
    title: "Hand &",
    highlight: "Foot Care",
    subtitle: "Pure Relaxation",
    image: "./assets/handfoot.png",
    desc: "Comprehensive grooming for hands and feet, including therapeutic spa treatments.",
    features: ["Manicure", "Pedicure", "Spa Manicure & Pedicure", "Detan Pedicure", "Heel Crack Treatment", "Nail Shaping & Polish"]
  },
  {
    id: "07",
    sectionId: "nails",
    title: "Nail",
    highlight: "Artistry",
    subtitle: "Glamour Tips",
    image: "./assets/nailartisty.png",
    desc: "Elevate your look with custom extensions and sophisticated nail art designs.",
    features: ["Nail Art", "Gel Polish", "Nail Extensions", "French Nails"]
  },
  {
    id: "08",
    sectionId: "waxing",
    title: "Hair",
    highlight: "Removal",
    subtitle: "Smooth Skin",
    image: "./assets/hairremoval.png",
    desc: "Essential grooming services using premium waxes for a smooth, painless finish.",
    features: ["Full Body Wax", "Rica Wax / Chocolate Wax", "Underarms Wax", "Face Wax", "Bikini Wax", "Threading (Full Face)"]
  },
  {
    id: "09",
    sectionId: "eye-brow",
    title: "Eye &",
    highlight: "Brow",
    subtitle: "The Perfect Frame",
    image: "./assets/eyebrow.png",
    desc: "Enhance your gaze with professional shaping and lash extensions.",
    features: ["Eyebrow Shaping", "Eyelash Extensions", "Lash Lifting", "Eyebrow Tinting", "Microblading"]
  },
  {
    id: "10",
    sectionId: "bridal-pkg",
    title: "Bridal",
    highlight: "Packages",
    subtitle: "Pre-Wedding Luxury",
    image: "./assets/bridalpackages.png",
    desc: "Complete pre-bridal skin and body care to prepare you for your royal debut.",
    features: ["Full Pre-Bridal Skin Care", "Body Polishing", "Hair Spa & Grooming", "Bridal Makeup & Hairstyling", "Saree / Dupatta Draping"]
  },
  {
    id: "11",
    sectionId: "special",
    title: "Special",
    highlight: "Treatments",
    subtitle: "Wellness Hub",
    image: "./assets/specialtreatment.png",
    desc: "Stress relief and relaxation therapies to rejuvenate your mind and body.",
    features: ["Body Spa & Relaxation Massage", "Aroma Therapy", "Stress Relief Head Massage"]
  }
];

export default function ServicesPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleWhatsAppSubmit = (categoryTitle: string, categoryFeatures: string[]) => {
    const relevantSelections = selectedServices.filter(s => categoryFeatures.includes(s));
    
    if (relevantSelections.length === 0) {
      alert("Please select at least one service from this section to submit your request.");
      return;
    }

    const selectedItemsList = relevantSelections.map(s => `✅ ${s}`).join('\n');
    
    const message = `Dear Team Royal Touch Beauty Care & Academy,

I recently visited your website and I am interested in the following service:

*Service Name:* ${categoryTitle}
${selectedItemsList}

Kindly guide me through the next steps for registration and payment.

Thank you.`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen selection:bg-royal-purple selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="welcome" className="relative h-[80vh] flex items-center px-6 overflow-hidden bg-royal-purple">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-[3000ms] scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop')` }}
        />
        <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 text-center lg:text-left">
            <span className="text-royal-gold tracking-[0.6em] text-[12px] font-black uppercase mb-4 block">
                Royal Touch Beauty Care
            </span>
            <h1 className="text-white text-5xl sm:text-7xl md:text-[7rem] font-serif leading-[0.85] uppercase tracking-tighter">
              Service <br />
              <span className="text-royal-gold">Catalog</span>
            </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* --- SERVICES LIST --- */}
      <section id="offerings" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((service, i) => (
            <div 
              key={service.id} 
              id={service.sectionId}
              className={`flex flex-col lg:flex-row gap-16 items-start mb-40 last:mb-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Simplified Image Card */}
              <div className="w-full lg:w-1/3 aspect-square bg-royal-purple relative overflow-hidden shadow-2xl rounded-2xl flex-shrink-0 group">
                 <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                 />
              </div>

              {/* Selection Content */}
              <div className="w-full lg:w-2/3 pt-4">
                <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-royal-gold rotate-45" />
                    <span className="text-royal-purple font-black tracking-[0.5em] text-[10px] uppercase">
                        {service.subtitle}
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif text-royal-purple mb-6 leading-tight uppercase tracking-tighter text-center lg:text-left">
                  {service.title} <span className="text-royal-gold">{service.highlight}</span>
                </h2>

                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-light italic text-center lg:text-left mx-auto lg:ml-0">
                  {service.desc}
                </p>

                {/* CHECKBOXES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 mb-10 py-8 border-y border-slate-100">
                  {service.features.map((feature) => {
                    const isSelected = selectedServices.includes(feature);
                    return (
                      <div 
                        key={feature} 
                        onClick={() => toggleService(feature)}
                        className="flex items-center gap-3 group/feat cursor-pointer"
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all flex-shrink-0 ${isSelected ? 'bg-royal-purple border-royal-purple shadow-md' : 'border-slate-300 bg-white group-hover/feat:border-royal-gold'}`}>
                          {isSelected && <Check className="w-3 h-3 text-royal-gold" strokeWidth={4} />}
                        </div>
                        <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase transition-colors ${isSelected ? 'text-royal-purple' : 'text-royal-purple/50'}`}>
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center lg:justify-start">
                    <button 
                      onClick={() => handleWhatsAppSubmit(`${service.title} ${service.highlight}`, service.features)}
                      className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold rounded-xl shadow-lg transition duration-300 ease-out"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-royal-purple to-slate-900"></span>
                      <span className="relative text-white text-[10px] font-black tracking-[0.4em] uppercase flex items-center gap-3">
                        Submit {service.highlight} Request
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </span>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}