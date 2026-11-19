import type { EnquiryKind, FormConfig, FormField } from "@/types/home";

// Form wording from the content document. Bracketed text is information the school must supply.

const nameField = (label: string): FormField => ({
  name: "name",
  label,
  type: "text",
  required: true,
  autoComplete: "name",
  error: "Please enter your name.",
});

const contactFields: FormField[] = [
  {
    name: "email",
    label: "Email address",
    type: "email",
    group: "contact",
    autoComplete: "email",
    placeholder: "name@example.com",
  },
  {
    name: "phone",
    label: "Telephone number",
    type: "tel",
    group: "contact",
    autoComplete: "tel",
    placeholder: "+233 …",
    hint: "+233 and other international formats are accepted.",
  },
];

export const CONTACT_GROUP_ERROR = "Please provide an email address or telephone number.";

export const forms: Record<EnquiryKind, FormConfig> = {
  admissions: {
    fields: [
      nameField("Parent or guardian name"),
      ...contactFields,
      {
        name: "level",
        label: "Level or class of interest",
        type: "select",
        required: true,
        // TODO: approved options only. Confirm actual class names with the school.
        options: ["Nursery", "Kindergarten", "Primary", "JHS"],
        error: "Please select a level.",
      },
      {
        name: "entryTerm",
        label: "Intended entry term or academic year",
        type: "text",
        required: true,
        placeholder: "e.g. Second term, 2026/2027",
        error: "Please enter an intended entry term.",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        hint: "Please avoid including sensitive information about your child.",
      },
    ],
    submitLabel: "Send Enquiry",
    privacyText: "Read our Privacy Notice to understand how we use your enquiry information.",
    successMessage:
      "Thank you. We have received your enquiry. Our team will contact you within [approved response time]. This is not an admission offer.",
    failureMessage:
      "We could not submit your enquiry. Please try again or contact us at [verified school contact].",
  },
  visit: {
    fields: [
      nameField("Contact name"),
      ...contactFields,
      {
        name: "visitAt",
        label: "Preferred visit date and time",
        type: "datetime-local",
        required: true,
        hint: "Availability is subject to confirmation.",
        error: "Please enter a preferred visit date and time.",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        hint: "Tell us what you would like to discuss; avoid sensitive child information.",
      },
    ],
    submitLabel: "Send Visit Request",
    privacyText: "Read our Privacy Notice to understand how we handle your request.",
    successMessage:
      "Thank you. We have received your visit request. Our team will contact you within [approved response time] to confirm a suitable appointment. Your visit is not yet confirmed.",
    failureMessage: "We could not submit your request. Please try again or contact the school at [verified contact].",
  },
  course: {
    fields: [
      nameField("Contact name"),
      ...contactFields,
      {
        name: "pathway",
        label: "Pathway",
        type: "select",
        required: true,
        options: ["JHS Student", "Workforce"],
        error: "Please select a pathway.",
      },
      {
        name: "guardian",
        label: "I am the learner's parent or guardian",
        type: "checkbox",
        required: true,
        showWhen: { field: "pathway", equals: "JHS Student" },
        hint: "For JHS enquiries, the contact must be a parent or guardian.",
        error: "JHS course enquiries must come from a parent or guardian.",
      },
      {
        name: "course",
        label: "Course of interest",
        type: "select",
        required: true,
        // TODO: list only the courses the school approves.
        options: [
          "Computer foundations",
          "Practical applications",
          "Workplace computer skills",
          "Office productivity",
          "IT foundations",
          "Cybersecurity foundations",
          "Not Sure",
        ],
        error: "Please select a course, or choose Not Sure.",
      },
      {
        name: "skillLevel",
        label: "Current skill level",
        type: "select",
        required: true,
        options: ["New to computers", "Some experience", "Confident user", "Not Sure"],
        error: "Please select your current skill level.",
      },
      {
        name: "attendance",
        label: "Preferred attendance period",
        type: "select",
        required: true,
        options: ["Late afternoon", "Evening", "Not Sure"],
        error: "Please select a preferred attendance period.",
      },
      {
        name: "startPeriod",
        label: "Intended start period",
        type: "text",
        required: true,
        placeholder: "e.g. January 2027",
        error: "Please enter an intended start period.",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        hint: "Optional. Please do not include identity documents, payment information or sensitive records.",
      },
    ],
    submitLabel: "Request Course Details",
    privacyText: "Read our Privacy Notice to understand how we use your information.",
    successMessage:
      "Thank you. We have received your course enquiry. Our coordinator will contact you to discuss suitable courses, fees and class schedules within [approved response time]. Your enquiry does not confirm enrolment.",
    failureMessage: "We could not submit your enquiry. Please try again or contact [verified programme contact].",
  },
};

/**
 * Stores an enquiry. Success messages must reflect actual storage, so this reports failure
 * until a real endpoint exists.
 * TODO: post to an apps/api enquiries endpoint that validates on the server, stores the record
 * securely as its own enquiry type, and notifies the school.
 */
export async function submitEnquiry(kind: EnquiryKind, data: Record<string, string>): Promise<boolean> {
  void kind;
  void data;
  return false;
}
