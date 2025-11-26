import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <h2 className="font-alice text-4xl mb-4 text-white">Meet the Visionaries</h2>
        <p className="font-montserrat text-gray-400">The leadership team driving the future of campus technology.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member, index) => (
          <div 
            key={index}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-prism-primary/50 transition-all duration-300 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-10"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Image Container */}
            <div className="h-64 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-prism-dark to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 relative z-20 -mt-12">
               <div className="bg-prism-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl text-center">
                  <h3 className="font-alice text-xl text-white mb-1">{member.name}</h3>
                  <p className="font-montserrat text-xs font-bold text-prism-accent uppercase tracking-widest mb-3">{member.role}</p>
                  <p className="font-montserrat text-sm text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
               </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute top-4 right-4 z-20 opacity-50 group-hover:opacity-100 transition-opacity">
               <svg className="w-8 h-8 text-prism-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
               </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;