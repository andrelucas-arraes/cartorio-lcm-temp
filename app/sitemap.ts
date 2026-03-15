// =====================================
// SITEMAP.XML - MAPA DO SITE PARA BUSCADORES
// =====================================
// Gera automaticamente o sitemap.xml com todas as páginas e configurações
// de prioridade e frequência de rastreamento avançadas para SEO.

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // DOMÍNIO PRINCIPAL DO SITE
  const baseUrl = 'https://www.cartorioaltolonga.com.br/'
  const lastModified = new Date()

  return [
    // ---------------------------------------------------------
    // ROTA PRINCIPAL (Home)
    // Alta prioridade (1.0), pois é a porta de entrada do Cartório.
    // ---------------------------------------------------------
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // ---------------------------------------------------------
    // PÁGINA DE SERVIÇOS
    // Prioridade (0.9), muito importante para captar clientes locais 
    // que buscam serviços específicos (Protesto, Registro de Imóveis, etc).
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/nossos-servicos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ---------------------------------------------------------
    // PÁGINA DE DÚVIDAS FREQUENTES (FAQ)
    // Prioridade (0.8), essencial para rankear respostas com "FAQPage Schema"
    // e capturar buscas "cauda longa" do Google.
    // ---------------------------------------------------------
    {
      url: `${baseUrl}duvidas-frequentes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ---------------------------------------------------------
    // PÁGINA DE LINKS (Agregador / Árvore de Links)
    // Prioridade (0.7), útil para tráfego social (Instagram) e WhatsApp.
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/links`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ---------------------------------------------------------
    // PÁGINA DE POLÍTICA DE PRIVACIDADE E TERMOS (LGPD)
    // Prioridade (0.5), essencial para compliance jurídico, mas 
    // não é o foco para geração de tráfego de usuários.
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/lgpd`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
