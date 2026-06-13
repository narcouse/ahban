/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";

// Pages
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

// Scroll Control Utility to manage scroll-to-top and target hash anchors gracefully
function ScrollControl() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow target components/sections to mount fully
      const timer = setTimeout(() => {
        const elementId = hash.replace("#", "");
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

// Home Page Layout Section Combiner
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="home-page-container"
    >
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollControl />
      <div className="flex flex-col min-h-screen bg-navy-dark text-slate-100 select-none">
        
        {/* Navigation bar */}
        <Header />

        {/* Dynamic Route Content panels with smooth scroll layout entries */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </div>

        {/* Site Footer */}
        <Footer />

      </div>
    </Router>
  );
}
