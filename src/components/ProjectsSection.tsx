import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  status: "ongoing" | "upcoming" | "past";
  tags: string[];
};

const projects: Project[] = [
  { title: "Bridges of Understanding", desc: "A youth exchange bringing together 30 participants from 6 EU countries to explore intercultural dialogue through art and storytelling.", status: "ongoing", tags: ["Youth Exchange", "Erasmus+"] },
  { title: "Digital Skills for All", desc: "Training course empowering youth workers with digital literacy tools and innovative online engagement strategies.", status: "ongoing", tags: ["Training", "Digital"] },
  { title: "Green Futures", desc: "Upcoming mobility project focused on environmental activism, sustainability education, and green entrepreneurship.", status: "upcoming", tags: ["Sustainability", "Mobility"] },
  { title: "Active Citizens Lab", desc: "An innovative seminar series on youth civic participation and democratic engagement across Central Europe.", status: "upcoming", tags: ["Civic", "Seminar"] },
  { title: "Voices Unheard", desc: "Successfully connected 50+ young people from marginalized communities through creative expression workshops across 4 countries.", status: "past", tags: ["Inclusion", "Erasmus+"] },
  { title: "EuroConnect", desc: "Multi-partner project that trained 80 youth workers in intercultural competence and conflict resolution methodologies.", status: "past", tags: ["Training", "Partnership"] },
];

const statusConfig = {
  ongoing: { label: "🟢 Ongoing", icon: Clock, color: "bg-accent/15 text-accent" },
  upcoming: { label: "🟡 Upcoming", icon: Calendar, color: "bg-papaya-yellow/20 text-papaya-orange" },
  past: { label: "✅ Completed", icon: CheckCircle2, color: "bg-muted text-muted-foreground" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-papaya-light">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-extrabold text-primary uppercase tracking-widest">
            Our Projects
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-extrabold mt-2 text-foreground">
            Making a Difference 🌍
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => {
            const sc = statusConfig[p.status];
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-3xl overflow-hidden card-hover border border-border flex flex-col"
              >
                <div className="h-2 gradient-bg" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full ${sc.color}`}>
                      {sc.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
