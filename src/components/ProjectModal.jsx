import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Zap, Layers, ArrowUpRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-900/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-dark-800 border border-white/10 rounded-3xl shadow-2xl overflow-y-auto z-10 text-left my-auto no-scrollbar"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-dark-900/90 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-bold">
                Project {project.number}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:inline">
                Architecture Breakdown
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-dark-800 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Badge */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {project.title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 font-bold text-xs">
                  {project.badgeText}
                </span>
              </div>
              <p className="text-lg text-brand-cyan font-mono font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            {project.details?.metrics && (
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-dark-900/80 border border-white/10 text-center">
                {project.details.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-dark-900/60 border border-white/10 space-y-2">
                <h4 className="text-sm font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  Problem Statement
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.details?.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-dark-900/60 border border-white/10 space-y-2">
                <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Engineered Solution
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.details?.solution}
                </p>
              </div>
            </div>

            {/* Architecture Components List */}
            {project.details?.architecture && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                  <Layers className="w-5 h-5 text-brand-cyan" />
                  System Architecture & Data Flow
                </h4>
                <div className="space-y-3">
                  {project.details.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-dark-900/50 border border-white/5 flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-xs font-mono font-medium text-brand-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-brand-cyan text-dark-900 font-bold text-sm hover:bg-teal-300 transition-colors flex items-center gap-2 shadow-lg shadow-brand-cyan/20"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-dark-900 hover:bg-white/5 text-slate-300 font-mono text-xs border border-white/10 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
