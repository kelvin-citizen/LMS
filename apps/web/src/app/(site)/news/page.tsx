import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { COURSE_HREF, SCHOOL_FULL_NAME, termCalendar, termEvents } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "News and Events",
  description: `School updates and upcoming activities and events at ${SCHOOL_FULL_NAME}.`,
};

// TODO: when real content exists, show dates as "15 January 2027" and times in Ghana time (Africa/Accra).

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and Events"
        title="News from Child Time"
        description="Read school updates and find information about upcoming activities and events. Check each event for its date, location and participation arrangements."
      />

      <Section>
        <Reveal>
          <SectionHeading align="left" eyebrow="News" title="Latest news" />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-center rounded-3xl border border-dashed border-royal-200 bg-royal-50/40 px-6 py-16 text-center sm:py-20">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-royal-700 text-gold-400">
              <Icon name="file" className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-royal-900">No posts yet</h3>
            <p className="mt-3 max-w-md leading-relaxed text-slate-600">
              School news and stories will appear here once they are published. In the meantime, see the
              upcoming term events below or get in touch with the school.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/gallery" variant="outline">
                Visit the Gallery
              </ButtonLink>
              <ButtonLink href="/contact">Contact the School</ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="tint">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading align="left" eyebrow="Events" title="Term events" />
          </Reveal>
          <Reveal delay={120}>
            <ButtonLink href="/parents#calendar" variant="outline">
              View Term Calendar
            </ButtonLink>
          </Reveal>
        </div>
        <p className="mt-4 text-slate-600">
          {termCalendar.title}, {termCalendar.range}.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {termEvents.map((event, i) => (
            <li key={`${event.date}-${event.title}`}>
              <Reveal delay={(i % 2) * 100} className="flex h-full items-center gap-5 rounded-3xl bg-white p-5 ring-1 ring-royal-100">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-royal-700 text-gold-400">
                  <Icon name="calendar" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-royal-600">{event.date}</p>
                  <h3 className="font-display text-xl font-semibold text-royal-900">{event.title}</h3>
                  <p className="text-slate-600">{event.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Digital Skills"
              title="Programme updates"
              description="Course announcements, introductory sessions and learner projects from our supplementary Digital Skills and Cybersecurity programme. Fees and detailed timetables are available on request."
            />
          </Reveal>
          <Reveal delay={120}>
            <ButtonLink href={COURSE_HREF}>Request Course Details</ButtonLink>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
