import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';

const EcommerceService: React.FC = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            E-commerce <span className="text-gradient">Platforms</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scalable online stores with seamless shopping experiences that drive sales and customer loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-hero">
                Start Your Store
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </Link>
            <Link to="/projects">
              <button className="btn-outline">
                See Success Stories
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">E-commerce Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Payment Integration",
                description: "Secure payment processing with multiple gateways"
              },
              {
                title: "Inventory Management",
                description: "Real-time stock tracking and automated alerts"
              },
              {
                title: "Mobile Commerce",
                description: "Optimized mobile shopping experience"
              },
              {
                title: "Analytics Dashboard",
                description: "Detailed sales and customer insights"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card-glass p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <CheckIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Strategy", description: "Define your e-commerce goals and target market" },
            { step: "2", title: "Design", description: "Create conversion-focused store design" },
            { step: "3", title: "Build", description: "Develop with secure payment integration" },
            { step: "4", title: "Launch", description: "Go live with ongoing support and optimization" }
          ].map((step, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-16 w-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Sales?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's build an e-commerce platform that converts visitors into customers.
          </p>
          <Link to="/contact">
            <button className="btn-hero">
              Start Your E-commerce Project
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcommerceService;