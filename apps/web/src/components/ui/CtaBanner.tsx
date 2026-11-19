import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import type { CtaBannerProps } from "@/types/home";

export default function CtaBanner({ title, description, href, label, secondary }: CtaBannerProps) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] bg-gold-400 px-8 py-12 sm:px-14 sm:py-14">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-200/70 blur-2xl" />
        <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-flame/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h3 className="font-display text-3xl font-semibold text-royal-900 sm:text-4xl">{title}</h3>
            <p className="mt-3 text-lg text-royal-900/75">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href={href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-royal-800 px-7 py-4 font-bold text-white shadow-xl shadow-royal-900/30 transition hover:-translate-y-0.5 hover:bg-royal-700"
            >
              {label}
              <Icon name="arrow-right" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center rounded-full border-2 border-royal-800 px-7 py-3.5 font-bold text-royal-900 transition hover:-translate-y-0.5 hover:bg-royal-800 hover:text-white"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
