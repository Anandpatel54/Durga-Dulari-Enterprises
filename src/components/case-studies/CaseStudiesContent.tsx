import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { caseStudies } from '@/data/caseStudies';
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  Factory,
  ShieldCheck,
} from 'lucide-react';

const formatServiceName = (slug: string) => {
  const serviceMap: Record<string, string> = {
    'textile-manpower-supply': 'Textile Manpower Supply',
    'mechanical-maintenance': 'Mechanical Maintenance',
    'amc-services': 'AMC Services',
    'textile-consultancy': 'Textile Consultancy',
    'training-recruitment': 'Training & Recruitment',
    'projects-division': 'Projects Division',
    'utility-operations': 'Utility Operations',
    'plant-shifting': 'Plant Relocation & Shifting',
    'sick-mill-revival': 'Sick Mill Revival (NCLT)',
  };
  return serviceMap[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

export function CaseStudiesContent() {
  return (
    <div className="bg-slate-50/70 dark:bg-slate-950 min-h-screen">
      {/* 1. High-Impact Industrial Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2545] via-[#071b33] to-[#040e1b] py-12 sm:py-16 relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-navy/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary-orange" />
              Verified Mill Performance Records
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3.5 tracking-tight leading-tight text-white">
              Proven Turnarounds & <span className="text-primary-orange">Operational Case Studies</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
              Real results from textile mills across India. Documented downtime reductions, cost savings, workforce mobilizations, and NCLT turnaround success stories.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Case Studies List */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                id={study.slug}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 overflow-hidden animate-fade-in-up"
              >
                {/* Header: Identity, Metadata & Key Metric Callout */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                        Case Study #{study.id.padStart(2, '0')}
                      </span>

                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md flex items-center gap-1 border border-slate-200/60 dark:border-slate-700">
                        <Factory size={12} className="text-slate-500" />
                        <span>{study.industry} Sector</span>
                      </span>

                      {study.location && (
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-2 py-0.5 rounded flex items-center gap-1">
                          <MapPin size={11} />
                          <span>{study.location}</span>
                        </span>
                      )}

                      {study.establishedYear && (
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-2 py-0.5 rounded flex items-center gap-1">
                          <Calendar size={11} />
                          <span>Est. {study.establishedYear}</span>
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-primary-navy dark:text-white tracking-tight">
                      {study.clientName || study.clientProfile}
                    </h2>
                  </div>

                  {/* Highlight Metric Callout Pill */}
                  {study.keyMetric && (
                    <div className="shrink-0">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                        <TrendingUp size={15} className="text-slate-700 dark:text-slate-300" />
                        <span className="text-xs sm:text-sm font-extrabold text-primary-navy dark:text-white">
                          {study.keyMetric}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Tags Pill Bar */}
                <div className="py-4 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                    Services Deployed:
                  </span>
                  {study.services.map((svc, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      {formatServiceName(svc)}
                    </span>
                  ))}
                </div>

                {/* Structured Breakdown: Challenge, Solution, Results */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
                  {/* 1. Operational Challenge */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-700/60 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        <AlertTriangle size={14} className="text-slate-500" />
                        <span>Operational Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                  </div>

                  {/* 2. Deployed Solution */}
                  <div className="bg-slate-50/80 dark:bg-slate-800/40 p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-700/60 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        <Wrench size={14} className="text-slate-500" />
                        <span>Engineered Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* 3. Measurable Results */}
                  <div className="bg-slate-100/70 dark:bg-slate-800/70 p-4 sm:p-5 rounded-xl border border-slate-200/70 dark:border-slate-700 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-navy dark:text-white mb-2">
                        <TrendingUp size={14} className="text-slate-600 dark:text-slate-300" />
                        <span>Verified Outcomes</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-3">
                        {study.results}
                      </p>
                    </div>

                    {/* Metric Highlights */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        {study.metrics.map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs"
                          >
                            <CheckCircle2 size={11} className="text-slate-600 dark:text-slate-400" />
                            <span>{m}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Card Footer with Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <ShieldCheck size={14} />
                    <span>Reference audit available upon verification request</span>
                  </div>

                  <Link
                    href={`/contact?requirement=${study.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-navy hover:bg-[#071b33] text-white font-bold text-xs rounded-xl transition-all shadow-xs hover:shadow-md hover:scale-102 active:scale-95"
                  >
                    <span>Inquire for Similar Solution</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Verification & References Trust Box */}
          {/* <div className="mt-14 max-w-5xl mx-auto bg-gradient-to-br from-[#0B2545] via-[#081f3b] to-[#040e1b] rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-slate-700/60 text-white">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-slate-200 mb-3 border border-white/10">
                  <FileCheck2 size={13} className="text-primary-orange" />
                  <span>Confidential Client Verification</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight">
                  Need Verified Mill Reference Documents?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Real verified case studies, auditor reports, and written references from mill owners are provided under NDA upon request for qualifying corporate textile projects.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary-orange hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>Request Verified References</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+919752061681"
                  className="px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2"
                >
                  <PhoneCall size={14} />
                  <span>Speak to Consultant</span>
                </a>
              </div>
            </div>
          </div> */}
        </Container>
      </section>
    </div>
  );
}
