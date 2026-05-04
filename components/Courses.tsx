"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Users,
  Star,
  PlayCircle,
  ArrowRight,
  Tag,
  CheckCircle2,
  Rocket,
  Trophy,
  GraduationCap,
  Flame,
  Sparkles,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

type Course = {
  id: string;
  title: string;
  subtitle: string;
  category: "fbc" | "second" | "special";
  badge: string;
  badgeColor: string; // tailwind "from-X to-Y" gradient (used in halo + overlay)
  gradient: string;   // soft gradient used inside the card
  pretitle: string;   // big text shown on the thumbnail (e.g. "HSC ২৬")
  thumbHighlight: string; // small uppercase text under pretitle (e.g. "FBC SCIENCE")
  ribbon?: string;    // top-right ribbon on the thumb (e.g. "NEW", "HOT")
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
  // FBC (full batch course)
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
  // 2nd Time
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
  // Special
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

const TABS = [
  { id: "all", label: "সবগুলো", icon: GraduationCap },
  { id: "fbc", label: "FBC ২৬", icon: Rocket },
  { id: "second", label: "2nd Time", icon: Trophy },
  { id: "special", label: "স্পেশাল কোর্স", icon: Star },
] as const;

export default function Courses() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("all");
  const filtered =
    tab === "all" ? COURSES : COURSES.filter((c) => c.category === tab);

  return (
    <section id="courses" className="relative bg-paper-200/60 py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-purple-glow" />
      <div className="relative mx-auto max-w-[1440px] px-4 lg:px-8">
        <SectionTitle
          eyebrow="চলমান কোর্সসমূহ"
          title="তোমার জন্য সেরা কোর্স বেছে নাও"
          subtitle="প্রতিটি কোর্সে রয়েছে লাইভ ক্লাস, রেকর্ডিং, রেগুলার এক্সাম ও মেন্টর সাপোর্ট"
        />

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                  active
                    ? "border-transparent bg-gold-gradient text-ink-900 shadow-glow-sm"
                    : "border-paper-300 bg-white text-body hover:border-gold-500/50 hover:text-ink-500"
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#all-courses"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 px-8 py-4 text-base font-extrabold text-ink-900 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg hover:shadow-gold-500/30 active:scale-95"
          >
            <span className="relative z-10">সব কোর্স দেখুন</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course: c }: { course: Course }) {
  const discount = c.oldPrice
    ? Math.round(((c.oldPrice - c.price) / c.oldPrice) * 100)
    : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:ring-1 hover:ring-gold-500/20">
      {/* Thumbnail banner */}
      <CourseThumb course={c} />

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-5">
        {/* Title area */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-extrabold leading-tight text-body">
              {c.title}
            </h3>
            <p className="mt-0.5 text-xs text-body-soft">{c.subtitle}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-600">
            <Star className="h-3 w-3 fill-current" /> {toBn(c.rating)}
          </span>
        </div>

        {/* Level pill */}
        <div className="mt-2.5">
          <span className="inline-flex items-center gap-1 rounded-md bg-paper-100 px-2 py-1 text-[10px] font-bold text-body-muted">
            <GraduationCap className="h-3 w-3" />
            {c.level}
          </span>
        </div>

        {/* Stats — subtle row */}
        <div className="mt-3.5 flex items-center gap-3 border-t border-paper-200/70 pt-3 text-[11px] text-body-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3 text-gold-600" /> {c.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <PlayCircle className="h-3 w-3 text-gold-600" />
            {toBn(c.classes)} ক্লাস
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3 w-3 text-gold-600" />
            {toBn(Math.floor(c.students / 1000))}K+
          </span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-extrabold text-ink-500">
                ৳{toBn(c.price)}
              </span>
              {c.oldPrice && (
                <span className="text-xs font-semibold text-body-muted line-through">
                  ৳{toBn(c.oldPrice)}
                </span>
              )}
            </div>
          </div>
          <Link
            href={`/courses/${c.id}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 text-xs font-extrabold text-ink-900 shadow-glow-sm transition-all hover:scale-105 active:scale-95"
          >
            বিস্তারিত <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Branded "banner" thumbnail at the top of every course card. Matches the
 *  dark-purple + gold style from the user's color demo. */
function CourseThumb({ course: c }: { course: Course }) {
  const discount = c.oldPrice
    ? Math.round(((c.oldPrice - c.price) / c.oldPrice) * 100)
    : 0;
  return (
    <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-[#1a0f3c] to-[#2d1b69]">
      {/* Soft gradient overlay using course color */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-30",
          c.gradient
        )}
      />

      {/* Dramatic color halos */}
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br opacity-50 blur-3xl",
          c.badgeColor
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
          c.badgeColor
        )}
      />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

      {/* Decorative diagonal line */}
      <div className="pointer-events-none absolute -right-8 top-0 h-px w-40 rotate-45 bg-white/5" />

      {/* Top bar with badges */}
      <div className="absolute inset-x-4 top-3.5 flex items-start justify-between">
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full bg-gradient-to-r px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg",
            c.badgeColor
          )}
        >
          <Tag className="h-3 w-3" />
          {c.badge}
        </span>

        <div className="flex flex-col items-end gap-1.5">
          {c.ribbon && !discount && (
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider shadow-glow-sm",
                c.ribbon === "HOT"
                  ? "bg-rose-500 text-white"
                  : "bg-gold-gradient text-ink-900"
              )}
            >
              {c.ribbon === "HOT" ? (
                <Flame className="h-3 w-3" />
              ) : (
                <Sparkles className="h-3 w-3" />
              )}
              {c.ribbon}
            </span>
          )}
        </div>
      </div>

      {/* Discount pill — split colors, one card */}
      {discount > 0 && (
        <span className="absolute right-0 top-3 z-10 inline-flex overflow-hidden rounded-l-lg text-[11px] font-extrabold leading-none shadow-md ring-1 ring-white/10">
          <span className="bg-ink-900 px-2.5 py-1.5 text-white">ছাড়</span>
          <span className="bg-gold-500 px-2.5 py-1.5 font-display text-ink-900">
            {toBn(discount)}%
          </span>
        </span>
      )}

      {/* Center content: pretitle + highlight */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display text-4xl font-extrabold leading-none text-white drop-shadow-lg">
          {c.pretitle}
        </div>
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold-500/90 px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm backdrop-blur-sm">
          {c.thumbHighlight}
        </div>
      </div>

    </div>
  );
}
