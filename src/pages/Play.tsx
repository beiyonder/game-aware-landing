
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameScenario from "@/components/GameScenario";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Play = () => {
  const [gameCompleted, setGameCompleted] = useState(false);
  
  const handleGameRestart = () => {
    setGameCompleted(false);
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors mr-4">
              <ArrowLeft size={16} className="mr-1" />
              <span>Back</span>
            </Link>
            <h1 className="font-pixel text-3xl">HEALTH SCENARIO</h1>
          </div>
          
          <div className="glass-panel rounded-lg crt-effect p-6 min-h-[500px]">
            <GameScenario onRestart={handleGameRestart} />
          </div>
          
          <div className="mt-12 text-center text-muted-foreground text-sm">
            <p>This is an educational simulation. Always consult healthcare professionals for real medical advice.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Play;
