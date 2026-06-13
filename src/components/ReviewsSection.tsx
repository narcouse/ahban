/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { reviewsData } from "../data";

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalReviews = reviewsData.length;

  // Auto-advance reviews slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalReviews);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalReviews]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  const currentReview = reviewsData[activeIndex];

  return (
    <section id="reviews" className="relative py-24 bg-navy-dark border-t border-white/5 overflow-hidden">
      
      {/* Decorative gradient accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full bg-teal-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/2 border border-white/5">
            <Sparkles className="w-4 h-4 text-gold-accent animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
              TRUSTED REVIEWS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="font-sans text-slate-400 max-w-xl text-base font-light">
            Trusted by businesses for exceptional digital marketing, web engineering, and brand positioning solutions.
          </p>
        </div>

        {/* Carousel Slide Wrapper */}
        <div className="relative min-h-[380px] sm:min-h-[320px] bg-navy-light/30 border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden">
          
          {/* Big Quote Symbol Graphic */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col space-y-6 flex-1 justify-between"
            >
              {/* Star Rating Scale */}
              <div className="flex items-center space-x-1">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent text-shadow" />
                ))}
              </div>

              {/* Client Quote paragraph */}
              <blockquote className="font-sans text-lg sm:text-xl text-slate-100 font-light italic leading-relaxed">
                "{currentReview.quote}"
              </blockquote>

              {/* Client Profile Details */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                <img
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-accent"
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col text-left">
                  <cite className="not-italic font-display font-bold text-white text-base">
                    {currentReview.name}
                  </cite>
                  <span className="font-sans text-xs text-[#94A3B8] font-medium">
                    {currentReview.role} at <span className="text-teal-light">{currentReview.company}</span>
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigtional Arrow Handles */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
            
            {/* Carousel Index Pagination Dots */}
            <div className="flex space-x-2">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  type="button"
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-teal-accent ${
                    idx === activeIndex ? "bg-teal-light w-6" : "bg-navy-light hover:bg-navy-light/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left and Right arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                type="button"
                className="w-10 h-10 rounded-xl bg-white/2 border border-white/5 text-[#94A3B8] hover:text-white hover:bg-white/5 focus:outline-none transition-all flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="w-10 h-10 rounded-xl bg-white/2 border border-white/5 text-[#94A3B8] hover:text-white hover:bg-white/5 focus:outline-none transition-all flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Read More Testimonials dynamic CTA button */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            id="more-testimonials-cta"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-gold-accent/30 bg-gold-accent/5 hover:border-gold-accent/80 hover:bg-gold-accent/15 text-gold-light text-sm font-sans font-medium hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            <span>Read More Testimonials</span>
            <Star className="w-4 h-4 fill-current text-gold-accent" />
          </Link>
        </div>

      </div>
    </section>
  );
}
