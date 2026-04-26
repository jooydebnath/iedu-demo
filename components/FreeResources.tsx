"use client";

import { Download, FileText, Video, Lightbulb, ArrowRight } from "lucide-react";
import { toBn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

const ITEMS = [
  {
    icon: FileText,
    title: "ফ্রি লেকচার শীট",
    desc: "৫০০+ বিষয়ভিত্তিক লেকচার শীট ডাউনলোড করো বিনামূল্যে",
    cta: "ডাউনলোড করুন",
    accent: "from-rose-500 to-pink-600",
    count: `${toBn(500)}+ PDF`,
    label: "LECTURE SHEETS",
  },
  {
    icon: Video,
    title: "ফ্রি ভিডিও ক্লাস",
    desc: "১০০০+ রেকর্ডেড ক্লাস — যখন খুশি, যেখানে খুশি",
    cta: "এখনই দেখুন",
    accent: "from-fuchsia-500 to-purple-600",
    count: `${toBn(1000)}+ HD`,
    label: "VIDEO LIBRARY",
  },
  {
    icon: Lightbulb,
    title: "সাপ্তাহিক কুইজ",
    desc: "প্রতি সপ্তাহে নতুন কুইজ — পুরস্কার জেতার সুযোগ",
    cta: "অংশ নিন",
    accent: "from-amber-500 to-orange-600",
    count: `${toBn(50)}+ লাইভ`,
    label: "WEEKLY QUIZ",
  },
];

export default function FreeResources() {
  return (
    <section id="free" className="relative bg-paper-200/60 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="ফ্রি রিসোর্স"
          title="সম্পূর্ণ ফ্রিতে শেখার সুযোগ"
          subtitle="বিনামূল্যে শিখো ও প্র্যাকটিস করো — কোনো লগইন ছাড়াই"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, desc, cta, accent, count, label }) => (
            <div
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
            >
              {/* Banner thumbnail */}
              <div className="relative h-36 overflow-hidden bg-slide-purple">
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${accent} opacity-60 blur-2xl`}
                />
                <div
                  className={`pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-gradient-to-br ${accent} opacity-25 blur-3xl`}
                />
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

                {/* Count badge */}
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
                  {count}
                </span>

                {/* Big icon centered */}
                <div className="absolute inset-0 grid place-items-center">
                  <div
                    className={`relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${accent} shadow-glow ring-4 ring-white/10`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Bottom label */}
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white ring-1 ring-white/20 backdrop-blur">
                  {label}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold text-body">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-body-soft">{desc}</p>
                <a
                  href="#"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-ink-800 px-4 py-2 pt-2 text-xs font-bold text-white transition hover:bg-gold-500 hover:text-ink-900"
                  style={{ marginTop: "1.25rem" }}
                >
                  <Download className="h-3.5 w-3.5" />
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
