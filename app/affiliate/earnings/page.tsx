"use client";

import { useState } from "react";
import {
  Wallet,
  Download,
  ArrowUpRight,
  ArrowDownLeft,
  CheckCircle2,
  Clock,
  X,
  Building2,
  Smartphone,
  Calendar,
  Filter,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";

type Tx = {
  id: string;
  date: string;
  type: "commission" | "withdraw" | "bonus";
  desc: string;
  amount: number;
  status: "completed" | "pending" | "processing";
};

const TX: Tx[] = [
  { id: "T-৩১২৪", date: "২৬ এপ্রিল ২০২৬", type: "commission", desc: "HSC FBC ২৬ — ফাহিম শাহরিয়ার", amount: 2065, status: "completed" },
  { id: "T-৩১২৩", date: "২৬ এপ্রিল ২০২৬", type: "commission", desc: "Spoken English — সাবরিনা ইসলাম", amount: 665, status: "completed" },
  { id: "T-৩১২২", date: "২৬ এপ্রিল ২০২৬", type: "commission", desc: "Medical 2nd Time — আদনান হোসেন", amount: 3115, status: "pending" },
  { id: "T-৩১২১", date: "২৫ এপ্রিল ২০২৬", type: "withdraw", desc: "bKash — 01712-345678", amount: -15000, status: "completed" },
  { id: "T-৩১২০", date: "২৪ এপ্রিল ২০২৬", type: "bonus", desc: "মাসিক টপ পারফরমার বোনাস", amount: 5000, status: "completed" },
  { id: "T-৩১১৯", date: "২৩ এপ্রিল ২০২৬", type: "commission", desc: "ICT কমপ্লিট কোর্স — নুসরাত জাহান", amount: 346, status: "completed" },
  { id: "T-৩১১৮", date: "২২ এপ্রিল ২০২৬", type: "commission", desc: "Engineering 2nd Time — তৌফিক আহমেদ", amount: 2765, status: "completed" },
  { id: "T-৩১১৭", date: "২০ এপ্রিল ২০২৬", type: "withdraw", desc: "Nagad — 01812-654321", amount: -10000, status: "processing" },
];

export default function EarningsPage() {
  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [filter, setFilter] = useState<"all" | "commission" | "withdraw" | "bonus">("all");

  const filtered = TX.filter((t) => filter === "all" || t.type === filter);

  return (
    <div className="space-y-6">
      {/* Balance cards */}
      <section className="grid gap-4 lg:grid-cols-3">
        <BigBalance
          variant="primary"
          label="উইথড্র যোগ্য ব্যালেন্স"
          value={36420}
          sub="ক্লিয়ার্ড কমিশন"
          cta={
            <button
              onClick={() => setOpenWithdraw(true)}
              className="btn-gold w-full !py-2.5 text-sm"
            >
              <ArrowUpRight className="h-4 w-4" /> এখনই উইথড্র
            </button>
          }
        />
        <BigBalance
          variant="pending"
          label="পেন্ডিং ব্যালেন্স"
          value={12330}
          sub="১৪ দিন পর ক্লিয়ার হবে"
        />
        <BigBalance
          variant="lifetime"
          label="মোট আয় (লাইফটাইম)"
          value={284750}
          sub={`${toBn(847)}টি বিক্রয় থেকে`}
        />
      </section>

      {/* Quick payout methods */}
      <section className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-extrabold text-body">
              পেআউট মেথড
            </h3>
            <p className="text-xs text-body-muted">
              যেকোনো একটি সংরক্ষিত অপশনে দ্রুত উইথড্র করো
            </p>
          </div>
          <button
            onClick={() => setOpenWithdraw(true)}
            className="hidden items-center gap-1.5 rounded-full border border-paper-300 bg-white px-4 py-2 text-xs font-bold text-body transition hover:border-ink-500/40 hover:text-ink-500 sm:inline-flex"
          >
            ম্যানেজ
          </button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <PayMethod
            icon={Smartphone}
            name="bKash"
            number="০১৭১২-***৬৭৮"
            color="bg-[#E2136E]"
            primary
          />
          <PayMethod
            icon={Smartphone}
            name="Nagad"
            number="০১৮১২-***৩২১"
            color="bg-[#F36F21]"
          />
          <PayMethod
            icon={Smartphone}
            name="Rocket"
            number="০১৬১২-***৪৫৬"
            color="bg-[#8C3494]"
          />
          <PayMethod
            icon={Building2}
            name="ব্যাংক ট্রান্সফার"
            number="DBBL ***৭৮৯"
            color="bg-emerald-600"
          />
        </div>
      </section>

      {/* Transactions */}
      <section className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card">
        <div className="flex flex-col gap-3 border-b border-paper-300 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-extrabold text-body">
              ট্রানজেকশন হিস্ট্রি
            </h3>
            <p className="text-xs text-body-muted">সব আয় ও উইথড্র এক জায়গায়</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-full border border-paper-300 bg-paper-100 p-1">
              {(["all", "commission", "withdraw", "bonus"] as const).map((f) => (
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
                    : f === "commission"
                    ? "কমিশন"
                    : f === "withdraw"
                    ? "উইথড্র"
                    : "বোনাস"}
                </button>
              ))}
            </div>
            <button className="inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-3 py-1.5 text-xs font-bold text-body transition hover:border-ink-500/40">
              <Calendar className="h-3.5 w-3.5" /> এপ্রিল ২০২৬
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-3 py-1.5 text-xs font-bold text-body transition hover:border-ink-500/40">
              <Download className="h-3.5 w-3.5" /> এক্সপোর্ট
            </button>
          </div>
        </div>

        {/* Header row */}
        <div className="hidden grid-cols-[auto_2fr_1fr_1fr_auto] gap-4 border-b border-paper-300 bg-paper-100/60 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-body-muted md:grid">
          <span>টাইপ</span>
          <span>বিবরণ</span>
          <span>তারিখ</span>
          <span className="text-right">পরিমাণ</span>
          <span>স্ট্যাটাস</span>
        </div>

        <div className="divide-y divide-paper-300">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="grid gap-2 px-6 py-3.5 md:grid-cols-[auto_2fr_1fr_1fr_auto] md:items-center md:gap-4"
            >
              <TypeBadge type={t.type} />
              <div className="min-w-0">
                <div className="truncate text-sm font-bold text-body">
                  {t.desc}
                </div>
                <div className="text-[11px] text-body-muted">{t.id}</div>
              </div>
              <div className="text-xs text-body-muted">{t.date}</div>
              <div className="text-right">
                <span
                  className={cn(
                    "font-display text-sm font-extrabold",
                    t.amount > 0 ? "text-emerald-600" : "text-rose-600"
                  )}
                >
                  {t.amount > 0 ? "+" : ""}৳{toBn(Math.abs(t.amount).toLocaleString("en-IN"))}
                </span>
              </div>
              <div>
                <StatusPill status={t.status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {openWithdraw && (
        <WithdrawModal onClose={() => setOpenWithdraw(false)} />
      )}
    </div>
  );
}

/* ---------------- pieces ---------------- */

function BigBalance({
  variant,
  label,
  value,
  sub,
  cta,
}: {
  variant: "primary" | "pending" | "lifetime";
  label: string;
  value: number;
  sub: string;
  cta?: React.ReactNode;
}) {
  if (variant === "primary") {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-slide-purple p-6 text-white shadow-card-dark">
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-gradient text-ink-900 shadow-glow">
              <Wallet className="h-5 w-5" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/70">
              {label}
            </span>
          </div>
          <div className="mt-4 font-display text-4xl font-extrabold text-gold-400 sm:text-5xl">
            ৳{toBn(value.toLocaleString("en-IN"))}
          </div>
          <div className="mt-1 text-xs text-white/70">{sub}</div>
          {cta && <div className="mt-5">{cta}</div>}
        </div>
      </div>
    );
  }

  const accents = {
    pending: "from-amber-500 to-orange-600",
    lifetime: "from-emerald-500 to-teal-600",
  } as const;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
      <div
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
          accents[variant]
        )}
      />
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br shadow-md",
            accents[variant]
          )}
        >
          {variant === "pending" ? (
            <Clock className="h-5 w-5 text-white" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-white" />
          )}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-body-muted">
          {label}
        </span>
      </div>
      <div className="mt-4 font-display text-3xl font-extrabold text-body sm:text-4xl">
        ৳{toBn(value.toLocaleString("en-IN"))}
      </div>
      <div className="mt-1 text-xs text-body-muted">{sub}</div>
    </div>
  );
}

