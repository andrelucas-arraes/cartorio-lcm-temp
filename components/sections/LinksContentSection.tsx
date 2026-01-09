import React from 'react';

// Interface para a estrutura de um link
interface LinkItem {
  name: string;
  url: string;
}

// Interface para a categoria de links
interface LinkCategory {
  title: string;
  links: LinkItem[];
}

// Dados completos organizados por categoria
const linkCategories: LinkCategory[] = [
  {
    title: 'Tabelionato de Notas',
    links: [
      { name: 'e-Notariado', url: 'https://www.e-notariado.org.br/' },
      { name: 'Assinatura e-Not (validação)', url: 'https://assinatura.e-notariado.org.br/validate' },
      { name: 'CENSEC', url: 'https://www.censec.org.br/' },
      { name: 'Busca de Testamento', url: 'https://buscatestamento.org.br/' },
      { name: 'Busca CEP (Escrituras e Procurações)', url: 'https://buscacep.org.br/' },
      { name: 'Associação dos Notários e Registradores do Brasil (ANOREG)', url: 'https://www.anoreg.org.br/site/' },
    ],
  },
  {
    title: 'Tabelionato de Protesto',
    links: [
      { name: 'Pesquisa Protesto (CENPROT)', url: 'https://www.pesquisaprotesto.com.br/' },
    ],
  },
  {
    title: 'Registro de Imóveis',
    links: [
      { name: 'RI Digital', url: 'https://ridigital.org.br/' },
      { name: 'Registro de Imóveis do Brasil', url: 'https://www.registrodeimoveis.org.br/' },
      { name: 'Mapa do Registro de Imóveis do Brasil', url: 'https://mapa.onr.org.br/' },
      { name: 'Diário Registral', url: 'https://www.registrodeimoveis.org.br/diario-registral' },
      { name: 'Central de Indisponibilidade de Bens', url: 'https://indisponibilidade.onr.org.br/' },
      { name: 'Sistema de Gestão Fundiária do INCRA – SIGEF', url: 'https://sigef.incra.gov.br/' },
      { name: 'Instituto de Registro Imobiliário do Brasil (IRIB)', url: 'https://www.irib.org.br/' },
    ],
  },
  {
    title: 'Registro Civil das Pessoas Naturais (RCPN)',
    links: [
      { name: 'Registro Civil', url: 'https://www.registrocivil.org.br/' },
      { name: 'Transparência Registro Civil', url: 'https://transparencia.registrocivil.org.br/' },
      { name: 'Registro Civil do Brasil (ARPEN)', url: 'https://arpenbrasil.org.br/' },
    ],
  },
  {
    title: 'RTD / RCPJ',
    links: [
      { name: 'ON-RTDPJ (Institucional)', url: 'https://onrtdpj.org.br/' },
      { name: 'Central (Serviços)', url: 'https://www.rtdbrasil.org.br/' },
      { name: 'Validar certidão/registro (RTD/RCPJ)', url: 'https://www.rtdbrasil.org.br/certidaoregistro/index' },
      { name: 'Operador Nacional do RTDPJ', url: 'https://www.rtdbrasil.org.br/' },
    ],
  },
  {
    title: 'SERP',
    links: [
      { name: 'SERP - Sistema Eletrônico dos Registros Públicos', url: 'https://serp.registros.org.br/' },
    ],
  },
  {
    title: 'CNJ - Conselho Nacional de Justiça',
    links: [
      { name: 'Justiça Aberta', url: 'https://www.cnj.jus.br/corregedoriacnj/justica-aberta/' },
      { name: 'Atos Normativos (CNJ)', url: 'https://www.cnj.jus.br/atos_normativos/' },
      { name: 'Apostila da Haia (CNJ)', url: 'https://www.cnj.jus.br/poder-judiciario/relacoes-internacionais/apostila-da-haia/' },
      { name: 'Cartórios autorizados (Apostila)', url: 'https://www.cnj.jus.br/poder-judiciario/relacoes-internacionais/apostila-da-haia/cartorios-autorizados/' },
      { name: 'Validação de Apostila', url: 'https://apostil.cnj.jus.br/pt/validation' },
    ],
  },
  {
    title: 'Consultas Gerais',
    links: [
      { name: 'Receita Federal – Situação cadastral do CPF', url: 'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp' },
      { name: 'Receita Federal – Comprovante CNPJ', url: 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp' },
      { name: 'Simples Nacional – Consulta Optantes', url: 'https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21' },
      { name: 'Correios - Busca CEP', url: 'https://www.buscacep.correios.com.br/' },
    ],
  },
  {
    title: 'TJPI - Tribunal de Justiça do Piauí',
    links: [
      { name: 'Portal Extrajudicial TJPI', url: 'https://www.tjpi.jus.br/portaltjpi/vice-corregedoria/' },
      { name: 'Consulta pública do Selo Digital (TJPI)', url: 'https://www.tjpi.jus.br/portalextra/selodigital/consultaPublica' },
    ],
  },
];

const LinksContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Texto Introdutório Justificado e com Animação */}
        <div className="mb-10 animate-in fade-in duration-500 slide-in-from-bottom-4">
          <p className="text-lg text-justify hyphens-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Neste módulo disponibilizamos diversos links de sites relacionados à nossa serventia e/ou informações de legislações pertinentes.
          </p>
        </div>

        {/* Renderização das Categorias */}
        <div className="space-y-12">
          {linkCategories.map((category, index) => (
            <div key={index} className="animate-in fade-in duration-500 slide-in-from-bottom-4">
              {/* Título com a borda vermelha */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
                {category.title}
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="flex items-start">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-[#702125] transition duration-150 ease-in-out"
                    >
                      {/* Ícone com alinhamento ajustado (mt-1) */}
                      <svg className="w-5 h-5 mr-2 mt-1 text-gray-400 group-hover:text-[#702125] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      <span className="leading-snug">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LinksContentSection;