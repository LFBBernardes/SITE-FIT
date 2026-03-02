import { Language } from '../constants';
import { enWorkouts } from './workouts/en';
import { esWorkouts } from './workouts/es';
import { brWorkouts } from './workouts/br';

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
  heroImage: string;
  body: string;
  bodyPart2: string;
  faqs: WorkoutFAQ[];
}

export const getWorkoutContent = (lang: Language, id: string): WorkoutContent | null => {
  const translations: Record<Language, Record<string, WorkoutContent>> = {
    en: enWorkouts,
    es: esWorkouts,
    br: brWorkouts,
  };

  const langContent = translations[lang] || translations.en;
  return langContent[id] || null;
};
