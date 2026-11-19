import type {
  ContactInfo,
  FaqItem,
  HeroHighlight,
  IconCard,
  LabelledItem,
  LearningLevel,
  NavItem,
  NavLink,
  TermCalendar,
  TitledItem,
} from "@/types/home";

// Shared site copy, taken from "Childtime Website Content (Aligned)" and updated with the school's
// completed website requirement form and term schedule (Nov 2026).
// Anything in a `placeholder` field is information the school still has to supply. It is shown on the
// site as a highlighted "to be supplied" note so nothing invented gets published. Resolve every
// placeholder and get school approval before launch.

// Identity details below come from the school's completed "Website Requirement Form" (Nov 2026).
// Official registered name: "Child Time Preparatory and J.H.S".
export const SCHOOL_NAME = "Child Time Preparatory";
export const SCHOOL_FULL_NAME = "Child Time Preparatory & JHS";
export const MOTTO = "Knowledge Is Golden";
/** The school's official tagline. */
export const SCHOOL_TAGLINE = "Inspiring Young Minds to Achieve Greatness";
export const GUIDING_STATEMENT = "Rooted in Faith, Empowered by Knowledge, Destined for Excellence.";
export const PROMISE = "To Educate, Inspire, and Empower Every Child.";
export const SCHOOL_SUMMARY =
  "A private school in North Legon, Ghana, serving learners from Crèche and Nursery through Junior High School.";

/** Founded 12 September 1998. */
export const FOUNDED = new Date(1998, 8, 12);
export const FOUNDED_LABEL = "12 September 1998";

/** Whole years since the school was founded, so the figure stays current without edits. */
export function yearsOperating(now: Date = new Date()): number {
  const years = now.getFullYear() - FOUNDED.getFullYear();
  const beforeAnniversary =
    now.getMonth() < FOUNDED.getMonth() ||
    (now.getMonth() === FOUNDED.getMonth() && now.getDate() < FOUNDED.getDate());
  return beforeAnniversary ? years - 1 : years;
}

export const staffCounts = { teaching: 17, nonTeaching: 3 };

/** Current student population, supplied by the school (Nov 2026). */
export const STUDENT_POPULATION = 336;

export const CURRICULUM = "Ghana Education Service (GES) curriculum";

/** Official admission application form supplied by the school. */
export const ADMISSION_FORM_HREF = "/documents/child-time-admission-form.pdf";

export const learningLinks: NavLink[] = [
  { label: "Learning overview", href: "/learning" },
  { label: "Nursery", href: "/learning/nursery" },
  { label: "Kindergarten", href: "/learning/kindergarten" },
  { label: "Primary", href: "/learning/primary" },
  { label: "JHS", href: "/learning/jhs" },
];

export const digitalSkillsLinks: NavLink[] = [
  { label: "Programme Overview", href: "/digital-skills" },
  { label: "JHS Student Courses", href: "/digital-skills/jhs-courses" },
  { label: "Workforce and Career Development", href: "/digital-skills/workforce" },
  { label: "Request Course Details", href: "/digital-skills/request-details" },
];

// Main navigation, in the order set out in the content document.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Learning", href: "/learning", children: learningLinks },
  { label: "Digital Skills", href: "/digital-skills", children: digitalSkillsLinks },
  { label: "Admissions", href: "/admissions" },
  { label: "School Life", href: "/school-life" },
  { label: "Parents and Resources", href: "/parents" },
  { label: "News and Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact and Visit", href: "/contact" },
];

export const ENQUIRE_HREF = "/admissions#enquiry";
export const VISIT_HREF = "/contact#visit";
export const COURSE_HREF = "/digital-skills/request-details";

export const footerLinks: NavLink[] = [
  { label: "Digital Skills and Cybersecurity", href: "/digital-skills" },
  { label: "Admissions", href: "/admissions" },
  { label: "Request a School Visit", href: VISIT_HREF },
  { label: "Parents and Resources", href: "/parents" },
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Cookie Information", href: "/cookies" },
  { label: "Website Terms", href: "/terms" },
];

