import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Zap, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { personalInfo, aboutHighlights, statistics } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Code: Code,
  Cpu: Cpu,
  Zap: Zap
};

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-dark-900/60 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering Intelligent Systems with <span className="text-gradient-cyan">Precision & Code</span>
          </motion.h2>
        </div>

        {/* Core Summary Card with Tejdeep's Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-dark-800/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group w-48 sm:w-56">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500 pointer-events-none" />
                <div className="relative rounded-2xl bg-dark-900 p-2 border border-white/10 overflow-hidden">
                  <img
                    src="/tejdeep.jpg"
                    alt="Tejdeep Munjampally Profile"
                    className="w-full h-56 sm:h-64 object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="md:col-span-8 space-y-4 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
                Computer Science Engineer & AI Practitioner
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                "{personalInfo.aboutSummary}"
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                {["Python & Java", "LangGraph & RAG", "React & Node.js", "Django & SQL", "Scalable System Architecture"].map((chip, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-brand-cyan" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Compact Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aboutHighlights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Brain;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-800/60 border border-white/10 backdrop-blur-md hover:border-brand-cyan/40 hover:bg-dark-700/70 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-dark-900 transition-all mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Statistics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-dark-800/90 to-dark-900/90 border border-white/10 text-center relative overflow-hidden group hover:border-brand-cyan/40"
            >
              <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 font-mono`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
