import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TalentLink BiH | Pilot Program za Rješavanje Nedostatka Radne Snage u BiH',
    short_name: 'TalentLink BiH',
    description: 'Pridružite se pilot-programu TalentLink BiH i su-kreirajte potpuno usklađenu platformu za zapošljavanje stranih radnika u BiH—oblikujte razvojni put, dajte povratne informacije i osigurajte rani pristup.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#2196f3',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}