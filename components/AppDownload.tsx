"use client";

import { Download, Star, Smartphone, Clock, WifiOff } from "lucide-react";
import { toBn } from "@/lib/utils";

export default function AppDownload() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card">
          {/* Soft accent backgrounds */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-ink-500/10 blur-3xl" />

          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-14">
            {/* Left: copy + features */}
            <div>
              <span className="pill-gold">
                <Download className="h-3.5 w-3.5" />
                মোবাইল অ্যাপ
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
                ডাউনলোড করুন আমাদের{" "}
                <span className="text-gold-600">মোবাইল অ্যাপ</span>,<br />
                শেখা শুরু করুন আজ থেকেই
              </h2>

              {/* Stat cards */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
                <div className="rounded-xl border border-paper-300 bg-white p-4 shadow-card">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-rose-500/10 text-rose-600">
                    <Download className="h-4 w-4" />
                  </div>
                  <div className="mt-2 font-display text-xl font-extrabold text-ink-900">
                    {toBn(1000000)}+
                  </div>
                  <div className="text-[11px] font-semibold text-body-muted">
                    মোট ডাউনলোড
                  </div>
                </div>
                <div className="rounded-xl border border-paper-300 bg-white p-4 shadow-card">
                  <div className="flex items-center gap-0.5 text-gold-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="mt-2 font-display text-xl font-extrabold text-ink-900">
                    {toBn(4.5)}+
                  </div>
                  <div className="text-[11px] font-semibold text-body-muted">
                    রেটিং নিচ্ছেন প্রায় {toBn(100000)} শিক্ষার্থী
                  </div>
                </div>
              </div>

              {/* Feature list */}
              <div className="mt-7 space-y-4">
                <Feature
                  icon={Smartphone}
                  title="একাডেমিক পড়াশোনা"
                  desc="ইন্টারেক্টিভ লাইভ ক্লাস, অ্যানিমেটেড টিউটোরিয়াল, MCQ Question Bank, প্র্যাকটিস ক্লাস এবং আরো অনেক কিছু"
                />
                <Feature
                  icon={Clock}
                  title="২৪×৭ ডাউটসলভ"
                  desc="৭ দিন ২৪ ঘণ্টা যেকোনো ডাউট সলভ করতে SuperSolve"
                />
                <Feature
                  icon={WifiOff}
                  title="পড়া চলবে ইন্টারনেট ছাড়াও"
                  desc="ইন্টারনেট কানেকশন ছাড়াই অ্যাপ থেকে যেকোনো লেকচার ডাউনলোড করে দেখতে পারবে যেকোনো সময়, যেকোনো স্থানে"
                />
              </div>

              {/* Store buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-5 py-2.5 text-white shadow-card transition hover:bg-ink-500"
                >
                  <PlayBadge />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-white/70">
                      Get it on
                    </div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-5 py-2.5 text-white shadow-card transition hover:bg-ink-500"
                >
                  <AppleBadge />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-white/70">
                      Download on the
                    </div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: phone mockups */}
            <div className="relative grid place-items-center">
              <div className="relative h-[420px] w-full max-w-md sm:h-[480px]">
                {/* Back phone */}
                <div className="absolute left-2 top-6 hidden h-[88%] w-[58%] rotate-[-8deg] overflow-hidden rounded-[2rem] border-[8px] border-ink-900 bg-white shadow-card-hover sm:block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop"
                    alt="App preview"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Front phone */}
                <div className="absolute left-1/2 top-0 h-[95%] w-[62%] -translate-x-1/2 overflow-hidden rounded-[2rem] border-[10px] border-ink-900 bg-white shadow-glow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop"
                    alt="App preview"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Right phone */}
                <div className="absolute right-2 top-10 hidden h-[82%] w-[52%] rotate-[8deg] overflow-hidden rounded-[2rem] border-[8px] border-ink-900 bg-white shadow-card-hover sm:block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&auto=format&fit=crop"
                    alt="App preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-500/15 text-gold-700">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-sm font-bold text-ink-900">{title}</div>
        <div className="text-[12px] leading-relaxed text-body-muted">{desc}</div>
      </div>
    </div>
  );
}

function PlayBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M3 2.5v19c0 .35.18.66.47.83l11.7-10.33L3.47 1.67A.97.97 0 0 0 3 2.5zm13.7 9.85l2.92 1.62c.6.34.6 1.18 0 1.51l-2.84 1.58-2.59-2.36 2.51-2.35zm-2.93-2.74L5.55 1 16.7 11.35l-2.92-1.74zM5.55 23l8.22-8.61 2.92 1.74L5.55 23z" />
    </svg>
  );
}

function AppleBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.42 2.23-1.18 3-.78.79-2.05 1.4-3.07 1.32-.13-1.13.42-2.31 1.16-3.05.84-.84 2.21-1.41 3.09-1.27zM20.5 17.27c-.55 1.27-.81 1.84-1.51 2.96-.99 1.56-2.39 3.51-4.13 3.52-1.55.02-1.95-1-4.05-.99-2.1.01-2.54 1-4.09.98-1.74-.02-3.07-1.78-4.06-3.34-2.77-4.36-3.06-9.48-1.35-12.21 1.21-1.94 3.13-3.07 4.93-3.07 1.83 0 2.98 1 4.5 1 1.47 0 2.36-1 4.48-1 1.6 0 3.3.87 4.51 2.38-3.96 2.17-3.31 7.83.77 9.77z" />
    </svg>
  );
}
