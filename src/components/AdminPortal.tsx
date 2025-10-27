'use client';
import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff, Image, LogOut, Lock, Mail } from 'lucide-react';

// Firebase imports - Replace with your actual Firebase config
// import { db, auth } from '@/lib/firebase';
// import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where, orderBy } from 'firebase/firestore';
// import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Mock Firebase for demo - REMOVE THESE when you have real Firebase
const mockAuth = {
  currentUser: null,
  onAuthStateChanged: (callback: any) => { callback(null); return () => {}; }
};
const mockDb = { collection: () => {} };

interface Product {
  id: string;
  category: string;
  title: string;
  price: number;
  imageId: string; // Reference to localStorage image
  createdAt: Date;
  isActive: boolean;
}

export default function AdminPortal() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    price: '',
    image: '',
    isActive: true
  });

  useEffect(() => {
    // Replace with real Firebase auth
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    //   setLoading(false);
    //   if (user) {
    //     fetchProducts();
    //   }
    // });
    // return () => unsubscribe();

    // Mock for demo
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleLogin = async () => {
    setLoginError('');
    setLoading(true);

    try {
      // REPLACE WITH REAL FIREBASE:
      // await signInWithEmailAndPassword(auth, email, password);
      
      // Mock login for demo
      if (email && password) {
        setUser({ email });
        fetchProducts();
      } else {
        throw new Error('Please enter email and password');
      }
    } catch (error: any) {
      setLoginError(error.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      // REPLACE WITH: await signOut(auth);
      setUser(null);
      setEmail('');
      setPassword('');
      setProducts([]);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      // REPLACE WITH REAL FIREBASE:
      // const q = query(
      //   collection(db, 'products'),
      //   orderBy('createdAt', 'desc')
      // );
      // const querySnapshot = await getDocs(q);
      // const productsData = querySnapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data(),
      //   createdAt: doc.data().createdAt?.toDate() || new Date()
      // })) as Product[];
      // setProducts(productsData);

      // Mock data from localStorage for demo
      const stored = localStorage.getItem('firebase_products');
      if (stored) {
        const parsed = JSON.parse(stored);
        setProducts(parsed.map((p: any) => ({
          ...p,
          createdAt: new Date(p.createdAt)
        })));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to fetch products from Firebase');
    }
  };

  // Save image to localStorage and return imageId
  const saveImageToLocal = (base64Image: string): string => {
    const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(`product_image_${imageId}`, base64Image);
    return imageId;
  };

  // Get image from localStorage by imageId
  const getImageFromLocal = (imageId: string): string => {
    return localStorage.getItem(`product_image_${imageId}`) || '';
  };

  // Delete image from localStorage
  const deleteImageFromLocal = (imageId: string) => {
    localStorage.removeItem(`product_image_${imageId}`);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        alert('Image size should be less than 1MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, image: base64String });
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.category || !formData.price || !formData.image) {
      alert('Please fill all fields and select an image');
      return;
    }

    try {
      let imageId: string;

      if (editingProduct) {
        // Update existing product
        imageId = formData.image.startsWith('data:') 
          ? saveImageToLocal(formData.image) // New image uploaded
          : editingProduct.imageId; // Keep existing imageId

        const productData = {
          category: formData.category.toUpperCase(),
          title: formData.title,
          price: parseFloat(formData.price),
          imageId: imageId,
          isActive: formData.isActive,
          updatedAt: new Date()
        };

        // REPLACE WITH REAL FIREBASE:
        // await updateDoc(doc(db, 'products', editingProduct.id), productData);

        // Mock update for demo
        const stored = localStorage.getItem('firebase_products') || '[]';
        const parsed = JSON.parse(stored);
        const updated = parsed.map((p: any) => 
          p.id === editingProduct.id ? { ...p, ...productData } : p
        );
        localStorage.setItem('firebase_products', JSON.stringify(updated));

        // Delete old image if new one was uploaded
        if (formData.image.startsWith('data:') && editingProduct.imageId !== imageId) {
          deleteImageFromLocal(editingProduct.imageId);
        }

        alert('Product updated successfully!');
      } else {
        // Add new product
        imageId = saveImageToLocal(formData.image);

        const productData = {
          id: `prod_${Date.now()}`,
          category: formData.category.toUpperCase(),
          title: formData.title,
          price: parseFloat(formData.price),
          imageId: imageId,
          isActive: formData.isActive,
          createdAt: new Date()
        };

        // REPLACE WITH REAL FIREBASE:
        // await addDoc(collection(db, 'products'), productData);

        // Mock add for demo
        const stored = localStorage.getItem('firebase_products') || '[]';
        const parsed = JSON.parse(stored);
        localStorage.setItem('firebase_products', JSON.stringify([productData, ...parsed]));

        alert('Product added successfully!');
      }

      resetForm();
      fetchProducts();
    } catch (error: any) {
      console.error('Error saving product:', error);
      alert(`Failed to save product: ${error.message}`);
    }
  };

  const handleEdit = (product: Product) => {
    const imageData = getImageFromLocal(product.imageId);
    setEditingProduct(product);
    setFormData({
      category: product.category,
      title: product.title,
      price: product.price.toString(),
      image: imageData,
      isActive: product.isActive
    });
    setImagePreview(imageData);
    setShowForm(true);
  };

  const handleDelete = async (product: Product) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        // REPLACE WITH REAL FIREBASE:
        // await deleteDoc(doc(db, 'products', product.id));

        // Mock delete for demo
        const stored = localStorage.getItem('firebase_products') || '[]';
        const parsed = JSON.parse(stored);
        const filtered = parsed.filter((p: any) => p.id !== product.id);
        localStorage.setItem('firebase_products', JSON.stringify(filtered));

        // Delete image from localStorage
        deleteImageFromLocal(product.imageId);
        
        alert('Product deleted successfully!');
        fetchProducts();
      } catch (error: any) {
        alert(`Failed to delete: ${error.message}`);
      }
    }
  };

  const toggleActive = async (product: Product) => {
    try {
      // REPLACE WITH REAL FIREBASE:
      // await updateDoc(doc(db, 'products', product.id), {
      //   isActive: !product.isActive
      // });

      // Mock toggle for demo
      const stored = localStorage.getItem('firebase_products') || '[]';
      const parsed = JSON.parse(stored);
      const updated = parsed.map((p: any) => 
        p.id === product.id ? { ...p, isActive: !p.isActive } : p
      );
      localStorage.setItem('firebase_products', JSON.stringify(updated));
      
      fetchProducts();
    } catch (error: any) {
      alert(`Failed to update: ${error.message}`);
    }
  };

  const resetForm = () => {
    setFormData({ category: '', title: '', price: '', image: '', isActive: true });
    setImagePreview('');
    setEditingProduct(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900 rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Sign in to manage your products</p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{loginError}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 bg-green-900 text-white rounded-md hover:bg-green-800 transition-colors font-medium disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-xs text-blue-800">
              <strong>Hybrid Storage:</strong> Images stored locally, product details in Firebase Firestore.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-600 mt-1">Manage your product collection</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>

        {showForm && (
          <div className="p-6 mb-8 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., SEATING, TABLES"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Product name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0.00"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Image (Stored Locally)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
                  />
                </div>
              </div>

              {imagePreview && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
                  <div className="relative w-48 h-48 border-2 border-gray-300 rounded-lg overflow-hidden">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-4 h-4 text-green-900 border-gray-300 rounded focus:ring-green-900"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                  Active (show on shop page)
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-900 text-white rounded-md hover:bg-green-800 transition-colors"
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => {
                const imageData = getImageFromLocal(product.imageId);
                return (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img src={imageData} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${product.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleActive(product)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.isActive ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-900" title="Edit">
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button onClick={() => toggleActive(product)} className="text-gray-600 hover:text-gray-900" title="Toggle visibility">
                          {product.isActive ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                        </button>
                        <button onClick={() => handleDelete(product)} className="text-red-600 hover:text-red-900" title="Delete">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {products.length === 0 && (
            <div className="text-center py-12">
              <Image className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No products</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding a new product.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}