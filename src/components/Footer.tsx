import React from 'react';
import { useParams } from 'react-router-dom';
import { Language, translations } from '../constants';

export const Footer = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black tracking-tighter uppercase italic text-white mb-4 block">Vigorate</span>
            <p className="max-w-xs text-sm leading-relaxed">
              {lang === 'en' ? 'The global authority in fitness, nutrition, and science-backed training. Empowering your journey to peak performance.' : 
               lang === 'es' ? 'La autoridad global en fitness, nutrición y entrenamiento basado en la ciencia. Empoderando tu viaje hacia el máximo rendimiento.' : 
               'A autoridade global em fitness, nutrição e treinamento baseado em ciência. Capacitando sua jornada para o desempenho máximo.'}
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">{lang === 'en' ? 'Resources' : lang === 'es' ? 'Recursos' : 'Recursos'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t.common.workouts}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.common.diet}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.common.calculators}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">{lang === 'en' ? 'Legal' : lang === 'es' ? 'Legal' : 'Legal'}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : lang === 'es' ? 'Política de Privacidad' : 'Política de Privacidade'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms of Service' : lang === 'es' ? 'Términos de Servicio' : 'Termos de Serviço'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Cookie Policy' : lang === 'es' ? 'Política de Cookies' : 'Política de Cookies'}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Vigorate Global. {lang === 'en' ? 'All rights reserved.' : lang === 'es' ? 'Todos los derechos reservados.' : 'Todos os direitos reservados.'}</p>
        </div>
      </div>
    </footer>
  );
};
