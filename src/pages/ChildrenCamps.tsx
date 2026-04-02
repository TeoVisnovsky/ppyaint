import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ChildrenCampsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Children Camps
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
            To be done
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ChildrenCampsPage;
