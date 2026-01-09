// =====================================
// PÁGINA INICIAL (HOME)
// =====================================

"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import AttendanceChannelsDetailPage from "@/components/sections/AttendanceChannelsDetailPage";
import AttributionsPage from "@/components/sections/AttributionsPage";
import HeroPage from "@/components/sections/HeroPage";
import ProcessTrackingPage from "@/components/sections/ProcessTrackingPage";
import ServicesDetailPage from "@/components/sections/ServicesDetailPage";
import WhatsAppButton from "@/components/WhatsAppButton";

// Página principal do site
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Banner principal */}
        <HeroPage />
        
        {/* Atribuições do cartório */}
        <AttributionsPage />
        
        {/* Detalhes dos serviços */}
        <ServicesDetailPage />
        
        {/* Acompanhamento de processos */}
        <ProcessTrackingPage />
        
        {/* Canais de atendimento */}
        <AttendanceChannelsDetailPage />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}