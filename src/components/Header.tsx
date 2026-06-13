/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { agencyMetadata } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <header id="header-root" className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-panel rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl transition-all duration-300">
          
          {/* Logo Brand */}
          <Link 
            to="/" 
            id="brand-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-accent to-gold-accent p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[10px] bg-navy-dark flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-teal-light group-hover:text-gold-light transition-colors duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-wider text-xl text-white group-hover:text-teal-light transition-colors">
                {agencyMetadata.businessName}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#94A3B8] uppercase -mt-1 font-semibold">
                DIGITAL AGENCY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path || (link.path.startsWith("/#") && currentPath === "/" && link.path === `/#${window.location.hash.split("#")[1]}`);
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`relative font-sans text-sm font-medium tracking-wide py-1 transition-colors duration-300 ${
                        isActive ? "text-teal-light" : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav_underline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-light to-teal-accent rounded-full"
                          transition={{ type: "smooth", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-white overflow-hidden group focus:outline-none"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-accent to-teal-light rounded-xl transition-all duration-300 group-hover:opacity-90"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-accent to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              <span className="absolute -inset-0 rounded-xl p-0.5 bg-gradient-to-r from-white/20 to-transparent"></span>
              <span className="relative flex items-center space-x-1.5 z-10">
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              type="button"
              className="text-[#94A3B8] hover:text-white p-2 rounded-xl border border-white/5 bg-white/2 focus:outline-none hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-gold-accent" /> : <Menu className="w-6 h-6 text-teal-accent" />}
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            id="mobile-drawer"
            className="absolute top-full left-0 w-full px-4 pt-2 pb-6 md:hidden z-40"
          >
            <div className="glass-panel rounded-2xl p-6 shadow-2xl flex flex-col space-y-6">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`block font-display font-medium text-lg py-1 transition-colors duration-200 ${
                        currentPath === link.path ? "text-teal-light pl-2 border-l-2 border-teal-light" : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-white/5">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-teal-accent to-teal-light text-white shadow-lg active:scale-[0.98] transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
