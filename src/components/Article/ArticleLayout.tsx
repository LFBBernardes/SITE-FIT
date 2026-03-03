import React from 'react';
import { Clock, Calendar, User, Share2, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Language, translations } from '../../constants';
import { cn } from '../../utils/cn';

interface ArticleMetaProps {
  date: string;
  readingTime: string;
  category: string;
  author?: string;
}

export const ArticleMeta = ({ date, readingTime, category, author = "Editorial Team" }: ArticleMetaProps) => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  return (
    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-8 border-b border-zinc-100 pb-6">
      <div className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        <span>{readingTime} {lang === 'en' ? 'min read' : lang === 'es' ? 'min de lectura' : 'min de leitura'}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <User className="h-3.5 w-3.5" />
        <span>{author}</span>
      </div>
      <div className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">
        {category}
      </div>
    </div>
  );
};

export const ShareButtons = () => {
  return (
    <div className="flex items-center gap-2 mt-12 pt-8 border-t border-zinc-100">
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mr-2">Share:</span>
      {[Share2].map((Icon, i) => (
        <button key={i} className="p-2 rounded-full bg-zinc-50 text-zinc-600 hover:bg-emerald-500 hover:text-white transition-all">
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
};

export const AdSlot = ({ label = "Advertisement", className, id }: { label?: string; className?: string; id?: string }) => {
  return (
    <div id={id} className={cn("my-12 flex flex-col items-center", className)}>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3">{label}</span>
      <div className="w-full h-[250px] bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-300 font-mono text-xs italic">
        Ad Placement
      </div>
    </div>
  );
};

export const NewsletterBox = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  return (
    <div className="bg-zinc-900 text-white p-8 rounded-2xl overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-emerald-500/20 transition-all" />
      <h3 className="text-xl font-bold mb-2 relative z-10">
        {lang === 'en' ? 'Join the Elite' : lang === 'es' ? 'Únete a la Élite' : 'Junte-se à Elite'}
      </h3>
      <p className="text-zinc-400 text-sm mb-6 relative z-10">
        {lang === 'en' ? 'Get science-backed training tips delivered weekly.' : 
         lang === 'es' ? 'Recibe consejos de entrenamiento basados en la ciencia semanalmente.' : 
         'Receba dicas de treinamento baseadas em ciência semanalmente.'}
      </p>
      <div className="space-y-3 relative z-10">
        <input 
          type="email" 
          placeholder="email@example.com" 
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
        />
        <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-wider">
          {lang === 'en' ? 'Subscribe' : lang === 'es' ? 'Suscribirse' : 'Inscrever-se'}
        </button>
      </div>
    </div>
  );
};

export const Sidebar = ({ popularGuides }: { popularGuides?: { title: string; href: string }[] }) => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  return (
    <aside className="space-y-12 sticky top-24">
      <NewsletterBox />
      
      {popularGuides && (
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-zinc-200" />
            {lang === 'en' ? 'Popular Guides' : lang === 'es' ? 'Guías Populares' : 'Guias Populares'}
          </h4>
          <div className="space-y-4">
            {popularGuides.map((guide, i) => (
              <a key={i} href={guide.href} className="group block">
                <h5 className="text-sm font-bold group-hover:text-emerald-600 transition-colors leading-snug">
                  {guide.title}
                </h5>
                <div className="flex items-center text-[10px] text-zinc-400 uppercase mt-1">
                  <span>Read More</span>
                  <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <AdSlot label="Sponsored" className="my-0" />
    </aside>
  );
};

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  meta: ArticleMetaProps;
  sidebar?: {
    popularGuides: { title: string; href: string }[];
  };
}

export const ArticleLayout = ({ children, title, subtitle, meta, sidebar }: ArticleLayoutProps) => {
  return (
    <div className="bg-[#fafafa] min-h-screen pt-12 pb-24">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <main className="lg:col-span-8">
            <article className="bg-white rounded-3xl shadow-sm border border-zinc-100 p-6 md:p-12 lg:p-16">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111] leading-[1.1] mb-6">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-8">
                    {subtitle}
                  </p>
                )}
                <ArticleMeta {...meta} />
              </header>

              <div className="article-content max-w-[720px] mx-auto">
                {children}
                <ShareButtons />
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar popularGuides={sidebar?.popularGuides} />
          </div>
        </div>
      </div>
    </div>
  );
};
