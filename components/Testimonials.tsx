"use client";

import { Quote, Star } from "lucide-react";
import { toBn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

const REVIEWS = [
  {
    name: "তাসনিম রহমান",
    title: "মেডিকেল, রাজশাহী",
    quote:
      "i Education এর মেডিকেল 2nd Time কোর্স আমার জীবন বদলে দিয়েছে। শিক্ষকদের গাইডলাইন আর প্র্যাকটিস টেস্ট অসাধারণ।",
    rating: 5,
    grad: "from-pink-500 to-rose-600",
    initials: "তা",
  },
  {
    name: "ফাহিম শাহরিয়ার",
    title: "BUET CSE",
    quote:
      "Engineering admission প্রস্তুতির জন্য সেরা প্ল্যাটফর্ম। নোট, ক্লাস আর মেন্টরিং সবই পেয়েছি এক জায়গায়।",
    rating: 5,
    grad: "from-blue-500 to-indigo-600",
    initials: "ফা",
  },
  {
    name: "সাবরিনা ইসলাম",
    title: "ঢাবি, IBA",
    quote:
      "ফ্রি রিসোর্স আর লাইভ ক্লাসের কোয়ালিটি দেখে আমি অবাক! প্রতিটি কোর্স সম্পূর্ণ মূল্যের চেয়েও বেশি।",
    rating: 5,
    grad: "from-emerald-500 to-teal-600",
    initials: "সা",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="শিক্ষার্থীদের মতামত"
          title="আমাদের সফল শিক্ষার্থীরা যা বলছে"
          subtitle="বছরের পর বছর হাজারো শিক্ষার্থীর সাফল্যের গল্প আমাদের অনুপ্রেরণা"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="group relative overflow-hidden rounded-3xl border border-paper-300 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
            >
              <Quote className="absolute right-5 top-5 h-12 w-12 text-gold-500/15 transition-transform group-hover:scale-110 group-hover:text-gold-500/30" />

              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-body-soft">
                “{r.quote}”
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-paper-300 pt-4">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${r.grad} font-display text-sm font-extrabold text-white`}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-body">{r.name}</div>
                  <div className="text-xs text-body-muted">{r.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stat strip — light accent strip on light page */}
        <div className="mt-14 grid gap-4 rounded-3xl border border-paper-300 bg-gradient-to-r from-ink-800 to-ink-900 p-6 shadow-card-dark sm:grid-cols-4">
          {[
            { v: `${toBn(50000)}+`, l: "সক্রিয় শিক্ষার্থী" },
            { v: `${toBn(120)}+`, l: "এক্সপার্ট শিক্ষক" },
            { v: `${toBn(2000)}+`, l: "ভিডিও লেকচার" },
            { v: `${toBn(95)}%`, l: "সাফল্যের হার" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center sm:border-r sm:border-white/10 sm:last:border-r-0"
            >
              <div className="font-display text-3xl font-extrabold text-gold-400 sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs font-medium text-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
