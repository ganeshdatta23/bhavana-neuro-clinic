import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { doctors } from '@/lib/data';
import { Languages, MessageSquare, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Specialists | Bhavana Neuro Clinic',
  description: 'Meet our team of experienced and dedicated neurologists, neurosurgeons, and other specialists committed to your health.',
};

export default function DoctorsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
          Meet Our Specialists
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          A team of dedicated, experienced, and compassionate medical professionals at the forefront of neurological and multispeciality care.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map(doctor => (
            <Card key={doctor.id} className="flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={doctor.avatarUrl} alt={doctor.name} />
                  <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <p className="text-sm text-primary font-semibold">{doctor.qualification}</p>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{doctor.experience}</p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold flex items-center"><Star className="h-4 w-4 mr-2 text-yellow-500" /> Areas of Interest</h4>
                  <p className="text-sm text-muted-foreground mt-1">{doctor.interests.join(', ')}</p>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold flex items-center"><Languages className="h-4 w-4 mr-2 text-blue-500" /> Languages</h4>
                  <p className="text-sm text-muted-foreground mt-1">{doctor.languages.join(', ')}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4 mt-4">
                <p className="text-sm text-foreground/80 italic flex items-start">
                  <MessageSquare className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                  "{doctor.message}"
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
