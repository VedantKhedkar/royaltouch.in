"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send, Instagram, Facebook, Globe } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    service: "Bridal Artistry",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919685232913"; // Using the number from your contact info
    
    const whatsappMessage = `Dear Team Royal Touch Beauty Care & Academy,

      I recently visited your website and would like to meet personally for a one-on-one interaction. 

      Please confirm my appointment for the given date and time. For your reference, I have shared my details below: 

*Full Name:* ${formData.fullName}
*Mobile No.:* ${formData.mobile}
*Service :* ${formData.service}
*Preferred Date:* ${formData.date}
*Message:* ${formData.message}

      Thank you.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans overflow-x-hidden selection:bg-royal-purple selection:text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative bg-royal-purple text-white overflow-hidden min-h-[70vh] md:landscape:min-h-[95vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12 md:pt-40 md:pb-28 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif uppercase tracking-tighter leading-tight md:leading-[0.95]">
            Let’s Start <br />
            <span className="text-royal-gold">Your Journey</span>
          </h1>
          <p className="mt-4 md:mt-8 text-white/70 text-[11px] sm:text-xs md:text-base uppercase tracking-wider leading-relaxed max-w-2xl mx-auto">
            Bridal artistry, academy enrollment, or studio services — tell us what
            you’re looking for and we’ll get back to you shortly.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
      </section>

      {/* ================= FORM + LOCATION ================= */}
      <section className="py-10 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch">

          {/* ===== LEFT: FORM CARD ===== */}
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(45,22,56,0.2)] border border-slate-100 p-6 sm:p-8 md:p-14 flex flex-col h-full">
            <h2 className="text-royal-purple font-serif text-xl sm:text-2xl md:text-4xl uppercase tracking-tight mb-6 md:mb-10 text-center md:text-left">
              Book Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8 flex-grow flex flex-col justify-between">
              <div className="space-y-5 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-royal-purple text-royal-purple font-semibold placeholder:text-slate-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                     Mobile
                    </label>
                    <input
                      required
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91"
                      className="w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-royal-purple text-royal-purple font-semibold placeholder:text-slate-300 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                      Preferred Date & Time
                    </label>
                    <input
                      required
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      placeholder="e.g. Oct 25, 10:00 AM"
                      className="w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-royal-purple text-royal-purple font-semibold placeholder:text-slate-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                      Service
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-royal-purple text-royal-purple font-semibold uppercase text-xs md:text-sm"
                    >
                      <option value="Bridal Artistry">Bridal Artistry</option>
                      <option value="Academy Enrollment">Academy Enrollment</option>
                      <option value="Studio Services">Studio Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement..."
                    className="w-full bg-[#FAF9F6] border border-slate-200 p-3 md:p-4 outline-none focus:border-royal-purple text-royal-purple font-semibold resize-none placeholder:text-slate-300 rounded-lg text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 md:mt-8 flex items-center justify-center gap-3 py-4 md:py-5 rounded-xl bg-royal-purple text-white font-black tracking-[0.4em] uppercase text-[10px] md:text-[12px] hover:text-royal-gold transition-colors shadow-lg active:scale-[0.98]"
              >
                Book <Send size={14} className="md:w-4 md:h-4" />
              </button>
            </form>
          </div>

          {/* ===== RIGHT: LOCATION / MAP CARD ===== */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_20px_50px_-15px_rgba(45,22,56,0.15)] p-6 sm:p-8 md:p-14 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-royal-purple font-extrabold font-serif text-xl sm:text-2xl md:text-3xl uppercase tracking-tight mb-3">
                Visit Us
              </h3>
              <p className="text-slate-500 text-[11px] md:sm mb-6 md:mb-8 leading-relaxed italic">
                Experience the royal touch in person. Our doors are open for consultations.
              </p>

              <div className="w-full h-[220px] md:h-auto md:flex-grow md:min-h-[300px] overflow-hidden rounded-xl border border-slate-200 relative">
                <iframe
                  title="Royal Touch Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.93605251458!2d77.740880!3d20.923053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a66f68593d%3A0xc66060c57c4c4786!2sMoti%20Nagar%2C%20Amravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-royal-purple text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">Studio & Academy Location</p>
              <p className="text-slate-500 text-[11px] sm:text-xs uppercase leading-snug">Moti Nagar, Near Vadhu Var Maratha Kendra, Amravati</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFO STRIP ================= */}
      <section className="bg-white border-t border-slate-100 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col items-center mb-10 md:mb-16">
            <p className="text-royal-gold font-black tracking-[0.6em] text-[10px] md:text-[12px] uppercase">
              Contact
            </p>
            <div
              className="mt-4 w-full h-[1px] md:h-0.5"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
                opacity: 0.6,
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-1 items-start">

            {/* Left Column */}
            <div className="space-y-8 md:space-y-10">
              <div>
                <h4 className="text-royal-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-3 md:mb-4">Official Location</h4>
                <div className="flex items-start gap-3 md:gap-4">
                  <MapPin className="text-royal-purple mt-1 shrink-0" size={18} />
                  <p className="text-royal-purple font-serif text-base sm:text-lg md:text-2xl tracking-tight leading-tight">
                    Moti Nagar, Near Vadhu Var <br className="hidden sm:block" /> Maratha Kendra, Amravati
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-royal-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-3 md:mb-4">Digital Connect</h4>
                <div className="space-y-3 md:space-y-4">
                  <a href="tel:+919685232913" className="flex items-center gap-3 md:gap-4 group">
                    <Phone className="text-royal-purple group-hover:text-royal-gold transition-colors" size={18} />
                    <span className="text-royal-purple font-sans font-bold text-sm md:text-lg">+91 96852 32913</span>
                  </a>
                  <a href="mailto:royaltouchbeauty@gmail.com" className="flex items-center gap-3 md:gap-4 group break-all">
                    <Mail className="text-royal-purple group-hover:text-royal-gold transition-colors" size={18} />
                    <span className="text-royal-purple font-sans font-bold text-xs sm:text-sm md:text-lg ">
                      royaltouchbeauty@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 md:space-y-10 md:border-l-2 md:border-slate-100 md:pl-12">
              <div>
                <h4 className="text-royal-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-3 md:mb-4">Social Presence</h4>
                <a
                  href="https://instagram.com/royaltouchbeautycare.academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 group mb-4"
                >
                  <Instagram className="text-royal-purple group-hover:text-royal-gold transition-colors" size={18} />
                  <span className="text-royal-purple font-serif text-base sm:text-lg md:text-2xl tracking-tight ">
                    @royaltouchbeautycare
                  </span>
                </a>
              </div>

              <div>
                <h4 className="text-royal-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-3 md:mb-4">Founder</h4>
                <p className="text-royal-purple font-serif text-xl sm:text-2xl md:text-4xl uppercase tracking-tighter leading-none">
                  Pooja Mankar
                </p>
                <p className="text-slate-800 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                  Professional Makeup Artist
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}