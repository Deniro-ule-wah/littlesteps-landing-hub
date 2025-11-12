import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Tagline */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/trackmykid-logo.jpg" 
              alt="TrackMyKid - Littlesteps in Motion" 
              className="h-12 w-auto object-contain"
            />
            <div className="h-8 w-px bg-border mx-2 hidden sm:block" />
            <div className="flex flex-col items-center hidden sm:flex">
              <span className="text-xs font-semibold text-trust-blue">Powered by</span>
              <span className="text-sm font-heading font-bold text-mustard">Jendie Automobiles</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button 
              variant="trustButton" 
              size="default"
              onClick={() => window.location.href = 'https://trackmykid-webapp.vercel.app/'}
              aria-label="Login to Portal"
              className="transition-all hover:scale-105"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant="trustButton" 
              size="default" 
              className="w-full transition-all hover:scale-105"
              onClick={() => {
                setIsOpen(false);
                window.location.href = 'https://trackmykid-webapp.vercel.app/';
              }}
              aria-label="Login to Portal"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
