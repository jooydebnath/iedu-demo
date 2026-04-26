"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Users,
  CheckCircle2,
  Clock,
  Phone,
  MapPin,
  Eye,
  Mail,
  Calendar,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";

type Referral = {
  id: string;
  name: string;
  phone: string;
  area: string;
  initials: string;
  avatar: string;
  joined: string;
  course: string;
  amount: number;
  commission: number;
  status: "active" | "pending" | "refunded";
  source: string;
};

const REFERRALS: Referral[] = [
  { id: "r1", name: "ফাহিম শাহরিয়ার", phone: "01712-***456", area: "ঢাকা", initials: "ফা", avatar: "from-blue-500 to-indigo-600", joined: "২৬ এপ্রিল ২০২৬", course: "HSC FBC ২৬ — সাইন্স", amount: 5900, commission: 2065, status: "active", source: "Facebook" },
  { id: "r2", name: "সাবরিনা ইসলাম", phone: "01812-***321", area: "চট্টগ্রাম", initials: "সা", avatar: "from-emerald-500 to-teal-600", joined: "২৫ এপ্রিল ২০২৬", course: "Spoken English Pro", amount: 1900, commission: 665, status: "active", source: "WhatsApp" },
  { id: "r3", name: "আদনান হোসেন", phone: "01612-***789", area: "সিলেট", initials: "আ", avatar: "from-rose-500 to-pink-600", joined: "২৪ এপ্রিল ২০২৬", course: "Medical 2nd Time", amount: 8900, commission: 3115, status: "pending", source: "YouTube" },
  { id: "r4", name: "নুসরাত জাহান", phone: "01512-***234", area: "রাজশাহী", initials: "নু", avatar: "from-fuchsia-500 to-purple-600", joined: "২৩ এপ্রিল ২০২৬", course: "ICT কমপ্লিট কোর্স", amount: 990, commission: 346, status: "active", source: "Telegram" },
  { id: "r5", name: "তৌফিক আহমেদ", phone: "01912-***567", area: "খুলনা", initials: "তৌ", avatar: "from-amber-500 to-orange-600", joined: "২২ এপ্রিল ২০২৬", course: "Engineering 2nd Time", amount: 7900, commission: 2765, status: "active", source: "Direct" },
  { id: "r6", name: "মাহফুজা আক্তার", phone: "01312-***890", area: "বরিশাল", initials: "মা", avatar: "from-violet-500 to-purple-600", joined: "২০ এপ্রিল ২০২৬", course: "SSC FBC ২৬", amount: 4900, commission: 1715, status: "active", source: "Facebook" },
  { id: "r7", name: "শাকিল রহমান", phone: "01412-***123", area: "ময়মনসিংহ", initials: "শা", avatar: "from-cyan-500 to-blue-600", joined: "১৮ এপ্রিল ২০২৬", course: "HSC FBC ২৬ — কমার্স", amount: 4500, commission: 1575, status: "refunded", source: "Email" },
  { id: "r8", name: "আনিকা চৌধুরী", phone: "01712-***456", area: "ঢাকা", initials: "আ", avatar: "from-pink-500 to-rose-600", joined: "১৭ এপ্রিল ২০২৬", course: "গণিত মাস্টারক্লাস", amount: 1500, commission: 525, status: "active", source: "Instagram" },
];

