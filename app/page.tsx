// =====================================
// PÁGINA INICIAL (HOME) - SERVER COMPONENT PARA SEO
// =====================================

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import AttendanceChannelsDetailPage from "@/components/sections/AttendanceChannelsDetailPage";
import AttributionsPage from "@/components/sections/AttributionsPage";
import HeroPage from "@/components/sections/HeroPage";
import ProcessTrackingPage from "@/components/sections/ProcessTrackingPage";
import ServicesDetailPage from "@/components/sections/ServicesDetailPage";

// Página principal do site - Server Component para melhor SEO
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
    </div>
  );
}