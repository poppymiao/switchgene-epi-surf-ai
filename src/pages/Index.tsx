
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Applications } from "@/components/Applications";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#004853]/10">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Applications />
      <Footer />
    </div>
  );
};

export default Index;
