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
  const iconColors = [
    'from-brand-cyan/20 to-brand-blue/20 text-brand-cyan border-brand-cyan/30',
    'from-brand-purple/20 to-brand-violet/20 text-brand-purple border-brand-purple/30',
    'from-brand-emerald/20 to-brand-teal/20 text-brand-emerald border-brand-emerald/30',
    'from-brand-amber/20 to-brand-rose/20 text-brand-amber border-brand-amber/30',
  ];

  return (
    <section id="about" className="relative py-28 bg-dark-900/80 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
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
          className="p-8 sm:p-10 rounded-3xl bg-dark-850/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden mb-16 hover:border-brand-cyan/40 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group w-48 sm:w-56">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink rounded-2xl blur-lg opacity-40 group-hover:opacity-85 transition duration-500 pointer-events-none" />
                <div className="relative rounded-2xl bg-dark-950 p-2 border border-white/15 overflow-hidden shadow-xl">
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
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-brand-cyan animate-ping" />
                Computer Science Engineer & AI Practitioner
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{personalInfo.aboutSummary}"
              </p>

              <div className="pt-3 flex flex-wrap gap-2.5">
                {[
                  { text: "Python & Java", color: "border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10" },
                  { text: "LangGraph & RAG", color: "border-brand-purple/30 text-brand-purple bg-brand-purple/10" },
                  { text: "React & Node.js", color: "border-brand-sky/30 text-brand-sky bg-brand-sky/10" },
                  { text: "Django & SQL", color: "border-brand-emerald/30 text-brand-emerald bg-brand-emerald/10" },
                  { text: "Scalable Architecture", color: "border-brand-amber/30 text-brand-amber bg-brand-amber/10" }
                ].map((chip, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-xl border ${chip.color} text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm hover:scale-105 transition-transform`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    {chip.text}
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
            const colorStyle = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-dark-850/70 border border-white/10 backdrop-blur-xl hover:border-brand-cyan/50 hover:bg-dark-800/90 transition-all duration-300 group shadow-lg"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${colorStyle} border flex items-center justify-center group-hover:scale-110 transition-all mb-4 shadow-md`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-dark-800/90 to-dark-900/90 border border-white/10 text-center relative overflow-hidden group hover:border-brand-cyan/50 shadow-xl"
            >
              <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 font-mono tracking-tight`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
