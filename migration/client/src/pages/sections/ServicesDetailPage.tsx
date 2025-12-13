import { useState } from 'react';
import { X, FileText, Home, Users, Building2, FileStack, AlertCircle } from 'lucide-react';


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
    icon: <FileText className="w-12 h-12 text-primary" />,
    description: 'Autenticação de documentos e assinaturas',
    details: [
      'Autenticação de documentos',
      'Reconhecimento de firma',
      'Autenticação de cópias',
      'Legalização de documentos',
      'Apostila de Haia',
    ],
  },
  {
    id: 'registro-imoveis',
    title: 'Registro de Imóveis',
    icon: <Home className="w-12 h-12 text-primary" />,
    description: 'Registro e transferência de propriedades',
    details: [
      'Registro de imóveis',
      'Transferência de propriedade',
      'Hipotecas e penhoras',
      'Averbações',
      'Consulta de registros',
    ],
  },
  {
    id: 'registro-civil-naturais',
    title: 'Registro Civil das Pessoas Naturais',
    icon: <Users className="w-12 h-12 text-primary" />,
    description: 'Registro de nascimentos, casamentos e óbitos',
    details: [
      'Registro de nascimento',
      'Registro de casamento',
      'Registro de óbito',
      'Averbações',
      'Certidões',
    ],
  },
  {
    id: 'registro-civil-juridicas',
    title: 'Registro Civil das Pessoas Jurídicas',
    icon: <Building2 className="w-12 h-12 text-primary" />,
    description: 'Registro de empresas e organizações',
    details: [
      'Registro de empresas',
      'Registro de associações',
      'Registro de fundações',
      'Alterações de registros',
      'Certidões',
    ],
  },
  {
    id: 'registro-titulos-documentos',
    title: 'Registro de Títulos e Documentos',
    icon: <FileStack className="w-12 h-12 text-primary" />,
    description: 'Registro de contratos e documentos diversos',
    details: [
      'Registro de contratos',
      'Registro de procurações',
      'Registro de documentos diversos',
      'Averbações',
      'Certidões',
    ],
  },
  {
    id: 'tabelionato-protesto',
    title: 'Tabelionato de Protesto de Títulos',
    icon: <AlertCircle className="w-12 h-12 text-primary" />,
    description: 'Protesto de títulos e documentos de dívida',
    details: [
      'Protesto de cheques',
      'Protesto de duplicatas',
      'Protesto de promissórias',
      'Protesto de letras de câmbio',
      'Certidões de protesto',
    ],
  },
];

export default function ServicesDetailPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-bold text-3xl text-primary text-center mb-16"
        >
          Nossos Serviços
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white border border-border rounded-lg p-8 text-left hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-bold text-lg text-primary mb-2"
              >
                {service.title}
              </h3>
              <p
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                className="text-sm text-foreground/70"
              >
                {service.description}
              </p>
              <p className="text-xs text-primary mt-4 font-semibold">Clique para mais detalhes →</p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-primary text-primary-foreground p-6 flex items-center justify-between">
              <div>
                <div className="mb-2">{selectedService.icon}</div>
                <h3
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="font-bold text-xl"
                >
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-white hover:bg-white/20 p-2 rounded transition-colors"
                aria-label="Fechar modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <p
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                className="text-foreground mb-6"
              >
                {selectedService.description}
              </p>

              <h4
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-bold text-primary mb-4"
              >
                Detalhes:
              </h4>

              <ul
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                className="space-y-2"
              >
                {selectedService.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Botão de ação */}
              <button
                onClick={() => setSelectedService(null)}
                className="w-full mt-6 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Solicitar Informações
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
