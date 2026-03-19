import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const floatingIcons = [
  { Icon: Star, className: "hidden lg:block w-12 h-12 text-papaya-yellow/30 top-10 left-[8%]", delay: 0 },
  { Icon: Heart, className: "hidden lg:block w-10 h-10 text-primary/20 top-1/3 right-[6%]", delay: 0.4 },
  { Icon: Leaf, className: "hidden lg:block w-12 h-12 text-accent/25 bottom-12 left-[15%]", delay: 0.8 },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative section-padding bg-background overflow-hidden">
      {floatingIcons.map(({ Icon, className, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + delay, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-extrabold text-primary uppercase tracking-widest">
            What We Do
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-extrabold mt-3 text-foreground">
            Youth pathways with real follow-up
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed text-lg mt-4">
            We keep programmes intimate, mentored, and focused on what happens after the mobility. Every pathway below combines non-formal
            education, mentoring, and strong partner coordination so young people can test ideas and bring them home.
          </motion.p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            const textOrder = isEven ? "md:order-1" : "md:order-2";
            const imageOrder = isEven ? "md:order-2" : "md:order-1";

            return (
              <motion.article
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                variants={fadeUp}
                custom={index + 2}
                className="rounded-[40px] border border-border bg-card/70 backdrop-blur-sm shadow-xl shadow-primary/5 p-6 sm:p-10"
              >
                <div className={`grid gap-10 items-center ${isEven ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"}`}>
                  <div className={`space-y-5 order-2 ${textOrder}`}>
                    <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-primary">{service.kicker}</span>
                    <h3 className="text-3xl font-extrabold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>

                    <ul className="space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-6 text-sm font-semibold text-foreground/80">
                      {service.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                          <p className="uppercase tracking-widest text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" size="lg" asChild>
                      <Link to={`/services/${service.id}`}>
                        Explore more <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={`order-1 ${imageOrder}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-3xl rounded-[48px]" />
                      <div className="relative rounded-[36px] overflow-hidden border border-white/60 shadow-2xl shadow-primary/15">
                        <img src={service.image} alt={service.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
