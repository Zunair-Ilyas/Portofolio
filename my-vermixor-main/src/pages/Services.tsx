import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import * as HeroIcons from '@heroicons/react/24/outline';
import seedData from '../data/seed.json';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'globe': HeroIcons.GlobeAltIcon,
      'shopping-cart': HeroIcons.ShoppingCartIcon,
      'device-phone-mobile': HeroIcons.DevicePhoneMobileIcon,
      'cpu-chip': HeroIcons.CpuChipIcon,
      'server': HeroIcons.ServerIcon,
      'paint-brush': HeroIcons.PaintBrushIcon,
    };
    
    return iconMap[iconName] || HeroIcons.CubeIcon;
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch and beyond, we provide comprehensive digital solutions 
            that drive growth and deliver exceptional user experiences.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {seedData.services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            
            return (
              <div
                key={service.id}
                className="card-glass p-8 group hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="h-14 w-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-7 w-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
                >
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project follows our proven methodology designed to deliver 
              exceptional results efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seedData.process.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6 shadow-medium">
                  <span className="text-xl font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use modern, proven technologies to build scalable, secure, 
            and performant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              category: "Frontend",
              technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
            },
            {
              category: "Backend",
              technologies: ["Node.js", "Express.js", "Python (Django/FastAPI)", "PostgreSQL", "MongoDB", "Redis"]
            },
            {
              category: "Infrastructure",
              technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare", "NGINX"]
            },
            {
              category: "Mobile",
              technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"]
            },
            {
              category: "AI/ML",
              technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI API", "Pandas", "NumPy"]
            },
            {
              category: "Design & UI/UX",
              technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Canva"]
            }
          ].map((stack, index) => (
            <div
              key={stack.category}
              className="card-glass p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">{stack.category}</h3>
              <div className="space-y-2">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives 
            real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-hero">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </Link>
            <Link to="/pricing">
              <button className="border-2 border-secondary-foreground text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary-foreground hover:text-secondary transition-all duration-300">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;