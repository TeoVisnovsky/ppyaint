import photoOne from "@/assets/p1.jpeg";
import photoTwo from "@/assets/p2.jpeg";
import photoThree from "@/assets/p3.jpeg";
import dolomity from "@/assets/dolomity.jpeg";
import poland from "@/assets/polsko.jpg";
import heroWorkshop from "@/assets/hero-image.jpg";

export type ServiceStat = {
  label: string;
  value: string;
};

export type ServiceFocusArea = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  summary: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  stats: ServiceStat[];
  detail: {
    longDescription: string;
    focusAreas: ServiceFocusArea[];
    commitments: string[];
    gallery: string[];
    contact: {
      name: string;
      role: string;
      email: string;
    };
  };
};

export const servicesData: ServiceDetail[] = [
  {
    id: "erasmus-youth",
    title: "Organising Erasmus for Youth",
    kicker: "Flagship exchanges",
    description:
      "Small groups of 13–30-year-olds spend one to three weeks living together abroad, sharing cultures, cooking, and diving into hands-on workshops that make Europe feel personal.",
    summary:
      "We specialise in hosting youth exchanges that feel bold, safe, and rooted in the host community. Every mobility includes cultural mediation, inclusion support, and mentoring that continues once everyone is back home.",
    image: photoOne,
    imageAlt: "Papaya youth exchange in action",
    bullets: [
      "Daily non-formal sessions mix creative challenges with reflection so confidence builds naturally.",
      "Evenings spotlight each partner country—food, music, and stories that turn strangers into friends.",
      "Participants leave with concrete action ideas plus mentors who keep supporting them back home.",
    ],
    stats: [
      { label: "Cities hosted", value: "0" },
      { label: "Participants yearly", value: "0" },
      { label: "Partner organisations", value: "3" },
    ],
    detail: {
      longDescription:
        "From venue scouting to Erasmus+ paperwork, our team leads the entire exchange lifecycle. We align partners, prepare young participants with multilingual onboarding, and stay on-site to guide non-formal sessions so every group feels safe and inspired to co-create outcomes.",
      focusAreas: [
        {
          title: "Concept & co-design",
          description: "Ideation labs with sending partners to align themes, risk plans, and inclusion targets before the call launches.",
        },
        {
          title: "Mobility operations",
          description: "Travel packs, safeguarding protocols, and 24/7 coordination covering logistics, health, and documentation.",
        },
        {
          title: "Impact & follow-up",
          description: "Mentoring circles plus ready-to-use toolkits that help each national team replicate the experience at home.",
        },
      ],
      commitments: [
        "Weekly steering calls with partner organisations",
        "Personal growth trackers for every participant",
        "Tailored dissemination assets ready for grant reporting",
      ],
      gallery: [poland, dolomity, photoOne],
      contact: {
        name: "Adam",
        role: "Project organiser & Erasmus+ lead",
        email: "papayainternational.bratislava@gmail.com",
      },
    },
  },
  {
    id: "training-courses",
    title: "Training Courses",
    kicker: "Capacity building",
    description:
      "Youth workers and educators join us for 5–10 day labs where we unpack inclusive facilitation, digital tools, and storytelling techniques that can plug straight into their programmes.",
    summary:
      "Our trainings pair immersive learning with ready-made toolkits. Each cohort leaves with tested session plans, blended learning templates, and a support thread that keeps the cohort sharing wins long after the course.",
    image: photoTwo,
    imageAlt: "Facilitators leading a training course",
    bullets: [
      "Cohorts co-create session plans, test them in micro-teaching slots, and collect instant peer feedback.",
      "Resource packs cover hybrid delivery, safeguarding, and templates ready for grant annexes.",
      "An alumni channel keeps the exchange of methods alive long after the course wraps.",
    ],
    stats: [
      { label: "Facilitators", value: "0" },
      { label: "Toolkits shipped", value: "0" },
      { label: "Alumni countries", value: "0" },
    ],
    detail: {
      longDescription:
        "We design and facilitate Erasmus+ KA1 and KA2 trainings focused on inclusion, digital youth work, and storytelling. Participants prototype new workshops during the course and receive mentoring to deliver them locally.",
      focusAreas: [
        {
          title: "Curriculum lab",
          description: "Diagnosis call, learning outcomes, and co-creation of modules aligned with Erasmus+ priorities.",
        },
        {
          title: "Facilitation coaching",
          description: "Micro-teaching practice, feedback routines, and tech setups for hybrid delivery.",
        },
        {
          title: "Documentation & dissemination",
          description: "Help with visuals, testimonials, and impact metrics that strengthen each organisation's funding narrative.",
        },
      ],
      commitments: [
        "Participant dashboards with resources in six languages",
        "Accessibility-first session design",
        "A community channel that stays open for peer exchange",
      ],
      gallery: [heroWorkshop, photoTwo, dolomity],
      contact: {
        name: "Nina",
        role: "Project writer & evaluator",
        email: "papayainternational.bratislava@gmail.com",
      },
    },
  },
  {
    id: "long-term-exchanges",
    title: "Long Term Student Exchanges",
    kicker: "Mentored placements",
    description:
      "Individual students aged 15–30 spend two to twelve months studying abroad with our team handling matching, host onboarding, and the soft landings that make a long stay feel safe.",
    summary:
      "We combine host matching, cultural preparation, and wraparound care so long-term mobilities feel sustainable. Students co-create learning goals and share monthly reflections that feed into their schools' accreditation process.",
    image: photoThree,
    imageAlt: "Students during a long-term exchange",
    bullets: [
      "Pre-departure labs bring together students, families, and schools to align goals and expectations.",
      "Local mentors check in weekly, translating bureaucracy and helping each milestone feel manageable.",
      "Reintegration support links the experience to next-step studies, careers, and Erasmus+ recognition tools.",
    ],
    stats: [
      { label: "Mentors", value: "0" },
      { label: "Placements / year", value: "0" },
      { label: "Months abroad", value: "0" },
    ],
    detail: {
      longDescription:
        "Papaya designs bespoke learning agreements, finds trusted host families or dorms, and coordinates with receiving schools. We stay in constant contact with students and their guardians, making sure every challenge abroad becomes a learning milestone.",
      focusAreas: [
        {
          title: "Preparation & matching",
          description: "Language refreshers, intercultural coaching, and mentor matching before departure.",
        },
        {
          title: "On-site mentoring",
          description: "Regular wellbeing calls, emergency response plans, and cultural integration activities.",
        },
        {
          title: "Recognition & transition",
          description: "Portfolio support, Europass documentation, and reintegration events once students return home.",
        },
      ],
      commitments: [
        "Monthly progress reports for schools and families",
        "Inclusive housing and accessibility planning",
        "Career guidance linking the exchange to next-step opportunities",
      ],
      gallery: [photoThree, heroWorkshop, poland],
      contact: {
        name: "Samo",
        role: "Communications & placements lead",
        email: "papayainternational.bratislava@gmail.com",
      },
    },
  },
];

export const getServiceById = (id: string) => servicesData.find((service) => service.id === id);
