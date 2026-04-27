"use client";

import { GraduationCap, Sparkles, Play, ArrowRight, Star, Users, BookOpen } from "lucide-react";
import { toBn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-hero-radial pt-12 pb-24 sm:pt-20"
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-ink-500/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      {/* Floating badges */}
      <div className="pointer-events-none absolute left-[6%] top-[26%] hidden animate-float-slow lg:block">
        <FloatBadge icon={<Star className="h-4 w-4" />} label="৪.৯ রেটিং" />
      </div>
      <div className="pointer-events-none absolute right-[6%] top-[20%] hidden animate-float-slow lg:block" style={{ animationDelay: "1.2s" }}>
        <FloatBadge icon={<Users className="h-4 w-4" />} label={`${toBn(50000)}+ শিক্ষার্থী`} />
      </div>
      <div className="pointer-events-none absolute left-[10%] bottom-[18%] hidden animate-float-slow xl:block" style={{ animationDelay: "0.6s" }}>
        <FloatBadge icon={<BookOpen className="h-4 w-4" />} label={`${toBn(120)}+ কোর্স`} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center">
          <span className="pill-gold animate-pulse-glow">
            <Sparkles className="h-3.5 w-3.5" />
            নতুন ব্যাচ ২০২৬ — এডমিশন চলছে
          </span>
        </div>

        {/* Main hero card */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">তোমার স্বপ্নের</span>
              <span className="block">
                <span className="text-shine">ক্যারিয়ার</span> শুরু হোক
              </span>
              <span className="block text-white">আজ থেকেই</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted lg:text-lg lg:mx-0 mx-auto">
              দেশের সেরা শিক্ষকদের সাথে SSC, HSC ও Admission প্রস্তুতি নাও — ইন্টারঅ্যাক্টিভ লাইভ ক্লাস, অসংখ্য পরীক্ষা ও স্মার্ট নোটসহ।
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#courses" className="btn-gold">
                এখনই ভর্তি হোন
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="btn-ghost">
                <Play className="h-4 w-4 fill-gold-400 text-gold-400" />
                ফ্রি ডেমো ক্লাস
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md lg:mx-0 mx-auto">
              <Stat value={`${toBn(50)}K+`} label="শিক্ষার্থী" />
              <Stat value={`${toBn(120)}+`} label="লাইভ কোর্স" />
              <Stat value={`${toBn(95)}%`} label="সাফল্যের হার" />
            </dl>
          </div>

          {/* Right: featured banner */}
          <div className="relative">
            <FeatureBanner />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-card">
      <span className="text-gold-400">{icon}</span>
      <span className="text-white">{label}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4 text-center backdrop-blur">
      <div className="text-2xl font-extrabold text-gold-400 sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-medium text-muted">{label}</div>
    </div>
  );
}

/** The big "HSC 26 PRE-ADMISSION" style featured banner from the user's brand image */
function FeatureBanner() {
  return (
    <div className="relative">
      {/* Glow rings */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gold-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950 p-8 shadow-card sm:p-10">
        {/* Castle silhouette / decorative SVG */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
          viewBox="0 0 600 400"
          fill="none"
        >
          <path
            d="M0 320h600v80H0z M40 320V220l30-20v-30h20v30l30 20v100z M150 320V180l40-25v-35h25v35l40 25v140z M280 320V230l35-22v-32h22v32l35 22v90z M400 320V200l45-28v-40h25v40l45 28v120z"
            fill="white"
          />
          <circle cx="120" cy="80" r="2" fill="#FFC107" opacity="0.6" />
          <circle cx="240" cy="50" r="1.5" fill="#FFC107" opacity="0.7" />
          <circle cx="380" cy="90" r="2" fill="#FFC107" opacity="0.5" />
          <circle cx="510" cy="60" r="1.5" fill="#FFC107" opacity="0.7" />
        </svg>

        {/* Brand logo top right */}
        <div className="absolute right-6 top-6 grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15">
          <img
            src="/ieducationbd-logo.png"
            alt="iEducation BD"
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Headline */}
        <div className="relative">
          <p className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            HSC<span className="text-gold-400">26</span>
          </p>
          <p className="mt-1 font-display text-3xl font-extrabold tracking-tight text-gold-400 sm:text-4xl">
            PRE ADMISSION
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-gold-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
              SCIENCE
            </span>
            <span className="rounded-md bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink-900">
              COURSE
            </span>
          </div>

          <p className="mt-5 max-w-sm text-sm text-muted">
            ১২+ বিষয়ে ৩০০+ লাইভ ক্লাস, প্রতিদিন এক্সাম, সিলেবাস ভিত্তিক স্টাডি প্ল্যান।
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a href="#enroll" className="btn-gold !py-2.5 !px-5 text-sm">
              বিস্তারিত দেখুন <ArrowRight className="h-4 w-4" />
            </a>
            <div className="text-xs text-muted">
              <div className="text-gold-400 font-bold text-base">৩,৯০০৳</div>
              <div className="line-through opacity-70">৬,৫০০৳</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
