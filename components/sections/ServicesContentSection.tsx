import React from 'react';

// Componente para a Seção de Conteúdo de Nossos Serviços
const ServicesContentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="space-y-12">
          
          {/* 3.1 Tabelionato de Notas */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Tabelionato de Notas
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Responsável por lavrar atos notariais, conferindo autenticidade, segurança jurídica e eficácia aos documentos.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Principais Serviços:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                <li>Escrituras públicas (compra e venda, doação, permuta, dação em pagamento, cessões, confissão de dívida, pactos, união estável)</li>
                <li>Procurações públicas (inclusive substabelecimentos e revogações)</li>
                <li>Testamentos públicos e aprovação de testamento cerrado</li>
                <li>Inventário e partilha extrajudicial</li>
                <li>Divórcio, separação e dissolução de união estável</li>
                <li>Adjudicação compulsória</li>
                <li>Reconhecimento de firma (por semelhança e por autenticidade)</li>
                <li>Autenticação de cópias</li>
                <li>Atas notariais (constatação de fatos, inclusive conteúdo digital)</li>
                <li>Reconhecimento de paternidade (via escritura/ato notarial)</li>
                <li>Apostilamento (Convenção da Haia), quando habilitado</li>
                <li>Certidões em geral</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Nota sobre Documentação:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A documentação varia conforme o tipo de ato. Entre em contato conosco para orientações específicas sobre o seu caso.
              </p>
            </div>
          </div>

          {/* 3.2 Tabelionato de Protestos */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Tabelionato de Protestos
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Responsável pelo protesto de títulos e outros documentos de dívida, conferindo publicidade ao inadimplemento.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Principais Serviços:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                <li>Protesto de títulos e outros documentos de dívida (apontamento, intimação e lavratura)</li>
                <li>Cancelamento de protesto (por pagamento/anuência/ordem judicial)</li>
                <li>Sustação e desistência do protesto (conforme determinação/ordem competente)</li>
                <li>Certidões de protesto (negativa, positiva, de inteiro teor etc.)</li>
                <li>Pesquisa/consulta de protestos e informação ao credor/devedor</li>
                <li>Procedimentos de cobrança via protesto (intimação e controle de prazos)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Informações Importantes:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                O protesto é um ato formal que comprova a inadimplência e pode ser utilizado como meio de cobrança judicial.
              </p>
            </div>
          </div>

          {/* 3.3 Registro de Imóveis */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Registro de Imóveis
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Responsável pelo registro de todos os atos relacionados a imóveis, garantindo publicidade, autenticidade, segurança e eficácia dos atos jurídicos.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Principais Serviços:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                <li>Abertura de matrícula e registro de títulos (compra e venda, doação, aquisição por inventário, permuta, adjudicação, arrematação etc.)</li>
                <li>Registros em geral (bem de família, penhor, servidões, usufruto, compromisso de compra e venda, etc.)</li>
                <li>Averbações (construção, demolição, estado civil, óbito, retificações, cancelamentos, penhoras, etc.)</li>
                <li>Registro de garantias (hipoteca, alienação fiduciária, anticrese, entre outras)</li>
                <li>Usucapião extrajudicial e Regularização Fundiária Urbana e Rural - REURB</li>
                <li>Retificação de área (administrativa e judicial)</li>
                <li>Georreferenciamento / certificação SIGEF</li>
                <li>Loteamentos, desmembramentos e incorporações</li>
                <li>Condomínio edilício (instituição, convenção, especificação)</li>
                <li>Cédulas/contratos com garantia real com registro na matrícula</li>
                <li>Expedição de certidões imobiliárias (matrícula/inteiro teor, ônus, ações reais, busca etc.)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Informações Importantes:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Todo imóvel deve estar devidamente registrado para garantir a segurança jurídica nas transações imobiliárias.
              </p>
            </div>
          </div>

          {/* 3.4 Registro Civil das Pessoas Naturais (RCPN) */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Registro Civil das Pessoas Naturais (RCPN)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Responsável pelo registro dos principais atos da vida civil das pessoas.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Principais Serviços:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                <li>Registro de nascimento</li>
                <li>Registro de casamento (habilitação, celebração, conversão de união estável)</li>
                <li>Registro de óbito</li>
                <li>Averbações e anotações (divórcio, separação, óbito, alterações judiciais)</li>
                <li>Retificações (administrativas/judiciais)</li>
                <li>Mudança de nome e gênero (procedimento extrajudicial)</li>
                <li>Alteração de prenome e Inclusão ou exclusão de sobrenome</li>
                <li>Traslados/transcrições de registros do exterior</li>
                <li>Emissão de certidões (breve relato em 2ª via, inteiro teor etc.)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Nota sobre Documentação:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Para cada tipo de registro, é necessária documentação específica. Consulte-nos para mais informações.
              </p>
            </div>
          </div>

          {/* 3.5 Registro Civil de Pessoas Jurídicas (RCPJ) */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Registro Civil de Pessoas Jurídicas (RCPJ)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Responsável pelo registro de entidades sem fins lucrativos e fundações.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Principais Serviços:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                <li>Registro de atos constitutivos de associações, fundações, organizações religiosas, partidos políticos e demais PJ</li>
                <li>Registro de alterações estatutárias (eleições/posses, reformas, mudança de sede, denominação etc.)</li>
                <li>Registro de atas e demais documentos internos</li>
                <li>Registro de dissolução/extinção e designação de liquidantes</li>
                <li>Certidões (existência, inteiro teor, breve relato etc.)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Informações:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                O registro confere personalidade jurídica às entidades, permitindo que atuem legalmente.
              </p>
            </div>
          </div>

          {/* 3.6 Registro de Títulos e Documentos (RTD) */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-[#702125]">
              Registro de Títulos e Documentos (RTD)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Responsável pelo registro de documentos e títulos não atribuídos a outros registros, garantindo sua validade jurídica.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Principais Serviços:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-4">
                <li>Registro de contratos e documentos (locação, comodato, prestação de serviços, confissão de dívida, etc.)</li>
                <li>Notificação e interpelação extrajudicial (com comprovação de entrega)</li>
                <li>Registro de documentos diversos (declarações, regulamentos, termos, laudos etc.)</li>
                <li>Registro de documentos estrangeiros</li>
                <li>Certidões e traslados de documentos registrados</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Finalidade:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                O registro confere publicidade, autenticidade e conservação aos documentos registrados.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesContentSection;