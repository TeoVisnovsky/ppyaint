import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;
