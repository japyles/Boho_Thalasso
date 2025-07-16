import React from 'react';
import {
  DevicePhoneMobileIcon as Smartphone,
  GlobeAltIcon as Globe,
  CircleStackIcon as Database,
  SwatchIcon as Palette,
  BoltIcon as Zap,
  ShieldCheckIcon as Shield
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps built with Expo SDK 53 and Expo Router for seamless navigation and performance.',
      features: ['Cross-platform compatibility', 'Native performance', 'App Store deployment'],
      color: 'sand'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications using React, Next.js, and cutting-edge web technologies.',
      features: ['Responsive design', 'SEO optimized', 'Progressive Web Apps'],
      color: 'sage'
    },
    {
      icon: Database,
      title: 'Backend & Database',
      description: 'Scalable backend solutions with Supabase, including real-time features and secure authentication.',
      features: ['Real-time updates', 'Secure authentication', 'Scalable architecture'],
      color: 'mint'
    },
    {
      icon: Palette,
      title: 'Universal Design',
      description: 'Consistent design systems using Tailwind CSS and NativeWind for web and mobile platforms.',
      features: ['Design systems', 'Brand consistency', 'Accessibility focused'],
      color: 'beige'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for performance, SEO, and user experience.',
      features: ['Speed optimization', 'Core Web Vitals', 'Bundle optimization'],
      color: 'olive'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Secure applications with ongoing maintenance, updates, and monitoring services.',
      features: ['Security audits', 'Regular updates', '24/7 monitoring'],
      color: 'sand'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      mint: 'bg-mint text-charcoal border-mint/20',
      sage: 'bg-sage text-white border-sage/20',
      sand: 'bg-sand text-white border-sand/20',
      beige: 'bg-beige text-charcoal border-beige/20',
      olive: 'bg-olive text-white border-olive/20'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-mint text-charcoal border-mint/20';
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-mint/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-charcoal mb-4">
            Our <span className="text-sand font-normal">Services</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            From mobile apps to web platforms, we deliver custom solutions that scale with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              
              <p className="text-charcoal/70 leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-charcoal/60">
                    <div className="w-1.5 h-1.5 bg-sand rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-charcoal mb-4">
              Our <span className="text-sage font-normal">Process</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Creating intuitive user experiences' },
              { step: '03', title: 'Development', desc: 'Building with modern technologies' },
              { step: '04', title: 'Launch', desc: 'Deploying and ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-sage/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sage">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h4>
                <p className="text-charcoal/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;