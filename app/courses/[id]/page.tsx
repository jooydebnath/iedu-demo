"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  Clock,
  Users,
  Star,
  PlayCircle,
  ArrowRight,
  Tag,
  CheckCircle2,
  GraduationCap,
  Flame,
  Sparkles,
  BookOpen,
  Award,
  FileText,
  MessageCircle,
  Video,
  Download,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
  Heart,
  Share2,
  Calendar,
  Target,
  Headphones,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn, toBn } from "@/lib/utils";
import { useCart } from "@/lib/cart";

/* ─── Course data (same as homepage) ─── */
type Course = {
  id: string;
  title: string;
  subtitle: string;
  category: "fbc" | "second" | "special";
  badge: string;
  badgeColor: string;
  gradient: string;
  pretitle: string;
  thumbHighlight: string;
  ribbon?: string;
  price: number;
  oldPrice?: number;
  students: number;
  duration: string;
  rating: number;
  classes: number;
  perks: string[];
  level: string;
};

const COURSES: Course[] = [
  {
    id: "fbc-ssc26",
    title: "SSC FBC ২৬",
    subtitle: "ফুল ব্যাচ কোর্স — সাইন্স",
    category: "fbc",
    badge: "FBC ২৬",
    badgeColor: "from-fuchsia-500 to-pink-500",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    pretitle: "SSC ২৬",
    thumbHighlight: "FBC • SCIENCE",
    ribbon: "NEW",
    price: 4900,
    oldPrice: 8500,
    students: 12500,
    duration: "১২ মাস",
    rating: 4.9,
    classes: 320,
    perks: ["লাইভ ক্লাস", "প্রতিদিন এক্সাম", "মডেল টেস্ট", "ডাউট সলভ"],
    level: "ক্লাস ১০",
  },
  {
    id: "fbc-hsc26",
    title: "HSC FBC ২৬",
    subtitle: "ফুল ব্যাচ কোর্স — সাইন্স",
    category: "fbc",
    badge: "FBC ২৬",
    badgeColor: "from-blue-500 to-indigo-500",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    pretitle: "HSC ২৬",
    thumbHighlight: "FBC • SCIENCE",
    ribbon: "HOT",
    price: 5900,
    oldPrice: 9500,
    students: 9800,
    duration: "১২ মাস",
    rating: 4.8,
    classes: 360,
    perks: ["এক্সপার্ট টিচার", "নোট + স্লাইড", "চ্যাপ্টার টেস্ট", "VIP সাপোর্ট"],
    level: "ক্লাস ১১-১২",
  },
  {
    id: "fbc-hsc-comm",
    title: "HSC FBC ২৬",
    subtitle: "ফুল ব্যাচ কোর্স — কমার্স",
    category: "fbc",
    badge: "FBC ২৬",
    badgeColor: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    pretitle: "HSC ২৬",
    thumbHighlight: "FBC • COMMERCE",
    price: 4500,
    oldPrice: 7900,
    students: 5400,
    duration: "১২ মাস",
    rating: 4.8,
    classes: 280,
    perks: ["সব বিষয়", "প্র্যাকটিস শীট", "মাসিক পরীক্ষা", "১:১ সাপোর্ট"],
    level: "ক্লাস ১১-১২",
  },
  {
    id: "2nd-medical",
    title: "Medical 2nd Time",
    subtitle: "মেডিকেল ভর্তি প্রস্তুতি",
    category: "second",
    badge: "2nd Time",
    badgeColor: "from-rose-500 to-red-500",
    gradient: "from-rose-500/20 via-red-500/10 to-transparent",
    pretitle: "MEDICAL",
    thumbHighlight: "ADMISSION ২৬",
    ribbon: "HOT",
    price: 8900,
    oldPrice: 14500,
    students: 3200,
    duration: "১০ মাস",
    rating: 4.9,
    classes: 240,
    perks: ["MCQ মাস্টারি", "কুইক রিভিশন", "লাইভ এক্সাম", "র‍্যাঙ্কিং"],
    level: "Medical Admission",
  },
  {
    id: "2nd-engineer",
    title: "Engineering 2nd Time",
    subtitle: "ভার্সিটি ভর্তি (ইঞ্জি.)",
    category: "second",
    badge: "2nd Time",
    badgeColor: "from-amber-500 to-yellow-500",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    pretitle: "ENGINEERING",
    thumbHighlight: "BUET • KUET • RUET",
    price: 7900,
    oldPrice: 12500,
    students: 2800,
    duration: "১০ মাস",
    rating: 4.8,
    classes: 220,
    perks: ["গণিত স্পেশাল", "Physics Pro", "Chem Mastery", "Mock Test"],
    level: "Engineering",
  },
  {
    id: "2nd-varsity",
    title: "Varsity 2nd Time",
    subtitle: "DU/JU/RU ভর্তি প্রস্তুতি",
    category: "second",
    badge: "2nd Time",
    badgeColor: "from-cyan-500 to-blue-500",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    pretitle: "VARSITY",
    thumbHighlight: "DU • JU • RU",
    price: 6500,
    oldPrice: 10500,
    students: 4100,
    duration: "৮ মাস",
    rating: 4.7,
    classes: 180,
    perks: ["প্রশ্ন ব্যাংক", "টপিক ক্লাস", "সাপ্তাহিক টেস্ট", "Mentor Call"],
    level: "Varsity Admission",
  },
  {
    id: "spc-english",
    title: "Spoken English Pro",
    subtitle: "৯০ দিনে কথা বলো ইংরেজিতে",
    category: "special",
    badge: "স্পেশাল",
    badgeColor: "from-violet-500 to-purple-500",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    pretitle: "ENGLISH",
    thumbHighlight: "SPOKEN • PRO",
    ribbon: "NEW",
    price: 1900,
    oldPrice: 3500,
    students: 8400,
    duration: "৯০ দিন",
    rating: 4.9,
    classes: 60,
    perks: ["Live Practice", "Native Tutor", "Speaking Club", "Certificate"],
    level: "All Level",
  },
  {
    id: "spc-math",
    title: "গণিত মাস্টারক্লাস",
    subtitle: "সব ক্লাসের জন্য",
    category: "special",
    badge: "স্পেশাল",
    badgeColor: "from-orange-500 to-red-500",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    pretitle: "গণিত",
    thumbHighlight: "MASTERCLASS",
    price: 1500,
    oldPrice: 2900,
    students: 6700,
    duration: "৬ মাস",
    rating: 4.8,
    classes: 120,
    perks: ["Concept Class", "Problem Solve", "Worksheet", "Live Doubt"],
    level: "ক্লাস ৬-১০",
  },
  {
    id: "spc-ict",
    title: "ICT কমপ্লিট কোর্স",
    subtitle: "HSC ICT — সম্পূর্ণ সিলেবাস",
    category: "special",
    badge: "স্পেশাল",
    badgeColor: "from-lime-500 to-green-500",
    gradient: "from-lime-500/20 via-green-500/10 to-transparent",
    pretitle: "ICT",
    thumbHighlight: "HSC • COMPLETE",
    price: 990,
    oldPrice: 1990,
    students: 5200,
    duration: "৪ মাস",
    rating: 4.8,
    classes: 80,
    perks: ["সব অধ্যায়", "প্র্যাকটিকাল", "প্রশ্নব্যাংক", "মডেল টেস্ট"],
    level: "ক্লাস ১১-১২",
  },
];

