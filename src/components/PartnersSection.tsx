import { motion } from "framer-motion";

const partners = [
  { name: "Youth Network Europe", country: "🇧🇪 Belgium", desc: "European network supporting youth organizations with capacity building." },
  { name: "Futuro Joven", country: "🇪🇸 Spain", desc: "Spanish NGO focused on youth participation and social innovation." },
  { name: "Jugendwerk Berlin", country: "🇩🇪 Germany", desc: "German youth work organization specializing in intercultural exchanges." },
  { name: "Associazione Giovani", country: "🇮🇹 Italy", desc: "Italian association empowering young people through education and mobility." },
  { name: "Stowarzyszenie Młodzież", country: "🇵🇱 Poland", desc: "Polish youth organization promoting active citizenship and European values." },
  { name: "Ung i Norden", country: "🇸🇪 Sweden", desc: "Scandinavian partner focused on inclusivity and sustainable development." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-extrabold text-primary uppercase tracking-widest">
            Our Partners
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-extrabold mt-2 text-foreground">
            European Cooperation 🤝
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We collaborate with organizations across Europe to create meaningful impact for young people.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-3xl p-6 card-hover border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-papaya-light flex items-center justify-center mb-4 text-2xl font-bold">
                {p.name.split(" ").slice(0, 2).map(w => w[0]).join("")}
              </div>
              <h3 className="font-extrabold text-foreground mb-1">{p.name}</h3>
              <p className="text-sm text-primary font-bold mb-2">{p.country}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Erasmus+ credibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 gradient-hero-bg rounded-3xl p-8 md:p-12 text-center border border-primary/10"
        >
          <p className="text-4xl mb-3">🇪🇺</p>
          <p className="text-sm font-extrabold text-primary uppercase tracking-widest mb-2">Co-funded by the European Union</p>
          <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">Erasmus+ Programme</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our projects are co-funded by the European Union's Erasmus+ programme, ensuring quality, accessibility, and real impact for young people across Europe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
