import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function CustomBouquet() {
  const whatsappNumber = "919995071211";

  const [formData, setFormData] = useState({
    occasion: '',
    flowers: '',
    colors: '',
    budget: '',
    deliveryDate: '',
    message: '',
    name: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
🌸 *CUSTOM BOUQUET REQUEST*

*Name:* ${formData.name}
*Phone:* ${formData.phone}

*Occasion:* ${formData.occasion}
*Preferred Flowers:* ${formData.flowers}
*Color Theme:* ${formData.colors}
*Budget Range:* ${formData.budget}
*Delivery Date:* ${formData.deliveryDate}

*Special Message:*
${formData.message}

Looking forward to creating something beautiful! 💐
    `.trim();

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[#FFFBF7] via-[#F5E6E8] to-[#FFFBF7]">
      {/* Header */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B76E79]/10 text-[#B76E79] mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
            Create Your Perfect Bouquet
          </h1>
          <p className="text-lg text-[#2D2D2D]/60 max-w-2xl mx-auto px-4">
            Tell us about your vision, and we'll craft a unique arrangement just for you
          </p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 shadow-xl space-y-8"
          >
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif text-[#2D2D2D] border-b border-[#F5E6E8] pb-3">
                Your Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
            </div>

            {/* Bouquet Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif text-[#2D2D2D] border-b border-[#F5E6E8] pb-3">
                Bouquet Details
              </h2>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Occasion *
                </label>
                <select
                  name="occasion"
                  required
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors"
                >
                  <option value="">Select an occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Thank You">Thank You</option>
                  <option value="Get Well Soon">Get Well Soon</option>
                  <option value="Just Because">Just Because</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Preferred Flowers
                </label>
                <input
                  type="text"
                  name="flowers"
                  value={formData.flowers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors"
                  placeholder="e.g., Roses, Lilies, Orchids, Mixed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Color Theme
                </label>
                <input
                  type="text"
                  name="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors"
                  placeholder="e.g., Red & White, Pastels, Vibrant"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="₹1,000 - ₹2,000">₹1,000 - ₹2,000</option>
                    <option value="₹2,000 - ₹3,500">₹2,000 - ₹3,500</option>
                    <option value="₹3,500 - ₹5,000">₹3,500 - ₹5,000</option>
                    <option value="₹5,000 - ₹7,500">₹5,000 - ₹7,500</option>
                    <option value="₹7,500+">₹7,500+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                    Delivery Date *
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    required
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Special Requests or Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#F5E6E8] focus:border-[#B76E79] focus:outline-none transition-colors resize-none"
                  placeholder="Any special requests, preferences, or message to include with the bouquet..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#B76E79] text-white py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#2D2D2D] transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Create My Bouquet
              </button>
              <p className="text-xs text-[#2D2D2D]/50 text-center mt-4">
                We'll contact you on WhatsApp to discuss your custom bouquet
              </p>
            </div>
          </motion.form>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-serif text-[#B76E79] mb-2">24h</div>
              <p className="text-sm text-[#2D2D2D]/60">Response Time</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-[#B76E79] mb-2">100%</div>
              <p className="text-sm text-[#2D2D2D]/60">Fresh Flowers</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-[#B76E79] mb-2">Free</div>
              <p className="text-sm text-[#2D2D2D]/60">Handwritten Note</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
