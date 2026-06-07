export interface Player {
  id: string;
  name: string;
  position: string;
  number?: number;
  photo?: string;
}

export interface Team {
  id: string;
  name: string;
  slug: string;
  category: string;
  categoryTier: "senior" | "youth-senior" | "youth-junior";
  photo: string;
  coach: string;
  players: Player[];
}

export interface Match {
  id: string;
  teamId: string;
  rival: string;
  date: string;
  time: string;
  location: string;
  isHome: boolean;
  result?: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
  category: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo?: string;
  url: string;
  description: string;
}

export interface SocioTier {
  id: string;
  name: string;
  price: number;
  benefits: string[];
}
