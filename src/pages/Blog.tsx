import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language, translations } from '../constants';
import { Search, Clock, User } from 'lucide-react';

export const Blog = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  const posts = [
    {
      id: 1,
      title: { en: 'How Long Does it Actually Take to Build Muscle?', es: '¿Cuánto tiempo se tarda realmente en ganar músculo?', br: 'Quanto tempo leva realmente para ganhar músculo?' },
      excerpt: { en: 'The science behind hypertrophy and what you can realistically expect in 12 weeks.', es: 'La ciencia detrás de la hipertrofia y lo que puedes esperar de manera realista en 12 semanas.', br: 'A ciência por trás da hipertrofia e o que você pode esperar realisticamente em 12 semanas.' },
      category: { en: 'Training', es: 'Entrenamiento', br: 'Treinamento' },
      author: 'Dr. Mike Jensen',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: { en: 'The Truth About Protein: How Much Do You Really Need?', es: 'La verdad sobre la proteína: ¿Cuánta necesitas realmente?', br: 'A verdade sobre a proteína: quanto você realmente precisa?' },
      excerpt: { en: 'Breaking down the 1g per lb rule and looking at recent meta-analyses.', es: 'Desglosando la regla de 1g por libra y analizando meta-análisis recientes.', br: 'Analisando a regra de 1g por libra e olhando para meta-análises recentes.' },
      category: { en: 'Nutrition', es: 'Nutrición', br: 'Nutrição' },
      author: 'Sarah Collins',
      date: 'Mar 08, 2024',
      image: 'https://images.unsplash.com/photo-1529566652340-2c41a2c3581b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: { en: 'Creatine Myths Debunked: Hair Loss, Bloating, and Kidney Health', es: 'Mitos de la Creatina Desmentidos: Pérdida de Cabello, Hinchazón y Salud Renal', br: 'Mitos da Creatina Desmentidos: Queda de Cabelo, Inchaço e Saúde Renal' },
      excerpt: { en: 'Separating bro-science from peer-reviewed research on the worlds most popular supplement.', es: 'Separando la "bro-science" de la investigación revisada por pares sobre el suplemento más popular del mundo.', br: 'Separando a "bro-science" da pesquisa revisada por pares sobre o suplemento mais popular do mundo.' },
      category: { en: 'Supplements', es: 'Suplementos', br: 'Suplementos' },
      author: 'Alex Rivera',
      date: 'Mar 05, 2024',
      image: 'https://images.unsplash.com/photo-1593095194472-50971212eef7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{t.common.blog}</h1>
          <p className="text-zinc-500 max-w-2xl">
            {lang === 'en' ? 'Deep dives into fitness science, nutrition strategies, and performance optimization.' : 
             lang === 'es' ? 'Análisis profundos sobre la ciencia del fitness, estrategias de nutrición y optimización del rendimiento.' : 
             'Análises profundas sobre a ciência do fitness, estratégias de nutrição e otimização de performance.'}
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input 
            type="text" 
            placeholder={lang === 'en' ? 'Search articles...' : lang === 'es' ? 'Buscar artículos...' : 'Buscar artigos...'} 
            className="w-full bg-zinc-100 border-none rounded-full pl-12 pr-6 py-3 focus:ring-2 focus:ring-black transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            to={`/${lang}/blog/${post.id}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-zinc-100">
              <img 
                src={post.image} 
                alt={post.title[lang as Language] || post.title.en} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/blog-${post.id}/800/500`;
                }}
              />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-4 block">{post.category[lang as Language] || post.category.en}</span>
              <h2 className="text-3xl font-bold mb-4 leading-tight group-hover:underline">{post.title[lang as Language] || post.title.en}</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed">{post.excerpt[lang as Language] || post.excerpt.en}</p>
              <div className="flex items-center gap-6 text-xs text-zinc-400 font-medium">
                <div className="flex items-center gap-2">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  {post.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
