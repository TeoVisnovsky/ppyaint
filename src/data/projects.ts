import p1Image from "@/assets/p1.jpeg";
import p2Image from "@/assets/p2.jpeg";
import p3Image from "@/assets/p3.jpeg";
import polskoImage from "@/assets/polsko.jpg";
import dolomityImage from "@/assets/dolomity.jpeg";
import erasmusImage from "@/assets/erasmus.jpeg";

export type Project = {
  id: string;
  title: string;
  status: "current" | "past";
  date: string;
  location: string;
  dateRange: string;
  palette: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Bridges of Understanding",
    status: "current",
    date: "2025",
    location: "Bochum, Nemecko",
    dateRange: "15.3. - 21.3.2026",
    palette: "from-papaya-orange via-primary to-papaya-yellow",
    image: p1Image,
  },
  {
    id: "2",
    title: "Digital Skills for All",
    status: "current",
    date: "2025",
    location: "Bratislava, Slovensko",
    dateRange: "10.4. - 15.4.2026",
    palette: "from-secondary via-papaya-green to-accent",
    image: p2Image,
  },
  {
    id: "3",
    title: "Green Futures",
    status: "current",
    date: "2026",
    location: "Berlín, Nemecko",
    dateRange: "1.5. - 8.5.2026",
    palette: "from-papaya-green via-accent to-primary",
    image: p3Image,
  },
  {
    id: "4",
    title: "Voices Unheard",
    status: "past",
    date: "2024",
    location: "Varšava, Poľsko",
    dateRange: "5.6. - 12.6.2024",
    palette: "from-muted via-secondary to-primary",
    image: polskoImage,
  },
  {
    id: "5",
    title: "EuroConnect",
    status: "past",
    date: "2023",
    location: "Madrid, Španielsko",
    dateRange: "20.7. - 28.7.2023",
    palette: "from-secondary via-papaya-yellow to-primary",
    image: dolomityImage,
  },
  {
    id: "6",
    title: "Active Citizens Lab",
    status: "past",
    date: "2023",
    location: "Riga, Litva",
    dateRange: "15.8. - 22.8.2023",
    palette: "from-accent via-primary to-papaya-orange",
    image: erasmusImage,
  },
];
