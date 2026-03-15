import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ActionSection from '@/components/sections/ActionSection';
import FaqList from '@/components/sections/FaqList';

// Dados do FAQ
const faqs = [
  {
    id: "item-1",
    question: "Quais os documentos necessários para casar no civil em Alto Longá?",
    answer: "Para dar entrada no casamento civil, os noivos solteiros precisam apresentar: Certidão de Nascimento original e atualizada (emitida há no máximo 90 dias), RG ou CNH originais, CPF, e os mesmos documentos de duas testemunhas maiores de 18 anos. Caso algum dos noivos seja divorciado ou viúvo, será necessário apresentar a Certidão de Casamento com averbação de divórcio ou a Certidão de Óbito do ex-cônjuge. Recomendamos que o casal compareça ao cartório pelo menos 30 dias antes da data desejada."
  },
  {
    id: "item-2",
    question: "Como fazer inventário extrajudicial rápido em Alto Longá?",
    answer: "O inventário extrajudicial é muito mais ágil que a via judicial e pode ser feito inteiramente em nosso Cartório se cumprir os seguintes requisitos: todos os herdeiros devem ser maiores e capazes, deve haver consenso (acordo) entre eles sobre a divisão dos bens, o falecido não pode ter deixado testamento (ou, se houver, com prévia autorização judicial), e é obrigatória a participação de um advogado. Com toda a documentação reunida (certidões negativas, matrículas dos imóveis e documentos pessoais), a escritura pode ser lavrada em poucos dias."
  },
  {
    id: "item-3",
    question: "Qual o valor de uma escritura pública de imóvel no Piauí?",
    answer: "Os valores dos atos notariais, incluindo escrituras de compra e venda de imóveis, são tabelados por lei estadual em todo o Piauí (Tabela de Emolumentos do TJ-PI). O valor da escritura varia progressivamente conforme o valor venal do imóvel ou o valor do negócio (o que for maior). Para um orçamento exato, você pode entrar em contato com nossa equipe via WhatsApp enviando a guia de ITBI ou o valor de avaliação do bem."
  },
  {
    id: "item-4",
    question: "Como registrar um recém-nascido e quais os prazos?",
    answer: "O registro de nascimento e a emissão da primeira via da certidão são totalmente gratuitos. O prazo legal para o pai registrar é de 15 dias após o nascimento. A mãe tem até 45 dias no total. Os documentos necessários são: a via amarela da DNV (Declaração de Nascido Vivo) entregue pelo hospital, os documentos pessoais (RG/CPF) dos pais e, caso sejam casados no civil, a Certidão de Casamento. O registro é rápido e fundamental para a cidadania da criança."
  },
  {
    id: "item-5",
    question: "Recebi um aviso de protesto. O que eu devo fazer?",
    answer: "Trata-se de uma cobrança formalizada. Você deve comparecer ao Cartório LCM munido do seu documento de identificação original e o aviso de protesto. Caso o título ainda esteja no prazo (geralmente 3 dias úteis), você pode realizar o pagamento do valor da dívida junto ao balcão para evitar a negativação. Se o título já tiver sido protestado, será necessário pagar o credor diretamente para obter a carta de anuência e, depois, dar entrada no cancelamento aqui no cartório."
  },
  {
    id: "item-6",
    question: "Vocês fazem autenticação de assinatura (reconhecimento de firma)?",
    answer: "Sim! O reconhecimento de firma garante a autoria de uma assinatura em um documento. Temos o reconhecimento por semelhança (comparamos a assinatura do documento com a que temos em seu cartão de assinaturas arquivado conosco) e por autenticidade (você assina o documento na presença do tabelião). Para abrir firma (fazer seu cartão de assinaturas), basta trazer seu RG original, CPF e Certidão de Casamento (caso tenha mudado de nome)."
  },
  {
    id: "item-7",
    question: "É possível emitir uma segunda via de certidão de nascimento ou casamento?",
    answer: "Sim. A emissão de segunda via é um serviço muito procurado e pode ser feito de forma rápida. Para as pessoas registradas no nosso cartório de Alto Longá, o documento é impresso na hora. E graças ao sistema CRC (Central de Informações de Registro Civil), também conseguimos solicitar certidões de nascimento, casamento ou óbito registradas em quase qualquer outro cartório do país e imprimi-las fisicamente aqui para você, pagando-se os emolumentos legais."
  },
  {
    id: "item-8",
    question: "Quero passar um imóvel para os meus filhos. Qual escritura devo fazer?",
    answer: "A depender do caso, você precisará fazer uma Escritura Pública de Doação. Assim como o inventário e a compra e venda, ela também é uma escritura notarial. Você pode transferir doando com 'reserva de usufruto' (ou seja, você doa pros filhos o direito, mas continua tendo o controle vitalício de morar ou alugar o local). É indispensável apresentar pagamento do imposto doação (ITCMD), emitido pela SEFAZ-PI, além de todas as certidões pertinentes do imóvel."
  },
  {
    id: "item-9",
    question: "Quero me divorciar. Posso fazer isso direto no cartório em Alto Longá?",
    answer: "Sim. O Divórcio Extrajudicial é possível e muito mais rápido que o judicial, desde que não haja filhos menores de idade ou incapazes e que exista consenso entre o casal sobre a separação e a partilha de eventuais bens. É obrigatória a assistência de um advogado (ou defensor público) para assinar a escritura junto com as partes no cartório."
  },
  {
    id: "item-10",
    question: "Como funciona a Procuração Pública e quando devo usá-la?",
    answer: "A Procuração Pública é o documento formal lavrado em cartório onde você autoriza outra pessoa de sua confiança a agir em seu nome de forma legal. Ela é amplamente utilizada para compra e venda de imóveis, representação em bancos, INSS ou em ações judiciais. Para fazê-la, você precisa comparecer ao nosso cartório com seu RG ou CNH (originais), CPF, certidão de estado civil e os dados pessoais da pessoa para quem passará a procuração (o procurador)."
  },
  {
    id: "item-11",
    question: "Para que serve o 'Apostilamento da Haia'? Vocês fazem isso?",
    answer: "O Apostilamento da Haia é um certificado de autenticidade emitido por cartórios brasileiros que garante que um documento público nacional (como uma certidão de casamento, diploma escolar ou escritura) seja aceito e tenha validade legal em mais de 100 países signatários da Convenção da Haia. E sim, nós realizamos o Apostilamento para validar seus documentos perante autoridades estrangeiras com total agilidade."
  },
  {
    id: "item-12",
    question: "Posso regularizar a posse de um terreno diretamente no cartório (Usucapião Extrajudicial)?",
    answer: "Sim! O Usucapião Extrajudicial permite adquirir a propriedade legal do imóvel que você ocupa pacificamente há anos, direto no balcão do nosso cartório de Registro de Imóveis. É necessário preencher os requisitos legais de tempo de posse (a depender do caso: 5, 10 ou 15 anos), e você precisará da assistência de um advogado e também da planta com memorial descritivo assinada por um engenheiro ou arquiteto, acompanhado das certidões negativas aplicáveis."
  },
  {
    id: "item-13",
    question: "Vou abrir uma associação no município. Onde faço o registro legal?",
    answer: "A formalização, criação e alteração de estatutos de Associações (como associações de moradores, igrejas, ONGs, sindicatos e fundos rurais) não são feitas na Junta Comercial, mas sim no Cartório de Registro Civil das Pessoas Jurídicas. Você traz o seu Estatuto, a Ata de Fundação ou Eleição, e nós registramos para sua associação adquirir o CNPJ ativo na Receita Federal."
  },
  {
    id: "item-14",
    question: "Fiz uma reforma na minha casa ou demoli uma parte. Preciso informar ao cartório?",
    answer: "Sim. Toda alteração física estrutural ou mudança oficial que ocorra na propriedade ou nos proprietários precisa ser atualizada no registro do imóvel através da 'Averbação'. Por exemplo, se você construiu (Averbação de Construção), casou ou divorciou (Averbação de Estado Civil). Manter a matrícula de seu imóvel atualizada garante o valor de mercado e a validade jurídica total do bem."
  },
  {
    id: "item-15",
    question: "Como comprovar ou documentar juridicamente que notifiquei alguém? (Notificação Extrajudicial)",
    answer: "O Cartório de Registro de Títulos e Documentos faz a Notificação Extrajudicial. Nós pegamos a carta que você redigiu (seja para cobrar aluguéis atrasados, devolver imóvel, rescindir parcerias) e um Oficial do cartório leva e entrega formalmente essa carta ao destinatário. Fica atestado publicamente que a pessoa tomou ciência e recebeu um prazo para se manifestar. Funciona como prova fortíssima num eventual processo futuro."
  }
];

