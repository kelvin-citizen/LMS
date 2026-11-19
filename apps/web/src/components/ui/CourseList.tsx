import Reveal from "@/components/ui/Reveal";
import type { TitledItem } from "@/types/home";

// Numbered course progression, e.g. Computer foundations → Further exploration.
export default function CourseList({ courses }: { courses: TitledItem[] }) {
  return (
    <ol className="relative space-y-4 before:absolute before:bottom-8 before:left-7 before:top-8 before:w-0.5 before:bg-royal-100">
      {courses.map((course, i) => (
        <li key={course.title} className="relative">
          <Reveal delay={Math.min(i, 3) * 80} className="flex gap-5 rounded-3xl bg-white p-5 ring-1 ring-royal-100 sm:p-6">
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-royal-700 font-display text-xl font-semibold text-gold-400">
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold text-royal-900">{course.title}</h3>
              <p className="mt-1 leading-relaxed text-slate-600">{course.description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
