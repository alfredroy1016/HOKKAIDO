import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 text-hokkaido-red/20 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif text-hokkaido-dark mb-4">Your Cart is Empty</h1>
          <p className="text-hokkaido-dark/60 mb-10 text-lg">Discover our exquisite floral collections</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-hokkaido-red text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-hokkaido-dark transition-all duration-300"
          >
            Browse Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-hokkaido-dark mb-2">Shopping Cart</h1>
        <p className="text-hokkaido-dark/60">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 bg-white p-6 border border-hokkaido-dark/5 hover:border-hokkaido-red/20 transition-colors"
            >
              {/* Product Image */}
              <Link to={`/product/${item.slug}`} className="flex-shrink-0 w-32 h-32 overflow-hidden bg-hokkaido-cream">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <Link to={`/product/${item.slug}`}>
                      <h3 className="text-xl font-serif text-hokkaido-dark hover:text-hokkaido-red transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-hokkaido-dark/50 uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-hokkaido-dark/40 hover:text-hokkaido-red transition-colors p-2"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex justify-between items-end mt-4">
                  {/* Quantity Controls */}
                  <div className="flex border border-hokkaido-dark/20 h-10">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-4 hover:bg-hokkaido-dark hover:text-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="flex items-center px-4 font-bold min-w-12 justify-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-4 hover:bg-hokkaido-dark hover:text-white transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-hokkaido-red">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-hokkaido-dark/50">
                        ${item.price.toFixed(2)} each
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Clear Cart Button */}
          <button
            onClick={clearCart}
            className="text-hokkaido-dark/50 hover:text-hokkaido-red text-sm uppercase tracking-widest font-bold transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-hokkaido-cream p-8 sticky top-32"
          >
            <h2 className="text-2xl font-serif text-hokkaido-dark mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-hokkaido-dark/10">
              <div className="flex justify-between text-hokkaido-dark/70">
                <span>Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-hokkaido-dark/70">
                <span>Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold text-hokkaido-dark mb-8">
              <span>Total</span>
              <span className="text-hokkaido-red">${totalPrice.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-hokkaido-red text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-hokkaido-dark transition-all duration-300 flex items-center justify-center gap-3 mb-4"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/shop"
              className="w-full border border-hokkaido-dark/20 text-hokkaido-dark py-5 text-sm font-bold uppercase tracking-widest hover:bg-hokkaido-dark hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              Continue Shopping
            </Link>

            <div className="mt-8 pt-8 border-t border-hokkaido-dark/10">
              <p className="text-xs text-hokkaido-dark/50 leading-relaxed">
                Free delivery on orders over $150. All flowers come with our 7-day freshness guarantee.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
