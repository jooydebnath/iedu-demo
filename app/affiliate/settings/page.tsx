"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Lock,
  Bell,
  Smartphone,
  Building2,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  ShieldCheck,
  Camera,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "profile", label: "প্রোফাইল", icon: User },
  { id: "payout", label: "পেআউট মেথড", icon: Smartphone },
  { id: "notify", label: "নোটিফিকেশন", icon: Bell },
  { id: "security", label: "সিকিউরিটি", icon: Lock },
] as const;

export default function SettingsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("profile");

  return (
    <div className="grid gap-6 lg:grid-cols-[14rem_1fr]">
      {/* Side tabs */}
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="rounded-3xl border border-paper-300 bg-white p-2 shadow-card">
          {TABS.map((t) => {
            const Ti = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition",
                  active
                    ? "bg-gold-gradient text-ink-900 shadow-glow-sm"
                    : "text-body-soft hover:bg-paper-100 hover:text-body"
                )}
              >
                <Ti className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>
      </aside>

      <div className="space-y-6">
        {tab === "profile" && <ProfileTab />}
        {tab === "payout" && <PayoutTab />}
        {tab === "notify" && <NotifyTab />}
        {tab === "security" && <SecurityTab />}
      </div>
    </div>
  );
}

/* ---------------- Profile ---------------- */

function ProfileTab() {
  return (
    <>
      <Card>
        <CardHeader
          title="পার্সোনাল ইনফরমেশন"
          subtitle="তোমার পাবলিক প্রোফাইল ও যোগাযোগের তথ্য"
        />

        {/* Avatar */}
        <div className="mt-5 flex items-center gap-5">
          <div className="relative">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 ring-4 ring-white shadow-card">
              <span className="font-display text-2xl font-extrabold text-white">
                তা
              </span>
            </div>
            <button
              aria-label="Change photo"
              className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-gold-gradient text-ink-900 shadow-glow-sm ring-2 ring-white"
            >
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>
          <div>
            <div className="font-display text-lg font-extrabold text-body">
              তাসনিম রহমান
            </div>
            <div className="text-xs text-body-muted">
              অ্যাফিলিয়েট ID: TASNIM001 • PRO Tier
            </div>
            <button className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-3 py-1.5 text-[11px] font-bold text-body transition hover:border-ink-500/40">
              <Camera className="h-3.5 w-3.5" /> ছবি পরিবর্তন
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="পূর্ণ নাম" icon={<User className="h-4 w-4" />}>
            <input
              defaultValue="তাসনিম রহমান"
              className="w-full bg-transparent py-2.5 text-sm text-body focus:outline-none"
            />
          </Field>
          <Field label="ইমেইল" icon={<Mail className="h-4 w-4" />}>
            <input
              type="email"
              defaultValue="tasnim@example.com"
              className="w-full bg-transparent py-2.5 text-sm text-body focus:outline-none"
            />
          </Field>
          <Field label="মোবাইল" icon={<Phone className="h-4 w-4" />}>
            <input
              defaultValue="01712-345678"
              className="w-full bg-transparent py-2.5 text-sm text-body focus:outline-none"
            />
          </Field>
          <Field label="ঠিকানা" icon={<MapPin className="h-4 w-4" />}>
            <input
              defaultValue="রাজশাহী, বাংলাদেশ"
              className="w-full bg-transparent py-2.5 text-sm text-body focus:outline-none"
            />
          </Field>
        </div>

        <div className="mt-5 flex items-center justify-end gap-2">
          <button className="rounded-full border border-paper-300 bg-white px-4 py-2 text-sm font-semibold text-body hover:border-ink-500/40">
            বাতিল
          </button>
          <button className="btn-gold !py-2.5">পরিবর্তন সংরক্ষণ</button>
        </div>
      </Card>

      <Card>
        <CardHeader
          title="অ্যাফিলিয়েট প্রোফাইল"
          subtitle="তোমার প্রমোশনাল চ্যানেলের তথ্য (ঐচ্ছিক)"
        />
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="Facebook প্রোফাইল">
            <input
              placeholder="https://facebook.com/..."
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
          <Field label="YouTube চ্যানেল">
            <input
              placeholder="https://youtube.com/@..."
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
          <Field label="Instagram হ্যান্ডেল">
            <input
              placeholder="@username"
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
          <Field label="ওয়েবসাইট/ব্লগ">
            <input
              placeholder="https://..."
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
        </div>
      </Card>
    </>
  );
}

