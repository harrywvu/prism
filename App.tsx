import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ThreeDCard from './components/ThreeDCard';
import Background from './components/Background';
import Dashboard from './components/Dashboard';
import GeminiAssistant from './components/GeminiAssistant';
import FeatureCard from './components/FeatureCard';
import TeamSection from './components/TeamSection';
import UniversityTicker from './components/UniversityTicker';
import CardShowcase from './components/CardShowcase';
import { FEATURES } from './constants';

const App: React.FC = () => {
  // Simple intersection observer logic for fade-in animations
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden text-white selection:bg-prism-accent selection:text-white">
      <Background />
      <Navbar />
      <GeminiAssistant />

      {/* Hero Section - Full Viewport */}
      <section id="home" className="relative z-10 min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 w-full">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <div className="inline-block px-4 py-1.5 rounded-full bg-prism-primary/20 border border-prism-primary/50 text-prism-accent text-sm font-semibold tracking-wider uppercase mb-2">
              The Future of Campus Life
            </div>
            <h1 className="font-alice text-5xl md:text-7xl leading-tight drop-shadow-lg">
              One ID. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-prism-accent to-prism-primary">Infinite Access.</span>
            </h1>
            <p className="font-montserrat text-lg text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Replace cash, forms, and keys with a single secure digital identity. 
              PRISM integrates payments, attendance, and facility access into one smart ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button className="px-8 py-4 bg-prism-primary hover:bg-prism-accent text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-prism-accent/25 hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                View Demo
              </button>
            </div>
          </div>
          
          {/* Right Interactive Visual */}
          <div className="flex-1 flex justify-center items-center relative w-full h-[400px] md:h-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-prism-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
            <ThreeDCard />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
           </svg>
        </div>
      </section>

      {/* Ticker */}
      <section className="relative z-10">
        <UniversityTicker />
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-alice text-4xl mb-4">Unified Ecosystem</h2>
            <p className="font-montserrat text-gray-400">Everything a student needs, just a tap away.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Variants Showcase */}
      <section className="relative z-10 py-24">
        <CardShowcase />
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="relative z-10 py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
           <Dashboard />
        </div>
      </section>

      {/* Team / About Section */}
      <section id="team" className="relative z-10 py-24">
        <TeamSection />
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-alice text-2xl mb-4 text-white">PRISM</p>
          <div className="flex justify-center space-x-6 mb-8 text-sm text-gray-400 font-montserrat">
            <a href="#" className="hover:text-prism-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-prism-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-prism-accent transition-colors">Support</a>
          </div>
          <p className="font-montserrat text-xs text-gray-600">&copy; 2025 PRISM Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;