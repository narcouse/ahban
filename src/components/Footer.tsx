/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Sparkles, MapPin, Mail, Phone, Twitter, Linkedin, Instagram, Github, ChevronRight } from "lucide-react";
import { agencyMetadata } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Website Development", hash: "#services" },
    { name: "Digital Marketing", hash: "#services" },
    { name: "SEO Optimization", hash: "#services" },
    { name: "Branding & Identity", hash: "#services" }
  ];

  const quickLinks = [
    { name: "Home Portfolio", path: "/" },
    { name: "Latest Insights", path: "/blog" },
    { name: "Initiate Project", path: "/contact" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Guidelines", path: "/privacy" }
  ];

  const handleHashLink = (hash: string) => {
    setTimeout(() => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <footer id="footer-root" className="relative bg-[#070c1e] text-slate-400 pt-20 pb-10 border-t border-white/5 overflow-hidden">
      
      {/* Background ambient accent lights */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Agency Bio Block */}
          <div className="flex flex-col space-y-5">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-accent to-gold-accent p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-[6px] bg-navy-dark flex items-center justify-center">
                  <Sparkles className="w-4.5 h-4.5 text-teal-light" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-lg text-white group-hover:text-teal-light transition-colors">
                  {agencyMetadata.businessName}
                </span>
                <span className="font-mono text-[8px] tracking-widest text-[#94A3B8] uppercase -mt-1 font-semibold">
                  DIGITAL AGENCY
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-sans mt-2">
              Ahbani LLC is a client-first, high-performance digital team. We architect bespoke codebases, organic SEO pipelines, and premium identities to scale pricing power and dominate search queries.
            </p>
            {/* Social handles */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href={agencyMetadata.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-teal-light hover:bg-white/5 hover:border-teal-accent/30 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={agencyMetadata.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-teal-light hover:bg-white/5 hover:border-teal-accent/30 transition-all duration-300"
                aria-label="Twitter Header"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={agencyMetadata.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-gold-light hover:bg-white/5 hover:border-gold-accent/30 transition-all duration-300"
                aria-label="Instagram Stream"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={agencyMetadata.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Corporate Map
            </h3>
            <ul className="flex flex-col space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-accent mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Expertise
            </h3>
            <ul className="flex flex-col space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to="/"
                    onClick={() => handleHashLink(link.hash)}
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-accent mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Details Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Location details
            </h3>
            <ul className="flex flex-col space-y-3.5 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-light mr-2.5 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-sans leading-relaxed">
                  {agencyMetadata.address}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-teal-light mr-3 shrink-0" />
                <a href={`mailto:${agencyMetadata.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {agencyMetadata.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-gold-light mr-3 shrink-0" />
                <a href={`tel:${agencyMetadata.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-white transition-colors">
                  {agencyMetadata.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            <p>© {currentYear} {agencyMetadata.businessName}. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-teal-accent/30">|</span>
            <span className="text-[#94A3B8] font-sans">Kalispell, MT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
