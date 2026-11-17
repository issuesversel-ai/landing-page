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
    'আমাদের সকল কার্যক্রম, প্রয়োজনীয় আপডেট ও গাইডলাইন নিয়মিতভাবে অফিসিয়াল চ্যানেলে শেয়ার করা হয়।',
  telegramUrl: 'https://t.me/+0Q2S8rn7pQw1Njc1',
  contactEmail: 'support@example.com',
  ctaLabel: 'এখানে ক্লিক করে টেলিগ্রাম চ্যানেলে জয়েন করুন',
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
  steps: [
    '১. নিচের বাটনে ক্লিক করুন',
    '২. টেলিগ্রাম চ্যানেলে জয়েন করুন',
    '৩. চ্যানেলটি পুরোপুরি ভিজিট করুন',
  ],
  faqs: [
    {
      id: 'how-to-join',
      question: 'কীভাবে জয়েন করবো?',
      answer:
        'উপরে থাকা "এখানে ক্লিক করে টেলিগ্রাম চ্যানেলে জয়েন করুন" বাটনে ট্যাপ করুন। আপনার ফোনে Telegram অ্যাপ ইনস্টল করা থাকলে সরাসরি চ্যানেলটি ওপেন হবে, এরপর নিচের Join বাটনে ক্লিক করে যুক্ত হতে পারবেন।',
    },
    {
      id: 'where-updates',
      question: 'সব আপডেট কোথায় পাবো?',
      answer:
        'চ্যানেলে যুক্ত হওয়ার পর উপরের পিন করা (Pinned) মেসেজটি চেক করুন। আমাদের সকল নতুন নোটিশ, নিয়মাবলি ও দৈনন্দিন আপডেট নিয়মিত সেখানেই প্রকাশ করা হয়।',
    },
    {
      id: 'need-help',
      question: 'কোনো সহায়তার প্রয়োজন হলে?',
      answer:
        'লিঙ্ক ওপেন করতে সমস্যা হলে নিচের "লিঙ্ক কপি করুন" অপশন ব্যবহার করে আপনার ব্রাউজারে পেস্ট করুন অথবা টেলিগ্রাম অ্যাপে সরাসরি সার্চ করুন। জরুরি প্রয়োজনে আমাদের সাপোর্ট ইমেইলে যোগাযোগ করতে পারেন।',
    },
  ] as FaqItem[],
};
