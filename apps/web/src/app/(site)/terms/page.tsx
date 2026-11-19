import type { Metadata } from "next";
import PolicyPage from "@/components/ui/PolicyPage";
import { SCHOOL_FULL_NAME } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Website Terms",
  description: `Terms of use for the ${SCHOOL_FULL_NAME} website.`,
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Website Terms"
      title="Website terms"
      description="Please read these terms before relying on information from this website."
      sections={[
        {
          paragraphs: [
            "The information on this website introduces the school and its current published arrangements. Please contact the school to confirm admission availability, fees and visit appointments. An enquiry submission does not guarantee admission, and a visit request requires school confirmation.",
          ],
        },
        { heading: "Website content and media", paragraphs: ["[Approved ownership and permitted-use terms.]"] },
        { heading: "External links", paragraphs: ["[Approved terms.]"] },
        { heading: "Questions", paragraphs: ["[Verified school contact.]"] },
        { paragraphs: ["Last updated: [approved date]."] },
      ]}
    />
  );
}
