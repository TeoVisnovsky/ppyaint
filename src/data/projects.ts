import p1Image from "@/assets/p1.jpeg";
import p2Image from "@/assets/p2.jpeg";
import p3Image from "@/assets/p3.jpeg";
import polskoImage from "@/assets/polsko.jpg";
import dolomityImage from "@/assets/dolomity.jpeg";
import erasmusImage from "@/assets/erasmus.jpeg";
import hromadaImage from "@/assets/hromoda.jpeg";
import belgickoImage from "@/assets/belgicko.jpeg";

export type Project = {
  id: string;
  title: string;
  status: "current" | "past";
  date: string;
  location: string;
  dateRange: string;
  palette: string;
  image: string;
  category: "erasmus" | "childrens-camp";
  organiser: string;
  overallGoal: string;
  objectives: string[];
  participants: number;
  participantProfile: string[];
  travelCostLimit: string;
  workingLanguage: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Ankara Exchange",
    status: "current",
    date: "2025",
    location: "Ankara, Turkey",
    dateRange: "3.7. - 11.7.2025",
    palette: "from-papaya-orange via-primary to-papaya-yellow",
    image: hromadaImage,
    category: "erasmus",
    organiser: "intercultural Learning Network",
    overallGoal: "Bridge cultural gaps and build intercultural competence among European youth workers through immersive experiences in Turkey.",
    objectives: [
      "Develop intercultural communication skills and awareness",
      "Learn about Turkish culture and European-Turkish relations",
      "Create connections for future collaborative projects",
      "Strengthen youth workers' ability to facilitate intercultural dialogue"
    ],
    participants: 2,
    participantProfile: ["Youth workers", "Educators", "Cultural enthusiasts", "18+"],
    travelCostLimit: "550€",
    workingLanguage: "English"
  },
  {
    id: "2",
    title: "Belgium Exchange",
    status: "current",
    date: "2025",
    location: "Belgium",
    dateRange: "18.7. - 26.7.2025",
    palette: "from-primary via-papaya-orange to-accent",
    image: belgickoImage,
    category: "erasmus",
    organiser: "Youth for Change",
    overallGoal: "Foster entrepreneurial mindset and sustainable innovation among European youth workers through hands-on workshops and collaboration.",
    objectives: [
      "Equip youth workers with entrepreneurial competencies and innovation skills",
      "Create networks for sustainable project development across European organizations",
      "Promote social entrepreneurship as a tool for community development",
      "Enhance digital and green skills through practical learning approaches"
    ],
    participants: 2,
    participantProfile: ["Youth workers", "Community organizers", "18+"],
    travelCostLimit: "530€",
    workingLanguage: "English"
  },
  {
    id: "3",
    title: "Bochum Exchange",
    status: "current",
    date: "2025",
    location: "Bochum, Germany",
    dateRange: "15.3. - 21.3.2025",
    palette: "from-accent via-papaya-yellow to-primary",
    image: p3Image,
    category: "erasmus",
    organiser: "European Youth Cooperation",
    overallGoal: "Develop active citizenship and civic engagement skills among youth workers through experiential learning in Germany.",
    objectives: [
      "Enhance understanding of European democratic processes and civic participation",
      "Build skills for organizing community engagement initiatives",
      "Exchange best practices in youth activism and social change",
      "Strengthen commitment to European values and cooperation"
    ],
    participants: 2,
    participantProfile: ["Youth workers", "Civic activists", "Social educators", "18+"],
    travelCostLimit: "309€",
    workingLanguage: "English"
  },
];
