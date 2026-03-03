import * as en from './en';
import * as es from './es';
import * as br from './br';

import { Language } from '../../constants';
import { getInternalId } from '../../utils/slugMapping';

export const getSupplementContent = (lang: Language, slug: string) => {
  const translations: Record<Language, any> = { en, es, br };
  const langContent = translations[lang] || translations.en;
  
  // Find the internal ID for this slug
  const internalId = getInternalId('supplements', lang, slug);
  
  if (!internalId) return null;
  
  // Convert kebab-case internalId to the exported name format (no hyphens)
  const exportId = internalId.replace(/-/g, '');
  
  return langContent[exportId] || null;
};
