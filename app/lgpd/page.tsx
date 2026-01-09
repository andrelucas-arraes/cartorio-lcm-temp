// =====================================
// PÁGINA LGPD
// =====================================

'use client'
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HeroSection from '@/components/sections/HeroSection';
import LgpdContentSection from '@/components/sections/LgpdContentSection';
import ActionSection from '@/components/sections/ActionSection';

// Página de informações sobre a Lei Geral de Proteção de Dados
const LgpdPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Banner principal */}
        <HeroSection
          title="LGPD - Lei Geral de Proteção de Dados"
          subtitle="Informações sobre como tratamos seus dados pessoais e quais são seus direitos conforme a Lei Geral de Proteção de Dados."
          backgroundImageUrl="/images/hero-aerea.jpg"
        />

        {/* Conteúdo sobre LGPD */}
        <LgpdContentSection />

        {/* Seção de ação */}
        <ActionSection />
      </main>

      <Footer />
    </div>
  );
};

export default LgpdPage;