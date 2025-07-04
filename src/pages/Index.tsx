
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Quote } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
}

const Index = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const { toast } = useToast();

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

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !reviewText.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      review: reviewText.trim(),
      rating,
      date: new Date().toLocaleDateString(),
    };

    setReviews(prev => [newReview, ...prev]);
    setName('');
    setReviewText('');
    setRating(5);
    
    toast({
      title: "Thank you!",
      description: "Your review has been submitted successfully.",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://ambiens.in/assets/images/logo.png" 
              alt="Ambiens Logo" 
              className="h-20 mx-auto mb-6 filter brightness-0 invert"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
            What Our Customers Say
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Discover why businesses trust Ambiens for their environmental solutions and sustainability needs
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
            Customer Testimonials
          </h2>
          
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <Quote className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
              <p className="text-xl text-emerald-600">
                Be the first to share your experience with Ambiens!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card 
                  key={review.id} 
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-400 transform hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="flex space-x-1 mr-3">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <Quote className="w-8 h-8 text-emerald-200 mb-3" />
                    <p className="text-gray-700 mb-4 italic leading-relaxed">
                      "{review.review}"
                    </p>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-emerald-700">
                        — {review.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Review Submission Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-emerald-600">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-800 mb-3">
              Share Your Experience
            </h2>
            <p className="text-gray-600 text-lg">
              Help others discover the value of working with Ambiens
            </p>
          </div>

          <form onSubmit={handleSubmitReview} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-2">
                Your Name
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-2">
                Rating
              </label>
              <div className="flex space-x-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(i + 1)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        i < rating
                          ? 'fill-amber-400 text-amber-400 hover:scale-110'
                          : 'text-gray-300 hover:text-amber-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald-700 mb-2">
                Your Review
              </label>
              <Textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with Ambiens. What did you like most about their service?"
                rows={5}
                className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Submit Your Review
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://ambiens.in/assets/images/logo.png" 
            alt="Ambiens Logo" 
            className="h-12 mx-auto mb-4 filter brightness-0 invert"
          />
          <p className="text-emerald-200">
            © 2024 Ambiens. Leading environmental solutions for a sustainable future.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
