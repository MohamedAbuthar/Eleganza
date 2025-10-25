
import { ShoppingBag } from 'lucide-react';
import { Card } from '../ui/card';


interface Product {
  id: number;
  category: string;
  title: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    category: 'SEATING',
    title: 'Mid-Century Armchair',
    price: 899,
    image: '/chair.png'
  },
  {
    id: 2,
    category: 'TABLES',
    title: 'Modern Dining Table',
    price: 1599,
    image: '/table.png'
  },
  {
    id: 3,
    category: 'LIGHTING',
    title: 'Brass Table Lamp',
    price: 249,
    image: '/tablelamp.png'
  },
  {
    id: 4,
    category: 'STORAGE',
    title: 'Minimalist Bookshelf',
    price: 799,
    image: '/cupboard.png'
  }
];

export default function FeaturedCollection() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-3">
            Featured Collection
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Handpicked pieces that blend functionality with timeless design
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Product Image */}
              <div className="aspect-[3/3] -mx-6 -mt-6 mb-6 relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <p className="text-xs font-medium tracking-widest text-gray-400 mb-2 uppercase">
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <button 
                    className="p-2 rounded-md  group-hover:bg-green-900 transition-colors duration-200"
                    aria-label={`Add ${product.title} to cart`}
                  >
                    <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>


        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-white text-gray-900 text-sm font-medium rounded-md border border-gray-300 hover:bg-orange-100 transition-colors duration-200 shadow-sm">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}