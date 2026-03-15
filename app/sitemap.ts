// =====================================
// SITEMAP.XML - MAPA DO SITE PARA BUSCADORES
// =====================================
// Gera automaticamente o sitemap.xml com todas as páginas e configurações
// de prioridade e frequência de rastreamento avançadas para SEO.

import { MetadataRoute } from 'next'
import { servicosDocs } from '@/lib/data/documentos'

export default function sitemap(): MetadataRoute.Sitemap {
  // DOMÍNIO PRINCIPAL DO SITE (sem barra final)
  const baseUrl = 'https://www.cartorioaltolonga.com.br'
  const lastModified = new Date()

  // Páginas dinâmicas de documentos
  const documentPages: MetadataRoute.Sitemap = servicosDocs.map((doc) => ({
    url: `${baseUrl}/documentos/${doc.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

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
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/nossos-servicos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ---------------------------------------------------------
    // PÁGINA DE DÚVIDAS FREQUENTES (FAQ)
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/duvidas-frequentes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ---------------------------------------------------------
    // CENTRAL DE DOCUMENTAÇÃO
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/documentos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Páginas individuais de documentação
    ...documentPages,

    // ---------------------------------------------------------
    // PÁGINA DE LINKS
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/links`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ---------------------------------------------------------
    // PÁGINA LGPD
    // ---------------------------------------------------------
    {
      url: `${baseUrl}/lgpd`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
