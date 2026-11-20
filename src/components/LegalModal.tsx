import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { SITE_CONFIG } from '../config';

export type LegalTab = 'privacy' | 'terms' | 'contact' | null;

interface LegalModalProps {
  activeTab: LegalTab;
  onClose: () => void;
}

export function LegalModal({ activeTab, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!activeTab) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, onClose]);

  const titles: Record<Exclude<LegalTab, null>, string> = {
    privacy: 'প্রাইভেসি পলিসি (Privacy Policy)',
    terms: 'টার্মস অফ সার্ভিস (Terms of Service)',
    contact: 'যোগাযোগ ও সহায়তা (Contact)',
  };

  return (
    <AnimatePresence>
      {activeTab && (
        <motion.div
          key="legal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={onClose}
        >
          <motion.div
            key="legal-panel"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-[#071620] p-6 text-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <h2 id="legal-modal-title" className="text-lg font-semibold text-white">
                {titles[activeTab]}
              </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/70 text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[65vh] space-y-3 overflow-y-auto pr-1 text-sm leading-relaxed text-slate-300">
          {activeTab === 'privacy' && (
            <>
              <p>
                এই ওয়েবসাইটটি শুধুমাত্র ভিজিটরদের আমাদের অফিসিয়াল টেলিগ্রাম কমিউনিটি চ্যানেলের
                সাথে সংযুক্ত করার একটি তথ্যমূলক ল্যান্ডিং পেজ হিসেবে কাজ করে&nbsp;।
              </p>
              <p>
                <strong className="text-white">১. তথ্য সংগ্রহ&nbsp;:</strong> আমরা এই পেজে কোনো
                ব্যক্তিগত তথ্য, পাসওয়ার্ড, ফোন নম্বর বা পেমেন্ট তথ্য সংগ্রহ বা সংরক্ষণ করি না&nbsp;।
              </p>
              <p>
                <strong className="text-white">২. তৃতীয় পক্ষের প্ল্যাটফর্ম&nbsp;:</strong> আপনি যখন
                টেলিগ্রাম জয়েন বাটনে ক্লিক করেন, তখন আপনি Telegram-এর নিজস্ব অ্যাপ বা ওয়েবসাইটে
                প্রবেশ করেন, যা Telegram-এর নিজস্ব প্রাইভেসি পলিসি দ্বারা পরিচালিত হয়&nbsp;।
              </p>
              <p>
                <strong className="text-white">৩. কুকিজ ও অ্যানালিটিক্স&nbsp;:</strong> সাধারণ
                হোস্টিং সার্ভার লগ (যেমন ব্রাউজার টাইপ বা ভিজিট সময়) ছাড়া কোনো ব্যক্তিগত
                ট্র্যাকিং কুকি ব্যবহার করা হয় না&nbsp;।
              </p>
            </>
          )}

          {activeTab === 'terms' && (
            <>
              <p>
                এই ল্যান্ডিং পেজটি ব্যবহার করার মাধ্যমে আপনি নিচের সাধারণ শর্তাবলির সাথে সম্মত
                হচ্ছেন&nbsp;:
              </p>
              <p>
                <strong className="text-white">১. কমিউনিটি গাইডলাইন&nbsp;:</strong> অফিসিয়াল
                টেলিগ্রাম চ্যানেলে যুক্ত হওয়ার পর সকল সদস্যকে কমিউনিটির নিয়মাবলি ও শৃঙ্খলা
                মেনে চলতে হবে&nbsp;। স্প্যামিং বা অশালীন আচরণ গ্রহণযোগ্য নয়&nbsp;।
              </p>
              <p>
                <strong className="text-white">২. বয়সসীমা&nbsp;:</strong> এই কমিউনিটি ও এর সাথে
                সম্পর্কিত তথ্য শুধুমাত্র ১৮ বছর বা তার বেশি বয়সী ব্যবহারকারীদের জন্য প্রযোজ্য&nbsp;।
              </p>
              <p>
                <strong className="text-white">৩. দায়বদ্ধতা&nbsp;:</strong> এটি একটি স্বাধীন
                কমিউনিটি পোর্টাল&nbsp;। এই পেজটির সাথে TikTok বা Telegram কর্পোরেশনের কোনো
                অফিসিয়াল অংশীদারিত্ব নেই&nbsp;।
              </p>
            </>
          )}

          {activeTab === 'contact' && (
            <>
              <p>
                আমাদের কমিউনিটি বা এই ওয়েবসাইট সম্পর্কিত কোনো প্রশ্ন, অভিযোগ বা সহায়তার
                প্রয়োজনে নিচের মাধ্যমে যোগাযোগ করতে পারেন&nbsp;:
              </p>
              <div className="rounded-xl border border-slate-800 bg-[#040e15] p-4">
                <p className="text-xs text-slate-400">অফিসিয়াল সাপোর্ট ইমেইল</p>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="mt-1 inline-block font-medium text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-200"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
              <p className="text-xs text-slate-400">
                সাধারণত ২৪–৪৮ কর্মঘণ্টার মধ্যে ইমেইলের উত্তর দেওয়া হয়&nbsp;।
              </p>
            </>
          )}
        </div>

            <div className="mt-5 flex justify-end border-t border-slate-800 pt-3">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[40px] rounded-lg bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                ঠিক আছে
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
