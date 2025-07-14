'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Phone, title: 'Call Us', info: '+1 (614) 314-2092' },
    { icon: Mail, title: 'Email', info: 'info@thalasso.dev' },
    { icon: MapPin, title: 'Visit Us', info: 'Chagrin Falls, Ohio' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-beige/30 to-mint/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-charcoal mb-4">
            Start Your <span className="text-sand font-normal">Project</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Let's Build Together</h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Whether you need a mobile app, web platform, or full-stack solution, 
                we're here to help you succeed. Our team is ready to discuss your project 
                requirements and provide expert guidance.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-sage rounded-full p-3">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">{item.title}</h4>
                    <p className="text-charcoal/70">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mt-8">
              <h4 className="font-semibold text-charcoal mb-4">Our Expertise</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-charcoal/70">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sand rounded-full mr-2"></div>
                  Mobile Apps
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage rounded-full mr-2"></div>
                  Web Applications
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-mint rounded-full mr-2"></div>
                  Backend Systems
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-olive rounded-full mr-2"></div>
                  UI/UX Design
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-sage/20 focus:border-sand focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-sage/20 focus:border-sand focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-sage/20 focus:border-sand focus:outline-none transition-colors duration-200"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="web-app">Web Application</option>
                    <option value="full-stack">Full-Stack Solution</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-sage/20 focus:border-sand focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5k - $15k</option>
                    <option value="15k-30k">$15k - $30k</option>
                    <option value="30k-50k">$30k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-sage/20 focus:border-sand focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sand hover:bg-sand/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5" />
                <span>Send Project Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;