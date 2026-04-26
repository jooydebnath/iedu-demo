"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Rocket,
  Trophy,
  Stethoscope,
  Cpu,
  Play,
  type LucideIcon,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";

type Slide = {
  id: string;
  pretitle: string;
  title: string;
  highlight: string;
  badges: { label: string; tone?: "gold" | "white" }[];
  description: string;
  price: number;
  oldPrice: number;
  bg: string; // tailwind bg-image class
  Icon: LucideIcon;
  ctaLabel: string;
};

const SLIDES: Slide[] = [
  {
    id: "hsc26",
    pretitle: "HSC ২৬",
    title: "PRE ADMISSION",
    highlight: "SCIENCE",
    badges: [
      { label: "SCIENCE", tone: "gold" },
      { label: "COURSE", tone: "white" },
    ],
    description:
      "১২+ বিষয়ে ৩০০+ লাইভ ক্লাস, প্রতিদিন এক্সাম, সিলেবাস ভিত্তিক স্টাডি প্ল্যান।",
    price: 3900,
    oldPrice: 6500,
    bg: "bg-slide-purple",
    Icon: GraduationCap,
    ctaLabel: "ভর্তি হোন",
  },
  {
    id: "ssc26",
    pretitle: "SSC ২৬",
    title: "FBC FULL BATCH",
    highlight: "ALL SUBJECTS",
    badges: [
      { label: "FULL BATCH", tone: "gold" },
      { label: "SSC ২৬", tone: "white" },
    ],
    description:
      "ক্লাস ১০-এর সকল বিষয়ের সম্পূর্ণ সিলেবাস — লাইভ ক্লাস, নোট ও মাসিক পরীক্ষা।",
    price: 4900,
    oldPrice: 8500,
    bg: "bg-slide-indigo",
    Icon: Rocket,
    ctaLabel: "এনরোল করুন",
  },
  {
    id: "medical",
    pretitle: "Medical ২৬",
    title: "2nd Time Course",
    highlight: "MEDICAL",
    badges: [
      { label: "MEDICAL", tone: "gold" },
      { label: "2ND TIME", tone: "white" },
    ],
    description:
      "মেডিকেল ভর্তি প্রস্তুতির স্পেশাল ব্যাচ — MCQ মাস্টারি, লাইভ এক্সাম ও র‍্যাঙ্কিং।",
    price: 8900,
    oldPrice: 14500,
    bg: "bg-slide-rose",
    Icon: Stethoscope,
    ctaLabel: "বিস্তারিত দেখুন",
  },
  {
    id: "engineering",
    pretitle: "Engineering ২৬",
    title: "Admission Course",
    highlight: "BUET / KUET",
    badges: [
      { label: "ENGINEERING", tone: "gold" },
      { label: "ADMISSION", tone: "white" },
    ],
    description:
      "BUET, KUET, RUET, CUET ভর্তি প্রস্তুতি — গণিত স্পেশাল ক্লাস ও মক টেস্ট।",
    price: 7900,
    oldPrice: 12500,
    bg: "bg-slide-emerald",
    Icon: Cpu,
    ctaLabel: "জয়েন করুন",
  },
];

