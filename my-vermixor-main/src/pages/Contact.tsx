import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Custom Website',
    'E-commerce Platform',
    'Mobile App',
    'AI/ML Solution',
    'Backend System',
    'UI/UX Design',
    'Other'
  ];

  const budgetRanges = [
    'Under $5k',
    '$5k - $15k',
    '$15k - $50k',
    '$50k+',
    'Not sure'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours with a detailed response.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss 
            how we can help bring your vision to life with measurable results.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="card-glass p-8">
              <h2 className="text-2xl font-semibold mb-6">Get a Free Project Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, requirements, target audience, and any specific features you need..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full text-lg py-4"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message & Get Quote'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 We respect your privacy and never share your information with third parties.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info - Takes 1 column */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="card-glass p-6">
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:hello@vermixor.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      vermixor@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+1-555-0123" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +92 (323) 357-2739
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office</h4>
                    <address className="text-sm text-muted-foreground not-italic">
                      Lahore, Pakistan<br />
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Call */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDaysIcon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Schedule a Call</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute discovery call to discuss your project in detail.
              </p>
              <a
                href="https://calendly.com/vermixor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center block text-sm py-3"
              >
                Book Discovery Call
              </a>
            </div>

            {/* Response Time */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-2 mb-4">
                <ClockIcon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Response Time</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email inquiries:</span>
                  <span className="font-medium">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project quotes:</span>
                  <span className="font-medium">&lt; 48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone calls:</span>
                  <span className="font-medium">Same day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & FAQ */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Hours */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
              <div className="card-glass p-6">
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    Emergency support available 24/7 for existing clients
                  </p>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Quick Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly can you start?",
                    answer: "Most projects can start within 1-2 weeks of contract signing."
                  },
                  {
                    question: "Do you work with international clients?",
                    answer: "Yes! We work with clients worldwide and can accommodate different timezones."
                  },
                  {
                    question: "What if I'm not sure about my requirements?",
                    answer: "No problem! We offer discovery sessions to help define your project scope."
                  }
                ].map((faq, index) => (
                  <div key={index} className="card-glass p-4">
                    <h4 className="font-medium mb-2 text-sm">{faq.question}</h4>
                    <p className="text-xs text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;