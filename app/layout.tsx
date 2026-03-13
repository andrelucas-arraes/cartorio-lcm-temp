// =====================================
// LAYOUT RAIZ DA APLICAÇÃO
// =====================================

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

// Configuração das fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =====================================
// CONFIGURAÇÃO DE VIEWPORT
// =====================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#511C23",
};

// =====================================
// METADADOS SEO COMPLETOS
// =====================================
export const metadata: Metadata = {
  metadataBase: new URL("https://cartorio-lcm-temp.vercel.app"),

  // Título padrão e template para sub-páginas
  title: {
    default: "Cartório Alto Longá PI | Serventia Extrajudicial do Ofício Único - Cartório Luciana Carrilho de Moraes Marinho",
    template: "%s | Cartório Alto Longá PI - Serventia Extrajudicial do Ofício Único",
  },

  // Descrição otimizada com palavras-chave naturais
  description:
    "Serventia Extrajudicial do Ofício Único de Alto Longá-PI — Cartório Luciana Carrilho de Moraes Marinho. Serviços de Registro Civil, Tabelionato de Notas, Registro de Imóveis, Protesto de Títulos, Registro de Títulos e Documentos, Registro Civil de Pessoas Jurídicas. Rua Benedito Brito, 352 - Centro, Alto Longá, Piauí. ☎ (86) 98871-8166.",

  // Keywords relevantes para buscas locais
  keywords: [
    // Nome oficial da serventia
    "serventia extrajudicial do ofício único de alto longá",
    "serventia extrajudicial do ofício único de alto longá PI",
    "serventia extrajudicial do ofício único de alto longá piauí",
    "serventia extrajudicial alto longá",
    "serventia extrajudicial alto longá PI",
    // Nome da titular
    "cartório luciana carrilho de moraes marinho",
    "cartório luciana carrilho",
    "cartório LCM alto longá",
    // Variações "cartório alto longá"
    "cartório alto longá",
    "cartório alto longá PI",
    "cartório alto longá piauí",
    "cartório de alto longá",
    "cartório de alto longá PI",
    "cartório alto longá - PI",
    "cartório alto longa PI",
    "cartório alto longa",
    // Variações por tipo
    "cartório ofício único alto longá",
    "cartório de ofício único de alto longá",
    "ofício único alto longá",
    // Serviços + cidade
    "registro civil alto longá",
    "registro civil alto longá PI",
    "tabelionato de notas alto longá",
    "registro de imóveis alto longá",
    "protesto de títulos alto longá",
    "registro de títulos e documentos alto longá",
    // Documentos + cidade
    "certidão de nascimento alto longá",
    "certidão de casamento alto longá",
    "certidão de óbito alto longá",
    "escritura pública alto longá",
    "reconhecimento de firma alto longá",
    "autenticação alto longá",
    "procuração alto longá",
    // Informações práticas
    "cartório piauí",
    "cartório alto longá telefone",
    "cartório alto longá endereço",
    "cartório alto longá horário",
    "cartório da comarca de alto longá",
  ],

  // Autor e criador
  authors: [{ name: "Cartório Luciana Carrilho de Moraes Marinho" }],
  creator: "Cartório Luciana Carrilho de Moraes Marinho",
  publisher: "Cartório Luciana Carrilho de Moraes Marinho",

  // Configuração para robôs de busca
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://cartorio-lcm-temp.vercel.app",
    languages: {
      "pt-BR": "https://cartorio-lcm-temp.vercel.app",
    },
  },

  // Verificação do Google (coloque seu código do Google Search Console aqui)
  // verification: {
  //   google: "SEU_CODIGO_DE_VERIFICACAO_GOOGLE_SEARCH_CONSOLE",
  // },

  // Open Graph otimizado
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cartorio-lcm-temp.vercel.app",
    siteName: "Cartório Luciana Carrilho de Moraes Marinho - Serventia Extrajudicial do Ofício Único de Alto Longá/PI",
    title: "Cartório Alto Longá PI | Serventia Extrajudicial do Ofício Único - Luciana Carrilho de Moraes Marinho",
    description:
      "Serventia Extrajudicial do Ofício Único de Alto Longá-PI — Cartório Luciana Carrilho de Moraes Marinho. Registro Civil, Tabelionato de Notas, Registro de Imóveis, Protesto de Títulos. Seg a Sex, 08h às 14h. ☎ (86) 98871-8166.",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Cartório Luciana Carrilho de Moraes Marinho - Alto Longá, Piauí",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card otimizado
  twitter: {
    card: "summary_large_image",
    title: "Cartório Alto Longá PI | Serventia Extrajudicial - Luciana Carrilho de Moraes Marinho",
    description:
      "Serventia Extrajudicial do Ofício Único de Alto Longá-PI — Cartório Luciana Carrilho de Moraes Marinho. Registro Civil, Tabelionato de Notas, Registro de Imóveis, Protesto de Títulos. ☎ (86) 98871-8166.",
    images: ["/images/og.jpg"],
  },

  // Categoria
  category: "Serviços Cartorários",

  // Classificação
  classification: "Cartório / Serventia Extrajudicial",
};

// Layout principal que envolve todas as páginas 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Dados estruturados JSON-LD para SEO */}
        <JsonLd />

        {/* Geo meta tags para SEO local */}
        <meta name="geo.region" content="BR-PI" />
        <meta name="geo.placename" content="Alto Longá, Piauí" />
        <meta name="geo.position" content="-5.2567;-42.2103" />
        <meta name="ICBM" content="-5.2567, -42.2103" />

        {/* Meta tags adicionais para SEO */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Cartório LCM" />
        <meta name="application-name" content="Cartório Luciana Carrilho de Moraes Marinho" />

        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Script para suprimir avisos de hidratação causados por extensões do navegador */}
        <Script
          id="suppress-hydration-warning"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Suprime avisos de hidratação causados por extensões do navegador
              (function() {
                if (typeof window === 'undefined') return;
                
                const originalError = console.error;
                console.error = function(...args) {
                  const errorMessage = args[0]?.toString() || '';
                  
                  // Lista de mensagens causadas por extensões do navegador
                  const browserExtensionMessages = [
                    'Hydration failed',
                    'hydrated but some attributes',
                    'suppresshydrationwarning',
                    'data-new-gr-c-s-check-loaded',
                    'data-gr-ext-installed',
                    'data-lightpdf-translator',
                    'data-lt-installed',
                  ];
                  
                  // Verifica se é um erro de extensão do navegador
                  const isBrowserExtensionError = browserExtensionMessages.some(function(msg) {
                    return errorMessage.toLowerCase().includes(msg.toLowerCase());
                  });
                  
                  // Mostra apenas erros que NÃO são de extensões
                  if (!isBrowserExtensionError) {
                    originalError.apply(console, args);
                  }
                };
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        {/* Botão flutuante do WhatsApp */}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}