import React from 'react';
import { Mail } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Language, translations } from '../constants';

export const EmailCapture = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  return (
    <div className="bg-black text-white rounded-[2rem] p-10 md:p-16 my-16 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="bg-emerald-500/10 text-emerald-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4">
          {t.common.emailCaptureTitle}
        </h2>
        <p className="text-zinc-400 mb-8">
          {t.common.emailCaptureDesc}
        </p>
        <form className="flex flex-col sm:row gap-3">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-grow bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
            required
          />
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap">
            {t.common.emailCaptureCTA}
          </button>
        </form>
        <p className="text-[10px] text-zinc-500 mt-4 uppercase tracking-widest">
          No spam. Unsubscribe at any time.
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-emerald-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};
