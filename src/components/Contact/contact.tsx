"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';


export default function NewsletterContact() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Subscribed with email:', email);
      alert('Successfully subscribed!');
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-[#335B4D] py-24 sm:py-24 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-5 sm:mb-6 leading-tight tracking-tight">
          Stay Inspired
        </h2>
        
        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-white/95 mb-10 sm:mb-12 md:mb-14 max-w-3xl mx-auto font-dark leading-relaxed">
          Subscribe to our newsletter for design tips, exclusive offers, and new arrivals
        </p>

        {/* Input Group */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-7">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 max-w-lg px-6 py-4 rounded-md text-gray-700 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 text-base shadow-sm"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }}
            />
            
            {/* Subscribe Button using imported Button component */}
            <Button
              onClick={handleSubmit}
              className="px-10 sm:px-12 py-4 h-auto bg-white text-[#335B4D] font-medium rounded-md hover:bg-gray-300 active:bg-gray-200 shadow-sm"
              size="lg"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Privacy Notice */}
        <p className="text-md text-white/55 max-w-2xl mx-auto font-dark leading-relaxed">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </div>
  );
}