/* ---------------- Payout ---------------- */

function PayoutTab() {
  const [methods, setMethods] = useState([
    { id: "m1", type: "bKash", number: "01712-345678", color: "bg-[#E2136E]", primary: true },
    { id: "m2", type: "Nagad", number: "01812-654321", color: "bg-[#F36F21]", primary: false },
    { id: "m3", type: "DBBL ব্যাংক", number: "AC ***-789", color: "bg-emerald-600", primary: false, bank: true },
  ]);

  return (
    <>
      <Card>
        <CardHeader
          title="পেআউট মেথড"
          subtitle="তোমার আয় তোলার জন্য পেমেন্ট অপশন"
        />

        <div className="mt-5 space-y-3">
          {methods.map((m) => {
            const Mi = m.bank ? Building2 : Smartphone;
            return (
              <div
                key={m.id}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border bg-white p-4 transition",
                  m.primary
                    ? "border-gold-500/50 ring-2 ring-gold-500/20"
                    : "border-paper-300"
                )}
              >
                <span className={cn("grid h-10 w-10 place-items-center rounded-xl text-white", m.color)}>
                  <Mi className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-extrabold text-body">
                      {m.type}
                    </span>
                    {m.primary && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold-gradient px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
                        প্রাইমারি
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-body-muted">{m.number}</div>
                </div>

                <div className="flex items-center gap-1">
                  {!m.primary && (
                    <button
                      onClick={() =>
                        setMethods(
                          methods.map((x) => ({ ...x, primary: x.id === m.id }))
                        )
                      }
                      className="rounded-full border border-paper-300 bg-white px-3 py-1.5 text-[11px] font-bold text-body transition hover:border-gold-500/50 hover:text-gold-700"
                    >
                      প্রাইমারি করুন
                    </button>
                  )}
                  <button
                    onClick={() => setMethods(methods.filter((x) => x.id !== m.id))}
                    className="grid h-8 w-8 place-items-center rounded-full border border-paper-300 bg-white text-rose-600 transition hover:border-rose-200 hover:bg-rose-50"
                    aria-label="Remove"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          <button className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-paper-400 bg-paper-100/50 px-4 py-4 text-sm font-bold text-body-soft transition hover:border-ink-500/40 hover:bg-white hover:text-ink-500">
            <Plus className="h-4 w-4" /> নতুন পেআউট মেথড যোগ করুন
          </button>
        </div>
      </Card>

      <Card>
        <CardHeader
          title="ট্যাক্স তথ্য"
          subtitle="আয়কর সংক্রান্ত তথ্য (বার্ষিক ৫ লক্ষ+ আয়ের জন্য আবশ্যক)"
        />
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="TIN নাম্বার">
            <input
              placeholder="XXXXXXXXXXXX"
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
          <Field label="NID নাম্বার">
            <input
              placeholder="XXXXXXXXXX"
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
        </div>
      </Card>
    </>
  );
}

/* ---------------- Notifications ---------------- */

function NotifyTab() {
  const items: { group: string; rows: { label: string; sub: string; def: boolean }[] }[] = [
    {
      group: "ইমেইল",
      rows: [
        { label: "নতুন কনভার্শন", sub: "যখনই কেউ তোমার রেফারেলে কোর্স কিনবে", def: true },
        { label: "পেআউট আপডেট", sub: "উইথড্র গৃহীত / সম্পন্ন", def: true },
        { label: "মাসিক রিপোর্ট", sub: "পারফরম্যান্স সামারি প্রতি মাসের শুরুতে", def: true },
        { label: "মার্কেটিং টিপস", sub: "সাপ্তাহিক টিপস ও বেস্ট প্র্যাকটিস", def: false },
      ],
    },
    {
      group: "SMS",
      rows: [
        { label: "নতুন কনভার্শন", sub: "তাৎক্ষণিক SMS অ্যালার্ট", def: false },
        { label: "পেআউট সম্পন্ন", sub: "টাকা পেলে SMS", def: true },
      ],
    },
    {
      group: "প্ল্যাটফর্ম পুশ",
      rows: [
        { label: "সব আপডেট", sub: "ব্রাউজার ও মোবাইল পুশ", def: true },
        { label: "অফার ও বোনাস", sub: "নতুন বোনাস বা ক্যাম্পেইন", def: true },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader
        title="নোটিফিকেশন প্রেফারেন্স"
        subtitle="কোন কোন আপডেট কোথায় পেতে চাও — কন্ট্রোল করো"
      />

      <div className="mt-5 space-y-6">
        {items.map((g) => (
          <div key={g.group}>
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-body-muted">
              {g.group}
            </h4>
            <div className="overflow-hidden rounded-2xl border border-paper-300">
              {g.rows.map((r, i) => (
                <label
                  key={r.label}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-4 bg-white px-4 py-3.5 transition hover:bg-paper-100",
                    i !== g.rows.length - 1 && "border-b border-paper-300"
                  )}
                >
                  <div>
                    <div className="text-sm font-bold text-body">{r.label}</div>
                    <div className="text-xs text-body-muted">{r.sub}</div>
                  </div>
                  <Toggle defaultChecked={r.def} />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------- Security ---------------- */

function SecurityTab() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Card>
        <CardHeader
          title="পাসওয়ার্ড পরিবর্তন"
          subtitle="তোমার অ্যাকাউন্ট সুরক্ষিত রাখতে নিয়মিত পাসওয়ার্ড পরিবর্তন করো"
        />
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field
            label="বর্তমান পাসওয়ার্ড"
            icon={<Lock className="h-4 w-4" />}
            right={
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="text-body-muted hover:text-ink-500"
                aria-label="Toggle password visibility"
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            }
          >
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
          <div />
          <Field label="নতুন পাসওয়ার্ড" icon={<Lock className="h-4 w-4" />}>
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
          <Field label="নতুন পাসওয়ার্ড নিশ্চিত করুন" icon={<Lock className="h-4 w-4" />}>
            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-transparent py-2.5 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
        </div>

        <div className="mt-5 flex items-center justify-end">
          <button className="btn-gold !py-2.5">পাসওয়ার্ড পরিবর্তন</button>
        </div>
      </Card>

      <Card>
        <CardHeader
          title="টু-ফ্যাক্টর অথেন্টিকেশন"
          subtitle="অতিরিক্ত নিরাপত্তার জন্য 2FA চালু করুন"
        />
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <div>
              <div className="text-sm font-bold text-emerald-900">
                SMS অথেন্টিকেশন
              </div>
              <div className="text-xs text-emerald-800/80">
                +৮৮০ ১৭১২-৩৪৫৬৭৮ — সক্রিয়
              </div>
            </div>
          </div>
          <Toggle defaultChecked />
        </div>
      </Card>

      <Card>
        <CardHeader title="ডেঞ্জার জোন" subtitle="সাবধানে এগোন" />
        <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
          <h4 className="font-display text-base font-extrabold text-rose-700">
            অ্যাকাউন্ট ডিলিট
          </h4>
          <p className="mt-1 text-sm text-rose-700/80">
            অ্যাফিলিয়েট অ্যাকাউন্ট ডিলিট করলে সব রেফারেল ডেটা, কমিশন ও পেআউট হিস্ট্রি স্থায়ীভাবে মুছে যাবে। এই অ্যাকশন রিভার্সিবল না।
          </p>
          <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-rose-600">
            <Trash2 className="h-4 w-4" /> অ্যাকাউন্ট ডিলিট
          </button>
        </div>
      </Card>
    </>
  );
}

/* ---------------- helpers ---------------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card sm:p-8">
      {children}
    </section>
  );
}

function CardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h3 className="font-display text-lg font-extrabold text-body">{title}</h3>
      <p className="mt-0.5 text-xs text-body-muted">{subtitle}</p>
    </div>
  );
}

function Field({
  label,
  icon,
  right,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-body-soft">
        {label}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-paper-300 bg-white px-3.5 transition focus-within:border-ink-500/50 focus-within:ring-2 focus-within:ring-ink-500/10">
        {icon && <span className="text-body-muted">{icon}</span>}
        {children}
        {right}
      </div>
    </label>
  );
}

function Toggle({ defaultChecked }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked ?? false);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition",
        on ? "bg-gold-gradient" : "bg-paper-300"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
          on ? "left-0.5 translate-x-5" : "left-0.5"
        )}
      />
    </button>
  );
}
