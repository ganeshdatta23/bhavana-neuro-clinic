'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { whyChooseUs, stats, testimonials, services } from '@/lib/data';
import { Phone, ShieldCheck, ArrowRight, Star, User } from 'lucide-react';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { DepartmentCard } from '@/components/department-card';
import { GlowCard } from '@/components/ui/glow-card';
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { homeStyles } from './styles';
import { containerVariants, itemVariants } from './constants';
import { DiseaseDetailDialog } from '@/components/disease-detail-dialog';
import type { DiseaseData, NeurologicalCondition } from '@/lib/disease-utils';
import { getDiseaseByServiceId } from '@/lib/disease-utils';

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [diseaseData, setDiseaseData] = useState<DiseaseData | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<NeurologicalCondition | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Load disease data
  useEffect(() => {
    fetch('/diseases-info.json')
      .then((res) => res.json())
      .then((data) => setDiseaseData(data))
      .catch((err) => console.error('Failed to load disease data:', err));
  }, []);

  const handleServiceClick = (serviceId: string) => {
    if (!diseaseData) return;
    const disease = getDiseaseByServiceId(serviceId, diseaseData);
    if (disease) {
      setSelectedDisease(disease);
      setDialogOpen(true);
    }
  };



  return (
    <div className={homeStyles.container}>
      <section className={homeStyles.heroSection}>
        {/* Background Decorations */}
        <div className={`${homeStyles.heroDecoration} w-[500px] h-[500px] -top-20 -left-20`} />
        <div className={`${homeStyles.heroDecoration} w-[300px] h-[300px] bottom-0 right-0 bg-blue-500/5`} />

        <div className={homeStyles.heroContent}>
          {/* Left Column: Text Content */}
          <motion.div
            className={homeStyles.heroTextWrapper}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className={homeStyles.heroTitle} variants={itemVariants}>
              Expert, Compassionate <br className="hidden md:block" />
              <span className="text-primary">Neurological Care</span>
            </motion.h1>

            <motion.p className={homeStyles.heroDescription} variants={itemVariants}>
              Led by <strong>Dr. Rakesh & Dr. Bhavana</strong>, we provide expert treatment for stroke, epilepsy, spine and all neurological disorders with a patient-first approach.
            </motion.p>

            {/* Mobile/Tablet Image (Visible below LG) */}
            <motion.div
              className="block lg:hidden relative z-10 px-4 mt-8 mb-8"
              variants={itemVariants}
            >
              <div className={homeStyles.heroImageWrapper}>
                <img
                  src="/doctors-hero.jpg"
                  alt="Dr. Bhavana & Medical Team"
                  className={homeStyles.heroImage}
                />
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md px-3 py-2 rounded-lg shadow-xl border border-white/20">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Our Expert Doctors</p>
                  <p className="text-xs font-bold text-slate-900">Dr. Rakesh & Dr. Bhavana</p>
                </div>
              </div>
            </motion.div>

            <motion.div className={homeStyles.heroButtons} variants={itemVariants}>
              <Button size="lg" className="rounded-full px-8 text-base h-12" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`${homeStyles.emergencyButton} rounded-full px-8 text-base h-12`}
                asChild
              >
                <Link href="tel:+917893959393">
                  <Phone className="mr-2 h-4 w-4" /> Emergency: +91 78939 59393
                </Link>
              </Button>
            </motion.div>

            {/* Quick Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span>Certified Care</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                <span>Expert Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>Patient Centric</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Desktop Doctor Image (Visible on LG+) */}
          <motion.div
            className={`${homeStyles.heroImageContainer} hidden lg:block`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={homeStyles.heroImageWrapper}>
              <img
                src="/doctors-hero.jpg"
                alt="Dr. Bhavana & Medical Team"
                className={homeStyles.heroImage}
              />
              {/* Optional: Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-white/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Our Expert Doctors</p>
                <p className="text-sm font-bold text-slate-900"> Dr. Rakesh & Dr. Bhavana</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="departments" className={homeStyles.departmentsSection}>
        <div className={homeStyles.departmentsContainer}>
          <h2 className={homeStyles.sectionTitle}>Our Core Specialties</h2>
          <div className={homeStyles.departmentsGrid}>
            {services.slice(0, 6).map(service => (
              <DepartmentCard
                key={service.id}
                name={service.title}
                icon={service.icon}
                description={service.shortDescription}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </div>
        </div>

        {/* Disease Detail Dialog */}
        <DiseaseDetailDialog
          disease={selectedDisease}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </section>

      <section id="why-choose-us" className={homeStyles.whyChooseUsSection}>
        <div className={homeStyles.whyChooseUsContainer}>
          <h2 className={homeStyles.sectionTitle}>Why Choose Dr. Bhavana Neuro Care?</h2>
          <div className={homeStyles.whyChooseUsGrid}>
            {whyChooseUs.map((item, index) => (
              <GlowCard key={index} className={homeStyles.featureCard}>
                <div className={homeStyles.featureContent}>
                  <div className={homeStyles.featureIconWrapper}>
                    <ShieldCheck className={homeStyles.featureIcon} />
                  </div>
                  <div>
                    <h3 className={homeStyles.featureTitle}>{item.title}</h3>
                    <p className={homeStyles.featureDescription}>{item.description}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className={homeStyles.statsSection}>
        <div className={homeStyles.statsContainer}>
          <div className={homeStyles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={homeStyles.statItem}>
                <p className={homeStyles.statValue}>{stat.value}</p>
                <p className={homeStyles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className={homeStyles.testimonialsSection}>
        <div className={homeStyles.testimonialsContainer}>
          <h2 className={homeStyles.sectionTitle}>What Our Patients Say</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className={homeStyles.carousel}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className={homeStyles.carouselItem}>
                  <div className={homeStyles.testimonialWrapper}>
                    <Card className={homeStyles.testimonialCard}>
                      <CardContent className={homeStyles.testimonialContent}>
                        <div className={homeStyles.starsWrapper}>
                          {[...Array(5)].map((_, i) => <Star key={i} className={homeStyles.starIcon} />)}
                        </div>
                        <p className={homeStyles.quote}>"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar className={homeStyles.avatar}>
                            <AvatarFallback className="bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className={homeStyles.testimonialName}>{testimonial.name}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={homeStyles.carouselPrev} />
            <CarouselNext className={homeStyles.carouselNext} />
          </Carousel>
        </div>
      </section>

      <section id="cta" className={homeStyles.ctaSection}>
        <div className={homeStyles.ctaContainer}>
          <h2 className={homeStyles.ctaTitle}>Ready to Take the Next Step?</h2>
          <p className={homeStyles.ctaDescription}>
            Whether you're seeking a diagnosis, treatment, or a second opinion, our team is here to help. Schedule your consultation today.
          </p>
          <div className={homeStyles.ctaButtonWrapper}>
            <Button size="lg" variant="secondary" asChild className={homeStyles.ctaButton}>
              <Link href="/contact#appointment">
                Book An Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
