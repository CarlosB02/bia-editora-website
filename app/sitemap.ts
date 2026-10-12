import { MetadataRoute } from 'next';
import { CONFIG } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONFIG.siteUrl;
  const routes = [
    '',
    '/o-livro',
    '/historia',
    '/proximo-lancamento',
    '/parceiros',
    '/contacto',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-10-11'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/o-livro' ? 0.9 : 0.8,
  }));
}
