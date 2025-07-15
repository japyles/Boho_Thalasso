'use client'

import React from 'react';
import { ArrowRight, Smartphone, Globe, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#f8f4f1]/80 to-[#f3e6d8]/70"></div>
      
      {/* Main Boho Beach Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          <img
            src="/images/palm_minimal_outline.svg"
            alt="Minimal Palm Outline"
            className="absolute left-0 top-1/4 w-1/3 opacity-10"
          />
          {/* <img
            src="/images/wave_line_art.svg"
            alt="Wave Line Art"
            className="absolute left-80 bottom-32 w-[600px] opacity-20 transform scale-125"
          /> */}
          <img
            src="/images/mandala_sun.svg"
            alt="Mandala Sun"
            className="absolute top-1 right-1 transform -translate-x-1/2 w-1/2 opacity-8 animate-pulse"
          />
          <img
            src="/images/palm_minimal_outline.svg"
            alt="Minimal Palm Outline"
            className="absolute right-0 top-1/4 w-1/3 opacity-10"
          />
        </div>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-sand/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-sage/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-mint/20 rounded-full blur-lg animate-bounce delay-500"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex justify-center space-x-4">
        {/* <img
          src="/hammerhead_outline-nobg.png"
          alt="Hammerhead Background"
          className="w-[51%] h-[51%] object-contain animate-flicker"
        /> */}
      </div>
        {/* <div className="mb-8 flex justify-center space-x-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Smartphone className="h-8 w-8 text-sand" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Globe className="h-8 w-8 text-sage" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <Database className="h-8 w-8 text-olive" />
          </div>
        </div> */}

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-charcoal mb-6 leading-tight">
          Custom <span className="text-sand font-normal">Web</span> &
          <br />
          <span className="text-sage font-normal">Mobile</span> Development
        </h1>

        <p className="text-lg sm:text-xl text-charcoal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          We craft beautiful, scalable applications using modern technologies like Expo Router, 
          Supabase, and universal styling. From concept to deployment, we bring your digital vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-sand hover:bg-sand/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300">
            View Our Work
          </button>
        </div>

        {/* Tech Stack Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300">
            <div className="text-sm font-semibold text-charcoal">React.js / Next.js</div>
            <div className="text-xs text-charcoal/60">Mobile First</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300">
            <div className="text-sm font-semibold text-charcoal">Supabase / PostgeSQL</div>
            <div className="text-xs text-charcoal/60">Backend</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300">
            <div className="text-sm font-semibold text-charcoal">Tailwind / NativeWind</div>
            <div className="text-xs text-charcoal/60">Universal CSS</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300">
            <div className="text-sm font-semibold text-charcoal">TypeScript</div>
            <div className="text-xs text-charcoal/60">Type Safe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;