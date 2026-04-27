import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("skeleton rounded-lg", className)}
      {...rest}
    />
  );
}

/** Generic page-level skeleton: hero strip + content tiles */
export function PageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="mt-3 h-4 w-72" />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-paper-300 bg-white p-4 shadow-card"
          >
            <Skeleton className="aspect-[4/3] w-full" />
            <Skeleton className="mt-4 h-4 w-4/5" />
            <Skeleton className="mt-2 h-3 w-3/5" />
            <div className="mt-4 flex items-center justify-between">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-8 w-20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Profile-style skeleton — hero banner + avatar + body cards */
export function ProfileSkeleton() {
  return (
    <>
      <div className="relative h-48 w-full bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 sm:h-56">
        <div className="mx-auto flex h-full max-w-[1440px] items-end gap-6 px-4 pb-6 lg:px-8">
          <Skeleton className="h-32 w-32 rounded-full sm:h-36 sm:w-36" />
          <div className="flex-1 space-y-3 pb-2">
            <Skeleton className="h-6 w-1/2 max-w-xs" />
            <Skeleton className="h-4 w-1/3 max-w-[12rem]" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1440px] gap-6 px-4 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-paper-300 bg-white p-6 shadow-card"
            >
              <Skeleton className="h-5 w-40" />
              <Skeleton className="mt-4 h-3 w-full" />
              <Skeleton className="mt-2 h-3 w-11/12" />
              <Skeleton className="mt-2 h-3 w-9/12" />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-paper-300 bg-white p-6 shadow-card"
            >
              <Skeleton className="h-5 w-32" />
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-20 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/** Auth/Form skeleton — centered card with stacked input rows */
export function FormSkeleton() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <Skeleton className="mx-auto h-8 w-40" />
      <Skeleton className="mx-auto mt-3 h-4 w-56" />
      <div className="mt-8 space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="h-3 w-32" />
            <Skeleton className="mt-2 h-12 w-full" />
          </div>
        ))}
        <Skeleton className="mt-4 h-12 w-full" />
      </div>
    </div>
  );
}