// Phone, admissions line, email, hours and postal address were supplied by the school (Nov 2026).
// Leave a field undefined until it is verified; the site shows a "to be supplied" note in its place.
export const contact: ContactInfo = {
  locality: "North Legon, Ghana",
  postal: "P.O. Box KIA 16222, Airport, Accra",
  address: undefined, // verified street address and landmark (not yet supplied)
  gps: undefined, // GhanaPost GPS address (not yet supplied)
  phone: "020 819 1651",
  admissionsPhone: "024 014 6893",
  email: "childtimeschool21@gmail.com",
  hours: "6:30 am – 4:00 pm", // TODO: confirm the office days with the school
};

/** `tel:` link for a local Ghana number, e.g. "020 819 1651" → "tel:+233208191651". */
export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `tel:${digits.startsWith("0") ? `+233${digits.slice(1)}` : `+${digits}`}`;
}

export const contactPlaceholders = {
  address: "verified street address and landmark",
  gps: "GhanaPost GPS address",
  phone: "verified +233 number",
  email: "verified school email",
  hours: "approved days and times",
  responseTime: "approved response time",
  socials: "approved social accounts",
};

// Home
export const heroHighlights: HeroHighlight[] = [
  { icon: "sparkles", label: "Classes", value: "Crèche to JHS" },
  { icon: "flame", label: "Our motto", value: MOTTO },
  { icon: "star", label: "Established", value: `${FOUNDED.getFullYear()} · ${yearsOperating()} years` },
  { icon: "users", label: "Students", value: `${STUDENT_POPULATION} learners` },
];

// Learning levels. Ages and subjects are from the school's requirement form (Nov 2026); every level
// follows the Ghana Education Service curriculum. The Nursery page also covers Crèche (from 2 years).
export const learningLevels: LearningLevel[] = [
  {
    slug: "nursery",
    title: "Crèche & Nursery",
    icon: "heart",
    summary: "From 2 years: early learning, care and daily routines.",
    heading: "A first step into school life",
    intro:
      "Starting Crèche or Nursery is an important step for children and families. Learn about the class routines, care arrangements and early learning activities available at Child Time so you can prepare for your child's first days.",
    items: [
      { label: "Classes and entry age", text: "Crèche and Nursery. Children may join from 2 years." },
      {
        label: "Subjects (Nursery)",
        text: "English Language (Literacy), Mathematics (Numeracy), Colour Work, Phonics and Environmental Studies.",
      },
      {
        label: "Learning approach",
        placeholder: "Approved description of play, communication, social development and early exploration.",
      },
      {
        label: "Activities",
        placeholder:
          "Two or three confirmed examples, such as shared stories, songs, sorting or creative play, and how each activity supports development.",
      },
      {
        label: "Care and routines",
        placeholder:
          "Confirmed arrival and collection arrangements, daily schedule, rest or toileting support, and parent communication.",
      },
      {
        label: "Progression",
        placeholder: "The school's approved readiness and transition arrangements for Kindergarten.",
      },
    ],
    button: "Enquire About Nursery",
  },
  {
    slug: "kindergarten",
    title: "Kindergarten",
    icon: "sparkles",
    summary: "From 4 years: literacy, numeracy and creative learning that prepare children for Primary.",
    heading: "Growing confidence for the next stage",
    intro:
      "Kindergarten is a time to build confidence and prepare for Primary. Explore the school's approach to early learning, classroom participation and the skills children practise during the school day.",
    items: [
      { label: "Classes and entry age", text: "Kindergarten. Children may join from 4 years." },
      {
        label: "Subjects",
        text: "English Language (Literacy), Mathematics (Numeracy), Our World Our People (OWOP), Creative Arts, Computing, Colour Work, Phonics and Writing.",
      },
      {
        label: "Learning approach",
        placeholder:
          "Approved explanation of early literacy, numeracy, social development and hands-on learning.",
      },
      {
        label: "Activities and selected highlights",
        placeholder: "Two or three approved activities and their benefits, supported by an approved example or image.",
      },
      { label: "Daily routines and care", placeholder: "Confirmed arrangements and how parents receive updates." },
      { label: "Progression", placeholder: "Preparation and transition to Primary 1." },
    ],
    button: "Enquire About Kindergarten",
  },
  {
    slug: "primary",
    title: "Primary",
    icon: "book",
    summary: "Basic 1–6, from 6 years: a broad GES curriculum including History, Twi, French and Computing.",
    heading: "Building knowledge and independence",
    intro:
      "Explore Primary education at Child Time Preparatory. Find out how classroom learning, practical activities and opportunities for participation support pupils as they progress towards JHS.",
    items: [
      { label: "Classes and entry age", text: "Basic 1 to Basic 6. Children may join Basic 1 from 6 years." },
      {
        label: "Subjects",
        text: "English Language (Literacy), Mathematics (Numeracy), Science, Creative Arts, Religious and Moral Education (RME), Computing, History, Ghanaian Language (Twi) and French.",
      },
      { label: "Curriculum", text: "Ghana Education Service (GES) curriculum." },
      {
        label: "Learning approach",
        placeholder:
          "Approved description of teaching, classroom participation, assessment, feedback and pupil support.",
      },
      {
        label: "Selected learning strengths",
        placeholder:
          "Two or three confirmed subjects or enhanced opportunities. For each: what pupils do, the benefit, and an approved example of learning or pupil work.",
      },
      {
        label: "Pupil development",
        placeholder: "Confirmed opportunities to develop responsibility, communication, teamwork and independence.",
      },
      { label: "Progression", placeholder: "Approved explanation of preparation and transition to JHS." },
    ],
    button: "Enquire About Primary",
  },
  {
    slug: "jhs",
    title: "JHS",
    icon: "graduation",
    summary: "JHS 1–3: the full GES subject range and preparation for the BECE.",
    heading: "Preparing for the next stage",
    intro:
      "Explore JHS at Child Time Preparatory and speak with our team about learning, examination preparation and progression beyond basic school.",
    items: [
      { label: "Classes served", text: "JHS 1 to JHS 3." },
      {
        label: "Subjects",
        text: "English Language (Literacy), Mathematics (Numeracy), Science, Social Studies, Religious and Moral Education (RME), Creative Arts and Design (CAD), Career Technology (CT), Computing, Ghanaian Language (Twi) and French.",
      },
      { label: "Curriculum", text: "Ghana Education Service (GES) curriculum, leading to the BECE." },
      {
        label: "Learning approach",
        placeholder: "Approved description of teaching, assessment, practical work, feedback and pupil support.",
      },
      {
        label: "Selected learning strengths",
        placeholder: "Two or three confirmed highlights, with a pupil benefit and approved example for each.",
      },
      {
        label: "Examination preparation",
        placeholder:
          "Confirmed BECE preparation arrangements and any revision, practice assessments or additional support actually offered.",
      },
      {
        label: "Progression guidance",
        placeholder: "Arrangements for Senior High School transition and any guidance provided.",
      },
    ],
    button: "Enquire About JHS",
  },
];

