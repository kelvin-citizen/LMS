import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { ENQUIRE_HREF, heroHighlights, SCHOOL_FULL_NAME, SCHOOL_TAGLINE, VISIT_HREF } from "@/utils/home-content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-royal-950"
    >
      {/* Campus photo with layered royal wash so the copy stays legible */}
      <Image
        src="/school-view.jpg"
        alt={`The ${SCHOOL_FULL_NAME} campus building`}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-royal-950 via-royal-950/85 to-royal-900/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-royal-950 via-transparent to-royal-950/60" />
      <div className="absolute -left-40 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-royal-600/30 blur-3xl" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-12 sm:px-8 sm:pt-44">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">{SCHOOL_TAGLINE}</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
            A strong start for a <span className="italic text-gold-400">bright future.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-royal-50/85 sm:text-xl">
            Welcome to {SCHOOL_FULL_NAME}, a private school in North Legon, Ghana, serving learners from
            Crèche and Nursery through Junior High School since 1998. Explore our learning stages, discover school life and speak
            with us about the next step for your child.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Link
              href={ENQUIRE_HREF}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-bold text-royal-900 shadow-xl shadow-gold-400/20 transition hover:-translate-y-0.5 hover:bg-gold-300"
            >
              Enquire About Admission
              <Icon name="arrow-right" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={VISIT_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15"
            >
              Request a School Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Glass highlights bar anchored to the bottom of the hero */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 sm:pb-28">
        <dl className="grid overflow-hidden rounded-3xl bg-white/[0.07] ring-1 ring-white/15 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {heroHighlights.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 px-6 py-5 sm:px-7 sm:py-6 ${
                [
                  "border-white/10",
                  i > 0 ? "border-t" : "",
                  i === 1 ? "sm:border-t-0" : "",
                  i % 2 === 1 ? "sm:border-l" : "",
                  i > 0 ? "lg:border-t-0 lg:border-l" : "",
                ].join(" ")
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400 ring-1 ring-gold-400/30">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-royal-200/80">
                  {item.label}
                </dt>
                <dd className="mt-0.5 font-display text-lg font-semibold text-white">{item.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      {/* Curved divider into the white page */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-12 w-full text-white sm:h-20"
      >
        <path d="M0 80h1440V20C1200 70 960 80 720 60S240 0 0 30z" fill="currentColor" />
      </svg>
    </section>
  );
}
