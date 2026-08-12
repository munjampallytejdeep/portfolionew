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
      {/* Ambient background glow radial blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-dark-800/80 border border-brand-cyan/30 backdrop-blur-md shadow-lg shadow-brand-cyan/5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-300">
                B.Tech Computer Science @ VIGNAN • CGPA: <strong className="text-brand-cyan font-bold">9.65 / 10</strong>
              </span>
            </motion.div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="block font-mono text-xs sm:text-sm uppercase tracking-widest text-brand-cyan font-bold"
              >
                {personalInfo.subtitle}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              >
                {personalInfo.name}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
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
              {personalInfo.headline} Proficient in <span className="text-white font-semibold">Python, Java, React, LangGraph, RAG, Node.js & Django</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-cyan via-teal-400 to-brand-indigo text-dark-900 shadow-xl shadow-brand-cyan/20 hover:shadow-brand-cyan/40 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Tejdeep_Munjampally_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-dark-800/90 hover:bg-dark-700 text-slate-100 border border-white/10 hover:border-brand-cyan/40 backdrop-blur-md transition-all flex items-center gap-2 shadow-md hover:scale-105"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="p-3.5 rounded-xl bg-dark-800/80 text-slate-400 hover:text-brand-cyan border border-white/10 hover:border-brand-cyan/40 transition-all hover:scale-105"
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
              className="pt-4 flex items-center gap-4 border-t border-white/5"
            >
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-800/80 border border-white/10 hover:border-brand-cyan/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-brand-cyan" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-800/80 border border-white/10 hover:border-brand-cyan/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-brand-cyan" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-2.5 rounded-xl bg-dark-800/80 border border-white/10 hover:border-brand-cyan/40 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-brand-cyan" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column: High-Profile Developer Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Animated glowing background aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan via-teal-400 to-brand-violet rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500 pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl bg-dark-800/90 p-3 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                <img
                  src="/tejdeep.jpg"
                  alt="Tejdeep Munjampally"
                  className="w-full h-[380px] sm:h-[420px] object-cover object-top rounded-2xl filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Bottom Status Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-dark-900/85 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider">
                      TEJDEEP MUNJAMPALLY
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      AI & Software Engineer
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> CGPA 9.65
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
