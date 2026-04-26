"use client";

import { Atom, FlaskConical, Calculator, BookText, Languages, Sigma } from "lucide-react";
import SectionTitle from "./SectionTitle";

const FEATURES = [
  { icon: Atom, label: "পদার্থবিজ্ঞান", color: "from-blue-500 to-indigo-500" },
  { icon: FlaskConical, label: "রসায়ন", color: "from-emerald-500 to-teal-500" },
  { icon: Calculator, label: "উচ্চতর গণিত", color: "from-pink-500 to-rose-500" },
  { icon: Sigma, label: "জীববিজ্ঞান", color: "from-amber-500 to-orange-500" },
  { icon: BookText, label: "বাংলা", color: "from-fuchsia-500 to-purple-500" },
  { icon: Languages, label: "ইংরেজি", color: "from-cyan-500 to-sky-500" },
];

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="ফ্রি ট্রায়াল"
          title="যে বিষয়গুলো পড়াবো"
          subtitle="প্রতিটি বিষয়ে এক্সপার্ট শিক্ষক, ইন্টারঅ্যাক্টিভ লাইভ ক্লাস ও পরীক্ষা"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-paper-300 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card-hover"
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
    </section>
  );
}
