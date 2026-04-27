"use client";

import SectionTitle from "./SectionTitle";

const ROW_A = [
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
];

const ROW_B = [
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop",
];

function MarqueeRow({
  images,
  direction = "left",
  duration = 40,
}: {
  images: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  // Duplicate the list so the loop is seamless
  const items = [...images, ...images];
  return (
    <div className="group relative overflow-hidden">
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper-100 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper-100 to-transparent sm:w-24" />

      <div
        className="flex w-max gap-3 sm:gap-4"
        style={{
          animation: `${
            direction === "left" ? "marqueeLeft" : "marqueeRight"
          } ${duration}s linear infinite`,
        }}
      >
        {items.map((src, i) => (
          <div
            key={i}
            className="relative h-44 w-72 shrink-0 overflow-hidden rounded-xl border border-paper-300 bg-paper-200 shadow-card sm:h-52 sm:w-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Achievement"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          eyebrow="আমাদের সাফল্য"
          title="আর শেখার সেই পথেই গড়ে উঠছে"
          subtitle="আত্মবিশ্বাসী সফল প্রজন্ম — হাজারো কৃতী শিক্ষার্থীর গল্প"
        />
      </div>

      {/* Full-width marquee rows */}
      <div className="space-y-3 sm:space-y-4">
        <MarqueeRow images={ROW_A} direction="right" duration={45} />
        <MarqueeRow images={ROW_B} direction="left" duration={50} />
      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
