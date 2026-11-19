import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { COURSE_HREF, SCHOOL_FULL_NAME } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Digital Skills and Cybersecurity",
  description: `Fee-based supplementary Computer, IT and Cybersecurity learning for JHS students and working adults at ${SCHOOL_FULL_NAME}.`,
};

const pathways = [
  {
    icon: "graduation" as const,
    title: "JHS Student Courses",
    description:
      "Late-afternoon classes that develop computer confidence and introduce IT and cybersecurity through practical, age-appropriate learning.",
    href: "/digital-skills/jhs-courses",
    label: "Explore JHS Student Courses",
  },
  {
    icon: "briefcase" as const,
    title: "Workforce and Career Development",
    description:
      "Evening classes for working adults who want practical computer skills, workplace IT knowledge or a pathway towards cybersecurity.",
    href: "/digital-skills/workforce",
    label: "Explore Workforce Courses",
  },
];

export default function DigitalSkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Skills and Cybersecurity"
        title="Practical skills for learning, work and the digital world"
        description="Child Time offers fee-based supplementary Computer, IT and Cybersecurity learning for JHS students and working adults. Develop practical digital skills, strengthen your understanding of technology and explore a pathway towards cybersecurity-focused learning."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Programme overview"
              title="Late-afternoon and evening classes"
              description="Classes take place in the late afternoon and evening. Course fees and detailed class schedules are provided upon request to prospective learners considering enrolment. Contact the programme coordinator to discuss your goals, starting level and suitable course options."
            />
            <ButtonLink href={COURSE_HREF} className="mt-8">
              Request Course Details
            </ButtonLink>
          </Reveal>
          <div className="grid gap-5">
            {pathways.map((p, i) => (
              <Reveal key={p.href} delay={i * 120}>
                <Link
                  href={p.href}
                  className="group block rounded-3xl border border-royal-100 bg-white p-7 transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-[0_24px_50px_-24px_rgba(7,29,72,0.35)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-700 text-gold-400">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-royal-900">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal-700">
                    {p.label}
                    <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
