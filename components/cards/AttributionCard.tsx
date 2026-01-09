import React from 'react';
import Link from 'next/link';

interface AttributionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href: string; // Nova propriedade obrigatória
}

export default function AttributionCard({ icon, title, description, href }: AttributionCardProps) {
  return (
    <Link 
      href={href}
      target="_blank" // Abre em nova aba
      rel="noopener noreferrer" // Segurança para novos tabs
      className="block h-full" // Garante que o link ocupe toda a altura do grid
    >
      <div className="bg-primary/20 border-2 border-white/30 rounded-2xl p-8 text-center hover:border-white/60 transition-all duration-300 transform hover:scale-105 h-full flex flex-col items-center justify-center cursor-pointer">
        {/* Container do Ícone */}
        <div className="flex justify-center mb-6">
          {icon}
        </div>

        {/* Título */}
        <h3 
          style={{ fontFamily: "Montserrat, sans-serif" }} 
          className="font-bold text-xl text-white mb-2"
        >
          {title}
        </h3>

        {/* Descrição */}
        {description && (
          <p 
            style={{ fontFamily: "Source Sans Pro, sans-serif" }} 
            className="text-sm text-white/80"
          >
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}