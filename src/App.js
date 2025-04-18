import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import Navigation from './components/Navigation';
import { Toolbar } from '@mui/material';

function App() {
  return (
    <Router>
      <Navigation />
      <Toolbar /> {/* ✅ Spacer for AppBar height */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
