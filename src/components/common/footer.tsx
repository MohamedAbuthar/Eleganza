import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const EleganzaFooter: React.FC = () => {
  const shopLinks = [
    { name: 'Living Room', href: '#home' },
    { name: 'Bedroom', href: '#home' },
    { name: 'Dining', href: '#home' },
    { name: 'Office', href: '#home' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#home' },
    { name: 'Sustainability', href: '#home' },
    { name: 'Press', href: '#home' },
  ];

  const supportLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'FAQs', href: '#home' },
    { name: 'Shipping', href: '#home' },
    { name: 'Returns', href: '#home' },
  ];

  return (
    <footer className="w-full bg-[#ebe9e1] border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">
              Eleganza
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Transforming houses into homes with timeless furniture and elegant decor since 2010.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d4c7b5] hover:bg-[#c4b7a5] flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d4c7b5] hover:bg-[#c4b7a5] flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 " />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d4c7b5] hover:bg-[#c4b7a5] flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-serif text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-serif text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-serif text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 text-sm">hello@eleganza.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 text-sm">New York, NY 10001</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Eleganza Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EleganzaFooter;