function PayMethod({
  icon: Icon,
  name,
  number,
  color,
  primary,
}: {
  icon: typeof Smartphone;
  name: string;
  number: string;
  color: string;
  primary?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-card-hover",
        primary
          ? "border-gold-500/50 ring-2 ring-gold-500/20"
          : "border-paper-300"
      )}
    >
      {primary && (
        <span className="absolute right-3 top-3 rounded-full bg-gold-gradient px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
          প্রাইমারি
        </span>
      )}
      <div className={cn("grid h-9 w-9 place-items-center rounded-lg text-white", color)}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-3 text-sm font-bold text-body">{name}</div>
      <div className="text-[11px] font-mono text-body-muted">{number}</div>
    </div>
  );
}

function TypeBadge({ type }: { type: Tx["type"] }) {
  const map = {
    commission: { label: "কমিশন", color: "bg-emerald-50 text-emerald-700 ring-emerald-200", icon: ArrowDownLeft },
    withdraw: { label: "উইথড্র", color: "bg-rose-50 text-rose-700 ring-rose-200", icon: ArrowUpRight },
    bonus: { label: "বোনাস", color: "bg-amber-50 text-amber-700 ring-amber-200", icon: CheckCircle2 },
  } as const;
  const { label, color, icon: Icon } = map[type];
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ring-1",
        color
      )}
    >
      <Icon className="h-3 w-3" /> {label}
    </span>
  );
}

