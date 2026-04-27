"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Wallet,
  Users,
  Link2,
  TrendingUp,
  Award,
  Share2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Trophy,
  Crown,
  Medal,
  Star,
  ShieldCheck,
  Banknote,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { cn, toBn } from "@/lib/utils";

export default function AffiliationPage() {
  return (
    <main className="relative min-h-screen bg-paper-100 text-body">
      <Navbar />
      <Hero />
      <Benefits />
      <Steps />
      <Commission />
      <Calculator />
      <Leaderboard />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slide-purple">
      <div className="pointer-events-none absolute -left-32 top-20 h-[26rem] w-[26rem] rounded-full bg-gold-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        {/* left copy */}
        <div className="text-white">
          <span className="pill-gold !bg-white/15 !text-gold-300 !ring-white/20">
            <img
              src="/ieducationbd-logo.png"
              alt="iEducation BD"
              className="h-5 w-auto object-contain brightness-0 invert"
            />
            অ্যাফিলিয়েট প্রোগ্রাম
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            শিক্ষা ছড়াও,{" "}
            <span className="text-gold-400">৫০% পর্যন্ত</span> কমিশন আয় করো
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            আমাদের কোর্স তোমার নেটওয়ার্কে শেয়ার করো — প্রতিটি বিক্রয়ে কমিশন আয় করো। মাসে ৫০ হাজার+ টাকা পর্যন্ত উপার্জনের সুযোগ।
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/signup?role=affiliate" className="btn-gold">
              ফ্রিতে যুক্ত হোন <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how"
              className="btn-ghost-dark"
            >
              কীভাবে কাজ করে?
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            <HeroStat label="অ্যাফিলিয়েট" value={`${toBn(2500)}+`} />
            <HeroStat label="মোট পেআউট" value="৳১.২ Cr+" />
            <HeroStat label="গড় কমিশন" value={`${toBn(35)}%`} />
          </div>
        </div>

        {/* right earnings card */}
        <div className="relative">
          <EarningsCard />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur">
      <div className="font-display text-xl font-extrabold text-white sm:text-2xl">
        {value}
      </div>
      <div className="text-[10px] font-medium uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}

function EarningsCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gold-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-card-dark backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/60">
              এই মাসের আয়
            </div>
            <div className="mt-1 font-display text-4xl font-extrabold text-gold-400">
              ৳{toBn(48750)}
            </div>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
              <TrendingUp className="h-3 w-3" />
              +{toBn(28)}% গত মাসের চেয়ে
            </div>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient shadow-glow">
            <Wallet className="h-6 w-6 text-ink-900" />
          </div>
        </div>

        {/* Bar chart-ish */}
        <div className="mt-6 grid grid-cols-7 items-end gap-2">
          {[40, 65, 50, 80, 55, 90, 75].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-fuchsia-500 to-gold-400"
                style={{ height: `${h}px` }}
              />
              <div className="text-[10px] font-bold text-white/60">
                {["S", "M", "T", "W", "T", "F", "S"][i]}
              </div>
            </div>
          ))}
        </div>

        {/* mini stats */}
        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-white">
          <Mini label="রেফার" value={toBn(124)} />
          <Mini label="বিক্রয়" value={toBn(38)} />
          <Mini label="রেট" value={`${toBn(31)}%`} />
        </div>
      </div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-lg font-extrabold text-white">
        {value}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}

/* ---------------- Benefits ---------------- */

