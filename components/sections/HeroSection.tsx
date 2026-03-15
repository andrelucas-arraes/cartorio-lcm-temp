import React from "react";
import Image from "next/image";

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
    <section className="relative w-full md:h-96 overflow-hidden flex items-center justify-center text-white pt-20 md:pt-0">

      {/* 3. Lógica do Plano de Fundo (Background) */}
      {backgroundImageUrl ? (
        <Image
          src={backgroundImageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500"
          aria-hidden="true"
        />
      )}

      {/* 4. Overlay Escuro */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* 5. Container de Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-0 flex items-center justify-center md:h-full">
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