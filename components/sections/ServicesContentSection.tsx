import React from 'react';

// Interface para tipagem dos dados
interface ServiceSection {
  title: string;
  description: string;
  items: string[];
  noteTitle: string;
  noteContent: string;
}

const servicesData: ServiceSection[] = [
  {
    title: "Tabelionato de Notas",
    description: "Responsável por lavrar atos notariais, conferindo autenticidade, segurança jurídica e eficácia aos documentos.",
    items: [
      "Escrituras públicas (compra e venda, doação, permuta, dação em pagamento, cessões, confissão de dívida, pactos, união estável)",
      "Procurações públicas (inclusive substabelecimentos e revogações)",
      "Testamentos públicos e aprovação de testamento cerrado",
      "Inventário e partilha extrajudicial",
      "Divórcio, separação e dissolução de união estável",
      "Adjudicação compulsória",
      "Reconhecimento de firma (por semelhança e por autenticidade)",
      "Autenticação de cópias",
      "Atas notariais (constatação de fatos, inclusive conteúdo digital)",
      "Reconhecimento de paternidade (via escritura/ato notarial)",
      "Apostilamento (Convenção da Haia), quando habilitado",
      "Certidões em geral"
    ],
    noteTitle: "Nota sobre Documentação:",
    noteContent: "A documentação varia conforme o tipo de ato. Entre em contato conosco para orientações específicas sobre o seu caso."
  },
  {
    title: "Tabelionato de Protestos",
    description: "Responsável pelo protesto de títulos e outros documentos de dívida, conferindo publicidade ao inadimplemento.",
    items: [
      "Protesto de títulos e outros documentos de dívida (apontamento, intimação e lavratura)",
      "Cancelamento de protesto (por pagamento/anuência/ordem judicial)",
      "Sustação e desistência do protesto (conforme determinação/ordem competente)",
      "Certidões de protesto (negativa, positiva, de inteiro teor etc.)",
      "Pesquisa/consulta de protestos e informação ao credor/devedor",
      "Procedimentos de cobrança via protesto (intimação e controle de prazos)"
    ],
    noteTitle: "Informações Importantes:",
    noteContent: "O protesto é um ato formal que comprova a inadimplência e pode ser utilizado como meio de cobrança judicial."
  },
  {
    title: "Registro de Imóveis",
    description: "Responsável pelo registro de todos os atos relacionados a imóveis, garantindo publicidade, autenticidade, segurança e eficácia dos atos jurídicos.",
    items: [
      "Abertura de matrícula e registro de títulos (compra e venda, doação, aquisição por inventário, permuta, adjudicação, arrematação etc.)",
      "Registros em geral (bem de família, penhor, servidões, usufruto, compromisso de compra e venda, etc.)",
      "Averbações (construção, demolição, estado civil, óbito, retificações, cancelamentos, penhoras, etc.)",
      "Registro de garantias (hipoteca, alienação fiduciária, anticrese, entre outras)",
      "Usucapião extrajudicial e Regularização Fundiária Urbana e Rural - REURB",
      "Retificação de área (administrativa e judicial)",
      "Georreferenciamento / certificação SIGEF",
      "Loteamentos, desmembramentos e incorporações",
      "Condomínio edilício (instituição, convenção, especificação)",
      "Cédulas/contratos com garantia real com registro na matrícula",
      "Expedição de certidões imobiliárias (matrícula/inteiro teor, ônus, ações reais, busca etc.)"
    ],
    noteTitle: "Informações Importantes:",
    noteContent: "Todo imóvel deve estar devidamente registrado para garantir a segurança jurídica nas transações imobiliárias."
  },
  {
    title: "Registro Civil das Pessoas Naturais (RCPN)",
    description: "Responsável pelo registro dos principais atos da vida civil das pessoas.",
    items: [
      "Registro de nascimento",
      "Registro de casamento (habilitação, celebração, conversão de união estável)",
      "Registro de óbito",
      "Averbações e anotações (divórcio, separação, óbito, alterações judiciais)",
      "Retificações (administrativas/judiciais)",
      "Mudança de nome e gênero (procedimento extrajudicial)",
      "Alteração de prenome e Inclusão ou exclusão de sobrenome",
      "Traslados/transcrições de registros do exterior",
      "Emissão de certidões (breve relato em 2ª via, inteiro teor etc.)"
    ],
    noteTitle: "Nota sobre Documentação:",
    noteContent: "Para cada tipo de registro, é necessária documentação específica. Consulte-nos para mais informações."
  },
  {
    title: "Registro Civil de Pessoas Jurídicas (RCPJ)",
    description: "Responsável pelo registro de entidades sem fins lucrativos e fundações.",
    items: [
      "Registro de atos constitutivos de associações, fundações, organizações religiosas, partidos políticos e demais PJ",
      "Registro de alterações estatutárias (eleições/posses, reformas, mudança de sede, denominação etc.)",
      "Registro de atas e demais documentos internos",
      "Registro de dissolução/extinção e designação de liquidantes",
      "Certidões (existência, inteiro teor, breve relato etc.)"
    ],
    noteTitle: "Informações:",
    noteContent: "O registro confere personalidade jurídica às entidades, permitindo que atuem legalmente."
  },
  {
    title: "Registro de Títulos e Documentos (RTD)",
    description: "Responsável pelo registro de documentos e títulos não atribuídos a outros registros, garantindo sua validade jurídica.",
    items: [
      "Registro de contratos e documentos (locação, comodato, prestação de serviços, confissão de dívida, etc.)",
      "Notificação e interpelação extrajudicial (com comprovação de entrega)",
      "Registro de documentos diversos (declarações, regulamentos, termos, laudos etc.)",
      "Registro de documentos estrangeiros",
      "Certidões e traslados de documentos registrados"
    ],
    noteTitle: "Finalidade:",
    noteContent: "O registro confere publicidade, autenticidade e conservação aos documentos registrados."
  }
];

const ServicesContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div key={index} className="animate-in fade-in duration-500 slide-in-from-bottom-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
                {service.title}
              </h2>

              {/* Descrição */}
              <p className="text-lg text-justify hyphens-auto text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Principais Serviços:
                </h3>
                {/* Lista */}
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-justify hyphens-auto leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box de Informação */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {service.noteTitle}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-justify hyphens-auto">
                  {service.noteContent}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesContentSection;