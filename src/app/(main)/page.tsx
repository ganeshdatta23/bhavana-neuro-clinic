'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { whyChooseUs, stats, testimonials, services } from '@/lib/data';
import { Phone, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { DepartmentCard } from '@/components/department-card';
import { GlowCard } from '@/components/ui/glow-card';
import { motion } from 'framer-motion';
import { homeStyles } from './styles';
import { containerVariants, itemVariants } from './constants';

export default function Home() {



  return (
    <div className={homeStyles.container}>
      <section className={homeStyles.heroSection}>
        <div className={homeStyles.heroImageWrapper}>
          <iframe
            src="https://example-brain-animation.vercel.app/"
            className="w-full h-full border-0"
            title="Brain Animation Background"
          />
        </div>
        <div className={homeStyles.heroImageMobile}>
          <img
            src="/banner4.jpg"
            alt="Bhavana Neuro Clinic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={homeStyles.heroContent}>
          <motion.div
            className={homeStyles.heroTextWrapper}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className={homeStyles.heroTitle}
              variants={itemVariants}
            >
              Expert, Compassionate Neurological Care
            </motion.h1>
            <motion.p
              className={homeStyles.heroDescription}
              variants={itemVariants}
            >
              Welcome to Bhavana Neuro Clinic, where advanced neuroscience meets dedicated patient care. We are committed to providing comprehensive and affordable treatment for a wide range of neurological and related health conditions.
            </motion.p>
            <motion.div
              className={homeStyles.heroButtons}
              variants={itemVariants}
            >
              <Button size="lg" asChild>
                <Link href="/contact#appointment">
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className={homeStyles.emergencyButton}>
                <Phone className="mr-2 h-5 w-5" /> Call 24/7 Emergency
              </Button>
            </motion.div>
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
              />
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className={homeStyles.whyChooseUsSection}>
        <div className={homeStyles.whyChooseUsContainer}>
          <h2 className={homeStyles.sectionTitle}>Why Choose Bhavana Neuro Clinic?</h2>
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
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
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
