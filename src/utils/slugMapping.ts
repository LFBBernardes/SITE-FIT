import { Language } from '../constants';

export type Section = 'workouts' | 'diet-plans' | 'supplements' | 'blog';

export interface SlugMap {
  en: string;
  es: string;
  br: string;
}

export const SLUG_MAPS: Record<Section, Record<string, SlugMap>> = {
  workouts: {
    chest: { en: 'chest', es: 'pecho', br: 'peito' },
    back: { en: 'back', es: 'espalda', br: 'costas' },
    shoulders: { en: 'shoulders', es: 'hombros', br: 'ombros' },
    biceps: { en: 'biceps', es: 'biceps', br: 'biceps' },
    triceps: { en: 'triceps', es: 'triceps', br: 'triceps' },
    legs: { en: 'legs', es: 'piernas', br: 'pernas' },
    glutes: { en: 'glutes', es: 'gluteos', br: 'gluteos' },
    abs: { en: 'abs', es: 'abdominales', br: 'abdominais' },
    'home-workouts': { en: 'home-workouts', es: 'entrenamiento-en-casa', br: 'treino-em-casa' },
    beginner: { en: 'beginner', es: 'principiante', br: 'iniciante' },
    advanced: { en: 'advanced', es: 'avanzado', br: 'avancado' },
  },
  'diet-plans': {
    '1200-calorie': { en: '1200-calorie', es: '1200-calorias', br: '1200-calorias' },
    '1500-calorie': { en: '1500-calorie', es: '1500-calorias', br: '1500-calorias' },
    '1800-calorie': { en: '1800-calorie', es: '1800-calorias', br: '1800-calorias' },
    '2000-calorie': { en: '2000-calorie', es: '2000-calorias', br: '2000-calorias' },
    '2500-calorie': { en: '2500-calorie', es: '2500-calorias', br: '2500-calorias' },
    cutting: { en: 'cutting', es: 'definicion', br: 'cutting' },
    bulking: { en: 'bulking', es: 'volumen', br: 'bulking' },
    'low-carb': { en: 'low-carb', es: 'bajo-en-carbohidratos', br: 'low-carb' },
    'muscle-gain': { en: 'muscle-gain', es: 'ganar-musculo', br: 'ganho-de-massa' },
  },
  supplements: {
    'whey-protein': { en: 'whey-protein', es: 'proteina-de-suero', br: 'whey-protein' },
    'creatine-monohydrate': { en: 'creatine-monohydrate', es: 'creatina-monohidrato', br: 'creatina-monohidratada' },
    bcaa: { en: 'bcaa', es: 'bcaa', br: 'bcaa' },
    'pre-workout': { en: 'pre-workout', es: 'pre-entreno', br: 'pre-treino' },
    multivitamins: { en: 'multivitamins', es: 'multivitaminicos', br: 'multivitaminicos' },
    'omega-3': { en: 'omega-3', es: 'omega-3', br: 'omega-3' },
    'fat-burners': { en: 'fat-burners', es: 'quemagrasas', br: 'termogenicos' },
    collagen: { en: 'collagen', es: 'colageno', br: 'colageno' },
  },
  blog: {
    '1': { en: '1', es: '1', br: '1' },
    '2': { en: '2', es: '2', br: '2' },
    '3': { en: '3', es: '3', br: '3' },
  }
};

/**
 * Gets the internal ID (English slug) for a given localized slug and language.
 */
export const getInternalId = (section: Section, lang: Language, slug: string): string | null => {
  const sectionMap = SLUG_MAPS[section];
  for (const [internalId, mapping] of Object.entries(sectionMap)) {
    if (mapping[lang] === slug) {
      return internalId;
    }
  }
  return null;
};

/**
 * Gets the localized slug for a given internal ID and language.
 */
export const getLocalizedSlug = (section: Section, lang: Language, internalId: string): string => {
  const mapping = SLUG_MAPS[section][internalId];
  return mapping ? mapping[lang] : internalId;
};
