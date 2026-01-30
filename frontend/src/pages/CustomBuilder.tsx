import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Sparkles } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

// Package builder options
const flowerOptions = [
  { id: 'roses-red', name: 'Red Roses Bouquet', price: 45, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400' },
  { id: 'roses-pink', name: 'Pink Roses Bouquet', price: 40, image: 'https://images.unsplash.com/photo-1520483601560-391776ce0df3?w=400' },
  { id: 'lilies-white', name: 'White Lilies', price: 50, image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400' },
  { id: 'mixed', name: 'Mixed Seasonal', price: 35, image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400' },
];

const chocolateOptions = [
  { id: 'ferrero', name: 'Ferrero Rocher Box', price: 25 },
  { id: 'lindt', name: 'Lindt Assortment', price: 30 },
  { id: 'godiva', name: 'Godiva Premium', price: 45 },
  { id: 'artisan', name: 'Artisan Chocolates', price: 35 },
];

const extraOptions = [
  { id: 'perfume', name: 'Premium Perfume', price: 60, category: 'fragrance' },
  { id: 'candle', name: 'Scented Candle', price: 20, category: 'home' },
  { id: 'beauty', name: 'Beauty Essentials', price: 35, category: 'beauty' },
  { id: 'watch', name: 'Elegant Watch', price: 120, category: 'accessory' },
  { id: 'wallet', name: 'Leather Wallet', price: 55, category: 'accessory' },
];

const boxStyles = [
  { id: 'classic', name: 'Classic White Box', price: 0 },
  { id: 'luxury', name: 'Luxury Black Box', price: 15 },
  { id: 'premium', name: 'Premium Gift Box with Ribbon', price: 25 },
];

export default function CustomBuilder() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const [selectedFlower, setSelectedFlower] = useState<string | null>(null);
  const [selectedChocolate, setSelectedChocolate] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedBox, setSelectedBox] = useState('classic');
  const [message, setMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = 0;
    
    if (selectedFlower) {
      const flower = flowerOptions.find(f => f.id === selectedFlower);
      if (flower) total += flower.price;
    }
    
    if (selectedChocolate) {
      const chocolate = chocolateOptions.find(c => c.id === selectedChocolate);
      if (chocolate) total += chocolate.price;
    }
    
    selectedExtras.forEach(extraId => {
      const extra = extraOptions.find(e => e.id === extraId);
      if (extra) total += extra.price;
    });
    
    const box = boxStyles.find(b => b.id === selectedBox);
    if (box) total += box.price;
    
    return total;
  };

  const handleAddToCart = () => {
    const customPackage = {
      id: Date.now(),
      name: `Custom Package${recipientName ? ` for ${recipientName}` : ''}`,
      slug: `custom-package-${Date.now()}`,
      price: calculateTotal(),
      description: `Custom proposal package with ${selectedFlower ? 'flowers' : ''} ${selectedChocolate ? '+ chocolates' : ''} ${selectedExtras.length > 0 ? `+ ${selectedExtras.length} extras` : ''}`,
      image: flowerOptions.find(f => f.id === selectedFlower)?.image || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800',
      category: 'Custom Package',
      type: 'package' as const,
    };

    addToCart(customPackage, 1);
    navigate('/cart');
  };

  const isComplete = selectedFlower && selectedChocolate && selectedBox;
  const total = calculateTotal();

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-hokkaido-red" />
            <h1 className="text-4xl md:text-6xl font-serif text-hokkaido-dark">
              Build Your Perfect Package
            </h1>
          </div>
          <p className="text-hokkaido-dark/60 text-lg max-w-2xl mx-auto">
            Create a personalized proposal gift package tailored to your unique love story
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Builder Steps */}
        <div className="lg:col-span-2 space-y-12">
          {/* Step 1: Choose Flowers */}
          <section>
            <h2 className="text-2xl font-serif text-hokkaido-dark mb-6 flex items-center gap-2">
              <span className="bg-hokkaido-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Choose Your Flowers *
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {flowerOptions.map((flower) => (
                <button
                  key={flower.id}
                  onClick={() => setSelectedFlower(flower.id)}
                  className={`relative aspect-square overflow-hidden border-2 transition-all ${
                    selectedFlower === flower.id
                      ? 'border-hokkaido-red scale-95'
                      : 'border-hokkaido-dark/10 hover:border-hokkaido-red/50'
                  }`}
                >
                  <img src={flower.image} alt={flower.name} className="w-full h-full object-cover" />
                  {selectedFlower === flower.id && (
                    <div className="absolute top-2 right-2 bg-hokkaido-red text-white rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-white text-xs font-bold">{flower.name}</p>
                    <p className="text-white/80 text-xs">${flower.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Choose Chocolates */}
          <section>
            <h2 className="text-2xl font-serif text-hokkaido-dark mb-6 flex items-center gap-2">
              <span className="bg-hokkaido-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Choose Chocolates *
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {chocolateOptions.map((chocolate) => (
                <button
                  key={chocolate.id}
                  onClick={() => setSelectedChocolate(chocolate.id)}
                  className={`p-4 border-2 transition-all ${
                    selectedChocolate === chocolate.id
                      ? 'border-hokkaido-red bg-hokkaido-red/5'
                      : 'border-hokkaido-dark/10 hover:border-hokkaido-red/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-sm">{chocolate.name}</p>
                    {selectedChocolate === chocolate.id && (
                      <Check className="w-5 h-5 text-hokkaido-red" />
                    )}
                  </div>
                  <p className="text-hokkaido-red text-sm font-bold">${chocolate.price}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Add Extras */}
          <section>
            <h2 className="text-2xl font-serif text-hokkaido-dark mb-6 flex items-center gap-2">
              <span className="bg-hokkaido-dark/20 text-hokkaido-dark w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Add Extras (Optional)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {extraOptions.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`p-4 border-2 transition-all ${
                    selectedExtras.includes(extra.id)
                      ? 'border-hokkaido-red bg-hokkaido-red/5'
                      : 'border-hokkaido-dark/10 hover:border-hokkaido-red/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-sm">{extra.name}</p>
                    {selectedExtras.includes(extra.id) && (
                      <Check className="w-5 h-5 text-hokkaido-red" />
                    )}
                  </div>
                  <p className="text-hokkaido-red text-sm font-bold">${extra.price}</p>
                  <p className="text-xs text-hokkaido-dark/50 capitalize mt-1">{extra.category}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Step 4: Choose Box Style */}
          <section>
            <h2 className="text-2xl font-serif text-hokkaido-dark mb-6 flex items-center gap-2">
              <span className="bg-hokkaido-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Choose Box Style *
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {boxStyles.map((box) => (
                <button
                  key={box.id}
                  onClick={() => setSelectedBox(box.id)}
                  className={`p-6 border-2 transition-all ${
                    selectedBox === box.id
                      ? 'border-hokkaido-red bg-hokkaido-red/5'
                      : 'border-hokkaido-dark/10 hover:border-hokkaido-red/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold">{box.name}</p>
                    {selectedBox === box.id && (
                      <Check className="w-5 h-5 text-hokkaido-red" />
                    )}
                  </div>
                  <p className="text-hokkaido-red font-bold">
                    {box.price === 0 ? 'Free' : `+$${box.price}`}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* Step 5: Personalization */}
          <section>
            <h2 className="text-2xl font-serif text-hokkaido-dark mb-6 flex items-center gap-2">
              <span className="bg-hokkaido-dark/20 text-hokkaido-dark w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Personalize (Optional)
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-hokkaido-dark/70 mb-2">
                  Recipient Name
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Enter recipient's name"
                  className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-hokkaido-dark/70 mb-2">
                  Personal Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your heartfelt message..."
                  rows={4}
                  className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-hokkaido-cream p-8 sticky top-32">
            <h3 className="text-2xl font-serif text-hokkaido-dark mb-6">Your Package</h3>
            
            <div className="space-y-4 mb-6">
              {selectedFlower && (
                <div className="flex justify-between text-sm">
                  <span>{flowerOptions.find(f => f.id === selectedFlower)?.name}</span>
                  <span className="font-bold">${flowerOptions.find(f => f.id === selectedFlower)?.price}</span>
                </div>
              )}
              {selectedChocolate && (
                <div className="flex justify-between text-sm">
                  <span>{chocolateOptions.find(c => c.id === selectedChocolate)?.name}</span>
                  <span className="font-bold">${chocolateOptions.find(c => c.id === selectedChocolate)?.price}</span>
                </div>
              )}
              {selectedExtras.map(extraId => {
                const extra = extraOptions.find(e => e.id === extraId);
                return extra ? (
                  <div key={extraId} className="flex justify-between text-sm">
                    <span>{extra.name}</span>
                    <span className="font-bold">${extra.price}</span>
                  </div>
                ) : null;
              })}
              {selectedBox && (
                <div className="flex justify-between text-sm">
                  <span>{boxStyles.find(b => b.id === selectedBox)?.name}</span>
                  <span className="font-bold">
                    {boxStyles.find(b => b.id === selectedBox)?.price === 0 
                      ? 'Free' 
                      : `$${boxStyles.find(b => b.id === selectedBox)?.price}`}
                  </span>
                </div>
              )}
            </div>

            <div className="border-t border-hokkaido-dark/10 pt-6 mb-6">
              <div className="flex justify-between text-xl font-bold text-hokkaido-dark">
                <span>Total</span>
                <span className="text-hokkaido-red">${total}</span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!isComplete}
              className={`w-full py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 ${
                isComplete
                  ? 'bg-hokkaido-red text-white hover:bg-hokkaido-dark'
                  : 'bg-hokkaido-dark/20 text-hokkaido-dark/40 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            {!isComplete && (
              <p className="text-xs text-hokkaido-dark/50 mt-4 text-center">
                Please complete all required steps (*)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
