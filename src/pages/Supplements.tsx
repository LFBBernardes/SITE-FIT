import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language, translations } from '../constants';
import { Pill, ShieldCheck, ChevronRight } from 'lucide-react';

export const Supplements = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  const supplements = [
    { id: { en: 'whey-protein', es: 'proteina-de-suero', br: 'whey-protein' }, 
      name: { en: 'Whey Protein', es: 'Proteína de Suero', br: 'Whey Protein' }, 
      desc: { en: 'Fast-absorbing protein for muscle recovery.', es: 'Proteína de rápida absorción para la recuperación muscular.', br: 'Proteína de rápida absorção para recuperação muscular.' } 
    },
    { id: { en: 'creatine-monohydrate', es: 'creatina-monohidrato', br: 'creatina-monohidratada' }, 
      name: { en: 'Creatine Monohydrate', es: 'Creatina Monohidrato', br: 'Creatina Monohidratada' }, 
      desc: { en: 'The most researched supplement for strength and power.', es: 'El suplemento más investigado para fuerza y potencia.', br: 'O suplemento mais pesquisado para força e potência.' } 
    },
    { id: { en: 'bcaa', es: 'bcaa', br: 'bcaa' }, 
      name: { en: 'BCAA', es: 'BCAA', br: 'BCAA' }, 
      desc: { en: 'Branched-chain amino acids for endurance.', es: 'Aminoácidos de cadena ramificada para la resistencia.', br: 'Aminoácidos de cadeia ramificada para resistência.' } 
    },
    { id: { en: 'pre-workout', es: 'pre-entreno', br: 'pre-treino' }, 
      name: { en: 'Pre-Workout', es: 'Pre-Entrenamiento', br: 'Pré-Treino' }, 
      desc: { en: 'Energy and focus for intense training sessions.', es: 'Energía y enfoque para sesiones de entrenamiento intensas.', br: 'Energia e foco para sessões de treino intensas.' } 
    },
    { id: { en: 'multivitamins', es: 'multivitaminicos', br: 'multivitaminicos' }, 
      name: { en: 'Multivitamins', es: 'Multivitamínicos', br: 'Multivitamínicos' }, 
      desc: { en: 'Essential micronutrients for overall health.', es: 'Micronutrientes esenciales para la salud general.', br: 'Micronutrientes essenciais para a saúde geral.' } 
    },
    { id: { en: 'omega-3', es: 'omega-3', br: 'omega-3' }, 
      name: { en: 'Omega 3', es: 'Omega 3', br: 'Ômega 3' }, 
      desc: { en: 'Healthy fats for heart and joint health.', es: 'Grasas saludables para la salud del corazón y las articulaciones.', br: 'Gorduras saudáveis para a saúde do coração e das articulações.' } 
    },
    { id: { en: 'fat-burners', es: 'quemagrasas', br: 'termogenicos' }, 
      name: { en: 'Fat Burners', es: 'Quemagrasas', br: 'Termogênicos' }, 
      desc: { en: 'Metabolism boosters for fat loss support.', es: 'Aceleradores del metabolismo para apoyar la pérdida de grasa.', br: 'Aceleradores de metabolismo para auxiliar na perda de gordura.' } 
    },
    { id: { en: 'collagen', es: 'colageno', br: 'colageno' }, 
      name: { en: 'Collagen', es: 'Colágeno', br: 'Colágeno' }, 
      desc: { en: 'Protein for joint, skin, and connective tissue health.', es: 'Proteína para la salud de las articulaciones, la piel y los tejidos conectivos.', br: 'Proteína para a saúde das articulações, pele e tecidos conectivos.' } 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{t.common.supplements}</h1>
        <p className="text-zinc-500 max-w-2xl">
          {lang === 'en' ? 'Evidence-based guides on the most effective supplements to complement your training and nutrition.' : 
           lang === 'es' ? 'Guías basadas en evidencia sobre los suplementos más efectivos para complementar tu entrenamiento y nutrición.' : 
           'Guias baseados em evidências sobre os suplementos mais eficazes para complementar seu treinamento e nutrição.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {supplements.map((supp, index) => (
          <Link 
            key={index} 
            to={`/${lang}/supplements/${supp.id[lang as Language] || supp.id.en}`}
            className="group bg-zinc-50 border border-zinc-100 p-8 rounded-3xl hover:bg-white hover:border-black transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                <Pill className="h-6 w-6" />
              </div>
              <ShieldCheck className="h-5 w-5 text-emerald-500 opacity-50" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{supp.name[lang as Language] || supp.name.en}</h3>
            <p className="text-zinc-500 text-sm mb-6">{supp.desc[lang as Language] || supp.desc.en}</p>
            <div className="flex items-center text-xs font-black uppercase tracking-widest gap-1">
              {lang === 'en' ? 'Read Guide' : lang === 'es' ? 'Leer Guía' : 'Ler Guia'} <ChevronRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          "https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800"
        ].map((url, idx) => (
          <div key={idx} className="group relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-black/5">
            <img 
              src={url} 
              alt="Supplement Gallery" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/supp-${idx}/800/1000`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
