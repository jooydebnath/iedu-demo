"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
} from "lucide-react";

type Props = {
  children: React.ReactNode;
  brandTitle: string;
  brandHighlight: string;
  brandSub: string;
};

export default function AuthShell({
  children,
  brandTitle,
  brandHighlight,
  brandSub,
}: Props) {
  return (
    <main className="relative min-h-screen bg-paper-100 text-body">
      {/* Top header */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient shadow-glow-sm">
              <GraduationCap
                className="h-6 w-6 text-ink-900"
                strokeWidth={2.5}
              />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight text-body">
                <span className="text-gold-600">i</span> Education
              </div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-body-muted">
                A Mark of Success
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-paper-300 bg-white/80 px-4 py-2 text-sm font-semibold text-body backdrop-blur transition hover:border-ink-500/40 hover:bg-white hover:text-ink-500"
          >
            ← হোমে ফিরুন
          </Link>
        </div>
      </header>

      <div className="grid min-h-screen lg:grid-cols-2 lg:h-screen lg:overflow-hidden">
        {/* Form panel */}
        <section className="relative grid place-items-center px-4 py-28 lg:overflow-y-auto lg:px-12">
          <div className="absolute inset-0 -z-10 bg-page-soft" />
          <div className="relative w-full max-w-md">
            {/* Decorative floating elements on form side */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gold-400/10 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-6 bottom-20 h-20 w-20 rounded-full bg-ink-500/10 blur-2xl"
            />
            {children}
          </div>
        </section>

        {/* Brand panel */}
        <aside className="relative hidden overflow-hidden bg-slide-purple lg:block lg:h-full">
          {/* Animated halos */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-gold-500/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-32 bottom-20 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl"
          />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

          {/* Floating particles */}
          <FloatingParticles />

          {/* castle silhouette */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-10"
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
          >
            <path
              d="M0 320h600v80H0z M40 320V220l30-20v-30h20v30l30 20v100z M150 320V180l40-25v-35h25v35l40 25v140z M280 320V230l35-22v-32h22v32l35 22v90z M400 320V200l45-28v-40h25v40l45 28v120z"
              fill="white"
            />
            <circle cx="120" cy="80" r="2" fill="#FFC107" opacity="0.7" />
            <circle cx="240" cy="50" r="1.5" fill="#FFC107" opacity="0.8" />
            <circle cx="380" cy="90" r="2" fill="#FFC107" opacity="0.6" />
            <circle cx="510" cy="60" r="1.5" fill="#FFC107" opacity="0.8" />
          </svg>

          <div className="relative flex h-full flex-col justify-center px-12 py-24 text-white xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20">
                  <BookOpen className="h-6 w-6 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white/90">i Education BD</div>
                  <div className="text-xs text-white/50">Online Learning Platform</div>
                </div>
              </div>

              <h1 className="mt-8 font-display text-4xl font-extrabold leading-tight xl:text-5xl">
                {brandTitle}{" "}
                <span className="text-gold-400">{brandHighlight}</span>
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                {brandSub}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["লাইভ ক্লাস", "রেকর্ডেড ভিডিও", "মেন্টর সাপোর্ট", "ফ্রি রিসোর্স"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

          </div>
        </aside>
      </div>
    </main>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: `${10 + (i * 7) % 80}%`,
    y: `${15 + (i * 13) % 70}%`,
    size: 2 + (i % 3) * 2,
    duration: 4 + (i % 4) * 2,
    delay: i * 0.5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-400"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
