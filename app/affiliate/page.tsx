"use client";

import Link from "next/link";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Users,
  MousePointerClick,
  Target,
  ArrowRight,
  Link2,
  Share2,
  Image as ImageIcon,
  Crown,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Trophy,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";

const RECENT = [
  {
    name: "ফাহিম শাহরিয়ার",
    avatar: "from-blue-500 to-indigo-600",
    initials: "ফা",
    course: "HSC FBC ২৬",
    amount: 5900,
    commission: 2065,
    status: "paid" as const,
    when: "১২ মিনিট আগে",
  },
  {
    name: "সাবরিনা ইসলাম",
    avatar: "from-emerald-500 to-teal-600",
    initials: "সা",
    course: "Spoken English Pro",
    amount: 1900,
    commission: 665,
    status: "paid" as const,
    when: "১ ঘন্টা আগে",
  },
  {
    name: "আদনান হোসেন",
    avatar: "from-rose-500 to-pink-600",
    initials: "আ",
    course: "Medical 2nd Time",
    amount: 8900,
    commission: 3115,
    status: "pending" as const,
    when: "৩ ঘন্টা আগে",
  },
  {
    name: "নুসরাত জাহান",
    avatar: "from-fuchsia-500 to-purple-600",
    initials: "নু",
    course: "ICT কমপ্লিট কোর্স",
    amount: 990,
    commission: 346,
    status: "paid" as const,
    when: "৬ ঘন্টা আগে",
  },
  {
    name: "তৌফিক আহমেদ",
    avatar: "from-amber-500 to-orange-600",
    initials: "তৌ",
    course: "Engineering 2nd Time",
    amount: 7900,
    commission: 2765,
    status: "paid" as const,
    when: "গতকাল",
  },
];

const TOP_COURSES = [
  {
    title: "HSC FBC ২৬ — সাইন্স",
    sales: 18,
    earned: 37170,
    pretitle: "HSC ২৬",
    grad: "from-blue-500 to-indigo-600",
  },
  {
    title: "Medical 2nd Time",
    sales: 9,
    earned: 28035,
    pretitle: "MEDICAL",
    grad: "from-rose-500 to-pink-600",
  },
  {
    title: "Spoken English Pro",
    sales: 12,
    earned: 7980,
    pretitle: "ENGLISH",
    grad: "from-violet-500 to-purple-600",
  },
];

