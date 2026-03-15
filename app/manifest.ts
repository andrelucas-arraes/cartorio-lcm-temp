// =====================================
// MANIFEST - IDENTIDADE DO SITE / PWA
// =====================================

import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cartório Luciana Carrilho de Moraes Marinho - Serventia Extrajudicial do Ofício Único de Alto Longá/PI',
    short_name: 'Cartório Alto Longá PI',
    description: 'Serventia Extrajudicial do Ofício Único de Alto Longá-PI — Cartório Luciana Carrilho de Moraes Marinho. Registro Civil, Tabelionato de Notas, Registro de Imóveis, Protesto de Títulos e muito mais.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#511C23',
    icons: [
      {
        src: '/icon.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  }
}
