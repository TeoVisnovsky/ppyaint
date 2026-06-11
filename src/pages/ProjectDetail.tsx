import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Globe, FileText, ClipboardList, Info, Check } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import NotFound from "./NotFound";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <div className="relative h-64 md:h-[420px] overflow-hidden">
          <img
            src={project.image}
            alt={project.eventName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="container-narrow mx-auto w-full px-6 pb-8 md:pb-12 space-y-2">
              <motion.p
                initial="hidden" animate="visible" variants={fadeUp} custom={0}
                className="text-xs font-extrabold uppercase tracking-[0.3em] text-primary"
              >
                Erasmus+ KA1 · Youth Exchange
              </motion.p>
              <motion.h1
                initial="hidden" animate="visible" variants={fadeUp} custom={1}
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              >
                {project.eventName}
              </motion.h1>
              <motion.p
                initial="hidden" animate="visible" variants={fadeUp} custom={2}
                className="text-white/60 text-sm"
              >
                {project.title}
              </motion.p>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="container-narrow mx-auto section-padding py-10 md:py-14">

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to exchanges
          </Link>

          <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-10 items-start">

            {/* ── Left column ── */}
            <div className="space-y-8">

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Calendar className="w-3.5 h-3.5" />, text: project.dateRange },
                  { icon: <MapPin className="w-3.5 h-3.5" />, text: project.location },
                  { icon: <Users className="w-3.5 h-3.5" />, text: `${project.participants} spots` },
                  { icon: <Globe className="w-3.5 h-3.5" />, text: project.workingLanguage },
                ].map(({ icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-muted text-muted-foreground rounded-full px-3 py-1.5"
                  >
                    {icon}{text}
                  </span>
                ))}
              </div>

              {/* About */}
              <section className="space-y-3">
                <h2 className="text-lg font-extrabold text-foreground">About the project</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.overallGoal}</p>
              </section>

              {/* Goals */}
              <section className="space-y-3">
                <h2 className="text-lg font-extrabold text-foreground">Project goals</h2>
                <ul className="space-y-2">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Who is it for */}
              <section className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  This project is for you if you're genuinely interested in intercultural exchange,
                  want to explore new cultures and build European friendships, have at least basic
                  English, and enjoy meaningful conversations with peers from across the continent.
                  Participants must be between <strong className="text-foreground">18 – 30 years old</strong>.
                </p>
                <p>
                  Accommodation and meals are <strong className="text-foreground">fully covered</strong> by
                  Erasmus+ throughout the entire duration of the project. Travel costs are reimbursed
                  up to <strong className="text-foreground">{project.travelCostLimit}</strong> (green travel
                  option available at a higher rate). Detailed financial procedures will be explained to
                  selected participants.
                </p>
              </section>

              {/* Zigzag divider */}
              <div className="py-2">
                <svg viewBox="0 0 400 16" className="w-full text-border" fill="none">
                  <polyline
                    points="0,8 20,0 40,8 60,0 80,8 100,0 120,8 140,0 160,8 180,0 200,8 220,0 240,8 260,0 280,8 300,0 320,8 340,0 360,8 380,0 400,8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Action cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-foreground text-sm">INFOPACK</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      A comprehensive guide covering accommodation, daily programme, packing tips, and
                      local essentials for this exchange.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    Download PDF →
                  </a>
                </div>

                <div className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-foreground text-sm">APPLY NOW</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Fill in the registration form completely. All applicants will be carefully reviewed
                      to find the best fit for the project's goals.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold bg-primary text-primary-foreground rounded-xl px-4 py-2 hover:bg-primary/90 transition-colors w-fit"
                  >
                    Registration form
                  </a>
                </div>
              </div>

              {/* Info alert */}
              <div className="rounded-2xl border border-border/50 bg-muted/40 p-4 flex gap-3 items-start">
                <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Registration is open until the form closes. A closed form means we have already
                  completed participant selection — it will no longer be possible to apply.
                </p>
              </div>

            </div>

            {/* ── Right column ── */}
            <div className="space-y-5">

              {/* Photo */}
              <img
                src={project.image}
                alt={project.eventName}
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />

              {/* Location */}
              <div className="rounded-2xl border border-dashed border-border bg-card p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-extrabold text-foreground text-sm">Location</h3>
                </div>
                <p className="text-sm font-semibold text-foreground">{project.location}</p>
                <p className="text-xs text-muted-foreground">Organised by {project.organiser}</p>
              </div>

              {/* Practical info */}
              <div className="rounded-2xl border border-dashed border-border bg-card p-5 space-y-4">
                <h3 className="font-extrabold text-foreground text-sm">Practical info</h3>
                <dl className="space-y-2.5 text-xs">
                  {[
                    { label: "Dates", value: project.dateRange },
                    { label: "Duration", value: (() => {
                      const m = project.dateRange.match(/(\d+)\.\d+\. - (\d+)\.\d+\.\d+/);
                      if (m) return `${parseInt(m[2]) - parseInt(m[1]) + 1} days`;
                      return "—";
                    })() },
                    { label: "Spots", value: `${project.participants} participants` },
                    { label: "Language", value: project.workingLanguage },
                    { label: "Travel limit", value: project.travelCostLimit },
                    { label: "Programme", value: "Erasmus+ KA1" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-baseline justify-between gap-2">
                      <dt className="text-muted-foreground font-medium flex-shrink-0">{label}</dt>
                      <dd className="text-foreground font-semibold text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Who can apply */}
              <div className="rounded-2xl border border-dashed border-border bg-card p-5 space-y-3">
                <h3 className="font-extrabold text-foreground text-sm">Who can apply</h3>
                <ul className="space-y-1.5">
                  {project.participantProfile.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
