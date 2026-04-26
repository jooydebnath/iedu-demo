"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Facebook,
  Chrome,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import AuthShell from "@/components/AuthShell";
import { cn } from "@/lib/utils";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const passStrength = strength(password);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("পূর্ণ নাম দিন");
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(phone.trim())) {
      setError("সঠিক ১১-ডিজিটের মোবাইল নাম্বার দিন (01XXXXXXXXX)");
      return;
    }
    if (password.length < 6) {
      setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
      return;
    }
    if (password !== confirm) {
      setError("পাসওয়ার্ড দুটি মিলছে না");
      return;
    }
    if (!agree) {
      setError("টার্মস ও কন্ডিশনে সম্মতি প্রয়োজন");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    window.location.href = "/profile";
  };

  return (
    <AuthShell
      brandTitle="চলো শুরু করি"
      brandHighlight="সফলতার গল্প"
      brandSub="মাত্র কয়েক সেকেন্ডে অ্যাকাউন্ট খুলে শুরু করো লাইভ ক্লাস, ফ্রি রিসোর্স ও মেন্টর সাপোর্ট।"
    >
      <div>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-body sm:text-4xl">
          অ্যাকাউন্ট <span className="text-ink-500">তৈরি করুন</span>
        </h2>
        <p className="mt-2 text-sm text-body-soft">
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/login"
            className="font-bold text-ink-500 hover:text-ink-600"
          >
            লগইন করুন
          </Link>
        </p>

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

        <div className="my-5 flex items-center gap-3 text-xs text-body-muted">
          <span className="h-px flex-1 bg-paper-300" />
          অথবা ফর্ম পূরণ করুন
          <span className="h-px flex-1 bg-paper-300" />
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <Field label="পূর্ণ নাম" icon={<User className="h-4 w-4" />}>
            <input
              type="text"
              autoComplete="name"
              placeholder="আপনার নাম"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
              required
            />
          </Field>

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
              autoComplete="new-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
              required
            />
          </Field>

          {/* Password strength meter */}
          {password && (
            <div className="space-y-1.5">
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors",
                      i < passStrength.score
                        ? passStrength.color
                        : "bg-paper-300"
                    )}
                  />
                ))}
              </div>
              <div className="text-[11px] font-semibold text-body-muted">
                পাসওয়ার্ডের শক্তি:{" "}
                <span className={passStrength.text}>{passStrength.label}</span>
              </div>
            </div>
          )}

          <Field
            label="পাসওয়ার্ড নিশ্চিত করুন"
            icon={<Lock className="h-4 w-4" />}
          >
            <input
              type={show ? "text" : "password"}
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
              required
            />
            {confirm && password === confirm && (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            )}
          </Field>

          <label className="flex cursor-pointer items-start gap-2 text-sm text-body-soft">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-paper-300 text-gold-500 focus:ring-gold-500"
            />
            <span>
              আমি{" "}
              <Link
                href="/terms"
                className="font-bold text-ink-500 hover:text-ink-600"
              >
                টার্মস এন্ড কন্ডিশন
              </Link>{" "}
              ও{" "}
              <Link
                href="/privacy"
                className="font-bold text-ink-500 hover:text-ink-600"
              >
                প্রাইভেসি পলিসি
              </Link>
              -তে সম্মত
            </span>
          </label>

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
            {loading ? "অ্যাকাউন্ট খোলা হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-xs text-body-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            তোমার তথ্য সম্পূর্ণ সুরক্ষিত
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

function strength(p: string) {
  let s = 0;
  if (p.length >= 6) s++;
  if (p.length >= 10) s++;
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++;
  if (/\d/.test(p) && /[^A-Za-z0-9]/.test(p)) s++;
  const map = [
    { label: "খুবই দুর্বল", color: "bg-rose-500", text: "text-rose-600" },
    { label: "দুর্বল", color: "bg-orange-500", text: "text-orange-600" },
    { label: "মাঝারি", color: "bg-amber-500", text: "text-amber-600" },
    { label: "শক্তিশালী", color: "bg-lime-500", text: "text-lime-600" },
    { label: "অত্যন্ত শক্তিশালী", color: "bg-emerald-500", text: "text-emerald-600" },
  ];
  return { score: s, ...map[s] };
}