export default function AffiliateDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <section className="relative overflow-hidden rounded-3xl bg-slide-purple p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

        <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="pill-gold !bg-white/15 !text-gold-300 !ring-white/20">
              <Sparkles className="h-3.5 w-3.5" />
              আজকের লক্ষ্য চলমান
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              স্বাগতম, <span className="text-gold-400">তাসনিম</span>! 🎉
            </h2>
            <p className="mt-1 text-sm text-white/80">
              এই মাসে তোমার পারফরম্যান্স{" "}
              <span className="font-bold text-emerald-300">+২৮%</span> বেশি — এভাবে চললে Elite tier আনলক হবে শীঘ্রই।
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/affiliate/links" className="btn-gold !py-2.5">
                <Link2 className="h-4 w-4" /> নতুন লিংক তৈরি করো
              </Link>
              <Link href="/affiliate/earnings" className="btn-ghost-dark">
                <Wallet className="h-4 w-4" /> উইথড্র করো
              </Link>
            </div>
          </div>

          {/* Tier upgrade card */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur lg:w-72">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
                <Crown className="h-3 w-3 fill-current" /> PRO
              </span>
              <span className="text-[10px] font-bold text-white/60">
                NEXT: ELITE
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="font-display text-3xl font-extrabold text-white">
                ৳{toBn(38950)}
              </span>
              <span className="text-sm text-white/70">/ ৳৫০,০০০</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gold-gradient"
                style={{ width: "78%" }}
              />
            </div>
            <p className="mt-2 text-[11px] text-white/70">
              আর ৳{toBn(11050)} করে ফেললেই Elite tier — কমিশন {toBn(50)}% হবে!
            </p>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi
          icon={Wallet}
          label="মোট ব্যালেন্স"
          value={`৳${toBn(48750)}`}
          delta={{ value: "+২৮%", positive: true }}
          accent="from-amber-500 to-orange-600"
          sub="এই মাসে আয়"
        />
        <Kpi
          icon={Users}
          label="মোট রেফারেল"
          value={toBn(124)}
          delta={{ value: "+১৫", positive: true }}
          accent="from-blue-500 to-indigo-600"
          sub="এই মাসে"
        />
        <Kpi
          icon={MousePointerClick}
          label="মোট ক্লিক"
          value={toBn("3,847")}
          delta={{ value: "-৪%", positive: false }}
          accent="from-fuchsia-500 to-purple-600"
          sub="গত ৩০ দিন"
        />
        <Kpi
          icon={Target}
          label="কনভার্শন রেট"
          value={`${toBn(3.2)}%`}
          delta={{ value: "+০.৮%", positive: true }}
          accent="from-emerald-500 to-teal-600"
          sub="ইন্ডাস্ট্রি গড় ২.১%"
        />
      </section>

      {/* Chart + Quick actions */}
      <section className="grid gap-6 lg:grid-cols-3">
        <EarningsChart />
        <QuickActions />
      </section>

      {/* Recent + Top Courses */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <TopCourses />
      </section>

      {/* Tips strip */}
      <section className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-gradient shadow-glow-sm">
            <Trophy className="h-6 w-6 text-ink-900" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-extrabold text-body">
              💡 আজকের টিপ
            </h3>
            <p className="mt-1 text-sm text-body-soft">
              ফেসবুক রিলস ও ইউটিউব শর্টস-এ কোর্স রিভিউ পোস্ট করলে কনভার্শন রেট গড়ে{" "}
              <span className="font-bold text-emerald-600">৩x বেশি</span> হয়। আজই ট্রাই করো!
            </p>
          </div>
          <Link
            href="/affiliate/materials"
            className="hidden shrink-0 items-center gap-1.5 rounded-full border border-paper-300 bg-white px-4 py-2 text-xs font-bold text-body transition hover:border-ink-500/40 hover:text-ink-500 sm:inline-flex"
          >
            <ImageIcon className="h-3.5 w-3.5" /> মার্কেটিং কিট
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ---------------- pieces ---------------- */

function Kpi({
  icon: Icon,
  label,
  value,
  delta,
  accent,
  sub,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
  delta: { value: string; positive: boolean };
  accent: string;
  sub: string;
}) {
  const Trend = delta.positive ? TrendingUp : TrendingDown;
  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper-300 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
          accent
        )}
      />
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br shadow-md",
            accent
          )}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold",
            delta.positive
              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
              : "bg-rose-50 text-rose-700 ring-1 ring-rose-200"
          )}
        >
          <Trend className="h-3 w-3" /> {delta.value}
        </span>
      </div>
      <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-body-muted">
        {label}
      </div>
      <div className="mt-1 font-display text-3xl font-extrabold text-body">
        {value}
      </div>
      <div className="mt-0.5 text-[11px] text-body-muted">{sub}</div>
    </div>
  );
}

