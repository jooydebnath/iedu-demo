"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Phone,
  PencilLine,
  LogOut,
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  PlayCircle,
  CheckCircle2,
  Heart,
  ShoppingBag,
  Settings,
  Bell,
  TrendingUp,
  Trophy,
  Sparkles,
  ArrowRight,
  Camera,
  ShieldCheck,
  School,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn, toBn } from "@/lib/utils";
import { getUser, logout, isStudent, type User as AuthUser } from "@/lib/auth";

const TABS = [
  { id: "overview", label: "ওভারভিউ", icon: TrendingUp },
  { id: "courses", label: "আমার কোর্স", icon: BookOpen },
  { id: "orders", label: "অর্ডারস", icon: ShoppingBag },
  { id: "wishlist", label: "উইশলিস্ট", icon: Heart },
  { id: "settings", label: "সেটিংস", icon: Settings },
] as const;

const ENROLLED = [
  {
    title: "HSC FBC ২৬ — সাইন্স",
    teacher: "ড. শাহরিয়ার রহমান",
    progress: 64,
    totalLessons: 320,
    completed: 205,
    nextLesson: "নিউটনের ৩য় সূত্র",
    grad: "from-blue-500 to-indigo-600",
    pretitle: "HSC ২৬",
  },
  {
    title: "Medical 2nd Time",
    teacher: "নুসরাত জাহান",
    progress: 38,
    totalLessons: 240,
    completed: 91,
    nextLesson: "Cell Biology — Mitochondria",
    grad: "from-rose-500 to-pink-600",
    pretitle: "MEDICAL",
  },
  {
    title: "Spoken English Pro",
    teacher: "মিস্টার অরিন",
    progress: 92,
    totalLessons: 60,
    completed: 55,
    nextLesson: "Final Speaking Practice",
    grad: "from-violet-500 to-purple-600",
    pretitle: "ENGLISH",
  },
];

