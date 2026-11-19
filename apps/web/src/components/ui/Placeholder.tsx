import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon";

// Content the school still has to supply. Styled so it can never be mistaken for approved copy.
// Remove every placeholder before launch.

export function Placeholder({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`rounded-md border border-dashed px-1.5 py-0.5 text-[0.95em] italic ${
        tone === "dark"
          ? "border-gold-400/60 bg-gold-400/10 text-gold-200"
          : "border-gold-500 bg-gold-50 text-royal-800"
      }`}
    >
      [{children}]
    </span>
  );
}

export function PlaceholderBlock({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border-2 border-dashed border-gold-400 bg-gold-50/70 p-5 sm:p-6 ${className}`}>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
        <Icon name="file" className="h-4 w-4" />
        To be supplied by the school
      </p>
      <div className="mt-2 leading-relaxed text-royal-900">{children}</div>
    </div>
  );
}

/** Renders text, turning any [bracketed] segment into an inline placeholder. */
export function RichText({ text, tone = "light" }: { text: string; tone?: "light" | "dark" }) {
  const parts = text.split(/\[([^\]]+)\]/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <Placeholder key={i} tone={tone}>
            {part}
          </Placeholder>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Shows a verified value, or a placeholder naming what is missing. */
export function Verified({
  value,
  missing,
  tone = "light",
}: {
  value?: string;
  missing: string;
  tone?: "light" | "dark";
}) {
  return value ? <>{value}</> : <Placeholder tone={tone}>{missing}</Placeholder>;
}
