import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://school247.in';

  const routes = [
    '',
    '/platform',
    '/features',
    '/how-it-works',
    '/integrations',
    '/pricing',
    '/solutions',
    '/solutions/school-owners',
    '/solutions/principals',
    '/solutions/administrators',
    '/solutions/teachers',
    '/solutions/parents',
    '/book-demo',
    '/about',
    '/contact',
    '/security',
    '/resources',
    '/blog',
    '/careers',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-11-24'),
    changeFrequency: route === '' || route === '/book-demo' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/book-demo' ? 0.9 : 0.8,
  }));
}
