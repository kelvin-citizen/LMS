import { PlaceholderBlock, RichText } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import type { LabelledItem } from "@/types/home";

// A stack of labelled content rows, e.g. "Learning approach", "Care and routines".
export default function LabelledList({ items }: { items: LabelledItem[] }) {
  return (
    <dl className="divide-y divide-royal-100 rounded-3xl border border-royal-100 bg-white">
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={Math.min(i, 3) * 60}
          className="grid gap-3 p-6 sm:p-8 md:grid-cols-[14rem_1fr] md:gap-8"
        >
            <dt className="font-display text-xl font-semibold text-royal-900">{item.label}</dt>
            <dd className="space-y-3 text-lg leading-relaxed text-slate-600">
              {item.text && (
                <p>
                  <RichText text={item.text} />
                </p>
              )}
              {item.placeholder && <PlaceholderBlock>{item.placeholder}</PlaceholderBlock>}
            </dd>
        </Reveal>
      ))}
    </dl>
  );
}