/* ─── Curriculum data ─── */
const CURRICULUM = [
  {
    title: "মডিউল ১: ফাউন্ডেশন",
    lessons: 12,
    duration: "৮ ঘন্টা",
    topics: [
      "কোর্স ওভারভিউ ও গাইডলাইন",
      "বেসিক কনসেপ্ট ক্লিয়ারিং",
      "ফর্মুলা শীট ও শর্টকাট",
      "প্র্যাকটিস সেশন ১",
    ],
  },
  {
    title: "মডিউল ২: কোর কন্টেন্ট",
    lessons: 28,
    duration: "২২ ঘন্টা",
    topics: [
      "টপিক-ভিত্তিক ক্লাস শুরু",
      "ডেইলি প্র্যাকটিস MCQ",
      "চ্যাপ্টার টেস্ট সিরিজ",
      "ডাউট সলভিং সেশন",
    ],
  },
  {
    title: "মডিউল ৩: অ্যাডভান্সড",
    lessons: 20,
    duration: "১৮ ঘন্টা",
    topics: [
      "হায়ার অর্ডার থিংকিং প্রশ্ন",
      "প্রিভিয়াস ইয়ার সল্ভ",
      "টাইম ম্যানেজমেন্ট ট্রিক্স",
      "স্পেশাল টপিক ক্লাস",
    ],
  },
  {
    title: "মডিউল ৪: ফাইনাল প্রিপ",
    lessons: 15,
    duration: "১২ ঘন্টা",
    topics: [
      "ফুল মডেল টেস্ট (৫ সেট)",
      "লাইভ এক্সাম সিমুলেশন",
      "ফাইনাল রিভিশন ক্লাস",
      "র‍্যাঙ্কিং ও ফিডব্যাক",
    ],
  },
];

