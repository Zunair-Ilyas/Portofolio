import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import seedData from '../data/seed.json';

const Pricing: React.FC = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All packages include our proven process, 
            quality assurance, and post-launch support to ensure your success.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                <div className="mb-4">
                  {tier.price === 'Custom' ? (
                    <div className="text-4xl font-bold">Custom</div>
                  ) : (
                    <div className="text-4xl font-bold">
                      ${tier.price.toLocaleString()}
                      <span className="text-lg font-normal text-muted-foreground">
                        {' '}project
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{tier.duration}</div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
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
      </section>

      {/* Add-ons Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-on Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance any package with these additional services to maximize your project's impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Integration",
                price: "+$800",
                description: "Add e-commerce functionality with secure checkout, product catalog, and order tracking.",
                features: [
                  "Payment gateway setup (Stripe/PayPal/etc.)",
                  "Product catalog & categories",
                  "Cart & checkout flow",
                  "Basic inventory management"
                ]
              },
              {
                title: "AI/ML Features",
                price: "+$2,000",
                description: "Enhance your website with smart features like chatbots, recommendation engines, or analytics.",
                features: [
                  "Chatbot integration (custom or 3rd party)",
                  "Recommendation system setup",
                  "Basic AI/ML API integration",
                  "Performance optimization"
                ]
              },
              {
                title: "Advanced Analytics",
                price: "+$500",
                description: "Track performance and conversions with custom dashboards & reports.",
                features: [
                  "Google Analytics / GA4 setup",
                  "Conversion tracking (forms, sales, leads)",
                  "User behavior heatmaps",
                  "Monthly performance reports"
                ]
              },
              {
                title: "SEO Optimization",
                price: "+$400",
                description: "Boost visibility and search ranking with on-page & technical SEO.",
                features: [
                  "Keyword research & implementation",
                  "Meta tags & schema setup",
                  "Page speed improvements",
                  "SEO-friendly URLs"
                ]
              },
              {
                title: "Speed & Security Package",
                price: "+$300",
                description: "Make your website faster and more secure for better user experience.",
                features: [
                  "Caching & CDN setup",
                  "Image & code optimization",
                  "SSL setup",
                  "Basic security hardening"
                ]
              },
              {
                title: "Maintenance / Retainer Package",
                price: "$100–$200/month",
                description: "Ongoing support, updates, and improvements to keep your site fresh.",
                features: [
                  "Monthly content & design updates",
                  "Bug fixes & security patches",
                  "Performance monitoring",
                  "Priority support"
                ]
              }
            ].map((addon, index) => (
              <div
                key={addon.title}
                className="card-glass p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">{addon.title}</h3>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                <ul className="space-y-2">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pricing FAQ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our pricing and what's included in each package.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              question: "What's included in the project price?",
              answer: "Every package includes design, development, testing, deployment, and post-launch support. You’ll also receive full source code, documentation, and all project assets."
            },
            {
              question: "Do you offer payment plans?",
              answer: "Yes, we provide flexible payment schedules. Typically, it’s 50% upfront and 50% on completion, but milestone-based payments are also available for larger projects."
            },
            {
              question: "What if my project needs change?",
              answer: "Each package includes a set number of revisions. If your project scope expands, additional changes can be handled transparently with hourly or feature-based pricing."
            },
            {
              question: "How long does support last?",
              answer: "Support duration depends on the package (e.g., 14–90 days). For long-term needs, we also offer affordable monthly maintenance and retainer plans."
            },
            {
              question: "Can I upgrade my package later?",
              answer: "Absolutely. You can add features or upgrade to a higher package anytime during the project. Pricing is adjusted fairly and transparently."
            },
            {
              question: "Do you work with budgets outside these ranges?",
              answer: "Yes, we’re flexible. Let’s discuss your requirements and we’ll tailor a solution that works within your budget."
            },
            {
              question: "Who owns the final product?",
              answer: "You do. Once the project is completed and payment is settled, full ownership of the source code and deliverables is transferred to you."
            },
            {
              question: "What technologies do you use?",
              answer: "We primarily work with modern stacks like React, Node.js, SQL, Tailwind, and Figma. For custom needs, we adapt to your preferred technologies."
            },
            {
              question: "How will we communicate during the project?",
              answer: "We provide regular updates through your preferred channel (email, WhatsApp, or project management tools like Trello/Slack). Weekly progress reports are standard."
            },
            {
              question: "Do you provide ongoing updates or maintenance?",
              answer: "Yes, we offer retainer packages for monthly support, updates, and new feature development to keep your project fresh and secure."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="card-glass p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card-glass p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom proposal that fits 
            your needs and budget perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="btn-hero">
                Get Free Quote
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </Link>
            <a href="tel:+1-555-0123">
              <button className="btn-secondary">
                Call Us Now
              </button>
            </a>
          </div>
          
          {/* Trust signals */}
          <div className="mt-8 pt-8 border-t border-border/50">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;