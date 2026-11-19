import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";
import LevelCards from "@/components/ui/LevelCards";
import PageHero from "@/components/ui/PageHero";
import { RichText } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ENQUIRE_HREF, learningHighlights, SCHOOL_FULL_NAME } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Learning from Nursery to JHS",
  description: `Explore Nursery, Kindergarten, Primary and JHS at ${SCHOOL_FULL_NAME} in North Legon, Ghana.`,
};

export default function LearningPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning"
        title="Learning from Nursery to JHS"
        description={`Explore the stages available at ${SCHOOL_FULL_NAME}. Each level page explains the classes served, the learning approach, examples of activities and preparation for the next stage. Our admissions team can discuss the appropriate entry point for your child.`}
      />

      <Section>
        <LevelCards />
        <Reveal className="mt-12 flex justify-center">
          <ButtonLink href={ENQUIRE_HREF}>Enquire About Admission</ButtonLink>
        </Reveal>
      </Section>

      {/* Draft highlight copy: publish only once the school confirms each activity and level. */}
      <Section tone="tint">
        <Reveal>
          <SectionHeading
            eyebrow="Learning highlights"
            title="Selected learning strengths"
            description="Examples of the learning opportunities we are confirming with each class."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {learningHighlights.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 120} className="h-full">
              <article className="h-full rounded-3xl bg-white p-7 ring-1 ring-royal-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-700 text-gold-400">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-royal-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  <RichText text={`${item.description} [Add an approved example.]`} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
