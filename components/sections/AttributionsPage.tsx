import React from 'react';
import AttributionCard from "@/components/cards/AttributionCard";
import { Home, FileText, Users, FileStack, Banknote, Building2 } from 'lucide-react';

// Componente da página de Atribuições/Serviços Digitais
export default function AttributionsPage() {

  // 1. Configuração dos dados dos cards (Ícone, Título e Link externo)
  const digitalServices = [
    {
      icon: <Banknote className="w-12 h-12 text-white" />,
      title: "Protesto de Títulos",
      href: "https://site.cenprotnacional.org.br/",
    },
    {
      icon: <FileText className="w-12 h-12 text-white" />,
      title: "Tabelionato de Notas",
      href: "https://www.e-notariado.org.br/",
    },
    {
      icon: <Home className="w-12 h-12 text-white" />,
      title: "Registro de Imóveis",
      href: "https://registradores.onr.org.br/",
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Registro Civil das Pessoas Naturais",
      href: "https://www.registrocivil.org.br/",
    },
    {
      icon: <Building2 className="w-12 h-12 text-white" />,
      title: "Registro Civil das Pessoas Jurídicas",
      href: "https://www.rtdbrasil.org.br/",
    },
    {
      icon: <FileStack className="w-12 h-12 text-white" />,
      title: "Registro de Títulos e Documentos",
      href: "https://www.rtdbrasil.org.br/",
    },
  ];

  return (
    // 2. Container da seção com fundo personalizado (Gradiente + Imagem Pattern)
    <section
      className="relative w-full py-12 sm:py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #511C23 0%, #3f1417 100%)",
        backgroundImage: "url(/images/pattern-bg.png)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* 3. Elemento visual: Recorte diagonal na borda superior */}
      <div
        className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-background"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 100%)",
          marginTop: "-1px",
        }}
      ></div>

      <div className="container mx-auto px-4 pt-8 md:pt-12">

        {/* 4. Título da seção */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-black text-2xl sm:text-3xl md:text-4xl text-white text-center mb-8 md:mb-16"
        >
          SERVIÇOS DIGITAIS
        </h2>

        {/* 5. Grid de Cards: Mapeia o array 'digitalServices' para renderizar os componentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {digitalServices.map((service, index) => (
            <AttributionCard
              key={index}
              icon={service.icon}
              title={service.title}
              href={service.href}
            />
          ))}
        </div>
      </div>

      {/* 6. Elemento visual: Recorte diagonal na borda inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-background"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
          marginBottom: "-1px",
        }}
      ></div>
    </section>
  );
}