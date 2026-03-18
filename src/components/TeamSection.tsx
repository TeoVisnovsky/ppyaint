import { motion } from "framer-motion";

const team = [
  { name: "Anna Kováčová", role: "Founder & Director", bio: "Passionate youth worker with 10+ years in international education and Erasmus+ project management." },
  { name: "Marek Horváth", role: "Project Coordinator", bio: "Expert in non-formal education methodologies and youth exchange program design." },
  { name: "Sofia Petrová", role: "Communications Lead", bio: "Creative storyteller dedicated to amplifying youth voices across Europe." },
  { name: "Tomáš Novák", role: "Training Facilitator", bio: "Dynamic facilitator specializing in personal development and intercultural learning." },
];

const colors = [
  "from-primary to-accent",
  "from-secondary to-primary",
  "from-accent to-secondary",
  "from-primary to-secondary",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest">
            Our Team
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Meet the People Behind Papaya
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A dedicated team united by a shared passion for youth empowerment and international cooperation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-2xl overflow-hidden card-hover border border-border"
            >
              <div className={`h-48 bg-gradient-to-br ${colors[i]} flex items-center justify-center`}>
                <div className="w-24 h-24 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
