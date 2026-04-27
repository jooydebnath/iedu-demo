"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  Users,
  Award,
  GraduationCap,
  PlayCircle,
  BookOpen,
  Clock,
  ArrowLeft,
  Mail,
  MessageCircle,
  Facebook,
  Linkedin,
  Youtube,
  CheckCircle2,
  Quote,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toBn } from "@/lib/utils";

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
  bio: string;
  experience: number;
  classes: number;
  courses: { id: string; title: string; students: number; rating: number }[];
  expertise: string[];
  achievements: string[];
  social: { facebook?: string; linkedin?: string; youtube?: string };
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
    bio:
      "১৫ বছরেরও বেশি সময় ধরে ছাত্রদের পদার্থবিজ্ঞান শেখাচ্ছি। জটিল কনসেপ্টকে সহজভাবে বোঝানোই আমার বিশেষত্ব। লক্ষ্য — প্রতিটি ছাত্রকে নিজের সর্বোচ্চটা দিতে অনুপ্রাণিত করা।",
    experience: 15,
    classes: 1200,
    courses: [
      { id: "fbc-hsc26", title: "HSC FBC ২৬ — পদার্থবিজ্ঞান", students: 9800, rating: 4.9 },
      { id: "2nd-engineer", title: "Engineering 2nd Time", students: 2800, rating: 4.8 },
    ],
    expertise: ["মেকানিক্স", "ইলেকট্রোডায়নামিক্স", "মডার্ন ফিজিক্স", "MCQ স্ট্র্যাটেজি"],
    achievements: [
      "PhD in Physics — University of Tokyo",
      "১৮,০০০+ স্টুডেন্টকে গাইড করেছেন",
      "জাতীয় শিক্ষক পুরস্কার ২০২২",
      "১২০+ গবেষণাপত্র প্রকাশিত",
    ],
    social: { facebook: "#", linkedin: "#", youtube: "#" },
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
    bio: "মেডিকেল অ্যাডমিশনে চান্স পাওয়ার জন্য জীববিজ্ঞান অপরিহার্য। ১২ বছরের অভিজ্ঞতায় হাজারো ছাত্রকে মেডিকেলে চান্স পেতে সাহায্য করেছি।",
    experience: 12,
    classes: 980,
    courses: [
      { id: "2nd-medical", title: "Medical 2nd Time", students: 3200, rating: 4.9 },
      { id: "fbc-hsc26", title: "HSC FBC ২৬ — Biology", students: 9800, rating: 4.8 },
    ],
    expertise: ["সেল বায়োলজি", "জেনেটিক্স", "অ্যানাটমি", "মেডিকেল MCQ"],
    achievements: ["MBBS — DMC", "৩,০০০+ মেডিকেল চান্স", "বেস্ট মেন্টর ২০২৩"],
    social: { facebook: "#", youtube: "#" },
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
    bio: "BUET থেকে পাশ করার পর ভর্তি প্রস্তুতির ছাত্রদের গণিত ও ICT পড়ানোতেই মনোনিবেশ করেছি। সমস্যা সলভিং-ই আমার প্যাশন।",
    experience: 10,
    classes: 1450,
    courses: [
      { id: "2nd-engineer", title: "Engineering 2nd Time", students: 2800, rating: 4.8 },
      { id: "fbc-ssc26", title: "SSC FBC ২৬ — Math", students: 12500, rating: 4.9 },
    ],
    expertise: ["ক্যালকুলাস", "অ্যালজেব্রা", "প্রোগ্রামিং", "ডেটাবেস"],
    achievements: ["BUET CSE", "১৫০০+ BUET/KUET/RUET admit", "Coder ranked top 100 (Codeforces)"],
    social: { facebook: "#", linkedin: "#" },
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
    bio: "রসায়নের রিঅ্যাকশন আর কনসেপ্ট সহজে বোঝানোর জন্য বাস্তবিক উদাহরণই সেরা পদ্ধতি। ১৪ বছরের অভিজ্ঞতা।",
    experience: 14,
    classes: 1100,
    courses: [
      { id: "fbc-hsc26", title: "HSC FBC ২৬ — Chemistry", students: 9800, rating: 4.9 },
      { id: "2nd-medical", title: "Medical 2nd Time", students: 3200, rating: 4.9 },
    ],
    expertise: ["অর্গানিক", "ইনঅর্গানিক", "ফিজিকাল কেমিস্ট্রি"],
    achievements: ["PhD — University of Dhaka", "৮০+ গবেষণাপত্র"],
    social: { linkedin: "#" },
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
    bio: "Spoken English আর গ্রামার দুটোতেই ছাত্রদের ভয় কাটানো আমার মিশন। কথা বলার মাধ্যমেই শেখা — এই নীতিতে বিশ্বাসী।",
    experience: 8,
    classes: 720,
    courses: [
      { id: "spc-english", title: "Spoken English Pro", students: 8400, rating: 4.9 },
    ],
    expertise: ["Spoken English", "Grammar", "IELTS Speaking"],
    achievements: ["MA in English — DU", "IELTS 8.5", "TEDx Speaker"],
    social: { facebook: "#", youtube: "#", linkedin: "#" },
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
    bio: "বাংলা সাহিত্য আর ব্যাকরণকে ভালোবাসায় রূপান্তর করাই আমার লক্ষ্য। প্রতিটি ক্লাসে গল্প আর উদাহরণে ছাত্রদের যুক্ত করি।",
    experience: 6,
    classes: 540,
    courses: [
      { id: "fbc-ssc26", title: "SSC FBC ২৬ — বাংলা", students: 12500, rating: 4.7 },
    ],
    expertise: ["বাংলা ব্যাকরণ", "সাহিত্য", "রচনা"],
    achievements: ["MA in Bangla — JU", "জাতীয় কবিতা পুরস্কার"],
    social: { facebook: "#" },
  },
];

