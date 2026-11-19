import type { ReactNode } from "react";

export type IconName =
  | "book"
  | "flame"
  | "shield"
  | "users"
  | "sparkles"
  | "trophy"
  | "palette"
  | "laptop"
  | "heart"
  | "check"
  | "arrow-right"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "quote"
  | "menu"
  | "close"
  | "chevron-down"
  | "star"
  | "user"
  | "lock"
  | "eye"
  | "eye-off"
  | "arrow-left"
  | "login"
  | "calendar"
  | "image"
  | "file"
  | "message"
  | "graduation"
  | "briefcase"
  | "external";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

/** A labelled line of copy. `placeholder` is shown as "to be supplied" until the school provides it. */
export interface LabelledItem {
  label: string;
  text?: string;
  placeholder?: string;
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface IconCard extends TitledItem {
  icon: IconName;
}

export interface LearningLevel {
  slug: string;
  title: string;
  icon: IconName;
  /** One line used on the Home page and the learning overview. */
  summary: string;
  heading: string;
  intro: string;
  items: LabelledItem[];
  button: string;
}

export interface FaqItem {
  question: string;
  answer?: string;
  placeholder?: string;
}

/** Contact details. A missing value means the school has not verified it yet. */
export interface ContactInfo {
  locality: string;
  postal?: string;
  address?: string;
  gps?: string;
  phone?: string;
  admissionsPhone?: string;
  email?: string;
  hours?: string;
}

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export interface IconProps {
  name: IconName;
  className?: string;
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export interface HeroHighlight {
  icon: IconName;
  label: string;
  value: string;
}

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export interface CtaBannerProps {
  title: string;
  description: string;
  href: string;
  label: string;
  secondary?: NavLink;
}

export interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "gold" | "royal" | "outline";
  className?: string;
}

// Enquiry forms
export type EnquiryKind = "admissions" | "visit" | "course";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "datetime-local" | "checkbox";
  required?: boolean;
  /** Only shown, and only required, when another field has this value. */
  showWhen?: { field: string; equals: string };
  options?: string[];
  hint?: string;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
  /** Email + telephone: at least one of the fields in this group is required. */
  group?: "contact";
}

export interface FormConfig {
  fields: FormField[];
  submitLabel: string;
  privacyText: string;
  successMessage: string;
  failureMessage: string;
}

export interface TermWeek {
  week: number;
  dates: string;
  activities: string[];
  note?: string;
}

export interface TermCalendar {
  title: string;
  range: string;
  weeks: TermWeek[];
}
