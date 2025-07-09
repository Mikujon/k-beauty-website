import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, User, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import MegaMenu from './MegaMenu';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const { getCartItemsCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navigationItems = [
    { key: 'shopAll', label: t('nav.shopAll'), href: '/shop', hasMegaMenu: true },
    { key: 'skinType', label: t('nav.skinType'), href: '/skin-type', hasMegaMenu: true },
    { key: 'skinConcern', label: t('nav.skinConcern'), href: '/skin-concern', hasMegaMenu: true },
    { key: 'brands', label: t('nav.brands'), href: '/brands', hasMegaMenu: true },
    { key: 'routineFinder', label: t('nav.routineFinder'), href: '/routine-finder', hasMegaMenu: false },
    { key: 'blog', label: t('nav.blog'), href: '/blog', hasMegaMenu: false }
  ];

  const handleMenuHover = (menuKey) => {
    setActiveMenu(menuKey);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-center py-2 px-4">
        <p className="text-sm font-medium text-gray-800">
          {t('hero.announcement')} ✨
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">K-Beauty</h1>
                  <p className="text-xs text-gray-600">Premium Korean Beauty</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && handleMenuHover(item.key)}
                  onMouseLeave={handleMenuLeave}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </a>
                  
                  {/* Mega Menu */}
                  {item.hasMegaMenu && activeMenu === item.key && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                      <MegaMenu menuType={item.key} />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('nav.search')}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <LanguageSelector />

              {/* Account */}
              <a
                href="/account"
                className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                title={t('nav.account')}
              >
                <User className="w-5 h-5" />
              </a>

              {/* Wishlist */}
              <a
                href="/wishlist"
                className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 relative"
                title={t('nav.wishlist')}
              >
                <Heart className="w-5 h-5" />
                {getWishlistCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getWishlistCount()}
                  </span>
                )}
              </a>

              {/* Cart */}
              <a
                href="/cart"
                className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 relative"
                title={t('nav.cart')}
              >
                <ShoppingBag className="w-5 h-5" />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('nav.search')}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

