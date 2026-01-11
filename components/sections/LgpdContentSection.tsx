import React from 'react';
import { MessageCircle } from 'lucide-react';

// 1. Definição da Interface para os dados das seções
interface LgpdSectionData {
  title: string;
  content: string | string[];
}

// 2. Base de Dados do Conteúdo (Texto estático da LGPD)
const lgpdData: LgpdSectionData[] = [
  {
    title: "Nosso Compromisso com a Proteção de Dados",
    content: "O Cartório Luciana Carrilho de Moraes Marinho está comprometido com a proteção de dados pessoais e atua em conformidade com a Lei nº 13.709/2018 (LGPD)."
  },
  {
    title: "Coleta e Uso de Dados",
    content: [
      "Coletamos e utilizamos dados pessoais exclusivamente para:",
      "A prestação dos serviços cartorários.",
      "Cumprimento de obrigações legais e regulatórias.",
      "O exercício regular de direitos em processos judiciais, administrativos ou arbitrais."
    ]
  },
  {
    title: "Segurança da Informação",
    content: "Implementamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito."
  },
  {
    title: "Seus Direitos (Titular dos Dados)",
    content: [
      "De acordo com a LGPD, você tem direito a:",
      "Confirmar a existência de tratamento de dados.",
      "Acessar seus dados pessoais.",
      "Corrigir dados incompletos, inexatos ou desatualizados.",
      "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.",
      "Solicitar a portabilidade dos dados.",
      "Obter informações sobre o compartilhamento de dados.",
      "Revogar o consentimento."
    ]
  },
  {
    title: "Compartilhamento de Dados",
    content: "Os dados pessoais podem ser compartilhados com autoridades competentes, quando necessário para o cumprimento de obrigação legal ou regulatória, ou mediante ordem judicial."
  },
  {
    title: "Retenção de Dados",
    content: "Os dados pessoais são mantidos pelo período necessário para o cumprimento das finalidades para as quais foram coletados, respeitando os prazos legais de guarda de documentos estabelecidos pela legislação aplicável (Provimentos e Leis de Registros Públicos)."
  },
  {
    title: "Canal de Atendimento LGPD",
    content: "Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, entre em contato conosco através dos nossos canais de atendimento."
  }
];

// Componente Principal da Seção de Conteúdo LGPD
const LgpdContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* 3. Introdução Geral */}
        <div className="mb-10 animate-in fade-in duration-500 slide-in-from-bottom-4">
          <p className="text-lg text-justify hyphens-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Informações sobre como tratamos seus dados pessoais e quais são seus direitos conforme a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>

        {/* 4. Renderização Dinâmica do Conteúdo (Loop) */}
        <div className="space-y-12 mb-16">
          {lgpdData.map((section, index) => (
            <div key={index} className="animate-in fade-in duration-500 slide-in-from-bottom-4">

              {/* Título da Seção com detalhe visual na borda esquerda */}
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
                {section.title}
              </h2>

              {/* 5. Lógica Condicional: Verifica se o conteúdo é Texto ou Lista */}
              {Array.isArray(section.content) ? (
                // Se for Array: Renderiza parágrafo introdutório + Lista de itens
                <>
                  <p className="text-lg text-justify hyphens-auto text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {section.content[0]}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                    {section.content.slice(1).map((item, itemIndex) => (
                      <li key={itemIndex} className="text-justify hyphens-auto leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Se for String: Renderiza apenas um parágrafo simples
                <p className="text-lg text-justify hyphens-auto text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* 6. Rodapé: Botão de Ação (WhatsApp) */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-gray-200 dark:border-gray-700 animate-in fade-in duration-500 slide-in-from-bottom-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Ainda tem dúvidas sobre seus dados?
          </h3>
          <a
            href="https://wa.me/5586988718166?text=Olá,%20gostaria%20de%20tirar%20dúvidas%20sobre%20a%20LGPD"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-[#511C23] text-white text-lg font-semibold rounded-full hover:bg-[#5a1a1d] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {/* Ícone do WhatsApp SVG */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>

            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default LgpdContentSection;