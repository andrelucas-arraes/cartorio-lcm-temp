// =====================================
// ROBOTS.TXT - CONFIGURAÇÃO DE RASTREAMENTO
// =====================================
// Instrui os mecanismos de busca e IAs sobre como rastrear o site

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regra geral, permite tudo
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Google
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // ChatGPT / OpenAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // Google Gemini
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Anthropic (Claude)
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://www.cartorioaltolonga.com.br/sitemap.xml',
  }
}
