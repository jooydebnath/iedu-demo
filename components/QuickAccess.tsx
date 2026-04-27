"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Radio,
  GraduationCap,
  School,
  BookOpenCheck,
  ClipboardList,
  BookMarked,
  Newspaper,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

type Tile = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  accent: string; // tailwind gradient classes
  iconColor: string;
};

const TILES: Tile[] = [
  {
    label: "আজকের ফ্রি লাইভ ক্লাস",
    href: "/#free",
    icon: Radio,
    badge: "LIVE",
    accent: "from-rose-500/15 to-rose-500/0",
    iconColor: "text-rose-600",
  },
  {
    label: "আই এডুকেশনের সকল কোর্স",
    href: "/#courses",
    icon: GraduationCap,
    accent: "from-gold-500/20 to-gold-500/0",
    iconColor: "text-gold-700",
  },
  {
    label: "iSchool এর সকল কোর্স",
    href: "/#courses",
    icon: School,
    accent: "from-indigo-500/15 to-indigo-500/0",
    iconColor: "text-indigo-600",
  },
  {
    label: "HSC 26 এর সকল কোর্স",
    href: "/#courses",
    icon: BookOpenCheck,
    badge: "HSC 26",
    accent: "from-emerald-500/15 to-emerald-500/0",
    iconColor: "text-emerald-600",
  },
  {
    label: "HSC 27 এর সকল কোর্স",
    href: "/#courses",
    icon: BookOpenCheck,
    badge: "HSC 27",
    accent: "from-sky-500/15 to-sky-500/0",
    iconColor: "text-sky-600",
  },
  {
    label: "চলো পরীক্ষা দেই",
    href: "/#free",
    icon: ClipboardList,
    accent: "from-violet-500/15 to-violet-500/0",
    iconColor: "text-violet-600",
  },
  {
    label: "বুক স্টোর",
    href: "/#books",
    icon: BookMarked,
    accent: "from-amber-500/20 to-amber-500/0",
    iconColor: "text-amber-700",
  },
  {
    label: "প্রয়োজনীয় খবর",
    href: "/#about",
    icon: Newspaper,
    accent: "from-teal-500/15 to-teal-500/0",
    iconColor: "text-teal-600",
  },
];

export default function QuickAccess() {
  return (
    <section className="relative isolate overflow-hidden bg-paper-100 py-6 sm:py-8">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-700 shadow-card">
            <Sparkles className="h-3.5 w-3.5" />
            Quick Access
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            শেখার নতুন <span className="text-gold-600">দুনিয়ায়</span> স্বাগতম!
          </h2>
          <p className="mt-2 max-w-xl text-sm text-body-muted sm:text-base">
            এক ক্লিকে পৌঁছে যান কোর্স, লাইভ ক্লাস ও পরীক্ষার মতো গুরুত্বপূর্ণ ফাংশনে।
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {TILES.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="group relative overflow-hidden rounded-2xl border border-paper-300 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-glow-sm"
            >
              {/* accent bg */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.accent} opacity-0 transition group-hover:opacity-100`}
              />

              <div className="relative flex items-center gap-3">
                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-paper-100 ring-1 ring-paper-300 transition group-hover:ring-gold-500/40">
                  <t.icon className={`h-6 w-6 ${t.iconColor}`} strokeWidth={2.2} />
                  {t.badge && (
                    <span className="absolute -top-2 -right-2 rounded-full bg-rose-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {t.badge}
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-bold leading-snug text-ink-900 sm:text-sm">
                    {t.label}
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-body-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
