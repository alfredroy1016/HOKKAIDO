import { ShoppingCart, Menu, Search, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="fixed w-full z-50 bg-hokkaido-cream/80 backdrop-blur-md border-b border-hokkaido-red/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <Flower2 className="w-8 h-8 text-hokkaido-red transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-serif font-bold tracking-tighter text-hokkaido-red">
                HOKKAIDO
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-hokkaido-dark/80 hover:text-hokkaido-red transition-colors uppercase tracking-widest text-sm font-medium">Valentine's</Link>
            <Link to="/collections/birthday" className="text-hokkaido-dark/80 hover:text-hokkaido-red transition-colors uppercase tracking-widest text-sm font-medium">Collections</Link>
            <Link to="/custom-bouquet" className="text-hokkaido-dark/80 hover:text-hokkaido-red transition-colors uppercase tracking-widest text-sm font-medium">Custom</Link>
            <Link to="/about" className="text-hokkaido-dark/80 hover:text-hokkaido-red transition-colors uppercase tracking-widest text-sm font-medium">About</Link>
          </div>

          <div className="flex items-center space-x-5">
            <button className="text-hokkaido-dark hover:text-hokkaido-red transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative text-hokkaido-dark hover:text-hokkaido-red transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-hokkaido-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="md:hidden text-hokkaido-dark hover:text-hokkaido-red transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
