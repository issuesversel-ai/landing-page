import {
  CalendarCheck2,
  ChevronDown,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { LegalModal, type LegalTab } from './components/LegalModal';
import { SITE_CONFIG, type FeatureItem } from './config';

function TelegramPlaneIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M21.44 3.49a1.25 1.25 0 0 0-1.3-.18L2.97 10.42c-.93.39-.9 1.72.05 2.06l4.41 1.56 1.71 5.14c.27.82 1.32 1.02 1.88.36l2.58-3.03 4.69 3.43c.72.53 1.74.14 1.93-.74l2.42-14.37a1.25 1.25 0 0 0-.2-1.34ZM9.45 14.33l-.83 3.24-.97-3.03 9.71-6.51-7.91 6.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FeatureIcon({ icon }: { icon: FeatureItem['icon'] }) {
  if (icon === 'shield') {
    return <ShieldCheck className="h-4 w-4 text-sky-300" aria-hidden="true" />;
  }
  if (icon === 'calendar') {
    return <CalendarCheck2 className="h-4 w-4 text-sky-300" aria-hidden="true" />;
  }
  return <Users className="h-4 w-4 text-sky-300" aria-hidden="true" />;
}

export default function App() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [legalTab, setLegalTab] = useState<LegalTab>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  return (
    <div className="cyber-grid-bg relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
      <main className="w-full max-w-[440px]">
        <div className="rounded-[28px] border border-cyan-500/20 bg-[#05121b]/80 px-5 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-md sm:px-7 sm:py-9">
          {/* Top Telegram Emblem */}
          <div className="flex justify-center">
            <div className="emblem-glow flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-[#0b2a3c] to-[#051622] text-sky-300">
              <TelegramPlaneIcon className="h-11 w-11 -translate-x-0.5 translate-y-0.5 drop-shadow-[0_4px_12px_rgba(56,189,248,0.45)]" />
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-5 text-center">
            <h1 className="text-balance text-[2rem] font-bold leading-[1.2] tracking-tight text-white sm:text-[2.2rem]">
              {SITE_CONFIG.communityName}
            </h1>
            <p className="mx-auto mt-3 max-w-[36ch] text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              {SITE_CONFIG.subtitle}
            </p>
          </div>

          {/* 3 Feature Blocks */}
          <section aria-label="কমিউনিটির বৈশিষ্ট্য" className="mt-6 grid grid-cols-3 gap-2.5">
            {SITE_CONFIG.features.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-[#091e2b]/85 px-2.5 py-2.5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10">
                  <FeatureIcon icon={item.icon} />
                </div>
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-[11px] font-semibold text-white sm:text-xs">
                    {item.topLabel}
                  </div>
                  <div className="truncate text-[11px] font-medium text-cyan-300 sm:text-xs">
                    {item.bottomLabel}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* 3-Step Guide Box */}
          <section
            aria-label="জয়েন করার নিয়ম"
            className="mt-5 rounded-2xl border border-cyan-400/35 bg-[#07202d]/75 px-5 py-4"
          >
            <ol className="space-y-1.5 text-[15px] font-medium text-slate-100">
              {SITE_CONFIG.steps.map((step) => {
                const [numPart, ...restParts] = step.split(' ');
                return (
                  <li key={step} className="flex items-start gap-2">
                    <span className="font-semibold text-cyan-300">{numPart}</span>
                    <span>{restParts.join(' ')}</span>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Primary CTA Button */}
          <div className="mt-6">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow group flex min-h-[56px] w-full items-center gap-2.5 rounded-full bg-gradient-to-r from-[#7dd3fc] via-[#38bdf8] to-[#22d3ee] p-1.5 pr-3.5 text-[#04121d] transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05121b] sm:gap-3 sm:p-2 sm:pr-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#061826] text-white shadow-inner transition-transform duration-150 group-hover:scale-105 sm:h-11 sm:w-11">
                <TelegramPlaneIcon className="h-5 w-5 -translate-x-[1px] translate-y-[1px]" />
              </span>
              <span className="flex-1 whitespace-nowrap text-center text-[11px] font-bold tracking-tight min-[390px]:text-[12px] sm:text-[13.5px]">
                {SITE_CONFIG.ctaLabel}
              </span>
            </a>
          </div>

          {/* FAQ Accordion Box */}
          <section
            aria-label="সাধারণ প্রশ্নোত্তর"
            className="mt-6 rounded-2xl border border-cyan-500/25 bg-[#061824]/80 p-2.5"
          >
            <div className="space-y-2">
              {SITE_CONFIG.faqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-xl border border-slate-700/70 bg-[#081d2b]/85 transition-colors hover:border-cyan-500/35"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="flex min-h-[44px] w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-[15px] font-medium text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-cyan-300' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-800/80 px-4 py-3 text-sm leading-relaxed text-slate-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Footer Legal Links */}
          <footer className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400">
            <button
              type="button"
              onClick={() => setLegalTab('privacy')}
              className="min-h-[36px] px-1 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              প্রাইভেসি পলিসি
            </button>
            <span aria-hidden="true" className="text-slate-600">
              |
            </span>
            <button
              type="button"
              onClick={() => setLegalTab('terms')}
              className="min-h-[36px] px-1 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              টার্মস অফ সার্ভিস
            </button>
            <span aria-hidden="true" className="text-slate-600">
              |
            </span>
            <button
              type="button"
              onClick={() => setLegalTab('contact')}
              className="min-h-[36px] px-1 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              যোগাযোগ
            </button>
          </footer>
        </div>
      </main>

      <LegalModal activeTab={legalTab} onClose={() => setLegalTab(null)} />
    </div>
  );
}
