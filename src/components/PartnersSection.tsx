import { motion } from "framer-motion";
import { useState } from "react";
import { partners } from "@/data/partners";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const PartnersSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Asymmetric grid positioning
  const gridPositions = [
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-1 lg:row-span-2",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
  ];

  return (
    <section id="partners" className="section-padding bg-background relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="absolute">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-narrow mx-auto relative">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-xs font-extrabold text-primary uppercase tracking-[0.35em]"
          >
            Global Network
          </motion.span>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-6xl md:text-7xl font-black mt-4 mb-6 text-foreground leading-[1.1]"
          >
            No one changes
            <br />
            the world alone.
          </motion.h1>
        </motion.div>

        {/* Passport Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 auto-rows-[360px] lg:auto-rows-[280px]"
        >
          {partners.map((partner, i) => {
            const rotation = [-2, 3, -1, 2, -3][i % 5];
            const isLarge = i === 1;
            const isTall = i === 2;

            return (
              <motion.div
                key={partner.name}
                variants={fadeUp}
                custom={i}
                className={`${gridPositions[i % 5]} col-span-1`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`relative h-full bg-card border-2 border-papaya-orange/30 p-6 cursor-pointer overflow-hidden group
                    ${isLarge ? "sm:col-span-2" : ""}
                    ${isTall ? "lg:row-span-2" : ""}
                  `}
                  style={{
                    rotate: rotation,
                    perspective: "1000px",
                  }}
                  whileHover={{
                    rotate: 0,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Hand-drawn corner effect */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-papaya-orange via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Country Initial - Large, bold */}
                  <div className="absolute top-4 left-4 text-6xl md:text-7xl font-black text-papaya-orange/10 pointer-events-none">
                    {partner.country.slice(0, 1)}
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="inline-block mb-4 px-3 py-1 rounded-full bg-papaya-orange/10 border border-papaya-orange/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-xs font-extrabold text-papaya-orange uppercase tracking-widest">
                          {partner.country}
                        </span>
                      </motion.div>
                      <h3 className="font-extrabold text-foreground text-xl md:text-2xl mb-3">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{partner.desc}</p>
                    </div>

                    {/* Hover detail */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                      className="text-xs text-primary font-bold uppercase tracking-widest mt-4 pt-4 border-t border-border/30"
                    >
                      → Verified Partner
                    </motion.div>
                  </div>

                  {/* Decorative corner sticker */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-papaya-orange to-primary/50 opacity-20 group-hover:opacity-60 transition-opacity" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