/* ─── Course descriptions ─── */
const COURSE_DESCRIPTIONS: Record<string, { fullTitle: string; shortDesc: string; longDesc: string; topics: string[] }> = {
  "fbc-ssc26": {
    fullTitle: "SSC FBC ২০২৬ — ফুল ব্যাচ কোর্স (সাইন্স)",
    shortDesc: "৯ম শ্রেণী থেকে ১০ম শ্রেণীর সম্পূর্ণ SSC সিলেবাস কভার করে এই কোর্সটি। দেশের সেরা শিক্ষকদের সাথে তোমার লার্নিং জার্নি শুরু করো।",
    longDesc: "এই কোর্সটি বিজ্ঞান বিভাগের শিক্ষার্থীদের জন্য প্রস্তুত। ১২ মাস ধরে পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান, উচ্চতর গণিত, সাধারণ গণিত ও বাংলাদেশ ও বিশ্বপরিচয় বিষয়গুলোর ফুল সিলেবাস কভার করা হবে। প্রতিটি বিষয়ে MCQ ও CQ পর্যায়ে স্পেশাল ক্লাস, নিয়মিত এক্সাম ও মেন্টরসেশন থাকবে।",
    topics: [
      "১২ মাসে SSC সাইন্স এর ফুল সিলেবাস কভার করা হবে",
      "পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান, উচ্চতর গণিত, সাধারণ গণিত",
      "MCQ ও CQ পর্যায়ে স্পেশাল ক্লাস",
      "নিয়মিত এক্সাম ও মডেল টেস্ট",
      "বাংলাদেশ ও বিশ্বপরিচয় বিষয়ে স্পেশাল ফোকাস",
    ],
  },
  "fbc-hsc26": {
    fullTitle: "HSC FBC ২০২৬ — ফুল ব্যাচ কোর্স (সাইন্স)",
    shortDesc: "১১-১২তম শ্রেণীর সম্পূর্ণ HSC সাইন্স সিলেবাস কভার করে এই কোর্সটি। ভর্তি পরীক্ষার জন্য গোড়া থেকে প্রস্তুতি।",
    longDesc: "এই কোর্সটি HSC সাইন্স বিভাগের শিক্ষার্থীদের জন্য। ১২ মাস ধরে পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান, উচ্চতর গণিত, সাধারণ গণিত ও ICT এর ফুল সিলেবাস কভার করা হবে। প্রতিটি বিষয়ে ডিটেইলড ক্লাস, সলভ ক্লাস ও রিভিশন সেশন থাকবে। ভর্তি পরীক্ষার জন্য অ্যাডভান্সড প্রিপারেশন ও থাকবে।",
    topics: [
      "১২ মাসে HSC সাইন্স এর ফুল সিলেবাস কভার করা হবে",
      "পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান, উচ্চতর গণিত, সাধারণ গণিত ও ICT",
      "ডিটেইলড ক্লাস, সলভ ক্লাস ও রিভিশন সেশন",
      "ভর্তি পরীক্ষার জন্য অ্যাডভান্সড প্রিপারেশন",
      "নিয়মিত মডেল টেস্ট ও র‍্যাঙ্কিং",
    ],
  },
  "fbc-hsc-comm": {
    fullTitle: "HSC FBC ২০২৬ — ফুল ব্যাচ কোর্স (কমার্স)",
    shortDesc: "১১-১২তম শ্রেণীর সম্পূর্ণ HSC কমার্স সিলেবাস কভার করে এই কোর্সটি। ব্যবসায় শিক্ষা ও মানবিক বিভাগের শিক্ষার্থীদের জন্য।",
    longDesc: "এই কোর্সটি HSC কমার্স বিভাগের শিক্ষার্থীদের জন্য। ব্যবসায় শিক্ষা, অর্থনীতি, হিসাববিজ্ঞান ও ICT এর ফুল সিলেবাস কভার করা হবে। প্রাক্টিক্যাল অ্যাপ্রোচে প্রতিটি বিষয় শেখানো হবে যাতে শিক্ষার্থীরা পরীক্ষায় সেরা ফলাফল করতে পারে।",
    topics: [
      "১২ মাসে HSC কমার্স এর ফুল সিলেবাস কভার করা হবে",
      "ব্যবসায় শিক্ষা, অর্থনীতি, হিসাববিজ্ঞান ও ICT",
      "প্রাক্টিক্যাল অ্যাপ্রোচে সব বিষয় শেখানো হবে",
      "মাসিক পরীক্ষা ও মডেল টেস্ট",
      "১:১ মেন্টর সাপোর্ট",
    ],
  },
  "2nd-medical": {
    fullTitle: "Medical 2nd Time — মেডিকেল ভর্তি প্রস্তুতি ২০২৬",
    shortDesc: "মেডিকেল কলেজে ভর্তি হতে চাও? এই কোর্সটি তোমার স্বপ্ন পূরণের প্রথম ধাপ। দেশের সেরা শিক্ষকদের সাথে প্রস্তুতি নাও।",
    longDesc: "এই কোর্সটি মেডিকেল ভর্তিচ্ছু শিক্ষার্থীদের জন্য। জীববিজ্ঞান, রসায়ন, পদার্থবিজ্ঞান ও ইংরেজি বিষয়ে MCQ মাস্টারি ক্লাস, কুইক রিভিশন, লাইভ এক্সাম ও র‍্যাঙ্কিং সিস্টেম থাকবে। প্রতিদিন ১০০+ MCQ প্র্যাকটিস ও সাপ্তাহিক ফুল মডেল টেস্ট।",
    topics: [
      "১০ মাসে মেডিকেল ভর্তির ফুল প্রিপারেশন",
      "জীববিজ্ঞান, রসায়ন, পদার্থবিজ্ঞান ও ইংরেজি",
      "MCQ মাস্টারি ও কুইক রিভিশন",
      "প্রতিদিন ১০০+ MCQ প্র্যাকটিস",
      "সাপ্তাহিক ফুল মডেল টেস্ট ও র‍্যাঙ্কিং",
    ],
  },
  "2nd-engineer": {
    fullTitle: "Engineering 2nd Time — ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি ২০২৬",
    shortDesc: "BUET, KUET, RUET এ ভর্তি হতে চাও? এই কোর্সে গণিত ও পদার্থবিজ্ঞানে মাস্টারি করে চান্স পাও।",
    longDesc: "এই কোর্সটি ইঞ্জিনিয়ারিং ভর্তিচ্ছু শিক্ষার্থীদের জন্য। গণিত স্পেশাল, Physics Pro, Chemistry Mastery ক্লাস ও মক টেস্ট থাকবে। প্রতিটি বিষয়ে ডিটেইলড সলভিং টেকনিক শেখানো হবে। ১০ মাসে ফুল প্রস্তুতি।",
    topics: [
      "১০ মাসে ইঞ্জিনিয়ারিং ভর্তির ফুল প্রিপারেশন",
      "গণিত স্পেশাল, Physics Pro, Chemistry Mastery",
      "ডিটেইলড সলভিং টেকনিক",
      "মক টেস্ট ও র‍্যাঙ্কিং সিস্টেম",
      "প্রিভিয়াস ইয়ার কুশ্চেন সলভিং",
    ],
  },
  "2nd-varsity": {
    fullTitle: "Varsity 2nd Time — বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি (DU/JU/RU) ২০২৬",
    shortDesc: "ঢাকা বিশ্ববিদ্যালয়, জাহাঙ্গীরনগর বিশ্ববিদ্যালয় বা রাজশাহী বিশ্ববিদ্যালয়ে ভর্তি হতে চাও? এই কোর্স তোমার জন্য।",
    longDesc: "এই কোর্সটি DU, JU, RU ভর্তিচ্ছু শিক্ষার্থীদের জন্য। প্রশ্ন ব্যাংক, টপিক ক্লাস, সাপ্তাহিক টেস্ট ও মেন্টর কল সুবিধা থাকবে। ৮ মাসে সম্পূর্ণ প্রস্তুতি নিয়ে চান্স পাওয়ার জন্য রেডি হও।",
    topics: [
      "৮ মাসে DU/JU/RU ভর্তির ফুল প্রিপারেশন",
      "প্রশ্ন ব্যাংক ও টপিক ক্লাস",
      "সাপ্তাহিক টেস্ট ও মডেল এক্সাম",
      "মেন্টর কল সুবিধা",
      "বাংলা, ইংরেজি, সাধারণ জ্ঞান ও গণিত স্পেশাল",
    ],
  },
  "spc-english": {
    fullTitle: "Spoken English Pro — ৯০ দিনে কথা বলো ইংরেজিতে",
    shortDesc: "কথায় কথায় ইংরেজিতে কথা বলতে চাও? ৯০ দিনে ফ্লুয়েন্ট হও এই কোর্সে। Native Tutor ও Speaking Club সুবিধা।",
    longDesc: "এই কোর্সটি সবার জন্য — স্কুল-কলেজ শিক্ষার্থী থেকে চাকরিজীবী সবাই করতে পারবে। লাইভ প্র্যাকটিস, Native Tutor, Speaking Club ও সার্টিফিকেট সুবিধা থাকবে। প্রতিদিন ৩০ মিনিট প্র্যাকটিস করে ৯০ দিনে ইংরেজিতে কথা বলার কনফিডেন্স পাবে।",
    topics: [
      "৯০ দিনে ফ্লুয়েন্ট ইংলিশ স্পিকিং",
      "লাইভ প্র্যাকটিস ও নেটিভ টিউটর",
      "স্পিকিং ক্লাব ও গ্রুপ ডিসকাশন",
      "সার্টিফিকেট অফ কমপ্লিশন",
      "IELTS ও দৈনন্দিন কনভার্সেশন ফোকাস",
    ],
  },
  "spc-math": {
    fullTitle: "গণিত মাস্টারক্লাস — সব ক্লাসের জন্য",
    shortDesc: "গণিত ভয় পাও? এই মাস্টারক্লাসে কনসেপ্ট থেকে প্র্যাকটিস সব কিছু শেখানো হবে। ক্লাস ৬ থেকে ১০ পর্যন্ত সবার জন্য।",
    longDesc: "এই কোর্সটি ক্লাস ৬ থেকে ১০ পর্যন্ত সব শিক্ষার্থীর জন্য। প্রতিটি কনসেপ্ট ক্লিয়ারিং ক্লাস, প্রবলেম সলভিং, ওয়ার্কশিট ও লাইভ ডাউট সলভিং থাকবে। অলিম্পিয়াড মেন্টরদের গাইডেন্সে গণিতকে সহজ ও মজাদার করে তোলা হবে।",
    topics: [
      "৬ মাসে সম্পূর্ণ গণিত মাস্টারি",
      "কনসেপ্ট ক্লাস ও প্রবলেম সলভিং",
      "প্রতিদিন ওয়ার্কশিট ও লাইভ ডাউট",
      "ক্লাস ৬-১০ সবার জন্য উপযোগী",
      "অলিম্পিয়াড মেন্টরদের গাইডেন্স",
    ],
  },
  "spc-ict": {
    fullTitle: "ICT কমপ্লিট কোর্স — HSC ICT সম্পূর্ণ সিলেবাস",
    shortDesc: "HSC ICT-তে A+ পেতে চাও? এই কোর্সে থিওরি থেকে প্র্যাকটিক্যাল সব কিছু শেখানো হবে।",
    longDesc: "এই কোর্সটি HSC ১১-১২তম শ্রেণীর শিক্ষার্থীদের জন্য। ICT-র সব অধ্যায়, প্র্যাকটিক্যাল, প্রশ্নব্যাংক ও মডেল টেস্ট থাকবে। থিওরি ও প্র্যাকটিক্যাল উভয় বিষয়েই স্পেশাল ফোকাস। ৪ মাসে সম্পূর্ণ ICT মাস্টারি।",
    topics: [
      "৪ মাসে HSC ICT এর ফুল সিলেবাস কভার",
      "সব অধ্যায় ও প্র্যাকটিক্যাল ক্লাস",
      "প্রশ্নব্যাংক ও মডেল টেস্ট",
      "থিওরি ও প্র্যাকটিক্যাল উভয় ফোকাস",
      "A+ গ্রেডের সিক্রেট টেকনিক",
    ],
  },
};

