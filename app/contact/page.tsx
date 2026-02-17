"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans overflow-x-hidden selection:bg-royal-purple selection:text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative bg-royal-purple text-white overflow-hidden landscape:min-h-[95vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 text-center landscape:pt-28 landscape:pb-10">
          <p className="text-royal-gold tracking-[0.6em] text-[10px] font-black uppercase mb-4 md:mb-6">
            Contact
          </p>
          <h1 className="text-4xl md:text-7xl font-serif uppercase tracking-tighter leading-[0.95] landscape:text-7xl">
            Let’s Start <br />
            <span className="text-royal-gold">Your Journey</span>
          </h1>
          <p className="mt-6 md:mt-8 text-white/70 text-xs md:text-base uppercase tracking-wider leading-relaxed max-w-2xl mx-auto">
            Bridal artistry, academy enrollment, or studio services — tell us what
            you’re looking for and we’ll get back to you shortly.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
      </section>

      {/* ================= FORM + LOCATION ================= */}
      <section className="py-12 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch">
          {/* KEY CHANGE: 'items-stretch' on the container ensures columns are equal height.
              Both children below use 'h-full' to fill that space.
          */}

          {/* ===== LEFT: FORM CARD ===== */}
          <div className="bg-white rounded-2xl shadow-[0_30px_80px_-20px_rgba(45,22,56,0.35)] border border-slate-100 p-8 md:p-14 landscape:p-10 flex flex-col h-full">
            <h2 className="text-royal-purple font-serif text-2xl md:text-4xl uppercase tracking-tight mb-8 md:mb-10">
           Book Appoinment
            </h2>

            <form className="space-y-6 md:space-y-8 flex-grow flex flex-col justify-between">
              <div className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 landscape:gap-4">
                  <div>
                    <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b-2 border-slate-200 py-2 outline-none focus:border-royal-purple text-royal-purple font-semibold placeholder:text-slate-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91"
                      className="w-full bg-transparent border-b-2 border-slate-200 py-2 outline-none focus:border-royal-purple text-royal-purple font-semibold placeholder:text-slate-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                    Service
                  </label>
                  <select className="w-full bg-transparent border-b-2 border-slate-200 py-2 outline-none focus:border-royal-purple text-royal-purple font-semibold uppercase text-sm">
                    <option>Bridal Artistry</option>
                    <option>Academy Enrollment</option>
                    <option>Studio Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-royal-purple text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your requirement..."
                    className="w-full bg-[#FAF9F6] border border-slate-200 p-3 md:p-4 outline-none focus:border-royal-purple text-royal-purple font-semibold resize-none placeholder:text-slate-300 rounded-lg text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 flex items-center justify-center gap-3 py-4 md:py-5 rounded-xl bg-royal-purple text-white font-black tracking-[0.4em] uppercase text-[11px] md:text-[12px] hover:text-royal-gold transition-colors shadow-lg active:scale-[0.98]"
              >
                Book <Send size={16} />
              </button>
            </form>
          </div>

          {/* ===== RIGHT: LOCATION / MAP CARD ===== */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_20px_60px_-20px_rgba(45,22,56,0.25)] p-8 md:p-14 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-royal-purple font-extrabold font-serif text-2xl md:text-3xl uppercase tracking-tight mb-4">
                Visit Us
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mb-8 leading-relaxed italic">
                Experience the royal touch in person. Our doors are open for consultations and studio visits.
              </p>

              {/* Map container takes the remaining space in the card */}
              <div className="w-full flex-grow min-h-[300px] overflow-hidden rounded-xl border border-slate-200 relative">
                <iframe
                  title="Royal Touch Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.13401569477!2d77.751683!3d20.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU1JzQ4LjAiTiA3N8KwNDUnMDYuMSJF!5e0!3m2!1sen!2sin!4v1614151234567!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-royal-purple text-[10px] font-black uppercase tracking-widest mb-1">Amravati HQ</p>
                <p className="text-slate-500 text-xs uppercase">Moti Nagar, Near Vadhu Var Maratha Kendra</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFO STRIP ================= */}
<section className="bg-white border-t border-slate-100 py-10 md:py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row landscape:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 text-royal-purple">
      
      {/* Capsule 1 */}
      <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#FAF9F6] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <MapPin size={16} className="text-royal-gold" />
        <span className="text-[11px] md:text-sm font-semibold tracking-wider">
          MOTI NAGAR, AMRAVATI
        </span>
      </div>

      {/* Capsule 2 */}
      <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#FAF9F6] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <Phone size={16} className="text-royal-gold" />
        <span className="text-[11px] md:text-sm font-semibold tracking-wider">
          +91 XXXXX XXXXX
        </span>
      </div>

      {/* Capsule 3 */}
      <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#FAF9F6] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <Mail size={16} className="text-royal-gold" />
        <span className="text-[11px] md:text-sm font-semibold tracking-wider">
          INFO@ROYALTOUCHACADEMY.COM
        </span>
      </div>

    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}