export default function ReferralsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "pending" | "refunded">("all");
  const [view, setView] = useState<"grid" | "list">("list");

  const filtered = REFERRALS.filter((r) => {
    const q = search.toLowerCase();
    const match =
      r.name.toLowerCase().includes(q) ||
      r.phone.includes(q) ||
      r.course.toLowerCase().includes(q);
    const fmatch = filter === "all" || r.status === filter;
    return match && fmatch;
  });

  return (
    <div className="space-y-6">
      {/* Stats strip */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="মোট রেফারেল" value={toBn(REFERRALS.length)} accent="from-blue-500 to-indigo-600" />
        <Stat label="সক্রিয়" value={toBn(REFERRALS.filter((r) => r.status === "active").length)} accent="from-emerald-500 to-teal-600" />
        <Stat label="পেন্ডিং" value={toBn(REFERRALS.filter((r) => r.status === "pending").length)} accent="from-amber-500 to-orange-600" />
        <Stat
          label="মোট কমিশন"
          value={`৳${toBn(
            REFERRALS.reduce((s, r) => s + r.commission, 0).toLocaleString("en-IN")
          )}`}
          accent="from-fuchsia-500 to-purple-600"
        />
      </section>

      {/* Filters */}
      <section className="flex flex-col gap-3 rounded-3xl border border-paper-300 bg-white p-4 shadow-card sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="নাম, ফোন বা কোর্স দিয়ে খুঁজুন..."
            className="w-full rounded-full border border-paper-300 bg-paper-100 py-2 pl-9 pr-4 text-sm text-body placeholder:text-body-muted focus:border-ink-500/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ink-500/10"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-full border border-paper-300 bg-paper-100 p-1">
            {(["all", "active", "pending", "refunded"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-3 py-1 text-[11px] font-bold transition",
                  filter === f
                    ? "bg-white text-body shadow-sm"
                    : "text-body-soft hover:text-body"
                )}
              >
                {f === "all"
                  ? "সব"
                  : f === "active"
                  ? "সক্রিয়"
                  : f === "pending"
                  ? "পেন্ডিং"
                  : "রিফান্ডেড"}
              </button>
            ))}
          </div>

          <button
            onClick={() => setView(view === "list" ? "grid" : "list")}
            className="inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-3 py-1.5 text-xs font-bold text-body transition hover:border-ink-500/40"
          >
            <Filter className="h-3.5 w-3.5" />
            {view === "list" ? "গ্রিড ভিউ" : "লিস্ট ভিউ"}
          </button>
        </div>
      </section>

      {/* Listing */}
      {view === "list" ? (
        <ListView rows={filtered} />
      ) : (
        <GridView rows={filtered} />
      )}

      {filtered.length === 0 && (
        <div className="grid place-items-center rounded-3xl border border-dashed border-paper-300 bg-white py-16 text-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-paper-100 text-ink-500">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="mt-3 font-display text-lg font-extrabold text-body">
            কোনো রেফারেল পাওয়া যায়নি
          </h3>
          <p className="mt-1 text-sm text-body-muted">
            ফিল্টার পরিবর্তন করো অথবা সার্চ ক্লিয়ার করো
          </p>
        </div>
      )}
    </div>
  );
}

function Stat({
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
          "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
          accent
        )}
      />
      <div className="text-[11px] font-bold uppercase tracking-wider text-body-muted">
        {label}
      </div>
      <div className="mt-2 font-display text-3xl font-extrabold text-body">
        {value}
      </div>
    </div>
  );
}

