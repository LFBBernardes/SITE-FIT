import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';

interface AffiliateBlockProps {
  title: string;
  description: string;
  price?: string;
  imageUrl: string;
  affiliateUrl: string;
}

export const AffiliateBlock = ({ title, description, price, imageUrl, affiliateUrl }: AffiliateBlockProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-5 gap-6 my-10 shadow-sm">
      <div className="w-full md:w-40 h-40 flex-shrink-0 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl overflow-hidden p-4 flex items-center justify-center border border-zinc-100 dark:border-zinc-800">
        <img 
          src={imageUrl} 
          alt={title} 
          className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" 
          referrerPolicy="no-referrer" 
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">{description}</p>
        {price && <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{price}</div>}
      </div>
      <div className="w-full md:w-auto">
        <a 
          href={affiliateUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold transition-colors w-full"
        >
          <ShoppingCart className="h-4 w-4" />
          Buy Now
          <ExternalLink className="h-3 w-3 opacity-50" />
        </a>
      </div>
    </div>
  );
};
