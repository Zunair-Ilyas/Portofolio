import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import seedData from '../../data/seed.json';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven process ensures every project delivers exceptional results, 
            on time and within budget.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seedData.process.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step indicator */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6 shadow-glow">
                  <span className="text-xl font-bold text-primary-foreground">
                    {step.step}
                  </span>
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Visual enhancement for larger screens */}
                {index < seedData.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process benefits */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits list */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Why Our Process Works</h3>
            
            {[
              "Clear communication at every step",
              "Regular updates and milestone reviews",
              "Collaborative approach with your team",
              "Quality assurance throughout development",
              "Post-launch support and optimization"
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="card-glass p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Project Kickoff</span>
                  <span className="text-xs text-muted-foreground ml-auto">Day 1</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary/60 rounded-full" />
                  <span className="text-sm">Design Phase</span>
                  <span className="text-xs text-muted-foreground ml-auto">Week 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary/40 rounded-full" />
                  <span className="text-sm">Development</span>
                  <span className="text-xs text-muted-foreground ml-auto">Week 4</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary/20 rounded-full" />
                  <span className="text-sm">Testing & Launch</span>
                  <span className="text-xs text-muted-foreground ml-auto">Week 8</span>
                </div>
              </div>
            </div>
            
            {/* Floating timeline indicator */}
            <div className="absolute -top-4 -right-4 card-glass p-3 animate-float">
              <div className="text-xs font-medium text-center">
                <div className="text-primary">85%</div>
                <div className="text-muted-foreground">Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;