import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { WorkoutDetail } from './pages/WorkoutDetail';
import { DietPlans } from './pages/DietPlans';
import { Supplements } from './pages/Supplements';
import { SupplementDetail } from './pages/SupplementDetail';
import { Calculators } from './pages/Calculators';
import { DietDetail } from './pages/DietDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Language } from './constants';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-emerald-400 selection:text-black">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const LanguageWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const validLangs: Language[] = ['en', 'es', 'br'];
  
  if (!lang || !validLangs.includes(lang as Language)) {
    return <Navigate to="/en" replace />;
  }

  return <Layout />;
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:lang" element={<LanguageWrapper />}>
            <Route index element={<Home />} />
            <Route path="workouts" element={<Workouts />} />
            <Route path="workouts/:id" element={<WorkoutDetail />} />
            <Route path="diet-plans" element={<DietPlans />} />
            <Route path="diet-plans/:kcal" element={<DietDetail />} />
            <Route path="supplements" element={<Supplements />} />
            <Route path="supplements/:id" element={<SupplementDetail />} />
            <Route path="calculators" element={<Calculators />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
          </Route>
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
