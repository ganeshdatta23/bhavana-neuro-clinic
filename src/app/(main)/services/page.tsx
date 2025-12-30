import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services, additionalDepartments } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { DepartmentCard } from '@/components/department-card';

export const metadata: Metadata = {
  title: 'Departments & Services | Bhavana Neuro Clinic',
  description: 'Explore the comprehensive neurological and multispeciality services we offer, from advanced stroke care and neurosurgery to general medicine and orthopedics.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
          Departments & Services
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          Comprehensive care across a spectrum of neurological and general health disciplines, all under one roof.
        </p>

        <section id="core-services" className="mt-16">
          <h2 className="font-headline text-3xl font-semibold text-primary mb-8">Core Neurological Services</h2>
          <div className="space-y-8">
            {services.map(service => (
              <Card key={service.id} id={service.id} className="scroll-mt-20">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.longDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Conditions Treated:</h4>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    {service.treats.map(condition => (
                      <li key={condition} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {condition}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="additional-departments" className="mt-20">
          <h2 className="font-headline text-3xl font-semibold text-primary mb-8">Additional Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalDepartments.map(dept => (
              <Card key={dept.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <DepartmentCard name="" icon={dept.icon} />
                  <div className='flex-1'>
                    <CardTitle>{dept.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