/* ─── FAQ data ─── */
const FAQS = [
  {
    q: "কোর্সটি কাদের জন্য?",
    a: "এই কোর্সটি সেই সকল শিক্ষার্থীদের জন্য যারা সম্পূর্ণ সিলেবাস কভার করে পরীক্ষায় সেরা ফলাফল করতে চায়। বিগিনার থেকে অ্যাডভান্সড — সবার জন্য উপযোগী।",
  },
  {
    q: "ক্লাস মিস হলে কি রেকর্ডিং পাবো?",
    a: "হ্যাঁ! প্রতিটি লাইভ ক্লাসের রেকর্ডিং ২৪ ঘন্টার মধ্যে আপলোড হয়। কোর্স শেষ হওয়ার পরও ৬ মাস পর্যন্ত অ্যাক্সেস থাকবে।",
  },
  {
    q: "পেমেন্ট কিভাবে করবো?",
    a: "বিকাশ, নগদ, রকেট, কার্ড (Visa/Mastercard) সহ সব জনপ্রিয় পেমেন্ট মেথড সাপোর্ট করে। কিস্তিতে পেমেন্টের সুবিধাও আছে।",
  },
  {
    q: "রিফান্ড পলিসি কি?",
    a: "কোর্সে ভর্তির ৭ দিনের মধ্যে ফুল রিফান্ড পাবেন (শর্ত: ২০% এর বেশি কন্টেন্ট অ্যাক্সেস না করলে)।",
  },
  {
    q: "সার্টিফিকেট পাবো?",
    a: "হ্যাঁ, কোর্স সম্পূর্ণ করলে ভেরিফায়েড সার্টিফিকেট পাবেন যা LinkedIn-এ শেয়ার করতে পারবেন।",
  },
];

