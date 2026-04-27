"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X, Sparkles, Eye, Heart } from "lucide-react";
import SectionTitle from "./SectionTitle";

type Video = {
  id: string;
  title: string;
  subject: string;
  level: string; // displayed badge top-right
  dotColor: string; // tailwind bg color for the bullet
  thumbBg: string; // tailwind gradient classes for thumbnail
  youtubeId: string;
  views?: string;
  duration?: string;
};

const VIDEOS: Video[] = [
  {
    id: "v1",
    title: "১.১ - জীবাশ্ম জ্বালানি",
    subject: "SSC রসায়ন",
    level: "এসএসসি",
    dotColor: "bg-blue-500",
    thumbBg: "from-orange-400 via-rose-500 to-amber-600",
    youtubeId: "dQw4w9WgXcQ",
    views: "২২K",
    duration: "০:৫৪",
  },
  {
    id: "v2",
    title: "২.৮ - ঘাস ফড়িং এর মুখোপাঙ্গ",
    subject: "HSC জীববিজ্ঞান ২য় পত্র",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-teal-500 via-emerald-500 to-teal-700",
    youtubeId: "dQw4w9WgXcQ",
    views: "১৮ক",
    duration: "১:১২",
  },
  {
    id: "v3",
    title: "১৬.১ - পরিসীমা, ক্ষেত্রফল ও ...",
    subject: "SSC গণিত",
    level: "এসএসসি",
    dotColor: "bg-orange-500",
    thumbBg: "from-emerald-400 via-emerald-500 to-emerald-700",
    youtubeId: "dQw4w9WgXcQ",
    views: "৩৫ক",
    duration: "০:৪৮",
  },
  {
    id: "v4",
    title: "২.১৩ - নেটওয়ার্ক টপোলজি পর্ব ২",
    subject: "HSC তথ্য ও যোগাযোগ প্রযুক্তি",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-indigo-700 via-blue-800 to-slate-900",
    youtubeId: "dQw4w9WgXcQ",
    views: "২৭ক",
    duration: "১:৩৫",
  },
  {
    id: "v5",
    title: "৩.২ - নিউটনের সূত্রসমূহ",
    subject: "HSC পদার্থবিজ্ঞান ১ম পত্র",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-blue-500 via-indigo-600 to-violet-700",
    youtubeId: "dQw4w9WgXcQ",
    views: "৪২ক",
    duration: "২:০৮",
  },
  {
    id: "v6",
    title: "৪.৫ - জৈব যৌগ পরিচিতি",
    subject: "HSC রসায়ন ২য় পত্র",
    level: "এইচএসসি",
    dotColor: "bg-emerald-500",
    thumbBg: "from-fuchsia-500 via-purple-600 to-pink-600",
    youtubeId: "dQw4w9WgXcQ",
    views: "১২ক",
    duration: "১:৪৭",
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

  // Mouse click+drag to scroll (touch falls through to native)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isDown = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="ফ্রি ভিডিও ক্লাস"
          title="সেরা ভিডিও লেকচার"
          subtitle="যেকোনো ভিডিওতে ক্লিক করে এখনই দেখুন — সম্পূর্ণ ফ্রি"
        />

        <div className="relative">
          <div
            ref={scrollerRef}
            style={{ touchAction: "pan-x" }}
            className="no-scrollbar flex cursor-grab snap-x gap-3 overflow-x-auto scroll-smooth sm:gap-4"
          >
              {VIDEOS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActive(v)}
                  className="group relative w-[60%] shrink-0 snap-start overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900 text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-hover sm:w-[32%] lg:w-[18%]"
                >
                  {/* Reels-style vertical thumbnail (9:16) */}
                  <div
                    className={`relative aspect-[9/16] overflow-hidden bg-gradient-to-br ${v.thumbBg}`}
                  >
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    {/* Top + bottom darkening gradients for legibility */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                    {/* Level badge top-left */}
                    <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-extrabold text-white ring-1 ring-white/25 backdrop-blur">
                      {v.level}
                    </span>

                    {/* Duration badge top-right */}
                    {v.duration && (
                      <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur">
                        {v.duration}
                      </span>
                    )}

                    {/* Play button center */}
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white/95 text-ink-900 shadow-glow ring-4 ring-white/25 transition group-hover:scale-110">
                        <Sparkles className="absolute -right-2 -top-2 h-4 w-4 text-gold-500 opacity-0 transition group-hover:opacity-100" />
                        <Play className="ml-0.5 h-6 w-6 fill-current" />
                      </span>
                    </div>

                    {/* Right rail Reels-style action icons */}
                    <div className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-3 opacity-0 transition group-hover:opacity-100">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur">
                        <Heart className="h-4 w-4" />
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur">
                        <Eye className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Bottom info overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white/80">
                        <span className={`h-1.5 w-1.5 rounded-full ${v.dotColor}`} />
                        {v.subject}
                      </div>
                      <div className="mt-1 line-clamp-2 font-display text-[13px] font-extrabold leading-tight text-white drop-shadow">
                        {v.title}
                      </div>
                      {v.views && (
                        <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-white/70">
                          <Eye className="h-3 w-3" /> {v.views} views
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
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