// Gerador do Schema Org para FAQ (Essencial para SEO)
function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export const metadata: Metadata = {
  title: "Dúvidas Frequentes (FAQ) | Cartório Alto Longá - PI",
  description: "Tire suas dúvidas sobre documentos para casamento civil, inventário extrajudicial, protesto, e valores de escrituras no Cartório de Alto Longá, Piauí.",
  alternates: {
    canonical: "https://www.cartorioaltolonga.com.br/duvidas-frequentes",
  },
  openGraph: {
    title: "Dúvidas Frequentes | Cartório Alto Longá",
    description: "Saiba como fazer seu casamento no civil, inventário extrajudicial, reconhecimento de firma e registro de imóveis no Piauí.",
    url: "https://www.cartorioaltolonga.com.br/duvidas-frequentes",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Dúvidas Cartório de Alto Longá",
      },
    ],
  },
};

export default function FAQPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Script do Schema Markup injetado no Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Banner principal */}
        <HeroSection 
          title="Dúvidas Frequentes"
          subtitle="Encontre respostas diretas e desburocratizadas para as dúvidas cartorárias mais comuns em nossa região."
          backgroundImageUrl="/images/hero-aerea.jpg"
        />
        
        {/* Seção de FAQ (Acordeão) */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 style={{ fontFamily: "Montserrat, sans-serif" }} className="text-3xl font-bold text-[#702125] dark:text-red-400 mb-4">
                Principais dúvidas sobre nossos serviços
              </h2>
              <p style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="text-lg text-gray-600 dark:text-gray-300">
                Se a sua dúvida não estiver aqui, sinta-se à vontade para nos chamar no WhatsApp ou fazer uma visita ao Cartório em Alto Longá.
              </p>
            </div>
            
            <FaqList faqs={faqs} />
          </div>
        </section>

        {/* Action Section / Contato */}
        <ActionSection />
      </main>
      
      <Footer />
    </div>
  );
}
