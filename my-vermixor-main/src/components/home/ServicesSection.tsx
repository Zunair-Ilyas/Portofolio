import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import * as HeroIcons from '@heroicons/react/24/outline';
import seedData from '../../data/seed.json';

const ServicesSection: React.FC = () => {
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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Services That <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial concept to ongoing growth, we provide comprehensive digital solutions 
            that evolve with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seedData.services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            
            return (
              <div
                key={service.id}
                className="card-glass card-hover p-8 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="h-12 w-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every business is unique. Let's discuss how we can create something 
              perfectly tailored to your needs.
            </p>
            <Link to="/contact">
              <button className="btn-hero">
                Start a Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;