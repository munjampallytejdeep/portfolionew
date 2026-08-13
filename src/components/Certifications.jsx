import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ShieldCheck, BarChart2, CheckCircle, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { CertModal } from './CertModal';

const iconMap = {
  BookOpen,
  ShieldCheck,
  BarChart2,
  CheckCircle
};

export const Certifications = () => {
  const [selectedCertType, setSelectedCertType] = useState(null);

  const handleCardClick = (cert) => {
    setSelectedCertType(cert.type);
  };

  return (
    <section id="certifications" className="relative py-28 bg-dark-950 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-10 w-[28rem] h-[28rem] bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional <span className="text-gradient-cyan">Certifications & Diplomas</span>
          </motion.h2>
          <p className="text-xs sm:text-sm font-mono text-slate-300 mt-2.5">
            Click any certificate card below to inspect the verified official certificate credential.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => {
            const IconComp = iconMap[cert.icon] || Award;
            const isGroup = cert.count > 1;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => handleCardClick(cert)}
                className={`p-6 rounded-2xl transition-all duration-300 group flex flex-col justify-between cursor-pointer border backdrop-blur-2xl ${
                  isGroup
                    ? 'bg-gradient-to-b from-dark-850/95 to-dark-900/95 border-brand-cyan/50 hover:border-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/20 ring-1 ring-brand-cyan/30'
                    : 'bg-dark-850/70 border-white/10 hover:border-brand-cyan/40 hover:bg-dark-800/90 hover:shadow-xl hover:shadow-brand-cyan/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors shadow-sm ${
                      isGroup
                        ? 'bg-brand-cyan/20 border-brand-cyan/40 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-dark-950'
                        : 'bg-dark-950 border-white/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-dark-950'
                    }`}>
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                    {isGroup && (
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-extrabold bg-gradient-to-r from-brand-amber via-brand-cyan to-brand-purple text-dark-950 shadow-md">
                        {cert.count} COURSES
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    {cert.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-brand-cyan transition-colors tracking-tight">
                    {cert.title}
                  </h3>

                  {cert.highlight && (
                    <p className="text-xs font-mono text-slate-300 mt-3 p-2.5 rounded-xl bg-dark-950/80 border border-white/10 leading-relaxed">
                      {cert.highlight}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="truncate max-w-[120px] text-slate-400">{cert.issuer}</span>
                  <span className="text-brand-cyan font-bold flex items-center gap-1 group-hover:text-brand-sky transition-colors shrink-0">
                    View Cert <Layers className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Universal Interactive Certificate Modal */}
      <CertModal
        isOpen={Boolean(selectedCertType)}
        onClose={() => setSelectedCertType(null)}
        certType={selectedCertType}
      />
    </section>
  );
};
