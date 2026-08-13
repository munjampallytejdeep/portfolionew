import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Education & <span className="text-gradient-cyan">Academic Standing</span>
          </motion.h2>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-dark-850/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group hover:border-brand-cyan/50 transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Degree Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/40 text-brand-cyan font-mono text-xs font-bold shadow-sm">
                  UG DEGREE
                </span>
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                  {educationData.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                  {educationData.institution}
                </h3>
                <p className="text-lg font-mono text-brand-sky font-semibold mt-1">
                  {educationData.degree}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{educationData.location}</span>
              </div>

              <div className="space-y-2.5 pt-2">
                {educationData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CGPA Badge Box */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-950/90 border border-brand-amber/30 text-center relative overflow-hidden shadow-2xl group/cgpa hover:border-brand-amber/60 transition-colors">
              <div className="w-13 h-13 p-3 rounded-2xl bg-brand-amber/15 border border-brand-amber/40 flex items-center justify-center text-brand-amber mb-3 group-hover/cgpa:scale-110 transition-transform shadow-md">
                <Award className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono text-gradient-gold tracking-tight">
                {educationData.cgpa}
              </div>
              <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest mt-1.5">
                Cumulative GPA
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
