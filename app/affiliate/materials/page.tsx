"use client";

import { useState } from "react";
import {
  Download,
  Copy,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ImageIcon,
  Video,
  Mail,
  FileText,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "banner", label: "ব্যানার", icon: ImageIcon },
  { id: "social", label: "সোশ্যাল মিডিয়া", icon: Sparkles },
  { id: "video", label: "ভিডিও", icon: Video },
  { id: "email", label: "ইমেইল টেমপ্লেট", icon: Mail },
  { id: "post", label: "পোস্ট কপি", icon: FileText },
] as const;

const BANNERS = [
  {
    id: "b1",
    title: "HSC ২৬ Pre Admission",
    pretitle: "HSC ২৬",
    highlight: "PRE ADMISSION",
    subject: "SCIENCE",
    size: "1024 × 512",
    downloads: 1284,
    halo: "from-fuchsia-500 to-pink-600",
  },
  {
    id: "b2",
    title: "SSC FBC ২৬ Banner",
    pretitle: "SSC ২৬",
    highlight: "FBC",
    subject: "FULL BATCH",
    size: "1080 × 1080",
    downloads: 942,
    halo: "from-blue-500 to-indigo-600",
  },
  {
    id: "b3",
    title: "Medical 2nd Time",
    pretitle: "MEDICAL",
    highlight: "2ND TIME",
    subject: "ADMISSION",
    size: "1080 × 1350",
    downloads: 768,
    halo: "from-rose-500 to-red-600",
  },
  {
    id: "b4",
    title: "Engineering Admission",
    pretitle: "ENGINEERING",
    highlight: "BUET • KUET",
    subject: "ADMISSION",
    size: "1200 × 628",
    downloads: 645,
    halo: "from-amber-500 to-orange-600",
  },
  {
    id: "b5",
    title: "Spoken English",
    pretitle: "ENGLISH",
    highlight: "SPOKEN PRO",
    subject: "৯০ DAYS",
    size: "1080 × 1080",
    downloads: 534,
    halo: "from-violet-500 to-purple-600",
  },
  {
    id: "b6",
    title: "ICT Complete",
    pretitle: "ICT",
    highlight: "HSC COMPLETE",
    subject: "৪ MONTHS",
    size: "1080 × 1920",
    downloads: 428,
    halo: "from-lime-500 to-green-600",
  },
];

const POSTS = [
  {
    title: "Facebook পোস্ট — কনভার্শন ফোকাসড",
    body: "🎓 SSC ২৬ এর জন্য সবচেয়ে কমপ্লিট কোর্স — ৩০০+ লাইভ ক্লাস, প্রতিদিন এক্সাম, এক্সপার্ট মেন্টর। ৪০% ছাড়ে এনরোল করুন আজই! 👇\n[YOUR_LINK]",
  },
  {
    title: "WhatsApp মেসেজ — পার্সোনাল",
    body: "ভাই/বোন, i Education-এর HSC FBC ২৬ কোর্সটা একদম দারুণ। আমার রেফারেলে নিলে এক্সট্রা ১৫% ডিসকাউন্ট পাবেন। লিংক: [YOUR_LINK]",
  },
  {
    title: "Telegram চ্যানেল আনাউন্সমেন্ট",
    body: "🚀 i Education অফিশিয়াল রেফারেল\n\n✅ ১২+ বিষয়ে ৩০০+ লাইভ ক্লাস\n✅ প্রতিদিন এক্সাম + মডেল টেস্ট\n✅ এক্সপার্ট মেন্টরশিপ\n\n💰 মাত্র ৳৩,৯০০ (নরমাল ৳৬,৫০০)\n👉 [YOUR_LINK]",
  },
  {
    title: "ইনস্টাগ্রাম ক্যাপশন",
    body: "Dream big. Study smart. ✨\nSSC থেকে HSC — Admission পর্যন্ত — সব i Education-এর সাথে।\n\n🔥 এই মাসে ৪০% ছাড়\nLink in bio 👆\n\n#iEducation #SSC2026 #HSC2026",
  },
];

