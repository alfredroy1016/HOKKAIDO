import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Leaf, MessageCircle } from 'lucide-react';

export default function About() {
  const whatsappNumber = "919995071211";
  const whatsappMessage = "Hi! I'd like to know more about HOKKAIDO.";

  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#FFFBF7] to-[#F5E6E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-[#2D2D2D] tracking-[0.2em]">
              H O K K A I D O
            </h1>
            <p className="text-xl md:text-2xl text-[#B76E79] font-light italic">
              Pure love, expressed through flowers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Where it began */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F5E6E8] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#B76E79]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
                Where it began
              </h2>
            </div>
            <p className="text-lg text-[#2D2D2D]/70 leading-relaxed pl-16">
              HOKKAIDO was born from a simple yet powerful belief —
              that emotions deserve to be expressed beautifully.
              In a world of noise, we chose calm, intention, and meaning.
            </p>
          </motion.div>

          {/* Our philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F5E6E8] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#B76E79]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
                Our philosophy
              </h2>
            </div>
            <p className="text-lg text-[#2D2D2D]/70 leading-relaxed pl-16">
              True luxury is never loud. It is thoughtful, balanced,
              and deeply personal. Every creation reflects respect
              for nature, simplicity, and detail.
            </p>
          </motion.div>

          {/* Craftsmanship & care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F5E6E8] flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#B76E79]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
                Craftsmanship & care
              </h2>
            </div>
            <p className="text-lg text-[#2D2D2D]/70 leading-relaxed pl-16">
              Each HOKKAIDO bouquet is thoughtfully handcrafted,
              guided by calm design and emotional balance.
              Because care should be felt — not explained.
            </p>
          </motion.div>

          {/* More than flowers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F5E6E8] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#B76E79]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D]">
                More than flowers
              </h2>
            </div>
            <p className="text-lg text-[#2D2D2D]/70 leading-relaxed pl-16">
              HOKKAIDO is about connection.
              Between moments and memories.
              Between intention and expression.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Image Showcase */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="/images/hokkaido-collection-banner.png" 
          alt="HOKKAIDO Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#FFFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
              What we believe
            </h2>
            <p className="text-[#2D2D2D]/60 text-sm max-w-2xl mx-auto">
              The principles that guide every HOKKAIDO creation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Intentional Design",
                description: "Every element serves a purpose. No excess, only essence."
              },
              {
                title: "Emotional Honesty",
                description: "We create for real moments, real people, real feelings."
              },
              {
                title: "Timeless Beauty",
                description: "Trends fade. True elegance endures."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-[1px] bg-[#B76E79] mx-auto mb-6" />
                <h3 className="text-xl font-serif text-[#2D2D2D] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#2D2D2D]/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D]">
              Based in Bangalore
            </h2>
            <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto leading-relaxed">
              Serving those who value thoughtful expression and quiet luxury.
              Every bouquet is created with care, delivered with intention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={handleWhatsAppContact}
                className="bg-[#25D366] text-white px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Get in Touch
              </button>
              <Link
                to="/collections/luxury"
                className="border-2 border-[#B76E79] text-[#B76E79] px-10 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#B76E79] hover:text-white transition-all flex items-center justify-center"
              >
                View Collections
              </Link>
            </div>

            <p className="text-xs text-[#2D2D2D]/40 uppercase tracking-wider pt-8">
              @hokkaido_bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#2D2D2D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
              "In every bouquet, a story.<br />
              In every story, a feeling.<br />
              In every feeling, HOKKAIDO."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
