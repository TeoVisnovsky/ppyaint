/* =========================================================
   PAPAYA INTERNATIONAL – SITE CONTENT
   ---------------------------------------------------------
   Everything that changes over time lives here.
   To add a project, story, team member, partner or news
   item, copy an existing object, paste it into the array
   and edit the values. No HTML changes needed.

   PHOTOS & VIDEOS
   Every image/video already points to a file in /assets.
   Just drop your file in with exactly that name and it
   appears on the site. Until then a coloured placeholder
   shows the expected file name. See assets/README.md.
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
  formEndpoint: "",

  media: {
    band: "assets/img/band.jpg",     // big photo in the peach "Who we are" band, roughly square
    about: "assets/img/about.jpg"    // square photo in the "Mission & values" tile grid
  }
};

/* ---------------------------------------------------------
   WHAT WE DO – the three pillars
   --------------------------------------------------------- */
const PILLARS = [
  {
    title: "Erasmus+",
    text: "Youth exchanges (KA152) and mobility of youth workers (KA153) – we host groups in Slovakia and send participants all over Europe.",
    image: "assets/img/pillar-erasmus.jpg"
  },
  {
    title: "Youth participation",
    text: "Volunteering, local initiatives and dialogue with decision-makers, so young people can shape the places they live in.",
    image: "assets/img/pillar-participation.jpg"
  },
  {
    title: "Non-formal education",
    text: "Workshops, simulations and trainings on media literacy, economics and sustainability – learning by doing.",
    image: "assets/img/pillar-education.jpg"
  }
];

/* ---------------------------------------------------------
   PROJECTS
   status: "upcoming" | "ongoing" | "completed"
   period + year are shown in the big date block
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: "the-power-of-empathy",
    title: "The Power of Empathy",
    action: "KA153",
    actionLabel: "Mobility of youth workers",
    country: "[COUNTRY]",
    period: "[MONTH]",
    year: "[YEAR]",
    date: "[DATES]",
    topic: "Empathy & [TOPIC]",
    status: "upcoming",
    image: "assets/img/projects/the-power-of-empathy.jpg",
    summary:
      "[Short summary – 1–2 sentences about what The Power of Empathy is and who it is for.]",
    description:
      "[Project description – aims, participants, programme highlights and expected outputs of The Power of Empathy.]",
    partners: ["[Partner organisation] – [Country]", "[Partner organisation] – [Country]"],
    gallery: [
      "assets/img/projects/the-power-of-empathy-1.jpg",
      "assets/img/projects/the-power-of-empathy-2.jpg",
      "assets/img/projects/the-power-of-empathy-3.jpg"
    ]
  },
  {
    id: "slovakia-forestation",
    title: "Slovakia Forestation",
    action: "Volunteering",
    actionLabel: "Charity volunteering action",
    country: "Slovakia (Bratislava – Rača)",
    period: "[MONTH]",
    year: "[YEAR]",
    date: "[DATE]",
    topic: "Environment & volunteering",
    status: "completed",
    image: "assets/img/projects/slovakia-forestation.jpg",
    summary:
      "A charity volunteering action in Bratislava – Rača, where young volunteers helped plant trees and care for the local forest.",
    description:
      "Slovakia Forestation was a charity volunteering action in Bratislava – Rača. Young volunteers came together to plant trees and help the local forest grow back. [ADD MORE DETAIL: date, number of volunteers, number of trees planted, partners.]",
    partners: ["[Partner organisation] – Slovakia"],
    gallery: [
      "assets/img/projects/slovakia-forestation-1.jpg",
      "assets/img/projects/slovakia-forestation-2.jpg",
      "assets/img/projects/slovakia-forestation-3.jpg"
    ]
  },
  {
    id: "economics-without-filters",
    title: "Economics Without Filters",
    action: "Local project",
    actionLabel: "Supported by the Tatra banka Foundation",
    country: "Slovakia",
    period: "[MONTH]",
    year: "[YEAR]",
    date: "[DATES]",
    topic: "Economic education in secondary schools",
    status: "ongoing",
    image: "assets/img/projects/economics-without-filters.jpg",
    summary:
      "Interactive workshops that bring real-life economics – money, work, taxes and entrepreneurship – into Slovak secondary schools.",
    description:
      "Economics Without Filters (Ekonómia bez filtrov) gives secondary school students an honest, hands-on look at how the economy affects their everyday lives. Guided by young facilitators and expert guarantors, students learn through simulations, discussions and real case studies. Supported by the Tatra banka Foundation. [ADD MORE DETAIL: participating schools, number of workshops.]",
    partners: ["Tatra banka Foundation – Slovakia (donor)", "[Partner school] – Slovakia"],
    gallery: [
      "assets/img/projects/economics-without-filters-1.jpg",
      "assets/img/projects/economics-without-filters-2.jpg",
      "assets/img/projects/economics-without-filters-3.jpg"
    ]
  },
  {
    id: "forest-restoration-karisko",
    title: "Forest Restoration with Karisko",
    action: "Volunteering",
    actionLabel: "Local volunteering action",
    country: "Slovakia",
    period: "[MONTH]",
    year: "[YEAR]",
    date: "[DATES]",
    topic: "Environment & volunteering",
    status: "upcoming",
    image: "assets/img/projects/karisko.jpg",
    summary:
      "Young volunteers will join Karisko to plant trees and help restore a damaged forest ecosystem.",
    description:
      "Together with Karisko, our volunteers will spend [NUMBER] days planting saplings, clearing invasive species and learning about forest ecosystems from local experts. [ADD MORE DETAIL: location, number of trees planted, number of volunteers.]",
    partners: ["Karisko – Slovakia"],
    gallery: [
      "assets/img/projects/karisko-1.jpg",
      "assets/img/projects/karisko-2.jpg",
      "assets/img/projects/karisko-3.jpg"
    ]
  }
];

/* ---------------------------------------------------------
   STORIES – participant voices (the first one is shown large)
   video: optional link (YouTube / Instagram / mp4) – adds a play button
   --------------------------------------------------------- */
