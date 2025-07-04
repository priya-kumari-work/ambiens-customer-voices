
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
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/eaba933a-57e0-4216-9929-9c616ac2d620.png" 
              alt="Ambiens Logo" 
              className="h-24 mx-auto mb-6 drop-shadow-lg"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            What Our Customers Say
          </h1>
          <p className="text-xl text-yellow-50 max-w-2xl mx-auto leading-relaxed">
            Discover why businesses trust Ambiens for their environmental solutions and sustainability needs
          </p>
          <div className="mt-8 w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Reviews Section */}
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
                <Card 
                  key={review.id} 
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
              ))}
            </div>
          )}
        </div>

        {/* Review Submission Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border-t-8 border-gradient-to-r from-yellow-400 to-orange-400 max-w-4xl mx-auto" style={{ borderTopColor: '#facc15' }}>
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
              Share Your Experience
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Help others discover the value of working with Ambiens by sharing your honest feedback
            </p>
          </div>

          <form onSubmit={handleSubmitReview} className="max-w-2xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Name *
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="border-2 border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 h-12 text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Rating *
                </label>
                <div className="flex space-x-2 bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRating(i + 1)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          i < rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300 hover:text-yellow-400'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Your Review *
              </label>
              <Textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with Ambiens. What did you like most about their service? How did they help your business?"
                rows={6}
                className="border-2 border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 text-lg resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Submit Your Review
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/lovable-uploads/eaba933a-57e0-4216-9929-9c616ac2d620.png" 
            alt="Ambiens Logo" 
            className="h-16 mx-auto mb-6 opacity-90"
          />
          <p className="text-gray-300 text-lg">
            © 2024 Ambiens. Leading environmental solutions for a sustainable future.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
