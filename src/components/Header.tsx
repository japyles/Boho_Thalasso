'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon as Menu, XMarkIcon as X, CodeBracketIcon as Code2 } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 20);
      }
    };
    
    if (typeof window !== 'undefined') {
      handleScroll(); // Initial check
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="rounded-lg p-2">
              {/* <Code2 className="h-6 w-6 text-white" /> */}
              <Link
                href="/" className="flex items-center space-x-2">
                {/* <Waves className="h-8 w-8 text-calm-seas animate-wave" /> */}
                <img src='/ThalassoLogo_SansThalasso2.png' alt='Thalasso Logo' width={30} height={30} className="object-contain" />
                <img src="/thalasso_logo_nobg_gmysie.png" alt="Thalasso Name" width={150} height={100} className="object-contain" />
                {/* <span className="text-2xl font-bold bg-ocean-gradient bg-clip-text text-transparent">Thalasso</span> */}
              </Link>
            </div>
            {/* <span className="text-xl font-semibold text-charcoal">Thalasso.dev</span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-sand transition-colors duration-200 font-medium"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-sand hover:bg-sand/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal hover:text-sand transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-charcoal hover:text-sand hover:bg-beige/30 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="#contact"
                className="block bg-sand hover:bg-sand/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 text-center"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                Start Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;