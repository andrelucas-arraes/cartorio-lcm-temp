'use client'
import React from 'react';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 

import HeroSection from '@/components/sections/HeroSection';
import ServicesContentSection from '@/components/sections/ServicesContentSection';
import ActionSection from '@/components/sections/ActionSection';

// Componente principal da página de Nossos Serviços
const OurServicesPage: React.FC = () => {
  return (
    // Estrutura principal da página
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Nossos Serviços"
          subtitle="Excelência e segurança jurídica em todos os serviços cartorários"
          backgroundImageUrl="/images/hero-aerea.jpg"
        />
        
        {/* Seção de conteúdo */}
        <ServicesContentSection />
        
        {/* Seção de ação */}
        <ActionSection />   
      </main>
      
      <Footer />
      
    </div>
  );
};

export default OurServicesPage;

