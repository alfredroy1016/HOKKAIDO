import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronLeft, Heart, Share2, Truck, RefreshCw } from 'lucide-react';
import type { Product } from '../hooks/useProducts';
import { useCart } from '../contexts/CartContext';

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${slug}`);
        setProduct(response.data);
      } catch (err) {
        console.error('Failed to fetch product', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    }
  };

  if (loading) return <div className="pt-40 text-center font-serif text-2xl animate-pulse">Loading Elegance...</div>;
  if (!product) return <div className="pt-40 text-center font-serif text-2xl text-hokkaido-red">Product Not Found</div>;

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-24 right-8 z-50 bg-hokkaido-dark text-white px-6 py-3 text-sm font-bold uppercase tracking-widest shadow-xl"
        >
          Added {quantity} item{quantity > 1 ? 's' : ''} to Cart ✓
        </motion.div>
      )}

      <Link to="/" className="inline-flex items-center gap-2 text-hokkaido-dark/60 hover:text-hokkaido-red transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
        <ChevronLeft className="w-4 h-4" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[4/5] overflow-hidden bg-hokkaido-cream"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-white/90 backdrop-blur-sm text-hokkaido-dark text-xs font-bold uppercase tracking-[0.2em] px-4 py-2">
              {product.category}
            </span>
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="border-b border-hokkaido-dark/10 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-hokkaido-dark mb-4">{product.name}</h1>
            <p className="text-2xl text-hokkaido-red font-bold">${product.price.toFixed(2)}</p>
          </div>

          <div className="space-y-6 mb-10">
            <p className="text-hokkaido-dark/70 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Package Includes */}
            {product.includes && product.includes.length > 0 && (
              <div className="bg-hokkaido-cream/50 p-6 rounded">
                <h3 className="text-sm font-bold uppercase tracking-widest text-hokkaido-dark mb-4">
                  📦 Package Includes:
                </h3>
                <ul className="space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-hokkaido-dark/70">
                      <span className="text-hokkaido-red mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Perfect For */}
            {product.perfectFor && product.perfectFor.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-hokkaido-dark mb-3">
                  Perfect For:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.perfectFor.map((occasion, index) => (
                    <span
                      key={index}
                      className="bg-hokkaido-red/10 text-hokkaido-red px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-6">
              <div className="flex border border-hokkaido-dark/20 h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-6 hover:bg-hokkaido-dark hover:text-white transition-colors"
                >- </button>
                <span className="flex items-center px-4 font-bold min-w-12 justify-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-6 hover:bg-hokkaido-dark hover:text-white transition-colors"
                >+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-hokkaido-red text-white h-14 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-hokkaido-dark transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Cart
              </button>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 border border-hokkaido-dark/10 h-12 flex items-center justify-center gap-2 hover:border-hokkaido-red hover:text-hokkaido-red transition-all text-xs font-bold uppercase tracking-widest">
                <Heart className="w-4 h-4" /> Wishlist
              </button>
              <button className="flex-1 border border-hokkaido-dark/10 h-12 flex items-center justify-center gap-2 hover:border-hokkaido-red hover:text-hokkaido-red transition-all text-xs font-bold uppercase tracking-widest">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-hokkaido-dark/10 pt-8">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-hokkaido-red mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Premium Delivery</h4>
                <p className="text-[10px] text-hokkaido-dark/50">Same-day delivery available for orders before 2 PM.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-hokkaido-red mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Freshness Guarantee</h4>
                <p className="text-[10px] text-hokkaido-dark/50">We guarantee 7 days of freshness or your money back.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
