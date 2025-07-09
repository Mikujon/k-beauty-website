import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, Star, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductById, mockProducts } from '../utils/mockData';
import ProductCard from '../components/product/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = getProductById(id);
  const relatedProducts = mockProducts.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover object-center rounded-lg shadow-md"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? 'border-pink-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-bold text-pink-600">€{product.price.toFixed(2)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">€{product.originalPrice.toFixed(2)}</span>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>

            {/* Badges */}
            {product.badges && (
              <div className="flex flex-wrap gap-2">
                {product.badges.map(badge => (
                  <span key={badge} className={`badge-${badge} text-white text-sm font-medium px-3 py-1 rounded-full`}>
                    {t(`badges.${badge}`)}
                  </span>
                ))}
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-900">{t('product.quantity')}:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 btn-primary flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{product.inStock ? t('product.addToCart') : t('product.outOfStock')}</span>
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`p-3 border rounded-md transition-colors duration-200 ${
                    isInWishlist(product.id)
                      ? 'bg-red-50 border-red-300 text-red-600'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="w-5 h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['description', 'ingredients', 'howToUse', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {t(`product.${tab}`)}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">{product.ingredients}</p>
              </div>
            )}
            {activeTab === 'howToUse' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">{product.howToUse}</p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-gray-500">Reviews coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('product.relatedProducts')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

