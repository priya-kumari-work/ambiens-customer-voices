
import React from 'react';
import { Heart, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 mt-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/eaba933a-57e0-4216-9929-9c616ac2d620.png" 
            alt="Ambiens Logo" 
            className="h-20 mx-auto mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300 transform hover:scale-105"
          />
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Leaf className="w-6 h-6 text-green-400" />
            <p className="text-gray-300 text-xl font-light">
              © 2024 Ambiens. Leading environmental solutions for a sustainable future.
            </p>
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <span className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">Contact Us</span>
          </div>
        </div>
        
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 mx-auto rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
