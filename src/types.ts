/**
 * TypeScript Interfaces for Saudi Gazette cloned homepage.
 */

export interface Article {
  id: string | number;
  title: string;
  description?: string;
  publishTime: string;
  image: string;
  category?: string;
  url: string;
  author?: string;
  authorImage?: string;
  duration?: string; // for videos
  isPremium?: boolean;
}

export interface NewsSection {
  title: string;
  url: string;
  articles: Article[];
}
