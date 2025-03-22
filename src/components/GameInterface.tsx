
import { useState } from "react";
import InputOptions from "./InputOptions";
import StoryChoices from "./StoryChoices";

const GameInterface = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <section id="game-interface" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-pixel text-3xl sm:text-4xl mb-6 tracking-tight">HOW IT WORKS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our interactive experience combines AI technology with game mechanics to enhance your health awareness in an engaging way.
            </p>
          </div>
          
          <div className="glass-panel rounded-lg p-8 crt-effect">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="flex-1 space-y-6 md:pr-8">
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-sm font-pixel text-xs tracking-wider">
                  STEP {currentStep}/3
                </div>
                <h3 className="font-pixel text-2xl">
                  {currentStep === 1 && "CHOOSE YOUR INPUT METHOD"}
                  {currentStep === 2 && "ENGAGE WITH THE AI"}
                  {currentStep === 3 && "MAKE INFORMED CHOICES"}
                </h3>
                <p className="text-muted-foreground">
                  {currentStep === 1 && "Select how you want to interact with the AI. Each mode offers different ways to engage with health information."}
                  {currentStep === 2 && "Our AI adapts to your inputs and learning style, creating a personalized experience based on your interactions."}
                  {currentStep === 3 && "Navigate through scenarios by making choices that impact your virtual health journey and learning outcomes."}
                </p>
                
                <div className="flex gap-3 mt-8">
                  <button 
                    className={`w-3 h-3 rounded-full ${currentStep === 1 ? 'bg-primary' : 'bg-secondary hover:bg-primary/50'}`}
                    onClick={() => setCurrentStep(1)}
                  ></button>
                  <button 
                    className={`w-3 h-3 rounded-full ${currentStep === 2 ? 'bg-primary' : 'bg-secondary hover:bg-primary/50'}`}
                    onClick={() => setCurrentStep(2)}
                  ></button>
                  <button 
                    className={`w-3 h-3 rounded-full ${currentStep === 3 ? 'bg-primary' : 'bg-secondary hover:bg-primary/50'}`}
                    onClick={() => setCurrentStep(3)}
                  ></button>
                </div>
              </div>
              
              <div className="w-full md:w-2/5 bg-background rounded-lg border-2 border-secondary p-4 pixel-shadow">
                {currentStep === 1 && <InputOptions />}
                {currentStep === 2 && (
                  <div className="h-80 flex flex-col items-center justify-center p-4 text-center">
                    <div className="animate-pulse-subtle mb-4">
                      <div className="inline-block w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary animate-pulse-subtle"></div>
                      </div>
                    </div>
                    <h4 className="font-pixel text-lg mb-2">AI PROCESSING</h4>
                    <p className="text-muted-foreground text-sm">
                      The AI is adapting to your input and generating a personalized response...
                    </p>
                    <div className="mt-6 flex gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle delay-0"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle delay-150"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle delay-300"></div>
                    </div>
                  </div>
                )}
                {currentStep === 3 && <StoryChoices />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInterface;
