
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, CheckCircle } from 'lucide-react';

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
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating ? 'fill-amber-400 text-amber-400 scale-110' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card 
      className="bg-white shadow-xl hover:shadow-2xl transition-all duration-700 border-0 transform hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 group relative overflow-hidden"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-[2px] bg-white rounded-xl"></div>
      
      <CardContent className="p-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-1">
            {renderStars(review.rating)}
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full font-medium">
              {review.date}
            </span>
          </div>
        </div>
        
        <div className="relative mb-8">
          <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center opacity-20">
            <Quote className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-700 italic leading-relaxed text-lg relative z-10 pl-8 font-light">
            "{review.review}"
          </p>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">
                  {review.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-800 text-xl">
                {review.name}
              </p>
              <p className="text-sm text-amber-600 font-semibold">Verified Customer</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
