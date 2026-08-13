import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Sparkles
} from 'lucide-react';
import { personalInfo, projectsData, educationData, leadershipData } from '../data/portfolioData';

export const ResumeSection = () => {
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' | 'pdf'

  return (
    <section id="resume" className="relative py-28 bg-dark-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />

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
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Official <span className="text-gradient-cyan">Resume & Credentials</span>
          </motion.h2>
          <p className="text-xs sm:text-sm font-mono text-slate-300 mt-3">
            Inspect Tejdeep Munjampally's complete professional resume or download the PDF document.
          </p>

          {/* Controls Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download="Tejdeep_Munjampally_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-mono font-bold text-xs bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo text-dark-950 shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/45 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={() => setViewMode(viewMode === 'interactive' ? 'pdf' : 'interactive')}
              className="px-6 py-3 rounded-xl font-mono font-semibold text-xs bg-dark-850 border border-white/10 hover:border-brand-cyan/50 text-slate-200 hover:text-white transition-all flex items-center gap-2 hover:scale-105 shadow-md cursor-pointer"
            >
              <Eye className="w-4 h-4 text-brand-cyan" />
              <span>Switch to {viewMode === 'interactive' ? 'Embedded PDF View' : 'Interactive Document View'}</span>
            </button>
          </div>
        </div>

        {/* View Mode Toggle Content */}
        {viewMode === 'pdf' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto rounded-3xl bg-dark-850/90 border border-white/10 p-4 shadow-2xl backdrop-blur-2xl"
          >
            <div className="w-full h-[750px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
              <iframe
                src="/resume.pdf"
                title="Tejdeep Munjampally Resume PDF"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </motion.div>
        ) : (
          /* Interactive High-Fidelity Resume Document */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-3xl bg-dark-850/90 border border-white/15 p-6 sm:p-12 shadow-2xl backdrop-blur-2xl text-left space-y-8 relative overflow-hidden"
          >
            {/* Top Decorative Border Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink" />

            {/* Header / Personal Info */}
            <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  TEJDEEP MUNJAMPALLY
                </h1>
                <p className="text-sm font-mono text-brand-cyan mt-1.5 font-bold uppercase tracking-wider">
                  B.Tech Computer Science & AI Engineer
                </p>
                <p className="text-xs text-slate-300 mt-2 max-w-xl leading-relaxed">
                  {personalInfo.aboutSummary}
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300 shrink-0">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>{personalInfo.socials.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-purple" />
                  <a href={`tel:${personalInfo.socials.phone}`} className="hover:text-brand-cyan transition-colors">{personalInfo.socials.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-pink" />
                  <a href={`mailto:${personalInfo.socials.email}`} className="hover:text-brand-cyan transition-colors">{personalInfo.socials.email}</a>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Linkedin className="w-3.5 h-3.5 text-brand-sky" />
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">LinkedIn Profile</a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-brand-emerald" />
                  <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">GitHub Profile</a>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-brand-cyan" />
                Projects
              </h3>

              <div className="space-y-5">
                {projectsData.map((project) => (
                  <div key={project.id} className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white font-sans flex items-center gap-2">
                        {project.title} – <span className="text-brand-cyan font-mono text-sm font-semibold">{project.subtitle}</span>
                      </h4>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-brand-sky hover:underline flex items-center gap-1">
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    
                    <div className="text-xs font-mono text-brand-purple">
                      {project.technologies.join(' • ')}
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-purple" />
                Technical Skills
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                  <span className="text-brand-cyan font-bold">Languages:</span> <span className="text-slate-200">C, Python, Java</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                  <span className="text-brand-cyan font-bold">Web:</span> <span className="text-slate-200">HTML, CSS, React, Node.js, Express.js, Django</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                  <span className="text-brand-cyan font-bold">Databases:</span> <span className="text-slate-200">MySQL, Oracle SQL, MongoDB</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                  <span className="text-brand-cyan font-bold">AI / ML:</span> <span className="text-slate-200">LangGraph, RAG, Prompt Engineering</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                  <span className="text-brand-cyan font-bold">Tools:</span> <span className="text-slate-200">Git, Docker, Jenkins, Selenium</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                  <span className="text-brand-cyan font-bold">Visualization:</span> <span className="text-slate-200">Tableau, Power BI</span>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-emerald" />
                Education
              </h3>

              <div className="p-5 rounded-2xl bg-dark-950/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <h4 className="text-base font-bold text-white font-sans">{educationData.institution}</h4>
                  <p className="font-mono text-brand-cyan mt-0.5">{educationData.degree}</p>
                </div>
                <div className="text-right sm:text-right font-mono text-slate-300 shrink-0">
                  <div>{educationData.period}</div>
                  <div className="text-brand-amber font-extrabold text-sm mt-0.5">CGPA: {educationData.cgpa}</div>
                </div>
              </div>
            </div>

            {/* Coding Achievements Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-amber" />
                Coding Achievements
              </h3>

              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2 p-3 rounded-xl bg-dark-950/80 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                  <span>Solved <strong>150+ problems</strong> on CodeChef</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-dark-950/80 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Solved <strong>100+ DSA problems</strong> on LeetCode</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-dark-950/80 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                  <span>Earned a <strong>Bronze Problem Solving badge</strong> and a <strong>5-star Python badge</strong> on HackerRank</span>
                </li>
              </ul>
            </div>

            {/* Leadership Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-pink" />
                Leadership & Activities
              </h3>

              <div className="space-y-4">
                {leadershipData.map((item) => (
                  <div key={item.organization} className="p-4.5 rounded-2xl bg-dark-950/80 border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-sm font-sans">{item.role}, {item.organization}</h4>
                      <span className="font-mono text-slate-400">{item.period}</span>
                    </div>
                    <ul className="space-y-1 text-slate-300 pt-1">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-pink font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Summary Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                Certifications & Badges
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-200">
                <div className="p-3 rounded-xl bg-dark-950/80 border border-white/10">
                  • NPTEL – Computer Science Fundamentals (5 Courses)
                </div>
                <div className="p-3 rounded-xl bg-dark-950/80 border border-white/10">
                  • Cisco – Python and C Programming (2 Courses)
                </div>
                <div className="p-3 rounded-xl bg-dark-950/80 border border-white/10">
                  • Tableau – Data Visualization
                </div>
                <div className="p-3 rounded-xl bg-dark-950/80 border border-white/10">
                  • Cambridge English – Professional Communication
                </div>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
};
