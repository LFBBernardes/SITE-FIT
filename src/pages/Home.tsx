import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Dumbbell, Utensils, Pill, Calculator, ArrowRight } from 'lucide-react';
import { Language, translations } from '../constants';
import { motion } from 'motion/react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const Home = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  const categories = [
    { title: t.common.workouts, icon: Dumbbell, href: `/${lang}/workouts`, color: 'bg-blue-500' },
    { title: t.common.diet, icon: Utensils, href: `/${lang}/diet-plans`, color: 'bg-orange-500' },
    { title: t.common.supplements, icon: Pill, href: `/${lang}/supplements`, color: 'bg-purple-500' },
    { title: t.common.calculators, icon: Calculator, href: `/${lang}/calculators`, color: 'bg-emerald-500' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic mb-6"
          >
            {t.home.heroTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-10"
          >
            {t.home.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link to={`/${lang}/workouts`} className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors flex items-center gap-2">
              {t.common.getStarted} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to={`/${lang}/blog`} className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors">
              {t.common.learnMore}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-2">{t.home.quickNav}</h2>
            <div className="h-1 w-12 bg-black mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {categories.map((cat, idx) => (
              <Link 
                key={idx} 
                to={cat.href}
                className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-video flex flex-col items-center justify-center p-6 bg-zinc-50 hover:bg-black hover:text-white transition-all duration-500"
              >
                <cat.icon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-lg font-bold uppercase tracking-tight">{cat.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdPlaceholder className="container mx-auto my-8" slot="Homepage Top" />

      {/* Featured Articles */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">{t.common.featuredArticles}</h2>
              <p className="text-zinc-500">
                {lang === 'en' ? 'Expert advice for your fitness journey.' : 
                 lang === 'es' ? 'Consejos de expertos para tu viaje de fitness.' : 
                 'Conselhos de especialistas para sua jornada fitness.'}
              </p>
            </div>
            <Link to={`/${lang}/blog`} className="text-sm font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors flex items-center gap-1">
              {lang === 'en' ? 'View All' : lang === 'es' ? 'Ver Todo' : 'Ver Tudo'} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
                cat: { en: 'Training', es: 'Entrenamiento', br: 'Treinamento' },
                title: { en: 'The Science of Muscle Growth: Hypertrophy Explained', es: 'La Ciencia del Crecimiento Muscular: Hipertrofia Explicada', br: 'A Ciência do Crescimento Muscular: Hipertrofia Explicada' }
              },
              {
                id: 2,
                coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
                cat: { en: 'Nutrition', es: 'Nutrición', br: 'Nutrição' },
                title: { en: 'Optimal Protein Intake for Maximum Results', es: 'Ingesta Óptima de Proteínas para Resultados Máximos', br: 'Ingestão Ideal de Proteína para Resultados Máximos' }
              },
              {
                id: 3,
                coverImage: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=800",
                cat: { en: 'Supplements', es: 'Suplementos', br: 'Suplementos' },
                title: { en: 'Top 5 Supplements for Strength and Recovery', es: 'Los 5 Mejores Suplementos para Fuerza y Recuperación', br: 'Top 5 Suplementos para Força e Recuperação' }
              }
            ].map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-zinc-200">
                  <img 
                    src={article.coverImage} 
                    alt="Article" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/article-${article.id}/800/450`;
                    }}
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2 block">
                  {article.cat[lang as Language] || article.cat.en}
                </span>
                <h3 className="text-xl font-bold leading-tight group-hover:underline">
                  {article.title[lang as Language] || article.title.en}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{t.common.newsletterTitle}</h2>
          <p className="text-zinc-400 mb-8">{t.common.newsletterDesc}</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder={lang === 'en' ? 'Enter your email' : lang === 'es' ? 'Ingresa tu correo' : 'Digite seu e-mail'} 
              className="flex-grow bg-zinc-900 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              {t.common.subscribe}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
