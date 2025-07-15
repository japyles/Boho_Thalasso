import React from 'react';
import { Code2, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' }
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'Backend & Database',
    'UI/UX Design',
    'Consulting'
  ];

  const technologies = [
    'Expo SDK 53',
    'React Native',
    'Supabase',
    'NativeWind',
    'TypeScript'
  ];

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            <a href="/" className="flex items-center space-x-2">
                {/* <Waves className="h-8 w-8 text-calm-seas animate-wave" /> */}
                <img src='/thalasso_logo_02_small_nobg.png' alt='Thalasso Logo' width={30} height={30} className="object-contain" />
                <img src="/thalasso_logo_nobg_gmysie.png" alt="Thalasso Name" width={150} height={100} className="object-contain" />
                {/* <span className="text-2xl font-bold bg-ocean-gradient bg-clip-text text-transparent">Thalasso</span> */}
              </a>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              We craft beautiful, scalable applications using modern technologies. 
              From mobile apps to web platforms, we bring your digital vision to life 
              with expert development and thoughtful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 hover:bg-sand hover:scale-110 transition-all duration-300 rounded-full p-2"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-sand transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-white/70">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <a href="#tech" className="hover:text-sand transition-colors">
                    {tech}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60">
          <p>&copy; 2025 Thalasso.dev. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sand transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-sand transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;