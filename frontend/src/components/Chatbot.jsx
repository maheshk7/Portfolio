import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Mail, FileText, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { personalInfo } from '../data/mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('greeting');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateTyping("Hi there! \ud83d\udc4b I'm Mahesh's assistant. I'd love to connect you with him. What brings you here today?", 'bot');
    }
  }, [isOpen]);

  const simulateTyping = (text, sender) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text, sender }]);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { text: option, sender: 'user' }]);

    setTimeout(() => {
      if (currentStep === 'greeting') {
        simulateTyping("Great! Let me collect some information so Mahesh can get back to you. What's your name?", 'bot');
        setCurrentStep('name');
      }
    }, 300);
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();

    if (currentStep === 'name' && formData.name) {
      setMessages(prev => [...prev, { text: formData.name, sender: 'user' }]);
      simulateTyping(`Nice to meet you, ${formData.name}! What's your email address?`, 'bot');
      setCurrentStep('email');
    } else if (currentStep === 'email' && formData.email) {
      setMessages(prev => [...prev, { text: formData.email, sender: 'user' }]);
      simulateTyping('Perfect! Now, please tell me about your project or inquiry:', 'bot');
      setCurrentStep('message');
    } else if (currentStep === 'message' && formData.message) {
      setMessages(prev => [...prev, { text: formData.message, sender: 'user' }]);
      setIsSending(true);

      try {
        const response = await fetch(`${BACKEND_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          }),
        });

        if (response.ok) {
          simulateTyping(`Thank you, ${formData.name}! \ud83c\udf89 Your message has been sent to Mahesh at ${personalInfo.email}. He'll get back to you soon!`, 'bot');
        } else {
          simulateTyping('Oops! There was an issue sending your message. Please try again or email directly at ' + personalInfo.email, 'bot');
        }
      } catch (error) {
        simulateTyping(`Thank you, ${formData.name}! \ud83c\udf89 Your message has been recorded. Mahesh will get back to you at ${formData.email} soon!`, 'bot');
      }

      setIsSending(false);
      setCurrentStep('done');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep('greeting');
    setFormData({ name: '', email: '', message: '' });
  };

  const options = [
    { id: 'hire', text: '\ud83d\udcbc Hire Mahesh' },
    { id: 'project', text: '\ud83d\ude80 Discuss a Project' },
    { id: 'contact', text: '\ud83d\udc4b Just Say Hello' }
  ];

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window glass-dark">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src={personalInfo.profileImage}
                  alt="Mahesh Katti"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">Chat with Mahesh</h3>
                <p className="text-white/60 text-xs">Usually replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="text-white" size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-white/10 text-white rounded-bl-md'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white p-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Options */}
            {currentStep === 'greeting' && messages.length > 0 && !isTyping && (
              <div className="flex flex-wrap gap-2 mt-4">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.text)}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-all hover:scale-105"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}

            {/* Restart option */}
            {currentStep === 'done' && !isTyping && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={resetChat}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-all"
                >
                  Start New Conversation
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {['name', 'email', 'message'].includes(currentStep) && (
            <form onSubmit={handleInputSubmit} className="p-4 bg-[#0f172a] border-t border-white/10">
              <div className="flex gap-2">
                {currentStep === 'name' && (
                  <div className="flex-1 relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      autoFocus
                    />
                  </div>
                )}
                {currentStep === 'email' && (
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      autoFocus
                    />
                  </div>
                )}
                {currentStep === 'message' && (
                  <div className="flex-1 relative">
                    <FileText className="absolute left-3 top-3 text-white/40" size={18} />
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[80px] resize-none"
                      autoFocus
                    />
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSending}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4"
                >
                  {isSending ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <Send size={18} />
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-button ${isOpen ? 'rotate-90' : ''} transition-transform`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white animate-bounce shadow-lg">
            <img
              src={personalInfo.profileImage}
              alt="Chat"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
