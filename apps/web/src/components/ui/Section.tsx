import type { ReactNode } from "react";

// Standard page section wrapper with consistent spacing and width.
export default function Section({
  children,
  id,
  tone = "white",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "white" | "tint" | "royal";
  className?: string;
}) {
  const bg = { white: "bg-white", tint: "bg-royal-50/60", royal: "relative isolate overflow-hidden bg-royal-900" }[tone];
  return (
    <section id={id} className={`${bg} scroll-mt-28 py-20 sm:py-28 ${className}`}>
      {tone === "royal" && (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-royal-700),transparent_65%)]" />
      )}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
