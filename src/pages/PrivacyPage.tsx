/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Sparkles, Shield, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { agencyMetadata } from "../data";

export default function PrivacyPage() {
  return (
    <main id="privacy-root" className="min-h-screen bg-navy-dark pt-36 pb-24 relative overflow-hidden text-left">
      
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
            <Shield className="w-4 h-4 text-teal-light" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
              LEGAL INFORMATION
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Privacy Policy Guidelines
          </h1>
          <p className="font-mono text-xs text-slate-500">
            Last Updated: June 12, 2026 | Effective immediately
          </p>
        </div>

        {/* Content Paragraph Cards Block */}
        <div className="space-y-8 p-8 sm:p-10 rounded-3xl bg-navy border border-white/5 shadow-2xl font-sans text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <Lock className="w-4.5 h-4.5 text-teal-light mr-2.5" />
              1. Information Collection and Stewardship
            </h2>
            <p>
              At Ahbani LLC, we respect the integrity of your personal and corporate details. When you interact with our forms, initiate a project request or subscribe to our agency systems, we collect identifying coordinates, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-slate-400">
              <li>Individual name & corporate designation</li>
              <li>Work email handles & contact numbers</li>
              <li>Estimated budget scope & brief project descriptions</li>
              <li>Metadata (IP routing, browser type, cookies)</li>
            </ul>
            <p>
              All files are stored on secure hosting parameters. We never sell, lease, or lease corporate data models to external third parties.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <Eye className="w-4.5 h-4.5 text-teal-light mr-2.5" />
              2. Cookies & Analytics Trackers
            </h2>
            <p>
              This website employs modern client cookienotes and analytics systems. This ensures we can audit site speeds, optimize user interface navigation parameters, and deliver targeted advertising solutions. By using our services, you consent to the placement of transient cookies in your browser profile.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <FileText className="w-4.5 h-4.5 text-teal-light mr-2.5" />
              3. User Rights & Data Protection Guidelines
            </h2>
            <p>
              Under global frameworks, you retain complete privilege to access, modify, restrict, or erase any personal details stored in our database records. You can withdraw your consent for email updates at any time.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h2 className="font-display font-semibold text-lg text-white flex items-center">
              <Sparkles className="w-4.5 h-4.5 text-gold-accent mr-2.5" />
              4. Company Contact Information
            </h2>
            <p>
              For legal questions, schema audits, data deletions, or to verify policies details, please contact our privacy compliance officer directly at:
            </p>
            <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2 mt-2">
              <p className="font-semibold text-white">Ahbani LLC</p>
              <p className="text-slate-450">{agencyMetadata.address}</p>
              <p className="text-sm">
                Email: <a href={`mailto:${agencyMetadata.email}`} className="text-teal-light hover:underline">{agencyMetadata.email}</a> <br />
                Direct line: <a href={`tel:${agencyMetadata.phone}`} className="text-teal-light hover:underline">{agencyMetadata.phone}</a>
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
