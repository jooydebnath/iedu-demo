"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import SectionTitle from "./SectionTitle";

type Story = {
  id: string;
  name: string;
  school: string;
  thumb: string;
  avatar: string;
  tag?: string;
  tagColor?: string;
  youtubeId: string;
};

const STORIES: Story[] = [
  {
    id: "s1",
    name: "মেহরাবিন",
    school: "নিম্ন প্রাথমিক, ১০ম শ্রেণি",
    thumb:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=47",
    tag: "যুক্ত",
    tagColor: "bg-rose-500",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "s2",
    name: "সাবিহা ও হাবিবা",
    school: "কাজিরবেলা শাহেদ আলী উচ্চ বিদ্যালয়, পিরোজপুর",
    thumb:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=44",
    tag: "মেডিকেল",
    tagColor: "bg-amber-500",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "s3",
    name: "আতিকিয়া ও তাসনিয়া",
    school: "বি.এ. নন স্টাইল কলেজ",
    thumb:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=45",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "s4",
    name: "জিসান",
    school: "গাজীপুর ক্যান্টনমেন্ট পাবলিক স্কুল ও কলেজ",
    thumb:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=12",
    tag: "32nd",
    tagColor: "bg-rose-500",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "s5",
    name: "ইসরাত জাহান লাবিবা",
    school: "কুমিল্লা ক্যান্টনমেন্ট স্কুল ও বিদ্যালয়",
    thumb:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop",
    avatar: "https://i.pravatar.cc/80?img=49",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export default function VideoTestimonials() {
  const [active, setActive] = useState<Story | null>(null);

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
          eyebrow="ভিডিও সাক্ষাৎকার"
          title="কেন আমরাই শিক্ষার্থী ও অভিভাবকদের প্রথম পছন্দ?"
          subtitle="শিক্ষার্থীদের নিজের মুখেই শুনুন তাদের সাফল্যের গল্প"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {STORIES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className="group relative overflow-hidden rounded-xl border border-paper-300 bg-white text-left shadow-card transition hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
            >
              {/* Vertical thumbnail */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.thumb}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/0 to-ink-900/0" />

                {s.tag && (
                  <span
                    className={`absolute left-3 bottom-3 rounded-md ${s.tagColor} px-2 py-0.5 text-[11px] font-extrabold text-white shadow-sm`}
                  >
                    {s.tag}
                  </span>
                )}

                {/* Play button center */}
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95 text-rose-500 shadow-glow-sm transition group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2 px-3 py-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.avatar}
                  alt={s.name}
                  className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-paper-200"
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
                  {active.name}
                </div>
                <div className="truncate text-[11px] text-white/70">
                  {active.school}
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
                title={active.name}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
