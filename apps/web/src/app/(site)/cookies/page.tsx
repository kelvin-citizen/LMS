import type { Metadata } from "next";
import PolicyPage from "@/components/ui/PolicyPage";
import { SCHOOL_FULL_NAME } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Cookie Information",
  description: `Cookies and similar storage used by the ${SCHOOL_FULL_NAME} website.`,
};

// TODO: if optional analytics or embedded services are added, keep them disabled until consent and add
// controls: Accept Optional Cookies • Reject Optional Cookies • Manage Preferences. Never show a banner
// that misrepresents actual tracking behaviour.

export default function CookiesPage() {
  return (
    <PolicyPage
      eyebrow="Cookie Information"
      title="Cookies on this website"
      description="What this website stores in your browser and why."
      sections={[
        {
          heading: "Essential cookies and storage",
          paragraphs: ["This website uses [identify actual essential cookies or storage and their purpose]."],
        },
        {
          heading: "Optional cookies and embedded services",
          paragraphs: [
            "[If optional analytics or embedded services are used, name each provider, explain the data and purpose, and state duration and how preferences can be changed.]",
          ],
        },
      ]}
    />
  );
}
