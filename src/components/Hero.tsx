/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code2, Search, TrendingUp } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero-root" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-navy-dark">
      
      {/* Dynamic Ambient Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] rounded-full bg-teal-accent/20 blur-[130px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-10 right-20 w-[450px] h-[450px] rounded-full bg-gold-accent/10 blur-[150px] animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-blue-900/10 blur-[180px] pointer-events-none" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/8 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-gold-light animate-spin-slow" />
              <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider uppercase">
                Montana's Premier Digital Squad
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight"
            >
              Elevate Your Business <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-light via-teal-accent to-gold-light text-glow">
                With Ahbani LLC
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              Delivering innovative digital marketing, bespoke web development, robust SEO hierarchies, branding architectures, and luxury portfolio solutions that captivate clients.
            </motion.p>

            {/* CTA Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-semibold tracking-wide text-white bg-gradient-to-r from-teal-accent to-teal-light shadow-xl shadow-teal-500/10 hover:shadow-teal-500/25 active:scale-[0.98] hover:translate-y-[-1px] transition-all duration-200"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-semibold tracking-wide text-slate-300 bg-white/2 border border-white/8 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all"
              >
                <span>View Services</span>
              </button>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-8 border-t border-white/5 w-full text-xs font-mono text-slate-400"
            >
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-teal-light" />
                <span>Next-Gen React</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-[#F59E0B]" />
                <span>Dominant SEO Moat</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-teal-light" />
                <span>Conversion Optimized</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive Hero Visual Canvas (Mock Tech Core Screen) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md"
            >
              {/* Decorative Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-navy-light/40 rounded-t-[20px]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="font-mono text-[10px] text-slate-500 font-medium">ahbani-terminal-v2.8</div>
                <div className="w-4" />
              </div>

              {/* Main Inside Body */}
              <div className="p-6 bg-navy-darker/90 rounded-b-[20px] font-mono text-xs text-slate-300 leading-relaxed flex flex-col space-y-4">
                
                <div className="flex items-center space-x-2 text-teal-light">
                  <span>&gt;</span>
                  <span className="font-bold text-white">npm run build:agency</span>
                </div>

                <div className="text-[#64748B]">
                  [info] Initializing compilation of Ahbani LLC core architecture...<br />
                  [info] Scanning directories for premium client modules...
                </div>

                {/* Simulated Performance Metrics Panel */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/2 border border-white/5 glow-box-teal">
                  <div className="flex flex-col">
                    <span className="text-[#64748B] text-[10px] uppercase">Engine Performance</span>
                    <span className="text-xl font-bold font-sans text-teal-light text-glow">99.8%</span>
                    <span className="text-[9px] text-[#22C55E]">+1.2% update</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#64748B] text-[10px] uppercase">SEO Visibility</span>
                    <span className="text-xl font-bold font-sans text-white">STABLE</span>
                    <span className="text-[9px] text-[#22C55E]">Grade A+</span>
                  </div>
                </div>

                {/* Interactive Status list */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between">
                    <span>Web Development:</span>
                    <span className="text-teal-light font-bold">OPTIMIZED</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Digital Funnels:</span>
                    <span className="text-white">DEPLOYED</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Domain Authority:</span>
                    <span className="text-gold-accent font-bold">ASCENDING</span>
                  </div>
                </div>

                <div className="text-teal-accent/60 text-[10px] mt-2 flex items-center justify-end space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-accent animate-ping" />
                  <span>Terminal interactive and live</span>
                </div>

              </div>

              {/* Outer decorative glowing elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-accent/30 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-accent/20 rounded-full blur-3xl pointer-events-none -z-10" />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
