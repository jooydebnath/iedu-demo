"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Star, Users, Award, ChevronRight, X, Clock } from "lucide-react";
import { toBn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

type Teacher = {
  id: string;
  name: string;
  designation: string;
  subject: string;
  students: number;
  rating: number;
  imgGrad: string;
  initials: string;
  badge?: string;
};

const TEACHERS: Teacher[] = [
  {
    id: "t1",
    name: "ড. শাহরিয়ার রহমান",
    designation: "প্রফেসর, ঢাকা বিশ্ববিদ্যালয়",
    subject: "পদার্থবিজ্ঞান",
    students: 18500,
    rating: 4.9,
    imgGrad: "from-blue-500 via-indigo-600 to-purple-700",
    initials: "শা",
    badge: "টপ রেটেড",
  },
  {
    id: "t2",
    name: "নুসরাত জাহান",
    designation: "সিনিয়র লেকচারার",
    subject: "জীববিজ্ঞান",
    students: 14200,
    rating: 4.9,
    imgGrad: "from-pink-500 via-rose-600 to-red-700",
    initials: "নু",
  },
  {
    id: "t3",
    name: "প্রকৌশলী রাশেদ আলী",
    designation: "BUET Engineer",
    subject: "গণিত ও ICT",
    students: 21000,
    rating: 4.8,
    imgGrad: "from-emerald-500 via-teal-600 to-cyan-700",
    initials: "রা",
    badge: "বেস্টসেলার",
  },
  {
    id: "t4",
    name: "ড. তাহমিনা ইসলাম",
    designation: "সহকারী অধ্যাপক",
    subject: "রসায়ন",
    students: 16800,
    rating: 4.9,
    imgGrad: "from-amber-500 via-orange-600 to-red-700",
    initials: "তা",
  },
  {
    id: "t5",
    name: "ফারহান কবির",
    designation: "DU Lecturer",
    subject: "ইংরেজি",
    students: 12500,
    rating: 4.8,
    imgGrad: "from-fuchsia-500 via-purple-600 to-violet-700",
    initials: "ফা",
  },
  {
    id: "t6",
    name: "সাদিয়া হক",
    designation: "সিনিয়র সহকারী",
    subject: "বাংলা",
    students: 9800,
    rating: 4.7,
    imgGrad: "from-yellow-500 via-amber-600 to-orange-700",
    initials: "সা",
    badge: "নিউ টিচার",
  },
];

type TeacherVideo = {
  id: string;
  title: string;
  sub: string;
  thumb: string;
  presenter: string;
  duration: string;
  youtubeId: string;
};

const VIDEOS: TeacherVideo[] = [
  {
    id: "tv1",
    title: "কেন বেছে নিবে i Education?",
    sub: "৫ মিনিটে জানুন",
    thumb: "from-purple-600 via-fuchsia-600 to-pink-600",
    presenter: "ফাউন্ডার মেসেজ",
    duration: "৫:২৩",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "tv2",
    title: "Roadmap to Success ২০২৬",
    sub: "Admission প্রস্তুতির গাইড",
    thumb: "from-amber-500 via-orange-600 to-red-700",
    presenter: "টপারের পরামর্শ",
    duration: "১২:৬৫",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "tv3",
    title: "শিক্ষকদের পরিচিতি",
    sub: "দেশের সেরা শিক্ষকমণ্ডলী",
    thumb: "from-emerald-500 via-teal-600 to-cyan-700",
    presenter: "টিচার্স টিম",
    duration: "৭:১৮",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "tv4",
    title: "পদার্থবিজ্ঞান ডেমো ক্লাস",
    sub: "ড. শাহরিয়ার রহমান",
    thumb: "from-blue-500 via-indigo-600 to-violet-700",
    presenter: "লাইভ ডেমো",
    duration: "১০:৪২",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "tv5",
    title: "জীববিজ্ঞান মেডিকেল প্রস্তুতি",
    sub: "নুসরাত জাহান",
    thumb: "from-rose-500 via-pink-600 to-fuchsia-700",
    presenter: "সিনিয়র লেকচারার",
    duration: "৮:৫৫",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "tv6",
    title: "গণিত এডমিশন টিপ্স",
    sub: "প্রকৌশলী রাশেদ আলী",
    thumb: "from-yellow-500 via-orange-600 to-red-700",
    presenter: "BUET Engineer",
    duration: "৬:৩২",
    youtubeId: "dQw4w9WgXcQ",
  },
];

function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
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
  return ref;
}

