import Link from 'next/link';
import { servicesData } from '@/lib/services-data';
import { ArrowRight, Brain, Activity, Zap, PersonStanding, UserRound, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Neurology Services in Machilipatnam | Dr Bhavana Neuro Care',
    description: 'Comprehensive neurology services in Machilipatnam: Stroke, Epilepsy, Migraine, Vertigo, Parkinson’s & Dementia. Expert care by Dr Bhavana.',
};

const iconMap: Record<string, any> = {
    'stroke-treatment-machilipatnam': Brain,
    'epilepsy-clinic-machilipatnam': Zap,
    'migraine-headache-specialist-machilipatnam': Activity,
    'vertigo-balance-disorders-machilipatnam': AlertCircle,
    'parkinsons-movement-disorders-machilipatnam': PersonStanding,
    'memory-loss-dementia-care-machilipatnam': UserRound,
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4">
                <header className="mb-12 text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Neurology Services in Machilipatnam
                    </h1>
                    <p className="text-lg text-gray-600">
                        Expert, compassionate care for a wide range of neurological conditions. Serving patients from Machilipatnam, Gudivada, Avanigadda, and surrounding areas.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {servicesData.map((service) => {
                        const Icon = iconMap[service.slug] || Brain;
                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col h-full border border-gray-100 hover:border-primary/20"
                            >
                                <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h2>

                                <p className="text-gray-600 mb-6 flex-grow">
                                    {service.shortDescription}
                                </p>

                                <div className="flex items-center text-primary font-semibold mt-auto">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Need Expert Neurological Advice?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book an appointment with Dr. Bhavana for a comprehensive evaluation. We are conveniently located in Srinivasa Nagar Colony, Machilipatnam.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                        >
                            Book Appointment
                        </Link>
                        <a
                            href="tel:+917893959393"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
                        >
                            Emergency: +91 78939 59393
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
