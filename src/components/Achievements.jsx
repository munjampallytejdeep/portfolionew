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
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#06b6d4', '#8b5cf6', '#f59e0b']
    });
  };

  return (
    <section id="achievements" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3"
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
                onClick={triggerConfetti}
                className="group relative rounded-3xl p-8 bg-dark-800/80 border border-white/10 backdrop-blur-xl hover:border-brand-cyan/40 hover:bg-dark-700/80 transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Badge & Platform */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-dark-900 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-dark-900 border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Stat Number */}
                  <div className="space-y-1 mb-4">
                    <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight group-hover:text-brand-cyan transition-colors">
                      {item.stat}
                    </div>
                    <div className="text-base font-bold text-slate-300">
                      {item.platform} — {item.label}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* External Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400 group-hover:text-brand-cyan transition-colors">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Verified Performance
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-dark-900 border border-white/10 hover:border-brand-cyan text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
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
