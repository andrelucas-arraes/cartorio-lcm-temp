import React from 'react';

// Componente para a Seção de Conteúdo de Nossos Serviços
const ServicesContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Título Principal */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Excelência e segurança jurídica em todos os serviços cartorários
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Tabelionato de Notas */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Tabelionato de Notas
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Responsável por lavrar atos notariais, conferindo autenticidade, segurança jurídica e eficácia aos documentos.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Principais Serviços:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Escrituras públicas de compra e venda de imóveis</li>
              <li>Escrituras de doação</li>
              <li>Procurações públicas</li>
              <li>Testamentos</li>
              <li>Reconhecimento de firmas (por autenticidade e semelhança)</li>
              <li>Autenticação de documentos</li>
              <li>Atas notariais</li>
              <li>Escrituras de união estável</li>
              <li>Inventário e partilha extrajudicial</li>
              <li>Divórcio consensual extrajudicial</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Documentação Necessária:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A documentação varia conforme o tipo de ato. Entre em contato conosco para orientações específicas sobre o seu caso.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-12"></div>

        {/* Registro de Imóveis */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Registro de Imóveis
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Responsável pelo registro de todos os atos relacionados a imóveis, garantindo publicidade, autenticidade, segurança e eficácia dos atos jurídicos.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Principais Serviços:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Registro de compra e venda de imóveis</li>
              <li>Registro de hipoteca e alienação fiduciária</li>
              <li>Averbações (construção, demolição, alterações)</li>
              <li>Registro de loteamentos e desmembramentos</li>
              <li>Certidões de propriedade e de ônus reais</li>
              <li>Registro de penhoras e arrestos</li>
              <li>Usucapião extrajudicial</li>
              <li>Retificação de registro</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Informações Importantes:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Todo imóvel deve estar devidamente registrado para garantir a segurança jurídica nas transações imobiliárias.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-12"></div>

        {/* Registro Civil das Pessoas Naturais */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Registro Civil das Pessoas Naturais
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Responsável pelo registro dos principais atos da vida civil das pessoas.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Principais Serviços:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Registro de nascimento</li>
              <li>Registro de casamento</li>
              <li>Registro de óbito</li>
              <li>Habilitação para casamento</li>
              <li>Emissão de certidões (nascimento, casamento e óbito)</li>
              <li>Averbações (divórcio, separação, adoção)</li>
              <li>Retificação de registro civil</li>
              <li>Registro tardio de nascimento</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Documentação:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Para cada tipo de registro, é necessária documentação específica. Consulte-nos para mais informações.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-12"></div>

        {/* Registro Civil das Pessoas Jurídicas */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Registro Civil das Pessoas Jurídicas
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Responsável pelo registro de entidades sem fins lucrativos e fundações.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Principais Serviços:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Registro de associações</li>
              <li>Registro de fundações</li>
              <li>Registro de partidos políticos</li>
              <li>Registro de organizações religiosas</li>
              <li>Registro de sindicatos</li>
              <li>Averbações de alterações estatutárias</li>
              <li>Registro de atas e estatutos</li>
              <li>Emissão de certidões</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Informações:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              O registro confere personalidade jurídica às entidades, permitindo que atuem legalmente.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-12"></div>

        {/* Registro de Títulos e Documentos */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Registro de Títulos e Documentos
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Responsável pelo registro de documentos e títulos não atribuídos a outros registros, garantindo sua validade jurídica.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Principais Serviços:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Registro de contratos em geral</li>
              <li>Registro de documentos particulares</li>
              <li>Registro de procurações particulares</li>
              <li>Registro de notificações e interpelações</li>
              <li>Registro de penhora de veículos</li>
              <li>Registro de alienação fiduciária de bens móveis</li>
              <li>Averbações diversas</li>
              <li>Emissão de certidões</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Finalidade:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              O registro confere publicidade, autenticidade e conservação aos documentos registrados.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-12"></div>

        {/* Tabelionato de Protesto de Títulos */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Tabelionato de Protesto de Títulos
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Responsável pelo protesto de títulos e outros documentos de dívida, conferindo publicidade ao inadimplemento.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Principais Serviços:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Protesto de títulos (cheques, duplicatas, notas promissórias)</li>
              <li>Protesto de contratos e documentos de dívida</li>
              <li>Cancelamento de protesto</li>
              <li>Sustação de protesto</li>
              <li>Desistência de protesto</li>
              <li>Emissão de certidões de protesto</li>
              <li>Certidões negativas de protesto</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Informações Importantes:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              O protesto é um ato formal que comprova a inadimplência e pode ser utilizado como meio de cobrança judicial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContentSection;