function EarningsChart() {
  // Mock 14 days
  const data = [42, 58, 65, 48, 72, 85, 60, 92, 78, 95, 110, 85, 125, 138];
  const max = Math.max(...data);
  const labels = ["১২", "১৩", "১৪", "১৫", "১৬", "১৭", "১৮", "১৯", "২০", "২১", "২২", "২৩", "২৪", "২৫"];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper-300 bg-white p-6 shadow-card lg:col-span-2">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-lg font-extrabold text-body">
            আয়ের গ্রাফ
          </h3>
          <p className="text-xs text-body-muted">গত ১৪ দিন</p>
        </div>
        <div className="flex items-center gap-2">
          {["৭ দিন", "১৪ দিন", "৩০ দিন"].map((p, i) => (
            <button
              key={p}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-bold transition",
                i === 1
                  ? "bg-ink-800 text-white"
                  : "border border-paper-300 bg-white text-body-soft hover:border-ink-500/40"
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Bars */}
      <div
        className="mt-6 grid h-44 items-end gap-1.5"
        style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}
      >
        {data.map((v, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center justify-end"
          >
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-ink-500 via-fuchsia-500 to-gold-400 transition-all hover:scale-y-105"
              style={{ height: `${(v / max) * 100}%` }}
            />
            {/* tooltip */}
            <div className="pointer-events-none absolute -top-9 hidden rounded-md bg-ink-900 px-2 py-1 text-[10px] font-bold text-white group-hover:block">
              ৳{toBn(v * 100)}
            </div>
          </div>
        ))}
      </div>

      {/* X labels */}
      <div
        className="mt-2 grid gap-1.5 text-center text-[10px] font-bold text-body-muted"
        style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}
      >
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>

      {/* Footer summary */}
      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-paper-300 pt-4">
        <Mini label="মোট ক্লিক" value={toBn("3,847")} />
        <Mini label="মোট বিক্রয়" value={toBn(124)} />
        <Mini label="মোট আয়" value={`৳${toBn(48750)}`} />
      </div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-body-muted">
        {label}
      </div>
      <div className="mt-0.5 font-display text-lg font-extrabold text-body">
        {value}
      </div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="space-y-4">
      {/* Available balance card */}
      <div className="relative overflow-hidden rounded-3xl border border-gold-500/40 bg-gradient-to-br from-gold-50 to-white p-6 shadow-card">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-400/30 blur-2xl" />
        <div className="text-[11px] font-bold uppercase tracking-wider text-gold-700">
          উইথড্র যোগ্য
        </div>
        <div className="relative mt-1 font-display text-4xl font-extrabold text-ink-900">
          ৳{toBn(36420)}
        </div>
        <div className="text-xs text-body-soft">
          পেন্ডিং: ৳{toBn(12330)}
        </div>
        <Link
          href="/affiliate/earnings"
          className="btn-gold mt-4 w-full !py-2.5 text-sm"
        >
          এখনই উইথড্র <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Quick actions list */}
      <div className="rounded-3xl border border-paper-300 bg-white p-3 shadow-card">
        <div className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-widest text-body-muted">
          কুইক অ্যাকশন
        </div>
        {[
          { icon: Link2, label: "নতুন লিংক", href: "/affiliate/links", color: "from-blue-500 to-indigo-600" },
          { icon: Share2, label: "শেয়ার ব্যানার", href: "/affiliate/materials", color: "from-fuchsia-500 to-purple-600" },
          { icon: Users, label: "রেফারেল দেখো", href: "/affiliate/referrals", color: "from-emerald-500 to-teal-600" },
        ].map((a) => {
          const Ai = a.icon;
          return (
            <Link
              key={a.label}
              href={a.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-paper-100"
            >
              <span
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br shadow-sm",
                  a.color
                )}
              >
                <Ai className="h-4 w-4 text-white" />
              </span>
              <span className="flex-1 text-sm font-semibold text-body">
                {a.label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-body-muted" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-paper-300 px-6 py-4">
        <div>
          <h3 className="font-display text-lg font-extrabold text-body">
            সাম্প্রতিক রেফারেল
          </h3>
          <p className="text-xs text-body-muted">তোমার সর্বশেষ {toBn(5)}টি কনভার্শন</p>
        </div>
        <Link
          href="/affiliate/referrals"
          className="text-xs font-bold text-ink-500 hover:text-ink-600"
        >
          সব দেখো →
        </Link>
      </div>

      <div className="divide-y divide-paper-300">
        {RECENT.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-6 py-3.5"
          >
            <div
              className={cn(
                "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-xs font-extrabold text-white",
                r.avatar
              )}
            >
              {r.initials}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-bold text-body">
                {r.name}
              </div>
              <div className="truncate text-xs text-body-muted">
                {r.course} • {r.when}
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-sm font-extrabold text-emerald-600">
                +৳{toBn(r.commission)}
              </div>
              <span
                className={cn(
                  "mt-0.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold",
                  r.status === "paid"
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                    : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                )}
              >
                {r.status === "paid" ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <Clock className="h-3 w-3" />
                )}
                {r.status === "paid" ? "পেইড" : "পেন্ডিং"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopCourses() {
  return (
    <div className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
      <h3 className="font-display text-lg font-extrabold text-body">
        সেরা পারফর্মিং কোর্স
      </h3>
      <p className="text-xs text-body-muted">এই মাসে</p>

      <div className="mt-5 space-y-4">
        {TOP_COURSES.map((c, i) => (
          <div key={c.title} className="flex items-center gap-3">
            <div
              className={cn(
                "relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-slide-purple"
              )}
            >
              <div
                className={cn(
                  "absolute -right-3 -top-3 h-12 w-12 rounded-full bg-gradient-to-br opacity-60 blur-xl",
                  c.grad
                )}
              />
              <span className="relative font-display text-[10px] font-extrabold leading-none text-white">
                {c.pretitle}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-sm font-bold text-body">
                {c.title}
              </div>
              <div className="text-[11px] font-medium text-body-muted">
                {toBn(c.sales)} বিক্রয়
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper-200">
                <div
                  className="h-full rounded-full bg-gold-gradient"
                  style={{
                    width: `${(c.sales / TOP_COURSES[0].sales) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="font-display text-sm font-extrabold text-ink-500">
              ৳{toBn(c.earned.toLocaleString("en-IN"))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
