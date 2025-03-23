
import { useState, useEffect } from "react";
import { Hospital, Stethoscope, User } from "lucide-react";

const AnimatedCharacters = () => {
  const [doctorPosition, setDoctorPosition] = useState(-100);
  const [patientPosition, setPatientPosition] = useState(100);
  
  useEffect(() => {
    // Animate characters moving in from sides
    const animationTimer = setTimeout(() => {
      setDoctorPosition(20);
      setPatientPosition(20);
    }, 300);
    
    return () => clearTimeout(animationTimer);
  }, []);
  
  return (
    <div className="relative h-32 mb-8 overflow-hidden">
      {/* Doctor Character */}
      <div 
        className="absolute top-0 flex items-center transition-all duration-700 ease-out"
        style={{ left: `${doctorPosition}px` }}
      >
        <div className="relative">
          <div className="bg-primary rounded-full p-3">
            <Stethoscope className="w-8 h-8 text-primary-foreground" />
          </div>
          <Hospital className="absolute -top-4 -right-2 w-5 h-5 text-primary" />
        </div>
        
        <div className="ml-4 glass-panel p-3 rounded-lg max-w-xs">
          <h3 className="font-pixel text-sm mb-1">DR. HEALTH</h3>
          <p className="text-xs text-muted-foreground">Ready to guide you through this health scenario.</p>
        </div>
      </div>
      
      {/* Patient Character */}
      <div 
        className="absolute top-0 right-0 flex items-center flex-row-reverse transition-all duration-700 ease-out"
        style={{ right: `${patientPosition}px` }}
      >
        <div className="bg-secondary rounded-full p-3">
          <User className="w-8 h-8 text-secondary-foreground" />
        </div>
        
        <div className="mr-4 glass-panel p-3 rounded-lg max-w-xs">
          <h3 className="font-pixel text-sm mb-1">PATIENT</h3>
          <p className="text-xs text-muted-foreground">I have a splitting headache that started this morning...</p>
        </div>
      </div>
      
      {/* Connection Line (appears after both characters are in place) */}
      {doctorPosition === 20 && patientPosition === 20 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-primary/30 animate-pulse-subtle"></div>
      )}
    </div>
  );
};

export default AnimatedCharacters;
