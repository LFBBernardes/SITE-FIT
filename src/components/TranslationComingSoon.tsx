import React from 'react';
import { Link } from 'react-router-dom';
import { Language, translations } from '../constants';
import { ArrowLeft, Languages } from 'lucide-react';

interface TranslationComingSoonProps {
  lang: Language;
  backLink: string;
  backText: string;
}

export const TranslationComingSoon: React.FC<TranslationComingSoonProps> = ({ lang, backLink, backText }) => {
  const translations_local = {
    en: {
      title: "Translation Coming Soon",
      message: "We are working hard to translate this content for you. Please check back later or view the English version.",
      viewEnglish: "View English Version",
    },
    es: {
      title: "Traducción en Camino",
      message: "Estamos trabajando duro para traducir este contenido para ti. Por favor, vuelve más tarde o consulta la versión en inglés.",
      viewEnglish: "Ver Versión en Inglés",
    },
    br: {
      title: "Tradução em Breve",
      message: "Estamos trabalhando duro para traduzir este conteúdo para você. Por favor, volte mais tarde ou veja a versão em inglês.",
      viewEnglish: "Ver Versão em Inglês",
    }
  };

  const t = translations_local[lang] || translations_local.en;

  return (
    <div className="container py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Languages className="h-10 w-10 text-emerald-600" />
        </div>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-6">{t.title}</h1>
        <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
          {t.message}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to={backLink}
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> {backText}
          </Link>
          
          <Link 
            to={backLink.replace(`/${lang}/`, '/en/')}
            className="bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors"
          >
            {t.viewEnglish}
          </Link>
        </div>
      </div>
    </div>
  );
};
