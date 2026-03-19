import { useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

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
  const [searchParams, setSearchParams] = useSearchParams();

  const viewParam = searchParams.get("view");
  const activeFilter: "all" | "current" | "past" = viewParam === "current" || viewParam === "past" ? viewParam : "all";

  const filteredProjects = useMemo(() => {
    if (activeFilter === "current") {
      return projects.filter((project) => project.status === "ongoing" || project.status === "upcoming");
    }
    if (activeFilter === "past") {
      return projects.filter((project) => project.status === "past");
    }
    return projects;
  }, [activeFilter]);

  const handleFilterChange = (nextFilter: "all" | "current" | "past") => {
    if (nextFilter === activeFilter) return;

    if (nextFilter === "all") {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.delete("view");
        return params;
      }, { replace: true });
      return;
    }

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("view", nextFilter);
      return params;
    }, { replace: true });
  };

  const filters = [
    { label: "All Projects", value: "all" as const, description: "Full overview" },
    { label: "Currently Open", value: "current" as const, description: "Live or upcoming" },
    { label: "Previous Projects", value: "past" as const, description: "Completed journeys" },
  ];

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
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              variants={fadeUp}
              custom={index}
              type="button"
              onClick={() => handleFilterChange(filter.value)}
              className={cn(
                "rounded-2xl border px-5 py-3 text-left text-sm font-semibold transition-all",
                activeFilter === filter.value
                  ? "border-primary bg-white text-primary shadow-lg shadow-primary/10"
                  : "border-border bg-white/60 text-muted-foreground hover:border-primary/50",
              )}
            >
              <span className="block text-foreground">{filter.label}</span>
              <span className="text-xs font-normal text-muted-foreground">{filter.description}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeUp}
              custom={0}
              className="sm:col-span-2 lg:col-span-3 rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center"
            >
              <p className="text-lg font-bold text-foreground">No projects match this filter yet.</p>
              <p className="text-sm text-muted-foreground mt-2">Check back soon or switch filters to explore other collaborations.</p>
            </motion.div>
          )}

          {filteredProjects.map((p, i) => {
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
