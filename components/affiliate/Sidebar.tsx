"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Link2,
  Wallet,
  Users,
  BarChart3,
  Image as ImageIcon,
  Settings,
  LogOut,
  GraduationCap,
  HelpCircle,
  Crown,
  X,
} from "lucide-react";
import { cn, toBn } from "@/lib/utils";

export const NAV_ITEMS = [
  { label: "ড্যাশবোর্ড", href: "/affiliate", icon: LayoutDashboard, exact: true },
  { label: "রেফারেল লিংক", href: "/affiliate/links", icon: Link2 },
  { label: "আয় ও পেআউট", href: "/affiliate/earnings", icon: Wallet },
  { label: "আমার রেফারেল", href: "/affiliate/referrals", icon: Users },
  { label: "এনালিটিক্স", href: "/affiliate/analytics", icon: BarChart3 },
  { label: "মার্কেটিং কিট", href: "/affiliate/materials", icon: ImageIcon },
  { label: "সেটিংস", href: "/affiliate/settings", icon: Settings },
];

export default function AffiliateSidebar({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white border-r border-paper-300 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header / Logo */}
        <div className="flex items-center justify-between border-b border-paper-300 px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient shadow-glow-sm">
              <GraduationCap
                className="h-6 w-6 text-ink-900"
                strokeWidth={2.5}
              />
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold tracking-tight text-body">
                <span className="text-gold-600">i</span> Education
              </div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-body-muted">
                Affiliate Panel
              </div>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-paper-100 text-body lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tier card */}
        <div className="px-5 pt-5">
          <div className="relative overflow-hidden rounded-2xl bg-slide-purple p-4 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/20 blur-2xl" />
            <div className="relative flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink-900 shadow-glow-sm">
                <Crown className="h-3 w-3 fill-current" /> PRO
              </span>
              <span className="text-[10px] font-bold text-white/60">
                {toBn(35)}% RATE
              </span>
            </div>
            <div className="relative mt-3 font-display text-2xl font-extrabold text-gold-400">
              ৳{toBn(48750)}
            </div>
            <div className="text-[11px] font-medium text-white/70">
              এই মাসের আয়
            </div>

            {/* Progress to Elite */}
            <div className="relative mt-4">
              <div className="flex items-center justify-between text-[10px] font-bold text-white/70">
                <span>Elite এর দিকে</span>
                <span>{toBn(78)}%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-gold-gradient"
                  style={{ width: "78%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-body-muted">
            মেন্যু
          </div>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = item.exact
                ? pathname === item.href
                : pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition",
                      active
                        ? "bg-gold-gradient text-ink-900 shadow-glow-sm"
                        : "text-body-soft hover:bg-paper-100 hover:text-body"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                    {active && (
                      <span className="absolute right-3 h-1.5 w-1.5 rounded-full bg-ink-900" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-paper-300 px-3 py-3">
          <Link
            href="/affiliate/help"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-body-soft hover:bg-paper-100 hover:text-body"
          >
            <HelpCircle className="h-4 w-4" /> সহায়তা
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50"
          >
            <LogOut className="h-4 w-4" /> লগআউট
          </Link>
        </div>
      </aside>
    </>
  );
}
