import Image from "next/image";
import type { PageHeroProps } from "@/types/home";

// Royal banner used at the top of every inner page (sits under the transparent navbar).
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-royal-950 pt-40 pb-28 sm:pt-48 sm:pb-36">
      <Image
        src="/school-view.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-royal-950 via-royal-950/90 to-royal-900/60" />
      <div className="absolute -left-40 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-royal-600/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            <span className="h-px w-6 bg-gold-400" />
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-royal-50/80 sm:text-xl">
            {description}
          </p>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-10 w-full text-white sm:h-16"
      >
        <path d="M0 80h1440V20C1200 70 960 80 720 60S240 0 0 30z" fill="currentColor" />
      </svg>
    </section>
  );
}
