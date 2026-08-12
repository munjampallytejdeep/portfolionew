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
    <section id="skills" className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-mono font-semibold uppercase tracking-wider mb-3"
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
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 font-semibold shadow-lg shadow-brand-cyan/20 scale-105'
                  : 'bg-dark-800/80 text-slate-400 hover:text-slate-200 border border-white/10 hover:bg-dark-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {displayedCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    {category.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    ({category.skills.length} technologies)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIdx) => {
                    const IconComp = iconMap[skill.icon] || Cpu;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-xl bg-dark-800/60 border border-white/10 backdrop-blur-md hover:border-brand-cyan/40 hover:bg-dark-700/80 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all group flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-dark-900 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-dark-900 transition-colors shrink-0 mt-0.5">
                          <IconComp className="w-5 h-5" />
                        </div>

                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors truncate">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-white/10 text-slate-400">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-snug">
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
