
import React from 'react';
import { Quote } from 'lucide-react';
import ReviewCard from './ReviewCard';

interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
          Customer Testimonials
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
      </div>
      
      {reviews.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-yellow-100">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Quote className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Be the first to share your experience!
          </h3>
          <p className="text-gray-600 text-lg">
            Help others discover the value of working with Ambiens
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
