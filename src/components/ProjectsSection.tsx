import { motion } from "framer-motion";
import { Star, Sun, Heart, Leaf, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

// Floating decorative elements
const floatingElements = [
  { Icon: Star, className: "top-[2%] left-[2%] text-papaya-orange/20", delay: 0 },
  { Icon: Sun, className: "top-[8%] right-[3%] text-papaya-yellow/20", delay: 0.3 },
  { Icon: Heart, className: "top-[1%] right-[25%] text-primary/18", delay: 0.6 },
  { Icon: Leaf, className: "bottom-[2%] left-[1%] text-accent/20", delay: 0.9 },
  { Icon: Sparkles, className: "bottom-[3%] right-[2%] text-papaya-green/20", delay: 0.4 },
  { Icon: Star, className: "top-[25%] right-[1%] text-papaya-orange/18", delay: 0.8 },
  { Icon: Heart, className: "bottom-[15%] right-[5%] text-primary/18", delay: 0.2 },
  { Icon: Leaf, className: "top-[35%] left-[1%] text-accent/20", delay: 1.1 },
  { Icon: Sun, className: "bottom-[20%] left-[2%] text-papaya-yellow/18", delay: 0.5 },
  { Icon: Star, className: "bottom-[1%] left-[18%] text-papaya-orange/18", delay: 0.7 },
  { Icon: Sparkles, className: "top-[15%] left-[3%] text-papaya-green/20", delay: 0.6 },
  { Icon: Heart, className: "top-[50%] right-[8%] text-primary/18", delay: 1.0 },
  { Icon: Leaf, className: "bottom-[8%] right-[20%] text-accent/20", delay: 0.3 },
  { Icon: Sun, className: "bottom-[1%] left-[60%] text-papaya-yellow/18", delay: 0.9 },
  { Icon: Star, className: "top-[5%] right-[40%] text-papaya-orange/18", delay: 0.4 },
  { Icon: Sparkles, className: "bottom-[25%] left-[35%] text-papaya-green/20", delay: 0.8 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectsSection = () => {
  const currentProjects = projects.filter((p) => p.status === "current");
  const pastProjects = projects.filter((p) => p.status === "past");

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Floating decorative elements */}
      {floatingElements.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
          viewport={{ once: true }}
          className={`absolute hidden md:block pointer-events-none ${className}`}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        </motion.div>
      ))}
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-extrabold text-primary uppercase tracking-widest">
            Our Journey
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-extrabold mt-3 text-foreground">
            Projects Timeline
          </motion.h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Dashed Orange Vertical Timeline Line */}
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-1 h-full" 
               style={{
                 background: `repeating-linear-gradient(
                   to bottom,
                   rgb(255, 107, 53) 0px,
                   rgb(255, 107, 53) 20px,
                   transparent 20px,
                   transparent 35px
                 )`,
               }} 
          />

          {/* Content - Full Width Alternating Layout */}
          <div className="space-y-3">
            {/* Current Projects */}
            {currentProjects.map((project, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  custom={index}
                  className={`relative flex items-center justify-center md:${isLeft ? "justify-start" : "justify-end"} pt-0`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -top-4 z-10">
                    <div className="w-8 h-8 rounded-full bg-primary ring-4 ring-background" />
                  </div>

                  {/* Curved Arrow Connector */}
                  <svg
                    className="absolute hidden md:block top-2 h-40 left-1/2 -translate-x-1/2"
                    width="420"
                    height="150"
                    viewBox="0 0 420 150"
                    fill="none"
                    style={{ opacity: 0.8 }}
                  >
                    {isLeft ? (
                      <>
                        <path
                          d="M 210 0 Q 120 30, 30 90 Q 10 105, 0 115"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-primary"
                          strokeDasharray="6,6"
                          fill="none"
                        />
                        <polygon points="0,115 -8,125 8,135" fill="currentColor" className="text-primary" />
                      </>
                    ) : (
                      <>
                        <path
                          d="M 210 0 Q 300 30, 390 90 Q 410 105, 420 115"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-primary"
                          strokeDasharray="6,6"
                          fill="none"
                        />
                        <polygon points="420,115 428,125 412,135" fill="currentColor" className="text-primary" />
                      </>
                    )}
                  </svg>

                  {/* Project Bubble */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`w-full max-w-[24rem] md:w-96 cursor-pointer group ${isLeft ? "md:mr-12" : "md:ml-12"}`}
                  >
                    <div className="relative rounded-full overflow-hidden mb-4 h-72 w-72 mx-auto md:h-96 md:w-96 shadow-lg group-hover:shadow-xl transition-shadow ring-4 ring-primary/80 group-hover:ring-primary">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.palette} opacity-25`} />
                      <div className="absolute inset-4 rounded-full border-2 border-white/40" />
                      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.6),_transparent_50%)]" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground text-center group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">{project.location}</p>
                    <p className="text-xs font-light text-muted-foreground text-center mt-1">{project.dateRange}</p>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Divider with Milestone */}
            <motion.div
              variants={fadeUp}
              custom={currentProjects.length}
              className="relative pt-1 pb-1"
            >
              <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10 -top-4">
                <div className="w-8 h-8 rounded-full bg-primary ring-4 ring-background" />
              </div>
              <div className="flex justify-center pt-1">
                <div className="bg-background px-6 py-3 rounded-full border-2 border-primary">
                  <span className="text-sm font-bold text-foreground">
                    🚀 March 2026 - Organization Founded
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Past Projects */}
            {pastProjects.map((project, index) => {
              const isLeft = (currentProjects.length + index) % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  custom={currentProjects.length + 1 + index}
                  className={`relative flex items-center justify-center md:${isLeft ? "justify-start" : "justify-end"} pt-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -top-4 z-10">
                    <div className="w-8 h-8 rounded-full bg-muted ring-4 ring-background" />
                  </div>

                  {/* Curved Arrow Connector */}
                  <svg
                    className="absolute hidden md:block top-2 h-40 left-1/2 -translate-x-1/2"
                    width="420"
                    height="150"
                    viewBox="0 0 420 150"
                    fill="none"
                    style={{ opacity: 0.5 }}
                  >
                    {isLeft ? (
                      <>
                        <path
                          d="M 210 0 Q 120 30, 30 90 Q 10 105, 0 115"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-muted-foreground"
                          strokeDasharray="6,6"
                          fill="none"
                        />
                        <polygon points="0,115 -8,125 8,135" fill="currentColor" className="text-muted-foreground" />
                      </>
                    ) : (
                      <>
                        <path
                          d="M 210 0 Q 300 30, 390 90 Q 410 105, 420 115"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-muted-foreground"
                          strokeDasharray="6,6"
                          fill="none"
                        />
                        <polygon points="420,115 428,125 412,135" fill="currentColor" className="text-muted-foreground" />
                      </>
                    )}
                  </svg>

                  {/* Past Project Bubble - Grayscale with color on hover */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`w-full max-w-[24rem] md:w-96 cursor-pointer group ${isLeft ? "md:mr-12" : "md:ml-12"}`}
                  >
                    <div className="relative rounded-full overflow-hidden mb-4 h-72 w-72 mx-auto md:h-96 md:w-96 shadow-lg group-hover:shadow-xl transition-all ring-4 ring-muted group-hover:ring-primary/80">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.palette} opacity-35 group-hover:opacity-20 transition-opacity duration-300`} />
                      <div className="absolute inset-6 rounded-full border border-white/30 group-hover:border-white/60" />
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,_rgba(255,255,255,0.5)_0%,_transparent_35%,_transparent_70%,_rgba(0,0,0,0.1)_100%)]" />
                    </div>
                    <h3 className="text-lg font-bold text-muted-foreground group-hover:text-foreground text-center transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">{project.location}</p>
                    <p className="text-xs font-light text-muted-foreground text-center mt-1">{project.dateRange}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
