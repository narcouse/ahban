/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioProject, ReviewItem, BlogPost, SkillItem } from "./types";

export const agencyMetadata = {
  businessName: "Ahbani LLC",
  address: "1001 S Main St, Ste 600, Kalispell, MT 59901",
  email: "hello@ahbani.com",
  phone: "+1 (406) 888-2931",
  socials: {
    twitter: "https://twitter.com/ahbanillc",
    linkedin: "https://linkedin.com/company/ahbani-llc",
    instagram: "https://instagram.com/ahbani.llc",
    github: "https://github.com/ahbani-llc"
  },
  seo: {
    title: "Ahbani LLC | Professional Digital Agency Website",
    description: "Premium Digital Agency specializing in Web Development, SEO Optimization, Branding & Identity, and Enterprise Solutions.",
    ogImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  }
};

export const skillsData: SkillItem[] = [
  { name: "Web Development", percentage: 95 },
  { name: "Digital Marketing", percentage: 92 },
  { name: "SEO Optimization", percentage: 88 },
  { name: "Branding & Identity", percentage: 85 },
  { name: "Content Creation", percentage: 87 }
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Architecting blisteringly fast, accessible, and high-performance React application engines wrapped in elegant, custom-coded client architectures.",
    iconName: "Code2",
    imageUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop",
    ctaText: "Engineer Your Solution"
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Deploying sophisticated, hyper-targeted advertising stacks and conversion funnels to capture attention and scale customer acquisition cycles.",
    iconName: "TrendingUp",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    ctaText: "Scale Your Funnel"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Unlocking organic dominance on Google through structured schematics, comprehensive search intent research, and dynamic page performance tuning.",
    iconName: "SearchCode",
    imageUrl: "https://images.unsplash.com/photo-1571844308284-63796c979302?q=80&w=600&auto=format&fit=crop",
    ctaText: "Secure Dominance"
  },
  {
    id: "branding",
    title: "Branding & Identity",
    description: "Forging indelible brand strategies, corporate style guidelines, and visual narratives that demand premium pricing and foster loyalty.",
    iconName: "Paintbrush",
    imageUrl: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=600&auto=format&fit=crop",
    ctaText: "Forge Your Identity"
  },
  {
    id: "content",
    title: "Content Creation",
    description: "Crafting copy, high-end static graphics, and narrative digital assets that captivate audiences and establish industry-wide authorities.",
    iconName: "FileText",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600&auto=format&fit=crop",
    ctaText: "Commence Storytelling"
  },
  {
    id: "portfolio",
    title: "Portfolio Management",
    description: "Curating, positioning, and launching multi-platform product portfolios designed to maximize market resonance and elevate brand valuation.",
    iconName: "Briefcase",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
    ctaText: "Curate Your Portfolio"
  }
];

