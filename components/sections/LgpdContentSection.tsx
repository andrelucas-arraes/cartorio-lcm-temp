import React from 'react';
import { MessageCircle } from 'lucide-react'; 

interface LgpdSectionData {
  title: string;
  content: string | string[];
}

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

const LgpdContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Introdução */}
        <div className="mb-10 animate-in fade-in duration-500 slide-in-from-bottom-4">
          <p className="text-lg text-justify hyphens-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Informações sobre como tratamos seus dados pessoais e quais são seus direitos conforme a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-12 mb-16">
          {lgpdData.map((section, index) => (
            <div key={index} className="animate-in fade-in duration-500 slide-in-from-bottom-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
                {section.title}
              </h2>

              {Array.isArray(section.content) ? (
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
                <p className="text-lg text-justify hyphens-auto text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Botão de WhatsApp */}
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
            <MessageCircle className="w-6 h-6" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default LgpdContentSection;