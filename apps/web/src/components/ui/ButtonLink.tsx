import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { ButtonLinkProps } from "@/types/home";

const variants = {
  gold: "bg-gold-400 text-royal-900 shadow-lg shadow-gold-400/25 hover:bg-gold-300",
  royal: "bg-royal-700 text-white shadow-lg shadow-royal-700/25 hover:bg-royal-600",
  outline: "border border-royal-200 bg-white text-royal-800 hover:border-royal-700 hover:bg-royal-50",
};

export default function ButtonLink({ href, children, variant = "gold", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold transition hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
