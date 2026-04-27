"use client";

import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-8 shadow-card sm:p-12 lg:p-16">
          {/* decorative */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="pill-gold">
                <Sparkles className="h-3.5 w-3.5" />
                A Mark of Success
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                <span className="text-gold-400">i Education</span> এর সাথে গড়ো তোমার সফল ক্যারিয়ার
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                ৫০ হাজারেরও বেশি শিক্ষার্থীর প্রথম পছন্দ। প্রিমিয়াম কোয়ালিটি কনটেন্ট, এক্সপার্ট মেন্টরশিপ ও আধুনিক লার্নিং প্ল্যাটফর্ম — সবকিছু এক জায়গায়।
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#enroll" className="btn-gold">
                  এখনই শুরু করুন <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#about" className="btn-ghost">আমাদের সম্পর্কে</a>
              </div>
            </div>

            {/* Right: brand mark */}
            <div className="relative grid place-items-center">
              <div className="relative grid h-48 w-48 place-items-center">
                <div className="absolute inset-0 animate-float-slow rounded-full bg-gold-500/20 blur-2xl" />
                <div className="relative grid h-40 w-40 place-items-center rounded-full bg-gold-gradient shadow-glow ring-8 ring-white/5">
                  <GraduationCap className="h-20 w-20 text-ink-900" strokeWidth={2} />
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-ink-900 px-4 py-1 text-xs font-extrabold text-gold-400 ring-1 ring-gold-500/40">
                  Since ২০১৮
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
