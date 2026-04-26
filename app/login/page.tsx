"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Facebook,
  Chrome,
  ShieldCheck,
} from "lucide-react";
import AuthShell from "@/components/AuthShell";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!/^01[3-9]\d{8}$/.test(phone.trim())) {
      setError("সঠিক ১১-ডিজিটের মোবাইল নাম্বার দিন (01XXXXXXXXX)");
      return;
    }
    if (password.length < 6) {
      setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
      return;
    }

    setLoading(true);
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);

    // Mock: redirect to /profile
    window.location.href = "/profile";
  };

  return (
    <AuthShell
      brandTitle="স্বাগতম! তোমার"
      brandHighlight="শেখার জার্নি"
      brandSub="লগইন করো আর কন্টিনিউ করো লাইভ ক্লাস, রেকর্ডিং, পরীক্ষা ও মেন্টর সাপোর্টসহ সবকিছু।"
    >
      <div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-body sm:text-4xl">
          লগইন <span className="text-ink-500">করুন</span>
        </h2>
        <p className="mt-2 text-sm text-body-soft">
          নতুন এখানে?{" "}
          <Link
            href="/signup"
            className="font-bold text-ink-500 hover:text-ink-600"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Link>
        </p>

        {/* Social */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-paper-300 bg-white px-4 py-2.5 text-sm font-semibold text-body transition hover:border-ink-500/40"
          >
            <Chrome className="h-4 w-4 text-rose-500" /> Google
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-paper-300 bg-white px-4 py-2.5 text-sm font-semibold text-body transition hover:border-ink-500/40"
          >
            <Facebook className="h-4 w-4 text-blue-600" /> Facebook
          </button>
        </div>

        <div className="my-6 flex items-center gap-3 text-xs text-body-muted">
          <span className="h-px flex-1 bg-paper-300" />
          অথবা মোবাইল দিয়ে লগইন
          <span className="h-px flex-1 bg-paper-300" />
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Phone */}
          <Field
            label="মোবাইল নাম্বার"
            icon={<Phone className="h-4 w-4" />}
            prefix="+৮৮০"
          >
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="01XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
              required
            />
          </Field>

          {/* Password */}
          <Field
            label="পাসওয়ার্ড"
            icon={<Lock className="h-4 w-4" />}
            right={
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="text-body-muted hover:text-ink-500"
                aria-label="Toggle password"
              >
                {show ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            }
          >
            <input
              type={show ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
              required
            />
          </Field>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex cursor-pointer items-center gap-2 text-body-soft">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-paper-300 text-gold-500 focus:ring-gold-500"
              />
              মনে রাখুন
            </label>
            <Link
              href="/forgot-password"
              className="font-semibold text-ink-500 hover:text-ink-600"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </Link>
          </div>

          {error && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm text-rose-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full !py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "লগইন হচ্ছে..." : "লগইন করুন"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-xs text-body-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            ১০০% সুরক্ষিত — তোমার ডেটা এনক্রিপ্টেড
          </div>
        </form>
      </div>
    </AuthShell>
  );
}

function Field({
  label,
  icon,
  prefix,
  right,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  prefix?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-body-soft">
        {label}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-paper-300 bg-white px-3.5 transition focus-within:border-ink-500/50 focus-within:ring-2 focus-within:ring-ink-500/10">
        <span className="text-body-muted">{icon}</span>
        {prefix && (
          <>
            <span className="text-sm font-semibold text-body-soft">
              {prefix}
            </span>
            <span className="h-5 w-px bg-paper-300" />
          </>
        )}
        {children}
        {right}
      </div>
    </label>
  );
}
