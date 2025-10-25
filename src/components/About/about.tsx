import React from 'react';

export default function EleganzaLanding() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <div className="order-2 lg:order-1 space-y-8 lg:space-y-12">
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight text-gray-900">
                Crafting Timeless Spaces Since 2010
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                At Eleganza, we believe that furniture is more than just functional pieces—it's an expression of your personal style and a reflection of the life you want to live.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                Each item in our collection is carefully curated from master artisans around the world, combining traditional craftsmanship with contemporary design principles.
              </p>
            </div>

            {/* Features Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Premium Quality */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    Premium Quality
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Handcrafted pieces built to last generations
                  </p>
                </div>
              </div>

              {/* Free Shipping */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    Free Shipping
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Complimentary delivery on orders over $500
                  </p>
                </div>
              </div>

              {/* 5-Year Warranty */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-teal-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
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