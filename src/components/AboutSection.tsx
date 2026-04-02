import { motion } from "framer-motion";
import polskoImg from "@/assets/polsko.jpg";

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
            <span className="text-sm font-extrabold text-primary uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-6 text-foreground">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              Papaya International is a non-profit organization based in Slovakia, dedicated to empowering young people through international cooperation, non-formal education, and Erasmus+ projects.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded with a passion for youth work, we believe in the transformative power of cross-cultural exchange. Our mission is to create opportunities that help young people develop skills, build confidence, and become active citizens of Europe.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="flex justify-center mt-10 md:mt-6">
            <div className="relative w-full max-w-md h-72 md:h-96 rounded-3xl overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)]">
              <img
                src={polskoImg}
                alt="Poland mobility"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Values */}
        {/* Vision & Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid md:grid-cols-2 gap-8 mt-28"
        >
          <motion.article
            variants={fadeUp}
            custom={0}
            className="rounded-3xl border border-primary/20 bg-card p-8 shadow-xl shadow-primary/10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary/70">Our Vision</p>
            <h3 className="text-2xl font-extrabold text-foreground mt-4 mb-3">Youth work rooted in real communities</h3>
            <p className="text-muted-foreground leading-relaxed">
              We see Central Europe where young people feel confident to stay curious, speak up for their neighbourhoods, and move between countries without losing their identity.
            </p>
          </motion.article>
          <motion.article
            variants={fadeUp}
            custom={1}
            className="rounded-3xl border border-secondary/20 bg-papaya-light p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-secondary">Our Mission</p>
            <h3 className="text-2xl font-extrabold text-foreground mt-4 mb-3">Programmes that end with action</h3>
            <p className="text-muted-foreground leading-relaxed">
              We co-create exchanges, trainings, and mentoring circles with local schools, municipalities, and youth leaders so every participant leaves with a plan, a network, and the courage to keep going.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
