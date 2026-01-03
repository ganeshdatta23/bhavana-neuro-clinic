import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter, Poppins } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-headline',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Dr. Bhavana Neuro Care | Expert Neurological Care',
  description: 'Leading neurology and multispeciality hospital in Machilipatnam providing advanced, patient-centric care for stroke, epilepsy, headache, and spine disorders.',
  alternates: {
    canonical: 'https://www.bhavananeurocare.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.bhavananeurocare.com',
    name: 'Dr Bhavana Neuro Care',
    image: 'https://www.bhavananeurocare.com/br_logo_inn.svg', // Assuming logo path
    telephone: '+91 78939 59393',
    email: 'info@bhavananeuro.com',
    url: 'https://www.bhavananeurocare.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gudi Veedhi, Edepalli, Srinivas Nagar Colony',
      addressLocality: 'Machilipatnam',
      addressRegion: 'Andhra Pradesh',
      postalCode: '521001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.1800, // Approximate coords for Machilipatnam, update if known exactly
      longitude: 81.1300
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    sameAs: [
      // Add social links here if available
    ]
  };

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased', fontSans.variable, fontHeadline.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
