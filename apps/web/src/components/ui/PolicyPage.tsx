import PageHero from "@/components/ui/PageHero";
import { PlaceholderBlock, RichText } from "@/components/ui/Placeholder";
import Section from "@/components/ui/Section";

export interface PolicySection {
  heading?: string;
  paragraphs: string[];
}

// Shared layout for the Privacy Notice, Cookie Information and Website Terms pages.
export default function PolicyPage({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <Section>
        <div className="mx-auto max-w-3xl">
          {/* TODO: remove once the school approves the completed wording. */}
          <PlaceholderBlock className="mb-12">
            Proposed framework for school approval. Complete it to reflect the actual website, providers and approved
            practices before publication. It is not a completed legal policy.
          </PlaceholderBlock>
          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={section.heading ?? i}>
                {section.heading && (
                  <h2 className="font-display text-2xl font-semibold text-royal-900">{section.heading}</h2>
                )}
                <div className="mt-3 space-y-4 text-lg leading-relaxed text-slate-600">
                  {section.paragraphs.map((p) => (
                    <p key={p}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
