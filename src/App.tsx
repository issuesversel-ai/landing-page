import {
  AlertTriangle,
  CalendarCheck2,
  Check,
  ChevronDown,
  Copy,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
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

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function App() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [legalTab, setLegalTab] = useState<LegalTab>(null);
  const [usernameCopied, setUsernameCopied] = useState(false);
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  const handleCopyUsername = async () => {
    const value = SITE_CONFIG.telegramUsername;
    let success = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        success = false;
      }
    }

    if (success) {
      setUsernameCopied(true);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setUsernameCopied(false);
      }, 2400);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="cyber-grid-bg relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden px-4 py-8 sm:px-6 sm:py-12">
        {/* Subtle ambient radial glow behind main card */}
        <div
          aria-hidden="true"
          className="ambient-orb pointer-events-none absolute top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[96px]"
        />

        <main className="relative z-10 w-full max-w-[440px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="relative overflow-hidden rounded-[28px] border border-cyan-500/20 bg-[#05121b]/85 px-5 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-md sm:px-7 sm:py-9"
          >
            {/* Top subtle luminous hairline */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent"
            />

            {/* Top Telegram Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.38, delay: 0.04, ease: smoothEase }}
              className="flex justify-center"
            >
              <div className="emblem-float emblem-glow flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-[#0b2a3c] to-[#051622] text-sky-300">
                <TelegramPlaneIcon className="h-11 w-11 -translate-x-0.5 translate-y-0.5 drop-shadow-[0_4px_12px_rgba(56,189,248,0.45)]" />
              </div>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.1, ease: smoothEase }}
              className="mt-5 text-center"
            >
              <h1 className="text-balance text-[2rem] font-bold leading-[1.2] tracking-tight text-white sm:text-[2.2rem]">
                {SITE_CONFIG.communityName}
              </h1>
              <p className="mx-auto mt-3 max-w-[36ch] text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                {SITE_CONFIG.subtitle}
              </p>
            </motion.div>

            {/* 3 Feature Blocks */}
            <motion.section
              aria-label="কমিউনিটির বৈশিষ্ট্য"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.16, ease: smoothEase }}
              className="mt-6 grid grid-cols-3 gap-2.5"
            >
              {SITE_CONFIG.features.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-[#091e2b]/85 px-2.5 py-2.5 transition-colors duration-150 hover:border-cyan-400/40 hover:bg-[#0b2535]/90"
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
            </motion.section>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.28, ease: smoothEase }}
              className="mt-6"
            >
              <motion.a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.16, ease: smoothEase }}
                className="cta-glow cta-shimmer group flex w-full flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-b from-[#bae6fd] via-[#38bdf8] to-[#06b6d4] px-4 py-2 text-[#03131f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05121b] sm:px-5 sm:py-2.5"
              >
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#041522] text-sky-200 ring-1 ring-white/40 transition-transform duration-150 group-hover:scale-105 sm:h-8 sm:w-8">
                  <TelegramPlaneIcon className="h-4 w-4 -translate-x-[1px] translate-y-[0.5px] sm:h-4.5 sm:w-4.5" />
                </span>
                <span className="relative z-10 whitespace-nowrap text-center text-[20px] font-bold leading-tight [word-spacing:0.06em] drop-shadow-[0_1px_0_rgba(255,255,255,0.45)] min-[390px]:text-[22px] sm:text-[25px]">
                  {SITE_CONFIG.ctaLabel}
                </span>
              </motion.a>
            </motion.div>

            {/* Username Copy & Search Fallback Box */}
            <motion.section
              aria-label="ইউজারনেম কপি করে সার্চ দিন"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.32, ease: smoothEase }}
              className="mt-5 rounded-2xl border border-cyan-500/25 bg-[#071a26]/85 p-4 sm:p-5"
            >
              <div className="flex items-center gap-1.5 text-xs font-medium text-amber-300">
                <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>জয়েন করতে সমস্যা&nbsp;?</span>
              </div>

              <h2 className="mt-2 text-base font-bold text-white sm:text-[17px]">
                ইউজারনেম কপি করে সার্চ দিন
              </h2>

              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300 sm:text-sm">
                বাটনে ক্লিক করে না ঢুকতে পারলে{' '}
                <span className="font-semibold text-cyan-300">
                  {SITE_CONFIG.telegramUsername}
                </span>{' '}
                কপি করুন, তারপর টেলিগ্রামের{' '}
                <strong className="font-semibold text-white">সার্চ বক্সে</strong> পেস্ট করে
                সার্চ দিন&nbsp;।
              </p>

              {/* Username Row + Copy Button */}
              <div className="mt-3.5 flex items-center justify-between gap-2 rounded-xl border border-cyan-500/25 bg-[#04111a]/90 p-2 pl-3">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12px] font-bold tracking-tight text-white min-[390px]:text-[13px] sm:text-sm">
                    {SITE_CONFIG.telegramUsername}
                  </div>
                  <div className="text-[10.5px] font-medium text-slate-400">
                    টেলিগ্রাম ইউজারনেম
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyUsername}
                  className={`inline-flex min-h-[38px] shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                    usernameCopied
                      ? 'border border-emerald-400/40 bg-emerald-500/20 text-emerald-200'
                      : 'bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd] text-[#04121d] hover:from-white hover:to-[#e0f2fe] active:scale-[0.98]'
                  }`}
                >
                  {usernameCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>কপি হয়েছে</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>কপি</span>
                    </>
                  )}
                </button>
              </div>

              {/* Search Tip */}
              <div className="mt-3 flex items-start gap-2 rounded-xl border border-cyan-500/15 bg-[#082230]/80 px-3 py-2 text-xs leading-relaxed text-slate-300">
                <Search
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300"
                  aria-hidden="true"
                />
                <p>
                  <span className="font-semibold text-amber-300">টিপস&nbsp;:</span> টেলিগ্রামে
                  ঢুকে সার্চে{' '}
                  <span className="font-medium text-white">
                    {SITE_CONFIG.telegramUsername}
                  </span>{' '}
                  লিখলেই চ্যানেল পাবেন&nbsp;।
                </p>
              </div>
            </motion.section>

            {/* FAQ Accordion Box */}
            <motion.section
              aria-label="সাধারণ প্রশ্নোত্তর"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.38, ease: smoothEase }}
              className="mt-5 rounded-2xl border border-cyan-500/25 bg-[#061824]/80 p-2.5"
            >
              <div className="space-y-2">
                {SITE_CONFIG.faqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`overflow-hidden rounded-xl border bg-[#081d2b]/85 transition-colors duration-150 ${
                        isOpen
                          ? 'border-cyan-400/45'
                          : 'border-slate-700/70 hover:border-cyan-500/35'
                      }`}
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

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="faq-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: smoothEase }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-slate-800/80 px-4 py-3 text-sm leading-relaxed text-slate-300">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* Footer Legal Links & Independent Notice */}
            <footer className="mt-6 border-t border-slate-800/70 pt-4 text-center">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400">
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
              </div>
              <p className="mt-1.5 text-[11px] text-slate-500">
                {SITE_CONFIG.copyrightText}
              </p>
            </footer>
          </motion.div>
        </main>

        <LegalModal activeTab={legalTab} onClose={() => setLegalTab(null)} />
      </div>
    </MotionConfig>
  );
}
