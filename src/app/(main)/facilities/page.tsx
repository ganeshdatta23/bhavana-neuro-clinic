import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { facilities } from '@/lib/data';
import { LucideIcon } from '@/components/lucide-icon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Facilities | Dr. Bhavana Neuro Care',
  description: 'Explore our state-of-the-art facilities, including advanced neuro-diagnostics, operation theatres, and a dedicated Neuro-ICU designed for patient safety and comfort.',
};

export default function FacilitiesPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
          State-of-the-Art Facilities
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          We have invested in advanced medical technology and designed our spaces to ensure patient comfort, safety, and the best possible clinical outcomes.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map(facility => (
            <Card key={facility.name}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <LucideIcon name={facility.icon} className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-bold">{facility.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
