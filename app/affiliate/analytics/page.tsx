"use client";

import { Fragment } from "react";
import {
  TrendingUp,
  TrendingDown,
  MousePointerClick,
  Target,
  Wallet,
  Users,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Calendar,
  Download,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <section className="flex flex-wrap items-center gap-2">
        <button className="inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-4 py-2 text-xs font-bold text-body transition hover:border-ink-500/40">
          <Calendar className="h-3.5 w-3.5" /> এপ্রিল ২০২৬
        </button>
        <div className="flex rounded-full border border-paper-300 bg-paper-100 p-1">
          {["৭ দিন", "৩০ দিন", "৯০ দিন", "১ বছর"].map((p, i) => (
            <button
              key={p}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-bold transition",
                i === 1
                  ? "bg-white text-body shadow-sm"
                  : "text-body-soft hover:text-body"
              )}
            >
              {p}
            </button>
          ))}
        </div>
        <button className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-paper-300 bg-white px-4 py-2 text-xs font-bold text-body transition hover:border-ink-500/40">
          <Download className="h-3.5 w-3.5" /> রিপোর্ট
        </button>
      </section>

      {/* Top KPIs */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          icon={MousePointerClick}
          label="মোট ক্লিক"
          value={toBn("3,847")}
          delta="+১৪%"
          positive
          accent="from-blue-500 to-indigo-600"
        />
        <Stat
          icon={Users}
          label="ইউনিক ভিজিটর"
          value={toBn("2,418")}
          delta="+৯%"
          positive
          accent="from-fuchsia-500 to-purple-600"
        />
        <Stat
          icon={Target}
          label="কনভার্শন"
          value={toBn(124)}
          delta="+২২%"
          positive
          accent="from-emerald-500 to-teal-600"
        />
        <Stat
          icon={Wallet}
          label="মোট আয়"
          value={`৳${toBn(48750)}`}
          delta="+২৮%"
          positive
          accent="from-amber-500 to-orange-600"
        />
      </section>

      {/* Big chart */}
      <section className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-extrabold text-body">
              ক্লিক বনাম কনভার্শন
            </h3>
            <p className="text-xs text-body-muted">গত ৩০ দিন</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <Legend color="bg-fuchsia-500" label="ক্লিক" />
            <Legend color="bg-gold-500" label="কনভার্শন" />
          </div>
        </div>

        <DualLineChart />

        <div className="mt-5 grid grid-cols-3 gap-4 border-t border-paper-300 pt-4">
          <Mini label="গড় ক্লিক/দিন" value={toBn(128)} />
          <Mini label="গড় কনভার্শন" value={toBn(4.1)} />
          <Mini label="বেস্ট ডে" value="২৪ এপ্রিল" />
        </div>
      </section>

      {/* Sources + Devices */}
      <section className="grid gap-6 lg:grid-cols-2">
        <SourcesCard />
        <DevicesCard />
      </section>

      {/* Top countries + courses */}
      <section className="grid gap-6 lg:grid-cols-2">
        <GeoCard />
        <TopCoursesCard />
      </section>

      {/* Hourly heatmap */}
      <section className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
        <div>
          <h3 className="font-display text-lg font-extrabold text-body">
            ক্লিক হিটম্যাপ (সাপ্তাহিক)
          </h3>
          <p className="text-xs text-body-muted">কোন দিনের কোন সময়ে বেশি ক্লিক</p>
        </div>
        <Heatmap />
      </section>
    </div>
  );
}

/* ---------------- pieces ---------------- */

function Stat({
  icon: Icon,
  label,
  value,
  delta,
  positive,
  accent,
}: {
  icon: typeof MousePointerClick;
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  accent: string;
}) {
  const Trend = positive ? TrendingUp : TrendingDown;
  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper-300 bg-white p-5 shadow-card">
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl",
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
            positive
              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
              : "bg-rose-50 text-rose-700 ring-1 ring-rose-200"
          )}
        >
          <Trend className="h-3 w-3" /> {delta}
        </span>
      </div>
      <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-body-muted">
        {label}
      </div>
      <div className="mt-1 font-display text-3xl font-extrabold text-body">
        {value}
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

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-body-soft">
      <span className={cn("h-2.5 w-2.5 rounded-full", color)} />
      {label}
    </span>
  );
}