const REVIEWS = [
  { name: "তানভীর হাসান", quote: "স্যারের ক্লাস না থাকলে আমি BUET এ চান্স পেতাম না। প্রতিটি কনসেপ্ট খুব পরিষ্কারভাবে বুঝিয়েছেন।", rating: 5 },
  { name: "রাইসা জাহান", quote: "এত সুন্দর গাইডলাইন আগে কখনো পাইনি। লাইভ ডাউট সলভ সেশন সবচেয়ে হেল্পফুল।", rating: 5 },
  { name: "মেহরাব হোসেন", quote: "ম্যাডামের পড়ানোর স্টাইল অসাধারণ। কঠিন টপিক‌ও সহজ লাগে।", rating: 5 },
];

export default function TeacherProfilePage() {
  const params = useParams();
  const id = params?.id as string;
  const teacher = TEACHERS.find((t) => t.id === id);

  if (!teacher) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper-100 pb-16">
        {/* Hero */}
        <section
          className={`relative overflow-hidden bg-gradient-to-br ${teacher.imgGrad}`}
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-black/30 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-4 py-10 lg:px-8 lg:py-14">
            <Link
              href="/#teachers"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-bold text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> সকল শিক্ষক
            </Link>

            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:text-left">
              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl" />
                <div className="relative grid h-32 w-32 place-items-center rounded-full bg-white/15 ring-4 ring-white/40 shadow-card sm:h-40 sm:w-40">
                  <span className="font-display text-5xl font-extrabold text-white sm:text-6xl">
                    {teacher.initials}
                  </span>
                </div>
                {teacher.badge && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-extrabold text-ink-900 shadow-glow-sm">
                    {teacher.badge}
                  </span>
                )}
              </div>

              {/* Identity */}
              <div className="flex-1">
                <h1 className="font-display text-3xl font-extrabold text-white drop-shadow sm:text-4xl lg:text-5xl">
                  {teacher.name}
                </h1>
                <p className="mt-1 text-sm font-semibold text-white/85 sm:text-base">
                  {teacher.designation}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25 backdrop-blur">
                  <BookOpen className="h-3.5 w-3.5" />
                  {teacher.subject}
                </span>

                {/* Social */}
                <div className="mt-4 flex justify-center gap-2 sm:justify-start">
                  {teacher.social.facebook && (
                    <SocialIcon href={teacher.social.facebook}>
                      <Facebook className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {teacher.social.linkedin && (
                    <SocialIcon href={teacher.social.linkedin}>
                      <Linkedin className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  {teacher.social.youtube && (
                    <SocialIcon href={teacher.social.youtube}>
                      <Youtube className="h-4 w-4" />
                    </SocialIcon>
                  )}
                  <a
                    href="#"
                    className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 text-xs font-extrabold text-ink-900 shadow-glow-sm transition hover:scale-105"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> মেসেজ পাঠান
                  </a>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat
                icon={<Users className="h-4 w-4" />}
                value={`${toBn(Math.floor(teacher.students / 1000))}K+`}
                label="স্টুডেন্ট"
              />
              <Stat
                icon={<Star className="h-4 w-4 fill-current" />}
                value={toBn(teacher.rating)}
                label="রেটিং"
              />
              <Stat
                icon={<Clock className="h-4 w-4" />}
                value={`${toBn(teacher.experience)}+ বছর`}
                label="অভিজ্ঞতা"
              />
              <Stat
                icon={<PlayCircle className="h-4 w-4" />}
                value={`${toBn(teacher.classes)}+`}
                label="ক্লাস"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto mt-10 grid max-w-[1440px] gap-8 px-4 lg:grid-cols-3 lg:px-8">
          {/* Left: Bio + courses + reviews */}
          <div className="space-y-6 lg:col-span-2">
            {/* About */}
            <Card title="পরিচিতি" icon={<GraduationCap className="h-5 w-5" />}>
              <p className="text-sm leading-relaxed text-body-soft">
                {teacher.bio}
              </p>
            </Card>

            {/* Courses */}
            <Card
              title="যে কোর্সগুলো পড়ান"
              icon={<BookOpen className="h-5 w-5" />}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {teacher.courses.map((c) => (
                  <Link
                    key={c.id}
                    href={`/courses/${c.id}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-paper-300 bg-paper-50 p-4 transition hover:-translate-y-0.5 hover:border-gold-500/40 hover:bg-white hover:shadow-card"
                  >
                    <div className="min-w-0">
                      <div className="truncate font-display text-sm font-extrabold text-body group-hover:text-ink-500">
                        {c.title}
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-[11px] text-body-muted">
                        <span className="inline-flex items-center gap-1">
                          <Users className="h-3 w-3 text-gold-600" />
                          {toBn(Math.floor(c.students / 1000))}K+
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3 w-3 fill-gold-500 text-gold-500" />
                          {toBn(c.rating)}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-body-muted transition group-hover:translate-x-0.5 group-hover:text-ink-500" />
                  </Link>
                ))}
              </div>
            </Card>

            {/* Reviews */}
            <Card
              title="শিক্ষার্থীদের মতামত"
              icon={<Quote className="h-5 w-5" />}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {REVIEWS.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-xl border border-paper-300 bg-paper-50 p-4"
                  >
                    <div className="flex items-center gap-1 text-gold-500">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-body-soft">
                      “{r.quote}”
                    </p>
                    <div className="mt-3 text-[11px] font-bold text-body">
                      — {r.name}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: sidebar */}
          <aside className="space-y-6">
            <Card
              title="বিশেষজ্ঞতা"
              icon={<Award className="h-5 w-5" />}
            >
              <div className="flex flex-wrap gap-2">
                {teacher.expertise.map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-1 rounded-full border border-paper-300 bg-paper-50 px-3 py-1 text-[11px] font-bold text-body-soft"
                  >
                    <CheckCircle2 className="h-3 w-3 text-gold-600" />
                    {e}
                  </span>
                ))}
              </div>
            </Card>

            <Card
              title="অর্জন"
              icon={<Star className="h-5 w-5" />}
            >
              <ul className="space-y-2.5">
                {teacher.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2 text-xs text-body-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-4 py-3 font-display text-sm font-extrabold text-ink-900 shadow-glow-sm transition hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" /> যোগাযোগ করুন
            </a>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/15 px-4 py-3 ring-1 ring-white/20 backdrop-blur">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/20 text-gold-300">
        {icon}
      </span>
      <div>
        <div className="font-display text-base font-extrabold text-white sm:text-lg">
          {value}
        </div>
        <div className="text-[11px] text-white/75">{label}</div>
      </div>
    </div>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-paper-300 bg-white p-5 shadow-card sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold-500/15 text-gold-600">
          {icon}
        </span>
        <h2 className="font-display text-lg font-extrabold text-body">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/25"
    >
      {children}
    </a>
  );
}
