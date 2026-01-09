import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartório Luciana Carrilho de Moraes Marinho",
  description: "Cartório do 1º Ofício de Alto Longá/PI. Serviços cartorários com excelência e segurança jurídica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
