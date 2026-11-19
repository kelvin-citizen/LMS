import type { Metadata } from "next";
import EnquiryForm from "@/components/forms/EnquiryForm";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import { PlaceholderBlock, RichText, Verified } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import type { IconName } from "@/types/home";
import { contact, contactPlaceholders, SCHOOL_FULL_NAME, telHref } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Contact and Visit",
  description: `Contact ${SCHOOL_FULL_NAME} in North Legon, Ghana, for school information, admissions enquiries or a visit request.`,
};

// TODO: replace with the verified map pin once the school confirms its location.
const MAP_QUERY = encodeURIComponent(`${SCHOOL_FULL_NAME}, ${contact.locality}`);

export default function ContactPage() {
  const details: { icon: IconName; label: string; value?: string; missing: string }[] = [
    { icon: "map-pin", label: "Physical address", value: contact.address, missing: contactPlaceholders.address },
    { icon: "map-pin", label: "GhanaPost GPS address", value: contact.gps, missing: "verified code, if available" },
    { icon: "file", label: "Postal address", value: contact.postal, missing: "postal address" },
    { icon: "phone", label: "School office", value: contact.phone, missing: contactPlaceholders.phone },
    { icon: "phone", label: "Admissions office", value: contact.admissionsPhone, missing: "admissions telephone" },
    { icon: "mail", label: "Email", value: contact.email, missing: contactPlaceholders.email },
    { icon: "clock", label: "Office hours", value: contact.hours, missing: contactPlaceholders.hours },
  ];

  const actions = [
    { label: "Call the School", href: contact.phone ? telHref(contact.phone) : undefined, icon: "phone" as const },
    {
      label: "Call Admissions",
      href: contact.admissionsPhone ? telHref(contact.admissionsPhone) : undefined,
      icon: "phone" as const,
    },
    { label: "Email the School", href: contact.email ? `mailto:${contact.email}` : undefined, icon: "mail" as const },
    {
      label: "Get Directions",
      href: `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`,
      icon: "map-pin" as const,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact and Visit"
        title="Contact Child Time"
        description="We would be pleased to hear from you. Contact us for school information, admissions enquiries or a visit request."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <div className="rounded-[2rem] border border-royal-100 p-8 sm:p-10">
              <p className="font-display text-2xl font-semibold text-royal-900">{SCHOOL_FULL_NAME}</p>
              <p className="mt-1 text-slate-600">{contact.locality}</p>
              <dl className="mt-8 space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal-700 text-gold-400">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-sm font-medium text-slate-500">{d.label}</dt>
                      <dd className="mt-0.5 font-semibold text-royal-900">
                        <Verified value={d.value} missing={d.missing} />
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            {actions.map((a) =>
              a.href ? (
                <a
                  key={a.label}
                  href={a.href}
                  {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-gold-400 px-6 py-5 font-bold text-royal-900 transition hover:-translate-y-0.5 hover:bg-gold-300"
                >
                  <span className="flex items-center gap-3">
                    <Icon name={a.icon} className="h-5 w-5" />
                    {a.label}
                  </span>
                  <Icon name={a.external ? "external" : "arrow-right"} className="h-5 w-5" />
                </a>
              ) : (
                <div
                  key={a.label}
                  className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-gold-400 px-6 py-5 font-bold text-royal-900/60"
                >
                  <Icon name={a.icon} className="h-5 w-5" />
                  {a.label}
                  <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-royal-600">
                    Awaiting details
                  </span>
                </div>
              ),
            )}
            {/* TODO: optional WhatsApp link, only with a dedicated, school-approved number.
                Wording: "Message our school office on WhatsApp. This opens an external service.
                Please do not include sensitive information about your child." Never prefill child information. */}
          </Reveal>
        </div>
      </Section>

      <Section id="visit" tone="tint">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Visit" title="Request a school visit" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Come and learn more about Child Time. Share your preferred visit date and time, and our team will
                contact you to confirm availability. Sending this form does not confirm an appointment.
              </p>
              <p>
                <strong className="text-royal-900">Visit hours:</strong>{" "}
                <RichText text="[approved days and times]" />
              </p>
              <p>
                <strong className="text-royal-900">Response time:</strong>{" "}
                <RichText text="[approved response expectation]" />
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-white p-6 ring-1 ring-royal-100 shadow-[0_30px_60px_-30px_rgba(7,29,72,0.3)] sm:p-10">
              <EnquiryForm kind="visit" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="Find us" title="Location and directions" />
            <PlaceholderBlock className="mt-6">
              Approved directions from a recognisable local landmark and any confirmed access or parking guidance.
              The map and directions button must use the verified school location.
            </PlaceholderBlock>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-royal-100 shadow-[0_30px_60px_-30px_rgba(7,29,72,0.4)]">
              <iframe
                title={`Map showing ${SCHOOL_FULL_NAME}`}
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
