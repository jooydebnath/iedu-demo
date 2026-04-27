"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  FlaskConical,
  Calculator,
  BookText,
  Languages,
  Sigma,
  Cpu,
  Sparkles,
  Dna,
  Microscope,
  Brain,
  Leaf,
  Globe2,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

type Subject = { icon: LucideIcon; label: string; color: string };

const CLASSES: { key: string; label: string; tag: string }[] = [
  { key: "hsc26", label: "HSC 26", tag: "একাদশ-দ্বাদশ" },
  { key: "hsc27", label: "HSC 27", tag: "একাদশ-দ্বাদশ" },
  { key: "ssc26", label: "SSC 26", tag: "নবম-দশম" },
  { key: "ssc27", label: "SSC 27", tag: "নবম-দশম" },
  { key: "class8", label: "অষ্টম শ্রেণি", tag: "জুনিয়র" },
  { key: "admission", label: "অ্যাডমিশন", tag: "বিশ্ববিদ্যালয়" },
];

const SUBJECTS_BY_CLASS: Record<string, Subject[]> = {
  hsc26: [
    { icon: Atom, label: "পদার্থবিজ্ঞান", color: "from-blue-500 to-indigo-500" },
    { icon: FlaskConical, label: "রসায়ন", color: "from-emerald-500 to-teal-500" },
    { icon: Calculator, label: "উচ্চতর গণিত", color: "from-pink-500 to-rose-500" },
    { icon: Dna, label: "জীববিজ্ঞান", color: "from-amber-500 to-orange-500" },
    { icon: BookText, label: "বাংলা", color: "from-fuchsia-500 to-purple-500" },
    { icon: Languages, label: "ইংরেজি", color: "from-cyan-500 to-sky-500" },
  ],
  hsc27: [
    { icon: Atom, label: "পদার্থবিজ্ঞান", color: "from-blue-500 to-indigo-500" },
    { icon: FlaskConical, label: "রসায়ন", color: "from-emerald-500 to-teal-500" },
    { icon: Sigma, label: "উচ্চতর গণিত", color: "from-pink-500 to-rose-500" },
    { icon: Dna, label: "জীববিজ্ঞান", color: "from-amber-500 to-orange-500" },
    { icon: BookText, label: "বাংলা", color: "from-fuchsia-500 to-purple-500" },
    { icon: Languages, label: "ইংরেজি", color: "from-cyan-500 to-sky-500" },
  ],
  ssc26: [
    { icon: Calculator, label: "সাধারণ গণিত", color: "from-pink-500 to-rose-500" },
    { icon: Atom, label: "পদার্থবিজ্ঞান", color: "from-blue-500 to-indigo-500" },
    { icon: FlaskConical, label: "রসায়ন", color: "from-emerald-500 to-teal-500" },
    { icon: Leaf, label: "জীববিজ্ঞান", color: "from-amber-500 to-orange-500" },
    { icon: BookText, label: "বাংলা", color: "from-fuchsia-500 to-purple-500" },
    { icon: Languages, label: "ইংরেজি", color: "from-cyan-500 to-sky-500" },
  ],
  ssc27: [
    { icon: Calculator, label: "সাধারণ গণিত", color: "from-pink-500 to-rose-500" },
    { icon: Atom, label: "পদার্থবিজ্ঞান", color: "from-blue-500 to-indigo-500" },
    { icon: FlaskConical, label: "রসায়ন", color: "from-emerald-500 to-teal-500" },
    { icon: BookText, label: "বাংলা", color: "from-fuchsia-500 to-purple-500" },
    { icon: Languages, label: "ইংরেজি", color: "from-cyan-500 to-sky-500" },
    { icon: Cpu, label: "ICT", color: "from-violet-500 to-purple-500" },
  ],
  class8: [
    { icon: Calculator, label: "গণিত", color: "from-pink-500 to-rose-500" },
    { icon: Microscope, label: "বিজ্ঞান", color: "from-emerald-500 to-teal-500" },
    { icon: BookText, label: "বাংলা", color: "from-fuchsia-500 to-purple-500" },
    { icon: Languages, label: "ইংরেজি", color: "from-cyan-500 to-sky-500" },
    { icon: Globe2, label: "বাংলাদেশ ও বিশ্বপরিচয়", color: "from-amber-500 to-orange-500" },
    { icon: Cpu, label: "ICT", color: "from-violet-500 to-purple-500" },
  ],
  admission: [
    { icon: Atom, label: "পদার্থবিজ্ঞান", color: "from-blue-500 to-indigo-500" },
    { icon: FlaskConical, label: "রসায়ন", color: "from-emerald-500 to-teal-500" },
    { icon: Sigma, label: "গণিত", color: "from-pink-500 to-rose-500" },
    { icon: Dna, label: "জীববিজ্ঞান", color: "from-amber-500 to-orange-500" },
    { icon: Languages, label: "ইংরেজি", color: "from-cyan-500 to-sky-500" },
    { icon: Brain, label: "GK / সাধারণ জ্ঞান", color: "from-fuchsia-500 to-purple-500" },
  ],
};

export default function Features() {
  const [active, setActive] = useState<string>(CLASSES[0].key);
  const subjects = SUBJECTS_BY_CLASS[active] ?? [];
  const activeMeta = CLASSES.find((c) => c.key === active);

  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-2 lg:px-4">
        <SectionTitle
          title="যে বিষয়গুলো পড়াবো"
          subtitle="প্রতিটি বিষয়ে এক্সপার্ট শিক্ষক, ইন্টারঅ্যাক্টিভ লাইভ ক্লাস ও পরীক্ষা"
        />

        {/* Class buttons */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CLASSES.map((c) => {
            const isActive = c.key === active;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={
                  "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition " +
                  (isActive
                    ? "border-transparent bg-ink-900 text-white shadow-glow-sm"
                    : "border-paper-300 bg-white text-body hover:border-gold-500/50 hover:text-ink-900")
                }
              >
                {isActive && <Sparkles className="h-3.5 w-3.5 text-gold-400" />}
                <span>{c.label}</span>
                <span
                  className={
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold " +
                    (isActive
                      ? "bg-gold-500/20 text-gold-300"
                      : "bg-paper-100 text-body-muted")
                  }
                >
                  {c.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Subjects panel */}
        <div className="rounded-3xl border border-paper-300 bg-white/70 p-4 shadow-card backdrop-blur sm:p-6">
          {activeMeta && (
            <div className="mb-4 flex items-center justify-between px-1">
              <div className="text-sm font-semibold text-body-muted">
                <span className="text-gold-700">{activeMeta.label}</span>{" "}
                <span className="text-body-muted">·</span>{" "}
                <span>{activeMeta.tag} এর বিষয়সমূহ</span>
              </div>
              <span className="rounded-full bg-paper-100 px-3 py-1 text-[11px] font-bold text-body">
                {subjects.length} টি বিষয়
              </span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {subjects.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-paper-300 bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
              >
                <div
                  className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${color} opacity-25 blur-2xl transition-opacity group-hover:opacity-50`}
                />
                <div
                  className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <div className="relative mt-3 text-sm font-bold text-body">
                  {label}
                </div>
                <div className="relative mt-0.5 text-[11px] font-medium text-body-muted">
                  ফ্রি ক্লাস
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
