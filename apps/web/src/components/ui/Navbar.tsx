"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import type { NavItem } from "@/types/home";
import { ENQUIRE_HREF, navItems, SCHOOL_NAME } from "@/utils/home-content";

// Items in the slim top bar on large screens; everything else sits in the main bar.
const UTILITY = ["/parents", "/news", "/gallery", "/contact"];
const mainItems = navItems.filter((item) => !UTILITY.includes(item.href));
const utilityItems = navItems.filter((item) => UTILITY.includes(item.href));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const closeAll = () => {
    setOpen(false);
    setMenu(null);
  };

  const solid = scrolled || open;

  const linkClass = (active: boolean) =>
    `inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      solid
        ? active
          ? "bg-royal-50 text-royal-700"
          : "text-slate-700 hover:bg-royal-50 hover:text-royal-700"
        : active
          ? "bg-white/15 text-white"
          : "text-white/85 hover:bg-white/10 hover:text-white"
    }`;

  const renderDesktopItem = (item: NavItem) => {
    if (!item.children) {
      return (
        <Link
          href={item.href}
          aria-current={isActive(item.href) ? "page" : undefined}
          className={linkClass(isActive(item.href))}
        >
          {item.label}
        </Link>
      );
    }
    const expanded = menu === item.href;
    const menuId = `menu-${item.href.slice(1)}`;
    return (
      <div className="relative" onMouseEnter={() => setMenu(item.href)} onMouseLeave={() => setMenu(null)}>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={menuId}
          onClick={() => setMenu(expanded ? null : item.href)}
          className={linkClass(isActive(item.href))}
        >
          {item.label}
          <Icon name="chevron-down" className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
        <div
          id={menuId}
          className={`absolute left-0 top-full pt-3 transition ${
            expanded ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
          }`}
        >
          <ul className="w-72 rounded-2xl bg-white p-2 shadow-[0_24px_60px_-20px_rgba(7,29,72,0.35)] ring-1 ring-royal-100">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={closeAll}
                  aria-current={pathname === child.href ? "page" : undefined}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    pathname === child.href ? "bg-royal-50 text-royal-700" : "text-slate-700 hover:bg-royal-50 hover:text-royal-700"
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 shadow-[0_8px_30px_-12px_rgba(7,29,72,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Utility bar (large screens) */}
      <div
        className={`hidden border-b transition-colors xl:block ${
          solid ? "border-royal-100 bg-royal-900 text-royal-100" : "border-white/10 text-white/75"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-end gap-1 px-8 text-[13px] font-medium">
          {utilityItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3 py-1 transition hover:text-gold-300 ${isActive(item.href) ? "text-gold-300" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <span aria-hidden="true" className="mx-2 h-4 w-px bg-current opacity-30" />
          <Link href="/auth/login" className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition hover:text-gold-300">
            <Icon name="login" className="h-3.5 w-3.5" />
            Staff Login
          </Link>
        </div>
      </div>

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={closeAll}>
          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-royal-100">
            <Image src="/childtime-crest.svg" alt="" width={40} height={48} className="h-auto w-8" />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-lg font-semibold transition-colors ${
                solid ? "text-royal-800" : "text-white"
              }`}
            >
              {SCHOOL_NAME}
            </span>
            <span
              className={`block text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                solid ? "text-royal-600" : "text-gold-300"
              }`}
            >
              & JHS · North Legon
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {mainItems.map((item) => (
            <li key={item.href}>{renderDesktopItem(item)}</li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={ENQUIRE_HREF}
            onClick={closeAll}
            className="hidden rounded-full bg-gold-400 px-5 py-2.5 text-sm font-bold text-royal-900 shadow-lg shadow-gold-400/30 transition hover:-translate-y-0.5 hover:bg-gold-300 sm:inline-flex"
          >
            Enquire About Admission
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition xl:hidden ${
              solid ? "text-royal-800 hover:bg-royal-50" : "text-white hover:bg-white/10"
            }`}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-y-auto border-t border-royal-100 bg-white transition-[max-height] duration-500 xl:hidden ${
          open ? "max-h-[calc(100svh-5rem)]" : "max-h-0 border-transparent"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeAll}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block rounded-xl px-4 py-3 font-medium hover:bg-royal-50 ${
                  isActive(item.href) ? "bg-royal-50 text-royal-700" : "text-royal-900"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mb-2 ml-4 border-l-2 border-gold-300 pl-3">
                  {item.children.slice(1).map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={closeAll}
                        aria-current={pathname === child.href ? "page" : undefined}
                        className={`block rounded-lg px-3 py-2 text-sm hover:bg-royal-50 ${
                          pathname === child.href ? "font-semibold text-royal-700" : "text-slate-600"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
            <Link
              href="/auth/login"
              onClick={closeAll}
              className="flex items-center justify-center gap-2 rounded-xl border border-royal-200 px-4 py-3 font-bold text-royal-800"
            >
              <Icon name="login" className="h-4 w-4" />
              Staff Login
            </Link>
            <Link
              href={ENQUIRE_HREF}
              onClick={closeAll}
              className="block rounded-xl bg-gold-400 px-4 py-3 text-center font-bold text-royal-900"
            >
              Enquire About Admission
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
