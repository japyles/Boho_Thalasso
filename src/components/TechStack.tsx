import React from 'react';
import { Code2, Smartphone, Database, Palette, Zap, Shield } from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = [
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'sand',
      techs: [
        { name: 'Expo SDK 53', desc: 'Latest Expo framework for cross-platform development' },
        { name: 'Expo Router', desc: 'File-based routing for React Native applications' },
        { name: 'React Native', desc: 'Native mobile app development with React' },
        { name: 'TypeScript', desc: 'Type-safe development for better code quality' }
      ]
    },
    {
      category: 'Web Development',
      icon: Code2,
      color: 'sage',
      techs: [
        { name: 'React', desc: 'Modern component-based UI library' },
        { name: 'Next.js', desc: 'Full-stack React framework with SSR/SSG' },
        { name: 'Vite', desc: 'Lightning-fast build tool and dev server' },
        { name: 'TypeScript', desc: 'Enhanced JavaScript with static typing' }
      ]
    },
    {
      category: 'Backend & Database',
      icon: Database,
      color: 'mint',
      techs: [
        { name: 'Supabase', desc: 'Open-source Firebase alternative with PostgreSQL' },
        { name: 'PostgreSQL', desc: 'Powerful, open-source relational database' },
        { name: 'Edge Functions', desc: 'Serverless functions at the edge' },
        { name: 'Real-time APIs', desc: 'Live data synchronization across clients' }
      ]
    },
    {
      category: 'Styling & Design',
      icon: Palette,
      color: 'beige',
      techs: [
        { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for web' },
        { name: 'NativeWind', desc: 'Tailwind CSS for React Native applications' },
        { name: 'Figma', desc: 'Collaborative design and prototyping tool' },
        { name: 'Framer Motion', desc: 'Production-ready motion library for React' }
      ]
    },
    {
      category: 'Performance & SEO',
      icon: Zap,
      color: 'olive',
      techs: [
        { name: 'Core Web Vitals', desc: 'Optimized for Google\'s performance metrics' },
        { name: 'Image Optimization', desc: 'Automatic image compression and formats' },
        { name: 'Code Splitting', desc: 'Lazy loading for optimal bundle sizes' },
        { name: 'PWA Features', desc: 'Progressive Web App capabilities' }
      ]
    },
    {
      category: 'DevOps & Security',
      icon: Shield,
      color: 'sand',
      techs: [
        { name: 'Vercel', desc: 'Seamless deployment and hosting platform' },
        { name: 'GitHub Actions', desc: 'Automated CI/CD workflows' },
        { name: 'ESLint & Prettier', desc: 'Code quality and formatting tools' },
        { name: 'Security Headers', desc: 'Enhanced security configurations' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      mint: 'bg-mint text-charcoal',
      sage: 'bg-sage text-white',
      sand: 'bg-sand text-white',
      beige: 'bg-beige text-charcoal',
      olive: 'bg-olive text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-mint text-charcoal';
  };

  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-mint/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-charcoal mb-4">
            Our <span className="text-sand font-normal">Tech Stack</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable, performant, and maintainable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl ${getColorClasses(category.color)} flex items-center justify-center mb-6`}>
                <category.icon size={20} />
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="border-l-2 border-gray-100 pl-4">
                    <h4 className="font-medium text-charcoal text-sm">{tech.name}</h4>
                    <p className="text-charcoal/60 text-xs mt-1">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Universal Development Highlight */}
        <div className="mt-16 bg-gradient-to-r from-sage/10 to-mint/10 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">
              Universal Development Approach
            </h3>
            <p className="text-charcoal/70 mb-8 max-w-3xl mx-auto">
              Our expertise in Expo Router and NativeWind allows us to create applications that share code 
              between web and mobile platforms, reducing development time while maintaining native performance 
              and user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold text-sand mb-2">70%</div>
                <div className="text-sm text-charcoal/70">Code Reusability</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold text-sage mb-2">50%</div>
                <div className="text-sm text-charcoal/70">Faster Development</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold text-olive mb-2">100%</div>
                <div className="text-sm text-charcoal/70">Native Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;