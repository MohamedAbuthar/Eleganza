import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  category: string;
  title: string;
  price: number;
  image: string;
  isActive: boolean;
  createdAt: Date;
}

export default function FeaturedCollection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    
    // Listen for storage changes to update when admin adds products
    const handleStorageChange = () => {
      fetchProducts();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for updates
    const interval = setInterval(fetchProducts, 2000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const fetchProducts = () => {
    try {
      const stored = localStorage.getItem('admin_products');
      if (stored) {
        const parsed = JSON.parse(stored);
        const activeProducts = parsed
          .filter((p: Product) => p.isActive)
          .map((p: any) => ({
            ...p,
            createdAt: new Date(p.createdAt)
          }))
          .sort((a: Product, b: Product) => 
            b.createdAt.getTime() - a.createdAt.getTime()
          );
        setProducts(activeProducts);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-3">
            Featured Collection
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Handpicked pieces that blend functionality with timeless design
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No products available</h3>
            <p className="mt-2 text-gray-500">Products added in the admin portal will appear here!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

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
                        className="p-2 rounded-md group-hover:bg-green-900 transition-colors duration-200"
                        aria-label={`Add ${product.title} to cart`}
                      >
                        <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-white text-gray-900 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
                View All Products
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}