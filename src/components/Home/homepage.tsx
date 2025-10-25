'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import EleganzaHeader from '../common/Header';
import EleganzaFooter from '../common/footer';

const EleganzaHero: React.FC = () => {
  return (
    <>
    <EleganzaHeader/>
    <section className="relative w-full min-h-screen bg-[#e8dfd3] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/homeio.png"
          alt="Modern living room"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8dfd3]/95 via-[#e8dfd3]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-gray-900 leading-tight mb-6 lg:mb-8">
            Transform Your Space
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-10 max-w-xl">
            Discover our curated collection of modern furniture and elegant home decor. Each piece is carefully selected to bring timeless beauty and comfort to your home.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#3d5a52] hover:bg-[#2d4a42] text-white"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white hover:bg-gray-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element - Optional */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e8dfd3]/50 to-transparent pointer-events-none"></div>
    </section>
    <EleganzaFooter/>
    </>
  );
};

export default EleganzaHero;