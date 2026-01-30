import { Flower2, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-hokkaido-dark text-hokkaido-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Flower2 className="w-8 h-8 text-hokkaido-pink" />
              <span className="text-2xl font-serif font-bold tracking-tighter">HOKKAIDO</span>
            </Link>
            <p className="text-hokkaido-cream/60 leading-relaxed">
              Crafting exquisite floral arrangements inspired by the natural beauty of Hokkaido. Premium quality, delivered with care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-hokkaido-pink transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-hokkaido-pink transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-hokkaido-pink transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Collections</h4>
            <ul className="space-y-4 text-hokkaido-cream/60">
              <li><Link to="/seasonal" className="hover:text-hokkaido-pink transition-colors">Seasonal Specials</Link></li>
              <li><Link to="/premium" className="hover:text-hokkaido-pink transition-colors">Premium Roses</Link></li>
              <li><Link to="/luxury" className="hover:text-hokkaido-pink transition-colors">Luxury Bouquets</Link></li>
              <li><Link to="/wedding" className="hover:text-hokkaido-pink transition-colors">Wedding Collection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-hokkaido-cream/60">
              <li><Link to="/shipping" className="hover:text-hokkaido-pink transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="hover:text-hokkaido-pink transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/care" className="hover:text-hokkaido-pink transition-colors">Flower Care Tips</Link></li>
              <li><Link to="/faq" className="hover:text-hokkaido-pink transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-hokkaido-cream/60 mb-4 text-sm">Join our newsletter for exclusive floral inspiration and offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 px-4 py-2 flex-grow focus:outline-none focus:border-hokkaido-pink transition-colors text-sm"
              />
              <button className="bg-hokkaido-red hover:bg-hokkaido-red/80 px-4 py-2 text-white text-sm font-bold transition-colors">
                JOIN
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-hokkaido-cream/40 text-xs">
          <p>© {new Date().getFullYear()} Hokkaido Premium Flowers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
