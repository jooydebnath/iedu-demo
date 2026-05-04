"use client";

import {
  GraduationCap,
  Link,
  Play,
  Camera,
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const COL_COURSES = [
  "SSC FBC ২৬",
  "HSC FBC ২৬",
  "Medical 2nd Time",
  "Engineering 2nd Time",
  "Spoken English",
  "ICT সম্পূর্ণ কোর্স",
];

const COL_COMPANY = ["আমাদের সম্পর্কে", "শিক্ষকবৃন্দ", "ব্লগ", "ক্যারিয়ার", "কন্টাক্ট"];
const COL_SUPPORT = ["ভর্তির নিয়ম", "রিফান্ড পলিসি", "টার্মস", "প্রাইভেসি", "FAQ"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 pb-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient shadow-glow-sm">
                <GraduationCap className="h-6 w-6 text-ink-900" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-lg font-extrabold">
                  <span className="text-gold-400">i</span> Education
                </div>
                <div className="text-[10px] font-medium uppercase tracking-widest text-muted">
                  A Mark of Success
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              বাংলাদেশের সবচেয়ে আধুনিক অনলাইন শিক্ষা প্ল্যাটফর্ম। SSC, HSC ও Admission প্রস্তুতিতে সেরা মেন্টরশিপ পাও আমাদের সাথে।
            </p>

            {/* Newsletter */}
            <form className="mt-6 flex max-w-sm gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5">
              <input
                type="email"
                placeholder="তোমার ইমেইল লিখো"
                className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-muted-dark focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full bg-gold-gradient px-4 py-2 text-xs font-bold text-ink-900 shadow-glow-sm transition hover:scale-105"
              >
                <Send className="h-3.5 w-3.5" /> সাবস্ক্রাইব
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Link, href: "#" },
                { Icon: Play, href: "#" },
                { Icon: Camera, href: "#" },
                { Icon: Send, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:border-gold-500/50 hover:bg-gold-500 hover:text-ink-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <FooterColumn title="কোর্সসমূহ" items={COL_COURSES} />
          <FooterColumn title="কোম্পানি" items={COL_COMPANY} />
          <FooterColumn title="সাপোর্ট" items={COL_SUPPORT} />

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">
              যোগাযোগ
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>hello@i-edu.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>ধানমন্ডি, ঢাকা</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 py-6 text-xs text-muted sm:flex-row">
          <div className="inline-flex items-center gap-1.5">
            © {new Date().getFullYear()}
            <img
              src="/ieducationbd-logo.png"
              alt="iEducation BD"
              className="inline-block h-5 w-auto object-contain brightness-0 invert"
            />
            . সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold-400">টার্মস</a>
            <a href="#" className="hover:text-gold-400">প্রাইভেসি</a>
            <a href="#" className="hover:text-gold-400">কুকি</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              className="text-muted transition hover:text-gold-400 hover:translate-x-0.5 inline-block"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
