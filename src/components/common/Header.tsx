'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const EleganzaHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#e8dfd3] shadow-md'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-3xl font-serif transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              Eleganza
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-normal transition-colors duration-300 cursor-pointer ${
                  scrolled
                    ? 'text-gray-800 hover:text-gray-900'
                    : 'text-gray-800 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button className={`relative p-2 transition-colors duration-200 ${
              scrolled ? 'text-gray-800 hover:text-gray-900' : 'text-gray-800 hover:text-gray-900'
            }`}>
              <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
              <span className="absolute top-0 right-0 bg-[#c9a961] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ml-2 p-2 transition-colors duration-200 ${
                scrolled ? 'text-gray-800 hover:text-gray-900' : 'text-gray-800 hover:text-gray-900'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t transition-colors duration-300 ${
            scrolled
              ? 'bg-[#e8dfd3] border-gray-300'
              : 'bg-[#e8dfd3]/95 backdrop-blur-md border-gray-300'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 px-4 text-gray-800 hover:text-gray-900 hover:bg-[#d9cdb8] text-base font-normal transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default EleganzaHeader;