function Benefits() {
  const items = [
    {
      icon: Wallet,
      title: "৫০% পর্যন্ত কমিশন",
      desc: "প্রতিটি কোর্স বিক্রয়ে সর্বোচ্চ ৫০% কমিশন। প্রিমিয়াম কোর্সে বেশি আয়।",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Banknote,
      title: "তাৎক্ষণিক পেআউট",
      desc: "৳১০০০ হলেই বিকাশ, নগদ, রকেট বা ব্যাংকে উইথড্র — সর্বোচ্চ ৪৮ ঘন্টায়।",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Link2,
      title: "ইউনিক রেফারেল লিংক",
      desc: "প্রতিটি অ্যাফিলিয়েটের জন্য আলাদা ট্র্যাকিং লিংক ও কুপন কোড।",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "রিয়েল-টাইম ড্যাশবোর্ড",
      desc: "ক্লিক, কনভার্শন ও কমিশন ট্র্যাক করো লাইভ এনালিটিক্সে।",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      icon: Users,
      title: "মাসিক বোনাস",
      desc: "টপ পারফরমারদের জন্য অতিরিক্ত ৫,০০০ থেকে ৫০,০০০ টাকা পর্যন্ত বোনাস।",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: ShieldCheck,
      title: "১২০ দিন কুকি",
      desc: "তোমার লিংকে ক্লিক করার পর ১২০ দিনের মধ্যে যেকোনো ক্রয়ে কমিশন।",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="কেন আমাদের সাথে?"
          title="অ্যাফিলিয়েটদের জন্য বিশেষ সুবিধা"
          subtitle="বাংলাদেশের সবচেয়ে লাভজনক এডুটেক অ্যাফিলিয়েট প্রোগ্রাম"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-paper-300 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
            >
              <div
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
                  color
                )}
              />
              <div
                className={cn(
                  "relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-md",
                  color
                )}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="relative mt-4 font-display text-lg font-extrabold text-body">
                {title}
              </h3>
              <p className="relative mt-1 text-sm text-body-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Steps ---------------- */

function Steps() {
  const steps = [
    {
      n: "০১",
      icon: GraduationCap,
      title: "সাইন আপ করুন",
      desc: "ফ্রিতে অ্যাফিলিয়েট অ্যাকাউন্ট তৈরি করুন — মাত্র ৩০ সেকেন্ডে।",
    },
    {
      n: "০২",
      icon: Link2,
      title: "লিংক জেনারেট করুন",
      desc: "আপনার প্রিয় কোর্সের ইউনিক রেফারেল লিংক তৈরি করুন এক ক্লিকে।",
    },
    {
      n: "০৩",
      icon: Share2,
      title: "শেয়ার করুন",
      desc: "ফেসবুক, ইউটিউব, টিকটক, ব্লগ — যেখানে খুশি শেয়ার করুন।",
    },
    {
      n: "০৪",
      icon: Wallet,
      title: "আয় তুলুন",
      desc: "প্রতি বিক্রয়ে কমিশন। বিকাশ/নগদে দ্রুত পেআউট।",
    },
  ];

  return (
    <section id="how" className="relative bg-paper-200/60 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="৪ ধাপে শুরু"
          title="কীভাবে কাজ করে"
          subtitle="সহজ, দ্রুত এবং সম্পূর্ণ ফ্রি — আজই শুরু করুন"
        />

        <div className="relative grid gap-6 lg:grid-cols-4">
          {/* connecting line */}
          <div className="pointer-events-none absolute inset-x-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent lg:block" />

          {steps.map((s, i) => {
            const Si = s.icon;
            return (
              <div
                key={s.n}
                className="relative rounded-3xl border border-paper-300 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
              >
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gold-gradient shadow-glow">
                  <Si className="h-8 w-8 text-ink-900" strokeWidth={2.5} />
                </div>
                <div className="mt-3 font-display text-3xl font-extrabold text-paper-300">
                  {s.n}
                </div>
                <h3 className="mt-1 font-display text-lg font-extrabold text-body">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-body-soft">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Commission ---------------- */

function Commission() {
  const tiers = [
    {
      name: "Starter",
      icon: Medal,
      rate: 25,
      color: "from-amber-500 to-orange-600",
      perks: [
        "সব কোর্সে ২৫% কমিশন",
        "বেসিক ড্যাশবোর্ড",
        "ইমেইল সাপোর্ট",
        "১২০ দিন কুকি",
      ],
      requirement: "০ – ৯,৯৯৯ ৳ মাসিক বিক্রয়",
    },
    {
      name: "Pro",
      icon: Trophy,
      rate: 35,
      color: "from-fuchsia-500 to-purple-600",
      perks: [
        "সব কোর্সে ৩৫% কমিশন",
        "অ্যাডভান্সড এনালিটিক্স",
        "প্রায়োরিটি সাপোর্ট",
        "৳২,০০০ মাসিক বোনাস",
      ],
      requirement: "১০,০০০ – ৪৯,৯৯৯ ৳",
      featured: true,
    },
    {
      name: "Elite",
      icon: Crown,
      rate: 50,
      color: "from-rose-500 to-red-600",
      perks: [
        "সব কোর্সে ৫০% কমিশন",
        "ডেডিকেটেড ম্যানেজার",
        "কাস্টম ক্যাম্পেইন",
        "৳১০,০০০+ মাসিক বোনাস",
      ],
      requirement: "৫০,০০০ ৳ +",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="কমিশন কাঠামো"
          title="যত বেশি বিক্রয়, তত বেশি কমিশন"
          subtitle="তিনটি স্তরে স্কেল করো — পারফরম্যান্স অনুযায়ী রেট বাড়ে"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => {
            const Ti = t.icon;
            return (
              <div
                key={t.name}
                className={cn(
                  "relative overflow-hidden rounded-3xl border bg-white p-7 shadow-card transition-all hover:-translate-y-1",
                  t.featured
                    ? "border-gold-500/60 ring-2 ring-gold-500/30 shadow-card-hover"
                    : "border-paper-300 hover:border-gold-500/40 hover:shadow-card-hover"
                )}
              >
                {t.featured && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
                    <Star className="h-3 w-3 fill-current" /> জনপ্রিয়
                  </span>
                )}
                <div
                  className={cn(
                    "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md",
                    t.color
                  )}
                >
                  <Ti className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-body">
                  {t.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-display text-5xl font-extrabold text-ink-500">
                    {toBn(t.rate)}%
                  </span>
                  <span className="text-sm font-semibold text-body-muted">
                    কমিশন
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold text-body-muted">
                  {t.requirement}
                </p>

                <ul className="mt-5 space-y-2">
                  {t.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-body-soft"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup?role=affiliate"
                  className={cn(
                    "mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-bold transition",
                    t.featured
                      ? "bg-gold-gradient text-ink-900 shadow-glow-sm hover:scale-[1.02]"
                      : "border border-paper-300 bg-white text-body hover:border-ink-500/40 hover:text-ink-500"
                  )}
                >
                  শুরু করুন <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Calculator ---------------- */

function Calculator() {
  const [sales, setSales] = useState(20);
  const [avgPrice, setAvgPrice] = useState(5000);
  const [rate, setRate] = useState(35);
  const monthly = Math.round((sales * avgPrice * rate) / 100);
  const yearly = monthly * 12;

  return (
    <section className="relative bg-paper-200/60 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="আয় ক্যালকুলেটর"
          title="তোমার সম্ভাব্য আয় হিসাব করো"
          subtitle="স্লাইডার ব্যবহার করে দেখো — মাসিক ও বার্ষিক কত আয় করতে পারো"
        />

        <div className="grid gap-6 rounded-3xl border border-paper-300 bg-white p-6 shadow-card lg:grid-cols-2 lg:p-10">
          <div className="space-y-6">
            <Slider
              label="মাসিক বিক্রয় সংখ্যা"
              value={sales}
              min={1}
              max={200}
              step={1}
              onChange={setSales}
              suffix=" বিক্রয়"
            />
            <Slider
              label="গড় কোর্স মূল্য"
              value={avgPrice}
              min={500}
              max={15000}
              step={100}
              onChange={setAvgPrice}
              prefix="৳"
            />
            <Slider
              label="কমিশন রেট"
              value={rate}
              min={25}
              max={50}
              step={1}
              onChange={setRate}
              suffix="%"
            />
          </div>

          <div className="grid place-items-center rounded-2xl bg-slide-purple p-8 text-white">
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                মাসিক সম্ভাব্য আয়
              </div>
              <div className="mt-2 font-display text-5xl font-extrabold text-gold-400 sm:text-6xl">
                ৳{toBn(monthly.toLocaleString("en-IN"))}
              </div>
              <div className="mt-4 grid gap-3 rounded-xl bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">বার্ষিক</span>
                  <span className="font-display text-xl font-extrabold text-white">
                    ৳{toBn(yearly.toLocaleString("en-IN"))}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">প্রতি বিক্রয়ে</span>
                  <span className="font-display text-lg font-extrabold text-white">
                    ৳{toBn(Math.round((avgPrice * rate) / 100))}
                  </span>
                </div>
              </div>
              <Link
                href="/signup?role=affiliate"
                className="btn-gold mt-5 inline-flex"
              >
                এখনই শুরু করুন <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  prefix = "",
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-bold text-body">{label}</span>
        <span className="font-display text-lg font-extrabold text-ink-500">
          {prefix}
          {toBn(value.toLocaleString("en-IN"))}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-gold-500"
      />
    </label>
  );
}

/* ---------------- Leaderboard ---------------- */

function Leaderboard() {
  const top = [
    {
      rank: 1,
      name: "মিনহাজ ইসলাম",
      area: "ঢাকা",
      sales: 248,
      earned: 312000,
      grad: "from-amber-500 to-orange-600",
      icon: Crown,
    },
    {
      rank: 2,
      name: "সানজিদা আক্তার",
      area: "চট্টগ্রাম",
      sales: 215,
      earned: 268000,
      grad: "from-slate-400 to-slate-500",
      icon: Trophy,
    },
    {
      rank: 3,
      name: "আদনান হোসেন",
      area: "সিলেট",
      sales: 187,
      earned: 234000,
      grad: "from-orange-400 to-amber-600",
      icon: Medal,
    },
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="টপ অ্যাফিলিয়েট"
          title="এই মাসের সেরা পারফরমার"
          subtitle="তুমিও হতে পারো পরবর্তী চ্যাম্পিয়ন"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {top.map((p) => {
            const Pi = p.icon;
            return (
              <div
                key={p.rank}
                className={cn(
                  "relative overflow-hidden rounded-3xl border bg-white p-6 shadow-card",
                  p.rank === 1
                    ? "border-gold-500/50 ring-2 ring-gold-500/20"
                    : "border-paper-300"
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
                    p.grad
                  )}
                />
                <span
                  className={cn(
                    "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br shadow-md",
                    p.grad
                  )}
                >
                  <Pi className="h-5 w-5 text-white" />
                </span>

                <div className="font-display text-5xl font-extrabold text-paper-300">
                  #{toBn(p.rank)}
                </div>
                <h3 className="mt-2 font-display text-lg font-extrabold text-body">
                  {p.name}
                </h3>
                <p className="text-xs text-body-muted">{p.area}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-paper-300 pt-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-body-muted">
                      বিক্রয়
                    </div>
                    <div className="font-display text-xl font-extrabold text-body">
                      {toBn(p.sales)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-body-muted">
                      আয়
                    </div>
                    <div className="font-display text-xl font-extrabold text-ink-500">
                      ৳{toBn(p.earned.toLocaleString("en-IN"))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const items = [
    {
      q: "যুক্ত হতে কি কোনো খরচ আছে?",
      a: "না, একদম ফ্রি। শুধু সাইন আপ করুন আর শুরু করে দিন।",
    },
    {
      q: "কখন কমিশন পাব?",
      a: "প্রতিটি বিক্রয় কনফার্ম হওয়ার ১৪ দিন পর কমিশন আনলক হয়। মিনিমাম ৳১,০০০ হলেই উইথড্র করতে পারবেন।",
    },
    {
      q: "কোন কোন কোর্সে কমিশন পাব?",
      a: "i Education-এর সব পেইড কোর্স — SSC, HSC, Admission, ও স্পেশাল কোর্সসহ সবগুলোতেই কমিশন পাবেন।",
    },
    {
      q: "কীভাবে পেমেন্ট পাব?",
      a: "বিকাশ, নগদ, রকেট, বা সরাসরি ব্যাংক অ্যাকাউন্টে — যেকোনো একটি বেছে নিতে পারেন।",
    },
    {
      q: "কুকি কতদিন থাকে?",
      a: "১২০ দিন। আপনার লিংকে ক্লিক করার ১২০ দিনের মধ্যে যেকোনো ক্রয়ের কমিশন আপনি পাবেন।",
    },
    {
      q: "টপ পারফরমার বোনাস কী?",
      a: "প্রতি মাসে শীর্ষ ১০ অ্যাফিলিয়েটদের জন্য ৳৫,০০০ থেকে ৳৫০,০০০ পর্যন্ত অতিরিক্ত বোনাস।",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-paper-200/60 py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="সাধারণ প্রশ্ন"
          title="তোমার সব প্রশ্নের উত্তর"
          subtitle="অ্যাফিলিয়েট প্রোগ্রাম সম্পর্কে যা জানতে চাও"
        />

        <div className="space-y-3">
          {items.map((it, i) => (
            <div
              key={i}
              className={cn(
                "overflow-hidden rounded-2xl border bg-white shadow-card transition-all",
                open === i
                  ? "border-gold-500/40"
                  : "border-paper-300"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-display text-base font-bold text-body">
                  {it.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-ink-500 transition-transform",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <div className="border-t border-paper-300 bg-paper-100/50 px-5 py-4 text-sm text-body-soft">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slide-purple p-10 text-center shadow-card-dark sm:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

          <div className="relative mx-auto max-w-2xl text-white">
            <span className="pill-gold !bg-white/15 !text-gold-300 !ring-white/20">
              <Award className="h-3.5 w-3.5" />
              আজই যুক্ত হোন
            </span>
            <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              শিক্ষা ছড়িয়ে দিন,{" "}
              <span className="text-gold-400">ফাইনান্সিয়াল ফ্রিডম</span> অর্জন করুন
            </h3>
            <p className="mt-3 text-base text-white/80">
              ২৫০০+ অ্যাফিলিয়েটের সাথে যুক্ত হোন। ফ্রিতে শুরু করুন, কমিশন আয় করুন।
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/signup?role=affiliate" className="btn-gold">
                এখনই যুক্ত হোন <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/affiliate" className="btn-ghost-dark">
                ড্যাশবোর্ডে যান <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
