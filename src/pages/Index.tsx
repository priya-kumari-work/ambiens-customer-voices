
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import ReviewForm from '@/components/ReviewForm';
import Footer from '@/components/Footer';

interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
}

const Index = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const storedReviews = localStorage.getItem('ambiens_reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem('ambiens_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleReviewSubmitted = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ReviewsSection reviews={reviews} />
        <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
