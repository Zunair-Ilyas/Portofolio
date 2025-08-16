import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import seedData from '../data/seed.json';

const About: React.FC = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Vermixor</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of digital craftspeople passionate about building products 
            that make a real difference for businesses and their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At VermiXor, our mission is to empower businesses with digital solutions
              that are not only functional but transformative. We believe every brand
              deserves a strong online presence, and we work to create websites, applications,
              and digital platforms that reflect authenticity, innovation, and growth.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We strive to bridge the gap between creativity and technology, turning complex ideas
              into seamless digital experiences. By focusing on long-term value rather than short-term fixes,
              we aim to deliver solutions that evolve with businesses, helping them stay ahead in an ever-changing digital landscape.
            </p>

            <div className="space-y-4">
              {[
                "Provide solutions tailored to unique goals",
                "Embrace agility to adapt to changing needs",
                "Communicate openly and honestly throughout projects",
                "Deliver consistent quality that earns trust",
                "Nurture long-term collaborations and client success",
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-glass p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years in Business</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse group of designers, developers, and strategists united by 
            our passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seedData.team.map((member, index) => (
            <div
              key={member.name}
              className="card-glass p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Avatar placeholder */}
              <div className="h-24 w-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="text-primary font-medium mb-3">{member.role}</div>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from initial consultation 
              to long-term partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on quality. Every line of code, every design element is crafted with care."
              },
              {
                title: "Transparent Process",
                description: "No surprises. We keep you informed every step of the way with clear communication."
              },
              {
                title: "User-Centered",
                description: "Your users are at the heart of everything we design and build."
              },
              {
                title: "Results Driven",
                description: "We measure success by the impact we create for your business and users."
              }
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-16 w-16 bg-gradient-hero rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <div className="h-8 w-8 bg-primary-foreground rounded-lg" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card-glass p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our team can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-hero">
              Start a Project
            </a>
            <a href="/projects" className="btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;