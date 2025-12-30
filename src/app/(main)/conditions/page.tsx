import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { conditions } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Treatments & Conditions | Bhavana Neuro Clinic',
  description: 'Learn about common neurological conditions like stroke, epilepsy, and migraine, and understand the treatment approaches we use at our hospital.',
};

export default function ConditionsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
          Treatments & Conditions
        </h1>
        <p className="mt-4 mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          Patient-friendly information to help you understand common neurological conditions and their treatments. This information is for educational purposes only and not a substitute for professional medical advice.
        </p>

        <div className="mt-16 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {conditions.map(condition => (
              <AccordionItem key={condition.id} value={condition.id}>
                <AccordionTrigger className="text-lg font-semibold">{condition.title}</AccordionTrigger>
                <AccordionContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">What is it?</h3>
                    <p className="text-muted-foreground">{condition.definition}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Common Symptoms</h3>
                    <ul className="space-y-1">
                      {condition.symptoms.map(symptom => (
                        <li key={symptom} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">When to See a Neurologist</h3>
                    <p className="text-muted-foreground">{condition.whenToSeeDoctor}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">General Treatment Approach</h3>
                    <p className="text-muted-foreground">{condition.treatmentApproach}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