/* ─── Instructor data ─── */
const INSTRUCTORS: Record<string, { name: string; title: string; bio: string; initials: string; color: string }> = {
  "fbc-ssc26": { name: "ড. শাহরিয়ার রহমান", title: "ঢাকা বিশ্ববিদ্যালয় (পদার্থবিজ্ঞান)", bio: "১৫+ বছরের শিক্ষকতার অভিজ্ঞতা। ৫০,০০০+ শিক্ষার্থীকে সফলভাবে গাইড করেছেন।", initials: "শা", color: "from-fuchsia-500 to-pink-600" },
  "fbc-hsc26": { name: "প্রফেসর আনিসুর রহমান", title: "BUET (CSE Department)", bio: "HSC ও অ্যাডমিশন প্রস্তুতিতে ১২+ বছরের অভিজ্ঞতা। টপ রেটেড ইনস্ট্রাক্টর।", initials: "আ", color: "from-blue-500 to-indigo-600" },
  "fbc-hsc-comm": { name: "মোঃ তারিকুল ইসলাম", title: "ঢাকা বিশ্ববিদ্যালয় (AIS)", bio: "কমার্স বিভাগের সেরা শিক্ষক। ১০,০০০+ HSC শিক্ষার্থীর A+ এর পেছনে তিনি।", initials: "তা", color: "from-emerald-500 to-teal-600" },
  "2nd-medical": { name: "ড. নুসরাত জাহান", title: "ঢাকা মেডিকেল কলেজ", bio: "মেডিকেল অ্যাডমিশন কোচিংয়ে ৮+ বছর। ৫০০+ শিক্ষার্থী মেডিকেলে চান্স পেয়েছে।", initials: "নু", color: "from-rose-500 to-red-600" },
  "2nd-engineer": { name: "ইঞ্জি. রাফিদ হাসান", title: "BUET (EEE)", bio: "BUET র‍্যাঙ্ক ৩। ইঞ্জিনিয়ারিং অ্যাডমিশন প্রস্তুতিতে সবচেয়ে জনপ্রিয় মেন্টর।", initials: "রা", color: "from-amber-500 to-yellow-600" },
  "2nd-varsity": { name: "অধ্যাপক কামরুল হাসান", title: "ঢাকা বিশ্ববিদ্যালয় (ইংরেজি)", bio: "ভার্সিটি অ্যাডমিশন গাইডেন্সে ২০+ বছরের অভিজ্ঞতা। DU তে ১,০০০+ শিক্ষার্থী চান্স পেয়েছে।", initials: "কা", color: "from-cyan-500 to-blue-600" },
  "spc-english": { name: "মিস্টার অরিন", title: "Cambridge Certified Trainer", bio: "IELTS 8.5 স্কোরার। ২০,০০০+ শিক্ষার্থীকে ফ্লুয়েন্ট স্পিকার বানিয়েছেন।", initials: "অ", color: "from-violet-500 to-purple-600" },
  "spc-math": { name: "মোঃ ফারুক আহমেদ", title: "আন্তর্জাতিক গণিত অলিম্পিয়াড মেন্টর", bio: "IMO সিলভার মেডালিস্ট। গণিতকে সহজ করে শেখানোই তার প্যাশন।", initials: "ফা", color: "from-orange-500 to-red-600" },
  "spc-ict": { name: "ইঞ্জি. সাকিব আলম", title: "Google Certified Educator", bio: "HSC ICT-তে ফুল মার্কস পাওয়ার গোপন ফর্মুলা জানেন। ৮,০০০+ A+ মেকার।", initials: "সা", color: "from-lime-500 to-green-600" },
};

