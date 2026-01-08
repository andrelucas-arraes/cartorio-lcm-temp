import React from 'react';

// Componente para a Seção de Conteúdo LGPD
const LgpdContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Introdução / Subtítulo Geral */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Informações sobre como tratamos seus dados pessoais e quais são seus direitos conforme a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>

        <div className="space-y-12">
          
          {/* 3.1 Nosso Compromisso */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Nosso Compromisso com a Proteção de Dados
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              O Cartório Luciana Carrilho de Moraes Marinho está comprometido com a proteção de dados pessoais e atua em conformidade com a Lei nº 13.709/2018 (LGPD).
            </p>
          </div>

          {/* 3.2 Coleta e Uso de Dados */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Coleta e Uso de Dados
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Coletamos e utilizamos dados pessoais exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>A prestação dos serviços cartorários.</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
              <li>O exercício regular de direitos em processos judiciais, administrativos ou arbitrais.</li>
            </ul>
          </div>

          {/* 3.3 Segurança da Informação */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Segurança da Informação
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
            </p>
          </div>

          {/* 3.4 Seus Direitos */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Seus Direitos (Titular dos Dados)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Solicitar a portabilidade dos dados.</li>
              <li>Obter informações sobre o compartilhamento de dados.</li>
              <li>Revogar o consentimento.</li>
            </ul>
          </div>

          {/* 3.5 Compartilhamento de Dados */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Compartilhamento de Dados
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Os dados pessoais podem ser compartilhados com autoridades competentes, quando necessário para o cumprimento de obrigação legal ou regulatória, ou mediante ordem judicial.
            </p>
          </div>

          {/* 3.6 Retenção de Dados */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Retenção de Dados
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Os dados pessoais são mantidos pelo período necessário para o cumprimento das finalidades para as quais foram coletados, respeitando os prazos legais de guarda de documentos estabelecidos pela legislação aplicável (Provimentos e Leis de Registros Públicos).
            </p>
          </div>

          {/* 3.7 Canal de Atendimento LGPD */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Canal de Atendimento LGPD
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, entre em contato conosco através dos nossos canais de atendimento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LgpdContentSection;