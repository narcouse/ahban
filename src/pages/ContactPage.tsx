/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertTriangle, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { agencyMetadata } from "../data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "10k-25k",
    message: ""
  });

  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const budgets = [
    { label: "Under $10,000", value: "under-10k" },
    { label: "$10,000 – $25,000", value: "10k-25k" },
    { label: "$25,000 – $50,000", value: "25k-50k" },
    { label: "$50,000+", value: "50k-plus" }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Core Form Validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      setFormState("error");
      return;
    }

    setFormState("sending");

    // Simulate reliable pipeline processing delay
    setTimeout(() => {
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "10k-25k",
        message: ""
      });
    }, 2000);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=1001%20S%20Main%20St,%20Ste%20600,%20Kalispell,%20MT%2059901&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <main id="contact-section" className="min-h-screen bg-navy-dark pt-36 pb-24 relative overflow-hidden">
      
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-teal-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Intro Grid Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/2 border border-white/5">
            <Sparkles className="w-4 h-4 text-teal-light" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
              ACQUISITION CHANNELS
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Contact Ahbani LLC Today to Grow Your Business
          </h1>
          <p className="font-sans text-slate-400 max-w-2xl text-base sm:text-lg font-light leading-relaxed">
            Let's structure a custom solution for your exact brand identity, search marketing authority, or interactive web performance goals.
          </p>
        </div>

        {/* Informational Columns + Form Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates details & Interactive Google Map (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6 text-left">
              <h3 className="font-display font-medium text-2xl text-white">
                Initiate Consultation
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed font-light">
                Whether you necessitate an enterprise e-commerce platform migration, premium brand assets curation, or organic ranking domination, our Kalispell office is ready to evaluate pipeline possibilities.
              </p>

              {/* Direct coordinates cards */}
              <div className="grid grid-cols-1 gap-4 pt-2">
                
                {/* Mail address coordinate card */}
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-teal-light shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">HQ Address</span>
                    <span className="font-sans text-sm text-slate-200 mt-0.5">{agencyMetadata.address}</span>
                  </div>
                </div>

                {/* Email and Line coordinate cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-start space-x-3.5">
                    <Mail className="w-5 h-5 text-teal-light shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email Channel</span>
                      <a href={`mailto:${agencyMetadata.email}`} className="font-sans text-sm text-slate-200 mt-0.5 hover:text-teal-light transition-colors break-all">
                        {agencyMetadata.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Direct Voice</span>
                      <a href={`tel:${agencyMetadata.phone}`} className="font-sans text-sm text-slate-200 mt-0.5 hover:text-teal-light transition-colors">
                        {agencyMetadata.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service limits label card */}
                <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-teal-light shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Operational Hours</span>
                    <span className="font-sans text-sm text-slate-300 mt-0.5">Monday – Friday, 09:00 – 17:00 MST</span>
                  </div>
                </div>

              </div>
              
              {/* Social Channels inside contact page info column */}
              <div className="pt-4 text-left">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mb-3">Sync Socially</span>
                <div className="flex items-center space-x-3">
                  <a
                    href={agencyMetadata.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-teal-light hover:bg-white/5 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={agencyMetadata.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-teal-light hover:bg-white/5 transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={agencyMetadata.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-gold-light hover:bg-white/5 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={agencyMetadata.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="h-64 sm:h-72 w-full rounded-2xl border border-white/5 overflow-hidden glow-box-teal relative">
              <iframe
                title="Google Map location for Ahbani LLC"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="grayscale opacity-75 contrast-125 focus:outline-none"
              />
              <div className="absolute top-3 left-3 bg-navy-dark/90 border border-white/8 backdrop-blur-md px-2.5 py-1 rounded-md font-mono text-[9px] font-bold text-teal-light">
                MONTANA HQ
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form Module (7 columns) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-navy border border-white/5 shadow-2xl relative h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {formState !== "success" ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label htmlFor="contact-name" className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          Your Name <span className="text-teal-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g., Sarah Jenkins"
                          className="bg-navy-dark border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-accent transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label htmlFor="contact-email" className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          Work Email <span className="text-teal-accent">*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g., sarah@company.com"
                          className="bg-navy-dark border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-accent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label htmlFor="contact-phone" className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g., +1 (406) 555-0199"
                          className="bg-navy-dark border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-accent transition-all"
                        />
                      </div>

                      {/* Company input */}
                      <div className="flex flex-col text-left space-y-1.5">
                        <label htmlFor="contact-company" className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g., Aether International"
                          className="bg-navy-dark border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-accent transition-all"
                        />
                      </div>
                    </div>

                    {/* Project budget selector pills */}
                    <div className="flex flex-col text-left space-y-2">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Estimated Capital Allocation
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {budgets.map((b) => (
                          <button
                            key={b.value}
                            type="button"
                            onClick={() => handleBudgetSelect(b.value)}
                            className={`px-3 py-2.5 rounded-xl text-xs font-sans font-medium border transition-all text-center focus:outline-none ${
                              formData.budget === b.value
                                ? "bg-teal-accent/20 border-teal-light/50 text-teal-light"
                                : "bg-navy-dark border-white/5 text-slate-400 hover:text-white"
                            }`}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message body input */}
                    <div className="flex flex-col text-left space-y-1.5">
                      <label htmlFor="contact-message" className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Brief Project Summary <span className="text-teal-accent">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Provide deep details on development requirements, branding visual guides or targets..."
                        className="bg-navy-dark border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-accent resize-none transition-all"
                      />
                    </div>

                    {/* Error indicator dialog */}
                    {formState === "error" && (
                      <div className="p-4 rounded-xl bg-red-900/20 border border-red-500/30 text-red-200 text-xs flex items-center space-x-2">
                        <AlertTriangle className="w-4.5 h-4.5 text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit action buttons */}
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      id="contact-submit-btn"
                      className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-semibold bg-gradient-to-r from-teal-accent to-teal-light text-white shadow-xl hover:opacity-95 disabled:opacity-50 hover:translate-y-[-0.5px] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      {formState === "sending" ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Dispatching Coordinates...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  // Success layout component
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10 px-4 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-teal-accent/15 border border-teal-light/30 flex items-center justify-center mx-auto shadow-inner mb-2 animate-bounce">
                      <CheckCircle2 className="w-10 h-10 text-teal-light text-glow" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-white">Transmission Successful</h3>
                      <p className="font-sans text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                        Thank you for contacting Ahbani LLC. Your business coordinates have been processed by our communications pipeline, and a senior architect will reach out within 1 business day.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setFormState("idle")}
                        type="button"
                        className="px-6 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] border border-white/5 hover:text-white hover:bg-white/5 transition-all"
                      >
                        Send Another Signal
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
