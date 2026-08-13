import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-cyan/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Name & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xl font-extrabold tracking-wider text-white hover:scale-105 transition-transform"
            >
              <span className="text-gradient-cyan uppercase font-extrabold">{personalInfo.name}</span>
            </a>
            <p className="text-xs font-mono text-slate-400">
              "{personalInfo.subtitle}"
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-850/90 border border-white/10 text-slate-300 hover:text-white hover:border-brand-cyan/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-brand-cyan" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-850/90 border border-white/10 text-slate-300 hover:text-white hover:border-brand-indigo/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-brand-indigo" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-3 rounded-xl bg-dark-850/90 border border-white/10 text-slate-300 hover:text-white hover:border-brand-pink/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all hover:scale-110"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5 text-brand-pink" />
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="px-4 py-3 rounded-xl bg-dark-850/90 hover:bg-dark-800 text-slate-200 hover:text-white border border-white/10 hover:border-brand-cyan/50 transition-all flex items-center gap-2 font-mono text-xs shadow-md hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-brand-cyan animate-bounce" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs font-mono text-slate-400">
          <p>© 2026 Tejdeep Munjampally. All rights reserved. Built with React, Framer Motion & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
};
