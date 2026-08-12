import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, ExternalLink, ShieldCheck, Sparkles, FileText, Calendar, MapPin, UserCheck, BookOpen, Layers } from 'lucide-react';
import { allCertificates } from '../data/portfolioData';

export const CertModal = ({ isOpen, onClose, certType }) => {
  const [activeSubTab, setActiveSubTab] = useState(0);

  useEffect(() => {
    setActiveSubTab(0);
  }, [certType]);

  if (!isOpen || !certType) return null;

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
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono">
                  Official Verified Credential Viewer
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {certType === 'nptel' && 'SWAYAM / NPTEL Online Certification (MoE, Govt. of India)'}
                  {certType === 'cisco' && 'Cisco Networking Academy & C++ Institute'}
                  {certType === 'tableau' && '365 Data Science Certificate of Achievement'}
                  {certType === 'cambridge' && 'Cambridge University Press & Assessment'}
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
            
            {/* NPTEL 5-Certificate View */}
            {certType === 'nptel' && (
              <>
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 border-b border-white/10">
                  {allCertificates.nptel.map((cert, idx) => (
                    <button
                      key={cert.id}
                      onClick={() => setActiveSubTab(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                        activeSubTab === idx
                          ? 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/40 shadow-lg shadow-brand-cyan/10 font-bold'
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
                  ))}
                </div>

                {/* Rendered NPTEL Certificate */}
                {(() => {
                  const current = allCertificates.nptel[activeSubTab] || allCertificates.nptel[0];
                  return (
                    <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-dark-900 to-dark-900 border-2 border-brand-cyan/30 shadow-2xl overflow-hidden space-y-6">
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
                        <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${current.badgeColor} shadow-md`}>
                          ★ {current.badge}
                        </span>
                      </div>

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

                      <div className="p-4 rounded-xl bg-dark-800/90 border border-brand-cyan/30 text-center">
                        <h4 className="text-xl sm:text-2xl font-bold text-white font-mono">
                          {current.title}
                        </h4>
                        <p className="text-xs font-mono text-brand-cyan mt-1">
                          Offered by {current.issuer} ({current.period})
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-brand-cyan" />
                          Score Evaluation Breakdown
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="p-3.5 rounded-xl bg-dark-800/60 border border-white/10 text-center">
                            <span className="block text-[11px] font-mono text-slate-400">Online Assignments</span>
                            <span className="text-lg font-bold font-mono text-brand-cyan">{current.assignmentsScore}</span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-dark-800/60 border border-white/10 text-center">
                            <span className="block text-[11px] font-mono text-slate-400">Proctored Exam</span>
                            <span className="text-lg font-bold font-mono text-brand-violet">{current.examScore}</span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 border border-brand-cyan/40 text-center">
                            <span className="block text-[11px] font-mono text-slate-300 uppercase font-bold">Consolidated Score</span>
                            <span className="text-2xl font-extrabold font-mono text-white">{current.score}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Roll Number:</span>
                          <span className="font-bold text-white bg-dark-800 px-2 py-0.5 rounded border border-white/5">{current.rollNo}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Recommended Credits:</span>
                          <span className="text-brand-cyan font-semibold">{current.credits}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </>
            )}

            {/* CISCO 2-Certificate View */}
            {certType === 'cisco' && (
              <>
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 border-b border-white/10">
                  {allCertificates.cisco.map((cert, idx) => (
                    <button
                      key={cert.id}
                      onClick={() => setActiveSubTab(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                        activeSubTab === idx
                          ? 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/40 shadow-lg shadow-brand-cyan/10 font-bold'
                          : 'bg-dark-900/60 text-slate-400 border-white/5 hover:text-slate-200 hover:bg-dark-700'
                      }`}
                    >
                      <span>{cert.title}</span>
                    </button>
                  ))}
                </div>

                {(() => {
                  const current = allCertificates.cisco[activeSubTab] || allCertificates.cisco[0];
                  return (
                    <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-dark-900 to-dark-900 border-2 border-brand-cyan/30 shadow-2xl overflow-hidden space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-brand-cyan font-mono font-bold text-xl">
                            CISCO
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                              Cisco Networking Academy Program
                            </span>
                            <h4 className="text-lg font-bold text-white font-mono">
                              {current.issuer}
                            </h4>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r ${current.badgeColor} shadow-md`}>
                          ✓ {current.badge}
                        </span>
                      </div>

                      <div className="text-center py-2 space-y-1">
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          This certificate is awarded to
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient-cyan">
                          MUNJAMPALLY TEJDEEP
                        </h3>
                        <p className="text-xs text-slate-300">
                          for successfully completing
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-dark-800/90 border border-brand-cyan/30 text-center space-y-1">
                        <h4 className="text-2xl font-extrabold text-white font-mono">
                          {current.title}
                        </h4>
                        <p className="text-xs font-mono text-slate-400">
                          Offered by <span className="text-brand-cyan font-semibold">{current.offeredBy}</span>
                        </p>
                      </div>

                      {current.skills && (
                        <div className="space-y-3 p-4 rounded-xl bg-dark-800/50 border border-white/5">
                          <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                            Studied Competencies & Verified Technical Skills
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                            {current.skills.map((skill, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2">
                                <span className="text-brand-cyan font-bold">•</span>
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Completion Date:</span>
                          <span className="font-bold text-white bg-dark-800 px-2.5 py-1 rounded border border-white/5">{current.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">Instructor:</span>
                          <span className="text-slate-200 font-semibold">{current.instructor}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </>
            )}

            {/* TABLEAU 365 Data Science View */}
            {certType === 'tableau' && (
              <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-dark-900 to-dark-900 border-2 border-brand-cyan/30 shadow-2xl overflow-hidden space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-emerald-400 font-mono font-bold text-xl">
                      365
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                        365 Data Science
                      </span>
                      <h4 className="text-lg font-bold text-white font-mono">
                        Certificate of Achievement
                      </h4>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-emerald-400 to-teal-600 text-dark-900 font-bold shadow-md">
                    ✓ Verified Achievement
                  </span>
                </div>

                <div className="text-center py-2 space-y-1">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    Has been awarded to
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient-cyan">
                    Tejdeep Munjampally
                  </h3>
                  <p className="text-xs text-slate-300">
                    Who has fulfilled all the requirements of the course of study
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-dark-800/90 border border-emerald-500/30 text-center space-y-1">
                  <h4 className="text-2xl font-extrabold text-white font-mono">
                    {allCertificates.tableau.title}
                  </h4>
                  <p className="text-xs font-mono text-emerald-400">
                    Interactive Dashboards & Business Analytics
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Certificate ID:</span>
                    <span className="font-bold text-emerald-400 bg-dark-800 px-2.5 py-1 rounded border border-white/5">
                      {allCertificates.tableau.certId}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Issue Date:</span>
                    <span className="text-slate-200 font-semibold">{allCertificates.tableau.date}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <span className="text-slate-500">Signed By:</span>
                    <span className="text-slate-300">{allCertificates.tableau.chair}</span>
                  </div>
                </div>
              </div>
            )}

            {/* CAMBRIDGE ENGLISH View */}
            {certType === 'cambridge' && (
              <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-dark-900 to-dark-900 border-2 border-brand-cyan/30 shadow-2xl overflow-hidden space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-amber-400 font-mono font-bold text-xl">
                      CUP
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                        Cambridge University Press & Assessment
                      </span>
                      <h4 className="text-lg font-bold text-white font-mono">
                        Certificate of Completion
                      </h4>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 text-dark-900 font-bold shadow-md">
                    ✓ International Certification
                  </span>
                </div>

                <div className="text-center py-2 space-y-1">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    This is to certify that
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-gradient-cyan">
                    Munjampally Tejdeep
                  </h3>
                  <p className="text-xs text-slate-300">
                    of {allCertificates.cambridge.institution}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-dark-800/90 border border-amber-500/30 text-center space-y-1">
                  <p className="text-xs font-mono text-slate-400">has participated and completed</p>
                  <h4 className="text-2xl font-extrabold text-white font-mono text-gradient-gold">
                    {allCertificates.cambridge.title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Venue:</span>
                    <span className="text-white font-bold bg-dark-800 px-2.5 py-1 rounded border border-white/5">
                      {allCertificates.cambridge.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Authorized Signatory:</span>
                    <span className="text-slate-200 font-semibold">{allCertificates.cambridge.regionalDirector}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="flex items-center justify-end pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-dark-900 text-slate-300 hover:text-white border border-white/10 font-mono text-xs transition-colors"
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
