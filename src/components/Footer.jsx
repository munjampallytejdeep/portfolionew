import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Name & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xl font-extrabold tracking-wider text-white"
            >
              <span className="text-gradient-cyan uppercase">{personalInfo.name}</span>
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
              className="p-3 rounded-xl bg-dark-800 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-800 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-3 rounded-xl bg-dark-800 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-400 hover:text-white border border-white/10 hover:border-brand-cyan/40 transition-colors flex items-center gap-2 font-mono text-xs"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-brand-cyan" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs font-mono text-slate-500">
          <p>© 2026 Tejdeep Munjampally. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
};
