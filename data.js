/* =========================================================
   PAPAYA INTERNATIONAL – SITE CONTENT
   ---------------------------------------------------------
   Everything that changes over time lives here.
   To add a project, team member, partner or news item,
   copy an existing object, paste it into the array and
   edit the values. No HTML changes needed.

   Images: set `image` to a file path (e.g. "img/team/anna.jpg").
   Leave it empty ("") to show a grey placeholder.
   ========================================================= */

const SITE = {
  email: "info@papayainternational.org",          // [EMAIL]
  instagram: "https://www.instagram.com/",          // [INSTAGRAM URL]
  facebook: "https://www.facebook.com/",            // [FACEBOOK URL]
  ico: "[IČO]",
  seat: "[STREET + NUMBER], 921 01 Piešťany, Slovakia",
  privacyUrl: "#",                                  // [PRIVACY POLICY URL]
  // Paste a Formspree / Getform / Basin endpoint here to make the contact
  // form send real e-mails. When empty, the form opens the visitor's mail app.
  formEndpoint: ""
};

/* ---------------------------------------------------------
   PROJECTS
   status: "upcoming" | "ongoing" | "completed"
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: "think-before-you-share",
    title: "Think Before You Share",
    action: "KA153",
    actionLabel: "Mobility of youth workers",
    country: "[COUNTRY]",
    date: "[DATES]",
    topic: "Media & AI literacy",
    status: "ongoing",
    image: "",
    summary:
      "A training course for youth workers on spotting disinformation, understanding generative AI and teaching young people to think critically before they click “share”.",
    description:
      "Deepfakes, algorithmic feeds and AI-generated content are changing how young people form opinions. Think Before You Share brings youth workers from across Europe together to build practical, non-formal methods for media and AI literacy that they can take straight back into their youth centres, schools and clubs. [ADD MORE DETAIL: number of participants, programme highlights, outputs.]",
    partners: ["[Partner organisation] – [Country]", "[Partner organisation] – [Country]"],
    gallery: ["", "", ""]
  },
  {
    id: "bukowina-youth-exchange",
    title: "Youth Exchange in Bukowina Tatrzańska",
    action: "KA152",
    actionLabel: "Youth exchange",
    country: "Poland",
    date: "Spring 2027",
    topic: "Social resilience & volunteering",
    status: "upcoming",
    image: "",
    summary:
      "Young people from several countries meet in the Polish Tatras to explore what makes communities resilient and how volunteering can strengthen them.",
    description:
      "Through workshops, outdoor activities, intercultural evenings and a local volunteering action, participants aged [AGE RANGE] will discover their own role in building strong, caring communities. [ADD MORE DETAIL: dates, number of participants per country, how to apply.]",
    partners: ["[Host organisation] – Poland", "[Partner organisation] – [Country]"],
    gallery: ["", "", ""]
  },
  {
    id: "economics-without-filters",
    title: "Economics Without Filters",
    action: "Local project",
    actionLabel: "Supported by the Tatra banka Foundation",
    country: "Slovakia",
    date: "[DATES]",
    topic: "Economic education in secondary schools",
    status: "ongoing",
    image: "",
    summary:
      "Interactive workshops that bring real-life economics – money, work, taxes and entrepreneurship – into Slovak secondary schools.",
    description:
      "Economics Without Filters (Ekonómia bez filtrov) gives secondary school students an honest, hands-on look at how the economy affects their everyday lives. Guided by young facilitators and expert guarantors, students learn through simulations, discussions and real case studies. Supported by the Tatra banka Foundation. [ADD MORE DETAIL: participating schools, number of workshops.]",
    partners: ["Tatra banka Foundation – Slovakia (donor)", "[Partner school] – Slovakia"],
    gallery: ["", "", ""]
  },
  {
    id: "forest-restoration-karisko",
    title: "Forest Restoration with Karisko",
    action: "Volunteering",
    actionLabel: "Local volunteering action",
    country: "Slovakia",
    date: "[DATES]",
    topic: "Environment & volunteering",
    status: "completed",
    image: "",
    summary:
      "Young volunteers joined Karisko to plant trees and help restore a damaged forest ecosystem.",
    description:
      "Together with Karisko, our volunteers spent [NUMBER] days planting saplings, clearing invasive species and learning about forest ecosystems from local experts. [ADD MORE DETAIL: location, number of trees planted, number of volunteers.]",
    partners: ["Karisko – Slovakia"],
    gallery: ["", "", ""]
  }
];

/* ---------------------------------------------------------
   TEAM
   --------------------------------------------------------- */
const TEAM = [
  {
    name: "[NAME SURNAME]",
    role: "Chairperson",
    bio: "[Short bio – 1–2 sentences about background and what they do at Papaya.]",
    image: "",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "[NAME SURNAME]",
    role: "Project Coordinator",
    bio: "[Short bio – 1–2 sentences about background and what they do at Papaya.]",
    image: "",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "[NAME SURNAME]",
    role: "Youth Worker & Trainer",
    bio: "[Short bio – 1–2 sentences about background and what they do at Papaya.]",
    image: "",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "[NAME SURNAME]",
    role: "Communication & Social Media",
    bio: "[Short bio – 1–2 sentences about background and what they do at Papaya.]",
    image: "",
    linkedin: "https://www.linkedin.com/"
  }
];

/* ---------------------------------------------------------
   PARTNERS & SUPPORTERS
   --------------------------------------------------------- */
const PARTNERS = [
  { name: "Karisko", country: "Slovakia", logo: "", url: "#" },
  { name: "[Partner organisation]", country: "Poland", logo: "", url: "#" },
  { name: "[Partner organisation]", country: "[Country]", logo: "", url: "#" },
  { name: "[Partner organisation]", country: "[Country]", logo: "", url: "#" }
];

const SUPPORTERS = [
  { name: "Erasmus+ / European Union", logo: "", url: "https://erasmus-plus.ec.europa.eu/" },
  { name: "Tatra banka Foundation", logo: "", url: "https://www.nadaciatatrabanky.sk/" },
  { name: "[Supporter]", logo: "", url: "#" }
];

/* ---------------------------------------------------------
   NEWS – the 3 most recent (by date) are shown automatically
   date format: YYYY-MM-DD
   --------------------------------------------------------- */
const NEWS = [
  {
    title: "Applications open for our youth exchange in Poland",
    date: "2026-10-15",
    excerpt:
      "Are you between [AGE] and [AGE] and curious about volunteering? Join us in Bukowina Tatrzańska in spring 2027. [Add short excerpt.]",
    image: "",
    url: "#"
  },
  {
    title: "Economics Without Filters reaches its first schools",
    date: "2026-09-28",
    excerpt:
      "Our facilitators ran the first workshops on money, work and taxes with secondary school students. [Add short excerpt.]",
    image: "",
    url: "#"
  },
  {
    title: "Youth workers train in media & AI literacy",
    date: "2026-09-05",
    excerpt:
      "Think Before You Share brought together youth workers from [NUMBER] countries to fight disinformation. [Add short excerpt.]",
    image: "",
    url: "#"
  },
  {
    title: "[Older news item]",
    date: "2026-06-01",
    excerpt: "[This one is not shown because only the 3 newest items appear.]",
    image: "",
    url: "#"
  }
];
