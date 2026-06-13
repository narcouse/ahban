/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ExternalLink, Filter } from "lucide-react";
import { portfolioData } from "../data";
import { PortfolioProject } from "../types";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "marketing" | "seo" | "branding">("all");

  const categories = [
    { label: "All Work", id: "all" },
    { label: "Web Dev", id: "web" },
    { label: "Digital Marketing", id: "marketing" },
    { label: "SEO Optimize", id: "seo" },
    { label: "Branding", id: "branding" }
  ] as const;

  const filteredProjects = activeCategory === "all"
    ? portfolioData
    : portfolioData.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-navy-dark border-t border-white/5 overflow-hidden">
      
      {/* Background neon elements */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-teal-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/2 border border-white/5">
              <Sparkles className="w-4 h-4 text-teal-accent" />
              <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
                OUR PROJECTS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Luxury Code & Marketing Assets
            </h2>
            <p className="font-sans text-slate-400 max-w-xl text-base font-light leading-relaxed">
              Explore our select case files. Every build translates complex user experience paradigms into measurable business growth.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-navy p-1.5 rounded-2xl border border-white/5 self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                  activeCategory === cat.id
                    ? "bg-teal-accent text-white shadow-lg shadow-teal-500/20"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/3"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cases Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                id={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl bg-navy-light/40 border border-white/5 overflow-hidden shadow-2xl flex flex-col hover:border-teal-accent/30 transition-all duration-300"
              >
                
                {/* Case Cover Picture Frame */}
                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent z-15 group-hover:via-navy-dark/40 transition-all duration-300" />
                  <img
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 opacity-70 group-hover:opacity-85"
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Client/Year labels */}
                  <div className="absolute top-4 left-4 z-20 flex space-x-2">
                    <span className="px-3 py-1 rounded-lg bg-navy-dark/90 border border-white/5 font-mono text-[10px] text-slate-300 font-semibold uppercase">
                      {project.client}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-teal-accent/95 font-mono text-[10px] text-white font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Right side launch icon link */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-xl bg-teal-accent flex items-center justify-center text-white shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tag overlaps along image bottom edge */}
                  <div className="absolute bottom-4 left-6 z-20 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/8 backdrop-blur-md font-mono text-[9px] font-semibold text-teal-light tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Case description details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <h3 className="font-display font-medium text-2xl text-white group-hover:text-teal-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-400 leading-relaxed font-light">
                      {project.desc}
                    </p>
                  </div>

                  {/* Meticulous quantitative proof stats boxes */}
                  <div className="grid grid-cols-3 gap-2.5 p-4 rounded-xl bg-white/2 border border-white/5 text-center shadow-inner">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col space-y-0.5">
                        <span className="font-display font-bold text-base sm:text-lg text-white text-glow">
                          {stat.value}
                        </span>
                        <span className="font-sans text-[9px] text-[#64748B] uppercase tracking-wider font-semibold">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore more trigger button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const contactElement = document.getElementById("contact-section");
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            type="button"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-navy border border-white/5 text-sm font-sans font-medium text-[#94A3B8] hover:text-white hover:border-teal-accent/20 hover:bg-navy-light shadow-xl hover:shadow-teal-500/5 transition-all"
          >
            <span>Interested in similar outcomes for your company?</span>
            <span className="text-teal-light font-bold hover:underline inline-flex items-center space-x-1 pl-1">
              <span>Connect Today</span>
              <ArrowRight className="w-4 h-4 ml-1 inline" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
