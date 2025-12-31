import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CreditCard, Hospital, UserCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patient Information | Dr. Bhavana Neuro Care',
  description: 'Find all the information you need for your visit, including how to book appointments, admission processes, and insurance options.',
};

export default function PatientsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
          Patient Information
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          Everything you need to know to make your visit smooth and stress-free.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <UserCheck className="h-6 w-6 text-primary" />
                Booking an Appointment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Booking an appointment is easy. You can reach us in one of the following ways:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>By Phone:</strong> Call our reception at <a href="tel:+917893959393" className="text-primary font-semibold">+91 78939 59393</a> during working hours.</li>
                <li><strong>Online Form:</strong> Fill out the <Link href="/contact#appointment" className="text-primary font-semibold">appointment form</Link> on our contact page.</li>
                <li><strong>WhatsApp:</strong> Send us a message at <a href="https://wa.me/917893959393" target="_blank" className="text-primary font-semibold">+91 78939 59393</a>.</li>
                <li><strong>Walk-in:</strong> You can visit the hospital directly, though appointments are recommended to avoid waiting.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-primary" />
                What to Bring for Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>To ensure a productive consultation, please bring the following items:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Doctor's referral slip (if any).</li>
                <li>All previous medical records, reports, and scans (MRI, CT, X-ray).</li>
                <li>A complete list of your current medications and dosages.</li>
                <li>Your insurance card or TPA details if applicable.</li>
                <li>A valid government-issued photo ID.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Hospital className="h-6 w-6 text-primary" />
                Admission & Discharge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p><strong>Admission:</strong> If admission is required, our front-office staff will guide you through the process, explain the room categories, and handle the necessary paperwork.</p>
              <p><strong>Discharge:</strong> Your consulting doctor will decide the date of discharge. Our team will prepare a detailed discharge summary and explain all post-discharge care instructions and medications before you leave.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CreditCard className="h-6 w-6 text-primary" />
                Insurance & Payments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We accept a wide range of health insurance plans and have tie-ups with major Third-Party Administrators (TPAs). Please contact our insurance desk for details on cashless facilities.</p>
              <p>We accept payments via:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Cash</li>
                <li>Credit and Debit Cards</li>
                <li>UPI and Mobile Wallets</li>
                <li>Bank Transfers (NEFT/RTGS)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
