export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface ThemeConfig {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
} 