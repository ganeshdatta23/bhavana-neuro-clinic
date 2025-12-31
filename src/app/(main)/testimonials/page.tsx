import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Testimonials | Dr. Bhavana Neuro Care',
  description: 'Read stories from our patients about their experiences with our doctors, staff, and the care they received at Dr. Bhavana Neuro Care.',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
          What Our Patients Say
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          We are honored to have earned the trust of our patients. Here are some of their stories.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.concat(testimonials.slice(0, 3)).map((testimonial, index) => (
            <Card key={`${testimonial.id}-${index}`} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <p className="italic text-foreground/90">"{testimonial.quote}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatarUrl.replace('100/100', `100/10${index}`)} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
