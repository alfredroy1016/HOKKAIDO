import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles, Heart, Gift } from 'lucide-react';

export default function Home() {
  const whatsappNumber = "919995071211"; // HOKKAIDO WhatsApp
  const whatsappMessage = "Hi! I'd like to order a bouquet from HOKKAIDO.";

  const handleWhatsAppOrder = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section - "Where emotions bloom" with HOKKAIDO Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - HOKKAIDO Bouquet */}
        <div className="absolute inset-0">
          <img 
            src="/images/hokkaido-hero-banner.jpg" 
            alt="HOKKAIDO Premium Bouquet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Brand Name */}
            <h1 className="text-6xl md:text-8xl font-serif text-white tracking-wider drop-shadow-lg">
              HOKKAIDO
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/90 font-light italic drop-shadow-md">
              Where emotions bloom.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Premium handcrafted bouquets inspired by purity, elegance, and the beauty of meaningful moments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={handleWhatsAppOrder}
                className="bg-[#B76E79] text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[#B76E79] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Order a Bouquet
              </button>
              <Link
                to="/custom-bouquet"
                className="border-2 border-white text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[#2D2D2D] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                Customize Your Bouquet
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Why HOKKAIDO Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
              Why HOKKAIDO
            </h2>
            <p className="text-[#2D2D2D]/50 text-sm max-w-xl mx-auto">
              Every bouquet is a story, crafted with care and delivered with love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Premium Handcrafted",
                description: "Each bouquet is carefully curated by expert florists"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Inspired by Purity",
                description: "Fresh, premium flowers sourced with love"
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Minimal Elegance",
                description: "Beautiful wrapping that speaks volumes"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Personal Touch",
                description: "Handwritten message included with every order"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5E6E8] text-[#B76E79]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif text-[#2D2D2D]">{feature.title}</h3>
                <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOKKAIDO Brand Showcase - Full Collection */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hokkaido-collection-banner.png" 
            alt="HOKKAIDO - A Bouquet of Elegance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-[#B76E79] font-medium uppercase tracking-[0.3em] text-xs mb-4">
              The HOKKAIDO Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-6 leading-tight">
              More Than Just Flowers
            </h2>
            <p className="text-lg text-[#2D2D2D]/70 leading-relaxed mb-8">
              Every HOKKAIDO creation is a complete experience. Premium bouquets paired with 
              luxury chocolates, elegant perfumes, and beautifully wrapped gift boxes. 
              Because meaningful moments deserve extraordinary presentation.
            </p>
            <Link
              to="/collections/luxury"
              className="inline-block bg-[#B76E79] text-white px-8 py-3 text-xs font-medium uppercase tracking-wider hover:bg-[#2D2D2D] transition-colors"
            >
              Explore Luxury Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Valentine's Day Special Offer */}
      <section className="relative py-24 bg-gradient-to-br from-[#8B0000] to-[#B76E79] text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <p className="text-xs uppercase tracking-[0.3em] font-medium">Limited Time Offer</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">
              Valentine's Day Special 💝
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Make this Valentine's unforgettable with our exclusive proposal packages
            </p>
            <div className="flex items-center justify-center gap-4 text-2xl font-serif">
              <span className="line-through opacity-60">₹5,999</span>
              <span className="text-4xl font-bold">₹4,499</span>
              <span className="bg-white text-[#8B0000] px-4 py-1 rounded-full text-sm font-medium">Save 25%</span>
            </div>
          </motion.div>

          {/* Packages Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <img 
              src="/images/valentines-packages.jpg" 
              alt="HOKKAIDO Valentine's Proposal Packages" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleWhatsAppOrder}
              className="bg-white text-[#8B0000] px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#F5E6E8] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Order Valentine's Package
            </button>
            <Link
              to="/collections/love"
              className="border-2 border-white text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-[#8B0000] transition-all flex items-center justify-center gap-2"
            >
              View All Love Packages
            </Link>
          </motion.div>

          {/* Countdown Timer (Optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-white/70 uppercase tracking-wider mb-2">Offer valid until</p>
            <p className="text-2xl font-serif">February 14, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
              Featured Collections
            </h2>
            <p className="text-[#2D2D2D]/50 text-sm">
              Curated for every special moment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Birthday Bouquets",
                image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=600",
                link: "/collections/birthday"
              },
              {
                name: "Love & Proposal",
                image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=600",
                link: "/collections/love"
              },
              {
                name: "Luxury Roses",
                image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600",
                link: "/collections/luxury"
              },
              {
                name: "Custom Orders",
                image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600",
                link: "/custom-bouquet"
              }
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={collection.link} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-serif text-[#2D2D2D] text-center group-hover:text-[#B76E79] transition-colors">
                    {collection.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-block text-[#2D2D2D] font-medium uppercase tracking-wider text-xs border-b border-[#2D2D2D] pb-1 hover:text-[#B76E79] hover:border-[#B76E79] transition-colors"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Emotional Quote Section */}
      <section className="py-32 bg-[#2D2D2D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-3xl md:text-4xl font-serif italic leading-relaxed">
              "Some moments deserve more than words.<br />
              They deserve flowers."
            </p>
            <div className="w-16 h-[1px] bg-white/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#F5E6E8] to-[#FFFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D]">
              Make someone smile today 🌸
            </h2>
            <p className="text-[#2D2D2D]/60 text-lg max-w-2xl mx-auto">
              Order through WhatsApp for a personal, seamless experience
            </p>
            <button
              onClick={handleWhatsAppOrder}
              className="bg-[#25D366] text-white px-12 py-5 text-sm font-medium uppercase tracking-wider hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Order
            </button>
            <p className="text-xs text-[#2D2D2D]/40 uppercase tracking-wider">
              @hokkaido_bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <button
        onClick={handleWhatsAppOrder}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
