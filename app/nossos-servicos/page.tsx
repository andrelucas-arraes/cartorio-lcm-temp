// =====================================
// PÁGINA NOSSOS SERVIÇOS
// =====================================

'use client'
import React from 'react';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 

import HeroSection from '@/components/sections/HeroSection';
import ServicesContentSection from '@/components/sections/ServicesContentSection';
import ActionSection from '@/components/sections/ActionSection';

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