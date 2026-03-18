import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Heart } from "lucide-react";

const opportunities = [
  { icon: Rocket, title: "Join a Project", desc: "Participate in youth exchanges, trainings, and mobility programs across Europe." },
  { icon: Users, title: "Become a Partner", desc: "Collaborate with us on Erasmus+ projects and international initiatives." },
  { icon: Heart, title: "Volunteer", desc: "Contribute your skills and energy to meaningful youth work activities." },
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
    <section id="get-involved" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-95" />
      <div className="relative z-10 container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-widest">
            Get Involved
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mt-2 text-primary-foreground">
            Be Part of Something Bigger
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
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
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:-translate-y-1 transition-transform"
            >
              <o.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-primary-foreground text-lg mb-2">{o.title}</h3>
              <p className="text-sm text-primary-foreground/75">{o.desc}</p>
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
          <Button size="lg" className="rounded-full bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 hover:scale-105 transition-all" asChild>
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
