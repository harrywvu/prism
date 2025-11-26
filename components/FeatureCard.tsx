import React, { useState } from 'react';
import { FeatureItem } from '../types';

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white/5 backdrop-blur-sm border p-6 rounded-2xl transition-all duration-300 group cursor-pointer
        ${isExpanded ? 'border-prism-accent bg-white/10 scale-[1.02]' : 'border-white/5 hover:border-prism-primary/50'}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 bg-prism-primary/20 rounded-lg flex items-center justify-center text-prism-accent mb-6 group-hover:scale-110 transition-transform">
          {feature.icon}
        </div>
        <button className={`text-prism-accent transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
           </svg>
        </button>
      </div>
      
      <h3 className="font-alice text-xl mb-2 text-white">{feature.title}</h3>
      <p className="font-montserrat text-sm text-gray-400 leading-relaxed mb-3">
        {feature.description}
      </p>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-3 border-t border-white/10 mt-3">
           <p className="font-montserrat text-sm text-gray-300 leading-relaxed">
             {feature.details}
           </p>
        </div>
      </div>
      
      {!isExpanded && (
        <span className="text-xs text-prism-accent font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          Read More
        </span>
      )}
    </div>
  );
};

export default FeatureCard;