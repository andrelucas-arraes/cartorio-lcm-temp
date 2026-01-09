// =====================================
// ATTRIBUTION CARD
// =====================================
// Card clicável para exibir atribuições do cartório

import React from 'react';
import Link from 'next/link';

interface AttributionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href: string; 
}

export default function AttributionCard({ icon, title, description, href }: AttributionCardProps) {
  return (
    <Link 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="bg-primary/20 border-2 border-white/30 rounded-2xl p-8 text-center hover:border-white/60 transition-all duration-300 transform hover:scale-105 h-full flex flex-col items-center justify-center cursor-pointer">
        {/* Ícone */}
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

        {/* Descrição (opcional) */}
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