"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  Sparkles,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "./Sidebar";
import { cn } from "@/lib/utils";

const PAGE_TITLES: Record<string, { title: string; subtitle: string }> = {
  "/affiliate": {
    title: "ড্যাশবোর্ড",
    subtitle: "তোমার পারফরম্যান্স একনজরে",
  },
  "/affiliate/links": {
    title: "রেফারেল লিংক",
    subtitle: "ইউনিক লিংক তৈরি ও ম্যানেজ করো",
  },
  "/affiliate/earnings": {
    title: "আয় ও পেআউট",
    subtitle: "তোমার আয় ট্র্যাক করো ও উইথড্র করো",
  },
  "/affiliate/referrals": {
    title: "আমার রেফারেল",
    subtitle: "যাদেরকে রেফার করেছ তাদের তালিকা",
  },
  "/affiliate/analytics": {
    title: "এনালিটিক্স",
    subtitle: "বিস্তারিত পারফরম্যান্স মেট্রিক্স",
  },
  "/affiliate/materials": {
    title: "মার্কেটিং কিট",
    subtitle: "ব্যানার, ক্রিয়েটিভ ও টেমপ্লেট ডাউনলোড",
  },
  "/affiliate/settings": {
    title: "সেটিংস",
    subtitle: "প্রোফাইল ও পেআউট মেথড",
  },
};

export default function AffiliateTopbar({
  onOpenSidebar,
}: {
  onOpenSidebar?: () => void;
}) {
  const pathname = usePathname() ?? "/affiliate";
  const meta =
    PAGE_TITLES[pathname] ?? { title: "অ্যাফিলিয়েট", subtitle: "" };
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-paper-300 bg-white/85 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-4 py-3 lg:px-8">
        <button
          onClick={onOpenSidebar}
          className="grid h-10 w-10 place-items-center rounded-full border border-paper-300 bg-white text-body lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h1 className="font-display text-xl font-extrabold leading-tight text-body sm:text-2xl">
            {meta.title}
          </h1>
          <p className="hidden text-xs text-body-muted sm:block">
            {meta.subtitle}
          </p>
        </div>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-muted" />
          <input
            type="search"
            placeholder="খুঁজুন..."
            className="w-64 rounded-full border border-paper-300 bg-paper-100 py-2 pl-9 pr-4 text-sm text-body placeholder:text-body-muted focus:border-ink-500/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ink-500/10"
          />
        </div>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative grid h-10 w-10 place-items-center rounded-full border border-paper-300 bg-white text-body transition hover:border-ink-500/40 hover:text-ink-500"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen((p) => !p)}
            className="flex items-center gap-2.5 rounded-full border border-paper-300 bg-white py-1 pl-1 pr-3 transition hover:border-ink-500/40"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-xs font-extrabold text-white">
              তা
            </span>
            <span className="hidden flex-col items-start leading-tight sm:flex">
              <span className="text-xs font-bold text-body">
                তাসনিম রহমান
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gold-700">
                <Sparkles className="h-2.5 w-2.5" /> PRO Affiliate
              </span>
            </span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 text-body-muted transition",
                profileOpen && "rotate-180"
              )}
            />
          </button>

          {profileOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-60 overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card"
              onMouseLeave={() => setProfileOpen(false)}
            >
              <div className="bg-paper-100 px-4 py-3">
                <div className="text-sm font-bold text-body">
                  তাসনিম রহমান
                </div>
                <div className="text-xs text-body-muted">
                  +৮৮০ ১৭১২-৩৪৫৬৭৮
                </div>
              </div>
              <div className="py-1">
                <DropItem href="/profile" icon={User}>
                  স্টুডেন্ট প্রোফাইল
                </DropItem>
                <DropItem href="/affiliate/settings" icon={Settings}>
                  সেটিংস
                </DropItem>
              </div>
              <div className="border-t border-paper-300 py-1">
                <DropItem href="/login" icon={LogOut} danger>
                  লগআউট
                </DropItem>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sub-tab strip on small screens */}
      <div className="-mb-px flex gap-1 overflow-x-auto px-4 pb-2 lg:hidden">
        {NAV_ITEMS.map((it) => {
          const active = it.exact
            ? pathname === it.href
            : pathname.startsWith(it.href);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition",
                active
                  ? "bg-gold-gradient text-ink-900 shadow-glow-sm"
                  : "border border-paper-300 bg-white text-body-soft"
              )}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

function DropItem({
  href,
  icon: Icon,
  children,
  danger,
}: {
  href: string;
  icon: typeof Bell;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 px-4 py-2 text-sm font-semibold transition",
        danger
          ? "text-rose-600 hover:bg-rose-50"
          : "text-body hover:bg-paper-100"
      )}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );
}
