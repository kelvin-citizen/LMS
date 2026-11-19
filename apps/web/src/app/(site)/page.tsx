import ButtonLink from "@/components/ui/ButtonLink";
import CtaBanner from "@/components/ui/CtaBanner";
import Hero from "@/components/ui/Hero";
import Icon from "@/components/ui/Icon";
import LevelCards from "@/components/ui/LevelCards";
import { PlaceholderBlock } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { COURSE_HREF, ENQUIRE_HREF, PROMISE, VISIT_HREF } from "@/utils/home-content";

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="!pt-8">
        <Reveal>
          <SectionHeading
            eyebrow="Learning"
            title="Learning at every stage"
            description="From a child's first days in Crèche to preparation for the next stage after JHS."
          />
        </Reveal>
        <div className="mt-14">
          <LevelCards />
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Learning strengths"
              title="Discover our learning strengths"
              description="See how selected subjects and enhanced learning opportunities can support your child's development. Explore practical examples from our classrooms and the opportunities available at each stage."
            />
            <ButtonLink href="/learning" variant="royal" className="mt-8">
              Explore Learning
            </ButtonLink>
          </Reveal>
          <Reveal delay={120}>
            <PlaceholderBlock>
              Two or three approved learning highlights, each with a short description, a pupil benefit, an
              approved image or example, and a link to the relevant learning page.
            </PlaceholderBlock>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About"
              title="Get to know Child Time"
              description={`Our promise: ${PROMISE} We nurture the whole child, intellectually, socially, emotionally and morally, in a safe and inclusive environment. Read about our vision, values and philosophy, and arrange a visit to ask the questions that matter to your family.`}
            />
            <ButtonLink href="/about" variant="royal" className="mt-8">
              About Our School
            </ButtonLink>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-royal-900 p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">Admissions</p>
              <h3 className="mt-4 font-display text-3xl font-semibold">Interested in joining Child Time?</h3>
              <p className="mt-4 text-lg leading-relaxed text-royal-100/80">
                Contact our admissions team to discuss the class of interest, entry arrangements and the next
                steps.
              </p>
              <p className="mt-5 rounded-2xl bg-gold-400/10 p-4 font-semibold text-gold-200 ring-1 ring-gold-400/40">
                Admissions for the 2026/2027 academic year are now open for all levels.
              </p>
              <ButtonLink href={ENQUIRE_HREF} className="mt-8">
                Request Admissions Information
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="royal">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Digital Skills and Cybersecurity"
              title="Supplementary digital skills learning"
              description="Build practical computer and IT skills and progress towards cybersecurity learning. Fee-based supplementary courses serve JHS students and working adults, with late-afternoon and evening classes. Course fees and detailed schedules are provided upon request following a discussion of your interests."
            />
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
            <ButtonLink href={COURSE_HREF}>Request Course Details</ButtonLink>
            <ButtonLink href="/digital-skills" variant="outline">
              Programme Overview
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading align="left" eyebrow="News and Events" title="Latest from the school" />
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            <ButtonLink href="/news" variant="outline">
              News and Events
            </ButtonLink>
            <ButtonLink href="/parents#calendar" variant="outline">
              View Term Calendar
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-royal-100 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                  <Icon name="calendar" />
                </span>
                <PlaceholderBlock className="mt-5 flex-1">
                  Approved news article or notice: title, publication date, short summary and Read More link.
                </PlaceholderBlock>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <CtaBanner
            title="Visit Child Time"
            description="Come and learn more about our school in North Legon. Send us your preferred visit date and time, and our team will contact you to confirm availability."
            href={VISIT_HREF}
            label="Request a School Visit"
          />
        </div>
      </section>
    </>
  );
}
