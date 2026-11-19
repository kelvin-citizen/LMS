import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import LabelledList from "@/components/ui/LabelledList";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { SCHOOL_FULL_NAME, schoolLifeItems, VISIT_HREF } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "School Life",
  description: `Facilities, clubs, sports, pupil welfare and services at ${SCHOOL_FULL_NAME}, North Legon.`,
};

export default function SchoolLifePage() {
  return (
    <>
      <PageHero
        eyebrow="School Life"
        title="Discover life beyond lessons"
        description="A school visit can help you understand the spaces, routines and opportunities that shape the pupil experience. Explore the facilities and activities available at Child Time and ask our team about arrangements for your child's level."
      />
      <Section>
        <LabelledList items={schoolLifeItems} />
        <Reveal className="mt-10">
          <ButtonLink href={VISIT_HREF}>Request a School Visit</ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