/* ─── Page Component ─── */
export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { add } = useCart();
  const courseId = params.id as string;
  const course = COURSES.find((c) => c.id === courseId);

  const addToCart = (c: Course) => {
    add({
      id: c.id,
      title: `${c.title} — ${c.subtitle}`,
      price: c.price,
      oldPrice: c.oldPrice,
      cover: c.badgeColor,
      emoji: "🎓",
      type: "digital",
    });
    router.push("/checkout");
  };

  if (!course) {
    return (
      <main className="relative min-h-screen bg-paper-100 text-body">
        <Navbar />
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
          <GraduationCap className="h-16 w-16 text-body-muted" />
          <h1 className="mt-4 font-display text-3xl font-extrabold text-body">
            কোর্স খুঁজে পাওয়া যায়নি
          </h1>
          <p className="mt-2 text-body-soft">
            এই কোর্সটি বর্তমানে উপলব্ধ নয়।
          </p>
          <Link href="/#courses" className="btn-gold mt-6">
            সব কোর্স দেখুন <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const instructor = INSTRUCTORS[course.id] ?? INSTRUCTORS["fbc-hsc26"];

  return (
    <main className="relative min-h-screen bg-paper-100 text-body">
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative overflow-hidden bg-slide-purple">
        {/* Soft ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br opacity-30 blur-3xl",
            course.badgeColor
          )}
        />
        <div className="pointer-events-none absolute -right-20 -bottom-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-10">
          {/* Breadcrumb */}
          <nav className="mb-5 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white/80 transition">হোম</Link>
            <span className="text-white/30">/</span>
            <Link href="/#courses" className="hover:text-white/80 transition">কোর্সসমূহ</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80 font-medium">{course.title}</span>
          </nav>

          <div className="grid items-start gap-6 lg:grid-cols-[1fr_420px]">
            {/* Left: Course Info */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full bg-gradient-to-r px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow",
                    course.badgeColor
                  )}
                >
                  <Tag className="h-3 w-3" />
                  {course.badge}
                </span>
                {course.ribbon && (
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider shadow-glow-sm",
                      course.ribbon === "HOT"
                        ? "bg-rose-500 text-white"
                        : "bg-gold-gradient text-ink-900"
                    )}
                  >
                    {course.ribbon === "HOT" ? <Flame className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                    {course.ribbon}
                  </span>
                )}
              </div>

              <h1 className="mt-2.5 font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                {course.title} — {course.subtitle}
              </h1>

              {/* Stats row */}
              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/70">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                  <span className="font-bold text-white">{toBn(course.rating)}</span>
                  <span>({toBn(course.students)}+)</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-white/50" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <PlayCircle className="h-3.5 w-3.5 text-white/50" />
                  {toBn(course.classes)} ক্লাস
                </span>
                <span className="inline-flex items-center gap-1">
                  <GraduationCap className="h-3.5 w-3.5 text-white/50" />
                  {course.level}
                </span>
              </div>

              {/* Instructor */}
              <div className="mt-4 flex items-center gap-2.5">
                <div
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br text-xs font-extrabold text-white ring-1 ring-white/20",
                    instructor.color
                  )}
                >
                  {instructor.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{instructor.name}</div>
                  <div className="text-[11px] text-white/50">{instructor.title}</div>
                </div>
              </div>

            </div>

            {/* Right: Video Preview Card */}
            <VideoPreviewCard course={course} />
          </div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section id="course-details" className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left column */}
          <div className="space-y-10">
            {/* Course Description */}
            <CourseDescriptionSection course={course} />

            {/* What you'll get */}
            <WhatYouGet course={course} />

            {/* Curriculum */}
            <CurriculumSection classes={course.classes} />

            {/* Instructor */}
            <InstructorSection instructor={instructor} />

            {/* FAQ */}
            <FAQSection />
          </div>

          {/* Right column: sticky card (mobile hidden, shows at top on mobile) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <EnrollCardLight course={course} onEnroll={() => addToCart(course)} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mobile sticky CTA ─── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-paper-300 bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-extrabold text-ink-500">
                ৳{toBn(course.price)}
              </span>
              {course.oldPrice && (
                <span className="text-sm text-body-muted line-through">
                  ৳{toBn(course.oldPrice)}
                </span>
              )}
            </div>
          </div>
          <button onClick={() => addToCart(course)} className="btn-gold !py-2.5 !px-6 text-sm">
            এখনই ভর্তি হও <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}

/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════
   COURSE DESCRIPTION SECTION
   ═══════════════════════════════════════════════════ */

function CourseDescriptionSection({ course: c }: { course: Course }) {
  const desc = COURSE_DESCRIPTIONS[c.id];
  const [expanded, setExpanded] = useState(false);
  if (!desc) return null;

  return (
    <div className="overflow-hidden rounded-3xl bg-slide-purple text-white">
      {/* Dark background section */}
      <div className="relative px-6 py-8 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />

        {/* Full title heading */}
        <h2 className="relative font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl">
          {desc.fullTitle}
        </h2>

        {/* Short description */}
        <p className="relative mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          {desc.shortDesc}
        </p>

        {/* Long description (always visible, expands on click) */}
        <p className="relative mt-3 text-sm leading-relaxed text-white/60">
          {desc.longDesc}
        </p>

        {/* Topics header */}
        <div className="relative mt-5">
          <h3 className="text-sm font-bold text-white/90">যা যা পড়ানো হবে:</h3>
          <ul className="mt-2.5 space-y-2">
            {desc.topics.slice(0, expanded ? undefined : 3).map((topic, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-white/60">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Expand button */}
        {desc.topics.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="relative mt-5 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-600"
          >
            {expanded ? "কম দেখুন" : "আরো দেখুন"}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO SUB-COMPONENTS
   ═══════════════════════════════════════════════════ */

function VideoPreviewCard({ course: c }: { course: Course }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video shadow-lg shadow-black/10">
        {/* Gradient background */}
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40", c.gradient)} />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        {/* Color halos */}
        <div className={cn("pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-50 blur-2xl", c.badgeColor)} />
        <div className={cn("pointer-events-none absolute -left-6 -bottom-6 h-20 w-20 rounded-full bg-gradient-to-br opacity-30 blur-2xl", c.badgeColor)} />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-start justify-between">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/20">
              <GraduationCap className="h-5 w-5 text-gold-400" />
            </span>
            {c.ribbon && (
              <span className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase",
                c.ribbon === "HOT" ? "bg-rose-500 text-white" : "bg-gold-gradient text-ink-900"
              )}>
                {c.ribbon === "HOT" ? <Flame className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                {c.ribbon}
              </span>
            )}
          </div>

          <div>
            <div className="font-display text-2xl font-extrabold leading-none text-white sm:text-3xl">
              {c.pretitle}
            </div>
            <div className="mt-1.5 inline-flex items-center gap-1.5 rounded bg-gold-500 px-1.5 py-0.5 font-display text-[10px] font-extrabold uppercase tracking-wider text-ink-900">
              {c.thumbHighlight}
            </div>
          </div>
        </div>

        {/* Play button overlay */}
        <div className="absolute inset-0 grid place-items-center">
          <button className="grid h-16 w-16 place-items-center rounded-full bg-white/20 backdrop-blur-md ring-2 ring-white/30 transition hover:scale-110 hover:bg-white/30">
            <PlayCircle className="h-8 w-8 text-white fill-white" />
          </button>
        </div>
      </div>

    </div>
  );
}

function EnrollCardCompact({ course: c, onEnroll }: { course: Course; onEnroll?: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/15 blur-2xl" />

      {/* Price */}
      <div className="relative flex items-baseline gap-2.5">
        <span className="font-display text-3xl font-extrabold text-white">
          ৳{toBn(c.price)}
        </span>
        {c.oldPrice && (
          <span className="text-sm font-semibold text-white/40 line-through">
            ৳{toBn(c.oldPrice)}
          </span>
        )}
      </div>
      {c.oldPrice && (
        <div className="mt-1 inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
          <Zap className="h-3 w-3" />
          {toBn(Math.round(((c.oldPrice - c.price) / c.oldPrice) * 100))}% ছাড়
        </div>
      )}

      {/* CTA */}
      <button onClick={onEnroll} className="btn-gold mt-4 w-full !py-2.5 text-sm">
        এখনই ভর্তি হও <ArrowRight className="h-4 w-4" />
      </button>

      <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-2 text-xs font-medium text-white/70 transition hover:bg-white/10">
        <Heart className="h-3.5 w-3.5" /> উইশলিস্টে রাখুন
      </button>

      {/* Mini features */}
      <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
        {[
          { icon: Video, label: `${toBn(c.classes)} ক্লাস` },
          { icon: Clock, label: c.duration },
          { icon: Download, label: "লাইফটাইম অ্যাক্সেস" },
          { icon: Shield, label: "৭ দিন রিফান্ড" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-2 text-xs text-white/60">
              <Icon className="h-3.5 w-3.5 shrink-0 text-gold-400" />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EnrollCardLight({ course: c, onEnroll }: { course: Course; onEnroll?: () => void }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-extrabold text-ink-500">
          ৳{toBn(c.price)}
        </span>
        {c.oldPrice && (
          <span className="text-base font-semibold text-body-muted line-through">
            ৳{toBn(c.oldPrice)}
          </span>
        )}
      </div>
      {c.oldPrice && (
        <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
          <Zap className="h-3 w-3" />
          {toBn(Math.round(((c.oldPrice - c.price) / c.oldPrice) * 100))}% ছাড়
        </div>
      )}

      {/* CTA */}
      <button onClick={onEnroll} className="btn-gold mt-5 w-full !py-3 text-sm">
        এখনই ভর্তি হও <ArrowRight className="h-4 w-4" />
      </button>

      <button className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-full border border-paper-300 bg-white py-2.5 text-sm font-semibold text-body transition hover:border-ink-500/40">
        <Heart className="h-4 w-4" /> উইশলিস্টে রাখুন
      </button>

      {/* Quick info */}
      <div className="mt-5 space-y-3 border-t border-paper-300 pt-4">
        {[
          { icon: Video, label: `${toBn(c.classes)} লাইভ + রেকর্ডেড ক্লাস` },
          { icon: Clock, label: `কোর্সের সময়কাল: ${c.duration}` },
          { icon: Calendar, label: "ফ্লেক্সিবল শিডিউল" },
          { icon: Download, label: "লাইফটাইম অ্যাক্সেস" },
          { icon: Award, label: "সার্টিফিকেট অফ কমপ্লিশন" },
          { icon: Headphones, label: "২৪/৭ সাপোর্ট" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3 text-sm text-body-soft">
              <Icon className="h-4 w-4 shrink-0 text-gold-600" />
              {item.label}
            </div>
          );
        })}
      </div>

      {/* Guarantee */}
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
        <Shield className="h-5 w-5 shrink-0 text-emerald-500" />
        <span>৭ দিনের মানি-ব্যাক গ্যারান্টি</span>
      </div>
    </div>
  );
}

function WhatYouGet({ course: c }: { course: Course }) {
  const features = [
    { icon: Video, title: "লাইভ + রেকর্ডেড ক্লাস", desc: `${toBn(c.classes)}+ ক্লাস, যেকোনো সময় দেখো` },
    { icon: FileText, title: "নোট ও স্টাডি ম্যাটেরিয়াল", desc: "প্রতিটি ক্লাসের হ্যান্ড নোট ও স্লাইড" },
    { icon: Target, title: "রেগুলার এক্সাম", desc: "ডেইলি MCQ + সাপ্তাহিক মডেল টেস্ট" },
    { icon: MessageCircle, title: "ডাউট সলভিং", desc: "এক্সপার্ট মেন্টরদের সাথে লাইভ Q&A" },
    { icon: Award, title: "সার্টিফিকেট", desc: "কোর্স শেষে ভেরিফায়েড সার্টিফিকেট" },
    { icon: Users, title: "কমিউনিটি অ্যাক্সেস", desc: "এক্সক্লুসিভ স্টুডেন্ট গ্রুপ" },
    { icon: BookOpen, title: "স্টাডি প্ল্যান", desc: "পার্সোনালাইজড ডেইলি রুটিন" },
    { icon: Headphones, title: "২৪/৭ সাপোর্ট", desc: "যেকোনো সমস্যায় সাহায্য" },
  ];

  return (
    <div>
      <h2 className="font-display text-2xl font-extrabold text-body">
        <Sparkles className="mr-2 inline h-6 w-6 text-gold-500" />
        তুমি যা পাচ্ছো
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="flex items-start gap-3 rounded-2xl border border-paper-300 bg-white p-4 shadow-sm transition hover:border-gold-500/30 hover:shadow-card"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-500/10">
                <Icon className="h-5 w-5 text-gold-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-body">{f.title}</div>
                <div className="mt-0.5 text-xs text-body-muted">{f.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Perks strip */}
      <div className="mt-6 flex flex-wrap gap-2">
        {c.perks.map((p) => (
          <span
            key={p}
            className="inline-flex items-center gap-1.5 rounded-full bg-paper-100 px-3 py-1.5 text-xs font-semibold text-body-soft ring-1 ring-inset ring-paper-300"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function CurriculumSection({ classes }: { classes: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const totalLessons = CURRICULUM.reduce((sum, m) => sum + m.lessons, 0);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-extrabold text-body">
          <BookOpen className="mr-2 inline h-6 w-6 text-gold-500" />
          কারিকুলাম
        </h2>
        <span className="text-xs font-semibold text-body-muted">
          {toBn(CURRICULUM.length)} মডিউল • {toBn(totalLessons)} লেসন
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {CURRICULUM.map((module, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-paper-50"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold-gradient text-xs font-extrabold text-ink-900">
                    {toBn(idx + 1)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-body">
                      {module.title}
                    </div>
                    <div className="text-xs text-body-muted">
                      {toBn(module.lessons)} লেসন • {module.duration}
                    </div>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-body-muted" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-body-muted" />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-paper-300 bg-paper-50 px-5 py-4">
                  <ul className="space-y-2.5">
                    {module.topics.map((topic, tIdx) => (
                      <li
                        key={tIdx}
                        className="flex items-center gap-3 text-sm text-body-soft"
                      >
                        <PlayCircle className="h-4 w-4 shrink-0 text-gold-600" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InstructorSection({
  instructor,
}: {
  instructor: { name: string; title: string; bio: string; initials: string; color: string };
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-extrabold text-body">
        <GraduationCap className="mr-2 inline h-6 w-6 text-gold-500" />
        ইনস্ট্রাক্টর
      </h2>

      <div className="mt-6 flex items-start gap-5 rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
        <div
          className={cn(
            "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-xl font-extrabold text-white shadow-md",
            instructor.color
          )}
        >
          {instructor.initials}
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold text-body">
            {instructor.name}
          </h3>
          <p className="text-sm font-semibold text-ink-500">{instructor.title}</p>
          <p className="mt-2 text-sm text-body-soft leading-relaxed">
            {instructor.bio}
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-body-muted">
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-gold-500 fill-gold-500" /> ৪.৯ রেটিং
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-gold-500" /> ২০,০০০+ শিক্ষার্থী
            </span>
            <span className="inline-flex items-center gap-1">
              <PlayCircle className="h-3.5 w-3.5 text-gold-500" /> ১৫+ কোর্স
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="font-display text-2xl font-extrabold text-body">
        <MessageCircle className="mr-2 inline h-6 w-6 text-gold-500" />
        সচরাচর জিজ্ঞাসা
      </h2>

      <div className="mt-6 space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-paper-50"
              >
                <span className="text-sm font-bold text-body pr-4">
                  {faq.q}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-body-muted" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-body-muted" />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-paper-300 bg-paper-50 px-5 py-4">
                  <p className="text-sm text-body-soft leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
