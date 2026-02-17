"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getImagePath, BRAND_ASSETS } from "@/lib/media";
import { X, Menu, ChevronDown } from "lucide-react"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setExpandedSection(null);
    }
  }, [isMobileMenuOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const menuData = {
    services: [
      { name: "Bridal Makeover", id: "bridal" },
      { name: "Party Makeup", id: "party" },
      { name: "Hairstyling", id: "hair" }
    ],
    academy: [
      { name: "Pro Courses", id: "courses" },
      { name: "Certifications", id: "certification" },
      { name: "Workshops", id: "masterclass" }
    ],
    gallery: [
      "Transformations", 
      "Royal Bridal", 
      "Glamour & Party", 
      "Academy Life", 
      "Hair Design"
    ]
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] transition-all duration-500 rounded-2xl ${
          isScrolled
            ? "bg-royal-purple/95 backdrop-blur-lg py-2 shadow-2xl border border-royal-gold/20"
            : "bg-royal-purple/50 backdrop-blur-md md:bg-transparent md:backdrop-blur-0 py-4 md:py-5 border border-transparent"
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 md:w-15 md:h-16 relative overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={getImagePath(BRAND_ASSETS.LOGO)}
                alt="Royal Touch Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-royal-gold font-serif font-extrabold text-xl md:text-3xl leading-none tracking-tighter transition-colors group-hover:text-royal-yellow">
                ROYAL TOUCH
              </span>
              <span className="text-white text-[8px] md:text-[9px] tracking-[0.5em] uppercase opacity-90 font-medium group-hover:opacity-100 transition-opacity ml-0.5">
                Beauty Care & Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-royal-gold text-xs font-bold tracking-[0.2em] transition-all relative group">
              HOME
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-royal-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            {/* Services */}
            <div className="relative group py-4">
              <Link href="/services" className="text-white hover:text-royal-gold text-xs font-bold tracking-[0.2em] flex items-center gap-1 transition-all">
                SERVICES <span className="text-[8px] opacity-50">▼</span>
              </Link>
              <div className="absolute top-full left-0 w-48 bg-royal-purple/95 backdrop-blur-xl border border-royal-gold/20 rounded-xl shadow-2xl p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                {menuData.services.map((item) => (
                  <Link key={item.id} href={`/services#${item.id}`} className="block px-4 py-2 text-[10px] text-white hover:bg-white/10 hover:text-royal-gold rounded-lg transition-all tracking-widest font-bold">
                    {item.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            {/* Academy */}
            <div className="relative group py-4">
              <Link href="/academy" className="text-white hover:text-royal-gold text-xs font-bold tracking-[0.2em] flex items-center gap-1 transition-all">
                ACADEMY <span className="text-[8px] opacity-50">▼</span>
              </Link>
              <div className="absolute top-full left-0 w-48 bg-royal-purple/95 backdrop-blur-xl border border-royal-gold/20 rounded-xl shadow-2xl p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                {menuData.academy.map((item) => (
                  <Link key={item.id} href={`/academy#${item.id}`} className="block px-4 py-2 text-[10px] text-white hover:bg-white/10 hover:text-royal-gold rounded-lg transition-all tracking-widest font-bold">
                    {item.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="relative group py-4">
              <Link href="/gallery" className="text-white hover:text-royal-gold text-xs font-bold tracking-[0.2em] flex items-center gap-1 transition-all">
                GALLERY <span className="text-[8px] opacity-50">▼</span>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 bg-royal-purple/95 backdrop-blur-xl border border-royal-gold/20 rounded-xl shadow-2xl p-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                {menuData.gallery.map((item) => (
                  <Link 
                    key={item} 
                    href={`/gallery?category=${encodeURIComponent(item.toUpperCase())}`} 
                    className="block px-4 py-2 text-[10px] text-white hover:bg-white/10 hover:text-royal-gold rounded-lg transition-all tracking-widest font-bold"
                  >
                    {item.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-white hover:text-royal-gold text-xs font-bold tracking-[0.2em] transition-all relative group">
              CONTACT
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-royal-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            <button className="relative overflow-hidden bg-royal-gold text-royal-purple px-7 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:scale-105 transition-all shadow-lg active:scale-95 group">
              <span className="relative z-10 uppercase">Enroll Now</span>
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-royal-gold p-2 z-[110] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[101] transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`fixed top-3 right-3 bottom-3 w-[85%] max-w-sm bg-royal-purple/90 backdrop-blur-xl z-[102] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transform transition-transform duration-500 ease-out md:hidden border border-royal-gold/10 rounded-2xl ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-[110%]"
      }`}>
        <div className="flex flex-col h-full overflow-y-auto pt-4 pb-8 px-8">

          {/* ===== Sidebar Header (Logo + Close) ===== */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img
                src={getImagePath(BRAND_ASSETS.LOGO)}
                alt="Royal Touch Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-royal-gold font-serif font-bold text-lg">
                Royal Touch
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-royal-gold p-2"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif text-white border-b border-white/5 pb-4">
              Home
            </Link>

            {/* SERVICES */}
            <div className="border-b border-white/5 pb-4">
              <div className="flex items-center justify-between">
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white">Services</Link>
                <button onClick={() => toggleSection("services")} className="p-2 text-royal-gold">
                  <ChevronDown size={20} className={`transition-transform duration-300 ${expandedSection === "services" ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-300 ${expandedSection === "services" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden space-y-3 pl-4 border-l border-royal-gold/20">
                  {menuData.services.map(item => (
                    <Link key={item.id} href={`/services#${item.id}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-white/70 hover:text-royal-gold text-base py-1">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ACADEMY */}
            <div className="border-b border-white/5 pb-4">
              <div className="flex items-center justify-between">
                <Link href="/academy" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white">Academy</Link>
                <button onClick={() => toggleSection("academy")} className="p-2 text-royal-gold">
                  <ChevronDown size={20} className={`transition-transform duration-300 ${expandedSection === "academy" ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-300 ${expandedSection === "academy" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden space-y-3 pl-4 border-l border-royal-gold/20">
                  {menuData.academy.map(item => (
                    <Link key={item.id} href={`/academy#${item.id}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-white/70 hover:text-royal-gold text-base py-1">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* GALLERY */}
            <div className="border-b border-white/5 pb-4">
              <div className="flex items-center justify-between">
                <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white">Gallery</Link>
                <button onClick={() => toggleSection("gallery")} className="p-2 text-royal-gold">
                  <ChevronDown size={20} className={`transition-transform duration-300 ${expandedSection === "gallery" ? "rotate-180" : ""}`} />
                </button>
              </div>
              <div className={`grid transition-all duration-300 ${expandedSection === "gallery" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden space-y-3 pl-4 border-l border-royal-gold/20">
                  {menuData.gallery.map(item => (
                    <Link key={item} href={`/gallery?category=${encodeURIComponent(item.toUpperCase())}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-white/70 hover:text-royal-gold text-base py-1">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif text-white pb-4">
              Contact
            </Link>
          </div>

          <div className="mt-auto pt-10">
            <button className="w-full bg-royal-gold text-royal-purple py-4 rounded-xl font-black tracking-widest text-xs uppercase shadow-xl transition-all active:scale-95">
              Enroll Now
            </button>
            <p className="text-center text-white/30 text-[8px] tracking-[0.4em] uppercase mt-6">
              Royal Touch Beauty Care
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
