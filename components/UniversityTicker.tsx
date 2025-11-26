import React from 'react';
import { PARTNER_UNIVERSITIES } from '../constants';

const UniversityTicker: React.FC = () => {
  // Duplicate list to ensure seamless infinite scroll
  const scrollItems = [...PARTNER_UNIVERSITIES, ...PARTNER_UNIVERSITIES, ...PARTNER_UNIVERSITIES];

  return (
    <div className="w-full bg-prism-dark border-y border-white/5 py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-prism-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-prism-dark to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll whitespace-nowrap">
        {scrollItems.map((uni, index) => (
          <div key={index} className="flex items-center mx-8">
            <div className="w-2 h-2 rounded-full bg-prism-primary mr-4"></div>
            <span className="font-alice text-xl text-gray-400 hover:text-white transition-colors cursor-default">
              {uni}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityTicker;