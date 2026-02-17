"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans overflow-x-hidden selection:bg-royal-purple selection:text-white">
      <Navbar />

      {/* ================= HERO SPLIT ================= */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* Left */}
        <div className="relative flex items-center bg-royal-purple text-white px-10 md:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.2),transparent_50%)]" />
          <div className="relative z-10 max-w-xl">
            <p className="text-royal-gold tracking-[0.6em] text-[11px] font-black uppercase mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-tighter leading-[0.95]">
              Let’s Talk <br />
              <span className="text-royal-gold">About You</span>
            </h1>
            <p className="mt-8 text-white/70 text-sm uppercase tracking-wider leading-relaxed">
              Reach out for bridal services, academy admissions, or studio inquiries.
              Our team will personally assist you.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center bg-[#FAF9F6] px-8 py-20">
          <div className="w-full max-w-md bg-white p-10 shadow-[0_40px_100px_-20px_rgba(45,22,56,0.2)]">
            <h2 className="text-royal-purple font-serif text-3xl uppercase tracking-tight mb-8">
              Send a Message
            </h2>

            <form className="space-y-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b-2 border-slate-200 py-3 outline-none focus:border-royal-purple text-royal-purple font-semibold"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border-b-2 border-slate-200 py-3 outline-none focus:border-royal-purple text-royal-purple font-semibold"
              />
              <select className="w-full border-b-2 border-slate-200 py-3 outline-none focus:border-royal-purple text-royal-purple font-semibold uppercase bg-transparent">
                <option>Bridal Artistry</option>
                <option>Academy Enrollment</option>
                <option>Studio Services</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full border border-slate-200 p-4 outline-none focus:border-royal-purple text-royal-purple font-semibold resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-royal-purple text-white font-black tracking-[0.3em] uppercase text-[12px] hover:text-royal-gold transition-colors"
              >
                Send <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= INFO STRIP ================= */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <MapPin className="mx-auto text-royal-purple mb-4" />
            <h3 className="text-royal-purple font-serif uppercase mb-2">
              Studio
            </h3>
            <p className="text-slate-500 text-sm">
              Moti Nagar, Amravati
            </p>
          </div>
          <div>
            <Phone className="mx-auto text-royal-purple mb-4" />
            <h3 className="text-royal-purple font-serif uppercase mb-2">
              Phone
            </h3>
            <p className="text-slate-500 text-sm">
              +91 XXXXX XXXXX
            </p>
          </div>
          <div>
            <Mail className="mx-auto text-royal-purple mb-4" />
            <h3 className="text-royal-purple font-serif uppercase mb-2">
              Email
            </h3>
            <p className="text-slate-500 text-sm">
              info@royaltouchacademy.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
