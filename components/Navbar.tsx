"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, LogIn, ChevronDown, Wallet, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { toBn } from "@/lib/utils";

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
  const { count } = useCart();

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
            <img
              src="/ieducationbd-logo.png"
              alt="iEducation BD"
              className="h-11 w-auto object-contain"
            />
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
              href="/checkout"
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-lg border border-paper-300 bg-white text-body transition hover:border-gold-500/60 hover:text-ink-500"
              style={{ borderRadius: 8 }}
            >
              <ShoppingCart className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-extrabold text-white ring-2 ring-white">
                  {toBn(count)}
                </span>
              )}
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-500"
              style={{ borderRadius: 8 }}
            >
              <LogIn className="h-4 w-4" /> লগইন
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center border border-paper-300 bg-white text-body lg:hidden"
              style={{ borderRadius: 8 }}
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
                  className="flex flex-1 items-center justify-center gap-1.5 bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white"
                  style={{ borderRadius: 8 }}
                >
                  <LogIn className="h-4 w-4" /> লগইন
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
