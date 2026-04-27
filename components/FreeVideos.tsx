"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

type Video = {
  id: string;
  title: string;
  subject: string;
  level: string; // displayed badge top-right
  dotColor: string; // tailwind bg color for the bullet
  thumbBg: string; // tailwind gradient classes for thumbnail
  youtubeId: string;
};

const VIDEOS: Video[] = [
  {
    id: "v1",
    title: "১.১ - জীবাশ্ম জ্বালানি",
    subject: "SSC রসায়ন",
    level: "এসএসসি",
    dotColor: "bg-blue-500",
    thumbBg: "from-orange-300 via-rose-300 to-amber-200",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "২.৮ - ঘাস ফড়িং এর মুখোপাঙ্গ",
    subject: "HSC জীববিজ্ঞান ২য় পত্র",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-teal-500 via-emerald-500 to-teal-700",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "১৬.১ - পরিসীমা, ক্ষেত্রফল ও ...",
    subject: "SSC গণিত",
    level: "এসএসসি",
    dotColor: "bg-orange-500",
    thumbBg: "from-emerald-400 via-emerald-500 to-emerald-700",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v4",
    title: "২.১৩ - নেটওয়ার্ক টপোলজি পর্ব ২",
    subject: "HSC তথ্য ও যোগাযোগ প্রযুক্তি",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-indigo-700 via-blue-800 to-slate-900",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v5",
    title: "৩.২ - নিউটনের সূত্রসমূহ",
    subject: "HSC পদার্থবিজ্ঞান ১ম পত্র",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-blue-500 via-indigo-600 to-violet-700",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v6",
    title: "৪.৫ - জৈব যৌগ পরিচিতি",
    subject: "HSC রসায়ন ২য় পত্র",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-fuchsia-500 via-purple-600 to-pink-600",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export default function FreeVideos() {
  const [active, setActive] = useState<Video | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="ফ্রি ভিডিও ক্লাস"
          title="সেরা ভিডিও লেকচার"
          subtitle="যেকোনো ভিডিওতে ক্লিক করে এখনই দেখুন — সম্পূর্ণ ফ্রি"
        />

        <div className="relative">
          {/* Side controls */}
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 h-10 w-10 place-items-center rounded-full border border-paper-300 bg-white text-body shadow-card hover:bg-ink-900 hover:text-white sm:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 h-10 w-10 place-items-center rounded-full border border-paper-300 bg-white text-body shadow-card hover:bg-ink-900 hover:text-white sm:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Outer rounded panel */}
          <div className="rounded-2xl border border-paper-300 bg-gradient-to-br from-paper-200/70 via-paper-100 to-paper-200/70 p-3 shadow-card sm:p-5">
            <div
              ref={scrollerRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth sm:gap-4"
            >
              {VIDEOS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActive(v)}
                  className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-xl border border-paper-300 bg-white text-left shadow-card transition hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-card-hover sm:w-[46%] lg:w-[24%]"
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${v.thumbBg}`}
                  >
                    <div className="absolute inset-0 grid-bg opacity-25" />

                    {/* Level badge top-right */}
                    <span className="absolute right-2 top-2 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-extrabold text-ink-900 shadow-sm backdrop-blur">
                      {v.level}
                    </span>

                    {/* Play button center */}
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/95 text-ink-900 shadow-glow-sm transition group-hover:scale-110">
                        <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-gold-500 opacity-0 transition group-hover:opacity-100" />
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-3 py-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-body-muted">
                      <span className={`h-2 w-2 rounded-full ${v.dotColor}`} />
                      {v.subject}
                    </div>
                    <div className="mt-1 line-clamp-2 text-sm font-bold text-ink-900">
                      {v.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink-900/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-ink-900 shadow-glow"
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0 text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70">
                  <span className={`h-2 w-2 rounded-full ${active.dotColor}`} />
                  {active.subject}
                </div>
                <div className="mt-0.5 truncate text-sm font-bold sm:text-base">
                  {active.title}
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
