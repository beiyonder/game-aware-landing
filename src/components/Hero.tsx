
import { Play, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById("game-interface");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 crt-effect overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-10 pixel-perfect"></div>
      <div className="scanline"></div>
      
      <div className={`z-10 text-center max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-sm mb-6 font-pixel text-sm tracking-wider animate-pulse-subtle">
          INTERACTIVE LEARNING EXPERIENCE
        </div>
        
        <h1 className="font-pixel text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 tracking-tight">
          ENHANCING HEALTH AWARENESS THROUGH
          <span className="block mt-2">MULTI-MODAL AI</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Navigate through an interactive journey designed to improve your health literacy using cutting-edge AI technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="retro-button group animate-button-pulse relative">
            <Play className="mr-2 h-5 w-5" />
            START EXPERIENCE
          </button>
          <button 
            className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium rounded-sm"
          >
            LEARN MORE
          </button>
        </div>
      </div>
      
      <div 
        className={`absolute bottom-8 animate-hover-bounce cursor-pointer transition-opacity duration-700 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
        onClick={scrollToContent}
      >
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
