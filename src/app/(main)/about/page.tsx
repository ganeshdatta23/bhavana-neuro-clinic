import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { whyChooseUs } from '@/lib/data';
import { ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Bhavana Neuro Care',
  description: 'Learn about our mission, vision, and commitment to providing the highest standards of neurological and multispeciality care in Vijayawada.',
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
          About Dr. Bhavana Neuro Care
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          Your trusted partner in neurological health, combining advanced medical science with a human touch.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To provide accessible, affordable, and high-quality neurological and multispeciality healthcare to the people of Vijayawada and beyond. We are dedicated to leveraging advanced technology and medical expertise within a culture of compassion, respect, and patient-centric care.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              To be the leading center of excellence for neuroscience in the region, recognized for our clinical outcomes, ethical practices, and unwavering commitment to improving the quality of life for our patients and their families.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center font-headline text-3xl font-bold">Our Expertise & Standards</h2>
          <div className="mt-8 flex flex-col items-center gap-8 md:flex-row">
            <Avatar className="h-32 w-32">
              <AvatarImage src="https://picsum.photos/seed/founder/400/400" alt="Founder" />
              <AvatarFallback>FD</AvatarFallback>
            </Avatar>
            <div className='md:w-3/4'>
              <p className="text-muted-foreground">
                 Dr. Bhavana Neuro Care was established with a simple yet powerful goal: to bridge the gap in specialized neurological care in our community. Starting as a small clinic, our commitment to patient well-being and clinical excellence has fueled our growth into a comprehensive hospital. We operate under the Dr. Kagitha Lakshmi Narendra Charitable Trust.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, under the continued leadership of Dr. Parasa Lakshmi Bhavana and Dr. Kagitha Rakesh a team of dedicated specialists, we uphold the founding values of integrity, compassion, and innovation. Our leadership team is comprised of experienced medical professionals and administrators who work together to ensure the highest standards of patient care, safety, and operational efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold">Our Commitment to Quality & Safety</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
