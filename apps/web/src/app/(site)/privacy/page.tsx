import type { Metadata } from "next";
import PolicyPage from "@/components/ui/PolicyPage";
import { SCHOOL_FULL_NAME } from "@/utils/home-content";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: `How ${SCHOOL_FULL_NAME} uses information submitted through this website.`,
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy Notice"
      title="How we use website enquiry information"
      description={`${SCHOOL_FULL_NAME} uses information submitted through this website to respond to admissions enquiries, school visit requests and supplementary course enquiries.`}
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "Your name, the contact details you provide, the level or class of interest and intended entry term for an admissions enquiry, your preferred visit date and time for a visit request, and any optional message. [Confirm technical information recorded by the website and any analytics.]",
            "For supplementary course enquiries, we also collect the selected pathway, course interest, current skill level, preferred attendance period and intended start period; for JHS enquiries, a parent or guardian provides the contact details.",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "We use your information to respond, arrange follow-up and manage the status of your request. An enquiry is not an admission application or an offer of a place.",
            "We also use course enquiries to discuss suitability and provide relevant fees, schedules and enrolment guidance. A course enquiry does not reserve a place.",
          ],
        },
        {
          heading: "Who can access it",
          paragraphs: [
            "[Authorised school roles, including the programme coordinator, and relevant hosting, email or other service providers; their purpose and any approved sharing.]",
          ],
        },
        {
          heading: "Where it is handled",
          paragraphs: ["[Confirmed hosting location, provider access arrangements and any relevant handling outside Ghana.]"],
        },
        {
          heading: "How long we retain it",
          paragraphs: ["[The school-approved retention period and what triggers deletion.]"],
        },
        {
          heading: "Your questions and requests",
          paragraphs: [
            "Contact [approved school privacy role and verified channel] about your information, corrections, deletion requests or other applicable rights. [Approved handling process and any applicable qualifications.]",
            "Please avoid submitting identity documents, medical information or detailed pupil records through public website enquiry forms.",
          ],
        },
        {
          heading: "Photographs and videos",
          paragraphs: [
            "[The school's approved permission process and how to request review or removal through a verified contact.]",
          ],
        },
        {
          heading: "External services",
          paragraphs: [
            "Links to maps, social media, WhatsApp or other websites may open external services with their own privacy practices. [Identify services actually used.]",
          ],
        },
        { paragraphs: ["Last updated: [approved publication date]."] },
      ]}
    />
  );
}
