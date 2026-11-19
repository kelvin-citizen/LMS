"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import { contact } from "@/utils/home-content";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send credentials to the API once authentication exists in apps/api.
    setNotice(
      contact.phone
        ? `The staff portal isn't live yet. For help, call the school office on ${contact.phone}.`
        : "The staff portal isn't live yet. For help, please contact the school office.",
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-royal-100 bg-white py-3.5 pl-12 pr-4 text-royal-900 placeholder:text-slate-400 outline-none transition focus:border-royal-500 focus:ring-4 focus:ring-royal-100";

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="identifier" className="mb-2 block text-sm font-semibold text-royal-900">
          Staff email
        </label>
        <div className="relative">
          <Icon name="user" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            id="identifier"
            name="identifier"
            required
            type="email"
            autoComplete="username"
            placeholder="name@childtimeprep.edu.gh"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-semibold text-royal-900">
            Password
          </label>
          <Link href="/contact" className="text-sm font-semibold text-royal-600 hover:text-royal-800">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Icon name="lock" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            className={`${inputCls} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-500 transition hover:bg-royal-50 hover:text-royal-800"
          >
            <Icon name={showPassword ? "eye-off" : "eye"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
        <input type="checkbox" name="remember" className="h-4 w-4 rounded accent-royal-700" />
        Keep me signed in
      </label>

      {notice && (
        <p role="status" className="rounded-2xl bg-gold-50 px-4 py-3 text-sm font-medium text-royal-900 ring-1 ring-gold-300">
          {notice}
        </p>
      )}

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gold-400 px-6 py-4 font-bold text-royal-900 shadow-lg shadow-gold-400/30 transition hover:-translate-y-0.5 hover:bg-gold-300"
      >
        Sign in
        <Icon name="arrow-right" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
