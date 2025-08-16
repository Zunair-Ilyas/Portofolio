import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              We craft{' '}
              <span className="text-gradient">digital products</span>{' '}
              that grow your business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl lg:max-w-none">
              Design-forward web & mobile experiences, robust backends, and AI solutions 
              that deliver measurable growth for ambitious businesses.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button className="btn-hero group">
                  Get a Quote
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button className="btn-secondary">
                  View Projects
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
                <div className="text-sm font-medium">Technoverse</div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="text-sm font-medium">ACM Student Chapter CUI</div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="text-sm font-medium">Lthr.pk</div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="text-sm font-medium">Meet</div>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main card */}
              <div className="card-glass p-8 max-w-sm w-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Performance First</h3>
                  <p className="text-sm text-muted-foreground">
                    Lightning-fast websites that convert 3x better than industry average.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 bg-primary rounded-full w-full" />
                    <span className="text-xs font-medium">95/100</span>
                  </div>
                </div>
              </div>

              {/* Secondary card */}
              <div className="card-glass p-6 absolute -bottom-4 -right-4 w-48 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">42%</span>
                    </div>
                    <span className="text-sm font-medium">Conversion Boost</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Average improvement across all projects</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 left-8 h-16 w-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-8 left-12 h-12 w-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;