import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/mock';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-dark shadow-lg shadow-blue-500/10'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-bold text-white tracking-wider hover:opacity-90 transition-all hover:scale-105 underline-animated"
          >
            <span className="text-gradient">{personalInfo.name.split(' ')[0].toUpperCase()}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 text-sm text-white/80 hover:text-white transition-all font-medium underline-animated stagger-${index + 1}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={onOpenChat}
              className="px-6 py-2 rounded-full text-sm font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/50 hover:bg-blue-500/20 transition-all hover:scale-105"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-dark border-t border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-white/80 hover:text-white transition-all py-2 font-medium animate-fade-in-left stagger-${index + 1}`}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenChat();
            }}
            className="mt-4 rounded-full font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/50 hover:bg-blue-500/20 transition-all"
          >
            Hire Me
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
