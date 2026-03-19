import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import NotFound from "./NotFound";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return <NotFound />;
  }

  const { detail } = service;
  const mailto = `mailto:${detail.contact.email}?subject=${encodeURIComponent(service.title)}&body=Hi%20Papaya%20team,%20I'd%20love%20to%20learn%20more%20about%20${encodeURIComponent(service.title)}.`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container-narrow mx-auto section-padding space-y-12">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to What We Do
          </Link>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            custom={0}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center rounded-[40px] border border-border bg-card/80 p-8"
          >
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-primary">{service.kicker}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.summary}</p>
              <p className="text-muted-foreground leading-relaxed">{detail.longDescription}</p>

              <div className="grid sm:grid-cols-3 gap-6">
                {service.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-border/70 bg-background/60 p-4 text-center">
                    <p className="text-3xl font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/15 blur-3xl rounded-[48px]" />
              <div className="relative rounded-[40px] overflow-hidden border border-white/50 shadow-2xl shadow-primary/10">
                <img src={service.image} alt={service.imageAlt} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            custom={1}
            className="rounded-[36px] border border-border bg-card/70 p-8"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">How we deliver it</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {detail.focusAreas.map((area) => (
                <div key={area.title} className="rounded-3xl border border-border/70 bg-background/60 p-5">
                  <h3 className="text-lg font-bold text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {detail.commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            custom={2}
            className="rounded-[36px] border border-border bg-card/70 p-8"
          >
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Snapshots from the field</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {detail.gallery.map((src, idx) => (
                <div key={src + idx} className="rounded-3xl overflow-hidden border border-white/30 shadow-lg">
                  <img src={src} alt={`${service.title} gallery image ${idx + 1}`} className="w-full h-44 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
            custom={3}
            className="rounded-[36px] border border-border bg-gradient-to-r from-primary/10 to-secondary/10 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-primary mb-2">Contact person</p>
              <h3 className="text-2xl font-extrabold text-foreground">{detail.contact.name}</h3>
              <p className="text-sm text-muted-foreground">{detail.contact.role}</p>
            </div>
            <Button size="lg" asChild>
              <a href={mailto}>Email {detail.contact.name.split(" ")[0]}</a>
            </Button>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
