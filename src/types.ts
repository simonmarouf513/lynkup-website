import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  title: string;
  description: string;
  number: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}