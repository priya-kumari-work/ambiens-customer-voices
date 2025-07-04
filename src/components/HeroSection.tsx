
import React from 'react';

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;
