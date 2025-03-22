
import { useState } from "react";
import { Check } from "lucide-react";

const StoryChoices = () => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  
  const handleSelect = (index: number) => {
    setSelectedChoice(index);
  };
  
  return (
    <div className="h-80 flex flex-col justify-center p-4">
      <h4 className="font-pixel text-lg mb-4 text-center">MAKE YOUR CHOICE</h4>
      
      <div className="mb-4">
        <p className="text-sm mb-6">
          You discover that your daily routine might be impacting your sleep quality. What would you like to learn more about?
        </p>
        
        <div className="space-y-3">
          <button 
            className={`w-full text-left p-3 border-2 rounded-md transition-all duration-300 ${
              selectedChoice === 0 
                ? 'border-primary bg-primary/5' 
                : 'border-accent hover:border-primary/50'
            }`}
            onClick={() => handleSelect(0)}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                selectedChoice === 0 ? 'border-primary' : 'border-accent'
              }`}>
                {selectedChoice === 0 && <Check size={12} className="text-primary" />}
              </div>
              <span>Sleep hygiene and best practices</span>
            </div>
          </button>
          
          <button 
            className={`w-full text-left p-3 border-2 rounded-md transition-all duration-300 ${
              selectedChoice === 1 
                ? 'border-primary bg-primary/5' 
                : 'border-accent hover:border-primary/50'
            }`}
            onClick={() => handleSelect(1)}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                selectedChoice === 1 ? 'border-primary' : 'border-accent'
              }`}>
                {selectedChoice === 1 && <Check size={12} className="text-primary" />}
              </div>
              <span>Digital device impact on sleep</span>
            </div>
          </button>
          
          <button 
            className={`w-full text-left p-3 border-2 rounded-md transition-all duration-300 ${
              selectedChoice === 2 
                ? 'border-primary bg-primary/5' 
                : 'border-accent hover:border-primary/50'
            }`}
            onClick={() => handleSelect(2)}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                selectedChoice === 2 ? 'border-primary' : 'border-accent'
              }`}>
                {selectedChoice === 2 && <Check size={12} className="text-primary" />}
              </div>
              <span>Nutrition and its effect on sleep</span>
            </div>
          </button>
        </div>
      </div>
      
      {selectedChoice !== null && (
        <button className="retro-button w-full mt-4 text-sm animate-fade-in">
          CONTINUE
        </button>
      )}
    </div>
  );
};

export default StoryChoices;
