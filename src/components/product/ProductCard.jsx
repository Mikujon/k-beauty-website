import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card group relative">
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {product.badges && product.badges.map(badge => (
            <span
              key={badge}
              className={`badge-${badge} text-white text-xs font-semibold px-2 py-1 rounded-full`}
            >
              {t(`badges.${badge}`)}
            </span>
          ))}
          {product.discount > 0 && (
            <span className="badge-sale text-white text-xs font-semibold px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow-md transition-colors duration-200
            ${isInWishlist(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
          title={t('product.addToWishlist')}
        >
          <Heart className="w-5 h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          <a href={`/product/${product.id}`} className="hover:text-pink-600 transition-colors duration-200">
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold text-pink-600">€{(product.price).toFixed(2)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">€{(product.originalPrice).toFixed(2)}</span>
            )}
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="btn-primary text-sm px-4 py-2"
            disabled={!product.inStock}
          >
            {product.inStock ? t('product.addToCart') : t('product.soldOut')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

