import { Language } from '../constants';
import { enDietPlans } from './diet/en';
import { esDietPlans } from './diet/es';
import { brDietPlans } from './diet/br';
import { DietPlan } from './diet/types';
import { getInternalId } from '../utils/slugMapping';

const dietPlans: Record<Language, Record<string, DietPlan>> = {
  en: enDietPlans,
  es: esDietPlans,
  br: brDietPlans,
};

export const getDietContent = (lang: Language, slug: string): DietPlan | undefined => {
  const langContent = dietPlans[lang] || dietPlans.en;
  
  // Find the internal ID for this slug
  const internalId = getInternalId('diet-plans', lang, slug);
  
  if (internalId && langContent[internalId]) {
    return langContent[internalId];
  }

  // Try to find exact match as fallback
  if (langContent[slug]) return langContent[slug];

  return undefined;
};
