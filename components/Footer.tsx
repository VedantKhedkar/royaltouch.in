"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; 
import { getImagePath, BRAND_ASSETS } from "@/lib/media";

const Footer = () => {
  return (
    <footer id='connect' className="bg-royal-off-white pt-12 md:pt-20 pb-8 relative border-t border-royal-gold/10">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* 1. ROYAL PREMIUM CONNECT CARD */}
            <div className="max-w-4xl mx-auto mb-12 md:mb-16 relative rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-royal-purple/20 transform transition-all duration-500 hover:scale-[1.01] overflow-hidden group">
                
                {/* Background Layer: Royal Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-royal-purple via-[#4b245d] to-royal-purple"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-royal-gold/10 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-royal-teal/10 rounded-full blur-2xl md:blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-royal-gold mb-3 md:mb-4 tracking-tight drop-shadow-sm">
                        Experience Artistry
                    </h2>
                    <p className="text-white/80 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Follow our journey on social media for the latest bridal transformations, 
                        academy course updates, and beauty care tips.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 md:gap-6">
                        <a href="https://www.instagram.com/royaltouchbeautycare.academy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white text-pink-600 border border-royal-gold/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-royal-gold hover:text-royal-purple">
                            <FaInstagram className="text-xl md:text-3xl" />
                        </a>
                        <a href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white text-blue-600 border border-royal-gold/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-royal-gold hover:text-royal-purple">
                            <FaFacebookF className="text-lg md:text-2xl" />
                        </a>
                        <a href="#" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white text-red-600 border border-royal-gold/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-royal-gold hover:text-royal-purple">
                            <FaYoutube className="text-lg md:text-2xl" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white text-royal-gold border border-royal-gold/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-royal-gold hover:text-royal-purple">
                            <FcGoogle className="text-xl md:text-3xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-px bg-purple-300 to-transparent mb-8 md:mb-10 opacity-80"></div>

            {/* 2. BOTTOM BAR INFORMATION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm text-slate-600 font-medium text-center md:text-left">
                
                {/* Copyright & Location (Left) */}
                <div className="order-1 md:col-span-1">
                    <p className="opacity-80 text-[10px] md:text-xs tracking-widest uppercase mb-1">
                        © {new Date().getFullYear()} Royal Touch Beauty Care.
                    </p>
                    <p className="text-[9px] opacity-60">
                        Moti Nagar, Amravati, Maharashtra.
                    </p>
                </div>

                {/* Policies - CAPSULES (Center) */}
                <div className="order-2 md:col-span-1 flex flex-wrap justify-center gap-3">
                    {['Services', 'Academy', 'Contact'].map((item) => (
                        <Link 
                            key={item} 
                            href={`/${item.toLowerCase()}`} 
                            className="px-4 py-1.5 rounded-full border border-royal-gold/20 bg-white text-[10px] md:text-xs font-bold tracking-widest text-royal-purple hover:bg-royal-purple hover:text-white transition-all shadow-sm whitespace-nowrap uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Developer Credit (Right) */}
                <div className="order-3 md:col-span-1 flex flex-col md:flex-row items-center md:justify-end gap-1 md:gap-3">
                    <span className="opacity-60 text-[10px] uppercase tracking-widest whitespace-nowrap">Excellence by</span>
                    <a 
                        href="https://bizonance.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block hover:opacity-80 transition-opacity"
                    >
                        <Image 
                            src="/assets/bizonance-logo.png" 
                            alt="Bizonance" 
                            width={100} 
                            height={30} 
                            className="object-contain h-5 w-auto" 
                        />
                    </a>
                </div>

            </div>
        </div>
        
        {/* Bottom Decorative Strip: Royal Gold Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-royal-gold via-royal-yellow to-royal-gold"></div>
    </footer>
  );
};

export default Footer;