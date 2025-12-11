export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedData<T> {
  data: T[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured_image?: string;
  demo_url?: string;
  github_url?: string;
  status: 'draft' | 'published' | 'archived';
  skills: Skill[];
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  status: 'draft' | 'published' | 'archived';
  views: number;
  published_at?: string;
  category: Category;
  tags: Tag[];
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  blog_posts_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  posts_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
}

export interface Setting {
  key: string;
  value: string;
}

export interface PaginatedData<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  company_url?: string;
  location?:  string;
  employment_type:  'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  start_date: string;
  end_date?: string;
  is_current: boolean;
  description: string;
  responsibilities?:  string[];
  technologies?: string[];
  company_logo?: string;
  order: number;
  is_featured: boolean;
  date_range?: string;
  duration?: string;
  created_at: string;
  updated_at: string;
}
