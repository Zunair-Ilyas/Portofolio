import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import seedData from '../../data/seed.json';

const ReviewsSection: React.FC = () => {
  const featuredReviews = seedData.reviews.filter(review => review.featured && review.status !== 'pending');
  const [currentReview, setCurrentReview] = useState(0);

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % featuredReviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredReviews.length]);

  // Calculate aggregate rating
  const allApprovedReviews = seedData.reviews.filter(review => review.status !== 'pending');
  const avgRating = allApprovedReviews.reduce((sum, review) => sum + review.rating, 0) / allApprovedReviews.length;
  const totalReviews = allApprovedReviews.length;

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our clients say about 
            working with Vermixor.
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-muted/30 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(avgRating) ? 'text-primary' : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-lg">{avgRating.toFixed(1)}/5</span>
            <span className="text-muted-foreground">({totalReviews} reviews)</span>
          </div>
        </div>

        {/* Featured review carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="card-glass p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Quote */}
            <div className="relative z-10">
              <div className="text-6xl text-primary/20 mb-4">"</div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                {featuredReviews[currentReview]?.text}
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < featuredReviews[currentReview]?.rating ? 'text-primary' : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="space-y-2">
                <div className="font-semibold text-lg">
                  {featuredReviews[currentReview]?.name}
                </div>
                <div className="text-muted-foreground">
                  {featuredReviews[currentReview]?.role} at {featuredReviews[currentReview]?.company}
                </div>
                {featuredReviews[currentReview]?.verified && (
                  <div className="inline-flex items-center gap-1 text-sm text-primary">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Client
                  </div>
                )}
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          </div>

          {/* Navigation */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-background shadow-medium hover:shadow-large transition-shadow"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-background shadow-medium hover:shadow-large transition-shadow"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allApprovedReviews.slice(0, 3).map((review, index) => (
            <div
              key={review.id}
              className="card-glass p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'text-primary' : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/reviews">
            <button className="btn-secondary">
              View All Reviews
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;