import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, BookOpen, ExternalLink, ShieldCheck, Sparkles, User, FileText } from 'lucide-react';
import { nptelCertificates } from '../data/portfolioData';

export const NptelModal = ({ isOpen, onClose, initialCertId }) => {
  const [activeCertId, setActiveCertId] = useState(initialCertId || nptelCertificates[0].id);

  if (!isOpen) return null;

  const currentCert = nptelCertificates.find((c) => c.id === activeCertId) || nptelCertificates[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-900/90 backdrop-blur-xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-dark-800 border border-white/10 rounded-3xl shadow-2xl overflow-y-auto z-10 text-left my-auto no-scrollbar"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-dark-900/90 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono">
                  NPTEL / SWAYAM Online Certifications
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Funded by Ministry of Education (MoE), Govt. of India
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-dark-800 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Tabs for all 5 NPTEL certificates */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 border-b border-white/10">
              {nptelCertificates.map((cert) => {
                const isActive = cert.id === currentCert.id;
                return (
                  <button
                    key={cert.id}
                    onClick={() => setActiveCertId(cert.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                      isActive
                        ? 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/40 shadow-lg shadow-brand-cyan/10'
                        : 'bg-dark-900/60 text-slate-400 border-white/5 hover:text-slate-200 hover:bg-dark-700'
                    }`}
                  >
                    <span>{cert.title}</span>
                    {cert.badge === 'Elite' && (
                      <span className="px-1.5 py-0.5 text-[9px] rounded bg-amber-500 text-dark-900 font-extrabold">
                        ELITE
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Rendered Digital Official Certificate Window */}
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-dark-900 to-dark-900 border-2 border-brand-cyan/30 shadow-2xl overflow-hidden space-y-6">
              
              {/* Top Watermark / Emblem header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-amber-400 font-mono font-bold text-xl">
                    NPTEL
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      Official E-Certificate
                    </span>
                    <h4 className="text-lg font-bold text-white font-mono">
                      SWAYAM / NPTEL ONLINE CERTIFICATION
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${currentCert.badgeColor} shadow-md`}>
                    ★ {currentCert.badge}
                  </span>
                </div>
              </div>

              {/* Recipient Notice */}
              <div className="text-center py-2 space-y-1">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  This certificate is awarded to
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient-cyan">
                  MUNJAMPALLY TEJDEEP
                </h3>
                <p className="text-xs text-slate-300">
                  for successfully completing the proctored course
                </p>
              </div>

              {/* Course Title Banner */}
              <div className="p-4 rounded-xl bg-dark-800/90 border border-brand-cyan/30 text-center">
                <h4 className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {currentCert.title}
                </h4>
                <p className="text-xs font-mono text-brand-cyan mt-1">
                  Offered by {currentCert.issuer} ({currentCert.period})
                </p>
              </div>

              {/* Detailed Score Matrix Table */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-brand-cyan" />
                  Score Evaluation Breakdown
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-dark-800/60 border border-white/10 text-center">
                    <span className="block text-[11px] font-mono text-slate-400">Online Assignments</span>
                    <span className="text-lg font-bold font-mono text-brand-cyan">{currentCert.assignmentsScore}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-dark-800/60 border border-white/10 text-center">
                    <span className="block text-[11px] font-mono text-slate-400">Proctored Exam</span>
                    <span className="text-lg font-bold font-mono text-brand-violet">{currentCert.examScore}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/40 text-center">
                    <span className="block text-[11px] font-mono text-slate-300 uppercase font-bold">Consolidated Score</span>
                    <span className="text-2xl font-extrabold font-mono text-white">{currentCert.score}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Roll Number:</span>
                  <span className="font-bold text-white bg-dark-800 px-2 py-0.5 rounded border border-white/5">{currentCert.rollNo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Recommended Credits:</span>
                  <span className="text-brand-cyan font-semibold">{currentCert.credits}</span>
                </div>
                {currentCert.totalCertified && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Total Candidates Certified:</span>
                    <span className="text-slate-200">{currentCert.totalCertified.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Verification Status:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SWAYAM Verified
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <a
                href={currentCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-brand-cyan text-dark-900 font-mono text-xs font-bold hover:bg-teal-300 transition-colors flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Credential on Swayam.gov.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-dark-900 text-slate-300 hover:text-white border border-white/10 font-mono text-xs transition-colors"
              >
                Close Certificate View
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
