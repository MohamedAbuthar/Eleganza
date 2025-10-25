import { Award, Shield, Truck } from 'lucide-react';
import React from 'react';

export default function EleganzaLanding() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <div className="order-2 lg:order-1 space-y-8 lg:space-y-12">
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
             <h2 className="text-5xl sm:text-6xl font-serif text-[#2d2d2d] mb-4 tracking-tight">Crafting Timeless Spaces Since 2010</h2>
              
              <p className="text-base md:text-lg text-[#8A8075] leading-relaxed max-w-xl">
                At Eleganza, we believe that furniture is more than just functional pieces—it's an expression of your personal style and a reflection of the life you want to live.
              </p>
              
              <p className="text-base md:text-lg text-[#8A8075] leading-relaxed max-w-xl">
                Each item in our collection is carefully curated from master artisans around the world, combining traditional craftsmanship with contemporary design principles.
              </p>
            </div>

            {/* Features Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Premium Quality */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#335B4D1A] rounded-lg flex items-center justify-center">
                 <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C7A7B]" />    
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-serif text-gray-900 mb-4">
                    Premium Quality
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 ">
                    Handcrafted pieces built to last generations
                  </p>
                </div>
              </div>

              {/* Free Shipping */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#335B4D1A] rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C7A7B]" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-serif text-gray-900 mb-4">
                    Free Shipping
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Complimentary delivery on orders over $500
                  </p>
                </div>
              </div>

              {/* 5-Year Warranty */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#335B4D1A] rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#2C7A7B]" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-serif text-gray-900 mb-4">
                    5-Year Warranty
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Peace of mind with our comprehensive coverage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/furniture about.png"
                alt="Elegant living room with tan leather sofa, geometric coffee table, macrame wall hanging, and modern brass chandelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}