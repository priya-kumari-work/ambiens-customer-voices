
import React from 'react';
import { Quote, Star, Users } from 'lucide-react';
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
    <div className="mb-24">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Customer Testimonials
          </h2>
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Real experiences from real customers who trust Ambiens
        </p>
        <div className="mt-8 w-32 h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 mx-auto rounded-full"></div>
      </div>
      
      {reviews.length === 0 ? (
        <div className="text-center py-20 bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl border border-amber-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Quote className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Be the first to share your experience!
            </h3>
            <p className="text-gray-600 text-xl font-light">
              Help others discover the value of working with Ambiens
            </p>
            <div className="mt-8 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