function ListView({ rows }: { rows: Referral[] }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card">
      <div className="hidden grid-cols-[2fr_2fr_1.5fr_1fr_1fr_auto] gap-4 border-b border-paper-300 bg-paper-100 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-body-soft md:grid">
        <span>রেফারড স্টুডেন্ট</span>
        <span>কোর্স</span>
        <span>সোর্স</span>
        <span className="text-right">অ্যামাউন্ট</span>
        <span className="text-right">কমিশন</span>
        <span>স্ট্যাটাস</span>
      </div>

      <div className="divide-y divide-paper-300">
        {rows.map((r) => (
          <div
            key={r.id}
            className="grid gap-3 px-6 py-4 md:grid-cols-[2fr_2fr_1.5fr_1fr_1fr_auto] md:items-center md:gap-4"
          >
            {/* Student */}
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-extrabold text-white",
                  r.avatar
                )}
              >
                {r.initials}
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-bold text-body">
                  {r.name}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-body-muted">
                  <span className="inline-flex items-center gap-0.5">
                    <Phone className="h-3 w-3" /> {r.phone}
                  </span>
                  <span className="inline-flex items-center gap-0.5">
                    <MapPin className="h-3 w-3" /> {r.area}
                  </span>
                </div>
              </div>
            </div>

            {/* Course */}
            <div>
              <div className="text-sm font-semibold text-body">{r.course}</div>
              <div className="inline-flex items-center gap-1 text-[11px] text-body-muted">
                <Calendar className="h-3 w-3" /> {r.joined}
              </div>
            </div>

            {/* Source */}
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-paper-100 px-2.5 py-1 text-[11px] font-bold text-body-soft ring-1 ring-inset ring-paper-300">
                {r.source}
              </span>
            </div>

            {/* Amount */}
            <div className="text-right">
              <span className="text-xs text-body-muted md:hidden">অ্যামাউন্ট: </span>
              <span className="font-display text-sm font-extrabold text-body">
                ৳{toBn(r.amount.toLocaleString("en-IN"))}
              </span>
            </div>

            {/* Commission */}
            <div className="text-right">
              <span className="text-xs text-body-muted md:hidden">কমিশন: </span>
              <span className="font-display text-sm font-extrabold text-emerald-600">
                +৳{toBn(r.commission.toLocaleString("en-IN"))}
              </span>
            </div>

            {/* Status + actions */}
            <div className="flex items-center justify-end gap-2">
              <StatusPill status={r.status} />
              <button
                className="grid h-8 w-8 place-items-center rounded-lg border border-paper-300 bg-white text-body transition hover:border-ink-500/40"
                aria-label="View details"
                title="বিস্তারিত"
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GridView({ rows }: { rows: Referral[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map((r) => (
        <article
          key={r.id}
          className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          {/* Cover */}
          <div className="relative h-20 overflow-hidden bg-slide-purple">
            <div
              className={cn(
                "pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br opacity-50 blur-2xl",
                r.avatar
              )}
            />
            <span className="absolute right-3 top-3">
              <StatusPill status={r.status} />
            </span>
          </div>

          {/* Body */}
          <div className="-mt-9 px-5 pb-5">
            <div
              className={cn(
                "grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br ring-4 ring-white text-lg font-extrabold text-white",
                r.avatar
              )}
            >
              {r.initials}
            </div>
            <div className="mt-3">
              <h4 className="font-display text-base font-extrabold text-body">
                {r.name}
              </h4>
              <div className="mt-0.5 flex items-center gap-2 text-[11px] text-body-muted">
                <span className="inline-flex items-center gap-0.5">
                  <Phone className="h-3 w-3" /> {r.phone}
                </span>
                <span>•</span>
                <span>{r.area}</span>
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-paper-100 px-3 py-2">
              <div className="text-xs font-semibold text-body">{r.course}</div>
              <div className="mt-1 flex items-center justify-between text-[11px] text-body-muted">
                <span>{r.joined}</span>
                <span className="rounded-full bg-white px-2 py-0.5 font-bold ring-1 ring-paper-300">
                  {r.source}
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-paper-300 pt-3">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-body-muted">
                  অ্যামাউন্ট
                </div>
                <div className="font-display text-sm font-extrabold text-body">
                  ৳{toBn(r.amount.toLocaleString("en-IN"))}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-body-muted">
                  কমিশন
                </div>
                <div className="font-display text-sm font-extrabold text-emerald-600">
                  +৳{toBn(r.commission.toLocaleString("en-IN"))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-paper-300 bg-white px-3 py-1.5 text-xs font-bold text-body transition hover:border-ink-500/40">
                <Mail className="h-3.5 w-3.5" /> মেসেজ
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink-800 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-ink-700">
                <Eye className="h-3.5 w-3.5" /> বিস্তারিত
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function StatusPill({ status }: { status: Referral["status"] }) {
  const map = {
    active: { label: "সক্রিয়", color: "bg-emerald-50 text-emerald-700 ring-emerald-200", icon: CheckCircle2 },
    pending: { label: "পেন্ডিং", color: "bg-amber-50 text-amber-700 ring-amber-200", icon: Clock },
    refunded: { label: "রিফান্ডেড", color: "bg-rose-50 text-rose-700 ring-rose-200", icon: Filter },
  } as const;
  const { label, color, icon: Icon } = map[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold ring-1",
        color
      )}
    >
      <Icon className="h-3 w-3" /> {label}
    </span>
  );
}
