import type { Metadata } from "next";
import EnquiryForm from "@/components/forms/EnquiryForm";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Request Course Details",
  description:
    "Ask the Child Time programme coordinator about digital skills and cybersecurity courses, fees and class schedules.",
};

export default async function RequestDetailsPage(props: PageProps<"/digital-skills/request-details">) {
  const { pathway } = await props.searchParams;
  const initialPathway = pathway === "jhs" ? "JHS Student" : pathway === "workforce" ? "Workforce" : undefined;

  return (
    <>
      <PageHero
        eyebrow="Digital Skills"
        title="Request Course Details"
        description="Tell us what you would like to learn. Our programme coordinator will discuss suitable options and provide the relevant fees and class schedules."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="What happens next"
              title="Speak with the programme coordinator"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                This is an enquiry and does not confirm registration or reserve a place. For JHS enquiries, the
                contact must be a parent or guardian.
              </p>
              <p>
                The coordinator will discuss your goals and prerequisites, then provide fees and available
                schedules. Before enrolment, we explain tuition, any registration or additional charges, payment
                terms, refund and cancellation rules, equipment requirements and completion recognition.
              </p>
              <p className="text-base">
                Please do not send identity documents, payment information or sensitive records through this form.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-white p-6 ring-1 ring-royal-100 shadow-[0_30px_60px_-30px_rgba(7,29,72,0.3)] sm:p-10">
              <EnquiryForm kind="course" initialValues={initialPathway ? { pathway: initialPathway } : undefined} />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
