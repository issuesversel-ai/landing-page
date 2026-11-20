export interface FeatureItem {
  id: string;
  topLabel: string;
  bottomLabel: string;
  icon: 'shield' | 'calendar' | 'users';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * আপনার টেলিগ্রাম চ্যানেলের লিঙ্ক ও তথ্য এখানে পরিবর্তন করুন।
 * হোস্টিংয়ে আপলোড করার আগে অবশ্যই telegramUrl-এ আপনার আসল চ্যানেলের লিঙ্ক বসান।
 */
export const SITE_CONFIG = {
  communityName: 'অফিসিয়াল প্রাইভেট কমিউনিটি',
  subtitle:
    'আমাদের সকল কার্যক্রম, প্রয়োজনীয় আপডেট ও গাইডলাইন নিয়মিতভাবে অফিসিয়াল চ্যানেলে শেয়ার করা হয়\u00A0।',
  telegramUrl: 'https://t.me/+lGBJkjHZ0K4xY2Q1',
  telegramUsername: '@BuiltForSuccessOfficial',
  contactEmail: 'contact@builtforsuccessofficial.com',
  ctaLabel: 'এখানে ক্লিক করে জয়েন করুন',
  copyrightText: '© ২০২৬ অফিসিয়াল প্রাইভেট কমিউনিটি · স্বাধীন কমিউনিটি পোর্টাল',
  features: [
    {
      id: 'verified',
      topLabel: 'নিরাপদ',
      bottomLabel: 'কমিউনিটি',
      icon: 'shield',
    },
    {
      id: 'updates',
      topLabel: 'নিয়মিত',
      bottomLabel: 'আপডেট',
      icon: 'calendar',
    },
    {
      id: 'access',
      topLabel: 'সরাসরি',
      bottomLabel: 'অ্যাক্সেস',
      icon: 'users',
    },
  ] as FeatureItem[],
  faqs: [
    {
      id: 'how-to-join',
      question: 'কীভাবে জয়েন করবো\u00A0?',
      answer:
        'উপরে থাকা "এখানে ক্লিক করে জয়েন করুন" বাটনে ট্যাপ করুন\u00A0। আপনার ফোনে Telegram অ্যাপ ইনস্টল করা থাকলে সরাসরি চ্যানেলটি ওপেন হবে, এরপর নিচের Join বাটনে ক্লিক করে যুক্ত হতে পারবেন\u00A0।',
    },
    {
      id: 'where-updates',
      question: 'সব আপডেট কোথায় পাবো\u00A0?',
      answer: 'চ্যানেলে সব আপডেট দেওয়া হবে, চ্যানেলটি ভিজিট করলেই পেয়ে যাবেন\u00A0।',
    },
  ] as FaqItem[],
};
