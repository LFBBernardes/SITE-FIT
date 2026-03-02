import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language, translations } from '../constants';
import { Utensils, ChevronRight, Flame } from 'lucide-react';

export const DietPlans = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  const plans = [
    { kcal: 1200, type: 'Cutting' },
    { kcal: 1500, type: 'Cutting' },
    { kcal: 1800, type: 'Maintenance' },
    { kcal: 2000, type: 'Maintenance' },
    { kcal: 2500, type: 'Bulking' },
    { kcal: 3000, type: 'Bulking' },
  ];

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
        {plans.map((plan) => (
          <Link 
            key={plan.kcal} 
            to={`/${lang}/diet-plans/${plan.kcal}`}
            className="group bg-white border border-zinc-200 rounded-3xl p-8 hover:border-black transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl">
                <Flame className="h-6 w-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">{plan.type}</span>
            </div>
            <h3 className="text-4xl font-black italic mb-2">{plan.kcal} <span className="text-lg not-italic font-bold text-zinc-400">kcal</span></h3>
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
