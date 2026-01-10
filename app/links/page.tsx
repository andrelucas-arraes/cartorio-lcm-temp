// =====================================
// PÁGINA LINKS ÚTEIS
// =====================================

'use client'
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HeroSection from '@/components/sections/HeroSection';
import LinksContentSection from '@/components/sections/LinksContentSection';
import ActionSection from '@/components/sections/ActionSection';

// Página com links importantes relacionados ao cartório
const LinksPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Banner principal */}
        <HeroSection
          title="Links Úteis"
          subtitle="Acesso rápido a informações e recursos importantes relacionados à serventia e legislações."
          backgroundImageUrl="/images/hero-aerea.jpg"
          badge="Links"
        />

        {/* Lista de links úteis */}
        <LinksContentSection />

        {/* Seção de ação */}
        <ActionSection />
      </main>

      <Footer />
    </div>
  );
};

export default LinksPage;