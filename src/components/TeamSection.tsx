import { motion } from "framer-motion";
import adamImg from "@/assets/adam.jpg";
import teoImg from "@/assets/teo.jpeg";
import marekImg from "@/assets/marek.jpeg";
import samoImg from "@/assets/samo.jpg";
import ninaImg from "@/assets/nina.jpg";

const team = [
  {
    name: "Adam",
    role: "Project organiser",
    bio: "More than four years designing youth experiences, handling international collaboration, communication, and representation for Papaya partners.",
    initials: "AD",
    gradient: "from-papaya-orange via-primary to-papaya-yellow",
    image: adamImg,
  },

  
  {
    name: "Teo",
    role: "IT support & content creator",
    bio: "Keeps our digital stack reliable while translating programmes into fresh visuals, recaps, and social content young people relate to.",
    initials: "TE",
    gradient: "from-secondary via-papaya-green to-accent",
    image: teoImg,
  },
  {
    name: "Marek",
    role: "Volunteer & co-founder",
    bio: "Co-founded Papaya to keep grassroots energy in every exchange and now mentors new volunteers as they step into international projects.",
    initials: "MA",
    gradient: "from-papaya-yellow via-primary to-secondary",
    image: marekImg,
  },
  {
    name: "Samo",
    role: "Communications lead",
    bio: "Moves seamlessly across six languages to align expectations, negotiate details, and keep multicultural partners in sync from kickoff to delivery.",
    initials: "SA",
    gradient: "from-primary via-papaya-orange to-papaya-dark",
    image: samoImg,
  },
  {
    name: "Nina",
    role: "Project writer & evaluator",
    bio: "Drafts grant-ready proposals, keeps funding documentation watertight, and steers post-programme evaluation to capture every lesson learned.",
    initials: "NI",
    gradient: "from-papaya-green via-secondary to-primary",
    image: ninaImg,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-papaya-light">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-sm font-extrabold text-primary uppercase tracking-widest">
            Our Team
          </motion.span>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-extrabold mt-2 text-foreground">
            Meet the Papaya crew
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A dedicated team united by a shared passion for youth empowerment and international cooperation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-3xl overflow-hidden card-hover border border-border flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_60%)]" />
              </div>
              <div className="p-6 flex flex-col gap-3 text-left">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary/70 font-bold">{member.role}</p>
                  <h3 className="font-extrabold text-foreground text-2xl mt-2">{member.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
