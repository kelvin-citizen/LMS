import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import CourseList from "@/components/ui/CourseList";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { COURSE_HREF, workforceCourses } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Workforce and Career Development",
  description:
    "Evening computer, IT and cybersecurity classes for working adults at Child Time Preparatory & JHS, North Legon.",
};

export default function WorkforcePage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Skills · Workforce and Career Development"
        title="Develop digital skills for work and future opportunities"
        description="Evening classes support working adults who want to improve practical computer skills, strengthen workplace IT knowledge or begin a learning pathway towards cybersecurity. Discuss your experience and goals with the programme coordinator to identify a suitable starting point."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-36 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Courses"
              title="Course progression"
              description="Course fees and detailed evening schedules are available upon request. Contact us to discuss suitability, prerequisites and the next available option."
            />
            <ButtonLink href={`${COURSE_HREF}?pathway=workforce`} className="mt-8">
              Request Workforce Course Details
            </ButtonLink>
          </Reveal>
          <CourseList courses={workforceCourses} />
        </div>
      </Section>
    </>
  );
}
