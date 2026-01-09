import React, { useState } from 'react';
import { X, FileText, Home, Users, Building2, FileStack, DollarSign } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 'tabelionato-notas',
    title: 'Tabelionato de Notas',
    icon: <FileText className="w-12 h-12 text-[#702125]" />,
    description: 'Atos notariais com autenticidade e segurança jurídica.',
    details: [
      'Escrituras públicas',
      'Procurações públicas',
      'Testamentos públicos',
      'Inventário e partilha extrajudicial',
      'Divórcio, separação e dissolução de união estável',
      'Adjudicação compulsória',
      'Reconhecimento de firma',
      'Autenticação de cópias',
      'Atas notariais',
      'Reconhecimento de paternidade',
      'Apostilamento (Convenção da Haia)',
      'Certidões em geral',
    ],
  },
  {
    id: 'registro-imoveis',
    title: 'Registro de Imóveis',
    icon: <Home className="w-12 h-12 text-[#702125]" />,
    description: 'Registro e regularização de imóveis.',
    details: [
      'Abertura de matrícula e registro de títulos',
      'Registros em geral',
      'Averbações',
      'Registro de garantias',
      'Usucapião extrajudicial',
      'Regularização Fundiária Urbana e Rural (REURB)',
      'Retificação de área',
      'Georreferenciamento e certificação SIGEF',
      'Loteamentos, desmembramentos e incorporações',
      'Condomínio edilício',
      'Cédulas e contratos com garantia real',
      'Expedição de certidões imobiliárias',
    ],
  },
  {
    id: 'registro-civil-naturais',
    title: 'Registro Civil das Pessoas Naturais',
    icon: <Users className="w-12 h-12 text-[#702125]" />,
    description: 'Registro de nascimentos, casamentos e óbitos',
    details: [
      'Registro de nascimento',
      'Registro de casamento',
      'Registro de óbito',
      'Averbações e anotações',
      'Retificações',
      'Mudança de nome e gênero',
      'Alteração de prenome',
      'Inclusão ou exclusão de sobrenome',
      'Traslados e transcrições de registros do exterior',
      'Emissão de certidões',
    ],
  },
  {
    id: 'registro-civil-juridicas',
    title: 'Registro Civil das Pessoas Jurídicas',
    icon: <Building2 className="w-12 h-12 text-[#702125]" />,
    description: 'Registro de associações, entidades e fundações.',
    details: [
      'Registro de atos constitutivos',
      'Registro de alterações estatutárias',
      'Registro de atas e demais documentos internos',
      'Registro de dissolução ou extinção',
      'Certidões',
    ],
  },
  {
    id: 'registro-titulos-documentos',
    title: 'Registro de Títulos e Documentos',
    icon: <FileStack className="w-12 h-12 text-[#702125]" />,
    description: 'Registro e conservação de documentos diversos.',
    details: [
      'Registro de contratos e documentos',
      'Notificação e interpelação extrajudicial',
      'Registro de documentos diversos',
      'Registro de documentos estrangeiros',
      'Certidões e traslados de documentos registrados',
    ],
  },
  {
    id: 'tabelionato-protesto',
    title: 'Tabelionato de Protesto de Títulos',
    icon: <DollarSign className="w-12 h-12 text-[#702125]" />,
    description: 'Protesto de títulos e documentos de dívida.',
    details: [
      'Protesto de títulos e outros documentos de dívida',
      'Cancelamento de protesto',
      'Sustação e desistência do protesto',
      'Certidões de protesto',
      'Pesquisa e consulta de protestos',
      'Procedimentos de cobrança via protesto',
    ],
  },
];

export default function ServicesDetailPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Título */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-bold text-2xl sm:text-3xl text-[#702125] text-center mb-8 sm:mb-12 md:mb-16"
        >
          Nossos Serviços
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white border border-border rounded-lg p-6 sm:p-8 text-left hover:shadow-lg hover:border-[#702125] transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-bold text-base sm:text-lg text-[#702125] mb-2"
              >
                {service.title}
              </h3>
              <p
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                className="text-sm text-foreground/70"
              >
                {service.description}
              </p>
              <p className="text-xs text-[#702125] mt-4 font-semibold group-hover:underline">
                Clique para mais detalhes →
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com a cor da marca */}
            <div className="bg-[#702125] text-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="bg-white/20 p-3 rounded-xl flex-shrink-0 text-white [&_svg]:w-12 [&_svg]:h-12 [&_svg]:text-white">
                    {React.cloneElement(selectedService.icon as React.ReactElement<{ className?: string }>, { className: "w-12 h-12 text-white" })}                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                      className="font-bold text-xl sm:text-2xl mb-2 text-white"
                    >
                      {selectedService.title}
                    </h3>
                    <p
                      style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                      className="text-white/90 text-sm sm:text-base"
                    >
                      {selectedService.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white hover:bg-white/20 active:bg-white/30 p-2 rounded-lg transition-all duration-200 flex-shrink-0 border border-white/20 hover:border-white/40"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="mb-6">
                <h4
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="font-bold text-lg text-[#702125] mb-4 flex items-center gap-2"
                >
                  <span className="w-1 h-6 bg-[#702125] rounded-full"></span>
                  Serviços Incluídos
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {selectedService.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-[#702125]/5 rounded-lg hover:bg-[#702125]/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#702125] text-white flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span
                      style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                      className="text-sm sm:text-base text-foreground flex-1"
                    >
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <a
                  href="#contato"
                  onClick={() => setSelectedService(null)}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="flex-1 px-6 py-3 bg-[#702125] text-white font-semibold rounded-lg hover:bg-[#702125]/90 transition-all duration-200 text-center shadow-md hover:shadow-lg"
                >
                  Solicitar Informações
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="px-6 py-3 border-2 border-gray-300 text-foreground font-semibold rounded-lg hover:border-[#702125] hover:text-[#702125] transition-all duration-200"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}