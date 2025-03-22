
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameInterface from "@/components/GameInterface";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GameInterface />
      <Footer />
    </div>
  );
};

export default Index;
