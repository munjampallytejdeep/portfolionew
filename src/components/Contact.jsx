import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 bg-dark-950 overflow-hidden">
      {/* Glow gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build <span className="text-gradient-cyan">Something Great</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal"
          >
            I'm always interested in building impactful software, exploring AI technologies, and collaborating on challenging projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Cards Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-dark-850/80 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#06b6d4]" />
                Direct Communication
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="p-4.5 rounded-2xl bg-dark-950/80 border border-white/10 hover:border-brand-cyan/50 hover:bg-dark-800/90 transition-all flex items-center gap-4 group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform shrink-0 shadow-sm">
                    <Mail className="w-5.5 h-5.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Email</div>
                    <div className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-brand-cyan transition-colors truncate">
                      {personalInfo.socials.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.socials.phone.replace(/\s+/g, '')}`}
                  className="p-4.5 rounded-2xl bg-dark-950/80 border border-white/10 hover:border-brand-purple/50 hover:bg-dark-800/90 transition-all flex items-center gap-4 group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/15 border border-brand-purple/30 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform shrink-0 shadow-sm">
                    <Phone className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Phone</div>
                    <div className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-brand-purple transition-colors">
                      {personalInfo.socials.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4.5 rounded-2xl bg-dark-950/80 border border-white/10 flex items-center gap-4 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-brand-emerald/15 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald shrink-0 shadow-sm">
                    <MapPin className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                    <div className="text-sm sm:text-base font-semibold text-slate-200">
                      {personalInfo.socials.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-4">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-dark-950 hover:bg-dark-800 border border-white/10 hover:border-brand-cyan text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 font-mono text-xs font-semibold shadow-md hover:scale-105"
                >
                  <Github className="w-4 h-4 text-brand-cyan" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-dark-950 hover:bg-dark-800 border border-white/10 hover:border-brand-indigo text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 font-mono text-xs font-semibold shadow-md hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 text-brand-indigo" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-dark-850/80 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-5.5"
            >
              <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2.5">
                <Send className="w-4.5 h-4.5 text-brand-cyan" />
                Send a Direct Message
              </h3>

              {submitted && (
                <div className="p-4 rounded-xl bg-brand-emerald/15 border border-brand-emerald/40 text-brand-emerald text-sm flex items-center gap-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been submitted. Tejdeep will get back to you shortly.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition-all text-sm shadow-inner"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition-all text-sm shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. SDE Internship Opportunity / Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition-all text-sm shadow-inner"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Tejdeep, I would love to connect with you regarding..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition-all text-sm resize-none shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo text-dark-950 shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/45 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 font-sans"
              >
                {loading ? (
                  <span className="font-mono text-xs animate-pulse">Transmitting message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
