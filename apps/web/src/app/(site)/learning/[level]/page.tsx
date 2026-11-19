import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ui/ButtonLink";
import CtaBanner from "@/components/ui/CtaBanner";
import LabelledList from "@/components/ui/LabelledList";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ENQUIRE_HREF, learningLevels, SCHOOL_FULL_NAME, VISIT_HREF } from "@/utils/home-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return learningLevels.map((level) => ({ level: level.slug }));
}

const findLevel = (slug: string) => learningLevels.find((l) => l.slug === slug);

export async function generateMetadata(props: PageProps<"/learning/[level]">): Promise<Metadata> {
  const level = findLevel((await props.params).level);
  if (!level) return {};
  return {
    title: `${level.title}: ${level.heading}`,
    description: `${level.title} at ${SCHOOL_FULL_NAME}, North Legon. ${level.summary}`,
  };
}

export default async function LevelPage(props: PageProps<"/learning/[level]">) {
  const level = findLevel((await props.params).level);
  if (!level) notFound();

  const index = learningLevels.indexOf(level);
  const next = learningLevels[index + 1];

  return (
    <>
      <PageHero eyebrow={`Learning · ${level.title}`} title={level.heading} description={level.intro} />

      <Section>
        <LabelledList items={level.items} />
        <Reveal className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={ENQUIRE_HREF}>{level.button}</ButtonLink>
          <ButtonLink href={VISIT_HREF} variant="outline">
            Request a School Visit
          </ButtonLink>
        </Reveal>
      </Section>

      {level.slug === "jhs" && (
        <Section tone="royal">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <SectionHeading
                align="left"
                tone="dark"
                eyebrow="Digital Skills"
                title="Supplementary courses for JHS learners"
                description="Extend learning beyond the regular school day through fee-based late-afternoon computer, IT and introductory cybersecurity classes. Explore the student pathway and contact the programme coordinator for course suitability, fees and detailed schedules."
              />
            </Reveal>
            <Reveal delay={120}>
              <ButtonLink href="/digital-skills/jhs-courses">Explore JHS Digital Skills Courses</ButtonLink>
            </Reveal>
          </div>
        </Section>
      )}

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <CtaBanner
            title={next ? `Next stage: ${next.title}` : "Explore every stage"}
            description={next ? next.summary : "See how learning progresses from Crèche to JHS at Child Time."}
            href={next ? `/learning/${next.slug}` : "/learning"}
            label={next ? `Explore ${next.title}` : "Learning overview"}
          />
        </div>
      </section>
    </>
  );
}
