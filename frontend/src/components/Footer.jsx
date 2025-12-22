import React from 'react';
import { personalInfo, navLinks } from '../data/mock';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0a1628] text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-2xl font-bold tracking-wider hover:opacity-90 transition-opacity inline-block mb-4"
            >
              <span className="text-gradient">{personalInfo.name.split(' ')[0].toUpperCase()}</span>
            </a>
            <p className="text-white/70 leading-relaxed">
              {personalInfo.title} passionate about building secure, 
              high-performance web applications.
            </p>
          </div>

          {/* Quick links */}
          <div className="animate-fade-in-up stagger-2">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-blue-300">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white/70 hover:text-white transition-colors underline-animated w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up stagger-3">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-blue-300">Get In Touch</h4>
            <p className="text-white/70 mb-2">{personalInfo.location}</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/70 hover:text-white transition-colors block mb-2 underline-animated w-fit"
            >
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-white/70 hover:text-white transition-colors block mb-4 underline-animated w-fit"
            >
              {personalInfo.phone}
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all icon-bounce"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all icon-bounce"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all icon-bounce"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            \u00a9 {currentYear} {personalInfo.name}. Built with
            <Heart className="text-red-400 animate-pulse" size={14} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
