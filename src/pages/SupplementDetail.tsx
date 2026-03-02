import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { HealthDisclaimer } from '../components/HealthDisclaimer';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';
import { Language, translations } from '../constants';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { ArticleLayout, AdSlot } from '../components/Article/ArticleLayout';
import { KeyTakeaways, TableOfContents, ProsCons } from '../components/Article/ArticleComponents';

// Mock content fetcher
import { getSupplementContent } from '../content/supplements';

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

export const SupplementDetail = () => {
  const { lang = 'en', id } = useParams<{ lang: Language; id: string }>();
  const t = translations[lang as Language] || translations.en;
  const content = getSupplementContent(lang as Language, id || '');

  if (!content) {
    return <div className="container py-20 text-center">Content not found.</div>;
  }

  const tocItems = [
    { id: 'overview', text: lang === 'en' ? 'Overview' : lang === 'es' ? 'Resumen' : 'Visão Geral' },
    { id: 'products', text: lang === 'en' ? 'Products' : lang === 'es' ? 'Productos' : 'Produtos' },
    { id: 'faq', text: lang === 'en' ? 'FAQ' : lang === 'es' ? 'Preguntas Frecuentes' : 'Perguntas Frequentes' },
  ];

  const takeaways = lang === 'en' ? [
    "Supplements are meant to complement, not replace, a solid diet.",
    "Look for third-party testing (NSF, Informed Choice) for quality assurance.",
    "Timing matters for some supplements, while others just need daily consistency.",
    "Consult with a healthcare professional before starting any new regimen."
  ] : lang === 'es' ? [
    "Los suplementos están destinados a complementar, no a reemplazar, una dieta sólida.",
    "Busca pruebas de terceros (NSF, Informed Choice) para asegurar la calidad.",
    "El momento importa para algunos suplementos, mientras que otros solo necesitan consistencia diaria.",
    "Consulta con un profesional de la salud antes de comenzar cualquier régimen nuevo."
  ] : [
    "Os suplementos destinam-se a complementar, não a substituir, uma dieta sólida.",
    "Procure por testes de terceiros (NSF, Informed Choice) para garantia de qualidade.",
    "O tempo importa para alguns suplementos, enquanto outros apenas precisam de consistência diária.",
    "Consulte um profissional de saúde antes de iniciar qualquer novo regime."
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
          <Link to={`/${lang}/supplements`} className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t.common.backToSupplements}
          </Link>
        </div>
      </div>

      <ArticleLayout
        title={content.title}
        subtitle={content.excerpt}
        meta={{
          date: "March 2, 2026",
          readingTime: "7",
          category: "Supplements",
          author: "Science Team"
        }}
        sidebar={{
          popularGuides: [
            { title: lang === 'en' ? 'Whey Protein vs Casein' : lang === 'es' ? 'Proteína de Suero vs Caseína' : 'Whey Protein vs Caseína', href: `/${lang}/blog/whey-vs-casein` },
            { title: lang === 'en' ? 'Pre-Workout Guide' : lang === 'es' ? 'Guía de Pre-Entrenamiento' : 'Guia de Pré-Treino', href: `/${lang}/blog/pre-workout-guide` },
            { title: lang === 'en' ? 'Best Multivitamins' : lang === 'es' ? 'Mejores Multivitamínicos' : 'Melhores Multivitamínicos', href: `/${lang}/blog/best-multivitamins` },
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
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/supp-hero-${id}/1200/800`;
              }}
            />
          </div>

          <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl mb-12 flex items-center gap-4">
            <ShieldCheck className="h-8 w-8 text-emerald-500 flex-shrink-0" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              <strong className="text-black uppercase">{t.common.affiliateDisclosureTitle}:</strong> {t.common.affiliateDisclosureDesc}
            </p>
          </div>

          <HealthDisclaimer />
          
          <TableOfContents items={tocItems} />

          <KeyTakeaways items={takeaways} />

          <div className="article-content">
            <Markdown components={MarkdownComponents}>{content.body}</Markdown>
          </div>
        </div>

        <AdSlot />

        <div id="products">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 mb-8">
            {content.products.map((product: any, idx: number) => (
              <div key={idx} className="group relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-black/5">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx + 10}/800/1000`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-bold tracking-tight text-lg uppercase italic">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="article-content mt-12">
            <Markdown components={MarkdownComponents}>{content.bodyPart2}</Markdown>
          </div>
        </div>

        <div id="faq">
          <FAQSection items={content.faqs} />
        </div>
      </ArticleLayout>
    </>
  );
};
