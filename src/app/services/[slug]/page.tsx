import React from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { DynamicIcon } from '@/components/common/DynamicIcon';
import { services, getAllServiceSlugs } from '@/data/services';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  const consultationHref = `/contact?requirement=${encodeURIComponent(service?.slug || '')}`;

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Button asChild>
          <Link href="/services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] text-white py-16 sm:py-20 relative overflow-hidden dark-industrial-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 text-primary-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Service Line
              </span>
              <div className="mb-6 flex items-start gap-4">
                <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-orange/20 text-primary-orange border border-primary-orange/30">
                  <DynamicIcon name={service.icon} size={28} />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-white">{service.title}</h1>
                  <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                <Button variant="secondary" asChild>
                  <Link href={consultationHref} className="gap-2 font-bold shadow-md">
                    Request Consultation <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <MessageCircle size={18} />
                    WhatsApp Support
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 shadow-2xl text-white">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-orange/20 text-primary-orange border border-primary-orange/30">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">Operational support, without delay</h2>
                <p className="text-sm leading-6 text-slate-300 mb-5">
                  Share your requirement and our team will help you identify the right scope, deployment path, and next step.
                </p>
                <div className="space-y-3 text-sm font-semibold text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary-orange shrink-0" />
                    PAN India service coverage
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary-orange shrink-0" />
                    24x7 urgent support route
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary-orange shrink-0" />
                    Compliance-ready process
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/60">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-primary-orange">Why this service matters</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-orange/10 text-primary-orange">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium leading-6">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-primary-orange">How we execute</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {service.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="h-full bg-white dark:bg-slate-900/60 rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-orange text-white font-bold">
                      {step.step}
                    </div>
                    <Workflow className="h-5 w-5 text-primary-orange/70" />
                  </div>
                  <h3 className="font-bold mb-2 text-slate-950 dark:text-white text-lg">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-6">{step.description}</p>
                </div>
                {step.step < service.process.length && (
                  <div className="hidden xl:block absolute top-10 -right-3 w-6 h-0.5 bg-primary-orange/70" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pain Points */}
      <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/60">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold text-primary-orange">Problem to solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">Common Challenges We Solve</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {service.painPoints.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-950 rounded-xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="mb-5 rounded-lg border border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-950/20 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Challenge</p>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white leading-6">{item.challenge}</h3>
                </div>
                <div className="rounded-lg border border-green-100 dark:border-green-900/30 bg-green-50 dark:bg-green-950/20 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-400 mb-2">Our Solution</p>
                  <p className="text-slate-700 dark:text-slate-300 leading-6">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary-orange text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4 text-white dark:text-white">Ready to improve your operations?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">Get in touch with our experts to discuss your specific requirements.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href={consultationHref} className="gap-2">
                <PhoneCall size={18} />
                {service.cta.primary}
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
