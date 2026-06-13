/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, CheckCircle2, ChevronRight, Award, ShieldCheck, Users } from "lucide-react";
import { skillsData, agencyMetadata } from "../data";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-navy-dark overflow-hidden">
      
      {/* Dynamic Background Light Blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-teal-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-gold-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main Content Info Grid Column (7 lines) */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            
            {/* Sector Title Badge */}
            <div className="inline-flex items-center space-x-2 self-start px-3 py-1.5 rounded-full bg-white/2 border border-white/5">
              <Sparkles className="w-4 h-4 text-teal-accent" />
              <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
                WHO WE ARE
              </span>
            </div>

            {/* Core Section Header */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Bespoke Digital Artistry, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-light to-gold-light">
                Tailored for Premium Growth
              </span>
            </h2>

            {/* Main Description */}
            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Ahbani LLC is a client-first, full-service digital agency specializing in website development, search engine optimization (SEO), brand identity, creative copywriting, and portfolio scaling. 
            </p>

            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              Our team bridges high-performance computer science with consumer cognitive psychology. We believe that professional web frameworks should not just serve as static business cards—they must act as persistent organic conversion funnel engines.
            </p>

            {/* Core Agency Value Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 flex flex-col items-center justify-center text-center">
                <Users className="w-5 h-5 text-teal-accent mb-2" />
                <span className="font-display font-bold text-lg text-white">40+</span>
                <span className="font-sans text-[10px] text-slate-400 mt-0.5">Launches</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 flex flex-col items-center justify-center text-center">
                <Award className="w-5 h-5 text-gold-accent mb-2" />
                <span className="font-display font-bold text-lg text-white">2.4x</span>
                <span className="font-sans text-[10px] text-slate-400 mt-0.5">Average ROI</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-5 h-5 text-teal-accent mb-2" />
                <span className="font-display font-bold text-lg text-white">100%</span>
                <span className="font-sans text-[10px] text-slate-400 mt-0.5">Quality Rate</span>
              </div>
            </div>

          </div>

          {/* Skill Bars & Percentage Metrics Column */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white/2 border border-white/5 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-transparent pointer-events-none rounded-3xl" />
            
            <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-teal-light mr-2" />
              Core Competence Levels
            </h3>

            {/* List of Skills */}
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-sans text-slate-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-teal-light font-bold">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Skill track container */}
                  <div className="h-2.5 w-full bg-[#0a192f] rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-teal-accent to-teal-light rounded-full relative"
                    >
                      {/* Shiny thumb element */}
                      <span className="absolute right-0 top-0 w-2 h-full bg-white opacity-40 blur-xs" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs font-mono text-slate-400 leading-relaxed flex items-center justify-between">
              <span>Audited June 2026</span>
              <span className="text-gold-light uppercase tracking-wider font-semibold">Ahbani LLC Quality Score</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
