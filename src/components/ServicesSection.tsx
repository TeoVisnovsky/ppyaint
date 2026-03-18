import { motion } from "framer-motion";
import { BookOpen, Plane, Users2, Lightbulb, GraduationCap, Handshake } from "lucide-react";

const services = [
  { icon: Users2, title: "Youth Work Activities", desc: "Community-based programs that engage young people in meaningful social action and skill building.", color: "bg-primary/10 text-primary" },
  { icon: BookOpen, title: "Workshops & Trainings", desc: "Interactive non-formal education sessions on leadership, inclusion, and active citizenship.", color: "bg-accent/10 text-accent" },
  { icon: Plane, title: "Youth Exchanges", desc: "International mobility programs where young people learn through cross-cultural immersion.", color: "bg-secondary/10 text-secondary" },
  { icon: GraduationCap, title: "Erasmus+ Projects", desc: "EU-funded projects in partnership with organizations across Europe for youth empowerment.", color: "bg-papaya-yellow/20 text-papaya-orange" },
  { icon: Lightbulb, title: "Personal Development", desc: "Programs focused on self-discovery, confidence building, and future career skills.", color: "bg-primary/10 text-primary" },
  { icon: Handshake, title: "International Cooperation", desc: "Strategic partnerships with NGOs, institutions, and communities across the continent.", color: "bg-accent/10 text-accent" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-extrabold text-primary uppercase tracking-widest">
            What We Do
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-extrabold mt-2 text-foreground">
            Creating Impact Through Action 🚀
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i}
              className="group bg-card rounded-3xl p-8 card-hover border border-border relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
