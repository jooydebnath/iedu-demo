"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, LogIn, ChevronDown, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "হোম", href: "/" },
  { label: "কোর্সসমূহ", href: "/#courses", hasMenu: true },
  { label: "বইসমূহ", href: "/#books" },
  { label: "ফ্রি রিসোর্স", href: "/#free" },
  { label: "শিক্ষকবৃন্দ", href: "/#teachers" },
  {
    label: "অ্যাফিলিয়েট",
    href: "/affiliation",
    isAffiliate: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top promo strip */}
      <div className="relative z-40 overflow-hidden bg-gold-gradient text-ink-900">
        <div className="flex animate-marquee whitespace-nowrap py-1.5 text-xs font-semibold sm:text-sm">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-4">
              <span>🎓 SSC FBC ২৬ এ ভর্তি চলছে — ৪০% ছাড়</span>
              <span>•</span>
              <span>📚 HSC ২৬ Pre-Admission Science Course</span>
              <span>•</span>
              <span>🚀 ফ্রি ক্লাস শুরু — আজই জয়েন করুন</span>
              <span>•</span>
              <span>💡 দেশের সেরা শিক্ষকদের সাথে শিখুন</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-paper-300 bg-white/85 shadow-card backdrop-blur-xl"
            : "bg-paper-100/60 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient shadow-glow-sm">
              <GraduationCap className="h-6 w-6 text-ink-900" strokeWidth={2.5} />
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  "group relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition",
                  l.isAffiliate
                    ? "text-gold-700 hover:text-gold-600"
                    : "text-body/80 hover:text-ink-500"
                )}
              >
                {l.isAffiliate && <Wallet className="h-3.5 w-3.5" />}
                {l.label}
                {l.hasMenu && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                )}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-gradient transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden items-center gap-1.5 rounded-full border border-paper-300 bg-white px-4 py-2 text-sm font-medium text-body transition hover:border-ink-500/50 hover:text-ink-500 sm:inline-flex"
            >
              <LogIn className="h-4 w-4" /> লগইন
            </Link>
            <Link href="/signup" className="btn-gold !py-2 !px-4 text-sm hidden sm:inline-flex">
              সাইন আপ
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-paper-300 bg-white text-body lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-paper-300 bg-white px-4 py-4 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-paper-100",
                    l.isAffiliate
                      ? "text-gold-700"
                      : "text-body hover:text-ink-500"
                  )}
                >
                  {l.isAffiliate && <Wallet className="h-4 w-4" />}
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 flex gap-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="btn-ghost flex-1"
                >
                  <LogIn className="h-4 w-4" /> লগইন
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="btn-gold flex-1 !py-2.5"
                >
                  সাইন আপ
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
