import React from "react";

// 1. Interface que define as propriedades aceitas pelo componente
interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImageUrl?: string; 
  badge?: string;              
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  badge,
}) => {
  return (
    // 2. Container Principal: Define altura, posicionamento e cor do texto
    <section className="relative w-full min-h-[60vh] md:h-96 overflow-hidden flex items-center justify-center text-white pt-16 md:pt-0">

      {/* 3. Lógica do Plano de Fundo (Background) */}
      {/* Se 'backgroundImageUrl' existir, exibe a imagem. Caso contrário, exibe um gradiente padrão. */}
      {backgroundImageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
          }}
          aria-hidden="true"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500"
          aria-hidden="true"
        />
      )}

      {/* 4. Overlay Escuro */}
      {/* Camada preta semitransparente para garantir que o texto seja legível sobre a imagem/gradiente */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 5. Container de Conteúdo */}
      {/* Centraliza o texto vertical e horizontalmente sobre o fundo (z-10) */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-0 flex items-center justify-center min-h-[60vh] md:h-full">
        <div className="text-center max-w-2xl">

          {/* Título */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl mt-3 opacity-90 px-2">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;