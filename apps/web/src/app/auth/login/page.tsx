import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import Icon from "@/components/ui/Icon";
import { MOTTO, SCHOOL_FULL_NAME, SCHOOL_NAME } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Staff Login",
  description: `Sign in to the ${SCHOOL_FULL_NAME} staff portal.`,
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[100svh] flex-1 bg-white">
      {/* Brand panel (large screens) */}
      <aside className="relative isolate hidden w-[46%] flex-col justify-between overflow-hidden bg-royal-950 p-12 lg:flex xl:p-16">
        <Image
          src="/school-view.jpg"
          alt=""
          fill
          preload
          sizes="46vw"
          className="-z-20 object-cover object-[70%_center] opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-royal-950 via-royal-950/80 to-royal-900/50" />
        <Image
          src="/childtime-crest.svg"
          alt=""
          width={100}
          height={120}
          className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-auto w-[26rem] opacity-[0.07] brightness-0 invert"
        />

        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md">
            <Image src="/childtime-crest.svg" alt="" width={40} height={48} className="h-auto w-8" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-white">{SCHOOL_NAME}</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-300">
              & JHS · North Legon
            </span>
          </span>
        </Link>

        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            <span className="h-px w-6 bg-gold-400" />
            Staff portal
          </p>
          <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-tight text-white xl:text-5xl">
            Welcome back to the <span className="italic text-gold-400">Child Time</span> family.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-royal-100/80">
            Manage classes, lessons, attendance and results, all in one place.
          </p>
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400/80">{MOTTO}</p>
      </aside>

      {/* Form panel */}
      <main className="relative flex flex-1 flex-col px-5 py-8 sm:px-10">
        <div className="absolute right-0 top-0 -z-0 h-72 w-72 rounded-full bg-gold-100/70 blur-3xl" />

        <div className="relative flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 lg:hidden">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-royal-100">
              <Image src="/childtime-crest.svg" alt="" width={36} height={43} className="h-auto w-7" />
            </span>
            <span className="font-display text-lg font-semibold text-royal-800">{SCHOOL_NAME}</span>
          </Link>
          <Link
            href="/"
            className="ml-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-royal-50 hover:text-royal-800"
          >
            <Icon name="arrow-left" className="h-4 w-4" />
            <span className="hidden sm:inline">Back to website</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-royal-900">Staff sign in</h1>
          <p className="mt-3 text-slate-600">Use the email and password provided by the school.</p>

          <LoginForm />

          <p className="mt-10 text-center text-sm text-slate-600">
            Not a staff member?{" "}
            <Link href="/" className="font-bold text-royal-700 hover:text-royal-500">
              Return to the website
            </Link>
          </p>
        </div>

        <p className="relative text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {SCHOOL_FULL_NAME}
        </p>
      </main>
    </div>
  );
}
