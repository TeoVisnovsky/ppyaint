import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Papaya International changed my life. I discovered my passion for youth work and made friends from all over Europe.", name: "Elena, 22", country: "Romania" },
  { quote: "The training was incredible — I learned facilitation skills I now use every day in my community work.", name: "Jakub, 25", country: "Czech Republic" },
  { quote: "Being part of the exchange opened my eyes to different cultures and gave me confidence I never had before.", name: "Maria, 20", country: "Portugal" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Stories from Our Participants
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-2xl p-8 border border-border card-hover relative"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.country}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
