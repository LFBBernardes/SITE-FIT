import React from 'react';
import { CheckCircle2, AlertCircle, Info, Quote, TrendingUp, TrendingDown, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const KeyTakeaways = ({ items }: { items: string[] }) => {
  return (
    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 md:p-8 my-12">
      <h3 className="text-lg font-black uppercase tracking-widest text-emerald-800 mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5" />
        Key Takeaways
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-emerald-900/80 font-medium leading-snug">
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Callout = ({ type = 'info', title, children }: { type?: 'info' | 'warning' | 'tip'; title?: string; children: React.ReactNode }) => {
  const styles = {
    info: {
      bg: 'bg-blue-50/50',
      border: 'border-blue-100',
      text: 'text-blue-900',
      icon: <Info className="h-5 w-5 text-blue-500" />,
      titleColor: 'text-blue-800'
    },
    warning: {
      bg: 'bg-amber-50/50',
      border: 'border-amber-100',
      text: 'text-amber-900',
      icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
      titleColor: 'text-amber-800'
    },
    tip: {
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-100',
      text: 'text-emerald-900',
      icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
      titleColor: 'text-emerald-800'
    }
  };

  const s = styles[type];

  return (
    <div className={cn(s.bg, s.border, "border rounded-2xl p-6 my-8")}>
      <div className="flex gap-4">
        <div className="shrink-0 mt-1">{s.icon}</div>
        <div>
          {title && <h4 className={cn("font-black uppercase tracking-widest text-xs mb-2", s.titleColor)}>{title}</h4>}
          <div className={cn("text-sm leading-relaxed font-medium", s.text)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StatsBlock = ({ stats }: { stats: { label: string; value: string; description?: string }[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">{stat.label}</span>
          <span className="block text-3xl font-black text-emerald-600 mb-2">{stat.value}</span>
          {stat.description && <p className="text-xs text-zinc-500 font-medium leading-relaxed">{stat.description}</p>}
        </div>
      ))}
    </div>
  );
};

export const ScienceQuote = ({ text, source, year }: { text: string; source: string; year?: string }) => {
  return (
    <figure className="my-12 relative">
      <Quote className="absolute -top-6 -left-6 h-12 w-12 text-emerald-100 -z-10" />
      <blockquote className="text-xl md:text-2xl font-serif italic text-zinc-800 leading-relaxed mb-6">
        "{text}"
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div className="w-8 h-px bg-emerald-500" />
        <span className="text-sm font-bold text-zinc-900">{source}</span>
        {year && <span className="text-xs text-zinc-400 font-medium">({year})</span>}
      </figcaption>
    </figure>
  );
};

export const ProsCons = ({ pros, cons }: { pros: string[]; cons: string[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-6">
        <h4 className="text-sm font-black uppercase tracking-widest text-emerald-800 mb-6 flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          Pros
        </h4>
        <ul className="space-y-3">
          {pros.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-emerald-900/80 font-medium leading-snug">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-rose-50/30 border border-rose-100 rounded-2xl p-6">
        <h4 className="text-sm font-black uppercase tracking-widest text-rose-800 mb-6 flex items-center gap-2">
          <TrendingDown className="h-4 w-4" />
          Cons
        </h4>
        <ul className="space-y-3">
          {cons.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-rose-900/80 font-medium leading-snug">
              <AlertCircle className="h-4 w-4 text-rose-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const FAQAccordion = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="my-16 pt-16 border-t border-zinc-100">
      <h2 className="text-2xl font-black text-zinc-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="border border-zinc-100 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
            >
              <span className="font-bold text-zinc-900">{item.question}</span>
              {openIndex === i ? <ChevronDown className="h-5 w-5 text-emerald-500" /> : <ChevronRight className="h-5 w-5 text-zinc-400" />}
            </button>
            {openIndex === i && (
              <div className="p-6 pt-0 text-zinc-600 text-sm leading-relaxed font-medium">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TableOfContents = ({ items }: { items: { id: string; text: string }[] }) => {
  return (
    <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 my-12 lg:hidden">
      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Table of Contents</h4>
      <nav className="space-y-3">
        {items.map((item, i) => (
          <a key={i} href={`#${item.id}`} className="block text-sm font-bold text-zinc-600 hover:text-emerald-600 transition-colors">
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
