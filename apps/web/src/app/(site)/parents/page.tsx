import type { Metadata } from "next";
import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import { PlaceholderBlock } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import type { IconName } from "@/types/home";
import { ADMISSION_FORM_HREF, contact, SCHOOL_FULL_NAME, telHref, termCalendar } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Parents and Resources",
  description: `Term dates, notices, uniform guidance and school documents for ${SCHOOL_FULL_NAME} families.`,
};

const resources: { id: string; icon: IconName; title: string; placeholder?: string; body?: ReactNode }[] = [
  {
    id: "notices",
    icon: "message",
    title: "Notices",
    placeholder:
      "Each notice: title, publication date, intended audience, full notice and any action deadline. Current notices are kept separate from archived notices.",
  },
  {
    id: "uniform",
    icon: "users",
    title: "Uniform guidance",
    placeholder:
      "Approved requirements by level, school-day and activity variations, and purchasing guidance if applicable, with approved images matching current uniforms.",
  },
  {
    id: "downloads",
    icon: "file",
    title: "Policies and downloads",
    body: (
      <ul className="space-y-3">
        <li>
          <a
            href={ADMISSION_FORM_HREF}
            className="group flex items-center gap-3 rounded-2xl bg-royal-50 p-4 font-semibold text-royal-800 transition hover:bg-royal-100"
            download
          >
            <Icon name="file" className="h-5 w-5 shrink-0 text-royal-600" />
            <span className="flex-1">
              Application for Admission
              <span className="block text-sm font-normal text-slate-600">PDF, 136 KB</span>
            </span>
            <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </li>
      </ul>
    ),
    placeholder:
      "Parent handbook, behaviour or welfare policies, uniform guide and book and stationery lists, each with its issue date.",
  },
  {
    id: "questions",
    icon: "phone",
    title: "Questions or concerns",
    body: (
      <ul className="space-y-2 text-slate-600">
        <li>
          School office:{" "}
          <a href={telHref(contact.phone!)} className="font-semibold text-royal-700 hover:underline">
            {contact.phone}
          </a>
        </li>
        <li>
          Admissions office:{" "}
          <a href={telHref(contact.admissionsPhone!)} className="font-semibold text-royal-700 hover:underline">
            {contact.admissionsPhone}
          </a>
        </li>
        <li>
          Email:{" "}
          <a href={`mailto:${contact.email}`} className="break-all font-semibold text-royal-700 hover:underline">
            {contact.email}
          </a>
        </li>
        <li>Office hours: {contact.hours}</li>
      </ul>
    ),
  },
];

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Parents and Resources"
        title="Useful information for school families"
        description="Find current term dates, school notices, uniform guidance and approved documents. For questions about your own child, please use the school's designated contact channel rather than a public website form."
      />

      <Section>
        <nav aria-label="On this page" className="mb-12 flex flex-wrap gap-2">
          {[{ id: "calendar", title: "Term calendar" }, ...resources].map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="rounded-full border border-royal-200 px-4 py-2 text-sm font-semibold text-royal-800 transition hover:border-royal-700 hover:bg-royal-50"
            >
              {r.title}
            </a>
          ))}
        </nav>
        <Reveal>
          <article id="calendar" className="scroll-mt-36 rounded-3xl border border-royal-100 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-royal-700 text-gold-400">
                  <Icon name="calendar" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-royal-900">Term calendar</h2>
                  <p className="text-slate-600">
                    {termCalendar.title}: {termCalendar.range}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left">
                <caption className="sr-only">
                  {termCalendar.title} academic schedule, {termCalendar.range}
                </caption>
                <thead>
                  <tr className="border-b border-royal-100 text-xs font-bold uppercase tracking-widest text-royal-600">
                    <th scope="col" className="py-3 pr-4">Week</th>
                    <th scope="col" className="py-3 pr-4">Dates</th>
                    <th scope="col" className="py-3">Programme and activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-royal-50">
                  {termCalendar.weeks.map((w) => (
                    <tr key={w.week} className="align-top">
                      <th scope="row" className="py-3 pr-4 font-display text-lg font-semibold text-royal-900">
                        {w.week}
                      </th>
                      <td className="whitespace-nowrap py-3 pr-4 font-semibold text-royal-800">{w.dates}</td>
                      <td className="py-3 text-slate-600">
                        <span className="flex flex-wrap items-center gap-2">
                          {w.activities.map((a, i) => (
                            <span
                              key={a}
                              className={
                                i === 0 && a === "Teaching and learning"
                                  ? ""
                                  : "rounded-full bg-gold-100 px-2.5 py-0.5 text-sm font-semibold text-royal-900"
                              }
                            >
                              {a}
                            </span>
                          ))}
                          {w.note && (
                            <span className="rounded-full bg-royal-700 px-2.5 py-0.5 text-sm font-semibold text-white">
                              {w.note}
                            </span>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {resources.map((r, i) => (
            <Reveal key={r.id} delay={(i % 2) * 100} className="h-full">
              <article id={r.id} className="h-full scroll-mt-36 rounded-3xl border border-royal-100 p-7 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-700 text-gold-400">
                  <Icon name={r.icon} />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-royal-900">{r.title}</h2>
                {r.body && <div className="mt-4">{r.body}</div>}
                {r.placeholder && <PlaceholderBlock className="mt-4">{r.placeholder}</PlaceholderBlock>}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
