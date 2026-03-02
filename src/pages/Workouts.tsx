import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language, translations } from '../constants';
import { Dumbbell, ChevronRight } from 'lucide-react';

export const Workouts = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  const bodyParts = [
    { id: 'chest', name: { en: 'Chest', es: 'Pecho', br: 'Peito' } },
    { id: 'back', name: { en: 'Back', es: 'Espalda', br: 'Costas' } },
    { id: 'shoulders', name: { en: 'Shoulders', es: 'Hombros', br: 'Ombros' } },
    { id: 'biceps', name: { en: 'Biceps', es: 'Bíceps', br: 'Bíceps' } },
    { id: 'triceps', name: { en: 'Triceps', es: 'Tríceps', br: 'Tríceps' } },
    { id: 'legs', name: { en: 'Legs', es: 'Piernas', br: 'Pernas' } },
    { id: 'glutes', name: { en: 'Glutes', es: 'Glúteos', br: 'Glúteos' } },
    { id: 'abs', name: { en: 'Abs', es: 'Abdominales', br: 'Abdômen' } },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{t.common.workouts}</h1>
        <p className="text-zinc-500 max-w-2xl">
          {lang === 'en' ? 'Comprehensive exercise guides and workout routines designed for all levels. Select a muscle group to begin your training.' : 
           lang === 'es' ? 'Guías de ejercicios completas y rutinas de entrenamiento diseñadas para todos los niveles. Selecciona un grupo muscular para comenzar tu entrenamiento.' : 
           'Guias de exercícios abrangentes e rotinas de treino projetadas para todos os níveis. Selecione um grupo muscular para começar seu treinamento.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bodyParts.map((part) => (
          <Link 
            key={part.id} 
            to={`/${lang}/workouts/${part.id}`}
            className="group bg-white border border-zinc-200 p-6 rounded-2xl hover:border-black transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="bg-zinc-100 p-3 rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
                <Dumbbell className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">{part.name[lang as Language] || part.name.en}</span>
            </div>
            <ChevronRight className="h-5 w-5 opacity-30 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-zinc-900 text-white p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Home Workouts' : lang === 'es' ? 'Entrenamientos en Casa' : 'Treinos em Casa'}</h3>
          <p className="text-zinc-400 mb-6 text-sm">{lang === 'en' ? 'No gym? No problem. Effective bodyweight routines you can do anywhere.' : lang === 'es' ? '¿Sin gimnasio? No hay problema. Rutinas efectivas con peso corporal que puedes hacer en cualquier lugar.' : 'Sem academia? Sem problemas. Rotinas eficazes com peso corporal que você pode fazer em qualquer lugar.'}</p>
          <Link to={`/${lang}/workouts/home-workouts`} className="text-emerald-400 font-bold flex items-center gap-2">{lang === 'en' ? 'Explore' : lang === 'es' ? 'Explorar' : 'Explorar'} <ChevronRight className="h-4 w-4" /></Link>
        </div>
        <div className="bg-zinc-100 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Beginner Plans' : lang === 'es' ? 'Planes para Principiantes' : 'Planos para Iniciantes'}</h3>
          <p className="text-zinc-500 mb-6 text-sm">{lang === 'en' ? 'Start your journey with structured, safe, and effective introductory routines.' : lang === 'es' ? 'Comienza tu viaje con rutinas introductorias estructuradas, seguras y efectivas.' : 'Comece sua jornada com rotinas introdutórias estruturadas, seguras e eficazes.'}</p>
          <Link to={`/${lang}/workouts/beginner`} className="text-black font-bold flex items-center gap-2">{lang === 'en' ? 'Explore' : lang === 'es' ? 'Explorar' : 'Explorar'} <ChevronRight className="h-4 w-4" /></Link>
        </div>
        <div className="bg-zinc-100 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Advanced Training' : lang === 'es' ? 'Entrenamiento Avanzado' : 'Treinamento Avançado'}</h3>
          <p className="text-zinc-500 mb-6 text-sm">{lang === 'en' ? 'Push your limits with high-intensity volume and specialized techniques.' : lang === 'es' ? 'Supera tus límites con volumen de alta intensidad y técnicas especializadas.' : 'Supere seus limites com volume de alta intensidade e técnicas especializadas.'}</p>
          <Link to={`/${lang}/workouts/advanced`} className="text-black font-bold flex items-center gap-2">{lang === 'en' ? 'Explore' : lang === 'es' ? 'Explorar' : 'Explorar'} <ChevronRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  );
};
