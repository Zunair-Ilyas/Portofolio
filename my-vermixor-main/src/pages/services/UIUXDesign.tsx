import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';

const UIUXDesignService: React.FC = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            UI/UX <span className="text-gradient">Design</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Beautiful, intuitive designs that create exceptional user experiences and drive engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-hero">
                Start Design Project
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </Link>
            <Link to="/projects">
              <button className="btn-outline">
                View Design Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "User Research",
                description: "Deep understanding of your users' needs"
              },
              {
                title: "Wireframing",
                description: "Structured layouts and user flows"
              },
              {
                title: "Visual Design",
                description: "Beautiful interfaces and brand consistency"
              },
              {
                title: "Prototyping",
                description: "Interactive prototypes for testing"
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
        <h2 className="text-3xl font-bold text-center mb-12">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Research", description: "User research and competitive analysis" },
            { step: "2", title: "Ideate", description: "Concept development and wireframing" },
            { step: "3", title: "Design", description: "Visual design and brand integration" },
            { step: "4", title: "Test", description: "User testing and design refinement" }
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
          <h2 className="text-3xl font-bold mb-4">Ready for Great Design?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's create designs that your users will love and remember.
          </p>
          <Link to="/contact">
            <button className="btn-hero">
              Start Your Design Project
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignService;