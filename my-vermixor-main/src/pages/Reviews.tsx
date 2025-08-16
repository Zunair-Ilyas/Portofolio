import React, { useState } from 'react';
import { StarIcon, FunnelIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import seedData from '../data/seed.json';

const Reviews: React.FC = () => {
  const { toast } = useToast();
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [filterService, setFilterService] = useState('all');
  const [filterRating, setFilterRating] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    rating: 5,
    service: '',
    review: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter reviews
  const allReviews = seedData.reviews.filter(review => review.status !== 'pending');
  const filteredReviews = allReviews.filter(review => {
    const serviceMatch = filterService === 'all' || review.service === filterService;
    const ratingMatch = filterRating === 'all' || review.rating >= parseInt(filterRating);
    return serviceMatch && ratingMatch;
  });

  // Calculate aggregate rating
  const avgRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => 
    allReviews.filter(review => review.rating === rating).length
  );

  const services = ['websites', 'ecommerce', 'apps', 'ai-ml', 'databases', 'ui-ux'];

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please consent to publishing your review.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Review submitted successfully!",
        description: "Your review is pending moderation and will appear shortly.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        rating: 5,
        service: '',
        review: '',
        consent: false
      });
      setShowSubmissionForm(false);
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              name === 'rating' ? parseInt(value) : value
    }));
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Reviews</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from real clients. See what businesses are saying about 
            their experience working with Vermixor.
          </p>
        </div>

        {/* Aggregate Rating */}
        <div className="max-w-4xl mx-auto">
          <div className="card-glass p-8 text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-6xl font-bold text-primary">{avgRating.toFixed(1)}</div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-8 w-8 ${
                        i < Math.floor(avgRating) ? 'text-primary' : 'text-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-muted-foreground">Based on {allReviews.length} reviews</div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="max-w-md mx-auto space-y-2">
              {ratingDistribution.map((count, index) => {
                const rating = 5 - index;
                const percentage = allReviews.length > 0 ? (count / allReviews.length) * 100 : 0;
                
                return (
                  <div key={rating} className="flex items-center gap-3 text-sm">
                    <span className="w-8 text-muted-foreground">{rating} ★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-muted-foreground text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowSubmissionForm(true)}
              className="btn-hero"
            >
              Leave a Review
            </Button>
            <Button variant="outline" className="btn-secondary">
              <FunnelIcon className="h-4 w-4 mr-2" />
              Filter Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Services</option>
            {services.map(service => (
              <option key={service} value={service}>
                {service.replace('-', '/').toUpperCase()}
              </option>
            ))}
          </select>

          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </select>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <div
              key={review.id}
              className="card-glass p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-primary' : 'text-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                {review.verified && (
                  <div className="inline-flex items-center gap-1 text-xs text-primary">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {review.role} at {review.company}
                  </div>
                </div>
              </div>

              {/* Service Badge */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {review.service.replace('-', '/').toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">No reviews match your current filters.</div>
          </div>
        )}
      </section>

      {/* Review Submission Form Modal */}
      {showSubmissionForm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="card-glass p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Leave a Review</h2>
              <button
                onClick={() => setShowSubmissionForm(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Role *
                  </label>
                  <Input
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Your role/title"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service
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
                      <option key={service} value={service}>
                        {service.replace('-', '/').toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        {star <= formData.rating ? (
                          <StarIcon className="h-6 w-6 text-primary" />
                        ) : (
                          <StarOutlineIcon className="h-6 w-6 text-muted-foreground" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="review" className="block text-sm font-medium mb-2">
                  Review *
                </label>
                <Textarea
                  id="review"
                  name="review"
                  required
                  value={formData.review}
                  onChange={handleChange}
                  placeholder="Share your experience working with Vermixor..."
                  rows={4}
                />
                <div className="text-xs text-muted-foreground mt-1">
                  Minimum 20 characters required
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I consent to publishing this review and Vermixor using my company name 
                  and testimonial for marketing purposes. *
                </label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero flex-1"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowSubmissionForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;