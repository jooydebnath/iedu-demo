"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { login as doLogin } from "@/lib/auth";
import { useToast } from "@/lib/toast";
import {
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import AuthShell from "@/components/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell
      brandTitle="স্বাগতম! তোমার"
      brandHighlight="শেখার জার্নি"
      brandSub="লগইন করো আর কন্টিনিউ করো লাইভ ক্লাস, রেকর্ডিং, পরীক্ষা ও মেন্টর সাপোর্টসহ সবকিছু।"
    >
      <Suspense fallback={<LoginSkeleton />}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}

function LoginSkeleton() {
  return (
    <div className="animate-pulse space-y-4 rounded-2xl border border-paper-300 bg-white p-8 shadow-card">
      <div className="h-8 w-32 rounded-lg bg-paper-200" />
      <div className="h-4 w-48 rounded bg-paper-200" />
      <div className="h-12 rounded-xl bg-paper-200" />
      <div className="h-12 rounded-xl bg-paper-200" />
      <div className="h-12 rounded-full bg-paper-300" />
    </div>
  );
}

function LoginForm() {
  const router = useRouter();
  const sp = useSearchParams();
  const from = sp.get("from") || "/";
  const toast = useToast();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!phone.trim()) {
      setError("মোবাইল নাম্বার দিন");
      return;
    }
    if (!password.trim()) {
      setError("পাসওয়ার্ড দিন");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    doLogin({ phone, role: "student" });
    setLoading(false);
    toast.success("সফলভাবে লগইন হয়েছে!");
    router.replace(from);
    router.refresh();
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-paper-300 bg-white/90 p-6 shadow-card backdrop-blur sm:p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient shadow-glow-sm">
          <Sparkles className="h-5 w-5 text-ink-900" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
            লগইন <span className="text-ink-500">করুন</span>
          </h2>
          <p className="text-xs text-body-muted">
            নতুন এখানে?{" "}
            <Link
              href="/signup"
              className="inline-flex items-center gap-1 rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-bold text-ink-600 transition hover:border-ink-400 hover:bg-ink-100 hover:text-ink-700"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Link>
          </p>
        </div>
      </div>

      <motion.form
        onSubmit={onSubmit}
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <motion.div variants={item}>
          <Field label="মোবাইল নাম্বার" icon={<Phone className="h-4 w-4" />} prefix="+৮৮০">
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="01XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
              className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
              required
            />
          </Field>
        </motion.div>

        <motion.div variants={item}>
          <Field
            label="পাসওয়ার্ড"
            icon={<Lock className="h-4 w-4" />}
            right={
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="text-body-muted transition hover:text-ink-500"
                aria-label="Toggle password"
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-between text-sm"
        >
          <label className="inline-flex cursor-pointer items-center gap-2 text-body-soft transition hover:text-body">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-paper-300 text-gold-500 focus:ring-gold-500/30"
            />
            মনে রাখুন
          </label>
          <Link
            href="/forgot-password"
            className="font-semibold text-ink-500 transition hover:text-ink-600 hover:underline"
          >
            পাসওয়ার্ড ভুলে গেছেন?
          </Link>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-700"
          >
            {error}
          </motion.div>
        )}

        <motion.div variants={item}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="btn-gold w-full !py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
                লগইন হচ্ছে...
              </span>
            ) : (
              <>
                লগইন করুন
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-1.5 text-xs text-body-muted"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          ১০০% সুরক্ষিত — তোমার ডেটা এনক্রিপ্টেড
        </motion.div>
      </motion.form>
    </motion.div>
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
      <div className="flex items-center gap-2 rounded-xl border border-paper-300 bg-paper-50 px-3.5 transition focus-within:border-ink-500/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-ink-500/10 focus-within:shadow-sm">
        <span className="text-body-muted">{icon}</span>
        {prefix && (
          <>
            <span className="text-sm font-semibold text-body-soft">{prefix}</span>
            <span className="h-5 w-px bg-paper-300" />
          </>
        )}
        {children}
        {right}
      </div>
    </label>
  );
}
