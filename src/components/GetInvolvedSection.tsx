import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Heart } from "lucide-react";

const opportunities = [
  { icon: Rocket, title: "Join a Project", desc: "Participate in youth exchanges, trainings, and mobility programs across Europe.", color: "bg-primary/15 text-primary" },
  { icon: Users, title: "Become a Partner", desc: "Collaborate with us on Erasmus+ projects and international initiatives.", color: "bg-accent/15 text-accent" },
  { icon: Heart, title: "Volunteer", desc: "Contribute your skills and energy to meaningful youth work activities.", color: "bg-secondary/15 text-secondary" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const GetInvolvedSection = () => {
  return (
    <section id="get-involved" className="section-padding gradient-hero-bg relative overflow-hidden">
      <div className="relative z-10 container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-extrabold text-primary uppercase tracking-widest">
            Get Involved
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-extrabold mt-2 text-foreground">
            Be Part of Something Bigger ✨
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Whether you're a young person seeking adventure, an organization looking to collaborate, or someone who wants to make a difference — there's a place for you here.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {opportunities.map((o, i) => (
            <motion.div
              key={o.title}
              variants={fadeUp}
              custom={i}
              className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl ${o.color} flex items-center justify-center mb-4`}>
                <o.icon className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-foreground text-lg mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground">{o.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">
              Get in Touch <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
