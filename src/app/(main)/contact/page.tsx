import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/lib/data';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Bhavana Neuro Clinic',
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
            <Card className="p-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Book an Appointment</CardTitle>
                <CardDescription>Fill out the form below and we will contact you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Full Name" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Input type="email" placeholder="Email Address" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(s => <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Your message (optional)" />
                  <Button className="w-full" size="lg">Submit Request</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 lg:col-span-3">
            <Card className='shadow-md'>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">123 Health Street, Medical Sector,<br />Vijayawada, Andhra Pradesh, 520001</p>
                <div className="mt-4 h-64 w-full rounded-md bg-muted flex items-center justify-center overflow-hidden">
                  <p className="text-muted-foreground">Google Maps Placeholder</p>
                </div>
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
                    <a href="tel:+911234567890" className="block text-muted-foreground hover:text-primary">+91 12345 67890</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Phone className="h-6 w-6 text-red-500" />
                  <div>
                    <span className="font-semibold text-red-500">24/7 Emergency:</span>
                    <a href="tel:+911234567891" className="block text-muted-foreground hover:text-primary">+91 12345 67891</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <span className="font-semibold">WhatsApp:</span>
                    <a href="https://wa.me/911234567890" target='_blank' className="block text-muted-foreground hover:text-primary">+91 12345 67890</a>
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
