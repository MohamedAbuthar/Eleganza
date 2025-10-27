import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminPortal from './components/AdminPortal';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import FeaturedCollection from './components/shop/shoppage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeaturedCollection />} />
        {/* <Route 
          path="/admin" 
          element={
            isAuthenticated ? 
            <Navigate to="/admin" replace /> : 
            <AdminPortal />
          } 
        /> */}
        <Route 
          path="/admin" 
          element={
            isAuthenticated ? 
            <AdminPortal /> : 
            <Navigate to="/admin" replace />
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;