"use client";

import { Play, Star, Users, Award, ChevronRight } from "lucide-react";
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
];

const VIDEOS = [
  {
    title: "কেন বেছে নিবে i Education?",
    sub: "৫ মিনিটে জানুন",
    thumb: "from-purple-600 via-fuchsia-600 to-pink-600",
    presenter: "ফাউন্ডার মেসেজ",
    duration: "৫:২৩",
  },
  {
    title: "Roadmap to Success ২০২৬",
    sub: "Admission প্রস্তুতির গাইড",
    thumb: "from-amber-500 via-orange-600 to-red-700",
    presenter: "টপারের পরামর্শ",
    duration: "১২:৪৫",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="শিক্ষকবৃন্দ"
          title="দেশের সেরা শিক্ষকদের সাথে শিখুন"
          subtitle="পেশাগত অভিজ্ঞতা ও আধুনিক টিচিং মেথডে দক্ষ আমাদের শিক্ষকমণ্ডলী"
        />

        {/* Video row */}
        <div className="mb-12 grid gap-5 lg:grid-cols-2">
          {VIDEOS.map((v) => (
            <div
              key={v.title}
              className={`group relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${v.thumb} shadow-card`}
            >
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
              {/* abstract shapes */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-black/30 blur-3xl" />

              {/* presenter pill */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                <Award className="h-3 w-3 text-gold-300" /> {v.presenter}
              </div>

              {/* duration */}
              <div className="absolute right-5 top-5 rounded-md bg-black/50 px-2 py-1 text-[11px] font-bold text-white backdrop-blur">
                {v.duration}
              </div>

              {/* play */}
              <button className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-500 text-ink-900 shadow-glow transition-transform group-hover:scale-110">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </button>

              {/* bottom info */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12">
                <h3 className="font-display text-xl font-extrabold text-white">
                  {v.title}
                </h3>
                <p className="text-xs text-white/80">{v.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((t) => (
            <article
              key={t.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-paper-300 bg-white text-center shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
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
                  href="#"
                  className="mt-4 inline-flex items-center justify-center gap-1 text-xs font-bold text-ink-500 hover:text-ink-600"
                >
                  প্রোফাইল দেখুন <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
