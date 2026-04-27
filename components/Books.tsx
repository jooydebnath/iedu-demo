"use client";

import { ShoppingCart, Star, ArrowRight, BookOpen } from "lucide-react";
import { toBn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  cover: string; // gradient class
  emoji: string;
  badge?: string;
};

const BOOKS: Book[] = [
  {
    id: "b1",
    title: "SSC ফিজিক্স অলরাউন্ডার",
    author: "i Education টিম",
    category: "পদার্থবিজ্ঞান",
    price: 320,
    oldPrice: 450,
    rating: 4.9,
    cover: "from-blue-500 via-indigo-600 to-purple-700",
    emoji: "⚛️",
    badge: "বেস্টসেলার",
  },
  {
    id: "b2",
    title: "HSC কেমিস্ট্রি কুইক",
    author: "ড. রায়হান চৌধুরী",
    category: "রসায়ন",
    price: 380,
    oldPrice: 520,
    rating: 4.8,
    cover: "from-emerald-500 via-teal-600 to-cyan-700",
    emoji: "🧪",
  },
  {
    id: "b3",
    title: "Math Olympiad গাইড",
    author: "প্রফেসর সালমান",
    category: "গণিত",
    price: 295,
    oldPrice: 420,
    rating: 4.9,
    cover: "from-pink-500 via-rose-600 to-red-700",
    emoji: "📐",
    badge: "নতুন",
  },
  {
    id: "b4",
    title: "Biology মাস্টার",
    author: "ড. নুসরাত জাহান",
    category: "জীববিজ্ঞান",
    price: 350,
    oldPrice: 480,
    rating: 4.7,
    cover: "from-amber-500 via-orange-600 to-red-700",
    emoji: "🧬",
  },
  {
    id: "b5",
    title: "ইংরেজি গ্রামার বাইবেল",
    author: "মিস্টার অরিন",
    category: "ইংরেজি",
    price: 250,
    oldPrice: 350,
    rating: 4.8,
    cover: "from-violet-500 via-purple-600 to-fuchsia-700",
    emoji: "📚",
  },
  {
    id: "b6",
    title: "বাংলা সাহিত্য সংকলন",
    author: "অধ্যাপক নাজিম",
    category: "বাংলা",
    price: 280,
    oldPrice: 390,
    rating: 4.9,
    cover: "from-yellow-500 via-amber-600 to-orange-700",
    emoji: "📖",
    badge: "জনপ্রিয়",
  },
  {
    id: "b7",
    title: "ICT সম্পূর্ণ গাইড",
    author: "প্রকৌশলী রাশেদ",
    category: "তথ্য প্রযুক্তি",
    price: 220,
    oldPrice: 320,
    rating: 4.6,
    cover: "from-cyan-500 via-sky-600 to-blue-700",
    emoji: "💻",
  },
  {
    id: "b8",
    title: "Admission প্রশ্ন ব্যাংক",
    author: "i Education টিম",
    category: "ভর্তি প্রস্তুতি",
    price: 450,
    oldPrice: 650,
    rating: 5.0,
    cover: "from-rose-500 via-pink-600 to-fuchsia-700",
    emoji: "🎯",
    badge: "বেস্টসেলার",
  },
  {
    id: "b9",
    title: "Higher Math বুক ১+২",
    author: "প্রফেসর শাহরিয়ার",
    category: "উচ্চতর গণিত",
    price: 540,
    oldPrice: 750,
    rating: 4.8,
    cover: "from-lime-500 via-green-600 to-emerald-700",
    emoji: "∑",
  },
];

export default function Books() {
  return (
    <section id="books" className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="বইসমূহ"
          title="আমাদের প্রকাশিত বইগুলো"
          subtitle="পরীক্ষায় টপ স্কোরের জন্য তৈরি — দেশের সেরা শিক্ষকদের লেখা"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#all-books" className="btn-ghost">
            <BookOpen className="h-4 w-4" />
            সব বই দেখুন
          </a>
        </div>
      </div>
    </section>
  );
}

function BookCard({ book: b }: { book: Book }) {
  const discount = Math.round(((b.oldPrice - b.price) / b.oldPrice) * 100);
  return (
    <article className="group relative flex overflow-hidden rounded-3xl border border-paper-300 bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover">
      {/* Cover */}
      <div className="relative shrink-0">
        <div
          className={`relative grid h-36 w-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${b.cover} shadow-lg`}
        >
          {/* Spine */}
          <div className="absolute left-0 top-0 h-full w-2 bg-black/30" />
          {/* Title on cover */}
          <div className="px-2 text-center">
            <div className="text-3xl">{b.emoji}</div>
            <div className="mt-1 text-[9px] font-bold uppercase tracking-wider text-white/90 line-clamp-2">
              {b.title}
            </div>
          </div>
          {/* Discount badge */}
          <span className="absolute right-1 top-1 rounded-md bg-gold-500 px-1.5 py-0.5 text-[9px] font-extrabold text-ink-900">
            -{toBn(discount)}%
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="ml-4 flex flex-1 flex-col">
        {b.badge && (
          <span className="self-start rounded-full bg-gold-500/15 px-2 py-0.5 text-[10px] font-bold text-gold-700 ring-1 ring-inset ring-gold-500/40">
            {b.badge}
          </span>
        )}
        <h3 className="mt-1 font-display text-base font-extrabold leading-tight text-body line-clamp-2">
          {b.title}
        </h3>
        <p className="mt-0.5 text-xs text-body-muted">{b.author}</p>
        <p className="mt-0.5 text-[11px] font-semibold text-ink-500">
          {b.category}
        </p>

        <div className="mt-2 flex items-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
          <span className="font-semibold text-body">{toBn(b.rating)}</span>
          <span className="text-body-muted">/৫</span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            <div className="font-display text-lg font-extrabold text-ink-500">
              ৳{toBn(b.price)}
            </div>
            <div className="text-[11px] font-semibold text-body-muted line-through">
              ৳{toBn(b.oldPrice)}
            </div>
          </div>
          <button className="inline-flex items-center gap-1 rounded-full bg-ink-800 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-gold-500 hover:text-ink-900">
            <ShoppingCart className="h-3.5 w-3.5" /> অর্ডার
          </button>
        </div>
      </div>
    </article>
  );
}
