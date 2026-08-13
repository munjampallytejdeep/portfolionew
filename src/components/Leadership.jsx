import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Award, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export const Leadership = () => {
  return (
    <section id="experience" className="relative py-28 bg-dark-950 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 left-10 w-[28rem] h-[28rem] bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[28rem] h-[28rem] bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(168,85,247,0.2)]"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Leadership & Extra-Curriculars</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Leadership Roles & <span className="text-gradient-violet">Community Work</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-pink -translate-x-1/2 opacity-40 hidden sm:block rounded-full shadow-[0_0_10px_rgba(6,182,212,0.3)]" />

          <div className="space-y-12">
            {leadershipData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.organization}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Glowing Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-dark-950 border-2 border-brand-cyan flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.6)] z-10 hidden sm:flex">
                    <Users className="w-4.5 h-4.5" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 px-0 sm:px-8">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="p-8 rounded-3xl bg-dark-850/75 border border-white/10 backdrop-blur-2xl hover:border-brand-purple/50 hover:bg-dark-800/90 transition-all duration-300 shadow-2xl group"
                    >
                      
                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-dark-950 border border-brand-purple/30 text-brand-purple shadow-sm">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors tracking-tight">
                        {item.organization}
                      </h3>
                      <p className="text-sm font-mono text-brand-sky font-semibold mb-4">
                        {item.role}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2.5">
                        {item.details.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
