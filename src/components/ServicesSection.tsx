/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Code2, TrendingUp, Search, Paintbrush, FileText, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { servicesData } from "../data";
import { ServiceItem } from "../types";

export default function ServicesSection() {
  
  // Icon selector to render typed Lucide icons safely
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-teal-light" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-teal-light" />;
      case "SearchCode":
        return <Search className="w-6 h-6 text-teal-light" />;
      case "Paintbrush":
        return <Paintbrush className="w-6 h-6 text-teal-light" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-teal-light" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-teal-light" />;
      default:
        return <Code2 className="w-6 h-6 text-teal-light" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-navy-dark border-t border-white/5">
      
      {/* Decorative vector background pattern */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-teal-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center justify-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/2 border border-white/5">
            <Sparkles className="w-4 h-4 text-gold-accent animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
              OUR EXPERTISE
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none">
            Digital Capabilities Built to Perform
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl text-base sm:text-lg font-light leading-relaxed">
            We deliver engineered systems, data pipelines, and branding suites designed to optimize user capture metrics and build absolute enterprise market authorities.
          </p>
        </div>

        {/* Services Grid (6-columns representation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-navy border border-white/5 overflow-hidden transition-all duration-300 hover:border-teal-accent/40 shadow-xl"
            >
              
              {/* Service Card Card Image Banner */}
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent z-10" />
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating dynamic icon */}
                <div className="absolute bottom-4 left-6 z-20 w-12 h-12 rounded-xl bg-navy-dark border border-white/10 flex items-center justify-center shadow-lg group-hover:border-teal-accent/30 group-hover:scale-110 transition-all">
                  {renderIcon(service.iconName)}
                </div>
              </div>

              {/* Service Details info */}
              <div className="p-6 pt-2 flex flex-col space-y-4">
                <h3 className="font-display font-semibold text-xl text-white group-hover:text-teal-light transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-slate-400 leading-relaxed min-h-[72px]">
                  {service.description}
                </p>

                {/* Service Card CTA button Link */}
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-light hover:text-white transition-colors duration-200"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Decorative accent light details */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-accent/10 to-transparent rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

            </motion.div>
          ))}
        </div>

        {/* Dynamic section-wide consult call CTA */}
        <div className="mt-16 text-center text-sm font-sans text-slate-400">
          <span>Need a customized combination of our expert services? </span>
          <Link to="/contact" className="text-teal-light font-semibold hover:underline inline-flex items-center space-x-1 ml-1">
            <span>Consult our engineers</span>
            <ArrowRight className="w-4 h-4 inline" />
          </Link>
        </div>

      </div>
    </section>
  );
}
