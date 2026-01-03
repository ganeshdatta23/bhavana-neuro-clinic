import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/lib/services-data';
import { ArrowLeft, Calendar, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming shadcn-like button exists, or I will use styling

// Generate static params for all service pages
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate metadata for each page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: {
            canonical: `/services/${service.slug}`,
        }
    };
}

// Page Component
export default async function ServicePage({ params }: Props) {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }

    // Schema Markup for MedicalWebPage / MedicalCondition
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: service.h1,
        description: service.metaDescription,
        provider: {
            '@type': 'MedicalClinic',
            name: 'Dr Bhavana Neuro Care',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Gudi Veedhi, Edepalli, Srinivas Nagar Colony',
                addressLocality: 'Machilipatnam',
                addressRegion: 'Andhra Pradesh',
                postalCode: '521001',
                addressCountry: 'IN'
            },
            telephone: '+91 78939 59393'
        },
        about: {
            '@type': 'MedicalSpecialty',
            name: service.title,
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-white">
                {/* Breadcrumb / Back */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 py-4">
                        <Link href="/services" className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to All Services
                        </Link>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary/5 to-blue-50/50 py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary text-sm font-semibold shadow-sm mb-6">
                                Neurology Service in Machilipatnam
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {service.h1}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                                {service.intro}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* Main Content */}
                            <div className="lg:col-span-8 space-y-12">

                                {/* Symptoms */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Symptoms & Warning Signs</h2>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {service.symptoms.map((symptom, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">{symptom}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Treatment Approach */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Treat {service.title}</h2>
                                    <div className="prose prose-lg text-gray-700 max-w-none">
                                        <p>{service.treatment}</p>
                                    </div>
                                </div>

                                {/* Local Context */}
                                <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Serving Krishna District</h3>
                                    <p className="text-blue-800 leading-relaxed">
                                        {service.localContext} We are committed to making top-tier neurological care accessible to everyone in our region.
                                    </p>
                                </div>

                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4 space-y-6">
                                {/* Appointment Card */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Book an Appointment</h3>
                                    <p className="text-gray-600 mb-6 text-sm">Expert consultation with Dr. Bhavana for {service.title.toLowerCase()}.</p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start">
                                            <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">
                                                Gudi Veedhi, Edepalli, Srinivas Nagar Colony, Machilipatnam
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">+91 78939 59393</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</span>
                                        </div>
                                    </div>

                                    <div className="grid gap-3">
                                        <a
                                            href="tel:+917893959393"
                                            className="flex items-center justify-center w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                        >
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call Now
                                        </a>
                                        <Link
                                            href="/contact"
                                            className="flex items-center justify-center w-full py-3 px-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                                        >
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Book Online
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
