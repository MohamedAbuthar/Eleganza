import React from 'react';
import { Sofa, Bed, Lamp, Home, House } from 'lucide-react';
import { Card } from '../ui/card';

interface Category {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: number;
}

const categories: Category[] = [
  {
    id: 1,
    icon: <Sofa className="w-8 h-8 text-[#3d5a4f] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />,
    title: 'Living Room',
    description: 'Comfortable seating and elegant coffee tables',
    items: 24
  },
  {
    id: 2,
    icon: <Bed className="w-8 h-8 text-[#3d5a4f] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />,
    title: 'Bedroom',
    description: 'Serene spaces for rest and relaxation',
    items: 18
  },
  {
    id: 3,
    icon: <Lamp className="w-8 h-8 text-[#3d5a4f] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />,
    title: 'Lighting',
    description: 'Illuminate your home with style',
    items: 32
  },
  {
    id: 4,
    icon: <House className="w-8 h-8 text-[#3d5a4f] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />,
    title: 'Decor',
    description: 'Finishing touches that make it home',
    items: 45
  }
];

export default function ShopByCategory() {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#ebe9e1] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-serif text-[#2d2d2d] mb-4 tracking-tight">
            Shop by Category
          </h1>
          <p className="text-[#888888] text-lg font-light">
            Explore our curated collections designed for every room
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              onClick={() => handleCardClick(category.id)}
              className={`bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl hover:border-green-800 transition-all duration-300 cursor-pointer group ${
                activeCard === category.id ? 'shadow-xl' : ''
              }`}
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#e8ebe9] rounded-full flex items-center justify-center group-hover:bg-green-800 transition-colors duration-300">
                  {category.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h2 className="text-2xl font-serif text-[#2d2d2d] mb-3">
                  {category.title}
                </h2>
                <p className="text-[#888888] text-base leading-relaxed mb-4 min-h-[3rem]">
                  {category.description}
                </p>
                <p className="text-[#c99456] text-sm font-medium">
                  {category.items} Items
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}