"use client";

import { useParams, notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useToast } from "@/lib/toast";
import {
  ShoppingCart,
  Star,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Truck,
  ShieldCheck,
  RotateCcw,
  Heart,
  Share2,
  Plus,
  Minus,
  Tag,
  FileText,
  MessageCircle,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toBn } from "@/lib/utils";

type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  cover: string;
  emoji: string;
  badge?: string;
  pages: number;
  language: string;
  publisher: string;
  isbn: string;
  description: string;
  highlights: string[];
  contents: string[];
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
    pages: 420,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0001-1",
    description:
      "SSC পরীক্ষার পদার্থবিজ্ঞান অংশের জন্য সবচেয়ে সম্পূর্ণ গাইড। প্রতিটি অধ্যায়ে কনসেপ্ট, উদাহরণ ও MCQ সমাধান আছে।",
    highlights: [
      "সম্পূর্ণ সিলেবাস কভার",
      "৫০০+ MCQ ও সমাধান",
      "৫০+ মডেল প্রশ্ন",
      "কনসেপ্ট ম্যাপ ও ডায়াগ্রাম",
    ],
    contents: [
      "অধ্যায় ১: ভৌত রাশি ও পরিমাপ",
      "অধ্যায় ২: গতি",
      "অধ্যায় ৩: বল",
      "অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি",
      "অধ্যায় ৫: পদার্থের অবস্থা",
      "অধ্যায় ৬: তরঙ্গ ও শব্দ",
    ],
  },
  {
    id: "b2",
    title: "HSC কেমিস্ট্রি মাস্টার",
    author: "ড. তাহমিনা ইসলাম",
    category: "রসায়ন",
    price: 480,
    oldPrice: 650,
    rating: 4.8,
    cover: "from-emerald-500 via-teal-600 to-cyan-700",
    emoji: "🧪",
    badge: "বেস্টসেলার",
    pages: 540,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0002-8",
    description:
      "HSC রসায়ন ১ম ও ২য় পত্রের সম্পূর্ণ প্রস্তুতি। এক্সপার্ট লেখকের কলমে।",
    highlights: ["১ম ও ২য় পত্র সম্পূর্ণ", "অর্গানিক, ইনঅর্গানিক, ফিজিকাল", "৭০০+ MCQ", "প্র্যাকটিস টেস্ট"],
    contents: [
      "১ম পত্র: রাসায়নিক বন্ধন",
      "১ম পত্র: গ্যাসীয় অবস্থা",
      "২য় পত্র: জৈব রসায়ন পরিচিতি",
      "২য় পত্র: শিল্পের রসায়ন",
    ],
  },
  {
    id: "b3",
    title: "SSC গণিত — সম্পূর্ণ সমাধান",
    author: "প্রকৌশলী রাশেদ আলী",
    category: "গণিত",
    price: 380,
    oldPrice: 520,
    rating: 4.9,
    cover: "from-pink-500 via-rose-600 to-red-700",
    emoji: "📐",
    badge: "নতুন",
    pages: 480,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0003-5",
    description: "SSC সাধারণ গণিত ও উচ্চতর গণিতের সমস্যা সমাধান গাইড।",
    highlights: ["সাধারণ + উচ্চতর গণিত", "সব বোর্ডের সিলেবাস", "স্টেপ-বাই-স্টেপ সমাধান"],
    contents: [
      "অধ্যায় ১: বাস্তব সংখ্যা",
      "অধ্যায় ৪: ত্রিকোণমিতি",
      "অধ্যায় ১৬: পরিসীমা ও ক্ষেত্রফল",
    ],
  },
  {
    id: "b4",
    title: "HSC জীববিজ্ঞান প্যাকেজ",
    author: "নুসরাত জাহান",
    category: "জীববিজ্ঞান",
    price: 520,
    oldPrice: 720,
    rating: 4.8,
    cover: "from-amber-500 via-orange-600 to-red-700",
    emoji: "🧬",
    pages: 580,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0004-2",
    description: "HSC জীববিজ্ঞান ১ম ও ২য় পত্র — মেডিকেল প্রস্তুতির পারফেক্ট গাইড।",
    highlights: ["মেডিকেল ফোকাসড", "ডায়াগ্রামসহ ব্যাখ্যা", "৬০০+ MCQ"],
    contents: ["১ম পত্র: কোষ ও কোষীয় প্রক্রিয়া", "২য় পত্র: প্রাণিবিজ্ঞান"],
  },
  {
    id: "b5",
    title: "Spoken English Mastery",
    author: "ফারহান কবির",
    category: "ইংরেজি",
    price: 280,
    oldPrice: 380,
    rating: 4.7,
    cover: "from-fuchsia-500 via-purple-600 to-violet-700",
    emoji: "💬",
    pages: 320,
    language: "বাংলা / English",
    publisher: "i Education Publications",
    isbn: "978-984-00-0005-9",
    description: "Spoken English শেখার সবচেয়ে সহজ ও প্র্যাকটিকাল গাইড।",
    highlights: ["প্রতিদিন ব্যবহারের কথোপকথন", "Pronunciation guide", "Audio QR code"],
    contents: ["Greetings", "At the market", "Job interview", "Travel"],
  },
  {
    id: "b6",
    title: "SSC বাংলা ১ম + ২য়",
    author: "সাদিয়া হক",
    category: "বাংলা",
    price: 340,
    oldPrice: 480,
    rating: 4.7,
    cover: "from-yellow-500 via-amber-600 to-orange-700",
    emoji: "📖",
    pages: 460,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0006-6",
    description: "SSC বাংলা ১ম ও ২য় পত্রের সম্পূর্ণ সিলেবাস।",
    highlights: ["সাহিত্য + ব্যাকরণ", "রচনা স্যাম্পল", "৪০০+ MCQ"],
    contents: ["গদ্য", "পদ্য", "ব্যাকরণ", "নির্মিতি"],
  },
  {
    id: "b7",
    title: "ICT সম্পূর্ণ গাইড",
    author: "i Education টিম",
    category: "ICT",
    price: 290,
    oldPrice: 420,
    rating: 4.6,
    cover: "from-cyan-500 via-sky-600 to-blue-700",
    emoji: "💻",
    pages: 360,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0007-3",
    description: "ICT বিষয়ের পূর্ণাঙ্গ গাইড।",
    highlights: ["সব অধ্যায় কভার", "প্র্যাকটিকাল উদাহরণ", "MCQ Bank"],
    contents: ["তথ্য ও যোগাযোগ", "নেটওয়ার্ক", "ডেটাবেস", "প্রোগ্রামিং"],
  },
  {
    id: "b8",
    title: "Admission প্রশ্ন ব্যাংক",
    author: "i Education টিম",
    category: "ভর্তি প্রস্তুতি",
    price: 450,
    oldPrice: 650,
    rating: 4.9,
    cover: "from-indigo-500 via-violet-600 to-purple-700",
    emoji: "🎯",
    badge: "বেস্টসেলার",
    pages: 520,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0008-0",
    description:
      "মেডিকেল, ইঞ্জিনিয়ারিং ও বিশ্ববিদ্যালয় ভর্তির জন্য বিগত বছরের প্রশ্ন ও সমাধান।",
    highlights: ["বিগত ১০ বছরের প্রশ্ন", "সমাধানসহ", "টপিক-ভিত্তিক সাজানো"],
    contents: ["ফিজিক্স", "কেমিস্ট্রি", "বায়োলজি", "ম্যাথ", "GK"],
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
    pages: 620,
    language: "বাংলা",
    publisher: "i Education Publications",
    isbn: "978-984-00-0009-7",
    description: "HSC উচ্চতর গণিত ১ম ও ২য় পত্রের সম্পূর্ণ সমাধান গাইড।",
    highlights: ["১ম ও ২য় পত্র", "এডভান্সড ক্যালকুলাস", "৫০+ মডেল প্রশ্ন"],
    contents: ["ম্যাট্রিক্স", "ক্যালকুলাস", "জটিল সংখ্যা", "ভেক্টর"],
  },
];

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { add } = useCart();
  const toast = useToast();
  const id = params?.id as string;
  const book = BOOKS.find((b) => b.id === id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!book) return;
    add(
      {
        id: book.id,
        title: book.title,
        price: book.price,
        oldPrice: book.oldPrice,
        cover: book.cover,
        emoji: book.emoji,
        author: book.author,
        type: "physical",
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    toast.success(`${book.title} কার্টে যোগ হয়েছে`);
  };

  const handleBuyNow = () => {
    handleAdd();
    router.push("/checkout");
  };

  if (!book) return notFound();

  const discount = Math.round(
    ((book.oldPrice - book.price) / book.oldPrice) * 100
  );
  const savings = book.oldPrice - book.price;
  const total = book.price * qty;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-16">
        <div className="mx-auto max-w-[1440px] px-4 py-6 lg:px-8">
          <Link
            href="/#books"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-body-soft transition hover:text-ink-500"
          >
            <ArrowLeft className="h-4 w-4" /> সকল বই
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[420px_1fr] lg:gap-12">
            {/* Cover */}
            <div className="relative">
              <div
                className={`relative mx-auto grid aspect-[3/4] w-full max-w-sm place-items-center overflow-hidden rounded-3xl bg-gradient-to-br ${book.cover} shadow-2xl ring-1 ring-white/10`}
              >
                <div className="absolute inset-0 grid-bg opacity-25" />
                <div className="absolute left-0 top-0 h-full w-3 bg-black/40" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                <div className="relative px-6 text-center">
                  <div className="text-7xl drop-shadow-lg">{book.emoji}</div>
                  <div className="mt-4 font-display text-xl font-extrabold leading-tight text-white drop-shadow">
                    {book.title}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-white/80">
                    {book.author}
                  </div>
                </div>

                <span className="absolute right-3 top-3 rounded-l-lg bg-rose-500 px-2.5 py-1 text-xs font-extrabold text-white shadow-md">
                  -{toBn(discount)}%
                </span>
              </div>

              <div className="mt-4 flex justify-center gap-2">
                <button className="grid h-10 w-10 place-items-center rounded-full border border-paper-300 bg-white text-body shadow-card transition hover:border-rose-300 hover:text-rose-500">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-paper-300 bg-white text-body shadow-card transition hover:border-ink-500/40 hover:text-ink-500">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {book.badge && (
                  <span className="rounded-full bg-gold-500/15 px-2.5 py-1 text-xs font-bold text-gold-700 ring-1 ring-inset ring-gold-500/40">
                    {book.badge}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 rounded-full bg-paper-100 px-2.5 py-1 text-xs font-bold text-body-soft ring-1 ring-paper-300">
                  <Tag className="h-3 w-3" /> {book.category}
                </span>
              </div>

              <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-body sm:text-4xl">
                {book.title}
              </h1>
              <p className="mt-2 text-sm text-body-soft">
                লেখক: <span className="font-bold text-body">{book.author}</span>
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <div className="inline-flex items-center gap-1 rounded-full bg-gold-500/15 px-2.5 py-1 font-bold text-gold-700">
                  <Star className="h-3.5 w-3.5 fill-current" /> {toBn(book.rating)}
                </div>
                <span className="text-body-muted">৫০০+ রিভিউ</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-body-soft">
                {book.description}
              </p>

              {/* Price block */}
              <div className="mt-6 rounded-2xl border border-paper-300 bg-white p-5 shadow-card">
                <div className="flex flex-wrap items-end gap-3">
                  <div className="font-display text-4xl font-extrabold text-ink-500">
                    ৳{toBn(book.price)}
                  </div>
                  <div className="text-base font-semibold text-body-muted line-through">
                    ৳{toBn(book.oldPrice)}
                  </div>
                  <span className="rounded-md bg-rose-500/10 px-2 py-0.5 text-xs font-extrabold text-rose-600">
                    সাশ্রয় ৳{toBn(savings)}
                  </span>
                </div>

                {/* Quantity */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-body-soft">
                    সংখ্যা
                  </span>
                  <div className="inline-flex items-center rounded-lg border border-paper-300">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="grid h-9 w-9 place-items-center text-body hover:bg-paper-100"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold">
                      {toBn(qty)}
                    </span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="grid h-9 w-9 place-items-center text-body hover:bg-paper-100"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="ml-auto text-sm font-bold text-body-soft">
                    মোট: <span className="text-ink-500">৳{toBn(total)}</span>
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-gradient px-5 py-3 text-sm font-extrabold text-ink-900 shadow-glow-sm transition hover:scale-[1.02]"
                  >
                    <ShoppingCart className="h-4 w-4" /> এখনই কিনুন
                  </button>
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 bg-ink-900 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-ink-800"
                  >
                    {added ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> কার্টে যোগ হয়েছে
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" /> কার্টে যোগ করুন
                      </>
                    )}
                  </button>
                </div>

                {/* Trust strip */}
                <div className="mt-5 grid gap-2 border-t border-paper-300 pt-4 text-xs text-body-soft sm:grid-cols-3">
                  <div className="inline-flex items-center gap-2">
                    <Truck className="h-4 w-4 text-emerald-600" /> ফ্রি ডেলিভারি
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <RotateCcw className="h-4 w-4 text-blue-600" /> ৭ দিন রিটার্ন
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-purple-600" /> নিরাপদ পেমেন্ট
                  </div>
                </div>
              </div>

              {/* Quick info card */}
              <Card
                title="বইয়ের তথ্য"
                icon={<BookOpen className="h-4 w-4" />}
                className="mt-6"
              >
                <dl className="grid grid-cols-2 gap-y-2 text-xs text-body-soft">
                  <Row k="পৃষ্ঠা" v={`${toBn(book.pages)}`} />
                  <Row k="ভাষা" v={book.language} />
                  <Row k="প্রকাশক" v={book.publisher} />
                  <Row k="ISBN" v={book.isbn} />
                </dl>
              </Card>
            </div>
          </div>

          {/* Tabs: Description / Q&A / Reviews */}
          <BookTabs book={book} />

          {/* Related products */}
          <RelatedBooks current={book} />
        </div>
      </main>
      <Footer />
    </>
  );
}

