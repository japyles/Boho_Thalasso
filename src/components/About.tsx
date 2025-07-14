import React from 'react';
import { Users, Award, Code, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, value: '100+', label: 'Projects Delivered' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Rocket, value: '99%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of the curve, adopting the latest technologies and best practices to deliver cutting-edge solutions.',
      color: 'sand'
    },
    {
      title: 'Quality Focused',
      description: 'Every line of code is crafted with precision, ensuring robust, scalable, and maintainable applications.',
      color: 'sage'
    },
    {
      title: 'Client Partnership',
      description: 'We work closely with our clients, treating their success as our own and building long-term relationships.',
      color: 'mint'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      mint: 'bg-mint text-charcoal',
      sage: 'bg-sage text-white',
      sand: 'bg-sand text-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-mint text-charcoal';
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-light text-charcoal mb-6">
              Building the <span className="text-sand font-normal">Future</span> of Digital
            </h2>
            
            <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
              At Thalasso.dev, we're passionate about creating exceptional digital experiences. 
              Our team specializes in modern web and mobile development, leveraging the power 
              of Expo, Supabase, and universal styling to build applications that work seamlessly 
              across all platforms.
            </p>
            
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              We believe in the power of clean code, thoughtful design, and innovative solutions. 
              Whether you're a startup looking to build your first app or an enterprise seeking 
              to modernize your digital presence, we're here to turn your vision into reality.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-3 h-3 rounded-full ${getColorClasses(value.color)} mt-2 flex-shrink-0`}></div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{value.title}</h4>
                    <p className="text-charcoal/60 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-mint/20 to-sage/20 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Why Choose Thalasso.dev?</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We combine technical expertise with creative vision to deliver solutions that 
                  not only meet your requirements but exceed your expectations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300">
                    <div className="bg-sand/20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="h-5 w-5 text-sand" />
                    </div>
                    <div className="text-xl font-bold text-charcoal">{stat.value}</div>
                    <div className="text-xs text-charcoal/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-sand/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sage/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-light text-charcoal mb-4">
            Meet Our <span className="text-sage font-normal">Team</span>
          </h3>
          <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
            A dedicated team of developers, designers, and strategists committed to bringing your ideas to life.
          </p>
          
          <div className="bg-gradient-to-r from-beige/30 to-mint/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sand rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-charcoal">Full-Stack Developers</h4>
                <p className="text-charcoal/60 text-sm">Expert in modern web and mobile technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-charcoal">UX/UI Designers</h4>
                <p className="text-charcoal/60 text-sm">Creating intuitive and beautiful user experiences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-olive rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-charcoal">Project Managers</h4>
                <p className="text-charcoal/60 text-sm">Ensuring smooth delivery and communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;