// =====================================
// PÁGINA NOSSOS SERVIÇOS
// =====================================

import type { Metadata } from "next";
import React from 'react';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 

import HeroSection from '@/components/sections/HeroSection';
import ServicesContentSection from '@/components/sections/ServicesContentSection';
import ActionSection from '@/components/sections/ActionSection';

// Metadados SEO específicos desta página
export const metadata: Metadata = {
  title: "Nossos Serviços - Registro Civil, Tabelionato, Imóveis e Protesto",
  description:
    "Conheça os serviços do Cartório de Alto Longá, Piauí: Registro Civil de Pessoas Naturais e Jurídicas, Tabelionato de Notas, Registro de Imóveis, Protesto de Títulos, Registro de Títulos e Documentos. Atendimento com excelência e segurança jurídica.",
  alternates: {
    canonical: "https://cartorio-lcm-temp.vercel.app/nossos-servicos",
  },
  openGraph: {
    title: "Nossos Serviços | Cartório Alto Longá PI",
    description:
      "Serviços cartorários completos em Alto Longá, Piauí: Registro Civil, Tabelionato de Notas, Registro de Imóveis, Protesto de Títulos e mais.",
    url: "https://cartorio-lcm-temp.vercel.app/nossos-servicos",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Serviços do Cartório de Alto Longá - Piauí",
      },
    ],
  },
};

// Página que apresenta os serviços cartorários
const OurServicesPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        {/* Banner principal */}
        <HeroSection 
          title="Nossos Serviços"
          subtitle="Excelência e segurança jurídica em todos os serviços cartorários"
          backgroundImageUrl="/images/hero-aerea.jpg"
        />
        
        {/* Detalhes dos serviços */}
        <ServicesContentSection />
        
        {/* Seção de ação */}
        <ActionSection />   
      </main>
      
      <Footer />
    </div>
  );
};

export default OurServicesPage;