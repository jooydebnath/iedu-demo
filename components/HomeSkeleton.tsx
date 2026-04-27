import { Skeleton } from "./Skeleton";

/** Mirrors the homepage layout with skeleton cards in each section. */
export default function HomeSkeleton() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <Skeleton className="h-[360px] w-full rounded-none sm:h-[440px] lg:h-[520px]" />
        <div className="mx-auto -mt-10 max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-paper-300 bg-white p-4 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="h-11 w-11 shrink-0 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QuickAccess */}
      <Section>
        <SectionHeader />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg border border-paper-300 bg-white p-4 shadow-card"
            >
              <Skeleton className="h-12 w-12 rounded-lg" />
              <Skeleton className="mt-3 h-4 w-4/5" />
              <Skeleton className="mt-2 h-3 w-3/5" />
            </div>
          ))}
        </div>
      </Section>

      {/* Features (class buttons + subject grid) */}
      <Section>
        <SectionHeader />
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-32" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg border border-paper-300 bg-white p-4 shadow-card"
            >
              <Skeleton className="h-11 w-11 rounded-lg" />
              <Skeleton className="mt-3 h-4 w-4/5" />
              <Skeleton className="mt-2 h-3 w-2/5" />
            </div>
          ))}
        </div>
      </Section>

      {/* Courses grid */}
      <Section>
        <SectionHeader />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card"
            >
              <Skeleton className="aspect-[4/3] w-full rounded-none" />
              <div className="space-y-2 p-4">
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-3 w-3/5" />
                <div className="flex items-center justify-between pt-2">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-9 w-24 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Books grid */}
      <Section>
        <SectionHeader />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card"
            >
              <Skeleton className="aspect-[3/4] w-full rounded-none" />
              <div className="space-y-2 p-3">
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-3 w-3/5" />
                <Skeleton className="h-5 w-16" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Free Resources */}
      <Section>
        <SectionHeader />
        <div className="grid gap-5 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card"
            >
              <Skeleton className="h-36 w-full rounded-none" />
              <div className="space-y-3 p-6">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="mt-3 h-9 w-32 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Free Videos (reels-style) */}
      <Section>
        <SectionHeader />
        <div className="flex gap-3 overflow-hidden sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="aspect-[9/16] w-[60%] shrink-0 rounded-2xl sm:w-[32%] lg:w-[18%]"
            />
          ))}
        </div>
      </Section>

      {/* Teachers */}
      <Section>
        <SectionHeader />
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[16/10] w-[70%] shrink-0 sm:w-[40%] lg:w-[26%]"
            >
              <Skeleton className="h-full w-full rounded-2xl" />
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-4 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-[70%] shrink-0 overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card sm:w-[40%] lg:w-[22%]"
            >
              <Skeleton className="h-28 w-full rounded-none" />
              <div className="space-y-2 p-4 text-center">
                <Skeleton className="mx-auto h-4 w-3/4" />
                <Skeleton className="mx-auto h-3 w-1/2" />
                <Skeleton className="mx-auto mt-3 h-8 w-28 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements + Reviews + AppDownload trio */}
      <Section>
        <SectionHeader />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-paper-300 bg-white p-6 shadow-card"
            >
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="mt-4 h-7 w-24" />
              <Skeleton className="mt-2 h-3 w-2/3" />
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">{children}</section>
  );
}

function SectionHeader() {
  return (
    <div className="mb-6 flex flex-col items-center gap-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-72 max-w-full" />
      <Skeleton className="h-3 w-96 max-w-full" />
    </div>
  );
}

/* ─── Per-section exports for ClientGate fallbacks ─── */

export function HeroSkeleton() {
  return (
    <section className="relative">
      <Skeleton className="h-[360px] w-full rounded-none sm:h-[440px] lg:h-[520px]" />
      <div className="mx-auto -mt-10 max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-paper-300 bg-white p-4 shadow-card"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-11 w-11 shrink-0 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSkeleton() {
  return (
    <Section>
      <SectionHeader />
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-32" />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-paper-300 bg-white p-4 shadow-card"
          >
            <Skeleton className="h-11 w-11 rounded-lg" />
            <Skeleton className="mt-3 h-4 w-4/5" />
            <Skeleton className="mt-2 h-3 w-2/5" />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CoursesSkeleton() {
  return (
    <Section>
      <SectionHeader />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card"
          >
            <Skeleton className="aspect-[4/3] w-full rounded-none" />
            <div className="space-y-2 p-4">
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-3 w-3/5" />
              <div className="flex items-center justify-between pt-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-9 w-24 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function BooksSkeleton() {
  return (
    <Section>
      <SectionHeader />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card"
          >
            <Skeleton className="aspect-[3/4] w-full rounded-none" />
            <div className="space-y-2 p-3">
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-3 w-3/5" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function FreeResourcesSkeleton() {
  return (
    <Section>
      <SectionHeader />
      <div className="grid gap-5 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl border border-paper-300 bg-white shadow-card"
          >
            <Skeleton className="h-36 w-full rounded-none" />
            <div className="space-y-3 p-6">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
              <Skeleton className="mt-3 h-9 w-32 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function FreeVideosSkeleton() {
  return (
    <Section>
      <SectionHeader />
      <div className="flex gap-3 overflow-hidden sm:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            className="aspect-[9/16] w-[60%] shrink-0 rounded-2xl sm:w-[32%] lg:w-[18%]"
          />
        ))}
      </div>
    </Section>
  );
}

export function TeachersSkeleton() {
  return (
    <Section>
      <SectionHeader />
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[16/10] w-[70%] shrink-0 sm:w-[40%] lg:w-[26%]"
          >
            <Skeleton className="h-full w-full rounded-2xl" />
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-[70%] shrink-0 overflow-hidden rounded-2xl border border-paper-300 bg-white shadow-card sm:w-[40%] lg:w-[22%]"
          >
            <Skeleton className="h-28 w-full rounded-none" />
            <div className="space-y-2 p-4 text-center">
              <Skeleton className="mx-auto h-4 w-3/4" />
              <Skeleton className="mx-auto h-3 w-1/2" />
              <Skeleton className="mx-auto mt-3 h-8 w-28 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function StatsSkeleton() {
  return (
    <Section>
      <SectionHeader />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-paper-300 bg-white p-6 shadow-card"
          >
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="mt-4 h-7 w-24" />
            <Skeleton className="mt-2 h-3 w-2/3" />
          </div>
        ))}
      </div>
    </Section>
  );
}