// Draft learning-highlight copy. Use only where the school confirms the activity and level.
export const learningHighlights: IconCard[] = [
  {
    icon: "book",
    title: "Literacy and communication",
    description:
      "Through [approved reading, writing or discussion activity], pupils practise expressing ideas and understanding information.",
  },
  {
    icon: "sparkles",
    title: "Mathematics and problem solving",
    description:
      "Pupils use [confirmed practical activity] to explore mathematical ideas and explain their reasoning.",
  },
  {
    icon: "flame",
    title: "Science and STEM",
    description:
      "Through [confirmed investigation or project], pupils practise observing, questioning and connecting ideas with everyday life.",
  },
  {
    icon: "laptop",
    title: "Computing and digital confidence",
    description:
      "Pupils develop practical skills through [confirmed computer activity], with guidance on responsible technology use.",
  },
];

// About
// School-supplied vision, mission, values, philosophy and promise.
export const vision =
  "To be a leading educational institution in Ghana, nurturing generations of knowledgeable, compassionate, innovative, and principled leaders who are grounded in strong values, empowered by knowledge, and inspired to pursue excellence while making meaningful contributions to their communities, nation, and the world.";

export const mission =
  "To provide a safe, nurturing, and inclusive learning environment that inspires every child to discover and achieve their God-given potential. Through quality education, academic excellence, character development, and strong moral values, we are committed to equipping students with the knowledge, confidence, creativity, and essential life skills needed to succeed, lead with integrity, and serve society with compassion and purpose.";

