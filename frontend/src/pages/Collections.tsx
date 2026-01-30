import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft } from 'lucide-react';

const collections = {
  birthday: {
    name: 'Birthday Bouquets',
    description: 'Vibrant, joyful arrangements to celebrate another year of life',
    hero: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=2000',
    products: [
      {
        id: 1,
        name: 'Cheerful Blooms',
        price: 999,
        image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=600',
        description: 'Colorful mixed flowers perfect for birthdays'
      },
      {
        id: 2,
        name: 'Birthday Joy',
        price: 1499,
        image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=600',
        description: 'Vibrant roses and seasonal flowers'
      },
      {
        id: 3,
        name: 'Celebration Bouquet',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600',
        description: 'Premium arrangement for special birthdays'
      }
    ]
  },
  love: {
    name: 'Love & Proposal',
    description: 'Romantic arrangements to express your deepest emotions',
    hero: '/images/valentine-roses-gift.jpg',
    products: [
      {
        id: 4,
        name: 'Sweet Romance',
        price: 1499,
        image: '/images/valentine-love-letter.jpg',
        description: 'Delicate roses with handwritten love letter'
      },
      {
        id: 5,
        name: 'Passionate Love',
        price: 2999,
        image: '/images/valentine-luxury-mirror.jpg',
        description: 'Luxury roses with pearls and gold accents'
      },
      {
        id: 6,
        name: 'Proposal Perfect',
        price: 4999,
        image: '/images/valentine-romantic-setup.jpg',
        description: 'Complete romantic setup for the big question'
      }
    ]
  },
  luxury: {
    name: 'Luxury Roses',
    description: 'Premium, sophisticated arrangements for discerning tastes',
    hero: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=2000',
    products: [
      {
        id: 7,
        name: 'Elegant Dozen',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600',
        description: '12 premium long-stem roses'
      },
      {
        id: 8,
        name: 'Grand Gesture',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600',
        description: '24 luxury roses in premium packaging'
      },
      {
        id: 9,
        name: 'Ultimate Luxury',
        price: 7999,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
        description: '50+ premium roses, exquisitely arranged'
      }
    ]
  }
};

export default function Collections() {
  const { category } = useParams<{ category: string }>();
  const collection = collections[category as keyof typeof collections];

  const whatsappNumber = "919995071211";

  const handleWhatsAppOrder = (productName: string, price: number) => {
    const message = `Hi! I'd like to order "${productName}" (₹${price}) from HOKKAIDO.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-[#2D2D2D] mb-4">Collection Not Found</h1>
          <Link to="/" className="text-[#B76E79] hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={collection.hero} 
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-4">{collection.name}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              {collection.description}
            </p>
          </motion.div>
        </div>

        <Link 
          to="/"
          className="absolute top-24 left-4 md:left-8 text-white hover:text-[#B76E79] transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wider">Back</span>
        </Link>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collection.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-[#2D2D2D]">{product.name}</h3>
                  <p className="text-sm text-[#2D2D2D]/60">{product.description}</p>
                  <p className="text-2xl font-serif text-[#B76E79]">₹{product.price}</p>
                  
                  {/* Order Button */}
                  <button
                    onClick={() => handleWhatsAppOrder(product.name, product.price)}
                    className="w-full bg-[#B76E79] text-white py-3 text-sm uppercase tracking-wider hover:bg-[#2D2D2D] transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Bouquet CTA */}
      <section className="py-16 bg-[#2D2D2D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Want something unique?</h2>
          <p className="text-white/70 mb-6">Create a custom bouquet tailored to your vision</p>
          <Link
            to="/custom-bouquet"
            className="inline-block bg-[#B76E79] text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-[#2D2D2D] transition-colors"
          >
            Customize Your Bouquet
          </Link>
        </div>
      </section>
    </div>
  );
}
