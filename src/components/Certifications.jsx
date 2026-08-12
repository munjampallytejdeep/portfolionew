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
    <section id="certifications" className="relative py-20 bg-dark-900/80 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Professional <span className="text-gradient-cyan">Certifications & Diplomas</span>
          </motion.h2>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-2">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => handleCardClick(cert)}
                className={`p-6 rounded-2xl transition-all duration-300 group flex flex-col justify-between cursor-pointer border backdrop-blur-md ${
                  isGroup
                    ? 'bg-gradient-to-b from-dark-800/95 to-dark-900/95 border-brand-cyan/40 hover:border-brand-cyan hover:shadow-xl hover:shadow-brand-cyan/15 ring-1 ring-brand-cyan/20'
                    : 'bg-dark-800/60 border-white/10 hover:border-brand-cyan/40 hover:bg-dark-700/80 hover:shadow-lg hover:shadow-brand-cyan/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                      isGroup
                        ? 'bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-dark-900'
                        : 'bg-dark-900 border-white/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-dark-900'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    {isGroup && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold bg-gradient-to-r from-amber-400 to-brand-cyan text-dark-900 shadow-sm">
                        {cert.count} COURSES
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    {cert.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-brand-cyan transition-colors">
                    {cert.title}
                  </h3>

                  {cert.highlight && (
                    <p className="text-xs font-mono text-slate-300 mt-2.5 p-2 rounded-lg bg-dark-900/80 border border-white/5 leading-relaxed">
                      {cert.highlight}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="truncate max-w-[120px]">{cert.issuer}</span>
                  <span className="text-brand-cyan font-bold flex items-center gap-1 group-hover:underline shrink-0">
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
