import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { HealthDisclaimer } from '../components/HealthDisclaimer';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';
import { Language, translations } from '../constants';
import { ArrowLeft, ChevronRight, Clock, Target, Zap, Dumbbell, Award } from 'lucide-react';
import { ArticleLayout, AdSlot } from '../components/Article/ArticleLayout';
import { KeyTakeaways, StatsBlock, TableOfContents } from '../components/Article/ArticleComponents';

// This would ideally be fetched from a CMS or JSON files
import { getWorkoutContent } from '../content/workouts';
import { slugify } from '../utils/slugify';

const MarkdownComponents = {
  h2: ({ children, ...props }: any) => {
    const id = slugify(children.toString());
    return <h2 id={id} className="group scroll-mt-24" {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }: any) => {
    const id = slugify(children.toString());
    return <h3 id={id} className="group scroll-mt-24" {...props}>{children}</h3>;
  }
};

export const WorkoutDetail = () => {
  const { lang = 'en', id } = useParams<{ lang: Language; id: string }>();
  const t = translations[lang as Language] || translations.en;
  const content = getWorkoutContent(lang as Language, id || '');

  if (!content) {
    return <div className="container py-20 text-center">Content not found.</div>;
  }

  const tocItems = [
    { id: 'overview', text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Resumen' : 'Visão Geral' },
    { id: 'workout-plan', text: lang === 'en' ? 'Workout Plan' : lang === 'es' ? 'Plan de Entrenamiento' : 'Plano de Treino' },
    { id: 'faq', text: lang === 'en' ? 'FAQ' : lang === 'es' ? 'Preguntas Frecuentes' : 'Perguntas Frequentes' },
  ];

  const stats = [
    { label: lang === 'en' ? 'Difficulty' : lang === 'es' ? 'Dificultad' : 'Dificuldade', value: content.intensity, icon: Zap },
    { label: lang === 'en' ? 'Duration' : lang === 'es' ? 'Duración' : 'Duração', value: content.duration, icon: Clock },
    { label: lang === 'en' ? 'Target' : lang === 'es' ? 'Objetivo' : 'Alvo', value: content.muscleGroup, icon: Target },
    { label: lang === 'en' ? 'Level' : lang === 'es' ? 'Nivel' : 'Nível', value: content.level, icon: Award },
  ];

  const takeaways = lang === 'en' ? [
    "Follow the prescribed rest periods for optimal recovery.",
    "Prioritize form over weight to prevent injury.",
    "Stay hydrated throughout the entire session.",
    "Log your progress to ensure progressive overload.",
    "Focus on the mind-muscle connection for every rep."
  ] : lang === 'es' ? [
    "Sigue los periodos de descanso prescritos para una recuperación óptima.",
    "Prioriza la técnica sobre el peso para prevenir lesiones.",
    "Mantente hidratado durante toda la sesión.",
    "Registra tu progreso para asegurar la sobrecarga progresiva.",
    "Concéntrate en la conexión mente-músculo en cada repetición."
  ] : [
    "Siga os períodos de descanso prescritos para uma recuperação ideal.",
    "Priorize a forma sobre o peso para evitar lesões.",
    "Mantenha-se hidratado durante toda a sessão.",
    "Registre seu progresso para garantir a sobrecarga progressiva.",
    "Concentre-se na conexão mente-músculo em cada repetição."
  ];

  return (
    <>
      <SEO 
        title={content.title} 
        description={content.excerpt} 
        lang={lang} 
      />
      
      <div className="bg-white border-b border-zinc-100 py-4">
        <div className="container px-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-4">
            <Link to={`/${lang}`} className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/${lang}/workouts`} className="hover:text-emerald-600 transition-colors">{t.common.workouts}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-zinc-900 truncate">{content.title}</span>
          </nav>

          <Link to={`/${lang}/workouts`} className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t.common.backToWorkouts}
          </Link>
        </div>
      </div>

      <ArticleLayout
        title={content.title}
        subtitle={content.excerpt}
        meta={{
          date: content.updatedAt,
          readingTime: "12",
          category: content.category,
          author: "Vigorate Editorial"
        }}
        sidebar={{
          popularGuides: [
            { title: lang === 'en' ? 'Best Diet for Muscle Gain' : lang === 'es' ? 'Mejor Dieta para Ganar Músculo' : 'Melhor Dieta para Ganho de Massa', href: `/${lang}/diet-plans/bulking` },
            { title: lang === 'en' ? 'Creatine Guide' : lang === 'es' ? 'Guía de Creatina' : 'Guia de Creatina', href: `/${lang}/supplements/creatine` },
            { title: lang === 'en' ? 'Fat Loss Secrets' : lang === 'es' ? 'Secretos de Pérdida de Grasa' : 'Segredos da Perda de Gordura', href: `/${lang}/blog/fat-loss-secrets` },
          ]
        }}
      >
        <div id="overview">
          <div className="aspect-video rounded-3xl overflow-hidden mb-12 bg-zinc-100 shadow-xl shadow-emerald-500/5">
            <img 
              src={content.heroImage} 
              alt={content.title} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/workout-${id}/1200/800`;
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-2 text-zinc-400 mb-1">
                  <stat.icon className="h-4 w-4" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">{stat.label}</span>
                </div>
                <div className="font-bold text-zinc-900">{stat.value}</div>
              </div>
            ))}
          </div>

          <HealthDisclaimer />
          
          <TableOfContents items={tocItems} />

          <KeyTakeaways items={takeaways} />

          <div className="article-content">
            <Markdown components={MarkdownComponents}>{content.body}</Markdown>
          </div>
        </div>

        <AdSlot />

        <div id="workout-plan">
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <Dumbbell className="h-6 w-6" /> {lang === 'en' ? 'Training Specifications' : lang === 'es' ? 'Especificaciones de Entrenamiento' : 'Especificações de Treino'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-600 mb-2">Equipment Needed</h4>
                <ul className="flex flex-wrap gap-2">
                  {content.equipment.map((item, i) => (
                    <li key={i} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-emerald-800 border border-emerald-200">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-600 mb-2">Primary Muscles</h4>
                <ul className="flex flex-wrap gap-2">
                  {content.primaryMuscles.map((item, i) => (
                    <li key={i} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-emerald-800 border border-emerald-200">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="article-content">
            <Markdown components={MarkdownComponents}>{content.bodyPart2}</Markdown>
          </div>
        </div>

        <div className="my-16 p-8 bg-zinc-900 rounded-3xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4 !text-white">Ready to Transform Your Physique?</h3>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Get our free 12-week transformation guide and weekly science-based tips delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500" />
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl transition-colors">Subscribe</button>
          </div>
        </div>

        <div id="faq">
          <FAQSection items={content.faqs} />
        </div>
      </ArticleLayout>
    </>
  );
};
