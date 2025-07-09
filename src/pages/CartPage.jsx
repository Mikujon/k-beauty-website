import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { t } = useTranslation();
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 35 ? 0 : 4.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('cart.empty')}</h1>
          <p className="text-gray-600 mb-8">Start adding some products to your cart!</p>
          <Link to="/shop" className="btn-primary">
            {t('cart.continueShopping')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('cart.title')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      <Link to={`/product/${item.id}`} className="hover:text-pink-600">
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <p className="text-lg font-bold text-pink-600 mt-1">€{item.price.toFixed(2)}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 border border-gray-300 rounded text-center min-w-[3rem]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                    title={t('cart.remove')}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('checkout.orderSummary')}</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('cart.subtotal')}</span>
                  <span className="font-medium">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('cart.shipping')}</span>
                  <span className="font-medium">
                    {shipping === 0 ? t('common.free') : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-gray-500">
                    Add €{(35 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold">
                  <span>{t('cart.total')}</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link to="/checkout" className="w-full btn-primary text-center block">
                  {t('cart.checkout')}
                </Link>
                <Link to="/shop" className="w-full btn-secondary text-center block">
                  {t('cart.continueShopping')}
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-red-600 hover:text-red-700 py-2"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

