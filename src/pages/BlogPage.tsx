/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Search, Calendar, Clock, ArrowRight, X, User, Tag, BookOpen } from "lucide-react";
import { blogPostsData } from "../data";
import { BlogPost } from "../types";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Tech" | "SEO" | "Design" | "Strategy">("All");
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  // Categories list
  const categories: ("All" | "Tech" | "SEO" | "Design" | "Strategy")[] = ["All", "Tech", "SEO", "Design", "Strategy"];

  // Filter & Search Blog Posts
  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeArticle = useMemo(() => {
    return blogPostsData.find((post) => post.id === activeArticleId) || null;
  }, [activeArticleId]);

  return (
    <main id="blog-page-root" className="min-h-screen bg-navy-dark pt-36 pb-24 relative overflow-hidden">
      
      {/* Background decoration orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-teal-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SEO Metatag Helpers & Page Heading */}
        <div className="flex flex-col items-center text-center justify-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/2 border border-white/5">
            <Sparkles className="w-4 h-4 text-teal-light" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase font-semibold">
              AGENCY INSIGHTS
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Knowledge to Dominate Digital Spaces
          </h1>
          <p className="font-sans text-slate-400 max-w-2xl text-base sm:text-lg font-light leading-relaxed">
            Methodical tactics, analytical frameworks, and digital positioning studies created by the senior engineering squad of Ahbani LLC.
          </p>
        </div>

        {/* Search and Category Control Panels */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 p-6 rounded-2xl bg-navy border border-white/5">
          
          {/* Search bar inputs */}
          <div className="relative w-full lg:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Search className="w-5 h-5 text-slate-500" />
            </span>
            <input
              type="text"
              id="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keyword, tag, or article..."
              className="w-full bg-navy-dark border border-white/5 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-accent/50 focus:ring-1 focus:ring-teal-accent/35 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Catalog category pills */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-teal-accent/25 text-teal-light border border-teal-accent/40"
                    : "text-[#94A3B8] border border-white/5 hover:text-white hover:bg-white/2"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Filtered articles list */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl bg-navy border border-white/5 overflow-hidden shadow-xl flex flex-col hover:border-teal-accent/25 transition-all"
              >
                
                {/* Thumbnails banner frame */}
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded bg-teal-accent font-mono text-[9px] text-white uppercase font-bold tracking-wider">
                    {post.category}
                  </div>
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article textual data */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-4 text-[11px] font-mono text-[#64748B]">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-white leading-snug group-hover:text-teal-light transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer Row (Author details + Read more button) */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-left">
                    <div className="flex items-center space-x-2.5">
                      <img
                        className="w-7 h-7 rounded-full object-cover border border-[#14B8A6]/20"
                        src={post.author.avatar}
                        alt={post.author.name}
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <span className="font-sans text-[11px] font-medium text-white">{post.author.name}</span>
                        <span className="font-sans text-[9px] text-slate-500">{post.author.role}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArticleId(post.id)}
                      className="inline-flex items-center text-xs font-mono font-bold text-teal-light hover:text-white uppercase tracking-wider"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>

              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 rounded-3xl bg-navy border border-white/5">
            <BookOpen className="w-12 h-12 text-[#64748B] mx-auto mb-4 animate-bounce" />
            <span className="block font-display font-semibold text-lg text-white mb-1">No Articles Match Queries</span>
            <span className="font-sans text-sm text-slate-400">Try modifying your search term or selecting another category above.</span>
          </div>
        )}

      </div>

      {/* Interactive Drawer modal to read actual content overlay offline */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              id="blog-modal-panel"
              className="relative max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl bg-navy border border-white/10 p-6 sm:p-10 shadow-2xl scrollbar-gutter"
            >
              
              {/* Close button handles */}
              <button
                onClick={() => setActiveArticleId(null)}
                type="button"
                className="absolute top-4 right-4 p-2 rounded-xl border border-white/5 hover:bg-white/5 text-[#94A3B8] hover:text-white transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 pt-2">
                <span className="inline-block px-3 py-1 rounded bg-teal-accent font-mono text-[10px] text-white uppercase font-bold tracking-wider mb-2">
                  {activeArticle.category}
                </span>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight text-left">
                  {activeArticle.title}
                </h2>

                {/* Author profile and date summary */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pb-4 border-b border-white/5 text-left">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-8 h-8 rounded-full object-cover border border-[#14B8A6]/20"
                      src={activeArticle.author.avatar}
                      alt={activeArticle.author.name}
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col">
                      <span className="text-white text-xs">{activeArticle.author.name}</span>
                      <span className="text-[10px] text-zinc-500">{activeArticle.author.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 ml-0 sm:ml-auto">
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" />{activeArticle.date}</span>
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{activeArticle.readTime}</span>
                  </div>
                </div>

                {/* Main banner inside modal */}
                <div className="h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-white/5">
                  <img
                    className="w-full h-full object-cover opacity-80"
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Paragraph items */}
                <div className="space-y-4 font-sans text-sm sm:text-base text-slate-300 leading-relaxed text-left">
                  {activeArticle.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Tag lines footer row */}
                <div className="pt-6 border-t border-white/5 text-left space-y-2">
                  <span className="font-mono text-[10px] text-slate-500 uppercase font-semibold block">Topics Cataloged:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-navy-dark border border-white/5 font-mono text-[10px] text-teal-light">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
