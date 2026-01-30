import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/product/ProductCard';
import { useSearchParams } from 'react-router-dom';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'ladies', label: '💐 Ladies Packages' },
  { value: 'men', label: '🕴️ Men Packages' },
  { value: 'couple', label: '💑 Couple Packages' },
  { value: 'add-ons', label: '🎁 Add-On Gifts' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
];

export default function Shop() {
  const { products, loading, error } = useProducts();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Set category from URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'ladies') {
        filtered = filtered.filter(p => 
          p.category === 'Proposal Package' && 
          (p.name.includes('Ladies') || p.name.includes('Anniversary') || p.name.includes('Couple'))
        );
      } else if (selectedCategory === 'men') {
        filtered = filtered.filter(p => 
          p.category === 'Proposal Package' && p.name.includes('Men')
        );
      } else if (selectedCategory === 'couple') {
        filtered = filtered.filter(p => 
          p.category === 'Proposal Package' && 
          (p.name.includes('Couple') || p.name.includes('Anniversary'))
        );
      } else if (selectedCategory === 'add-ons') {
        filtered = filtered.filter(p => p.type === 'flower');
      }
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return sorted;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-hokkaido-dark mb-4"
        >
          Proposal Gift Packages
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-hokkaido-dark/60 text-lg"
        >
          Curated luxury packages for unforgettable moments
        </motion.p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-hokkaido-dark/40" />
            <input
              type="text"
              placeholder="Search flowers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors text-hokkaido-dark placeholder:text-hokkaido-dark/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-hokkaido-dark/40 hover:text-hokkaido-red transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-4 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors text-hokkaido-dark bg-white cursor-pointer uppercase tracking-widest text-sm font-bold"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-6 py-4 border border-hokkaido-dark/10 hover:border-hokkaido-red transition-colors uppercase tracking-widest text-sm font-bold"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Category Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-hokkaido-red text-white'
                    : 'border border-hokkaido-dark/10 text-hokkaido-dark hover:border-hokkaido-red hover:text-hokkaido-red'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8">
        <p className="text-hokkaido-dark/60 text-sm uppercase tracking-widest">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
        </p>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[4/5] bg-gray-100 mb-6" />
              <div className="h-6 bg-gray-100 w-2/3 mb-2" />
              <div className="h-4 bg-gray-100 w-1/4" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-20 text-hokkaido-red font-serif text-xl border border-dashed border-hokkaido-red/20">
          {error}. Please ensure the backend server is running.
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl font-serif text-hokkaido-dark mb-4">No products found</p>
          <p className="text-hokkaido-dark/60 mb-8">Try adjusting your filters or search query</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="bg-hokkaido-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-hokkaido-dark transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
