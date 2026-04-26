"use client";

import { useState } from "react";
import {
  Link2,
  Copy,
  CheckCircle2,
  QrCode,
  Trash2,
  ExternalLink,
  Search,
  Plus,
  Facebook,
  MessageCircle,
  Send,
  Mail,
  TrendingUp,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";

const COURSES = [
  { id: "all", label: "সব কোর্স (হোমপেইজ)" },
  { id: "fbc-ssc26", label: "SSC FBC ২৬" },
  { id: "fbc-hsc26", label: "HSC FBC ২৬ — সাইন্স" },
  { id: "2nd-medical", label: "Medical 2nd Time" },
  { id: "2nd-engineer", label: "Engineering 2nd Time" },
  { id: "spc-english", label: "Spoken English Pro" },
  { id: "spc-ict", label: "ICT কমপ্লিট কোর্স" },
];

type LinkRow = {
  id: string;
  course: string;
  url: string;
  clicks: number;
  conversions: number;
  earned: number;
  created: string;
};

const INITIAL: LinkRow[] = [
  {
    id: "lnk-901",
    course: "HSC FBC ২৬ — সাইন্স",
    url: "https://i-edu.com/c/hsc-fbc-26?ref=tasnim001",
    clicks: 1284,
    conversions: 38,
    earned: 18620,
    created: "১২ এপ্রিল",
  },
  {
    id: "lnk-902",
    course: "Medical 2nd Time",
    url: "https://i-edu.com/c/medical-2nd?ref=tasnim001",
    clicks: 642,
    conversions: 9,
    earned: 28035,
    created: "৮ এপ্রিল",
  },
  {
    id: "lnk-903",
    course: "Spoken English Pro",
    url: "https://i-edu.com/c/spoken-english?ref=tasnim001",
    clicks: 1921,
    conversions: 24,
    earned: 15960,
    created: "৩ এপ্রিল",
  },
];

export default function LinksPage() {
  const [course, setCourse] = useState(COURSES[1].id);
  const [campaign, setCampaign] = useState("facebook-reels");
  const [rows, setRows] = useState<LinkRow[]>(INITIAL);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const generated = `https://i-edu.com/${
    course === "all" ? "" : "c/" + course
  }?ref=tasnim001${campaign ? `&utm=${campaign}` : ""}`;

  const onGenerate = () => {
    const c = COURSES.find((x) => x.id === course)?.label ?? "";
    const newRow: LinkRow = {
      id: `lnk-${Math.floor(Math.random() * 9000 + 1000)}`,
      course: c,
      url: generated,
      clicks: 0,
      conversions: 0,
      earned: 0,
      created: "এইমাত্র",
    };
    setRows([newRow, ...rows]);
  };

  const onCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // ignore
    }
  };

  const filtered = rows.filter((r) =>
    r.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Generator */}
      <section className="overflow-hidden rounded-3xl border border-paper-300 bg-white p-6 shadow-card sm:p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-gradient shadow-glow-sm">
            <Link2 className="h-6 w-6 text-ink-900" />
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold text-body">
              নতুন রেফারেল লিংক তৈরি করুন
            </h2>
            <p className="text-sm text-body-soft">
              কোর্স ও ক্যাম্পেইন নির্বাচন করে এক ক্লিকে লিংক জেনারেট করুন
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Field label="কোর্স নির্বাচন করুন">
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full bg-transparent py-3 text-sm font-semibold text-body focus:outline-none"
            >
              {COURSES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="ক্যাম্পেইন (UTM)">
            <input
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              placeholder="যেমন: facebook-reels"
              className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
            />
          </Field>
        </div>

        {/* Generated URL preview */}
        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-paper-300 bg-paper-100 p-2">
          <input
            readOnly
            value={generated}
            className="flex-1 bg-transparent px-3 py-2 text-sm font-mono text-body-soft focus:outline-none"
          />
          <button
            onClick={() => onCopy(generated, "preview")}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-bold text-body shadow-card transition hover:bg-paper-200"
          >
            {copiedId === "preview" ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> কপি হলো
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> কপি
              </>
            )}
          </button>
          <button
            onClick={onGenerate}
            className="btn-gold !py-2 !px-4 text-xs"
          >
            <Plus className="h-3.5 w-3.5" /> সংরক্ষণ
          </button>
        </div>

        {/* Share row */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-body-muted">দ্রুত শেয়ার:</span>
          <ShareBtn icon={Facebook} label="Facebook" color="bg-[#1877F2]" />
          <ShareBtn icon={MessageCircle} label="WhatsApp" color="bg-[#25D366]" />
          <ShareBtn icon={Send} label="Telegram" color="bg-[#0088CC]" />
          <ShareBtn icon={Mail} label="Email" color="bg-rose-500" />
          <button className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-3 py-1.5 text-xs font-bold text-body transition hover:border-ink-500/40 hover:text-ink-500">
            <QrCode className="h-3.5 w-3.5" /> QR কোড
          </button>
        </div>
      </section>

      {/* Search bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="কোর্সের নাম দিয়ে খুঁজুন..."
            className="w-full rounded-full border border-paper-300 bg-white py-2 pl-9 pr-4 text-sm text-body placeholder:text-body-muted focus:border-ink-500/40 focus:outline-none focus:ring-2 focus:ring-ink-500/10"
          />
        </div>
        <span className="text-xs font-bold text-body-muted">
          মোট {toBn(filtered.length)}টি লিংক
        </span>
      </div>

      {/* Links table */}
      <section className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card">
        <div className="hidden grid-cols-[2fr_3fr_1fr_1fr_1fr_auto] gap-4 border-b border-paper-300 bg-paper-100 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-body-soft md:grid">
          <span>কোর্স</span>
          <span>লিংক</span>
          <span className="text-right">ক্লিক</span>
          <span className="text-right">কনভার্শন</span>
          <span className="text-right">আয়</span>
          <span></span>
        </div>

        <div className="divide-y divide-paper-300">
          {filtered.map((r) => {
            const cr = r.clicks ? (r.conversions / r.clicks) * 100 : 0;
            return (
              <div
                key={r.id}
                className="grid gap-3 px-6 py-4 md:grid-cols-[2fr_3fr_1fr_1fr_1fr_auto] md:items-center md:gap-4"
              >
                <div>
                  <div className="text-sm font-bold text-body">{r.course}</div>
                  <div className="text-xs text-body-muted">তৈরি: {r.created}</div>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-paper-100 px-3 py-2 font-mono text-xs text-body-soft">
                  <span className="truncate">{r.url}</span>
                </div>
                <div className="flex items-center justify-between md:justify-end md:gap-1">
                  <span className="text-xs text-body-muted md:hidden">ক্লিক</span>
                  <span className="font-display text-sm font-extrabold text-body">
                    {toBn(r.clicks.toLocaleString("en-IN"))}
                  </span>
                </div>
                <div className="flex items-center justify-between md:justify-end md:gap-1">
                  <span className="text-xs text-body-muted md:hidden">কনভার্শন</span>
                  <div className="flex items-center gap-1">
                    <span className="font-display text-sm font-extrabold text-body">
                      {toBn(r.conversions)}
                    </span>
                    <span className="rounded-md bg-emerald-50 px-1 py-0.5 text-[9px] font-extrabold text-emerald-700 ring-1 ring-emerald-200">
                      {toBn(cr.toFixed(1))}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end md:gap-1">
                  <span className="text-xs text-body-muted md:hidden">আয়</span>
                  <span className="font-display text-sm font-extrabold text-emerald-600">
                    ৳{toBn(r.earned.toLocaleString("en-IN"))}
                  </span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <button
                    onClick={() => onCopy(r.url, r.id)}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-paper-300 bg-white text-body transition hover:border-ink-500/40"
                    aria-label="Copy"
                    title="কপি করুন"
                  >
                    {copiedId === r.id ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-paper-300 bg-white text-body transition hover:border-ink-500/40"
                    aria-label="Open"
                    title="ভিজিট"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() =>
                      setRows(rows.filter((x) => x.id !== r.id))
                    }
                    className="grid h-8 w-8 place-items-center rounded-lg border border-paper-300 bg-white text-rose-600 transition hover:border-rose-200 hover:bg-rose-50"
                    aria-label="Delete"
                    title="ডিলিট"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="grid place-items-center py-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-paper-100 text-ink-500">
                <Link2 className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-display text-lg font-extrabold text-body">
                কোনো লিংক পাওয়া যায়নি
              </h3>
              <p className="mt-1 text-sm text-body-muted">
                উপরে নতুন লিংক জেনারেট করো অথবা সার্চ পরিবর্তন করো
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Performance summary */}
      <section className="grid gap-4 sm:grid-cols-3">
        <PerfCard
          label="মোট ক্লিক"
          value={toBn(
            rows
              .reduce((s, r) => s + r.clicks, 0)
              .toLocaleString("en-IN")
          )}
          accent="from-blue-500 to-indigo-600"
        />
        <PerfCard
          label="মোট কনভার্শন"
          value={toBn(rows.reduce((s, r) => s + r.conversions, 0))}
          accent="from-emerald-500 to-teal-600"
        />
        <PerfCard
          label="মোট আয়"
          value={`৳${toBn(
            rows
              .reduce((s, r) => s + r.earned, 0)
              .toLocaleString("en-IN")
          )}`}
          accent="from-amber-500 to-orange-600"
        />
      </section>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-body-soft">
        {label}
      </span>
      <div className="rounded-xl border border-paper-300 bg-white px-3.5 transition focus-within:border-ink-500/50 focus-within:ring-2 focus-within:ring-ink-500/10">
        {children}
      </div>
    </label>
  );
}

function ShareBtn({
  icon: Icon,
  label,
  color,
}: {
  icon: typeof Facebook;
  label: string;
  color: string;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white transition hover:scale-[1.04]",
        color
      )}
    >
      <Icon className="h-3.5 w-3.5" /> {label}
    </button>
  );
}

function PerfCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper-300 bg-white p-5 shadow-card">
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
          accent
        )}
      />
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br shadow-md",
            accent
          )}
        >
          <TrendingUp className="h-4 w-4 text-white" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-body-muted">
          {label}
        </span>
      </div>
      <div className="mt-3 font-display text-2xl font-extrabold text-body">
        {value}
      </div>
    </div>
  );
}
