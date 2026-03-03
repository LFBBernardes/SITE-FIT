import { Language } from '../constants';
import { enWorkouts } from './workouts/en';
import { esWorkouts } from './workouts/es';
import { brWorkouts } from './workouts/br';
import { getInternalId } from '../utils/slugMapping';

export interface WorkoutFAQ {
  question: string;
  answer: string;
}

export interface WorkoutContent {
  title: string;
  slug: string;
  excerpt: string;
  updatedAt: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  primaryMuscles: string[];
  equipment: string[];
  estimatedTime: string;
  goals: string[];
  intensity: string;
  duration: string;
  muscleGroup: string;
  coverImage?: string;
  coverAlt?: string;
  ogImage?: string;
  body: string;
  bodyPart2: string;
  faqs: WorkoutFAQ[];
}

export const getWorkoutContent = (lang: Language, slug: string): WorkoutContent | null => {
  const translations: Record<Language, Record<string, WorkoutContent>> = {
    en: enWorkouts,
    es: esWorkouts,
    br: brWorkouts,
  };

  const langContent = translations[lang] || translations.en;
  
  // Find the internal ID for this slug
  const internalId = getInternalId('workouts', lang, slug);
  
  if (!internalId) return null;
  
  return langContent[internalId] || null;
};