const AUTOPLAY_MS = 5500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (n: number) => setIndex((p) => (p + n + SLIDES.length) % SLIDES.length),
    []
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, go]);

  // Touch swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-page-soft"
    >
      {/* soft floating shapes on the page */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-ink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-gold-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 lg:px-8 lg:pb-20 lg:pt-10">
        {/* Heading row */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="pill-gold">
              <Sparkles className="h-3.5 w-3.5" />
              চলমান অফারসমূহ
            </span>
            <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
              জনপ্রিয় <span className="text-ink-500">কোর্সসমূহ</span> দেখুন
            </h1>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-paper-300 bg-white text-body shadow-card transition hover:bg-ink-500 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-paper-300 bg-white text-body shadow-card transition hover:bg-ink-500 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider viewport */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative overflow-hidden rounded-[2rem] border border-paper-300 bg-white shadow-card"
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((s) => (
              <SlideCard key={s.id} slide={s} />
            ))}
          </div>

          {/* mobile arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-body shadow-card backdrop-blur sm:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-body shadow-card backdrop-blur sm:hidden"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-gold-500"
                    : "w-2 bg-white/60 hover:bg-white"
                )}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
            <div
              key={index + (paused ? "p" : "r")}
              className="h-full bg-gold-gradient"
              style={{
                width: paused ? "100%" : "0%",
                animation: paused
                  ? undefined
                  : `slideProgress ${AUTOPLAY_MS}ms linear forwards`,
              }}
            />
          </div>
        </div>

        {/* Quick stats below slider */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { v: `${toBn(50)}K+`, l: "শিক্ষার্থী", icon: Sparkles },
            { v: `${toBn(120)}+`, l: "লাইভ কোর্স", icon: Rocket },
            { v: `${toBn(95)}%`, l: "সাফল্যের হার", icon: Trophy },
            { v: `${toBn(2000)}+`, l: "ভিডিও লেকচার", icon: Play },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.l}
                className="light-card flex items-center gap-3 rounded-2xl px-4 py-3"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500/15 text-gold-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-extrabold text-body">
                    {s.v}
                  </div>
                  <div className="text-[11px] font-medium text-body-muted">
                    {s.l}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Local keyframes for progress bar (scoped) */}
      <style jsx global>{`
        @keyframes slideProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

function SlideCard({ slide: s }: { slide: Slide }) {
  const Icon = s.Icon;
  return (
    <div className="relative w-full shrink-0">
      <div
        className={cn(
          "relative overflow-hidden",
          s.bg,
          "min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]"
        )}
      >
        {/* Castle silhouette */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-15"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          <path
            d="M0 320h600v80H0z M40 320V220l30-20v-30h20v30l30 20v100z M150 320V180l40-25v-35h25v35l40 25v140z M280 320V230l35-22v-32h22v32l35 22v90z M400 320V200l45-28v-40h25v40l45 28v120z"
            fill="white"
          />
          <circle cx="120" cy="80" r="2" fill="#FFC107" opacity="0.7" />
          <circle cx="240" cy="50" r="1.5" fill="#FFC107" opacity="0.8" />
          <circle cx="380" cy="90" r="2" fill="#FFC107" opacity="0.6" />
          <circle cx="510" cy="60" r="1.5" fill="#FFC107" opacity="0.8" />
        </svg>

        {/* dotted accent */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Brand top-right */}
        <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur">
          <GraduationCap className="h-6 w-6 text-gold-400" />
        </div>

        <div className="relative grid h-full items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-14">
          {/* Left: copy */}
          <div className="text-white">
            <div className="font-display text-4xl font-extrabold sm:text-5xl">
              {s.pretitle}
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-gold-400 sm:text-5xl lg:text-6xl">
              {s.title}
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {s.badges.map((b) => (
                <span
                  key={b.label}
                  className={cn(
                    "rounded-md px-3 py-1 text-xs font-extrabold uppercase tracking-wider shadow-sm",
                    b.tone === "gold"
                      ? "bg-gold-500 text-ink-900 shadow-glow-sm"
                      : "bg-white text-ink-900"
                  )}
                >
                  {b.label}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              {s.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#enroll" className="btn-gold">
                {s.ctaLabel} <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-baseline gap-2 text-white">
                <span className="font-display text-2xl font-extrabold text-gold-400">
                  ৳{toBn(s.price)}
                </span>
                <span className="text-sm text-white/60 line-through">
                  ৳{toBn(s.oldPrice)}
                </span>
              </div>
            </div>
          </div>

          {/* Right: large icon vignette */}
          <div className="relative hidden lg:block">
            <div className="relative grid h-56 w-56 place-items-center">
              <div className="absolute inset-0 animate-float-slow rounded-full bg-gold-500/20 blur-2xl" />
              <div className="relative grid h-44 w-44 place-items-center rounded-full bg-gold-gradient shadow-glow ring-8 ring-white/10">
                <Icon className="h-20 w-20 text-ink-900" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