export default function MaterialsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("banner");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const onCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {}
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <section className="flex flex-wrap items-center gap-2">
        {TABS.map((t) => {
          const Ti = t.icon;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition",
                active
                  ? "border-transparent bg-gold-gradient text-ink-900 shadow-glow-sm"
                  : "border-paper-300 bg-white text-body-soft hover:border-ink-500/40 hover:text-ink-500"
              )}
            >
              <Ti className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}

        <div className="relative ml-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="খুঁজুন..."
            className="w-64 rounded-full border border-paper-300 bg-white py-2 pl-9 pr-4 text-sm text-body placeholder:text-body-muted focus:border-ink-500/40 focus:outline-none focus:ring-2 focus:ring-ink-500/10"
          />
        </div>
      </section>

      {/* Banner gallery */}
      {(tab === "banner" || tab === "social") && (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BANNERS.filter((b) =>
            b.title.toLowerCase().includes(search.toLowerCase())
          ).map((b) => (
            <BannerCard key={b.id} banner={b} />
          ))}
        </section>
      )}

      {tab === "video" && (
        <section className="grid gap-5 sm:grid-cols-2">
          {[
            {
              title: "i Education ইন্ট্রো (৩০ সেকেন্ড)",
              size: "1920 × 1080 • MP4",
              dur: "০:৩০",
              halo: "from-fuchsia-500 to-purple-600",
            },
            {
              title: "HSC ২৬ Pre-Admission প্রোমো",
              size: "1080 × 1920 • MP4",
              dur: "১:১৫",
              halo: "from-blue-500 to-indigo-600",
            },
            {
              title: "Medical 2nd Time টেস্টিমোনিয়াল",
              size: "1080 × 1080 • MP4",
              dur: "০:৪৫",
              halo: "from-rose-500 to-pink-600",
            },
            {
              title: "Affiliate গাইড ভিডিও",
              size: "1920 × 1080 • MP4",
              dur: "৩:২০",
              halo: "from-amber-500 to-orange-600",
            },
          ].map((v, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="relative aspect-video overflow-hidden bg-slide-purple">
                <div
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br opacity-50 blur-2xl",
                    v.halo
                  )}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <button className="grid h-16 w-16 place-items-center rounded-full bg-gold-500 text-ink-900 shadow-glow transition-transform group-hover:scale-110">
                    <Video className="h-7 w-7 fill-current" />
                  </button>
                </div>
                <span className="absolute right-3 top-3 rounded-md bg-black/50 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
                  {v.dur}
                </span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h4 className="font-display text-base font-extrabold text-body">
                    {v.title}
                  </h4>
                  <div className="text-[11px] text-body-muted">{v.size}</div>
                </div>
                <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink-800 px-4 py-2 text-xs font-bold text-white transition hover:bg-gold-500 hover:text-ink-900">
                  <Download className="h-3.5 w-3.5" /> ডাউনলোড
                </button>
              </div>
            </article>
          ))}
        </section>
      )}

      {(tab === "post" || tab === "email") && (
        <section className="grid gap-4 lg:grid-cols-2">
          {POSTS.map((p, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card"
            >
              <div className="flex items-center justify-between border-b border-paper-300 bg-paper-100 px-5 py-3">
                <h4 className="font-display text-sm font-extrabold text-body">
                  {p.title}
                </h4>
                <button
                  onClick={() => onCopy(p.body, `post-${i}`)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-3 py-1.5 text-[11px] font-bold text-body transition hover:border-ink-500/40"
                >
                  {copiedId === `post-${i}` ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> কপি হলো
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> কপি
                    </>
                  )}
                </button>
              </div>
              <div className="px-5 py-4">
                <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed text-body-soft font-sans">
                  {p.body}
                </pre>
                <p className="mt-3 text-[11px] text-body-muted">
                  💡 <span className="font-bold">[YOUR_LINK]</span> অংশটি তোমার রেফারেল লিংক দিয়ে রিপ্লেস করো
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

function BannerCard({
  banner: b,
}: {
  banner: (typeof BANNERS)[number];
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover">
      {/* Preview */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slide-purple">
        <div
          className={cn(
            "pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br opacity-60 blur-2xl",
            b.halo
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-gradient-to-br opacity-25 blur-3xl",
            b.halo
          )}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 w-full opacity-15"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          <path
            d="M0 320h600v80H0z M40 320V220l30-20v-30h20v30l30 20v100z M150 320V180l40-25v-35h25v35l40 25v140z M280 320V230l35-22v-32h22v32l35 22v90z M400 320V200l45-28v-40h25v40l45 28v120z"
            fill="white"
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur">
          <GraduationCap className="h-5 w-5 text-gold-400" />
        </span>

        <div className="absolute inset-x-5 bottom-4">
          <div className="font-display text-2xl font-extrabold leading-none text-white sm:text-3xl">
            {b.pretitle}
          </div>
          <div className="mt-1 font-display text-base font-extrabold tracking-tight text-gold-400">
            {b.highlight}
          </div>
          <span className="mt-2 inline-flex rounded bg-gold-500 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
            {b.subject}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4">
        <div>
          <h4 className="font-display text-sm font-extrabold text-body">
            {b.title}
          </h4>
          <div className="text-[11px] text-body-muted">
            {b.size} • {b.downloads.toLocaleString("en-IN")} ডাউনলোড
          </div>
        </div>
        <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 text-xs font-bold text-ink-900 shadow-glow-sm transition hover:scale-105">
          <Download className="h-3.5 w-3.5" />
          PNG
        </button>
      </div>
    </article>
  );
}
