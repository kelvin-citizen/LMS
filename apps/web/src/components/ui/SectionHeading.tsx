import type { SectionHeadingProps } from "@/types/home";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-gold-300" : "text-royal-600"
        }`}
      >
        <span className="h-px w-6 bg-gold-400" />
        {eyebrow}
        {centered && <span className="h-px w-6 bg-gold-400" />}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-royal-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-royal-100/80" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
