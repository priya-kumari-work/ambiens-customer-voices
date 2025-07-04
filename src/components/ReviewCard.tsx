
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
}

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card 
      className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-gradient-to-b from-yellow-400 to-orange-400 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 group"
      style={{
        animationDelay: `${index * 150}ms`,
        borderLeftColor: '#facc15'
      }}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            {renderStars(review.rating)}
          </div>
          <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
            {review.date}
          </span>
        </div>
        
        <div className="relative">
          <Quote className="w-8 h-8 text-yellow-200 mb-4 opacity-60" />
          <p className="text-gray-700 mb-6 italic leading-relaxed text-lg relative z-10">
            "{review.review}"
          </p>
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">
                {review.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-lg">
                {review.name}
              </p>
              <p className="text-sm text-gray-500">Verified Customer</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
