import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Language, translations } from '../constants';

export const HealthDisclaimer = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
      <div className="flex items-start gap-4">
        <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-amber-900 font-bold mb-1 uppercase text-xs tracking-widest">{t.common.medicalDisclaimerTitle}</h4>
          <p className="text-amber-800 text-sm leading-relaxed">
            {t.common.medicalDisclaimerDesc}
          </p>
        </div>
      </div>
    </div>
  );
};
