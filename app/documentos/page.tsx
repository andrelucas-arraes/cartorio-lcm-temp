import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocumentSearchClient from './DocumentSearchClient';

export const metadata: Metadata = {
  title: 'Documentação Necessária',
  description: 'Confira a documentação exigida para cada serviço no Cartório com rapidez e segurança.',
  alternates: {
    canonical: "https://www.cartorioaltolonga.com.br/documentos",
  },
};

export default function DocumentosPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pb-16">
        {/* Header Banner */}
        <section className="bg-[lab(19_25.78_8.75)] text-white pt-[90px] md:pt-[144px] pb-12 md:pb-16 px-4 shadow-md">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Central de Documentação
            </h1>
            <p 
              style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
              className="text-lg md:text-xl max-w-2xl mx-auto text-white/90"
            >
              Saiba exatamente quais documentos levar ao cartório para realizar os seus serviços com rapidez e sem surpresas.
            </p>
          </div>
        </section>

        <DocumentSearchClient />
      </main>
      
      <Footer />
    </div>
  );
}