export const coreValues: TitledItem[] = [
  {
    title: "Faith and Moral Values",
    description:
      "We encourage faith, gratitude, humility, respect, and strong moral principles that guide students in making responsible choices and living purposeful lives.",
  },
  {
    title: "Knowledge and Wisdom",
    description:
      "We believe knowledge is golden. We foster curiosity, critical thinking, and a lifelong passion for learning, empowering students to apply knowledge with wisdom and confidence.",
  },
  {
    title: "Academic Excellence",
    description:
      "We maintain high educational standards and encourage dedication, creativity, perseverance, and continuous improvement, helping every child achieve their fullest potential.",
  },
  {
    title: "Integrity and Character",
    description:
      "We promote honesty, accountability, respect, and ethical conduct, developing individuals who demonstrate strong character in their words and actions.",
  },
  {
    title: "Discipline and Responsibility",
    description:
      "We cultivate self-discipline, resilience, personal responsibility, and respect for others as essential foundations for success.",
  },
  {
    title: "Compassion and Service",
    description:
      "We nurture kindness, empathy, generosity, and a spirit of service, encouraging students to contribute positively to their communities.",
  },
  {
    title: "Leadership and Innovation",
    description:
      "We inspire students to become confident, resourceful, and forward-thinking leaders who embrace challenges, solve problems, and create positive change.",
  },
];

export const educationalPhilosophy: string[] = [
  `At ${SCHOOL_FULL_NAME}, we believe every child possesses unique gifts, abilities, and the potential to achieve greatness.`,
  "We recognize that education extends beyond academic achievement. It involves nurturing the whole child—intellectually, socially, emotionally, and morally—while fostering a sense of purpose, responsibility, and respect for others.",
  "Through a strong partnership among educators, parents, students, and the community, we strive to create an environment where children feel valued, supported, and inspired to reach their highest potential.",
  "We believe that when knowledge is combined with faith, wisdom, integrity, and perseverance, children are equipped not only to succeed academically but also to lead meaningful and productive lives.",
];

export const promiseStatement =
  "We are committed to preparing students for a future filled with opportunity, responsibility, and purpose.";

// Admissions
export const admissionSteps: TitledItem[] = [
  {
    title: "Enquire or request a visit",
    description: "Tell us the level of interest and intended entry term.",
  },
  {
    title: "Obtain application guidance",
    description: "Our team explains how to obtain and submit the school's admission form.",
  },
  {
    title: "Discuss class placement",
    description:
      "Complete any assessment, interview or records review required under the approved admissions process.",
  },
  {
    title: "Complete registration",
    description:
      "Follow the school's instructions after an admission decision, including any required documents and payments.",
  },
];

export const admissionsFaqs: FaqItem[] = [
  {
    question: "When can my child join?",
    answer: "Admissions for the 2026/2027 academic year are open for all levels.",
    placeholder: "Whether mid-year admission is available.",
  },
  {
    question: "What is the minimum age for each level?",
    answer: "Crèche and Nursery from 2 years, Kindergarten from 4 years and Basic 1 from 6 years.",
  },
  {
    question: "Which class is suitable?",
    answer: "Contact admissions to discuss placement and any assessment requirements.",
  },
  { question: "Is an assessment required?", placeholder: "Approved answer by level." },
  { question: "What documents are needed?", answer: "See the list of required documents on this page." },
  { question: "Can we visit first?", answer: "Request a visit; the school will confirm availability." },
  {
    question: "How much are the admission fees?",
    answer:
      "The admission and registration fee is GH₵150.00. For school fees, call the admissions office on 024 014 6893.",
  },
];

// Digital Skills and Cybersecurity
export const jhsCourses: TitledItem[] = [
  {
    title: "Computer foundations",
    description: "Computer use, typing, file management, internet research and responsible digital behaviour.",
  },
  {
    title: "Practical applications",
    description: "Word processing, spreadsheets, presentations and projects that support school learning.",
  },
  {
    title: "IT foundations",
    description:
      "Introductory hardware, operating systems, networks, troubleshooting and basic coding, where offered.",
  },
  {
    title: "Cybersecurity foundations",
    description:
      "Online privacy, strong passwords, multifactor authentication, phishing and scam awareness, software updates and responsible use.",
  },
  {
    title: "Further exploration",
    description: "Supervised defensive exercises, practical projects and introductions to cybersecurity careers.",
  },
];

