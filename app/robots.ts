import { MetadataRoute } from 'next';
import { CONFIG } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${CONFIG.siteUrl}/sitemap.xml`,
  };
}
