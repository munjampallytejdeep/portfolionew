import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Award, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export const Leadership = () => {
  return (
    <section id="experience" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-mono font-semibold uppercase tracking-wider mb-3"
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
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-violet to-transparent -translate-x-1/2 opacity-30 hidden sm:block" />

          <div className="space-y-12">
            {leadershipData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.organization}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-900 border-2 border-brand-cyan flex items-center justify-center text-brand-cyan shadow-lg shadow-brand-cyan/30 z-10 hidden sm:flex">
                    <Users className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 px-0 sm:px-8">
                    <div className="p-8 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl hover:border-brand-cyan/40 hover:bg-dark-700/80 transition-all duration-300 shadow-xl group">
                      
                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-dark-900 border border-white/10 text-brand-cyan">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {item.organization}
                      </h3>
                      <p className="text-sm font-mono text-brand-violet font-semibold mb-4">
                        {item.role}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2.5">
                        {item.details.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
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