function Card({
  title,
  icon,
  children,
  className = "",
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-paper-300 bg-white p-5 shadow-card ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-gold-500/15 text-gold-600">
          {icon}
        </span>
        <h2 className="font-display text-base font-extrabold text-body">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <>
      <dt className="font-bold text-body">{k}</dt>
      <dd>{v}</dd>
    </>
  );
}

/* ─── Tabs: Description / Q&A / Reviews ─── */

const QA: { q: string; a: string }[] = [
  {
    q: "এই বইটি কোন ক্লাসের জন্য?",
    a: "বইটি SSC ও HSC শিক্ষার্থীদের জন্য উপযোগী। বিস্তারিত সিলেবাস উপরের 'বইয়ের তথ্য' অংশে দেওয়া আছে।",
  },
  {
    q: "ডেলিভারি কতদিনে পাব?",
    a: "ঢাকার ভেতরে ১-২ কর্মদিবস, ঢাকার বাইরে ৩-৫ কর্মদিবস। অফিস থেকে সংগ্রহ করতে পারেন একই দিনে।",
  },
  {
    q: "পেমেন্ট কীভাবে করব?",
    a: "Bkash, Nagad, Rocket, Card ও SurjoPay সাপোর্ট করি। ক্যাশ অন ডেলিভারিও available।",
  },
  {
    q: "রিটার্ন পলিসি কী?",
    a: "প্রোডাক্ট রিসিভের ৭ দিনের মধ্যে অক্ষত অবস্থায় রিটার্ন করতে পারবেন।",
  },
];

