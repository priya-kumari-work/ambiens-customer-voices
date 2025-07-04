
import React from 'react';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
