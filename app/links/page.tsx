// =====================================
// PÁGINA LINKS ÚTEIS
// =====================================

import type { Metadata } from "next";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HeroSection from '@/components/sections/HeroSection';
import LinksContentSection from '@/components/sections/LinksContentSection';
import ActionSection from '@/components/sections/ActionSection';

// Metadados SEO específicos desta página
export const metadata: Metadata = {
  title: "Links Úteis - Centrais Eletrônicas e Legislações",
  description:
    "Acesse links úteis do Cartório de Alto Longá, Piauí: centrais eletrônicas de serviços cartorários, legislações, órgãos reguladores e recursos importantes para cidadãos.",
  alternates: {
    canonical: "https://cartorio-lcm-temp.vercel.app/links",
  },
  openGraph: {
    title: "Links Úteis | Cartório Alto Longá PI",
    description:
      "Links úteis do Cartório de Alto Longá, Piauí: centrais eletrônicas, legislações e recursos importantes.",
    url: "https://cartorio-lcm-temp.vercel.app/links",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Links Úteis - Cartório de Alto Longá, Piauí",
      },
    ],
  },
};

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