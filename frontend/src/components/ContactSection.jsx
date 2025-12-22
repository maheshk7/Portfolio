import React, { useState } from 'react';
import { personalInfo } from '../data/mock';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission - stores in localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's work together
            <br />
            <span className="text-white/60">& build something great</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <p className="text-white/60 text-lg leading-relaxed">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about technology.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    {info.href ? (
                      <a href={info.href} className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                          <Icon className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          <p className="text-white font-medium group-hover:text-white/80 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl">
                          <Icon className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="pt-8">
              <p className="text-white/40 text-sm uppercase tracking-wider mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <Github className="text-white/60 group-hover:text-white transition-colors" size={24} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <Linkedin className="text-white/60 group-hover:text-white transition-colors" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-white font-semibold text-xl mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-sm block mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-sm block mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-sm block mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm block mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-white/90 py-6 rounded-xl font-medium transition-all hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
