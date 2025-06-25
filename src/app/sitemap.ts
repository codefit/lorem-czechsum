import { MetadataRoute } from 'next'

const BASE_URL = process.env.BASE_URL || 'https://cesky-lorem-ipsum.codefit.cz';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', 'about'];

  return staticRoutes.map(path => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
  }));
} 