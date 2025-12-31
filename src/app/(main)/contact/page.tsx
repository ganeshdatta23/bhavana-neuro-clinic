import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppointmentForm } from '@/components/appointment-form';
import { GoogleMapEmbed } from '@/components/google-map';
import { Mail, MapPin, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Dr. Bhavana Neuro Care',
  description: 'Get in touch to book an appointment, ask a question, or find our location. We are here to help you 24/7.',
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center text-4xl font-bold md:text-5xl">
          Contact & Location
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          We are here to help. Reach out to us for appointments, emergencies, or any inquiries.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div id="appointment" className='lg:col-span-2'>
            <AppointmentForm />
          </div>

          <div className="space-y-8 lg:col-span-3">
            <Card className='shadow-md border-red-200 bg-red-50 dark:bg-red-950/20'>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-red-600">
                  <AlertCircle className="h-6 w-6" />
                  🚨 24/7 Emergency Line
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If this is a medical emergency, call us immediately:
                </p>
                <a
                  href="tel:+911234567891"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-lg text-lg transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-5 w-5" />
                  Call +91 12345 67891
                </a>
              </CardContent>
            </Card>

            <Card className='shadow-md'>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">123 Health Street, Medical Sector,<br />Vijayawada, Andhra Pradesh, 520001</p>
                <GoogleMapEmbed
                  address="123 Health Street, Medical Sector, Vijayawada, Andhra Pradesh, 520001"
                  className="mt-4 h-64 w-full rounded-md overflow-hidden"
                />
                <p className='mt-4 text-sm text-muted-foreground'>Ample parking available for patients and visitors.</p>
              </CardContent>
            </Card>

            <Card className='shadow-md'>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Phone className="text-primary" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Phone className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <span className="font-semibold">General Inquiry:</span>
                    <a href="tel:+917893959393" className="block text-muted-foreground hover:text-primary">+91 78939 59393</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <span className="font-semibold">WhatsApp:</span>
                    <a href="https://wa.me/917893959393" target='_blank' className="block text-muted-foreground hover:text-primary">+91 78939 59393</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                  <div>
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:info@bhavananeuro.com" className="block text-muted-foreground hover:text-primary">info@bhavananeuro.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
