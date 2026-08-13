import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Cpu, Award, ExternalLink, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Cpu,
  Award
};

export const Achievements = () => {
  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 55,
      spread: 70,
      origin: { x, y },
      colors: ['#06b6d4', '#8b5cf6', '#f59e0b', '#ec4899']
    });
  };

  return (
    <section id="achievements" className="relative py-28 bg-dark-950 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 right-10 w-[28rem] h-[28rem] bg-brand-amber/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[28rem] h-[28rem] bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/30 text-brand-amber text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Programming</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Coding Achievements & <span className="text-gradient-gold">Badges</span>
          </motion.h2>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;

            return (
              <motion.div
                key={item.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={triggerConfetti}
                className="group relative rounded-3xl p-8 bg-dark-850/70 border border-white/10 backdrop-blur-2xl hover:border-brand-amber/50 hover:bg-dark-800/90 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Badge & Platform */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-br from-brand-amber/20 via-brand-cyan/15 to-brand-purple/20 border border-brand-amber/30 flex items-center justify-center text-brand-amber group-hover:scale-110 group-hover:bg-brand-amber group-hover:text-dark-950 transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-dark-950 border ${item.color} shadow-sm`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Stat Number */}
                  <div className="space-y-1 mb-4">
                    <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight group-hover:text-brand-amber transition-colors">
                      {item.stat}
                    </div>
                    <div className="text-base font-bold text-slate-200">
                      {item.platform} — {item.label}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* External Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400 group-hover:text-brand-amber transition-colors">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <Star className="w-3.5 h-3.5 text-brand-amber fill-brand-amber animate-pulse" />
                    Verified Performance
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-xl bg-dark-950 border border-white/10 hover:border-brand-amber text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-brand-amber" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
