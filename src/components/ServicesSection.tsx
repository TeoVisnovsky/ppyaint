import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesSection = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["end end", "start start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);
  return (
    <section id="services" className="bg-background">
      <div className="section-padding py-8 md:py-12 bg-background">
        <div className="container-narrow mx-auto space-y-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-sm font-extrabold uppercase tracking-[0.35em] text-primary">What we do</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            custom={1}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Activities that matter, impact that lasts
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We create pathways for young people to explore the world, build lasting friendships, and bring their growth back home.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={imageRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={fadeUp}
        custom={2}
        className="relative overflow-hidden h-96 md:h-[500px] w-full"
      >
        <div className="relative h-full w-full bg-gradient-to-br from-papaya-orange via-primary to-papaya-green">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.7),_transparent_50%)]" />
          <div className="absolute inset-10 border border-white/30 rounded-[48px]" />
        </div>
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      </motion.div>

      <div className="section-padding bg-background">
        <div className="container-narrow mx-auto space-y-20">

          <div className="space-y-20">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeUp}
              custom={index + 1}
              className="rounded-[36px] border border-border/70 bg-card/90 p-8 md:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-5xl font-black text-primary/25 leading-none">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-primary">{service.kicker}</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">{service.title}</h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.summary}</p>

                <div className="grid gap-4 md:grid-cols-2">
                  {service.bullets.slice(0, 2).map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 rounded-3xl border border-border/60 bg-background/70 p-4">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className="min-w-[120px] rounded-3xl border border-border/60 bg-background/80 px-4 py-3 text-center">
                      <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                      <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="px-0 text-primary hover:text-primary/80" asChild>
                  <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-base font-semibold">
                    Read the full pathway <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
