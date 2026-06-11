import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import euImage from "@/assets/eu.jpg";

const STATUS_LABELS: Record<Project["status"], string> = {
  current: "Upcoming",
  past: "Completed",
};

// Parse "3.7. - 11.7.2025" → { day: "3", month: "júl" }
const parseStartDate = (dateRange: string) => {
  const match = dateRange.match(/^(\d+)\.(\d+)\./);
  if (!match) return { day: "?", month: "?" };
  const months = ["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"];
  return { day: match[1], month: months[parseInt(match[2]) - 1] ?? match[2] };
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { day, month } = parseStartDate(project.dateRange);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.07, duration: 0.35, ease: "easeOut" }}
      className="group flex flex-col sm:flex-row gap-0 rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      {/* Photo with date overlay */}
      <div className="relative sm:w-64 md:w-72 flex-shrink-0 h-52 sm:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Date chip */}
        <div className="absolute top-3 left-3 bg-foreground/85 backdrop-blur-sm text-background rounded-xl px-3 py-2 text-center leading-none min-w-[48px]">
          <div className="text-xl font-black">{day}</div>
          <div className="text-xs font-bold uppercase tracking-wide opacity-80">{month}</div>
        </div>
        {/* Status */}
        {project.status === "current" && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-extrabold uppercase tracking-wider rounded-full px-2.5 py-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 md:p-6 flex-1 min-w-0">
        {/* Location badge */}
        <div>
          <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider bg-primary/10 text-primary rounded-full px-2.5 py-1">
            <MapPin className="w-3 h-3" />
            {project.location}
          </span>
        </div>

        {/* Event name */}
        <h2 className="text-lg md:text-xl font-extrabold text-foreground leading-snug">{project.eventName}</h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {project.overallGoal}
        </p>

        {/* Objectives preview */}
        {project.objectives.length > 0 && (
          <ul className="space-y-0.5">
            {project.objectives.slice(0, 2).map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="line-clamp-1">{obj}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer row */}
        <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-semibold">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-primary" />
              {project.dateRange}
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3 text-primary" />
              <span className="text-foreground font-extrabold">{project.participants}</span> {project.participants === 1 ? "spot" : "spots"}
            </span>
            <span className="text-border">·</span>
            <span>{project.workingLanguage}</span>
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const openCount = projects.filter((p) => p.status === "current").length;
  const countryCount = new Set(projects.map((p) => p.location.split(",").pop()?.trim())).size;

  return (
    <section className="bg-background">

      {/* Hero */}
      <div className="relative overflow-hidden h-72 md:h-[400px]">
        <img src={euImage} alt="Youth exchange" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/10" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-narrow mx-auto w-full px-6 pb-8 md:pb-12 space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-extrabold uppercase tracking-[0.35em] text-primary"
            >
              Erasmus+ KA1
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Youth Exchanges
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed"
            >
              Short-term mobilities where young people from different countries come together for
              workshops, cultural exchange, and new friendships.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              {[
                { icon: <Calendar className="w-3.5 h-3.5" />, label: `${openCount} open now` },
                { icon: <Globe className="w-3.5 h-3.5" />, label: `${countryCount} countries` },
                { icon: <Users className="w-3.5 h-3.5" />, label: "Ages 18–30" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full px-3 py-1.5"
                >
                  {icon}{label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards list */}
      <div className="section-padding pt-8">
        <div className="container-narrow mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
};

export default ProjectsSection;
