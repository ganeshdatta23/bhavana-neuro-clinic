import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.bhavananeurocare.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/doctors',
        '/facilities',
        '/services',
        '/contact',
        // Add blog index when created
        // '/blog', 
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service routes - strictly matching the plan
    const serviceSlugs = [
        'stroke-treatment-machilipatnam',
        'epilepsy-clinic-machilipatnam',
        'migraine-headache-specialist-machilipatnam',
        'vertigo-balance-disorders-machilipatnam',
        'parkinsons-movement-disorders-machilipatnam',
        'memory-loss-dementia-care-machilipatnam',
    ];

    const services = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...services];
}