const ORDERS = [
  {
    id: "INV-২৬০১",
    date: "২৫ এপ্রিল ২০২৬",
    item: "HSC FBC ২৬ — সাইন্স",
    amount: 5900,
    status: "paid" as const,
  },
  {
    id: "INV-২৫১৪",
    date: "১২ এপ্রিল ২০২৬",
    item: "Medical 2nd Time",
    amount: 8900,
    status: "paid" as const,
  },
  {
    id: "INV-২৪৮৭",
    date: "৩ এপ্রিল ২০২৬",
    item: "Spoken English Pro",
    amount: 1900,
    status: "pending" as const,
  },
];

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("overview");

  useEffect(() => {
    const u = getUser();
    if (!u || !isStudent()) {
      router.replace("/login?from=/profile");
      return;
    }
    setUser(u);
  }, [router]);

  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-paper-100">
        <div className="animate-pulse text-body-muted">লোড হচ্ছে...</div>
      </main>
    );
  }

  const initial = user.name ? user.name.charAt(0).toUpperCase() : "?";
  const genderLabel =
    user.gender === "male" ? "ছাত্র" : user.gender === "female" ? "ছাত্রী" : "শিক্ষার্থী";

  return (
    <main className="relative min-h-screen bg-paper-100 text-body">
      <Navbar />

      {/* Cover */}
      <section className="relative overflow-hidden bg-slide-purple">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full opacity-15"
          viewBox="0 0 600 200"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          <path
            d="M0 160h600v40H0z M40 160V100l30-15v-20h20v20l30 15v60z M150 160V70l40-22v-25h25v25l40 22v90z M280 160V110l35-18v-20h22v20l35 18v50z M400 160V90l45-22v-25h25v25l45 22v70z"
            fill="white"
          />
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-20">
          <span className="pill-gold !bg-white/15 !text-gold-300 !ring-white/20 w-fit">
            <ShieldCheck className="h-3.5 w-3.5" />
            স্টুডেন্ট মেম্বার
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl">
            স্বাগতম, <span className="text-gold-400">{user.name || "শিক্ষার্থী"}</span>!
          </h1>
          <p className="mt-2 max-w-md text-white/70">
            তোমার লার্নিং জার্নি দেখো, কোর্স কন্টিনিউ করো ও নতুন অর্জন আনলক করো।
          </p>
        </div>
      </section>

      {/* Profile card overlapping cover */}
      <section className="relative -mt-16 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-paper-300 bg-white p-6 shadow-card lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            {/* Avatar */}
            <div className="relative mx-auto h-28 w-28 lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400 to-amber-500 blur-md opacity-60" />
              <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-amber-500 ring-4 ring-white shadow-card">
                <span className="font-display text-3xl font-extrabold text-white">
                  {initial}
                </span>
              </div>
              <button
                aria-label="Change photo"
                className="absolute -bottom-1 -right-1 grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-ink-900 shadow-glow-sm ring-2 ring-white"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* Info */}
            <div className="text-center lg:text-left">
              <h2 className="font-display text-2xl font-extrabold text-body sm:text-3xl">
                {user.name || "শিক্ষার্থী"}
              </h2>
              <p className="mt-1 text-sm text-body-soft">
                {genderLabel}
                {user.college ? ` • ${user.college}` : ""}
                {user.hscBatch ? ` • ${user.hscBatch}` : ""}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs lg:justify-start">
                {user.phone && <Info icon={Phone} value={`+৮৮০ ${user.phone}`} />}
                {user.guardianPhone && <Info icon={Users} value={`গার্ডিয়ান: +৮৮০ ${user.guardianPhone}`} />}
                {user.sscBatch && <Info icon={School} value={`SSC: ${user.sscBatch}`} />}
                {user.hscBatch && <Info icon={GraduationCap} value={`HSC: ${user.hscBatch}`} />}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-2 lg:justify-end">
              <button className="inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-4 py-2 text-sm font-semibold text-body transition hover:border-ink-500/40">
                <PencilLine className="h-4 w-4" /> এডিট
              </button>
              <button
                onClick={() => {
                  logout();
                  window.location.href = "/";
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-rose-600"
              >
                <LogOut className="h-4 w-4" /> লগআউট
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat
              icon={BookOpen}
              value={toBn(0)}
              label="এনরোলড কোর্স"
              accent="from-blue-500 to-indigo-600"
            />
            <Stat
              icon={CheckCircle2}
              value={toBn(0)}
              label="কমপ্লিটেড"
              accent="from-emerald-500 to-teal-600"
            />
            <Stat
              icon={Award}
              value={toBn(0)}
              label="সার্টিফিকেট"
              accent="from-amber-500 to-orange-600"
            />
            <Stat
              icon={Clock}
              value={`${toBn(0)} ঘন্টা`}
              label="স্টাডি টাইম"
              accent="from-fuchsia-500 to-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-paper-300">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "relative inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition",
                  active
                    ? "text-ink-500"
                    : "text-body-soft hover:text-body"
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
                {active && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold-gradient" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          {tab === "overview" && <OverviewTab />}
          {tab === "courses" && <CoursesTab />}
          {tab === "orders" && <OrdersTab />}
          {tab === "wishlist" && <EmptyState icon={Heart} title="উইশলিস্ট খালি" desc="পছন্দের কোর্স ও বই সংরক্ষণ করো এক ক্লিকে।" />}
          {tab === "settings" && <SettingsTab user={user} />}
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------------- helpers ---------------- */

function Info({
  icon: Icon,
  value,
}: {
  icon: typeof Phone;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-100 px-3 py-1 font-semibold text-body-soft ring-1 ring-inset ring-paper-300">
      <Icon className="h-3.5 w-3.5 text-ink-500" />
      {value}
    </span>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
  accent,
}: {
  icon: typeof BookOpen;
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-paper-300 bg-paper-100/60 p-4">
      <div
        className={cn(
          "pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
          accent
        )}
      />
      <div
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br shadow-md",
          accent
        )}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="relative mt-3 font-display text-2xl font-extrabold text-body">
        {value}
      </div>
      <div className="relative text-[11px] font-semibold text-body-muted">
        {label}
      </div>
    </div>
  );
}

/* ---------------- tabs ---------------- */

function OverviewTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Continue learning */}
      <div className="lg:col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-xl font-extrabold text-body">
            <Sparkles className="mr-1 inline h-5 w-5 text-gold-500" />
            শেখা চালিয়ে যাও
          </h3>
          <Link
            href="#"
            className="text-xs font-bold text-ink-500 hover:text-ink-600"
          >
            সব দেখুন →
          </Link>
        </div>
        <div className="space-y-4">
          {ENROLLED.slice(0, 2).map((c) => (
            <CourseProgressCard key={c.title} course={c} />
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="mb-4 font-display text-xl font-extrabold text-body">
          <Trophy className="mr-1 inline h-5 w-5 text-gold-500" />
          অর্জনসমূহ
        </h3>
        <div className="space-y-3 rounded-3xl border border-paper-300 bg-white p-5 shadow-card">
          {[
            { icon: Award, title: "প্রথম কোর্স কমপ্লিট", date: "২০ ফেব্রুয়ারি", color: "from-amber-500 to-orange-600" },
            { icon: TrendingUp, title: "৭ দিনের স্ট্রিক", date: "চলমান", color: "from-emerald-500 to-teal-600" },
            { icon: Trophy, title: "টপ ১০% র‍্যাঙ্কার", date: "মার্চ ২০২৬", color: "from-rose-500 to-pink-600" },
            { icon: GraduationCap, title: "৫টি সার্টিফিকেট", date: "এপ্রিল ২০২৬", color: "from-blue-500 to-indigo-600" },
          ].map((a, i) => {
            const Ai = a.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br shadow-md",
                    a.color
                  )}
                >
                  <Ai className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-body">{a.title}</div>
                  <div className="text-xs text-body-muted">{a.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CoursesTab() {
  return (
    <div className="space-y-4">
      {ENROLLED.map((c) => (
        <CourseProgressCard key={c.title} course={c} />
      ))}
    </div>
  );
}

function CourseProgressCard({
  course: c,
}: {
  course: (typeof ENROLLED)[number];
}) {
  return (
    <article className="group flex overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-card-hover">
      {/* Thumbnail */}
      <div
        className={cn(
          "relative hidden w-44 shrink-0 overflow-hidden bg-slide-purple sm:block"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br opacity-60 blur-2xl",
            c.grad
          )}
        />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="font-display text-xl font-extrabold leading-none text-white">
            {c.pretitle}
          </div>
          <div className="mt-1.5 inline-block rounded-md bg-gold-500 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-ink-900">
            {c.progress}% DONE
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-5">
        <h4 className="font-display text-lg font-extrabold text-body">
          {c.title}
        </h4>
        <p className="mt-0.5 text-xs text-body-muted">
          ইনস্ট্রাক্টর: <span className="font-semibold text-body-soft">{c.teacher}</span>
        </p>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] font-bold text-body-soft">
            <span>
              {toBn(c.completed)}/{toBn(c.totalLessons)} ক্লাস
            </span>
            <span className="text-ink-500">{toBn(c.progress)}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper-200">
            <div
              className="h-full rounded-full bg-gold-gradient transition-all"
              style={{ width: `${c.progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-xs text-body-muted">
            <PlayCircle className="mr-1 inline h-3.5 w-3.5 text-gold-600" />
            পরবর্তী ক্লাস:{" "}
            <span className="font-semibold text-body">{c.nextLesson}</span>
          </div>
          <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 text-xs font-bold text-ink-900 shadow-glow-sm transition hover:scale-105">
            চালিয়ে যাও <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

function OrdersTab() {
  return (
    <div className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card">
      <div className="grid grid-cols-[1fr_2fr_1fr_auto] gap-4 border-b border-paper-300 bg-paper-100 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-body-soft">
        <span>অর্ডার নং</span>
        <span>কোর্স</span>
        <span>মূল্য</span>
        <span>স্ট্যাটাস</span>
      </div>
      {ORDERS.map((o, i) => (
        <div
          key={o.id}
          className={cn(
            "grid grid-cols-[1fr_2fr_1fr_auto] items-center gap-4 px-6 py-4 text-sm",
            i !== ORDERS.length - 1 && "border-b border-paper-300"
          )}
        >
          <div>
            <div className="font-bold text-body">{o.id}</div>
            <div className="text-xs text-body-muted">{o.date}</div>
          </div>
          <div className="font-semibold text-body">{o.item}</div>
          <div className="font-display text-lg font-extrabold text-ink-500">
            ৳{toBn(o.amount)}
          </div>
          <div>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-extrabold",
                o.status === "paid"
                  ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                  : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
              )}
            >
              {o.status === "paid" ? "পেইড" : "পেন্ডিং"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SettingsTab({ user }: { user: AuthUser }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
        <h4 className="font-display text-lg font-extrabold text-body">
          <User className="mr-1 inline h-5 w-5 text-ink-500" /> পার্সোনাল ইনফো
        </h4>
        <div className="mt-5 space-y-4">
          <SettingsField label="পূর্ণ নাম" defaultValue={user.name || ""} />
          <SettingsField label="মোবাইল" defaultValue={user.phone || ""} />
          <SettingsField label="কলেজ/স্কুল" defaultValue={user.college || ""} />
          <SettingsField label="HSC ব্যাচ" defaultValue={user.hscBatch || ""} />
          <SettingsField label="SSC ব্যাচ" defaultValue={user.sscBatch || ""} />
          <SettingsField label="অভিভাবকের নম্বর" defaultValue={user.guardianPhone || ""} />
          <button className="btn-gold w-full !py-3">পরিবর্তন সংরক্ষণ করুন</button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
          <h4 className="font-display text-lg font-extrabold text-body">
            <Bell className="mr-1 inline h-5 w-5 text-ink-500" /> নোটিফিকেশন
          </h4>
          <div className="mt-5 space-y-3">
            {[
              "নতুন কোর্স রিলিজ",
              "ক্লাস রিমাইন্ডার",
              "অফার ও ডিসকাউন্ট",
              "অ্যাচিভমেন্ট আপডেট",
            ].map((n) => (
              <label
                key={n}
                className="flex cursor-pointer items-center justify-between rounded-xl border border-paper-300 px-4 py-3 hover:bg-paper-100"
              >
                <span className="text-sm font-semibold text-body">{n}</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-9 appearance-none rounded-full bg-paper-300 transition checked:bg-gold-500 relative cursor-pointer
                  before:content-[''] before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition checked:before:translate-x-4"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-rose-200 bg-rose-50/50 p-6">
          <h4 className="font-display text-lg font-extrabold text-rose-700">
            ডেঞ্জার জোন
          </h4>
          <p className="mt-1 text-sm text-rose-700/80">
            অ্যাকাউন্ট ডিলিট করলে সব ডেটা স্থায়ীভাবে মুছে যাবে।
          </p>
          <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2 text-sm font-bold text-white hover:bg-rose-600">
            অ্যাকাউন্ট ডিলিট
          </button>
        </div>
      </div>
    </div>
  );
}

function SettingsField({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-body-soft">
        {label}
      </span>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-paper-300 bg-white px-4 py-2.5 text-sm text-body focus:border-ink-500/50 focus:outline-none focus:ring-2 focus:ring-ink-500/10"
      />
    </label>
  );
}

function EmptyState({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Heart;
  title: string;
  desc: string;
}) {
  return (
    <div className="grid place-items-center rounded-3xl border border-dashed border-paper-300 bg-white py-16 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-paper-100 text-ink-500">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mt-4 font-display text-xl font-extrabold text-body">
        {title}
      </h3>
      <p className="mt-1 max-w-sm text-sm text-body-soft">{desc}</p>
      <Link href="/" className="btn-gold mt-5 !py-2.5 text-sm">
        কোর্স দেখুন <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
