"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X, Quote, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

type VideoStory = {
  id: string;
  title: string;
  subtitle: string;
  name: string;
  school: string;
  thumb: string;
  avatar: string;
  youtubeId: string;
};

type TextReview = {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  grad: string;
  initials: string;
};

const VIDEO_STORIES: VideoStory[] = [
  {
    id: "v1",
    title: "যে টিচাররা বলছে",
    subtitle: "শিক্ষকদের মতামত",
    name: "রাইসা জাহান রুপা",
    school: "টেন মিনিট স্কুল",
    thumb:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=47",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "মেহরাবিনের গল্প",
    subtitle: "১০ম শ্রেণিতে ১ম স্থান",
    name: "মেহরাবিন",
    school: "নিম্ন প্রাথমিক, ১০ম শ্রেণি",
    thumb:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=44",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "মেডিকেলে চান্স পাওয়ার গল্প",
    subtitle: "সাবিহা ও হাবিবার অভিজ্ঞতা",
    name: "সাবিহা ও হাবিবা",
    school: "শাহেদ আলী উচ্চ বিদ্যালয়",
    thumb:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=45",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v4",
    title: "BUET এ চান্স পেলাম যেভাবে",
    subtitle: "সাফল্যের পেছনের গল্প",
    name: "জিসান",
    school: "গাজীপুর ক্যান্টনমেন্ট স্কুল",
    thumb:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=12",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v5",
    title: "৩২তম বিসিএস র্যাংক",
    subtitle: "নিজের জার্নি শেয়ার করলেন",
    name: "ইসরাত জাহান লাবিবা",
    school: "কুমিল্লা ক্যান্টনমেন্ট স্কুল",
    thumb:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=49",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v6",
    title: "নটরডেম এ চান্স",
    subtitle: "প্রস্তুতির টিপস ও ট্রিকস",
    name: "তানভীর হাসান",
    school: "নটরডেম কলেজ",
    thumb:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=14",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v7",
    title: "অভিভাবকদের মতামত",
    subtitle: "কেন i Education সেরা",
    name: "সালমা বেগম",
    school: "অভিভাবক",
    thumb:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=32",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v8",
    title: "ফ্রি লাইভ ক্লাস ডেমো",
    subtitle: "ক্লাসরুম এক্সপেরিয়েন্স",
    name: "আতিকিয়া তাসনিয়া",
    school: "বি.এ. নন স্টাইল কলেজ",
    thumb:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=20",
    youtubeId: "dQw4w9WgXcQ",
  },
];

const TEXT_REVIEWS: TextReview[] = [
  {
    id: "t1",
    name: "তাসনিম রহমান",
    title: "মেডিকেল, রাজশাহী",
    quote:
      "i Education এর মেডিকেল 2nd Time কোর্স আমার জীবন বদলে দিয়েছে। শিক্ষকদের গাইডলাইন আর প্র্যাকটিস টেস্ট অসাধারণ।",
    rating: 5,
    grad: "from-rose-900 via-rose-950 to-ink-900",
    initials: "তা",
  },
  {
    id: "t2",
    name: "ফাহিম শাহরিয়ার",
    title: "BUET CSE",
    quote:
      "Engineering admission প্রস্তুতির জন্য সেরা প্ল্যাটফর্ম। নোট, ক্লাস আর মেন্টরিং সবই পেয়েছি এক জায়গায়।",
    rating: 5,
    grad: "from-blue-900 via-indigo-950 to-ink-900",
    initials: "ফা",
  },
  {
    id: "t3",
    name: "সাবরিনা ইসলাম",
    title: "ঢাবি, IBA",
    quote:
      "ফ্রি রিসোর্স আর লাইভ ক্লাসের কোয়ালিটি দেখে আমি অবাক! প্রতিটি কোর্স সম্পূর্ণ মূল্যের চেয়েও বেশি।",
    rating: 5,
    grad: "from-emerald-900 via-teal-950 to-ink-900",
    initials: "সা",
  },
  {
    id: "t4",
    name: "রাফসান জানি",
    title: "BUET EEE",
    quote:
      "প্র্যাকটিস টেস্ট আর মডেল টেস্টগুলো আমাকে BUET এ চান্স পেতে অনেক সাহায্য করেছে। ধন্যবাদ i Education।",
    rating: 5,
    grad: "from-amber-900 via-orange-950 to-ink-900",
    initials: "রা",
  },
  {
    id: "t5",
    name: "নুসরাত জাহান",
    title: "ঢাকা মেডিকেল কলেজ",
    quote:
      "মেডিকেল কোচিংয়ের সবচেয়ে ভালো মেন্টরিং পেয়েছি এখানেই। প্রতিদিনের লাইভ ক্লাস ও MCQ অনুশীলন দারুণ।",
    rating: 5,
    grad: "from-fuchsia-900 via-purple-950 to-ink-900",
    initials: "নু",
  },
  {
    id: "t6",
    name: "আরিফুল ইসলাম",
    title: "RUET ME",
    quote:
      "ম্যাথ আর ফিজিক্সের কঠিন টপিকগুলো খুব সহজে বুঝিয়ে দিয়েছেন শিক্ষকরা। কোর্সটা মাস্ট রিকমেন্ডেড।",
    rating: 5,
    grad: "from-cyan-900 via-sky-950 to-ink-900",
    initials: "আ",
  },
];