export const portfolioData: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Aether Luxury Retail Platform",
    client: "Aether International Ltd.",
    category: "web",
    desc: "A custom headless commerce deployment utilizing Next.js, WebGL interactive product previews, and complex 3D rendering parameters that achieved a 42% increase in sales session duration.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    tags: ["React SPA", "Headless Shopify Link", "Three.js Renderer"],
    stats: [
      { label: "Acquisition Spike", value: "+148%" },
      { label: "Conversion Rate", value: "4.82%" },
      { label: "Page Load Speed", value: "0.24s" }
    ]
  },
  {
    id: "proj-2",
    title: "Helix Web3 Cryptic Analytics Dashboard",
    client: "Helix Protocol Labs",
    category: "web",
    desc: "React dashboard illustrating thousands of live blockchain transactions per second. Built for absolute density, containing custom high-performance canvasses and heavy client-side computation engines.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["D3 Visualization", "Real-time State", "Tailwind Theme CSS"],
    stats: [
      { label: "Daily Active Users", value: "112,000+" },
      { label: "Data Rendering latency", value: "<15ms" },
      { label: "User Retention", value: "+54%" }
    ]
  },
  {
    id: "proj-3",
    title: "Meridian Hotel & Resorts Branding Suite",
    client: "Meridian Hospitality Group",
    category: "branding",
    desc: "A total overhaul of visual positioning, typography paradigms, luxury print assets, and global digital guidelines across 24 premium boutique resorts internationally.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    tags: ["Corporate Brand Guidelines", "Print Systems", "Digital Assets"],
    stats: [
      { label: "Organic Room Bookings", value: "+38%" },
      { label: "Brand Equity Index", value: "9.2/10" },
      { label: "Social Media CTR", value: "3.2x" }
    ]
  },
  {
    id: "proj-4",
    title: "Zenith Organic SEO & Domain Scale",
    client: "Zenith AgriTech Inc.",
    category: "seo",
    desc: "A meticulous SEO execution targeting highly contested queries inside global agricultural science. Scaled domain authority score while driving organic pipeline value.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    tags: ["Keywords Structuring", "Semantic Siloing", "Content Architecture"],
    stats: [
      { label: "Monthly Organic Clicks", value: "480k" },
      { label: "Keyword Rankings (Top 3)", value: "1,240+" },
      { label: "Referral Pipe Valuation", value: "$4.2M" }
    ]
  },
  {
    id: "proj-5",
    title: "Nebula Digital Content Optimization",
    client: "Nebula Stream Networks",
    category: "marketing",
    desc: "Comprehensive cross-platform audio-visual content curation, targeted paid social media channels, and dynamic banner campaigns promoting premium streaming catalog updates.",
    year: "2026",
    image: "https://images.unsplash.com/photo-1542744173-8e0ee26bf15a?q=80&w=800&auto=format&fit=crop",
    tags: ["Targeted Funnels", "Graphic Direction", "Social Paid Ads"],
    stats: [
      { label: "Ad Return on Spend", value: "6.8x" },
      { label: "Total Cost per Install", value: "$0.85" },
      { label: "Brand Recall Rate", value: "+84%" }
    ]
  }
];

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Sarah Jenkins",
    role: "Chief Executive Officer",
    company: "Aether International Ltd.",
    rating: 5,
    quote: "Ahbani LLC took our retail vision and transformed it into a masterpiece. Their team has a level of aesthetic precision that we've never witnessed in other high-end agencies. Our e-commerce conversion rate has literally doubled.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "rev-2",
    name: "David Chen",
    role: "Chief Technology Officer",
    company: "Helix Protocol Labs",
    rating: 5,
    quote: "The web development standard at Ahbani is exceptional. They crafted an incredibly performant Web3 data visualization dashboard that renders massive real-time data smoothly. They write beautifully written, clean, extensible code.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "rev-3",
    name: "Amara Okafor",
    role: "Global Marketing Director",
    company: "Meridian Hospitality Group",
    rating: 5,
    quote: "Our brand perception has reached an entirely new echelon since partnering with Ahbani LLC. Their team was incredibly methodical, crafting stunning brand guidelines and coordinating our digital campaign assets flawlessly.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "rev-4",
    name: "Marcus Thompson",
    role: "VP of Digital Acquisition",
    company: "Zenith AgriTech Inc.",
    rating: 5,
    quote: "Their SEO strategy is purely mathematical and highly result-oriented. Instead of speculative advice, they delivered concrete domain hierarchy engineering and semantic structuring that unlocked top rankings for our core terms.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Death of Generic Templates: Why Bespoke Web Engineering Wins",
    excerpt: "In 2026, user experience dominates organic rankings and customer lifetime values. Discover how custom digital pipelines out perform generic template frameworks by 300%.",
    content: [
      "For years, web production relied heavily on dragging widgets or using bulky commercial themes. In today's digital climate, those templates present extreme liabilities. They load slowly, carry legacy metadata, are hard to scale, and fail to evoke any emotion.",
      "At Ahbani LLC, we build client engines from first-principles. This ensures that every line of CSS, every animation framework trigger, and every database query is tailored specifically for the user journey. By keeping code pure, we provide ultra-low latency interactive experiences.",
      "The metrics do not lie. Modern headless setups on React and custom micro-routing increase content visibility, reduce bounce rates across search engines, and solidify a premier market position that instantly convinces high-end clients to choose your company."
    ],
    date: "June 10, 2026",
    category: "Tech",
    readTime: "4 min read",
    author: {
      name: "Arman Ahbani",
      role: "Managing Director",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    tags: ["React Routing", "Tailwind CSS", "Page Performance", "Modern UI"]
  },
  {
    id: "blog-2",
    title: "Mastering Semantic Intent: The Shift in Enterprise SEO Hierarchy",
    excerpt: "Google's index now analyzes topical network clusters. Learn how to construct high-authority siloes that assert absolute dominance for competitive digital terms.",
    content: [
      "Classic keyword loading has been completely obsolete for a long time. Today, search engines evaluate semantic proximity: how deeply your site satisfies all surrounding questions matching a user's core intent.",
      "We design thorough topical graphs that guide users systematically from introduction to actionable commitment. This is known as 'Semantic Siloing'. Setting up a clean internal mapping of articles tells crawlers your portal is a verified source of authority.",
      "Implementing structural schema, optimising web layout speed, and offering genuine mathematical insights instead of filler paragraphs creates an organic brand moat that works 24/7 to capture enterprise-level sales funnels."
    ],
    date: "May 28, 2026",
    category: "SEO",
    readTime: "6 min read",
    author: {
      name: "Sophia Vance",
      role: "Director of Organic Scale",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    tags: ["Enterprise SEO", "Semantic Graph", "Organic Pipeline", "Google Core"]
  },
  {
    id: "blog-3",
    title: "Forging Premium Brand Identity Systems in a Noise-Saturated World",
    excerpt: "How to craft a distinct corporate persona, visual guidelines, and interactive design values that command high pricing power with luxury clients.",
    content: [
      "Branding is not just a high-resolution logo or a clean palette—it is an architectural narrative of quality. A luxury brand's visual identity must telegraph excellence without over-explaining itself.",
      "This is accomplished by using intentional high-contrast layout grids, generous negative space, beautiful typography pairs (such as using Space Grotesk display headers with clean Inter paragraph fonts), and professional motion feedback.",
      "When users feel that every detail of your digital presence was crafted with artisan discipline, they implicitly project that exact same level of reliability onto your agency services. Let's make sure your digital voice makes a profound impression."
    ],
    date: "April 15, 2026",
    category: "Design",
    readTime: "5 min read",
    author: {
      name: "Julien Mercer",
      role: "Chief Branding Officer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1550150136-1e663a0ef9db?q=80&w=600&auto=format&fit=crop",
    tags: ["Luxury Design", "Brand Authority", "Visual Hierarchy", "UX Rules"]
  }
];
