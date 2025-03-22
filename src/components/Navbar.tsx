
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <span className="font-pixel text-xl tracking-wider ml-2">HEALTH.AI</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({isActive}) => `nav-link ${isActive ? 'text-foreground after:scale-x-100' : ''}`}
              >
                HOME
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => `nav-link ${isActive ? 'text-foreground after:scale-x-100' : ''}`}
              >
                ABOUT
              </NavLink>
              <button className="retro-button text-sm px-4 py-2">
                START GAME
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="glass-panel px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
          <NavLink
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </NavLink>
          <button 
            className="w-full retro-button mt-3 text-sm"
            onClick={() => setIsOpen(false)}
          >
            START GAME
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
