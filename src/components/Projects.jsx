import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2, Cpu, Activity } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 bg-dark-900/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Software & AI Engineering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            AI Applications & <span className="text-gradient-cyan">Scalable Projects</span>
          </motion.h2>
        </div>

        {/* Projects Cards Container */}
        <div className="space-y-12">
          {projectsData.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-3xl p-6 sm:p-10 transition-all duration-300 group border backdrop-blur-xl ${
                  isFeatured
                    ? 'bg-gradient-to-b from-dark-800/90 via-dark-800/70 to-dark-900/90 border-brand-cyan/30 hover:border-brand-cyan shadow-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]'
                    : 'bg-dark-800/60 border-white/10 hover:border-brand-violet/40 hover:bg-dark-700/70'
                }`}
              >
                {/* Project Number Watermark */}
                <div className="absolute top-6 right-8 font-mono text-5xl sm:text-7xl font-extrabold opacity-10 text-white pointer-events-none group-hover:opacity-20 transition-opacity">
                  {project.number}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Project Info Column */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-dark-900 border border-white/10 text-brand-cyan">
                        PROJECT {project.number}
                      </span>
                      {isFeatured && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brand-cyan to-brand-violet text-dark-900 shadow-md">
                          ⚡ {project.badgeText}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-brand-cyan mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-base text-slate-300 leading-relaxed font-normal">
                      "{project.description}"
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.map((point, pointIdx) => (
                        <div key={pointIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-900/90 border border-white/10 text-slate-300 group-hover:border-brand-cyan/30 group-hover:text-brand-cyan transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-dark-900 border border-white/10 hover:border-brand-cyan hover:bg-brand-cyan hover:text-dark-900 text-slate-200 transition-all flex items-center gap-2 shadow-md group/btn"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan transition-colors flex items-center gap-2"
                      >
                        <Layers className="w-4 h-4" />
                        <span>Explore Architecture</span>
                      </button>
                    </div>
                  </div>

                  {/* Project Graphical Preview Box */}
                  <div className="lg:col-span-5">
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer rounded-2xl bg-dark-900/90 border border-white/10 p-5 space-y-4 hover:border-brand-cyan/50 transition-all group/preview relative overflow-hidden shadow-xl"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-slate-400">
                        <span className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-brand-cyan" />
                          {project.id === 'capital-compass-ai' ? 'LangGraph Agent Node Flow' : 'DOM Telemetry & Latency'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                          Live Specs
                        </span>
                      </div>

                      {project.id === 'capital-compass-ai' ? (
                        <div className="space-y-3 font-mono text-xs text-slate-300">
                          <div className="p-3 rounded-lg bg-dark-800/80 border border-brand-cyan/30 flex items-center justify-between">
                            <span className="text-slate-400">1. Vector RAG Search:</span>
                            <span className="text-emerald-400 font-bold">Top-K Context Hit</span>
                          </div>
                          <div className="p-3 rounded-lg bg-dark-800/80 border border-brand-violet/30 flex items-center justify-between">
                            <span className="text-slate-400">2. Adaptive Agent Node:</span>
                            <span className="text-brand-violet font-bold">LangGraph Cyclic</span>
                          </div>
                          <div className="p-3 rounded-lg bg-dark-800/80 border border-white/10 flex items-center justify-between">
                            <span className="text-slate-400">3. Output API Payload:</span>
                            <span className="text-brand-cyan font-bold">Low-latency JSON</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 font-mono text-xs text-slate-300">
                          <div className="p-3 rounded-lg bg-dark-800/80 border border-white/10 flex items-center justify-between">
                            <span className="text-slate-400">Interactions Analyzed:</span>
                            <span className="text-brand-cyan font-bold">500+ Sessions</span>
                          </div>
                          <div className="p-3 rounded-lg bg-dark-800/80 border border-emerald-500/30 flex items-center justify-between">
                            <span className="text-slate-400">Response Latency:</span>
                            <span className="text-emerald-400 font-bold">&lt; 200 ms</span>
                          </div>
                          <div className="p-3 rounded-lg bg-dark-800/80 border border-brand-violet/30 flex items-center justify-between">
                            <span className="text-slate-400">Optimization Engine:</span>
                            <span className="text-brand-violet font-bold">REST + ML</span>
                          </div>
                        </div>
                      )}

                      <div className="pt-2 text-center text-xs font-mono text-brand-cyan flex items-center justify-center gap-1 group-hover/preview:underline">
                        <span>Click to view full architecture diagram & details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
