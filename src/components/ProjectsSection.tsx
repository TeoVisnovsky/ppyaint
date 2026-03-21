import { useMemo } from "react";
import { Calendar, CheckCircle2, Clock, Users, Building2, MapPin } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

const statusConfig = {
  ongoing: { label: "Ongoing", icon: Clock, color: "bg-accent/15 text-accent" },
  upcoming: { label: "Upcoming", icon: Calendar, color: "bg-papaya-yellow/20 text-papaya-orange" },
  past: { label: "Completed", icon: CheckCircle2, color: "bg-muted text-muted-foreground" },
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
    { label: "All Projects", value: "all" as const, description: "Complete portfolio" },
    { label: "Open Calls", value: "current" as const, description: "Ongoing and upcoming" },
    { label: "Completed", value: "past" as const, description: "Finished initiatives" },
  ];

  const stats = useMemo(() => {
    const ongoing = projects.filter((project) => project.status === "ongoing").length;
    const upcoming = projects.filter((project) => project.status === "upcoming").length;
    const completed = projects.filter((project) => project.status === "past").length;

    const totalParticipants = projects.reduce((sum, project) => sum + project.participants, 0);
    const totalPartners = projects.reduce((sum, project) => sum + project.partners, 0);

    return { ongoing, upcoming, completed, totalParticipants, totalPartners };
  }, []);

  return (
    <section id="projects" className="section-padding bg-papaya-light">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-extrabold text-primary uppercase tracking-widest">
            Our Projects
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 text-foreground">
            Programmes With Measurable Impact
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mt-4">
            Explore our active and completed initiatives across youth exchanges, training courses, and partnership-driven projects.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-8">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ongoing</p>
            <p className="text-2xl font-extrabold text-foreground mt-2">{stats.ongoing}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Upcoming</p>
            <p className="text-2xl font-extrabold text-foreground mt-2">{stats.upcoming}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Completed</p>
            <p className="text-2xl font-extrabold text-foreground mt-2">{stats.completed}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Participants</p>
            <p className="text-2xl font-extrabold text-foreground mt-2">{stats.totalParticipants}+</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Partners</p>
            <p className="text-2xl font-extrabold text-foreground mt-2">{stats.totalPartners}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
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
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-3 rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center">
              <p className="text-lg font-bold text-foreground">No projects match this filter yet.</p>
              <p className="text-sm text-muted-foreground mt-2">Switch filters to view all initiatives and project history.</p>
            </div>
          )}

          {filteredProjects.map((p, i) => {
            const sc = statusConfig[p.status];
            const StatusIcon = sc.icon;

            return (
              <article
                key={p.title}
                className="bg-card rounded-3xl overflow-hidden card-hover border border-border flex flex-col"
              >
                <div className="h-2 gradient-bg" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full ${sc.color}`}>
                      <StatusIcon className="w-3.5 h-3.5" />
                      {sc.label}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">Project {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.summary}</p>

                  <div className="space-y-2 text-sm text-foreground/90 mb-5">
                    <p className="font-semibold text-foreground">{p.programme}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{p.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{p.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="rounded-xl bg-muted/70 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Partners</p>
                      <p className="font-bold text-foreground inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {p.partners}
                      </p>
                    </div>
                    <div className="rounded-xl bg-muted/70 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Participants</p>
                      <p className="font-bold text-foreground inline-flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {p.participants}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.focusAreas.map((area) => (
                      <span key={area} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