function DualLineChart() {
  // 14 mock points for clicks and conversions (clicks scaled big, conv small)
  const clicks = [120, 145, 98, 168, 152, 195, 178, 210, 188, 232, 245, 198, 265, 248];
  const conv = [3, 4, 2, 5, 6, 7, 5, 8, 6, 9, 11, 7, 12, 10];

  const w = 700;
  const h = 220;
  const padding = 30;
  const maxC = Math.max(...clicks);
  const maxV = Math.max(...conv);
  const stepX = (w - padding * 2) / (clicks.length - 1);

  const path = (data: number[], max: number) =>
    data
      .map((v, i) => {
        const x = padding + i * stepX;
        const y = h - padding - (v / max) * (h - padding * 2);
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ");

  const area = (data: number[], max: number) => {
    const linePath = path(data, max);
    const last = padding + (data.length - 1) * stepX;
    return `${linePath} L${last},${h - padding} L${padding},${h - padding} Z`;
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full min-w-[600px]"
        preserveAspectRatio="none"
      >
        {/* gridlines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + ((h - padding * 2) / 3) * i}
            x2={w - padding}
            y2={padding + ((h - padding * 2) / 3) * i}
            stroke="#e5ddf3"
            strokeDasharray="3 3"
          />
        ))}

        {/* Clicks area */}
        <defs>
          <linearGradient id="grad-click" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad-conv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFC107" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={area(clicks, maxC)} fill="url(#grad-click)" />
        <path
          d={path(clicks, maxC)}
          fill="none"
          stroke="#d946ef"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path d={area(conv, maxV)} fill="url(#grad-conv)" />
        <path
          d={path(conv, maxV)}
          fill="none"
          stroke="#FFC107"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* dots */}
        {clicks.map((v, i) => (
          <circle
            key={`c-${i}`}
            cx={padding + i * stepX}
            cy={h - padding - (v / maxC) * (h - padding * 2)}
            r="3.5"
            fill="#d946ef"
            stroke="#fff"
            strokeWidth="2"
          />
        ))}
        {conv.map((v, i) => (
          <circle
            key={`v-${i}`}
            cx={padding + i * stepX}
            cy={h - padding - (v / maxV) * (h - padding * 2)}
            r="3.5"
            fill="#FFC107"
            stroke="#fff"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}

function SourcesCard() {
  const sources = [
    { name: "Facebook", value: 42, count: 1614, color: "bg-[#1877F2]" },
    { name: "WhatsApp", value: 24, count: 924, color: "bg-[#25D366]" },
    { name: "YouTube", value: 14, count: 538, color: "bg-[#FF0000]" },
    { name: "Telegram", value: 9, count: 346, color: "bg-[#0088CC]" },
    { name: "Direct", value: 7, count: 269, color: "bg-ink-700" },
    { name: "Email", value: 4, count: 156, color: "bg-rose-500" },
  ];

  return (
    <div className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
      <h3 className="font-display text-lg font-extrabold text-body">
        ট্রাফিক সোর্স
      </h3>
      <p className="text-xs text-body-muted">কোথা থেকে আসছে ভিজিটর</p>

      <div className="mt-5 space-y-3">
        {sources.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-body">{s.name}</span>
              <span className="flex items-center gap-2 text-body-muted">
                <span>{toBn(s.count.toLocaleString("en-IN"))}</span>
                <span className="text-ink-500">{toBn(s.value)}%</span>
              </span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-paper-200">
              <div
                className={cn("h-full rounded-full", s.color)}
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DevicesCard() {
  const devices = [
    { name: "Mobile", value: 68, icon: Smartphone, color: "from-fuchsia-500 to-purple-600" },
    { name: "Desktop", value: 24, icon: Monitor, color: "from-blue-500 to-indigo-600" },
    { name: "Tablet", value: 8, icon: Tablet, color: "from-emerald-500 to-teal-600" },
  ];

  // donut
  const radius = 60;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
      <h3 className="font-display text-lg font-extrabold text-body">
        ডিভাইস
      </h3>
      <p className="text-xs text-body-muted">ব্যবহারকারীর ডিভাইস</p>

      <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-6">
        {/* Donut */}
        <div className="relative grid h-40 w-40 place-items-center">
          <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
            <circle cx="80" cy="80" r={radius} stroke="#efe9f8" strokeWidth="22" fill="none" />
            {devices.map((d, i) => {
              const len = (d.value / 100) * circ;
              const colors = ["#d946ef", "#6366f1", "#10b981"];
              const el = (
                <circle
                  key={i}
                  cx="80"
                  cy="80"
                  r={radius}
                  stroke={colors[i]}
                  strokeWidth="22"
                  fill="none"
                  strokeDasharray={`${len} ${circ}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="butt"
                />
              );
              offset += len;
              return el;
            })}
          </svg>
          <div className="absolute text-center">
            <div className="font-display text-2xl font-extrabold text-body">
              {toBn("3,847")}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-body-muted">
              মোট
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {devices.map((d) => {
            const Di = d.icon;
            return (
              <div key={d.name} className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br shadow-md",
                    d.color
                  )}
                >
                  <Di className="h-5 w-5 text-white" />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-body">{d.name}</div>
                  <div className="text-[11px] text-body-muted">
                    {toBn(d.value)}% ভিজিটর
                  </div>
                </div>
                <div className="font-display text-lg font-extrabold text-body">
                  {toBn(d.value)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function GeoCard() {
  const cities = [
    { name: "ঢাকা", count: 1247, percent: 38 },
    { name: "চট্টগ্রাম", count: 614, percent: 19 },
    { name: "রাজশাহী", count: 412, percent: 13 },
    { name: "সিলেট", count: 318, percent: 10 },
    { name: "খুলনা", count: 285, percent: 9 },
    { name: "অন্যান্য", count: 348, percent: 11 },
  ];

  return (
    <div className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5 text-ink-500" />
        <h3 className="font-display text-lg font-extrabold text-body">
          লোকেশন বিভাগ
        </h3>
      </div>
      <p className="text-xs text-body-muted">জেলা অনুযায়ী ভিজিটর</p>

      <div className="mt-5 space-y-3">
        {cities.map((c) => (
          <div key={c.name}>
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-body">{c.name}</span>
              <span className="flex items-center gap-2 text-body-muted">
                <span>{toBn(c.count.toLocaleString("en-IN"))}</span>
                <span className="text-ink-500">{toBn(c.percent)}%</span>
              </span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-gold-400"
                style={{ width: `${c.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopCoursesCard() {
  const courses = [
    { name: "HSC FBC ২৬ — সাইন্স", sales: 38, earned: 78470, color: "from-blue-500 to-indigo-600" },
    { name: "Medical 2nd Time", sales: 9, earned: 28035, color: "from-rose-500 to-pink-600" },
    { name: "Spoken English Pro", sales: 24, earned: 15960, color: "from-violet-500 to-purple-600" },
    { name: "Engineering 2nd Time", sales: 6, earned: 16590, color: "from-amber-500 to-orange-600" },
    { name: "ICT কমপ্লিট", sales: 18, earned: 6228, color: "from-lime-500 to-green-600" },
  ];
  const max = Math.max(...courses.map((c) => c.earned));

  return (
    <div className="rounded-3xl border border-paper-300 bg-white p-6 shadow-card">
      <h3 className="font-display text-lg font-extrabold text-body">
        সেরা কোর্স (আয় অনুযায়ী)
      </h3>
      <p className="text-xs text-body-muted">এই মাসে</p>

      <div className="mt-5 space-y-4">
        {courses.map((c, i) => (
          <div key={c.name}>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br text-[10px] font-extrabold text-white",
                    c.color
                  )}
                >
                  #{toBn(i + 1)}
                </span>
                <span className="font-bold text-body">{c.name}</span>
              </div>
              <span className="font-display font-extrabold text-emerald-600">
                ৳{toBn(c.earned.toLocaleString("en-IN"))}
              </span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper-200">
              <div
                className={cn(
                  "h-full rounded-full bg-gradient-to-r",
                  c.color
                )}
                style={{ width: `${(c.earned / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Heatmap() {
  const days = ["শুক্র", "শনি", "রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ"];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  // Generate deterministic mock intensities
  const cell = (d: number, h: number) => {
    const peakHours = [9, 10, 14, 15, 20, 21, 22];
    const weekendBoost = d <= 1 ? 1.4 : 1;
    const base = peakHours.includes(h) ? 0.8 : 0.25;
    const v = Math.min(
      1,
      base * weekendBoost + 0.15 * Math.sin(d + h * 0.7)
    );
    return v;
  };

  return (
    <div className="mt-5 overflow-x-auto">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `auto repeat(24, minmax(14px, 1fr))`,
        }}
      >
        <div />
        {hours.map((h) => (
          <div
            key={`hour-${h}`}
            className="text-center text-[9px] font-bold text-body-muted"
          >
            {h % 3 === 0 ? toBn(h) : ""}
          </div>
        ))}
        {days.map((d, di) => (
          <Fragment key={`day-${di}`}>
            <div className="pr-2 text-right text-[10px] font-bold text-body-soft">
              {d}
            </div>
            {hours.map((h) => {
              const v = cell(di, h);
              return (
                <div
                  key={`${di}-${h}`}
                  className="aspect-square rounded-sm"
                  style={{
                    backgroundColor: `rgba(255, 193, 7, ${v.toFixed(2)})`,
                  }}
                  title={`${d} • ${h}:০০ — ${toBn(Math.round(v * 100))} ক্লিক`}
                />
              );
            })}
          </Fragment>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 text-[10px] font-bold text-body-muted">
        <span>কম</span>
        <div className="flex gap-0.5">
          {[0.15, 0.35, 0.55, 0.75, 0.95].map((v, i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-sm"
              style={{ backgroundColor: `rgba(255, 193, 7, ${v})` }}
            />
          ))}
        </div>
        <span>বেশি</span>
      </div>
    </div>
  );
}
