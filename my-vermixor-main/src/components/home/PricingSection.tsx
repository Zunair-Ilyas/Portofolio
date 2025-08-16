import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import seedData from '../../data/seed.json';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All packages include our proven process, 
            quality assurance, and post-launch support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {seedData.pricing.map((tier, index) => (
            <div
              key={tier.tier}
              className={`card-glass p-8 relative animate-fade-in ${
                tier.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-hero px-6 py-2 rounded-full text-primary-foreground text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                <div className="mb-4">
                  {tier.price === 'Custom' ? (
                    <div className="text-3xl font-bold">Custom</div>
                  ) : (
                    <div className="text-3xl font-bold">
                      ${tier.price.toLocaleString()}
                      <span className="text-base font-normal text-muted-foreground">
                        {' '}project
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{tier.duration}</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/contact" className="block w-full">
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'btn-hero'
                      : 'btn-secondary'
                  }`}
                >
                  {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Need something different?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer flexible payment plans, custom packages, and retainer agreements 
              for ongoing partnerships. Let's discuss what works best for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-hero">
                  Schedule a Call
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <Link to="/pricing">
                <button className="btn-secondary">
                  View Detailed Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-primary" />
              No hidden fees
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-primary" />
              Fixed price guarantee
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-primary" />
              Satisfaction guarantee
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-primary" />
              Post-launch support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;