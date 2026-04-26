"use client";

import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { toBn } from "@/lib/utils";

type Props = {
  /** main panel (form) */
  children: React.ReactNode;
  /** big headline shown on the brand panel */
  brandTitle: string;
  brandHighlight: string;
  brandSub: string;
};

export default function AuthShell({
  children,
  brandTitle,
  brandHighlight,
  brandSub,
}: Props) {
  return (
    <main className="relative min-h-screen bg-paper-100 text-body">
      {/* top simple header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient shadow-glow-sm">
              <GraduationCap
                className="h-6 w-6 text-ink-900"
                strokeWidth={2.5}
              />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight text-body">
                <span className="text-gold-600">i</span> Education
              </div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-body-muted">
                A Mark of Success
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-paper-300 bg-white px-4 py-2 text-sm font-semibold text-body transition hover:border-ink-500/40 hover:text-ink-500"
          >
            ← হোমে ফিরুন
          </Link>
        </div>
      </header>

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Brand panel */}
        <aside className="relative hidden overflow-hidden bg-slide-purple lg:block">
          {/* halos */}
          <div className="pointer-events-none absolute -left-32 top-20 h-[26rem] w-[26rem] rounded-full bg-gold-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-20 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

          {/* castle silhouette */}
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

          <div className="relative flex h-full flex-col justify-center px-12 py-24 text-white xl:px-20">
            <span className="pill-gold !bg-white/15 !text-gold-300 !ring-white/20 w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              i Education
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight xl:text-5xl">
              {brandTitle}{" "}
              <span className="text-gold-400">{brandHighlight}</span>
            </h1>
            <p className="mt-4 max-w-md text-base text-white/80">{brandSub}</p>

            {/* brand stats */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
              <BrandStat icon={Users} value={`${toBn(50)}K+`} label="শিক্ষার্থী" />
              <BrandStat icon={Star} value={`${toBn(4.9)}`} label="রেটিং" />
              <BrandStat icon={ShieldCheck} value="১০০%" label="সিকিউর" />
            </div>

            {/* testimonial-ish */}
            <div className="mt-10 max-w-md rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-1 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                “i Education এর মেডিকেল কোর্স আমার জীবন বদলে দিয়েছে। শিক্ষকদের গাইডলাইন অসাধারণ।”
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-xs font-extrabold">
                  তা
                </div>
                <div>
                  <div className="text-sm font-bold">তাসনিম রহমান</div>
                  <div className="text-xs text-white/60">মেডিকেল, রাজশাহী</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Form panel */}
        <section className="relative grid place-items-center px-4 py-28 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-page-soft" />
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  );
}

function BrandStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur">
      <Icon className="h-4 w-4 text-gold-400" />
      <div className="mt-2 font-display text-xl font-extrabold text-white">
        {value}
      </div>
      <div className="text-[10px] font-medium uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}
