import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Sun, Heart, Leaf, Globe } from "lucide-react";
import papayaHerImg from "@/assets/papaya-her.jpeg";

const floatingIcons = [
  { Icon: Star, className: "top-[15%] right-[8%] text-papaya-orange/30", delay: 0 },
  { Icon: Sun, className: "top-[25%] right-[22%] text-papaya-yellow/25", delay: 0.5 },
  { Icon: Heart, className: "bottom-[30%] right-[12%] text-primary/20", delay: 1 },
  { Icon: Sparkles, className: "top-[60%] right-[28%] text-papaya-green/20", delay: 1.5 },
  { Icon: Leaf, className: "bottom-[20%] right-[25%] text-accent/25", delay: 0.8 },
  { Icon: Globe, className: "top-[40%] right-[5%] text-secondary/20", delay: 1.2 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero-bg">
      {/* Decorative blob */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-card/60 blur-sm" />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + delay, duration: 0.5 }}
          className={`absolute hidden md:block ${className}`}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 container-narrow mx-auto section-padding pt-28 md:pt-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground leading-[1.1] mb-4"
            >
              Papaya
              <br />
              International
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground/80 mb-2">
                Empowering Youth Across Europe
              </h2>
              <div className="w-20 h-1.5 rounded-full bg-primary mb-6" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed italic"
            >
              "We connect young people through international projects, trainings, and exchanges that build skills, foster inclusion, and create lasting impact across Europe."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="outline" size="lg" asChild>
                <a href="#about">
                  Explore More <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/50"
                animate={{ scale: [1, 1.02, 0.98, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={papayaHerImg}
                  alt="Papaya Her"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-6 rounded-full border border-white/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
