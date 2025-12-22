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
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-2xl font-bold text-white tracking-tight hover:text-white/80 transition-colors inline-block mb-4"
            >
              <span className="text-white/60">&lt;</span>
              {personalInfo.name.split(' ')[0]}
              <span className="text-white/60">/&gt;</span>
            </a>
            <p className="text-white/50 leading-relaxed">
              {personalInfo.title} passionate about building secure, 
              high-performance web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <p className="text-white/50 mb-4">{personalInfo.location}</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/50 hover:text-white transition-colors block mb-2"
            >
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-white/50 hover:text-white transition-colors block"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm flex items-center gap-1">
            © {currentYear} {personalInfo.name}. Built with
            <Heart className="text-white/60" size={14} />
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.social.email}
              className="text-white/40 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
