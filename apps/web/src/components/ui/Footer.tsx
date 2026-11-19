import Image from "next/image";
import Link from "next/link";
import { Placeholder, Verified } from "@/components/ui/Placeholder";
import {
  contact,
  contactPlaceholders,
  footerLinks,
  FOUNDED,
  MOTTO,
  navItems,
  SCHOOL_FULL_NAME,
  SCHOOL_SUMMARY,
  SCHOOL_TAGLINE,
  telHref,
} from "@/utils/home-content";

export default function Footer() {
  return (
    <footer className="bg-royal-950 text-royal-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
              <Image src="/childtime-crest.svg" alt="" width={48} height={58} className="h-auto w-10" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-white">{SCHOOL_FULL_NAME}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">{MOTTO}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm leading-relaxed text-royal-200/75">{SCHOOL_SUMMARY}</p>
          <p className="mt-4 max-w-sm font-display italic text-royal-100/90">{SCHOOL_TAGLINE}.</p>
          <p className="mt-2 text-sm text-royal-300/80">Established {FOUNDED.getFullYear()}</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Explore</p>
          <ul className="mt-5 space-y-3">
            {navItems.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Information</p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              {/* TODO: add the school's approved social accounts. */}
              <Placeholder tone="dark">{contactPlaceholders.socials}</Placeholder>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Get in touch</p>
          <ul className="mt-5 space-y-3">
            <li>
              <Verified value={contact.address} missing={contactPlaceholders.address} tone="dark" />
              <span className="block">{contact.locality}</span>
              {contact.postal && <span className="block">{contact.postal}</span>}
            </li>
            <li>
              GPS: <Verified value={contact.gps} missing={contactPlaceholders.gps} tone="dark" />
            </li>
            <li>
              Telephone:{" "}
              {contact.phone ? (
                <a href={telHref(contact.phone)} className="transition hover:text-gold-400">
                  {contact.phone}
                </a>
              ) : (
                <Placeholder tone="dark">{contactPlaceholders.phone}</Placeholder>
              )}
            </li>
            {contact.admissionsPhone && (
              <li>
                Admissions:{" "}
                <a href={telHref(contact.admissionsPhone)} className="transition hover:text-gold-400">
                  {contact.admissionsPhone}
                </a>
              </li>
            )}
            <li>
              Email:{" "}
              {contact.email ? (
                <a href={`mailto:${contact.email}`} className="break-all transition hover:text-gold-400">
                  {contact.email}
                </a>
              ) : (
                <Placeholder tone="dark">{contactPlaceholders.email}</Placeholder>
              )}
            </li>
            <li>
              Office hours: <Verified value={contact.hours} missing={contactPlaceholders.hours} tone="dark" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-royal-300/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Copyright &copy; {new Date().getFullYear()} {SCHOOL_FULL_NAME}. All rights reserved.
          </p>
          <Link href="/auth/login" className="transition hover:text-gold-400">
            Staff Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
