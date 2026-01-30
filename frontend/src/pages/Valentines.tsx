import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Gift, Sparkles } from 'lucide-react';

export default function Valentines() {
  const whatsappNumber = "919995071211";

  const handleWhatsAppOrder = (packageName: string, price: number) => {
    const message = `Hi! I'd like to order the "${packageName}" Valentine's Special (₹${price}) from HOKKAIDO.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const valentinePackages = [
    {
      id: 1,
      name: "Ladies Proposal Package",
      originalPrice: 5999,
      salePrice: 4499,
      discount: "25% OFF",
      image: "/images/valentine-love-letter.jpg",
      includes: [
        "Fresh premium flower bouquet",
        "Chocolates & sweet treats",
        "Lip care / beauty essentials",
        "Scented candle or decorative keepsake",
        "Elegant gift box with minimal styling",
        "Handwritten message card"
      ],
      perfectFor: ["Proposals", "Anniversaries", "Romantic surprises"]
    },
    {
      id: 2,
      name: "Men Proposal Package",
      originalPrice: 6999,
      salePrice: 5249,
      discount: "25% OFF",
      image: "/images/valentine-scroll-letter.jpg",
      includes: [
        "Fresh flower arrangement (minimal style)",
        "Premium perfume / grooming essential",
        "Chocolates or dry snacks",
        "Elegant keepsake item",
        "Premium gift box packaging",
        "Personal message card"
      ],
      perfectFor: ["Proposals", "Special surprises", "Thoughtful gifting"]
    },
    {
      id: 3,
      name: "Couple's Ultimate Package",
      originalPrice: 11999,
      salePrice: 8999,
      discount: "25% OFF",
      image: "/images/valentine-romantic-setup.jpg",
      includes: [
        "Both Ladies & Men packages combined",
        "Coordinated flower arrangements",
        "Dual premium gift boxes",
        "Personalized couple message cards",
        "Special Valentine's keepsake",
        "Luxury presentation"
      ],
      perfectFor: ["Valentine's Day", "Engagements", "Anniversaries"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#8B0000] to-[#B76E79] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/valentines-packages.jpg" 
            alt="Valentine's Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
              <p className="text-xs uppercase tracking-[0.3em] font-medium">Limited Time Offer</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif mb-4">
              Valentine's Day Special 💝
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Make this Valentine's unforgettable with our exclusive proposal packages.
              Save 25% on all Valentine's collections.
            </p>

            <div className="flex items-center justify-center gap-4 text-2xl font-serif pt-4">
              <span className="bg-white text-[#8B0000] px-6 py-2 rounded-full text-lg font-bold">
                Save 25% • Valid until Feb 14
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {valentinePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-bold">
                    {pkg.discount}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif text-[#2D2D2D] mb-4">{pkg.name}</h3>
                    
                    {/* Pricing */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl font-serif text-[#8B0000] font-bold">
                        ₹{pkg.salePrice.toLocaleString()}
                      </span>
                      <span className="text-lg text-[#2D2D2D]/50 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* Includes */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium uppercase tracking-wider text-[#B76E79] mb-3">
                        Includes:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#2D2D2D]/70">
                            <Heart className="w-4 h-4 text-[#B76E79] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Perfect For */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium uppercase tracking-wider text-[#B76E79] mb-3">
                        Perfect for:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.perfectFor.map((occasion, i) => (
                          <span
                            key={i}
                            className="bg-[#F5E6E8] text-[#2D2D2D] text-xs px-3 py-1 rounded-full"
                          >
                            {occasion}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Order Button */}
                  <button
                    onClick={() => handleWhatsAppOrder(pkg.name, pkg.salePrice)}
                    className="w-full bg-[#8B0000] text-white py-4 text-sm uppercase tracking-wider hover:bg-[#B76E79] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HOKKAIDO for Valentine's */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
              Why Choose HOKKAIDO This Valentine's
            </h2>
            <p className="text-[#2D2D2D]/60 max-w-2xl mx-auto">
              Because love deserves more than ordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Complete Experience",
                description: "Not just flowers - a full luxury gift package with chocolates, beauty items, and keepsakes"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Handcrafted with Love",
                description: "Each package is personally curated and includes a handwritten message card"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Premium Presentation",
                description: "Elegant gift boxes with minimal styling that speaks volumes"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5E6E8] text-[#B76E79] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-[#2D2D2D] mb-3">{feature.title}</h3>
                <p className="text-[#2D2D2D]/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#8B0000] to-[#B76E79] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif">
              Don't Wait Until It's Too Late
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Valentine's packages are limited. Order now to ensure delivery by February 14th.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsAppOrder("Valentine's Package", 4499)}
                className="bg-white text-[#8B0000] px-12 py-5 text-sm font-medium uppercase tracking-wider hover:bg-[#F5E6E8] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Order on WhatsApp
              </button>
              <Link
                to="/custom-bouquet"
                className="border-2 border-white text-white px-12 py-5 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[#8B0000] transition-all flex items-center justify-center"
              >
                Create Custom Package
              </Link>
            </div>
            <p className="text-sm text-white/70 pt-4">
              Offer valid until February 14, 2026 • While stocks last
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
