/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon name lookup
  imageUrl: string;
  ctaText: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: "web" | "marketing" | "seo" | "branding" | "content" | "all";
  desc: string;
  year: string;
  image: string;
  tags: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
  date: string;
  category: "Insights" | "Tech" | "Marketing" | "Design" | "Strategy" | "SEO";
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
}
