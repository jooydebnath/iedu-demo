"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen bg-paper-100 text-body overflow-hidden">
      <Navbar />

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 text-center">
        {/* Floating 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
            className="font-display text-[8rem] font-black leading-none text-ink-900/10 sm:text-[12rem] lg:text-[14rem]"
          >
            404
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gold-gradient shadow-glow-sm sm:h-28 sm:w-28">
              <GraduationCap className="h-12 w-12 text-ink-900 sm:h-14 sm:w-14" strokeWidth={2} />
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          className="mt-16 max-w-lg"
        >
          <h1 className="font-display text-3xl font-extrabold text-body sm:text-4xl">
            পেইজটি খুঁজে পাওয়া যায়নি!
          </h1>
          <p className="mt-3 text-base leading-relaxed text-body-muted">
            দুঃখিত, তুমি যে পেইজটি খুঁজছো সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা সঠিক ঠিকানা নয়।
            চলো, তোমাকে সঠিক পথে ফিরিয়ে আনি!
          </p>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-ink-500 hover:shadow-xl"
            >
              <Home className="h-4 w-4" />
              হোমে ফিরুন
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-paper-300 bg-white px-6 py-3 text-sm font-bold text-body shadow-card transition hover:border-gold-500/60 hover:bg-paper-50"
            >
              <Search className="h-4 w-4" />
              কোর্স খুঁজুন
            </Link>
          </motion.div>

          {/* Back suggestion */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => window.history.back()}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 transition hover:text-ink-600"
          >
            <ArrowLeft className="h-4 w-4" />
            আগের পেইজে ফিরুন
          </motion.button>
        </motion.div>

        {/* Helpful links section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" as const }}
          className="mt-16 grid w-full max-w-2xl gap-4 sm:grid-cols-3"
        >
          {[
            { label: "কোর্সসমূহ", href: "/#courses", desc: "সব কোর্স দেখুন" },
            { label: "বইসমূহ", href: "/#books", desc: "সব বই দেখুন" },
            { label: "যোগাযোগ", href: "/#contact", desc: "আমাদের সাথে যোগাযোগ করুন" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group rounded-2xl border border-paper-300 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-card-hover"
            >
              <div className="text-sm font-bold text-body group-hover:text-ink-500">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-body-muted">{item.desc}</div>
            </Link>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
