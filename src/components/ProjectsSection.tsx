import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const categoryParam = new URLSearchParams(location.search).get("category");
  const selectedCategory = (categoryParam as "erasmus" | "childrens-camp") || "all";

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter((p) => p.category === selectedCategory);

  const currentProjects = filteredProjects.filter((p) => p.status === "current");
  const pastProjects = filteredProjects.filter((p) => p.status === "past");

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
            {selectedCategory === "erasmus" ? "Our Erasmus Journey" : "Projects Timeline"}
          </motion.h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-papaya-orange via-primary to-papaya-orange" />

          {/* Timeline Events - Bubble Layout */}
          <div className="space-y-0">
            {/* Present Day Marker */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative py-12 mb-8"
            >
              <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10 top-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-papaya-orange ring-4 ring-background" />
              </div>
              <div className="flex justify-center">
                <div className="bg-background px-8 py-4 rounded-full border-4 border-papaya-orange">
                  <span className="text-lg font-bold text-papaya-orange">
                    Present Day
                  </span>
                </div>
              </div>
            </motion.div>

            {currentProjects.map((project, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex flex-col items-center group"
                >
                  {/* Main Container with Bubble and Details */}
                  <div className={`flex items-center justify-center w-full gap-8 px-4 md:px-0`}>
                    {/* Left Side - Bubble */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className={`flex flex-col items-center flex-shrink-0 ${isLeft ? "" : "order-3"} transition-all duration-300 filter group-hover:grayscale-0 grayscale`}
                    >
                      {/* Circular Image Bubble */}
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ boxShadow: "0 0 40px rgba(255, 127, 80, 0.7)" }}
                          className="w-80 h-80 rounded-full border-4 border-papaya-orange/50 overflow-hidden bg-card shadow-2xl hover:border-papaya-orange transition-all duration-300"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>

                      {/* Project Info Below Bubble */}
                      <div className="text-center">
                        <h3 className="text-2xl font-extrabold text-foreground mb-2">{project.title}</h3>
                        <p className="text-base text-muted-foreground mb-2">
                          <span className="font-semibold text-foreground">📍</span> {project.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">📅</span> {project.dateRange}
                        </p>
                      </div>
                    </motion.div>

                    {/* Arrow/Connector */}
                    <div className={`hidden md:block ${isLeft ? "order-2" : "order-2"}`}>
                      <svg width="40" height="2" viewBox="0 0 40 2" className="fill-none">
                        <line x1="0" y1="1" x2="35" y2="1" stroke="rgba(255, 127, 80, 0.4)" strokeWidth="2" />
                        <polygon points="40,1 35,0 35,2" fill="rgba(255, 127, 80, 0.4)" />
                      </svg>
                    </div>

                    {/* Right Side - Details */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`flex-1 max-w-md ${isLeft ? "order-3" : "order-1"} transition-all duration-300 filter group-hover:grayscale-0 grayscale`}
                    >
                      <div className="bg-card border-l-4 border-papaya-orange rounded-lg p-6 shadow-lg h-full">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-bold text-papaya-orange uppercase tracking-wider mb-2">Overall Goal</h4>
                            <p className="text-sm text-muted-foreground">{project.overallGoal}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-bold text-papaya-orange uppercase tracking-wider mb-2">Key Objectives</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {project.objectives.slice(0, 2).map((obj, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-papaya-orange mt-0.5">•</span>
                                  <span>{obj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}

            {/* Past Projects Divider */}
            {pastProjects.length > 0 && currentProjects.length > 0 && (
              <motion.div
                variants={fadeUp}
                custom={currentProjects.length}
                className="relative py-8"
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10 top-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 rounded-full bg-muted ring-4 ring-background" />
                </div>
                <div className="flex justify-center">
                  <div className="bg-background px-6 py-3 rounded-full border-2 border-muted">
                    <span className="text-sm font-bold text-muted-foreground">
                      ✓ Past Projects
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Past Projects */}
            {pastProjects.map((project, index) => {
              const isLeft = (currentProjects.length + index) % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  custom={currentProjects.length + 1 + index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 top-6 z-10">
                    <div className="w-6 h-6 rounded-full bg-muted ring-4 ring-background" />
                  </div>

                  {/* Card Container */}
                  <div className={`flex items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      className={`w-full max-w-sm md:max-w-xs ${isLeft ? "md:mr-auto md:pl-12" : "md:ml-auto md:pr-12"}`}
                    >
                      <div className="bg-card border-2 border-muted/30 rounded-2xl p-6 hover:border-muted/80 transition-colors shadow-lg hover:shadow-xl opacity-75">
                        <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-2">Completed</p>
                        <h3 className="text-xl font-extrabold text-foreground mb-3">{project.title}</h3>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">📍</span> {project.location}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">📅</span> {project.dateRange}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
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
