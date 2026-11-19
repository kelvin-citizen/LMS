import type { Metadata } from "next";
import EnquiryForm from "@/components/forms/EnquiryForm";
import FaqList from "@/components/ui/FaqList";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import { PlaceholderBlock, RichText } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ADMISSION_FORM_HREF,
  admissionsFaqs,
  admissionSteps,
  contact,
  SCHOOL_FULL_NAME,
  telHref,
} from "@/utils/home-content";

const entryAges = [
  { level: "Crèche and Nursery", age: "2 years" },
  { level: "Kindergarten", age: "4 years" },
  { level: "Basic 1", age: "6 years" },
];

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admissions for 2026/2027 are open at ${SCHOOL_FULL_NAME}, North Legon, for Crèche, Nursery, Kindergarten, Primary and JHS.`,
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join Child Time"
        description="We welcome families interested in Crèche, Nursery, Kindergarten, Primary and JHS. Contact us to discuss your child's intended entry stage and the school's admission arrangements."
      />

      <Section className="!pt-10">
        <Reveal>
          <div className="flex flex-col gap-3 rounded-2xl bg-royal-50 p-5 sm:flex-row sm:items-center sm:gap-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal-700 text-gold-400">
              <Icon name="calendar" className="h-5 w-5" />
            </span>
            <p className="text-lg text-royal-900">
              <strong>Current admissions:</strong> Admissions for the 2026/2027 academic year are open for all
              levels, from Crèche to JHS.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {entryAges.map((e) => (
              <div key={e.level} className="rounded-2xl border border-royal-100 p-5 text-center">
                <p className="text-sm font-medium text-slate-500">{e.level}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-royal-900">From {e.age}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <SectionHeading eyebrow="How to join" title="Steps towards admission" />
        </Reveal>
        <ol className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <li
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-royal-200 to-transparent lg:block"
          />
          {admissionSteps.map((step, i) => (
            <li key={step.title} className="relative text-center">
              <Reveal delay={i * 120}>
                <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-royal-700 font-display text-2xl font-semibold text-gold-400 shadow-lg shadow-royal-700/30 ring-8 ring-white">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-lg font-bold text-royal-900">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-slate-600">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHeading eyebrow="Before you apply" title="Documents and fees" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <article className="h-full rounded-3xl bg-white p-8 ring-1 ring-royal-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-700 text-gold-400">
                <Icon name="file" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-royal-900">Application form</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Download and print the school&apos;s Application for Admission. Complete it in black or blue ink
                and return it to the school office.
              </p>
              <a
                href={ADMISSION_FORM_HREF}
                download
                className="group mt-5 flex items-center gap-3 rounded-2xl bg-royal-50 p-4 font-semibold text-royal-800 transition hover:bg-royal-100"
              >
                <Icon name="file" className="h-5 w-5 shrink-0 text-royal-600" />
                <span className="flex-1">
                  Application for Admission
                  <span className="block text-sm font-normal text-slate-600">PDF, 136 KB</span>
                </span>
                <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <PlaceholderBlock className="mt-4">
                The list of other required documents, number of photographs if required, and any transfer
                documentation.
              </PlaceholderBlock>
              <p className="mt-4 leading-relaxed text-slate-600">
                The school will explain how and when to provide these documents. Do not upload identity documents,
                medical details or school records through this enquiry form.
              </p>
            </article>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <article className="h-full rounded-3xl bg-white p-8 ring-1 ring-royal-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-700 text-gold-400">
                <Icon name="message" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-royal-900">Fees</h3>
              <p className="mt-4 font-display text-4xl font-semibold text-royal-900">GH₵150.00</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Admission and registration fee</p>
              <p className="mt-4 leading-relaxed text-slate-600">
                For school fees and payment arrangements, please call the admissions office on{" "}
                <a href={telHref(contact.admissionsPhone!)} className="font-semibold text-royal-700 hover:underline">
                  {contact.admissionsPhone}
                </a>
                .
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section id="enquiry">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Get in touch" title="Admissions enquiry form" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              <RichText text="Tell us how to reach you and the level you are interested in. Our team will respond within [approved response time during office hours]. Submitting an enquiry does not guarantee admission." />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-white p-6 ring-1 ring-royal-100 shadow-[0_30px_60px_-30px_rgba(7,29,72,0.3)] sm:p-10">
              <EnquiryForm kind="admissions" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Questions" title="Frequently asked questions" />
          </Reveal>
          <Reveal delay={120}>
            <FaqList items={admissionsFaqs} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