const STORIES = [
  {
    name: "[NAME]",
    from: "Slovakia",
    project: "The Power of Empathy",
    quote: "[Short quote from a participant – what changed for them after the project.]",
    image: "assets/img/stories/story-1.jpg",
    video: ""
  },
  {
    name: "[NAME]",
    from: "[COUNTRY]",
    project: "Youth exchange",
    quote: "[Short quote from a participant – a moment they will never forget.]",
    image: "assets/img/stories/story-2.jpg",
    video: ""
  },
  {
    name: "[NAME]",
    from: "Slovakia",
    project: "Economics Without Filters",
    quote: "[Short quote from a student or facilitator.]",
    image: "assets/img/stories/story-3.jpg",
    video: ""
  },
  {
    name: "[NAME]",
    from: "Slovakia",
    project: "Forest Restoration with Karisko",
    quote: "[Short quote from a volunteer.]",
    image: "assets/img/stories/story-4.jpg",
    video: ""
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
    image: "assets/img/team/member-1.jpg",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "[NAME SURNAME]",
    role: "Project Coordinator",
    bio: "[Short bio – 1–2 sentences about background and what they do at Papaya.]",
    image: "assets/img/team/member-2.jpg",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "[NAME SURNAME]",
    role: "Youth Worker & Trainer",
    bio: "[Short bio – 1–2 sentences about background and what they do at Papaya.]",
    image: "assets/img/team/member-3.jpg",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "[NAME SURNAME]",
    role: "Communication & Social Media",
    bio: "[Short bio – 1–2 sentences about background and what they do at Papaya.]",
    image: "assets/img/team/member-4.jpg",
    linkedin: "https://www.linkedin.com/"
  }
];

/* ---------------------------------------------------------
   PARTNERS & SUPPORTERS
   logo: e.g. "assets/img/logos/karisko.png" – empty shows the name only
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
    tag: "Volunteering",
    title: "We planted trees in Bratislava – Rača",
    date: "2026-10-15",
    excerpt:
      "Our volunteers spent a day helping the forest in Rača grow back as part of Slovakia Forestation, a charity volunteering action. [ADD: number of volunteers and trees planted.]",
    image: "assets/img/news/news-1.jpg",
    url: "#"
  },
  {
    tag: "Project",
    title: "Economics Without Filters reaches its first schools",
    date: "2026-09-28",
    excerpt:
      "Our facilitators ran the first workshops on money, work and taxes with secondary school students.",
    image: "assets/img/news/news-2.jpg",
    url: "#"
  },
  {
    tag: "Training",
    title: "Coming soon: The Power of Empathy",
    date: "2026-09-05",
    excerpt:
      "[Short excerpt about The Power of Empathy – dates, who can apply, what it is about.]",
    image: "assets/img/news/news-3.jpg",
    url: "#"
  },
  {
    tag: "News",
    title: "[Older news item]",
    date: "2026-06-01",
    excerpt: "[This one is not shown because only the 3 newest items appear.]",
    image: "",
    url: "#"
  }
];
