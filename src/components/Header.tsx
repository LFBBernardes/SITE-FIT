import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { Language, translations } from '../constants';
import { cn } from '../utils/cn';

export const Header = () => {
  const { lang = 'en' } = useParams<{ lang: Language }>();
  const t = translations[lang as Language] || translations.en;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { title: t.common.workouts, href: `/${lang}/workouts` },
    { title: t.common.diet, href: `/${lang}/diet-plans` },
    { title: t.common.supplements, href: `/${lang}/supplements` },
    { title: t.common.calculators, href: `/${lang}/calculators` },
    { title: t.common.blog, href: `/${lang}/blog` },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'br', label: 'Português' },
  ];

  const changeLanguage = (newLang: Language) => {
    const pathParts = location.pathname.split('/');
    pathParts[1] = newLang;
    navigate(pathParts.join('/'));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={`/${lang}`} className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter uppercase italic">Vigorate</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{lang}</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-zinc-900 border border-white/10 p-1 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => changeLanguage(l.code)}
                  className={cn(
                    "block w-full px-4 py-2 text-left text-xs hover:bg-white/5 rounded",
                    lang === l.code ? "text-emerald-400" : "text-white"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium opacity-70 hover:opacity-100"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
