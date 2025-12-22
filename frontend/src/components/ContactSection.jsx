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
    <section id="contact" className="py-20 bg-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173F5F] mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-[#173F5F] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#173F5F] mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                collaborations, or just having a chat about technology.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      {info.href ? (
                        <a href={info.href} className="flex items-center gap-4 group flex-1">
                          <div className="p-3 bg-[#173F5F] rounded-lg group-hover:bg-[#173F5F]/80 transition-colors">
                            <Icon className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                              {info.label}
                            </p>
                            <p className="text-[#173F5F] font-medium group-hover:text-[#173F5F]/80 transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-[#173F5F] rounded-lg">
                            <Icon className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                              {info.label}
                            </p>
                            <p className="text-[#173F5F] font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-[#173F5F] rounded-lg p-8">
              <h3 className="text-white font-bold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href={personalInfo.social.email}
                  className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
                >
                  <Mail className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-[#173F5F] mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 text-sm block mb-2 font-medium">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-gray-300 focus:border-[#173F5F] focus:ring-[#173F5F]"
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-sm block mb-2 font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="border-gray-300 focus:border-[#173F5F] focus:ring-[#173F5F]"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-600 text-sm block mb-2 font-medium">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="border-gray-300 focus:border-[#173F5F] focus:ring-[#173F5F]"
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm block mb-2 font-medium">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={5}
                  className="border-gray-300 focus:border-[#173F5F] focus:ring-[#173F5F] resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#173F5F] text-white hover:bg-[#0f2940] py-6 font-semibold transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
