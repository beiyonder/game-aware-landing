
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-sm mb-6 font-pixel text-sm tracking-wider">
                ABOUT THE PROJECT
              </div>
              <h1 className="font-pixel text-4xl md:text-5xl mb-6">ENHANCING HEALTH AWARENESS</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Learn how our interactive experience is designed to improve health literacy through advanced AI technology.
              </p>
            </div>
            
            <div className="glass-panel rounded-lg p-8 mb-12 crt-effect">
              <h2 className="font-pixel text-2xl mb-6">PROJECT OVERVIEW</h2>
              <p className="mb-4 text-muted-foreground">
                Our project aims to transform health education through an engaging, game-like experience powered by multi-modal AI. By combining cutting-edge technology with proven educational principles, we've created an interactive platform that adapts to your learning style.
              </p>
              <p className="mb-4 text-muted-foreground">
                Whether you prefer text, voice, or image-based interactions, our system meets you where you are, providing personalized health information in an accessible format.
              </p>
              <p className="text-muted-foreground">
                The retro-inspired interface creates a familiar yet novel environment that makes learning about complex health topics both enjoyable and effective.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="font-pixel text-2xl mb-6 text-center">KEY FEATURES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background border-2 border-secondary p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <ChevronRight size={24} className="text-primary" />
                  </div>
                  <h3 className="font-pixel text-xl mb-3">Multi-Modal Interaction</h3>
                  <p className="text-muted-foreground">
                    Engage with the AI through text, voice, or image inputs based on your preference and learning style.
                  </p>
                </div>
                
                <div className="bg-background border-2 border-secondary p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <ChevronRight size={24} className="text-primary" />
                  </div>
                  <h3 className="font-pixel text-xl mb-3">Adaptive Learning</h3>
                  <p className="text-muted-foreground">
                    Our AI system adapts to your knowledge level, providing information that builds on what you already know.
                  </p>
                </div>
                
                <div className="bg-background border-2 border-secondary p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <ChevronRight size={24} className="text-primary" />
                  </div>
                  <h3 className="font-pixel text-xl mb-3">Game Mechanics</h3>
                  <p className="text-muted-foreground">
                    Interactive story choices and progress tracking create an engaging experience that makes learning feel like play.
                  </p>
                </div>
                
                <div className="bg-background border-2 border-secondary p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <ChevronRight size={24} className="text-primary" />
                  </div>
                  <h3 className="font-pixel text-xl mb-3">Evidence-Based Content</h3>
                  <p className="text-muted-foreground">
                    All health information provided is backed by current research and verified by health professionals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="retro-button animate-button-pulse">
                START YOUR JOURNEY
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
