import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Language, translations } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export const FAQSection = ({ items }: FAQSectionProps) => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;

  return (
    <section className="my-16 border-t border-zinc-100 pt-16">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-6 w-6 text-emerald-500" />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter">{t.common.faqTitle}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <details key={idx} className="group bg-zinc-50 rounded-2xl p-6 cursor-pointer transition-all hover:bg-zinc-100">
            <summary className="flex items-center justify-between font-bold text-lg list-none">
              {item.question}
              <ChevronDown className="h-5 w-5 text-zinc-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-4 text-zinc-600 leading-relaxed text-sm">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
      {/* Schema.org JSON-LD for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}
      </script>
    </section>
  );
};