export default function Teachers() {
  const [active, setActive] = useState<TeacherVideo | null>(null);
  const rowRef = useDragScroll<HTMLDivElement>();
  const teachersRowRef = useDragScroll<HTMLDivElement>();

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="teachers" className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="শিক্ষকবৃন্দ"
          title="দেশের সেরা শিক্ষকদের সাথে শিখুন"
          subtitle="পেশাগত অভিজ্ঞতা ও আধুনিক টিচিং মেথডে দক্ষ আমাদের শিক্ষকমণ্ডলী"
        />
      </div>

      {/* Full-width drag-scroll video row */}
      <div className="relative mb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper-100 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper-100 to-transparent sm:w-20" />
        <div
          ref={rowRef}
          style={{ touchAction: "pan-x" }}
          className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-8 lg:px-12"
        >
          {VIDEOS.map((v) => (
            <button
              key={v.id}
              onClick={() => setActive(v)}
              className={`group relative aspect-[16/10] w-[70%] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${v.thumb} text-left shadow-card transition hover:-translate-y-1 hover:shadow-card-hover sm:w-[40%] lg:w-[26%]`}
            >
              <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/35" />
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-black/30 blur-3xl" />

              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold text-white ring-1 ring-white/25 backdrop-blur">
                <Award className="h-3 w-3 text-gold-300" /> {v.presenter}
              </span>

              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-ink-900/60 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur">
                <Clock className="h-3 w-3" /> {v.duration}
              </span>

              <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-500 text-ink-900 shadow-glow ring-4 ring-white/20 transition group-hover:scale-110">
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </span>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10">
                <h3 className="font-display text-sm font-extrabold leading-tight text-white sm:text-base">
                  {v.title}
                </h3>
                <p className="text-[10px] text-white/80">{v.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="আমাদের শিক্ষকমণ্ডলী"
          title="পরিচিত হোন আমাদের অভিজ্ঞ শিক্ষকদের সাথে"
          subtitle="ক্লিক করে দেখুন প্রতিটি শিক্ষকের বিস্তারিত প্রোফাইল"
        />
      </div>

      {/* Teacher info cards — draggable carousel matching video row */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper-100 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper-100 to-transparent sm:w-20" />
        <div
          ref={teachersRowRef}
          style={{ touchAction: "pan-x" }}
          className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-4 pb-2 pt-2 sm:px-8 lg:px-12"
        >
          {TEACHERS.map((t) => (
            <article
              key={t.id}
              className="group relative flex w-[70%] shrink-0 flex-col overflow-hidden rounded-2xl border border-paper-300 bg-white text-center shadow-card transition hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover sm:w-[40%] lg:w-[22%]"
            >
              {/* Cover banner */}
              <div className="relative h-28 w-full overflow-hidden bg-slide-purple">
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${t.imgGrad} opacity-60 blur-2xl`}
                />
                <div
                  className={`pointer-events-none absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-br ${t.imgGrad} opacity-25 blur-3xl`}
                />
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

                {t.badge && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
                    <Star className="h-3 w-3 fill-current" />
                    {t.badge}
                  </span>
                )}
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur">
                  {t.subject}
                </span>
              </div>

              {/* Avatar overlapping banner */}
              <div className="relative -mt-12 mx-auto grid h-24 w-24 place-items-center">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${t.imgGrad} blur-md opacity-60 transition-opacity group-hover:opacity-90`}
                />
                <div
                  className={`relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${t.imgGrad} ring-4 ring-white shadow-card`}
                >
                  <span className="font-display text-3xl font-extrabold text-white">
                    {t.initials}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
                <h3 className="font-display text-lg font-extrabold text-body">
                  {t.name}
                </h3>
                <p className="text-xs text-body-muted">{t.designation}</p>
                <p className="mt-1 text-sm font-bold text-ink-500">
                  {t.subject}
                </p>

                <div className="mt-4 flex items-center justify-center gap-4 border-t border-paper-300 pt-4 text-xs text-body-muted">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-gold-600" />
                    {toBn(Math.floor(t.students / 1000))}K+
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                    {toBn(t.rating)}
                  </span>
                </div>

                <a
                  href={`/teachers/${t.id}`}
                  className="mt-4 inline-flex items-center justify-center gap-1 text-xs font-bold text-ink-500 hover:text-ink-600"
                >
                  প্রোফাইল দেখুন <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
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
                <div className="truncate text-sm font-bold sm:text-base">{active.title}</div>
                <div className="truncate text-[11px] text-white/70">{active.sub}</div>
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
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
