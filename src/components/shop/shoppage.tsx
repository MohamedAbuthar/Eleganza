import { ShoppingBag } from 'lucide-react';
import { Card } from '../ui/card';

interface Product {
  id: number;
  category: string;
  title: string;
  price: number;
  image: string;
  bgColor: string;
}

const products: Product[] = [
  {
    id: 1,
    category: 'SEATING',
    title: 'Mid-Century Armchair',
    price: 899,
    image: '/chair.png',
    bgColor: 'bg-gray-50'
  },
  {
    id: 2,
    category: 'TABLES',
    title: 'Modern Dining Table',
    price: 1599,
    image: '/table.png',
    bgColor: 'bg-white'
  },
  {
    id: 3,
    category: 'LIGHTING',
    title: 'Brass Table Lamp',
    price: 249,
    image: '/tablelamp.png',
    bgColor: 'bg-gray-200'
  },
  {
    id: 4,
    category: 'STORAGE',
    title: 'Minimalist Bookshelf',
    price: 799,
    image: '/cupboard.png',
    bgColor: 'bg-gray-50'
  }
];

export default function FeaturedCollection() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-serif text-[#2d2d2d] mb-4 tracking-tight">
            Featured Collection
          </h1>
          <p className="text-[#888888] text-lg font-light">
            Handpicked pieces that blend functionality with timeless design
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className={`${product.bgColor} aspect-[4/3] relative overflow-hidden`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 bg-white">
                <p className="text-xs font-semibold tracking-wider text-[#888888] mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-serif text-[#2d2d2d] mb-4 min-h-[3.5rem]">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-[#2d2d2d]">
                    ${product.price.toLocaleString()}
                  </span>
                  <button 
                    className={`p-3 rounded-md transition-colors duration-200 ${
                      product.id === 3 
                        ? 'bg-[#3d5a4f] hover:bg-[#2d4a3f]' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    aria-label={`Add ${product.title} to cart`}
                  >
                    <ShoppingBag 
                      className={`w-5 h-5 ${
                        product.id === 3 ? 'text-white' : 'text-[#2d2d2d]'
                      }`} 
                    />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-white text-[#2d2d2d] text-base font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}