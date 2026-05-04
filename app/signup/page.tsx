"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  School,
  CalendarDays,
  Users as UsersIcon,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import AuthShell from "@/components/AuthShell";
import { cn } from "@/lib/utils";
import { useToast } from "@/lib/toast";

const HSC_BATCHES = ["HSC ২০২৬", "HSC ২০২৭", "HSC ২০২৮", "HSC ২০২৫", "HSC ২০২৪"];
const SSC_BATCHES = ["SSC ২০২৬", "SSC ২০২৭", "SSC ২০২৮", "SSC ২০২৫", "SSC ২০২৪"];

export default function SignupPage() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [college, setCollege] = useState("");
  const [hscBatch, setHscBatch] = useState("");
  const [sscBatch, setSscBatch] = useState("");
  const [phone, setPhone] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
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
      toast.error("তোমার পূর্ণ নাম দাও");
      return;
    }
    if (!/^[A-Za-z][A-Za-z .'-]*$/.test(name.trim())) {
      toast.error("নাম কেবল ইংরেজিতে লিখো");
      return;
    }
    if (!gender) {
      toast.error("লিঙ্গ সিলেক্ট করো");
      return;
    }
    if (college.trim().length < 2) {
      toast.error("তোমার কলেজের নাম লিখো");
      return;
    }
    if (!sscBatch) {
      toast.error("তোমার SSC Batch সিলেক্ট করো");
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(phone.trim())) {
      toast.error("সঠিক ১১-ডিজিটের মোবাইল নাম্বার দাও (01XXXXXXXXX)");
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(guardianPhone.trim())) {
      toast.error("অভিভাবকের সঠিক ১১-ডিজিটের ফোন নাম্বার দাও");
      return;
    }
    if (password.length < 6) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
      return;
    }
    if (password !== confirm) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না");
      return;
    }
    if (!agree) {
      toast.error("টার্মস ও কন্ডিশনে সম্মতি প্রয়োজন");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const { login: doLogin } = await import("@/lib/auth");
    doLogin({
      name,
      phone,
      gender,
      college,
      hscBatch,
      sscBatch,
      guardianPhone,
      role: "student",
    });
    setLoading(false);
    toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
    window.location.href = "/";
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  };

  return (
    <AuthShell
      brandTitle="চলো শুরু করি"
      brandHighlight="সফলতার গল্প"
      brandSub="মাত্র কয়েক সেকেন্ডে অ্যাকাউন্ট খুলে শুরু করো লাইভ ক্লাস, ফ্রি রিসোর্স ও মেন্টর সাপোর্ট।"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl border border-paper-300 bg-white/90 p-6 shadow-card backdrop-blur sm:p-8"
      >
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient shadow-glow-sm">
            <Sparkles className="h-5 w-5 text-ink-900" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-body sm:text-3xl">
              সাইন আপ <span className="text-ink-500">করুন</span>
            </h2>
            <p className="text-xs text-body-muted">
              আগে থেকেই অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/login"
                className="inline-flex items-center gap-1 rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-bold text-ink-600 transition hover:border-ink-400 hover:bg-ink-100 hover:text-ink-700"
              >
                লগইন করুন
              </Link>
            </p>
          </div>
        </div>

        <motion.form onSubmit={onSubmit} variants={container} initial="hidden" animate="show" className="space-y-5">
          {/* Section: Personal Info */}
          <SectionHeader icon={<User className="h-3.5 w-3.5" />} title="ব্যক্তিগত তথ্য" />

          <motion.div variants={item}>
            <Field label="তোমার নাম লিখো (English only)" icon={<User className="h-4 w-4" />}>
              <input
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value.replace(/[^A-Za-z .'-]/g, ""))}
                pattern="[A-Za-z][A-Za-z .'-]*"
                className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
                required
              />
            </Field>
          </motion.div>

          {/* Gender cards */}
          <motion.div variants={item}>
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-body-soft">
              তোমার লিঙ্গ সিলেক্ট করো
            </span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "male" as const, l: "ছেলে", emoji: "♂️" },
                { v: "female" as const, l: "মেয়ে", emoji: "♀️" },
              ].map((g) => (
                <button
                  key={g.v}
                  type="button"
                  onClick={() => setGender(g.v)}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition",
                    gender === g.v
                      ? "border-ink-500 bg-ink-500/5 text-ink-600 ring-1 ring-ink-500/20"
                      : "border-paper-300 bg-paper-50 text-body-soft hover:border-ink-500/30 hover:bg-white"
                  )}
                >
                  <span className="text-lg leading-none">{g.emoji}</span>
                  {g.l}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <Field label="তোমার কলেজ/স্কুলের নাম" icon={<School className="h-4 w-4" />}>
              <input
                type="text"
                placeholder="নাম লিখো"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
                required
              />
            </Field>
          </motion.div>

          {/* Section: Academic Info */}
          <div className="pt-2">
            <SectionHeader icon={<GraduationCap className="h-3.5 w-3.5" />} title="একাডেমিক তথ্য" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div variants={item}>
              <Field label="HSC Batch" icon={<GraduationCap className="h-4 w-4" />}>
                <div className="relative w-full">
                  <select
                    value={hscBatch}
                    onChange={(e) => setHscBatch(e.target.value)}
                    className="w-full appearance-none bg-transparent py-3 text-sm text-body focus:outline-none"
                  >
                    <option value="">Select</option>
                    {HSC_BATCHES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-body-muted" />
                </div>
              </Field>
            </motion.div>

            <motion.div variants={item}>
              <Field label={<>SSC Batch <span className="text-rose-500">*</span></>} icon={<CalendarDays className="h-4 w-4" />}>
                <div className="relative w-full">
                  <select
                    value={sscBatch}
                    onChange={(e) => setSscBatch(e.target.value)}
                    className="w-full appearance-none bg-transparent py-3 text-sm text-body focus:outline-none"
                    required
                  >
                    <option value="">Select</option>
                    {SSC_BATCHES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-body-muted" />
                </div>
              </Field>
            </motion.div>
          </div>

          {/* Section: Contact Info */}
          <div className="pt-2">
            <SectionHeader icon={<Phone className="h-3.5 w-3.5" />} title="যোগাযোগ তথ্য" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div variants={item}>
              <Field label="তোমার মোবাইল" icon={<Phone className="h-4 w-4" />} prefix="+৮৮০">
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="01XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
                  maxLength={11}
                  pattern="01[3-9][0-9]{8}"
                  className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
                  required
                />
              </Field>
            </motion.div>

            <motion.div variants={item}>
              <Field label="অভিভাবকের ফোন" icon={<UsersIcon className="h-4 w-4" />} prefix="+৮৮০">
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="01XXXXXXXXX"
                  value={guardianPhone}
                  onChange={(e) => setGuardianPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
                  maxLength={11}
                  pattern="01[3-9][0-9]{8}"
                  className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
                  required
                />
              </Field>
            </motion.div>
          </div>

          {/* Section: Security */}
          <div className="pt-2">
            <SectionHeader icon={<Lock className="h-3.5 w-3.5" />} title="নিরাপত্তা" />
          </div>

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
                autoComplete="new-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
                required
              />
            </Field>
          </motion.div>

          {password && (
            <motion.div variants={item} className="space-y-1.5">
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1.5 flex-1 rounded-full transition-colors duration-300",
                      i < passStrength.score ? passStrength.color : "bg-paper-300"
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-body-muted">
                <span>
                  শক্তি:{" "}
                  <span className={passStrength.text}>{passStrength.label}</span>
                </span>
                <span className="text-body-muted/70">{password.length} অক্ষর</span>
              </div>
            </motion.div>
          )}

          <motion.div variants={item}>
            <Field label="পাসওয়ার্ড কনফার্ম করো" icon={<Lock className="h-4 w-4" />}>
              <input
                type={show ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-transparent py-3 text-sm text-body placeholder:text-body-muted focus:outline-none"
                required
              />
            </Field>
          </motion.div>

          {confirm && password !== confirm && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-xs font-medium text-rose-500"
            >
              পাসওয়ার্ড মিলছে না
            </motion.p>
          )}

          {/* Terms */}
          <motion.label variants={item} className="flex cursor-pointer items-start gap-2.5 text-sm text-body-soft">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-paper-300 text-gold-500 focus:ring-gold-500/30"
            />
            <span className="leading-relaxed">
              আমি{" "}
              <Link href="/terms" className="font-bold text-ink-500 hover:text-ink-600 hover:underline">
                টার্মস এন্ড কন্ডিশন
              </Link>{" "}
              ও{" "}
              <Link href="/privacy" className="font-bold text-ink-500 hover:text-ink-600 hover:underline">
                প্রাইভেসি পলিসি
              </Link>
              -তে সম্মত
            </span>
          </motion.label>

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
                  অ্যাকাউন্ট খোলা হচ্ছে...
                </span>
              ) : (
                <>
                  সাইন আপ করুন
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
            তোমার তথ্য সম্পূর্ণ সুরক্ষিত
          </motion.div>
        </motion.form>
      </motion.div>
    </AuthShell>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 pb-1">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink-500/10 text-ink-500">
        {icon}
      </span>
      <span className="text-xs font-bold uppercase tracking-wider text-ink-500">{title}</span>
      <span className="ml-2 h-px flex-1 bg-paper-300" />
    </div>
  );
}

function Field({
  label,
  icon,
  prefix,
  right,
  children,
}: {
  label: React.ReactNode;
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
