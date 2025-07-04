
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
}

interface ReviewFormProps {
  onReviewSubmitted: (review: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onReviewSubmitted }) => {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS Configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = 'your_service_id';
  const EMAILJS_TEMPLATE_ID = 'your_template_id';
  const EMAILJS_PUBLIC_KEY = 'your_public_key';

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !reviewText.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email data
      const emailData = {
        customer_name: name.trim(),
        customer_review: reviewText.trim(),
        rating: rating,
        date: new Date().toLocaleDateString(),
        to_email: 'your-email@example.com', // Replace with your email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );

      // Create new review for local display
      const newReview: Review = {
        id: Date.now().toString(),
        name: name.trim(),
        review: reviewText.trim(),
        rating,
        date: new Date().toLocaleDateString(),
      };

      onReviewSubmitted(newReview);
      setName('');
      setReviewText('');
      setRating(5);
      
      toast({
        title: "Thank you!",
        description: "Your review has been submitted successfully and sent to Ambiens.",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10 border-t-8 border-gradient-to-r from-yellow-400 to-orange-400 max-w-4xl mx-auto" style={{ borderTopColor: '#facc15' }}>
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-white" />
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
              disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Your Review'}
        </Button>

        {/* EmailJS Configuration Instructions */}
        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Configuration Required</h3>
          <p className="text-blue-700 text-sm mb-2">
            To receive emails, please update the following constants in the code:
          </p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• <code>EMAILJS_SERVICE_ID</code>: Your EmailJS service ID</li>
            <li>• <code>EMAILJS_TEMPLATE_ID</code>: Your EmailJS template ID</li>
            <li>• <code>EMAILJS_PUBLIC_KEY</code>: Your EmailJS public key</li>
            <li>• Update the <code>to_email</code> field with your email address</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
