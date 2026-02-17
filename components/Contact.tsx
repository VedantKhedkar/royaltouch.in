"use client";
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-royal-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Brand Info Side */}
          <div className="bg-royal-purple p-12 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-royal-gold font-serif text-4xl mb-6">Get in Touch</h2>
              <p className="text-white/70 mb-12 leading-relaxed">
                Whether you're looking for a bridal makeover or want to enroll in our academy, 
                we're here to help you shine.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-royal-yellow text-xl">📍</span>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-royal-gold mb-1">Location</h4>
                    <p className="text-sm">Amravati, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-royal-yellow text-xl">📞</span>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-royal-gold mb-1">Phone</h4>
                    <p className="text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-royal-yellow text-xl">✉️</span>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-royal-gold mb-1">Email</h4>
                    <p className="text-sm">info@royaltouchacademy.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-royal-yellow">
                Royal Touch Beauty Care & Academy
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-1">
                <label className="block text-[10px] font-black text-royal-purple uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 px-4 outline-none focus:border-royal-purple transition-colors text-sm"
                />
              </div>
              
              <div className="sm:col-span-1">
                <label className="block text-[10px] font-black text-royal-purple uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 px-4 outline-none focus:border-royal-purple transition-colors text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] font-black text-royal-purple uppercase tracking-widest mb-2">Service Interest</label>
                <select className="w-full bg-gray-50 border-b-2 border-gray-200 py-3 px-4 outline-none focus:border-royal-purple transition-colors text-sm appearance-none cursor-pointer">
                  <option>Bridal Makeover</option>
                  <option>Party Makeup</option>
                  <option>Professional Academy Course</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] font-black text-royal-purple uppercase tracking-widest mb-2">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 outline-none focus:border-royal-purple transition-colors text-sm rounded-xl resize-none"
                ></textarea>
              </div>

              <div className="sm:col-span-2 mt-4">
                <button className="w-full bg-royal-purple text-white py-4 rounded-full font-bold tracking-widest shadow-xl hover:bg-royal-dark transition-all transform hover:-translate-y-1">
                  SEND INQUIRY
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}