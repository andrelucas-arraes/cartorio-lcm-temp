// =====================================
// JSON-LD STRUCTURED DATA (SCHEMA.ORG)
// =====================================
// Dados estruturados para que o Google entenda que é um negócio local (cartório)
// Isso melhora drasticamente o SEO local e a exibição nos resultados de busca

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Notary",
    "name": "Cartório Luciana Carrilho de Moraes Marinho",
    "alternateName": [
      // Nome oficial completo da serventia
      "Serventia Extrajudicial do Ofício Único de Alto Longá-PI",
      "Serventia Extrajudicial do Ofício Único de Alto Longá",
      "Serventia Extrajudicial de Ofício Único de Alto Longá PI",
      "Serventia Extrajudicial de Alto Longá",
      "Serventia Extrajudicial Alto Longá PI",
      "Serventia Extrajudicial Alto Longá Piauí",
      // Nome da titular
      "Cartório Luciana Carrilho de Moraes Marinho",
      "Cartório Luciana Carrilho",
      "Cartório LCM",
      "Cartório LCM Alto Longá",
      // Variações com "Cartório"
      "Cartório de Alto Longá",
      "Cartório Alto Longá",
      "Cartório Alto Longá PI",
      "Cartório Alto Longá Piauí",
      "Cartório de Alto Longá PI",
      "Cartório de Alto Longá Piauí",
      "Cartório Alto Longá - PI",
      "Cartório Alto Longa PI",
      "Cartório Alto Longa",
      // Variações por tipo de serviço
      "Cartório de Ofício Único de Alto Longá",
      "Cartório de Ofício Único de Alto Longá PI",
      "Cartório de Ofício Único Alto Longá",
      "Ofício Único de Alto Longá",
      "Cartório de Registro Civil de Alto Longá",
      "Registro Civil de Alto Longá",
      "Tabelionato de Notas de Alto Longá",
      "Tabelionato Alto Longá",
      "Registro de Imóveis de Alto Longá",
      "Cartório de Registro de Imóveis de Alto Longá",
      "Cartório de Protesto de Alto Longá",
      "Protesto de Títulos de Alto Longá",
      // Variações regionais e informais
      "Cartório da Comarca de Alto Longá",
      "Comarca de Alto Longá PI",
      "1º Ofício de Alto Longá",
      "Primeiro Ofício Alto Longá"
    ],
    "description": "Cartório de Ofício Único da Comarca de Alto Longá, Piauí. Oferecemos serviços de Registro Civil, Tabelionato de Notas, Registro de Imóveis, Registro de Títulos e Documentos, Registro Civil de Pessoas Jurídicas e Protesto de Títulos com excelência e segurança jurídica.",
    "url": "https://cartorio-lcm-temp.vercel.app",
    "logo": "https://cartorio-lcm-temp.vercel.app/images/Logo_Luciana02.png",
    "image": "https://cartorio-lcm-temp.vercel.app/images/og.jpg",
    "telephone": "+55-86-98871-8166",
    "email": "cartorio1oficiopi@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Benedito Brito, nº 352",
      "addressLocality": "Alto Longá",
      "addressRegion": "PI",
      "postalCode": "64360-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -5.2567,
      "longitude": -42.2103
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Alto Longá",
        "containedInPlace": {
          "@type": "State",
          "name": "Piauí",
          "containedInPlace": {
            "@type": "Country",
            "name": "Brasil"
          }
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Cartorários",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Registro Civil das Pessoas Naturais",
            "description": "Registro de nascimento, casamento e óbito em Alto Longá, Piauí"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tabelionato de Notas",
            "description": "Escrituras públicas, procurações, autenticações e reconhecimento de firma em Alto Longá, Piauí"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Registro de Imóveis",
            "description": "Matrícula, averbação e registro de imóveis em Alto Longá, Piauí"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Protesto de Títulos",
            "description": "Protesto e cancelamento de protesto de títulos em Alto Longá, Piauí"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Registro de Títulos e Documentos",
            "description": "Registro de contratos e documentos em Alto Longá, Piauí"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Registro Civil das Pessoas Jurídicas",
            "description": "Registro de empresas e pessoas jurídicas em Alto Longá, Piauí"
          }
        }
      ]
    },
    "sameAs": [],
    "priceRange": "$$"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cartório Luciana Carrilho de Moraes Marinho - Serventia Extrajudicial do Ofício Único de Alto Longá/PI",
    "alternateName": [
      "Cartório Alto Longá PI",
      "Serventia Extrajudicial do Ofício Único de Alto Longá-PI",
      "Cartório Luciana Carrilho de Moraes Marinho",
      "Cartório de Alto Longá",
      "Cartório Alto Longá Piauí",
      "Cartório LCM Alto Longá"
    ],
    "url": "https://cartorio-lcm-temp.vercel.app",
    "description": "Site oficial da Serventia Extrajudicial do Ofício Único de Alto Longá, Piauí - Cartório Luciana Carrilho de Moraes Marinho. Serviços de Registro Civil, Tabelionato de Notas, Registro de Imóveis, Protesto de Títulos e mais.",
    "inLanguage": "pt-BR",
    "publisher": {
      "@type": "Organization",
      "name": "Cartório Luciana Carrilho de Moraes Marinho",
      "alternateName": "Serventia Extrajudicial do Ofício Único de Alto Longá-PI",
      "url": "https://cartorio-lcm-temp.vercel.app"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cartorio-lcm-temp.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://cartorio-lcm-temp.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Nossos Serviços",
        "item": "https://cartorio-lcm-temp.vercel.app/nossos-servicos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Links Úteis",
        "item": "https://cartorio-lcm-temp.vercel.app/links"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "LGPD",
        "item": "https://cartorio-lcm-temp.vercel.app/lgpd"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
