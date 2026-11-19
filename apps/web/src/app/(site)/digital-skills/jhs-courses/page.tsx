import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import CourseList from "@/components/ui/CourseList";
import PageHero from "@/components/ui/PageHero";
import { PlaceholderBlock } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { COURSE_HREF, jhsCourses } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "JHS Student Courses",
  description:
    "Late-afternoon supplementary computer, IT and introductory cybersecurity classes for JHS students at Child Time Preparatory & JHS.",
};

export default function JhsCoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Skills · JHS Student Enrichment"
        title="Build confidence beyond the classroom"
        description="Our supplementary student pathway is designed to develop computer confidence and introduce IT and cybersecurity through practical, age-appropriate learning. Late-afternoon classes provide an opportunity to extend learning beyond the regular school day."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-36 lg:self-start">
            <SectionHeading align="left" eyebrow="Courses" title="Course progression" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                <strong className="text-royal-900">Starting point and progression:</strong> The coordinator will
                discuss prior experience and recommend a suitable course. Progression depends on course
                prerequisites and demonstrated skills; JHS classes introduce foundations rather than promise
                professional qualification.
              </p>
              <p>
                Practical cybersecurity learning uses supervised, authorised training environments. Parent or
                guardian involvement is required for JHS course enquiries and enrolment.
              </p>
            </div>
            <PlaceholderBlock className="mt-6">
              Consent, supervision and collection arrangements, confirmed before enrolment.
            </PlaceholderBlock>
          </Reveal>
          <CourseList courses={jhsCourses} />
        </div>
      </Section>

      <Section tone="tint">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-white p-8 ring-1 ring-royal-100 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-royal-900">Fees and detailed schedules</h2>
            <p className="mt-2 text-lg text-slate-600">Available upon request.</p>
          </div>
          <ButtonLink href={`${COURSE_HREF}?pathway=jhs`}>Request JHS Course Details</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
