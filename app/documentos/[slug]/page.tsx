import { servicosDocs } from '@/lib/data/documentos';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, CheckCircle2, ChevronRight, FileText, Info } from 'lucide-react';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrintButton from '@/components/PrintButton';

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const docData = servicosDocs.find((d) => d.slug === params.slug);

  if (!docData) return { title: 'Documento Não Encontrado' };

  return {
    title: `${docData.titulo} - Documentação Necessária`,
    description: docData.descricao || `Confira a documentação exigida para ${docData.titulo}.`,
    alternates: {
      canonical: `https://www.cartorioaltolonga.com.br/documentos/${docData.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return servicosDocs.map((doc) => ({
    slug: doc.slug,
  }));
}

export const dynamicParams = false;

export default async function DocumentoDetailsPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params;
  const slug = params.slug;

  const docData = servicosDocs.find((d) => d.slug === slug);

  if (!docData) {
    notFound();
  }

  // Group sidebar links by category
  const categoriesDocs = servicosDocs.reduce((acc, curr) => {
    if (!acc[curr.categoria]) {
      acc[curr.categoria] = [];
    }
    acc[curr.categoria].push(curr);
    return acc;
  }, {} as Record<string, typeof servicosDocs>);

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col print:bg-white">
      <div className="print:hidden"><Header /></div>
      <main className="flex-grow pt-28 pb-16 print:pt-0 print:pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row gap-8 print:block print:w-full print:max-w-none print:p-0 print:m-0">

          {/* Sidebar (Desktop) */}
          <aside className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-6 order-2 lg:order-1 print:hidden">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <h3
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="font-bold text-xl text-[#702125] mb-2"
              >
                Serviços
              </h3>

              {Object.keys(categoriesDocs).map((cat) => (
                <div key={cat} className="mb-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    {cat}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {categoriesDocs[cat].map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/documentos/${item.slug}`}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${item.slug === slug
                              ? 'bg-[#702125]/10 text-[#702125] font-semibold ring-1 ring-[#702125]/20 shadow-inner'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-[#702125]'
                            }`}
                        >
                          <FileText size={18} className={item.slug === slug ? 'text-[#702125]' : 'text-gray-400'} />
                          <span className="leading-tight">{item.titulo}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <hr className="border-gray-100 my-2" />
              <Link href="/documentos" className="flex items-center justify-center gap-2 text-gray-500 hover:text-[#702125] hover:bg-gray-50 transition-colors font-semibold text-sm px-4 py-3 rounded-xl border border-gray-200">
                <ArrowLeft size={16} />
                Voltar para a Central
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <section className="w-full lg:w-2/3 xl:w-3/4 flex flex-col order-1 lg:order-2 print:w-full print:max-w-none print:m-0 print:p-0">

            {/* Header */}
            <div className="bg-white rounded-t-3xl p-6 sm:p-10 border-b border-gray-100 shadow-sm relative z-10 print:shadow-none print:border-b-2 print:border-black print:rounded-none print:p-0 print:pb-4 print:mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 print:hidden">
                <span className="bg-[#702125]/10 text-[#702125] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase border border-[#702125]/20">
                  {docData.categoria}
                </span>
                <div className="print:hidden">
                  <PrintButton />
                </div>
              </div>

              <h1
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="text-3xl md:text-5xl font-bold text-[#702125] mb-6 leading-tight print:text-black print:text-3xl print:mb-2"
              >
                {docData.titulo}
              </h1>

              <p
                style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl print:text-black print:text-base print:max-w-none"
              >
                {docData.descricao}
              </p>
            </div>

            {/* Document Lists */}
            <div className="bg-white rounded-b-3xl shadow-sm p-4 sm:p-10 flex flex-col gap-6 relative print:shadow-none print:p-0 print:gap-8">

              {docData.sessoes.map((sessao, idx) => (
                <details
                  key={idx}
                  className="group border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 [&_summary::-webkit-details-marker]:hidden print:border-none print:shadow-none print:rounded-none print:bg-transparent print:overflow-visible"
                  open={idx === 0}
                >
                  <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors focus:outline-none print:hidden">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#702125]/5 p-3 rounded-xl print:hidden">
                        <FileText className="w-6 h-6 text-[#702125]" />
                      </div>
                      <span
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        className="font-bold text-lg sm:text-xl text-gray-800"
                      >
                        {sessao.titulo}
                      </span>
                    </div>
                    <div className="bg-gray-50 group-hover:bg-gray-100 p-2 rounded-full transition-colors print:hidden">
                      <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform duration-300" />
                    </div>
                  </summary>

                  {/* Print specific title that replaces the interactive summary on paper */}
                  <div className="hidden print:block font-bold text-xl text-black border-b border-gray-300 pb-2 mb-4 print:mt-2">
                    {sessao.titulo}
                  </div>

                  <div className="p-6 sm:p-8 border-t border-gray-100 bg-gray-50/30 print:p-0 print:border-none print:bg-transparent print:break-inside-avoid print:!block">
                    <ul className="flex flex-col gap-4 print:gap-3 print:pl-4">
                      {sessao.itens.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-4 animate-in fade-in slide-in-from-left-2 duration-300 print:gap-3 print:mb-2" style={{ animationDelay: `${itemIdx * 50}ms` }}>
                          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5 print:hidden" />
                          {/* Print specific bullet point */}
                          <div className="hidden print:block w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2.5"></div>
                          <span
                            style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                            className="text-gray-700 leading-relaxed text-lg print:text-black print:text-base"
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {sessao.observacao && (
                      <div className="mt-8 bg-[#702125]/5 border border-[#702125]/20 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start print:mt-6 print:p-0 print:border-none print:bg-transparent print:block print:pl-4">
                        <div className="bg-white p-2 rounded-full shadow-sm print:hidden">
                          <Info className="w-6 h-6 text-[#702125] shrink-0" />
                        </div>
                        <div>
                          <span className="font-bold text-[#702125] block mb-2 uppercase text-sm tracking-wide print:text-black">Observação</span>
                          <span
                            style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                            className="text-gray-700 text-lg leading-relaxed print:text-black print:text-base print:italic"
                          >
                            {sessao.observacao}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </details>
              ))}

              {/* General Final Observations */}
              {docData.observacoesFinais && docData.observacoesFinais.length > 0 && (
                <div className="mt-6 bg-amber-50/80 border border-amber-200/60 rounded-3xl p-6 sm:p-8 print:mt-10 print:border-none print:bg-transparent print:p-0 print:break-inside-avoid">
                  <h4
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    className="flex items-center gap-3 font-bold text-amber-800 text-xl mb-6 print:text-black print:text-xl print:border-b print:border-gray-300 print:pb-2 print:mb-4"
                  >
                    <div className="bg-amber-100 text-amber-600 p-2 rounded-xl print:hidden">
                      <Info className="w-6 h-6" />
                    </div>
                    Informações Importantes
                  </h4>
                  <ul className="flex flex-col gap-4 print:gap-3 print:pl-4">
                    {docData.observacoesFinais.map((obs, idx) => (
                      <li key={idx} className="flex items-start gap-3 print:mb-1">
                        <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2.5 print:w-1.5 print:h-1.5 print:bg-black print:border-0"></div>
                        <span className="text-amber-900 font-['Source_Sans_Pro'] text-lg leading-relaxed print:text-black print:text-base">
                          {obs}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </section>
        </div>
      </main>
      <div className="print:hidden"><Footer /></div>
    </div>
  );
}
