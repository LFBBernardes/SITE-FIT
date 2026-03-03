import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language, translations } from '../constants';
import { Utensils, ChevronRight, Flame } from 'lucide-react';

export const DietPlans = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  const plans = {
    en: [
      { slug: '1200-calorie', kcal: 1200, type: 'Cutting', title: '1200 Calorie Plan' },
      { slug: '1500-calorie', kcal: 1500, type: 'Cutting', title: '1500 Calorie Plan' },
      { slug: '1800-calorie', kcal: 1800, type: 'Maintenance', title: '1800 Calorie Plan' },
      { slug: '2000-calorie', kcal: 2000, type: 'Maintenance', title: '2000 Calorie Plan' },
      { slug: '2500-calorie', kcal: 2500, type: 'Bulking', title: '2500 Calorie Plan' },
      { slug: 'cutting', kcal: 1600, type: 'Cutting', title: 'Extreme Cutting' },
      { slug: 'bulking', kcal: 3200, type: 'Bulking', title: 'Massive Bulking' },
      { slug: 'low-carb', kcal: 1800, type: 'Keto/Low Carb', title: 'Low Carb Strategy' },
      { slug: 'muscle-gain', kcal: 2800, type: 'Muscle Gain', title: 'Hypertrophy Plan' },
    ],
    es: [
      { slug: '1200-calorias', kcal: 1200, type: 'Definición', title: 'Plan 1200 Calorías' },
      { slug: '1500-calorias', kcal: 1500, type: 'Definición', title: 'Plan 1500 Calorías' },
      { slug: '1800-calorias', kcal: 1800, type: 'Mantenimiento', title: 'Plan 1800 Calorías' },
      { slug: '2000-calorias', kcal: 2000, type: 'Mantenimiento', title: 'Plan 2000 Calorías' },
      { slug: '2500-calorias', kcal: 2500, type: 'Volumen', title: 'Plan 2500 Calorías' },
      { slug: 'definicion', kcal: 1600, type: 'Definición', title: 'Definición Extrema' },
      { slug: 'volumen', kcal: 3200, type: 'Volumen', title: 'Volumen Masivo' },
      { slug: 'bajo-en-carbohidratos', kcal: 1800, type: 'Keto/Bajo Carb', title: 'Estrategia Bajo Carb' },
      { slug: 'ganar-musculo', kcal: 2800, type: 'Ganar Músculo', title: 'Plan Hipertrofia' },
    ],
    br: [
      { slug: '1200-calorias', kcal: 1200, type: 'Cutting', title: 'Plano 1200 Calorias' },
      { slug: '1500-calorias', kcal: 1500, type: 'Cutting', title: 'Plano 1500 Calorias' },
      { slug: '1800-calorias', kcal: 1800, type: 'Manutenção', title: 'Plano 1800 Calorias' },
      { slug: '2000-calorias', kcal: 2000, type: 'Manutenção', title: 'Plano 2000 Calorias' },
      { slug: '2500-calorias', kcal: 2500, type: 'Bulking', title: 'Plano 2500 Calorias' },
      { slug: 'cutting', kcal: 1600, type: 'Cutting', title: 'Cutting Extremo' },
      { slug: 'bulking', kcal: 3200, type: 'Bulking', title: 'Bulking Massivo' },
      { slug: 'low-carb', kcal: 1800, type: 'Keto/Low Carb', title: 'Estratégia Low Carb' },
      { slug: 'ganho-de-massa', kcal: 2800, type: 'Ganho de Massa', title: 'Plano Hipertrofia' },
    ],
  };

  const currentPlans = plans[lang as Language] || plans.en;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{t.common.diet}</h1>
        <p className="text-zinc-500 max-w-2xl">
          {lang === 'en' ? 'Scientifically formulated meal plans to help you reach your goals, whether it\'s fat loss, muscle gain, or performance optimization.' : 
           lang === 'es' ? 'Planes de comidas formulados científicamente para ayudarte a alcanzar tus objetivos, ya sea pérdida de grasa, ganancia muscular u optimización del rendimiento.' : 
           'Planos alimentares formulados cientificamente para ajudar você a atingir seus objetivos, seja perda de gordura, ganho de massa ou otimização de performance.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPlans.map((plan) => (
          <Link 
            key={plan.slug} 
            to={`/${lang}/diet-plans/${plan.slug}`}
            className="group bg-white border border-zinc-200 rounded-3xl p-8 hover:border-black transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl">
                <Flame className="h-6 w-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">{plan.type}</span>
            </div>
            <h3 className="text-3xl font-black italic mb-2">{plan.title}</h3>
            <p className="text-sm text-zinc-500 mb-6">{lang === 'en' ? 'Complete daily meal plan with macro breakdown and food substitutions.' : lang === 'es' ? 'Plan de comidas diario completo con desglose de macros y sustituciones de alimentos.' : 'Plano alimentar diário completo com divisão de macros e substituições de alimentos.'}</p>
            <div className="flex items-center text-sm font-bold gap-1 group-hover:gap-2 transition-all">
              {lang === 'en' ? 'View Plan' : lang === 'es' ? 'Ver Plan' : 'Ver Plano'} <ChevronRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 bg-zinc-950 text-white rounded-[3rem] p-12 overflow-hidden relative">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-6">{lang === 'en' ? 'Custom Nutrition Strategy' : lang === 'es' ? 'Estrategia de Nutrición Personalizada' : 'Estratégia de Nutrição Personalizada'}</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            {lang === 'en' ? 'Every body is different. Our advanced algorithm can generate a personalized diet plan based on your age, weight, activity level, and specific fitness goals.' : 
             lang === 'es' ? 'Cada cuerpo es diferente. Nuestro algoritmo avanzado puede generar un plan de dieta personalizado basado en tu edad, peso, nivel de actividad y objetivos de fitness específicos.' : 
             'Cada corpo é diferente. Nosso algoritmo avançado pode gerar um plano de dieta personalizado com base na sua idade, peso, nível de atividade e objetivos específicos de fitness.'}
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-colors">
            {lang === 'en' ? 'Generate My Plan' : lang === 'es' ? 'Generar Mi Plan' : 'Gerar Meu Plano'}
          </button>
        </div>
        <Utensils className="absolute right-[-5%] bottom-[-10%] h-96 w-96 text-white/5 rotate-12" />
      </div>
    </div>
  );
};
