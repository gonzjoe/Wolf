/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  imageUrl: string;
  iconName: string; // From Lucide React
}

export interface PlanItem {
  id: string;
  name: string;
  priceRange: string;
  period: string;
  recommendedFor: string;
  features: string[];
  isHighlighted: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface MemberItem {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
