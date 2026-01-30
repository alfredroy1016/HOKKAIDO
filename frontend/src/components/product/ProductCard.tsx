import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';
import type { Product } from '../../hooks/useProducts';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-hokkaido-dark text-white px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap"
        >
          Added to Cart ✓
        </motion.div>
      )}
      
      <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-hokkaido-cream mb-6">
        <motion.img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-hokkaido-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1">
            {product.category}
          </span>
        </div>
        {product.popular && (
          <div className="absolute top-4 right-4">
            <span className="bg-hokkaido-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-lg">
              ⭐ Popular
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-hokkaido-dark/0 group-hover:bg-hokkaido-dark/10 transition-colors duration-500" />
        
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-hokkaido-red text-white p-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-hokkaido-dark"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </Link>
      
      <div className="space-y-1">
        <Link to={`/product/${product.slug}`} className="block">
          <h4 className="text-xl font-serif text-hokkaido-dark group-hover:text-hokkaido-red transition-colors">
            {product.name}
          </h4>
        </Link>
        <p className="text-hokkaido-red font-medium tracking-widest text-sm uppercase">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}