function StatusPill({ status }: { status: Tx["status"] }) {
  const map = {
    completed: { label: "সম্পন্ন", color: "bg-emerald-50 text-emerald-700 ring-emerald-200", icon: CheckCircle2 },
    pending: { label: "পেন্ডিং", color: "bg-amber-50 text-amber-700 ring-amber-200", icon: Clock },
    processing: { label: "চলমান", color: "bg-blue-50 text-blue-700 ring-blue-200", icon: Filter },
  } as const;
  const { label, color, icon: Icon } = map[status];
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold ring-1",
        color
      )}
    >
      <Icon className="h-3 w-3" /> {label}
    </span>
  );
}

/* ---------------- Withdraw modal ---------------- */

function WithdrawModal({ onClose }: { onClose: () => void }) {
  const [amount, setAmount] = useState(15000);
  const [method, setMethod] = useState("bkash");
  const [step, setStep] = useState<"form" | "success">("form");
  const min = 1000;
  const available = 36420;
  const valid = amount >= min && amount <= available;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 grid place-items-center bg-ink-900/50 px-4 py-8 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-card-dark"
      >
        <div className="flex items-center justify-between border-b border-paper-300 bg-paper-100 px-6 py-4">
          <h3 className="font-display text-lg font-extrabold text-body">
            {step === "form" ? "উইথড্র করুন" : "✅ সফল!"}
          </h3>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-body hover:bg-paper-200"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {step === "form" ? (
          <div className="px-6 py-5">
            <div className="rounded-2xl bg-paper-100 p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-body-muted">
                উইথড্র যোগ্য
              </div>
              <div className="font-display text-3xl font-extrabold text-ink-500">
                ৳{toBn(available.toLocaleString("en-IN"))}
              </div>
            </div>

            <label className="mt-5 block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-body-soft">
                পরিমাণ (৳)
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={min}
                max={available}
                className="w-full rounded-xl border border-paper-300 bg-white px-4 py-3 font-display text-lg font-extrabold text-body focus:border-ink-500/50 focus:outline-none focus:ring-2 focus:ring-ink-500/10"
              />
              <div className="mt-1 flex items-center justify-between text-[11px] text-body-muted">
                <span>মিনিমাম: ৳{toBn(min.toLocaleString("en-IN"))}</span>
                <button
                  onClick={() => setAmount(available)}
                  className="font-bold text-ink-500 hover:text-ink-600"
                >
                  সর্বোচ্চ ব্যবহার করুন
                </button>
              </div>
            </label>

            <div className="mt-5">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-body-soft">
                পেআউট মেথড
              </span>
              <div className="space-y-2">
                {[
                  { id: "bkash", name: "bKash", number: "০১৭১২-***৬৭৮", color: "bg-[#E2136E]" },
                  { id: "nagad", name: "Nagad", number: "০১৮১২-***৩২১", color: "bg-[#F36F21]" },
                  { id: "bank", name: "DBBL ব্যাংক", number: "***৭৮৯", color: "bg-emerald-600" },
                ].map((m) => (
                  <label
                    key={m.id}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition",
                      method === m.id
                        ? "border-gold-500/50 bg-gold-50/40 ring-2 ring-gold-500/30"
                        : "border-paper-300 hover:border-ink-500/30"
                    )}
                  >
                    <input
                      type="radio"
                      name="method"
                      value={m.id}
                      checked={method === m.id}
                      onChange={(e) => setMethod(e.target.value)}
                      className="sr-only"
                    />
                    <span className={cn("grid h-8 w-8 place-items-center rounded-lg text-white", m.color)}>
                      <Smartphone className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-body">{m.name}</div>
                      <div className="text-[11px] font-mono text-body-muted">{m.number}</div>
                    </div>
                    <span
                      className={cn(
                        "h-4 w-4 rounded-full border-2",
                        method === m.id
                          ? "border-gold-500 bg-gold-500"
                          : "border-paper-400"
                      )}
                    />
                  </label>
                ))}
              </div>
            </div>

            <button
              disabled={!valid}
              onClick={() => setStep("success")}
              className="btn-gold mt-6 w-full !py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              ৳{toBn(amount.toLocaleString("en-IN"))} উইথড্র করুন
            </button>
            <p className="mt-2 text-center text-[11px] text-body-muted">
              ২৪-৪৮ ঘন্টার মধ্যে আপনার অ্যাকাউন্টে পৌঁছাবে
            </p>
          </div>
        ) : (
          <div className="px-6 py-8 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="mt-4 font-display text-xl font-extrabold text-body">
              উইথড্র রিকোয়েস্ট গৃহীত!
            </h4>
            <p className="mt-1 text-sm text-body-soft">
              ৳{toBn(amount.toLocaleString("en-IN"))} টাকা ২৪-৪৮ ঘন্টার মধ্যে আপনার {method.toUpperCase()} অ্যাকাউন্টে পৌঁছাবে।
            </p>
            <button
              onClick={onClose}
              className="btn-gold mt-6 !py-2.5 text-sm"
            >
              বুঝেছি
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
