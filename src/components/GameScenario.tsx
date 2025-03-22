
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

type ScenarioStep = {
  id: number;
  text: string;
  choices: {
    id: number;
    text: string;
    effect: number; // Health impact (-100 to +100)
    feedback: string;
  }[];
};

// Sample scenario data
const headacheScenario: ScenarioStep[] = [
  {
    id: 1,
    text: "A patient arrives with a splitting headache that started this morning...",
    choices: [
      {
        id: 1,
        text: "Drink Water",
        effect: 15,
        feedback: "Drinking water helps with mild dehydration. Headache slightly improves."
      },
      {
        id: 2,
        text: "Take Painkiller",
        effect: 30,
        feedback: "The painkiller starts to take effect. Pain subsides temporarily."
      },
      {
        id: 3,
        text: "Consult Doctor",
        effect: 5,
        feedback: "Doctor advises further assessment. No immediate relief but better understanding."
      }
    ]
  },
  {
    id: 2,
    text: "The headache persists but with varying intensity. What's your next approach?",
    choices: [
      {
        id: 1,
        text: "Rest in Dark Room",
        effect: 25,
        feedback: "Reducing sensory stimulation helps. Patient reports gradual improvement."
      },
      {
        id: 2,
        text: "Check Blood Pressure",
        effect: 10,
        feedback: "Blood pressure is slightly elevated. This information helps identify potential causes."
      },
      {
        id: 3,
        text: "Apply Cold Compress",
        effect: 20,
        feedback: "The cold compress provides temporary relief to the throbbing pain."
      }
    ]
  },
  {
    id: 3,
    text: "After some time, the patient's symptoms have changed somewhat. What would you suggest now?",
    choices: [
      {
        id: 1,
        text: "Consider Stress Factors",
        effect: 20,
        feedback: "Identifying stress triggers helps address underlying causes. Patient feels more in control."
      },
      {
        id: 2,
        text: "Check Diet History",
        effect: 15,
        feedback: "Patient recalls skipping meals. Addressing nutrition helps with recovery."
      },
      {
        id: 3,
        text: "Screen Time Reduction",
        effect: 25,
        feedback: "Reducing digital eye strain has a noticeable positive effect on symptoms."
      }
    ]
  }
];

// Outcome messages based on final health
const outcomes = {
  good: "Your patient's headache improved significantly! Your choices led to effective treatment.",
  average: "The headache has somewhat improved, but the patient may need follow-up care.",
  poor: "Condition worsened—try different actions next time for better results."
};

const GameScenario = ({ onRestart }: { onRestart: () => void }) => {
  const [health, setHealth] = useState(50); // Starting at 50% health
  const [currentStep, setCurrentStep] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  
  // Reset function
  const resetGame = () => {
    setHealth(50);
    setCurrentStep(0);
    setIsGameOver(false);
    setSelectedChoice(null);
    setShowFeedback(false);
    setFeedbackMessage("");
    onRestart();
  };
  
  // Handle choice selection
  const handleChoiceSelect = (choiceId: number) => {
    setSelectedChoice(choiceId);
  };
  
  // Process the current choice and move to next step
  const handleContinue = () => {
    if (selectedChoice === null) return;
    
    const scenario = headacheScenario[currentStep];
    const choice = scenario.choices.find(c => c.id === selectedChoice);
    
    if (!choice) return;
    
    // Apply health change
    const newHealth = Math.min(Math.max(health + choice.effect, 0), 100);
    setHealth(newHealth);
    
    // Show feedback
    setFeedbackMessage(choice.feedback);
    setShowFeedback(true);
    
    // Trigger toast notification
    toast(choice.feedback, {
      position: "bottom-center",
      duration: 3000
    });
    
    // Wait for feedback, then move to next step
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedChoice(null);
      
      // Check if this was the last step
      if (currentStep >= headacheScenario.length - 1) {
        setIsGameOver(true);
      } else {
        setCurrentStep(prevStep => prevStep + 1);
      }
    }, 2000);
  };
  
  // Get outcome message based on final health
  const getOutcome = () => {
    if (health >= 75) return outcomes.good;
    if (health >= 40) return outcomes.average;
    return outcomes.poor;
  };
  
  // Intro animation effect
  useEffect(() => {
    // Fade in the first scenario
  }, []);
  
  // Current scenario
  const scenario = headacheScenario[currentStep];
  
  return (
    <div className="h-full flex flex-col justify-between p-4">
      {isGameOver ? (
        <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in text-center h-full">
          <h2 className="font-pixel text-xl mb-2">TREATMENT COMPLETE</h2>
          <div className="mb-4">
            <div className="text-2xl mb-2">Patient Health: {health}%</div>
            <Progress value={health} className="h-4 w-full max-w-xs" />
          </div>
          <p className="text-md mb-6">{getOutcome()}</p>
          <button 
            onClick={resetGame}
            className="retro-button px-6 py-3"
          >
            TRY AGAIN
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-pixel text-sm">PATIENT HEALTH</span>
              <span className="font-mono">{health}%</span>
            </div>
            <Progress value={health} className="h-3" />
          </div>
          
          <div className="bg-background/50 p-4 rounded-md border border-accent mb-4 animate-fade-in">
            <p>{scenario.text}</p>
          </div>
          
          {showFeedback ? (
            <div className="bg-primary/10 p-4 rounded-md border border-primary mb-4 animate-fade-in">
              <p className="font-medium">{feedbackMessage}</p>
            </div>
          ) : (
            <div className="space-y-3 mb-4">
              {scenario.choices.map((choice) => (
                <button 
                  key={choice.id}
                  className={`w-full text-left p-3 border-2 rounded-md transition-all duration-300 ${
                    selectedChoice === choice.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-accent hover:border-primary/50'
                  }`}
                  onClick={() => handleChoiceSelect(choice.id)}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedChoice === choice.id ? 'border-primary' : 'border-accent'
                    }`}>
                      {selectedChoice === choice.id && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                    <span>{choice.text}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
          
          {selectedChoice !== null && !showFeedback && (
            <button 
              className="retro-button w-full mt-4 text-sm animate-fade-in"
              onClick={handleContinue}
            >
              CONTINUE
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default GameScenario;