/** Mouse-only click+drag horizontal scroll. Touch falls through to native
 *  horizontal scroll (with `touch-action: pan-x`), so vertical page scroll
 *  on the rest of the page is never hijacked. */
function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return; // let touch use native scroll
      isDown = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      if (!isDown) return;
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
  return ref;
}

export default function StudentReviews() {
  const [active, setActive] = useState<VideoStory | null>(null);
  const videoRowRef = useDragScroll<HTMLDivElement>();
  const textRowRef = useDragScroll<HTMLDivElement>();

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="শিক্ষার্থীদের মতামত"
          title="কেন আমরাই শিক্ষার্থী ও অভিভাবকদের প্রথম পছন্দ?"
          subtitle="শিক্ষার্থীদের নিজের মুখে শুনুন তাদের সাফল্যের গল্প"
        />
      </div>

      <div className="space-y-5 sm:space-y-6">
        {/* Video row */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper-100 to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper-100 to-transparent sm:w-20" />

          <div
            ref={videoRowRef}
            style={{ touchAction: "pan-x" }}
            className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-8 lg:px-12"
          >
            {VIDEO_STORIES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className="group relative w-[60%] shrink-0 overflow-hidden rounded-2xl border border-paper-300 bg-white text-left shadow-card transition hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover sm:w-[32%] lg:w-[20%]"
              >
                {/* Vertical thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.thumb}
                    alt={s.name}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/0 to-ink-900/0" />

                  {/* Title overlay (Bangla) */}
                  <div className="absolute inset-x-0 bottom-14 px-3 text-center">
                    <div className="line-clamp-1 font-display text-base font-extrabold text-white drop-shadow sm:text-lg">
                      {s.title}
                    </div>
                  </div>

                  {/* Center play button */}
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95 text-rose-500 shadow-glow-sm transition group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </div>
                </div>

                {/* Footer with avatar */}
                <div className="flex items-center gap-2 px-3 py-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.avatar}
                    alt={s.name}
                    draggable={false}
                    className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-paper-200"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-ink-900">
                      {s.name}
                    </div>
                    <div className="truncate text-[10px] font-medium text-body-muted">
                      {s.school}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Text reviews row */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper-100 to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper-100 to-transparent sm:w-20" />

          <div
            ref={textRowRef}
            style={{ touchAction: "pan-x" }}
            className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-8 lg:px-12"
          >
            {TEXT_REVIEWS.map((r) => (
              <article
                key={r.id}
                className={`group relative flex w-[70%] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${r.grad} p-5 shadow-card-dark transition hover:-translate-y-1 hover:shadow-card-hover sm:w-[36%] lg:w-[22%]`}
                style={{ minHeight: 280 }}
              >
                <p className="text-sm leading-relaxed text-white/95">
                  “{r.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 font-display text-sm font-extrabold text-white ring-2 ring-white/30 backdrop-blur">
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-white">
                      {r.name}
                    </div>
                    <div className="truncate text-[11px] text-white/75">
                      {r.title}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Video modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink-900/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-ink-900 shadow-glow"
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3 text-white">
              <div className="min-w-0">
                <div className="truncate text-sm font-bold sm:text-base">
                  {active.title}
                </div>
                <div className="truncate text-[11px] text-white/70">
                  {active.name} · {active.school}
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 transition hover:bg-white/20"
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
