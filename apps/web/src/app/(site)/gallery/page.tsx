import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/ui/PageHero";
import { RichText } from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { SCHOOL_FULL_NAME } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photographs and videos of learning, activities and school events at ${SCHOOL_FULL_NAME}.`,
};

// Suggested albums: publish an album only where approved media and permissions exist.
// Never pair pupil names with identifiable photos without approval; never present stock or
// generated images as real pupils, staff or facilities. Do not autoplay audio or video.
const albums = [
  "Nursery and Kindergarten",
  "Primary",
  "JHS",
  "Learning Activities",
  "Sports and Enrichment",
  "School Events",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of school life"
        description="Explore approved photographs and videos of learning, activities and school events. Browse by educational level or activity."
      />

      <Section>
        <Reveal>
          <SectionHeading align="left" eyebrow="Albums" title="Browse by level or activity" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album, i) => (
            <Reveal key={album} delay={(i % 3) * 100} className="h-full">
              <article className="h-full overflow-hidden rounded-3xl border border-royal-100">
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border-b-2 border-dashed border-gold-400 bg-gold-50/60 text-center text-royal-800">
                  <Icon name="image" className="h-10 w-10 text-gold-600" />
                  <span className="px-6 text-sm">Approved photographs to be supplied</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-royal-900">{album}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    <RichText text="[Album date where relevant, brief introduction and selected images with captions and descriptive alternative text.]" />
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Videos" title="School videos" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              <RichText text="[Approved title, short description, permitted video link or embed and captions where available.]" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-royal-100">
              <h3 className="font-bold text-royal-900">Questions about an image or video?</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                <RichText text="If you have a question or removal request about an image or video, please contact [approved school contact]." />
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
