
import { MessageSquare, Mic, ImageIcon } from "lucide-react";

const InputOptions = () => {
  return (
    <div className="h-80 flex flex-col justify-center gap-4 p-2">
      <h4 className="font-pixel text-lg mb-2 text-center">SELECT INPUT MODE</h4>
      
      <div className="input-option group animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          <MessageSquare size={20} className="text-primary" />
        </div>
        <div>
          <h5 className="font-medium mb-0.5">Text Input</h5>
          <p className="text-sm text-muted-foreground">Type your questions or responses</p>
        </div>
      </div>
      
      <div className="input-option group animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          <Mic size={20} className="text-primary" />
        </div>
        <div>
          <h5 className="font-medium mb-0.5">Voice Input</h5>
          <p className="text-sm text-muted-foreground">Speak directly to the AI</p>
        </div>
      </div>
      
      <div className="input-option group animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          <ImageIcon size={20} className="text-primary" />
        </div>
        <div>
          <h5 className="font-medium mb-0.5">Image Input</h5>
          <p className="text-sm text-muted-foreground">Upload images for analysis</p>
        </div>
      </div>
    </div>
  );
};

export default InputOptions;
