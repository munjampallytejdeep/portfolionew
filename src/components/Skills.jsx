import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCode2, 
  Coffee, 
  Binary, 
  Atom, 
  Server, 
  Layers, 
  ShieldCheck, 
  Layout, 
  Palette, 
  Database, 
  HardDrive, 
  Workflow, 
  Search, 
  Sparkles, 
  GitBranch, 
  Container, 
  PlaySquare, 
  CheckCircle2, 
  BarChart3, 
  PieChart,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  FileCode2,
  Coffee,
  Binary,
  Atom,
  Server,
  Layers,
  ShieldCheck,
  Layout,
  Palette,
  Database,
  HardDrive,
  Workflow,
  Search,
  Sparkles,
  GitBranch,
  Container,
  PlaySquare,
  CheckCircle2,
  BarChart3,
  PieChart
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoriesList = [
    { id: 'all', label: 'All Tech Stack' },
    ...skillCategories.map((cat) => ({ id: cat.id, label: cat.name }))
  ];

  const displayedCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-28 bg-dark-950 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[28rem] h-[28rem] bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(168,85,247,0.2)]"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Core Skills & <span className="text-gradient-violet">Modern Tooling</span>
          </motion.h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-dark-950 font-extrabold shadow-lg shadow-brand-cyan/25 scale-105'
                    : 'text-slate-300 hover:text-white bg-dark-850/80 border border-white/10 hover:bg-dark-800'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-sky to-brand-purple rounded-xl z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {displayedCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: catIdx * 0.06 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#06b6d4]" />
                    {category.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    ({category.skills.length} technologies)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
                  {category.skills.map((skill, skillIdx) => {
                    const IconComp = iconMap[skill.icon] || Cpu;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="p-4.5 rounded-2xl bg-dark-850/70 border border-white/10 backdrop-blur-xl hover:border-brand-cyan/50 hover:bg-dark-800/90 hover:shadow-xl hover:shadow-brand-cyan/15 transition-all group flex items-start gap-4"
                      >
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-dark-950 transition-all shrink-0 mt-0.5 shadow-md">
                          <IconComp className="w-5.5 h-5.5" />
                        </div>

                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors truncate">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-950 border border-brand-cyan/20 text-brand-sky font-semibold shrink-0">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-snug font-normal">
                            {skill.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