const REVIEWS = [
  {
    name: "তানভীর হাসান",
    rating: 5,
    date: "২ সপ্তাহ আগে",
    text: "অসাধারণ একটি বই। প্রতিটি কনসেপ্ট খুব পরিষ্কারভাবে লেখা। MCQ গুলোও ভালো।",
  },
  {
    name: "রাইসা জাহান",
    rating: 5,
    date: "১ মাস আগে",
    text: "প্রিন্টিং কোয়ালিটি দারুণ। কাগজও ভালো। স্যারের লেখা — তাই কনফিডেন্স পাওয়া যায়।",
  },
  {
    name: "মেহরাব হোসেন",
    rating: 4,
    date: "২ মাস আগে",
    text: "বইটা ভালো, তবে কিছু চ্যাপ্টারে আরো উদাহরণ থাকলে ভালো হতো।",
  },
];

function BookTabs({ book }: { book: Book }) {
  const [tab, setTab] = useState<"desc" | "qa" | "rev">("desc");
  return (
    <section className="mt-10 rounded-2xl border border-paper-300 bg-white shadow-card">
      <div className="flex gap-1 border-b border-paper-300 px-2 sm:px-4">
        {[
          { k: "desc", l: "Description" },
          { k: "qa", l: "Q & A" },
          { k: "rev", l: "Reviews" },
        ].map((t) => (
          <button
            key={t.k}
            onClick={() => setTab(t.k as typeof tab)}
            className={`relative px-4 py-3 text-sm font-bold transition ${
              tab === t.k ? "text-ink-500" : "text-body-soft hover:text-body"
            }`}
          >
            {t.l}
            {tab === t.k && (
              <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold-gradient" />
            )}
          </button>
        ))}
      </div>

      <div className="p-5 sm:p-6">
        {tab === "desc" && (
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-body-soft">
              {book.description}
            </p>

            <div>
              <h4 className="font-display text-sm font-extrabold text-body">
                মূল আকর্ষণ
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {book.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-body-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-extrabold text-body">
                সূচিপত্র
              </h4>
              <ol className="mt-3 grid gap-1.5 text-sm text-body-soft sm:grid-cols-2">
                {book.contents.map((c, i) => (
                  <li key={c} className="inline-flex items-center gap-2">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-paper-100 text-[10px] font-extrabold text-body">
                      {toBn(i + 1)}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {tab === "qa" && (
          <div className="space-y-2">
            {QA.map((q, i) => (
              <QAItem key={i} q={q.q} a={q.a} />
            ))}
          </div>
        )}

        {tab === "rev" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2 flex items-center gap-4 rounded-xl bg-paper-100 p-4">
              <div className="font-display text-4xl font-extrabold text-ink-500">
                {toBn(book.rating)}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(book.rating) ? "fill-current" : "opacity-30"}`}
                    />
                  ))}
                </div>
                <div className="text-xs font-semibold text-body-soft">
                  ৫০০+ রিভিউ
                </div>
              </div>
            </div>
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-paper-300 bg-paper-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-body">{r.name}</div>
                  <div className="text-[11px] text-body-muted">{r.date}</div>
                </div>
                <div className="mt-1 flex items-center gap-1 text-gold-500">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-body-soft">
                  “{r.text}”
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function QAItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-paper-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-paper-50"
      >
        <span className="inline-flex items-center gap-2 text-sm font-bold text-body">
          <MessageCircle className="h-4 w-4 text-gold-600" />
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-body-muted transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-paper-300 bg-paper-50 px-4 py-3 text-sm leading-relaxed text-body-soft">
          {a}
        </div>
      )}
    </div>
  );
}

function RelatedBooks({ current }: { current: Book }) {
  const others = BOOKS.filter((b) => b.id !== current.id).slice(0, 4);
  return (
    <section className="mt-10">
      <h2 className="mb-4 font-display text-2xl font-extrabold text-body">
        এই বইগুলোও দেখুন
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((b) => {
          const d = Math.round(((b.oldPrice - b.price) / b.oldPrice) * 100);
          return (
            <Link
              key={b.id}
              href={`/books/${b.id}`}
              className="group overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card transition hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
            >
              <div
                className={`relative grid aspect-[3/4] place-items-center bg-gradient-to-br ${b.cover}`}
              >
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute left-0 top-0 h-full w-2 bg-black/30" />
                <div className="relative px-3 text-center">
                  <div className="text-4xl drop-shadow">{b.emoji}</div>
                  <div className="mt-2 text-[10px] font-extrabold uppercase tracking-wider text-white/90 line-clamp-2">
                    {b.title}
                  </div>
                </div>
                <span className="absolute right-2 top-2 rounded-md bg-rose-500 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
                  -{toBn(d)}%
                </span>
              </div>
              <div className="p-3">
                <div className="line-clamp-2 font-display text-sm font-extrabold text-body">
                  {b.title}
                </div>
                <div className="mt-1 text-xs text-body-muted">{b.author}</div>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="font-display text-base font-extrabold text-ink-500">
                      ৳{toBn(b.price)}
                    </span>{" "}
                    <span className="text-[11px] text-body-muted line-through">
                      ৳{toBn(b.oldPrice)}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-body-muted transition group-hover:translate-x-0.5 group-hover:text-ink-500" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
