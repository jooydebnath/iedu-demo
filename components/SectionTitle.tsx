import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="pill-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-body sm:text-4xl">
        {title.split(" ").map((w, i) =>
          i === Math.floor(title.split(" ").length / 2) ? (
            <span key={i} className="text-ink-500">
              {" "}{w}{" "}
            </span>
          ) : (
            <span key={i}>{i === 0 ? "" : " "}{w}</span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-body-soft">{subtitle}</p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-24 rounded-full bg-gold-gradient",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