export const workforceCourses: TitledItem[] = [
  { title: "Workplace computer skills", description: "File organisation, email, internet use and online collaboration." },
  {
    title: "Office productivity",
    description: "Word, Excel and PowerPoint applied to reports, budgets, data organisation and presentations.",
  },
  {
    title: "IT foundations",
    description: "Operating systems, networking, troubleshooting and introductory IT support.",
  },
  {
    title: "Cybersecurity foundations",
    description:
      "Account security, phishing recognition, access protection, secure data handling and incident reporting.",
  },
  {
    title: "Career progression",
    description:
      "Further technical study, authorised defensive practice, portfolio projects and career preparation where offered.",
  },
];

export const schoolLifeItems: LabelledItem[] = [
  {
    label: "Facilities",
    text: "Classrooms for every level, an ICT laboratory, a library and a playground.",
  },
  {
    label: "Clubs and enrichment",
    placeholder:
      "Confirmed activities, participating levels, meeting arrangements and any additional cost, with the benefit of each activity.",
  },
  {
    label: "Play and recreation",
    text: "Pupils use the school playground during break times. Aerobics, indoor games, quizzes and Pick & Act take place during the term.",
  },
  {
    label: "Pupil welfare",
    placeholder:
      "Approved description of supervision, behaviour expectations, wellbeing support, reporting concerns and parent communication, with a link to the relevant policy.",
  },
  {
    label: "Additional services",
    text: "School transport is available. Contact the school office for routes and arrangements.",
  },
];

// Academic calendar, from the school's "First Term Academic Schedule, September – December 2026".
// Dates are as published by the school (the schedule's title says 18 December; its last row says 17th).
export const termCalendar: TermCalendar = {
  title: "First Term 2026/2027",
  range: "8 September – 17 December 2026",
  weeks: [
    { week: 1, dates: "8 – 11 Sep", activities: ["Teaching and learning"], note: "Term begins" },
    { week: 2, dates: "14 – 18 Sep", activities: ["Teaching and learning"] },
    { week: 3, dates: "21 – 25 Sep", activities: ["Teaching and learning"] },
    { week: 4, dates: "28 Sep – 2 Oct", activities: ["Teaching and learning", "Aerobics"] },
    { week: 5, dates: "5 – 9 Oct", activities: ["Teaching and learning", "Quiz"] },
    { week: 6, dates: "12 – 16 Oct", activities: ["Teaching and learning"] },
    { week: 7, dates: "19 – 23 Oct", activities: ["Teaching and learning"] },
    {
      week: 8,
      dates: "26 – 30 Oct",
      activities: ["Teaching and learning", "Mid-term break (Thursday and Friday)"],
    },
    { week: 9, dates: "2 – 6 Nov", activities: ["Teaching and learning"] },
    { week: 10, dates: "9 – 13 Nov", activities: ["Teaching and learning", "Aerobics", "Indoor games"] },
    { week: 11, dates: "16 – 20 Nov", activities: ["Teaching and learning", "Quiz"] },
    { week: 12, dates: "23 – 27 Nov", activities: ["Teaching and learning", "Pick & Act"] },
    { week: 13, dates: "30 Nov – 4 Dec", activities: ["Revision", "Examinations begin"] },
    { week: 14, dates: "7 – 11 Dec", activities: ["Examinations"] },
    { week: 15, dates: "14 – 17 Dec", activities: ["Carols Day", "Vacation"], note: "Term ends" },
  ],
};

/** Highlights of the term calendar, used for the events list on News and Events. */
export const termEvents: { date: string; title: string; description: string }[] = [
  { date: "28 Sep – 2 Oct", title: "Aerobics", description: "Whole-school aerobics during week 4." },
  { date: "5 – 9 Oct", title: "Quiz", description: "Quiz competition during week 5." },
  { date: "29 – 30 Oct", title: "Mid-term break", description: "No school on Thursday and Friday of week 8." },
  { date: "9 – 13 Nov", title: "Aerobics and indoor games", description: "Activities during week 10." },
  { date: "16 – 20 Nov", title: "Quiz", description: "Quiz competition during week 11." },
  { date: "23 – 27 Nov", title: "Pick & Act", description: "Pick & Act during week 12." },
  { date: "30 Nov – 11 Dec", title: "End-of-term examinations", description: "Revision, then examinations." },
  { date: "14 – 17 Dec", title: "Carols Day and vacation", description: "The term closes with Carols Day." },
];
