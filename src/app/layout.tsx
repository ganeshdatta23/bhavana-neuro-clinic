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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-body antialiased', fontSans.variable, fontHeadline.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
