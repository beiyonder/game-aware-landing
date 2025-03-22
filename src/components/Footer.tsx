
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-pixel text-xl tracking-wider mb-2">HEALTH.AI</div>
            <p className="text-sm text-muted-foreground max-w-md">
              Enhancing health awareness through interactive learning experiences powered by multi-modal AI technology.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Contact
              </a>
            </div>
            <div className="text-sm text-muted-foreground flex items-center">
              <span>Built with</span>
              <Heart size={14} className="mx-1" />
              <span>for better health education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
