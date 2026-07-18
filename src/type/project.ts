export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  timeline?: string;
  tags?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  details?: string[];
}