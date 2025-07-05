import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? 'text-yellow-400' : 'text-white';
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img id="Header_2" src={images[0]} alt="Logo" className="h-12 w-12 rounded-full hover:opacity-80 transition-opacity" />
            <span id="Header_3" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">FoodieHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div id="Header_4" className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActiveLink('/')} hover:text-yellow-400 transition-colors font-semibold`}>Home</Link>
            <Link to="/menupage" className={`${isActiveLink('/menupage')} hover:text-yellow-400 transition-colors font-semibold`}>Menu</Link>
            <Link to="/reservationspage" className={`${isActiveLink('/reservationspage')} hover:text-yellow-400 transition-colors font-semibold`}>Reservations</Link>
            <Link to="/contactpage" className={`${isActiveLink('/contactpage')} hover:text-yellow-400 transition-colors font-semibold`}>Contact</Link>
          </div>

          {/* Search Bar */}
          <form id="Header_5" onSubmit={handleSearch} className="hidden md:flex items-center">
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-1 rounded-l-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button type="submit" className="px-4 py-1 bg-yellow-400 text-gray-900 rounded-r-full hover:bg-yellow-500 transition-colors">
              Search
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button
            id="Header_6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="Header_7" className="md:hidden mt-4 space-y-4">
            <Link to="/" className={`block ${isActiveLink('/')} hover:text-yellow-400 transition-colors font-semibold`}>Home</Link>
            <Link to="/menupage" className={`block ${isActiveLink('/menupage')} hover:text-yellow-400 transition-colors font-semibold`}>Menu</Link>
            <Link to="/reservationspage" className={`block ${isActiveLink('/reservationspage')} hover:text-yellow-400 transition-colors font-semibold`}>Reservations</Link>
            <Link to="/contactpage" className={`block ${isActiveLink('/contactpage')} hover:text-yellow-400 transition-colors font-semibold`}>Contact</Link>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-1 rounded-l-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button type="submit" className="px-4 py-1 bg-yellow-400 text-gray-900 rounded-r-full hover:bg-yellow-500 transition-colors">
                Search
              </button>
            </form>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;