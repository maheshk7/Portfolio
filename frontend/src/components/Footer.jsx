import React from 'react';
import { personalInfo, navLinks } from '../data/mock';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#173F5F] text-white py-12">
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
              className="text-2xl font-bold tracking-wider hover:opacity-90 transition-opacity inline-block mb-4"
            >
              {personalInfo.name.split(' ')[0].toUpperCase()}
            </a>
            <p className="text-white/70 leading-relaxed">
              {personalInfo.title} passionate about building secure, 
              high-performance web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
            <p className="text-white/70 mb-2">{personalInfo.location}</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/70 hover:text-white transition-colors block mb-2"
            >
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-white/70 hover:text-white transition-colors block mb-4"
            >
              {personalInfo.phone}
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
