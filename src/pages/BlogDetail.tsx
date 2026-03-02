import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { HealthDisclaimer } from '../components/HealthDisclaimer';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';
import { Language, translations } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { ArticleLayout, AdSlot } from '../components/Article/ArticleLayout';
import { KeyTakeaways, TableOfContents } from '../components/Article/ArticleComponents';

// Mock content fetcher
import { getBlogContent } from '../content/blog';

import { slugify } from '../utils/slugify';

const MarkdownComponents = {
  h2: ({ children, ...props }: any) => {
    const id = slugify(children.toString());
    return <h2 id={id} className="group" {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }: any) => {
    const id = slugify(children.toString());
    return <h3 id={id} className="group" {...props}>{children}</h3>;
  }
};

export const BlogDetail = () => {
  const { lang = 'en', id } = useParams<{ lang: Language; id: string }>();
  const t = translations[lang as Language] || translations.en;
  const content = getBlogContent(lang as Language, id || '');

  if (!content) {
    return <div className="container py-20 text-center">Content not found.</div>;
  }

  const tocItems = [
    { id: 'overview', text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Resumen' : 'Visão Geral' },
    { id: 'content', text: lang === 'en' ? 'Deep Dive' : lang === 'es' ? 'Análisis Profundo' : 'Análise Profunda' },
    { id: 'faq', text: lang === 'en' ? 'FAQ' : lang === 'es' ? 'Preguntas Frecuentes' : 'Perguntas Frequentes' },
  ];

  const takeaways = lang === 'en' ? [
    "Consistency is the most important factor in long-term success.",
    "Small, sustainable changes lead to permanent results.",
    "Focus on performance metrics rather than just the scale.",
    "Recovery is just as important as the training itself."
  ] : lang === 'es' ? [
    "La consistencia es el factor más importante para el éxito a largo plazo.",
    "Los cambios pequeños y sostenibles conducen a resultados permanentes.",
    "Céntrate en las métricas de rendimiento en lugar de solo en la báscula.",
    "La recuperación es tan importante como el entrenamiento en sí."
  ] : [
    "A consistência é o fator mais importante para o sucesso a longo prazo.",
    "Pequenas mudanças sustentáveis levam a resultados permanentes.",
    "Concentre-se em métricas de desempenho em vez de apenas na balança.",
    "A recuperação é tão importante quanto o próprio treinamento."
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
          <Link to={`/${lang}/blog`} className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t.common.backToBlog}
          </Link>
        </div>
      </div>

      <ArticleLayout
        title={content.title}
        subtitle={content.excerpt}
        meta={{
          date: content.date,
          readingTime: content.readTime.split(' ')[0],
          category: content.category,
          author: content.author
        }}
        sidebar={{
          popularGuides: [
            { title: lang === 'en' ? 'Best Diet for Muscle Gain' : lang === 'es' ? 'Mejor Dieta para Ganar Músculo' : 'Melhor Dieta para Ganho de Massa', href: `/${lang}/diet-plans/bulking` },
            { title: lang === 'en' ? 'Creatine Guide' : lang === 'es' ? 'Guía de Creatina' : 'Guia de Creatina', href: `/${lang}/supplements/creatine` },
            { title: lang === 'en' ? 'Full Body Workout' : lang === 'es' ? 'Entrenamiento de Cuerpo Completo' : 'Treino de Corpo Inteiro', href: `/${lang}/workouts/full-body` },
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
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/blog-hero-${id}/1200/800`;
              }}
            />
          </div>

          <HealthDisclaimer />
          
          <TableOfContents items={tocItems} />

          <KeyTakeaways items={takeaways} />

          <div className="article-content">
            <Markdown components={MarkdownComponents}>{content.body}</Markdown>
          </div>
        </div>

        <AdSlot />

        <div id="content" className="article-content">
          <Markdown components={MarkdownComponents}>{content.bodyPart2}</Markdown>
        </div>

        <div id="faq">
          <FAQSection items={content.faqs} />
        </div>
      </ArticleLayout>
    </>
  );
};
