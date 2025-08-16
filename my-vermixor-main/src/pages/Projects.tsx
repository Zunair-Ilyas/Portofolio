import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import seedData from '../data/seed.json';

const Projects: React.FC = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent work and see how we've helped businesses transform 
            their digital presence with measurable results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {seedData.projects.map((project, index) => (
            <div
              key={project.id}
              className="card-glass group hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project image placeholder */}
              <div className="relative overflow-hidden rounded-t-xl aspect-video bg-gradient-hero">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-primary-foreground text-center">
                    <div className="text-3xl font-bold mb-2">{project.client}</div>
                    <div className="text-lg opacity-80">{project.category}</div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ArrowTopRightOnSquareIcon className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {project.category}
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-sm rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
                >
                  View full case study
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Process */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each project showcases our ability to solve unique challenges 
              and deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "Deployment Speed",
                value: "Within 1–2 weeks",
                description: "Most projects delivered from idea to live site quickly"
              },
              {
                metric: "Cross-Device Compatibility",
                value: "100%",
                description: "All projects tested on mobile, tablet, and desktop"
              },
              {
                metric: "Code Quality",
                value: "Clean & Maintainable",
                description: "Following industry best practices and standards"
              },
              {
                metric: "Scalability",
                value: "Built to Grow",
                description: "Every project designed with future expansion in mind"
              },
              {
                metric: "Security",
                value: "Strong Protection",
                description: "JWT auth, encrypted passwords, and secure APIs by default"
              },
              {
                metric: "Deployment Ready",
                value: "End-to-End Setup",
                description: "Projects delivered with full deployment configuration"
              }
            ].map((highlight, index) => (
              <div
                key={highlight.metric}
                className="text-center card-glass p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{highlight.value}</div>
                <div className="font-semibold mb-2">{highlight.metric}</div>
                <div className="text-sm text-muted-foreground">{highlight.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card-glass p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve 
            similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-hero">
                Start Your Project
                {/*<ArrowRightIcon className="ml-2 h-4 w-4" />*/}
              </button>
            </Link>
            <Link to="/services">
              <button className="btn-secondary">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;