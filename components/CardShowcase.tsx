import React from 'react';
import ThreeDCard from './ThreeDCard';

const CardShowcase: React.FC = () => {
  const variants = [
    { 
      variant: 'obsidian', 
      title: 'Staff & Faculty',
      student: { name: 'Dr. Sarah Chen', id: 'FAC-9921', major: 'Department Head', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop' }
    },
    { 
      variant: 'platinum', 
      title: 'Alumni',
      student: { name: 'James Wilson', id: 'ALM-2020', major: 'Engineering', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop' }
    },
    { 
      variant: 'gold', 
      title: 'Honors',
      student: { name: 'Maria Santos', id: 'HON-2025', major: 'Biology', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop' }
    }
  ] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-alice text-4xl mb-4 text-white">Versatile Identity Solutions</h2>
          <p className="font-montserrat text-gray-400">Customized tiers for every member of the academic community.</p>
       </div>

       <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-8">
          {variants.map((item, index) => (
             <div 
               key={index} 
               className="flex flex-col items-center animate-on-scroll opacity-0 translate-y-10"
               style={{ transitionDelay: `${index * 200}ms` }}
             >
                <div className="mb-6 transform scale-90 hover:scale-100 transition-transform duration-500">
                    <ThreeDCard 
                        student={item.student} 
                        variant={item.variant} 
                        // We disable drag on these small ones to prevent UI chaos, or keep it if desired
                        disableDrag={false} 
                    />
                </div>
                <h3 className="font-alice text-xl text-white">{item.title}</h3>
                <p className="text-xs text-gray-500 font-montserrat tracking-widest uppercase mt-1">
                   {item.variant} Tier
                </p>
             </div>
          ))}
       </div>
    </div>
  );
};

export default CardShowcase;