/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Sparkles, Scale, BookOpen, AlertCircle, Coins, FileCheck, ArrowLeft } from "lucide-react";
import { agencyMetadata } from "../data";

export default function TermsPage() {
  return (
    <main id="terms-root" className="min-h-screen bg-navy-dark pt-36 pb-24 relative overflow-hidden text-left">
      
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-teal-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Action */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-light hover:text-white mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header Block */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/2 border border-white/5">
            <Scale className="w-4 h-4 text-gold-light" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
              SERVICE TERMS
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Terms of Service Agreement
          </h1>
          <p className="font-mono text-xs text-slate-500">
            Last Updated: June 12, 2026 | Effective immediately
          </p>
        </div>

        {/* Content Paragraph Cards Block */}
        <div className="space-y-8 p-8 sm:p-10 rounded-3xl bg-navy border border-white/5 shadow-2xl font-sans text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <BookOpen className="w-4.5 h-4.5 text-teal-light mr-2.5" />
              1. Website Usage Policies
            </h2>
            <p>
              By accessing and navigating this browser portal, you agree to comply with and be bound by these Terms of Service. You are strictly forbidden from attempting to exploit, deconstruct, reverse-engineer, or deploy automated scraping agents on this application.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <Sparkles className="w-4.5 h-4.5 text-gold-accent mr-2.5" />
              2. Intellectual Property Rights
            </h2>
            <p>
              All assets, code scripts, graphic guides, logos, style variables, vector files and content structures displayed on this site represent intellectual property owned by Ahbani LLC or licensed third parties. No license is granted to repurpose or clone any element of this application without written company authorization.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <FileCheck className="w-4.5 h-4.5 text-teal-light mr-2.5" />
              3. Project Engagement Terms
            </h2>
            <p>
              To initiate custom digital builds, SEO mappings, branding workflows or code installations, clients must coordinate with an authorized representative of Ahbani LLC and sign a Statement of Work (SOW) enclosing delivery deadlines, technical standards, and target milestones.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <Coins className="w-4.5 h-4.5 text-teal-light mr-2.5" />
              4. Payment & Fiscal Parameters
            </h2>
            <p>
              Custom builds necessitate upfront deposits as structured in the associated SOW. Remaining project fees will be invoiced upon milestones completion. Invoices must be cleared within 15 business days of transmission. Interest penalties may be applied to late clearances.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <AlertCircle className="w-4.5 h-4.5 text-red-400 mr-2.5" />
              5. Liability Limitations
            </h2>
            <p>
              Ahbani LLC coordinates digital initiatives matching standard best methodologies. However, we do not guarantee specific monetary yields, immediate search ranking targets, or perpetual site uptime since third-party technologies (Google algorithms, browser releases, hosting servers) are subject to external volatility.
            </p>
          </div>

          <div className="pt-6 border-t border-white/5 text-xs text-slate-500 font-mono text-center">
            For operational inquiries regarding these terms, contact <a href={`mailto:${agencyMetadata.email}`} className="text-teal-light">{agencyMetadata.email}</a>.
          </div>

        </div>

      </div>
    </main>
  );
}
