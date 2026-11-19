import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/ui/CtaBanner";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import { Placeholder, PlaceholderBlock } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  coreValues,
  CURRICULUM,
  educationalPhilosophy,
  FOUNDED_LABEL,
  GUIDING_STATEMENT,
  mission,
  MOTTO,
  PROMISE,
  promiseStatement,
  SCHOOL_FULL_NAME,
  SCHOOL_TAGLINE,
  staffCounts,
  STUDENT_POPULATION,
  VISIT_HREF,
  vision,
  yearsOperating,
} from "@/utils/home-content";

export const metadata: Metadata = {
  title: "About the School",
  description: `Get to know ${SCHOOL_FULL_NAME}: our story, mission, vision, values and the people who lead our school.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the school"
        title="Get to know Child Time"
        description={`${SCHOOL_FULL_NAME} is a private school in North Legon, Ghana, offering education from Crèche and Nursery through Junior High School since 1998. ${SCHOOL_TAGLINE}.`}
      />

      {/* Our story */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-gold-400" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(7,29,72,0.5)]">
                <Image
                  src="/school-view.jpg"
                  alt={`The ${SCHOOL_FULL_NAME} building`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading align="left" eyebrow="Our story" title="Our story" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {SCHOOL_FULL_NAME} was established on {FOUNDED_LABEL}. For {yearsOperating()} years the school has
              guided children from their first days in Crèche to the end of Junior High School, following the{" "}
              {CURRICULUM}.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: `${yearsOperating()}`, label: "Years of teaching" },
                { value: `${STUDENT_POPULATION}`, label: "Students" },
                { value: `${staffCounts.teaching}`, label: "Teaching staff" },
                { value: `${staffCounts.nonTeaching}`, label: "Support staff" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-royal-50 p-4 text-center ring-1 ring-royal-100">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-royal-700 sm:text-4xl">{stat.value}</dd>
                  <dd aria-hidden="true" className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <PlaceholderBlock className="mt-6">
              The school&apos;s history in its own words: founder or founders, the reason for establishing the
              school and important milestones.
            </PlaceholderBlock>
          </Reveal>
        </div>
      </Section>

      {/* Welcome from the Founder and School Director */}
      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <div className="flex aspect-[4/5] max-w-sm flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-gold-400 bg-white p-8 text-center">
              <Icon name="user" className="h-14 w-14 text-royal-300" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
                To be supplied by the school
              </p>
              <p className="mt-2 text-royal-900">Approved photograph and descriptive alternative text</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading align="left" eyebrow="Welcome" title="Welcome from the Founder and School Director" />
            <PlaceholderBlock className="mt-6">
              An approved welcome of approximately 100–150 words in the Headteacher&apos;s own voice, describing the
              school&apos;s educational priorities, approach to pupil development and relationship with parents,
              closing with the approved name and title.
            </PlaceholderBlock>
            <p className="mt-6 font-semibold text-royal-900">
              <Placeholder>Headteacher name</Placeholder>{" "}
              ·{" "}
              <Placeholder>Official title</Placeholder>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Vision & mission */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: "star" as const, label: "Our vision", text: vision },
            { icon: "flame" as const, label: "Our mission", text: mission },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 120} className="h-full">
              <article className="h-full rounded-3xl bg-royal-50/60 p-8 ring-1 ring-royal-100 sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-700 text-gold-400">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-royal-900 sm:text-3xl">{item.label}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="royal">
        <Reveal>
          <SectionHeading tone="dark" eyebrow={MOTTO} title="Our core values" />
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => (
            <Reveal
              key={value.title}
              delay={(i % 3) * 100}
              className={`h-full ${i === coreValues.length - 1 && coreValues.length % 3 === 1 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <article className="h-full rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10">
                <span className="font-display text-4xl font-semibold text-gold-400/70">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-royal-100/75">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Educational philosophy */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="How we teach" title="Our educational philosophy" />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              {educationalPhilosophy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Our promise */}
      <Section tone="tint">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src="/childtime-logo.png"
              alt={`${SCHOOL_FULL_NAME} crest with the motto “${MOTTO}”`}
              width={590}
              height={705}
              className="mx-auto mb-10 h-auto w-36 sm:w-44"
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal-600">Our promise</p>
            <p className="mt-5 font-display text-3xl font-semibold text-royal-900 sm:text-4xl">{PROMISE}</p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{promiseStatement}</p>
            <p className="mt-8 font-display text-xl italic text-royal-700">{GUIDING_STATEMENT}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-royal-600">{MOTTO}</p>
          </div>
        </Reveal>
      </Section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <CtaBanner
            title="See the school for yourself"
            description="Explore our learning stages or request a visit to meet our team and ask about your child's education."
            href="/learning"
            label="Explore Learning"
            secondary={{ label: "Request a School Visit", href: VISIT_HREF }}
          />
        </div>
      </section>
    </>
  );
}
