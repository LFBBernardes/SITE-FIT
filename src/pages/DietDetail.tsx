import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { HealthDisclaimer } from '../components/HealthDisclaimer';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';
import { Language, translations } from '../constants';
import { ArrowLeft, Utensils } from 'lucide-react';
import { ArticleLayout, AdSlot } from '../components/Article/ArticleLayout';
import { KeyTakeaways, StatsBlock, TableOfContents } from '../components/Article/ArticleComponents';
import { getLocalizedSlug } from '../utils/slugMapping';

// Mock content fetcher
import { getDietContent } from '../content/diet';

import { slugify } from '../utils/slugify';

const MarkdownComponents = {
  h2: ({ children, ...props }: any) => {
    const id = slugify(children.toString());
    return <h2 id={id} className="group" {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }: any) => {
    const id = slugify(children.toString());
    return <h3 id={id} className="group" {...props}>{children}</h3>;
  },
  adslot: ({ id }: any) => <AdSlot id={id} />
};

export const DietDetail = () => {
  const { lang = 'en', kcal: slug } = useParams<{ lang: Language; kcal: string }>();
  const t = translations[lang as Language] || translations.en;
  const content = getDietContent(lang as Language, slug || '');
  const backText = t.common.backToDiet;
  const backLink = `/${lang}/diet-plans`;

  if (!content) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black mb-4">404</h1>
        <p className="text-zinc-500 mb-8">Diet plan not found.</p>
        <Link to={backLink} className="text-emerald-600 font-bold flex items-center justify-center gap-2">
          <ArrowLeft className="h-4 w-4" /> {backText}
        </Link>
      </div>
    );
  }

  const tocItems = [
    { id: 'overview', text: t.common.overview },
    { id: 'meal-plan', text: t.common.mealPlan },
    { id: 'faq', text: t.common.faqTitle },
  ];

  const stats = [
    { label: t.common.protein, value: `${content.macros.protein}g` },
    { label: t.common.carbs, value: `${content.macros.carbs}g` },
    { label: t.common.fats, value: `${content.macros.fats}g` },
  ];

  const takeaways = lang === 'en' ? [
    "Prioritize whole, unprocessed foods for 80% of your intake.",
    "Hit your daily protein target to preserve muscle mass.",
    "Adjust calorie intake based on your weekly weight trends.",
    "Consistency is more important than perfection."
  ] : lang === 'es' ? [
    "Prioriza alimentos integrales y no procesados para el 80% de tu ingesta.",
    "Alcanza tu objetivo diario de proteínas para preservar la masa muscular.",
    "Ajusta la ingesta de calorías según tus tendencias de peso semanales.",
    "La consistencia es más importante que la perfección."
  ] : [
    "Priorize alimentos integrais e não processados para 80% de sua ingestão.",
    "Atinge sua meta diária de proteína para preservar a massa muscular.",
    "Ajuste a ingestão de calorias com base em suas tendências semanais de peso.",
    "A consistência é mais importante que a perfeição."
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
          <Link to={`/${lang}/diet-plans`} className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t.common.backToDiet}
          </Link>
        </div>
      </div>

      <ArticleLayout
        title={content.title}
        subtitle={content.excerpt}
        meta={{
          date: "March 2, 2026",
          readingTime: "10",
          category: content.goal,
          author: "Nutrition Team"
        }}
        sidebar={{
          popularGuides: [
            { title: lang === 'en' ? 'Best Supplements for Fat Loss' : lang === 'es' ? 'Mejores Suplementos para Perder Grasa' : 'Melhores Suplementos para Perda de Gordura', href: `/${lang}/supplements/${getLocalizedSlug('supplements', lang as Language, 'fat-burners')}` },
            { title: lang === 'en' ? 'Full Body Workout' : lang === 'es' ? 'Entrenamiento de Cuerpo Completo' : 'Treino de Corpo Inteiro', href: `/${lang}/workouts/${getLocalizedSlug('workouts', lang as Language, 'full-body')}` },
            { title: lang === 'en' ? 'Intermittent Fasting Guide' : lang === 'es' ? 'Guía de Ayuno Intermitente' : 'Guia de Jejum Intermitente', href: `/${lang}/blog/2` },
          ]
        }}
      >
        <div id="overview">
          <div className="aspect-video rounded-3xl overflow-hidden mb-12 bg-zinc-100 shadow-xl shadow-emerald-500/5">
            <img 
              src={content.coverImage} 
              alt={content.title} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/diet-${slug}/1200/800`;
              }}
            />
          </div>

          <HealthDisclaimer />
          
          <TableOfContents items={tocItems} />

          <KeyTakeaways items={takeaways} />

          <div className="article-content">
            <Markdown components={MarkdownComponents} rehypePlugins={[rehypeRaw]}>{content.body}</Markdown>
          </div>
        </div>

        <AdSlot />

        <div id="meal-plan">
          <StatsBlock stats={stats} />

          <div className="my-12 bg-zinc-900 text-white p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-8 flex items-center gap-3 !text-white">
              <Utensils className="h-8 w-8 text-emerald-400" />
              {t.common.sampleMealPlan}
            </h2>
            <div className="space-y-10">
              {content.meals.map((meal: any, idx: number) => (
                <div key={idx} className="border-b border-white/10 pb-8 last:border-0">
                  <h3 className="!text-emerald-400 font-black uppercase tracking-[0.2em] text-xs mb-3">{meal.name}</h3>
                  <p className="text-2xl font-black text-white mb-4 tracking-tight">{meal.title}</p>
                  <ul className="text-zinc-300 text-base space-y-2 list-none p-0 before:hidden">
                    {meal.items.map((item: string, i: number) => (
                      <li key={i} className="pl-0 before:hidden flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="article-content">
            <Markdown components={MarkdownComponents} rehypePlugins={[rehypeRaw]}>{content.bodyPart2}</Markdown>
          </div>
        </div>

        <div id="faq">
          <FAQSection items={content.faqs} />
        </div>
      </ArticleLayout>
    </>
  );
};
