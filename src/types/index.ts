export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  turnaround: string;
  idealFor: string;
  serviceCode: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'demolition' | 'roll_off' | 'landscaping' | 'metal_works' | 'remodeling';
  categoryLabel: string;
  location: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  hasComparison?: boolean;
  challenge: string;
  solution: string;
  result: string;
  equipmentUsed: string[];
  year: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  quote: string;
  serviceUsed: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'dumpsters' | 'demolition' | 'snow_turf' | 'general';
}
