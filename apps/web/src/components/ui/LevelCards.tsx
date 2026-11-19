import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { learningLevels } from "@/utils/home-content";

// One card per learning stage, each linking to its own page.
export default function LevelCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {learningLevels.map((level, i) => (
        <Reveal key={level.slug} delay={i * 100} className="h-full">
          <Link
            href={`/learning/${level.slug}`}
            className="group flex h-full flex-col rounded-3xl border border-royal-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-[0_24px_50px_-24px_rgba(7,29,72,0.35)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-700 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-royal-800">
              <Icon name={level.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-royal-900">{level.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-slate-600">{level.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-royal-700">
              Explore {level.title}
              <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
