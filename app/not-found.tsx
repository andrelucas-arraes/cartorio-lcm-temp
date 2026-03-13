// =====================================
// PÁGINA 404 - NÃO ENCONTRADA
// =====================================
// Página customizada para quando o usuário acessa uma URL inexistente.
// Importante para SEO: evita penalização por páginas quebradas.

import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Página Não Encontrada",
  description:
    "A página que você procura não foi encontrada. Visite o site do Cartório Luciana Carrilho de Moraes Marinho - Serventia Extrajudicial do Ofício Único de Alto Longá-PI.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">

        {/* Ícone e Código de Erro */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#511C23]/10 mb-6">
            <Search className="w-12 h-12 text-[#511C23]" />
          </div>
          <h1
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-7xl sm:text-8xl font-black text-[#511C23] mb-2"
          >
            404
          </h1>
          <div className="w-24 h-1 bg-[#511C23] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Mensagem Principal */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
        >
          Página não encontrada
        </h2>
        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="text-base sm:text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed"
        >
          A página que você está procurando não existe ou foi movida.
          Mas não se preocupe, podemos ajudá-lo a encontrar o que precisa.
        </p>

        {/* Sugestões de Navegação */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 mb-8">
          <h3
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="font-bold text-lg text-[#511C23] mb-6"
          >
            Você pode estar procurando:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#511C23]/5 border border-gray-200 hover:border-[#511C23]/30 transition-all duration-300 group"
            >
              <Home className="w-5 h-5 text-[#511C23] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="font-semibold text-sm text-gray-800 block"
                >
                  Página Inicial
                </span>
                <span className="text-xs text-gray-500">Informações gerais</span>
              </div>
            </Link>

            <Link
              href="/nossos-servicos"
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#511C23]/5 border border-gray-200 hover:border-[#511C23]/30 transition-all duration-300 group"
            >
              <Search className="w-5 h-5 text-[#511C23] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="font-semibold text-sm text-gray-800 block"
                >
                  Nossos Serviços
                </span>
                <span className="text-xs text-gray-500">Todos os serviços</span>
              </div>
            </Link>

            <Link
              href="/links"
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#511C23]/5 border border-gray-200 hover:border-[#511C23]/30 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 text-[#511C23] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="font-semibold text-sm text-gray-800 block"
                >
                  Links Úteis
                </span>
                <span className="text-xs text-gray-500">Centrais eletrônicas</span>
              </div>
            </Link>

            <a
              href="https://wa.me/558688718166?text=Ol%C3%A1!%20Preciso%20de%20ajuda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="font-semibold text-sm text-gray-800 block"
                >
                  Fale Conosco
                </span>
                <span className="text-xs text-gray-500">WhatsApp direto</span>
              </div>
            </a>
          </div>
        </div>

        {/* Botão Voltar */}
        <Link
          href="/"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#511C23] text-white font-bold rounded-xl hover:bg-[#511C23]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <Home className="w-5 h-5" />
          Voltar para o Início
        </Link>

        {/* Nome do Cartório - SEO */}
        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="mt-10 text-xs text-gray-400"
        >
          Cartório Luciana Carrilho de Moraes Marinho — Serventia Extrajudicial do Ofício Único de Alto Longá-PI
        </p>
      </div>
    </div>
  );
}
