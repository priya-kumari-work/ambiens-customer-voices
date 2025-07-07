
import React from 'react';
import { Sparkles, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-white py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-10 animate-fade-in">
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/eaba933a-57e0-4216-9929-9c616ac2d620.png" 
              alt="Ambiens Logo" 
              className="h-28 mx-auto mb-8 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in delay-300">
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent leading-tight">
            What Our Customers Say
          </h1>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-white text-white animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            ))}
          </div>
          
          <p className="text-2xl text-yellow-50 max-w-3xl mx-auto leading-relaxed font-light">
            Discover why businesses trust Ambiens for their environmental solutions and sustainability needs
          </p>
          
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-2 bg-gradient-to-r from-white/40 via-white/80 to-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
