import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Young people collaborating across Europe" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      <div className="relative z-10 container-narrow mx-auto section-padding pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 mb-6 border border-primary-foreground/20">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">EU-Based Non-Profit · Slovakia</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Empowering Youth{" "}
            <span className="text-accent">Across Europe</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-10 leading-relaxed"
          >
            We connect young people through international projects, trainings, and exchanges that build skills, foster inclusion, and create lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#get-involved">
                Join Us <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#projects">Explore Projects</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
