import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.talentlinkbih.com/bs',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.talentlinkbih.com/en',
          // de: 'https://www.veterinar-bihac.ba/de',
         // bs: 'https://www.veterinar-bihac.ba/bs'
        },
      },
    },
    {
      url: 'https://www.talentlinkbih.com/bs/o-nama',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.talentlinkbih.com/en/about',
            // de: 'https://www.veterinar-bihac.ba/de/about',
          //  bs: 'https://www.veterinar-bihac.ba/bs/about'
          },
      },
    },
    {
      url: 'https://www.talentlinkbih.com/bs/kontakt',
      lastModified: new Date(),
      alternates: {
        languages: {
            en: 'https://www.talentlinkbih.com/en/contact',
            // de: 'https://www.veterinar-bihac.ba/de/contact',
          //  bs: 'https://www.veterinar-bihac.ba/bs/contact'
          },
      },
    }
    
  ]
}