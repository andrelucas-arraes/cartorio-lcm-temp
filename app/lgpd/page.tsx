// =====================================
// PÁGINA LGPD
// =====================================

import type { Metadata } from "next";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HeroSection from '@/components/sections/HeroSection';
import LgpdContentSection from '@/components/sections/LgpdContentSection';
import ActionSection from '@/components/sections/ActionSection';

// Metadados SEO específicos desta página
export const metadata: Metadata = {
  title: "LGPD - Política de Proteção de Dados Pessoais",
  description:
    "Saiba como o Cartório de Alto Longá, Piauí, trata seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD). Conheça seus direitos e nossa política de privacidade.",
  alternates: {
    canonical: "https://cartorio-lcm-temp.vercel.app/lgpd",
  },
  openGraph: {
    title: "LGPD - Proteção de Dados | Cartório Alto Longá PI",
    description:
      "Política de proteção de dados pessoais do Cartório de Alto Longá, Piauí, conforme a LGPD.",
    url: "https://cartorio-lcm-temp.vercel.app/lgpd",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "LGPD - Cartório de Alto Longá, Piauí",
      },
    ],
  },
};

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