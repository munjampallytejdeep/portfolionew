import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Code2,
  Brain,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const proj = document.querySelector('#projects');
    if (proj) {
      const headerOffset = 80;
      const elementPosition = proj.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow radial blobs with dynamic floating animation */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/5 w-[28rem] h-[28rem] bg-gradient-to-tr from-brand-cyan/20 to-brand-blue/20 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/5 w-[30rem] h-[30rem] bg-gradient-to-tr from-brand-purple/20 to-brand-pink/20 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-dark-850/90 border border-brand-cyan/40 backdrop-blur-xl shadow-lg shadow-brand-cyan/10 hover:border-brand-cyan/70 transition-colors"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-80"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan shadow-[0_0_8px_#06b6d4]"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-200">
                B.Tech Computer Science @ VIGNAN • CGPA: <strong className="text-gradient-cyan font-bold">9.65 / 10</strong>
              </span>
            </motion.div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-brand-sky font-bold bg-brand-cyan/10 px-3 py-1 rounded-md border border-brand-cyan/20"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-spin-slow" />
                {personalInfo.subtitle}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              >
                {personalInfo.name}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl sm:text-4xl font-extrabold text-gradient-cyan pt-1"
              >
                {personalInfo.title}
              </motion.h2>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {personalInfo.headline} Proficient in <span className="text-white font-semibold underline decoration-brand-cyan/40 underline-offset-4">Python, Java, React, LangGraph, RAG, Node.js & Django</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-3 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo text-dark-950 shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/50 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer font-sans"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  const elem = document.querySelector('#resume');
                  if (elem) {
                    const headerOffset = 80;
                    const elementPosition = elem.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-dark-850/90 hover:bg-dark-700 text-slate-100 border border-white/10 hover:border-brand-cyan/50 backdrop-blur-xl transition-all flex items-center gap-2 shadow-lg hover:shadow-brand-cyan/20 hover:scale-105"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="p-3.5 rounded-xl bg-dark-850/90 text-slate-400 hover:text-brand-cyan border border-white/10 hover:border-brand-cyan/40 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                title="Quick Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-4 flex items-center gap-4 border-t border-white/10"
            >
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-850/90 border border-white/10 hover:border-brand-cyan/50 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-brand-cyan" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-850/90 border border-white/10 hover:border-brand-indigo/50 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono hover:scale-105 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-brand-indigo" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-2.5 rounded-xl bg-dark-850/90 border border-white/10 hover:border-brand-pink/50 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono hover:scale-105 hover:shadow-[0_0_15px_rgba(236,72,153,0.25)]"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-brand-pink" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column: High-Profile Developer Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Animated glowing background aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink rounded-3xl blur-2xl opacity-50 group-hover:opacity-90 transition duration-700 pointer-events-none animate-pulse-glow" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl bg-dark-850/90 p-3 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden">
                <img
                  src="/tejdeep.jpg"
                  alt="Tejdeep Munjampally"
                  className="w-full h-[390px] sm:h-[430px] object-cover object-top rounded-2xl filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Bottom Status Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-dark-950/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyan" /> TEJDEEP MUNJAMPALLY
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 mt-0.5">
                      AI & Software Engineer
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-brand-emerald/15 border border-brand-emerald/40 text-brand-emerald font-mono text-xs font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                    <Zap className="w-3.5 h-3.5 animate-bounce" /> CGPA 9.65
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
