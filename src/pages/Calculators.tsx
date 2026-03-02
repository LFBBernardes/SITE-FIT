import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Language, translations } from '../constants';
import { Calculator, Info, ShieldAlert } from 'lucide-react';
import { HealthDisclaimer } from '../components/HealthDisclaimer';
import { FAQSection } from '../components/FAQSection';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { SEO } from '../components/SEO';

export const Calculators = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  // BMI State
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);
    setBmi(Number(result.toFixed(1)));
  };

  const getBMICategory = (val: number) => {
    if (val < 18.5) return lang === 'en' ? 'Underweight' : lang === 'es' ? 'Bajo peso' : 'Abaixo do peso';
    if (val < 25) return lang === 'en' ? 'Normal' : lang === 'es' ? 'Normal' : 'Normal';
    if (val < 30) return lang === 'en' ? 'Overweight' : lang === 'es' ? 'Sobrepeso' : 'Sobrepeso';
    return lang === 'en' ? 'Obese' : lang === 'es' ? 'Obeso' : 'Obeso';
  };

  const faqs = [
    { 
      question: lang === 'en' ? "How accurate is BMI?" : lang === 'es' ? "¿Qué tan preciso es el IMC?" : "Quão preciso é o IMC?", 
      answer: lang === 'en' ? "BMI is a general screening tool. It does not distinguish between muscle mass and body fat, so athletes may have a high BMI despite low body fat." : 
              lang === 'es' ? "El IMC es una herramienta de detección general. No distingue entre masa muscular y grasa corporal, por lo que los atletas pueden tener un IMC alto a pesar de tener poca grasa corporal." : 
              "O IMC é uma ferramenta de triagem geral. Ele não distingue entre massa muscular e gordura corporal, portanto, atletas podem ter um IMC alto apesar da baixa gordura corporal." 
    },
    { 
      question: lang === 'en' ? "What is BMR?" : lang === 'es' ? "¿Qué es la TMB?" : "O que é a TMB?", 
      answer: lang === 'en' ? "Basal Metabolic Rate is the number of calories your body needs to function at rest, including breathing and circulation." : 
              lang === 'es' ? "La Tasa Metabólica Basal es el número de calorías que tu cuerpo necesita para funcionar en reposo, incluyendo la respiración y la circulación." : 
              "A Taxa Metabólica Basal é o número de calorias que seu corpo precisa para funcionar em repouso, incluindo respiração e circulação." 
    },
    { 
      question: lang === 'en' ? "How many calories should I eat to lose weight?" : lang === 'es' ? "¿Cuántas calorías debo comer para perder peso?" : "Quantas calorias devo comer para perder peso?", 
      answer: lang === 'en' ? "A safe deficit is typically 300-500 calories below your Total Daily Energy Expenditure (TDEE)." : 
              lang === 'es' ? "Un déficit seguro es típicamente de 300 a 500 calorías por debajo de tu Gasto Energético Diario Total (GEDT)." : 
              "Um déficit seguro é tipicamente de 300 a 500 calorias abaixo do seu Gasto Energético Diário Total (GEDT)." 
    },
    { 
      question: lang === 'en' ? "What is the ideal macro split?" : lang === 'es' ? "¿Cuál es la división de macros ideal?" : "Qual é a divisão de macros ideal?", 
      answer: lang === 'en' ? "A common starting point is 40% carbs, 30% protein, and 30% fats, but this varies based on goals." : 
              lang === 'es' ? "Un punto de partida común es 40% de carbohidratos, 30% de proteínas y 30% de grasas, pero esto varía según los objetivos." : 
              "Um ponto de partida comum é 40% de carboidratos, 30% de proteína e 30% de gorduras, mas isso varia de acordo com os objetivos." 
    },
    { 
      question: lang === 'en' ? "How often should I recalculate my macros?" : lang === 'es' ? "¿Con qué frecuencia debo recalcular mis macros?" : "Com que frequência devo recalcular meus macros?", 
      answer: lang === 'en' ? "Every 2-4 weeks or after a significant change in body weight (e.g., +/- 2-3kg)." : 
              lang === 'es' ? "Cada 2-4 semanas o después de un cambio significativo en el peso corporal (por ejemplo, +/- 2-3 kg)." : 
              "A cada 2-4 semanas ou após uma mudança significativa no peso corporal (por exemplo, +/- 2-3 kg)." 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={t.common.calculators} 
        description={lang === 'en' ? "Precise fitness calculators for BMI, BMR, Macros, and Daily Caloric Intake." : lang === 'es' ? "Calculadoras de fitness precisas para IMC, TMB, Macros e Ingesta Calórica Diaria." : "Calculadoras de fitness precisas para IMC, TMB, Macros e Ingestão Calórica Diária."} 
        lang={lang} 
      />

      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{t.common.calculators}</h1>
        <p className="text-zinc-500 max-w-2xl">
          {lang === 'en' ? 'Precise tools to track your progress and optimize your nutrition and training. Use our science-backed calculators to establish your baseline and reach your goals faster.' : 
           lang === 'es' ? 'Herramientas precisas para seguir tu progreso y optimizar tu nutrición y entrenamiento. Usa nuestras calculadoras respaldadas por la ciencia para establecer tu base y alcanzar tus objetivos más rápido.' : 
           'Ferramentas precisas para acompanhar seu progresso e otimizar sua nutrição e treinamento. Use nossas calculadoras baseadas na ciência para estabelecer sua base e atingir seus objetivos mais rápido.'}
        </p>
      </div>

      <AdPlaceholder className="mb-12" slot="Top Banner" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* BMI Calculator */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm h-fit">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
              <Calculator className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">{t.calculators.bmi}</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">{lang === 'en' ? 'Weight (kg)' : lang === 'es' ? 'Peso (kg)' : 'Peso (kg)'}</label>
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">{lang === 'en' ? 'Height (cm)' : lang === 'es' ? 'Altura (cm)' : 'Altura (cm)'}</label>
              <input 
                type="number" 
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <button 
              onClick={calculateBMI}
              className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-colors"
            >
              {lang === 'en' ? 'Calculate' : lang === 'es' ? 'Calcular' : 'Calcular'}
            </button>

            {bmi && (
              <div className="mt-8 p-6 bg-zinc-50 rounded-2xl text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-400 block mb-1">{lang === 'en' ? 'Your BMI' : lang === 'es' ? 'Tu IMC' : 'Seu IMC'}</span>
                <span className="text-5xl font-black italic">{bmi}</span>
                <span className={cn(
                  "block mt-2 font-bold",
                  getBMICategory(bmi) === (lang === 'en' ? 'Normal' : 'Normal') ? 'text-emerald-500' : 'text-orange-500'
                )}>
                  {lang === 'en' ? 'Category' : lang === 'es' ? 'Categoría' : 'Categoria'}: {getBMICategory(bmi)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="bg-zinc-900 text-white p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-emerald-400" />
              {lang === 'en' ? 'Why use calculators?' : lang === 'es' ? '¿Por qué usar calculadoras?' : 'Por que usar calculadoras?'}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {lang === 'en' ? 'Fitness is a game of numbers. Knowing your baseline metrics like BMI, BMR, and body fat percentage allows you to set realistic goals and adjust your caloric intake with precision.' : 
               lang === 'es' ? 'El fitness es un juego de números. Conocer tus métricas base como el IMC, la TMB y el porcentaje de grasa corporal te permite establecer objetivos realistas y ajustar tu ingesta calórica con precisión.' : 
               'Fitness é um jogo de números. Conhecer suas métricas básicas como IMC, TMB e porcentagem de gordura corporal permite que você defina metas realistas e ajuste sua ingestão calórica com precisão.'}
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2">• {lang === 'en' ? 'Track body composition changes' : lang === 'es' ? 'Seguir cambios en la composición corporal' : 'Acompanhar mudanças na composição corporal'}</li>
              <li className="flex items-center gap-2">• {lang === 'en' ? 'Optimize daily caloric intake' : lang === 'es' ? 'Optimizar la ingesta calórica diaria' : 'Otimizar a ingestão calórica diária'}</li>
              <li className="flex items-center gap-2">• {lang === 'en' ? 'Monitor health risks' : lang === 'es' ? 'Monitorear riesgos de salud' : 'Monitorar riscos de saúde'}</li>
            </ul>
          </div>

          <div className="prose prose-zinc prose-sm">
            <h3 className="text-xl font-bold uppercase italic tracking-tighter">{lang === 'en' ? 'Understanding Your Metrics' : lang === 'es' ? 'Entendiendo tus Métricas' : 'Entendendo suas Métricas'}</h3>
            <p>
              {lang === 'en' ? 'While calculators provide a great starting point, they are estimates. Your actual energy expenditure can be influenced by genetics, gut microbiome, and non-exercise activity thermogenesis (NEAT). Use these numbers as a guide, but always listen to your body and adjust based on real-world progress.' : 
               lang === 'es' ? 'Si bien las calculadoras proporcionan un excelente punto de partida, son estimaciones. Tu gasto energético real puede verse influenciado por la genética, el microbioma intestinal y la termogénesis de actividad no relacionada con el ejercicio (NEAT). Usa estos números como guía, pero siempre escucha a tu cuerpo y ajústalos según el progreso en el mundo real.' : 
               'Embora as calculadoras forneçam um ótimo ponto de partida, elas são estimativas. Seu gasto energético real pode ser influenciado pela genética, microbioma intestinal e termogênese de atividades não ligadas ao exercício (NEAT). Use esses números como um guia, mas sempre ouça seu corpo e ajuste com base no progresso do mundo real.'}
            </p>
          </div>

          <HealthDisclaimer />
        </div>
      </div>

      <FAQSection items={faqs} />
    </div>
  );
};

import { cn } from '../utils/cn';
