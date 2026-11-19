import Icon from "@/components/ui/Icon";
import { PlaceholderBlock } from "@/components/ui/Placeholder";
import type { FaqItem } from "@/types/home";

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((faq, i) => (
        <details
          key={faq.question}
          open={i === 0}
          className="group rounded-2xl bg-white ring-1 ring-royal-100 transition open:shadow-[0_20px_40px_-24px_rgba(7,29,72,0.3)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-bold text-royal-900 [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-50 text-royal-700 transition group-open:rotate-180 group-open:bg-gold-400 group-open:text-royal-900">
              <Icon name="chevron-down" className="h-4 w-4" />
            </span>
          </summary>
          <div className="px-6 pb-6 leading-relaxed text-slate-600">
            {faq.answer && <p>{faq.answer}</p>}
            {faq.placeholder && <PlaceholderBlock>{faq.placeholder}</PlaceholderBlock>}
          </div>
        </details>
      ))}
    </div>
  );
}
