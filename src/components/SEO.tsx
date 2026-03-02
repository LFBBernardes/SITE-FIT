import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  lang: string;
}

export const SEO = ({ title, description, lang }: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://vigorate.fitness"; // Example base URL
  const currentPath = location.pathname;
  
  // Construct canonical and alternate links
  const canonical = `${baseUrl}${currentPath}`;
  
  const getAlternate = (targetLang: string) => {
    const parts = currentPath.split('/');
    parts[1] = targetLang;
    return `${baseUrl}${parts.join('/')}`;
  };

  return (
    <Helmet>
      <title>{title} | Vigorate Fitness</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="en" href={getAlternate('en')} />
      <link rel="alternate" hrefLang="es" href={getAlternate('es')} />
      <link rel="alternate" hrefLang="pt-br" href={getAlternate('br')} />
      <link rel="alternate" hrefLang="x-default" href={getAlternate('en')} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
