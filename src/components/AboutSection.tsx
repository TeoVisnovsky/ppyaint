import { motion } from "framer-motion";
import { Heart, Users, Sprout, Globe2 } from "lucide-react";

const values = [
  { icon: Heart, title: "Inclusion", desc: "Creating spaces where everyone belongs, regardless of background." },
  { icon: Sprout, title: "Growth", desc: "Fostering personal and professional development in every participant." },
  { icon: Users, title: "Collaboration", desc: "Building bridges between communities, organizations, and cultures." },
  { icon: Globe2, title: "Diversity", desc: "Celebrating differences as our greatest strength." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Papaya International is a non-profit organization based in Slovakia, dedicated to empowering young people through international cooperation, non-formal education, and Erasmus+ projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for youth work, we believe in the transformative power of cross-cultural exchange. Our mission is to create opportunities that help young people develop skills, build confidence, and become active citizens of Europe.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <div className="bg-muted rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                A Europe where every young person has access to transformative learning experiences that empower them to shape their communities and futures.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To design and deliver innovative international projects that foster inclusion, build skills, and connect young people across borders through non-formal education and youth work.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 variants={fadeUp} custom={0} className="text-center text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Our Values
          </motion.h3>
          <motion.p variants={fadeUp} custom={0} className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
            What Drives Us
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-6 card-hover border border-border"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
