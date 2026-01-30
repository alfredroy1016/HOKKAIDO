import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    // Payment Info
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    // Delivery
    deliveryDate: '',
    deliveryTime: 'morning',
    specialInstructions: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process order
      alert('Order placed successfully! (This is a demo)');
      clearCart();
      navigate('/');
    }
  };

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-hokkaido-dark mb-4">Your cart is empty</h1>
        <Link to="/shop" className="text-hokkaido-red hover:underline">Continue Shopping</Link>
      </div>
    );
  }

  const shippingCost = totalPrice > 150 ? 0 : 15;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shippingCost + tax;

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link to="/cart" className="inline-flex items-center gap-2 text-hokkaido-dark/60 hover:text-hokkaido-red transition-colors mb-8 uppercase tracking-widest text-xs font-bold">
        <ChevronLeft className="w-4 h-4" /> Back to Cart
      </Link>

      <h1 className="text-4xl md:text-5xl font-serif text-hokkaido-dark mb-12">Checkout</h1>

      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                step >= s ? 'bg-hokkaido-red text-white' : 'bg-hokkaido-dark/10 text-hokkaido-dark/40'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-16 h-0.5 ${step > s ? 'bg-hokkaido-red' : 'bg-hokkaido-dark/10'}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-20 mt-4">
          <span className={`text-xs uppercase tracking-widest ${step >= 1 ? 'text-hokkaido-dark font-bold' : 'text-hokkaido-dark/40'}`}>
            Shipping
          </span>
          <span className={`text-xs uppercase tracking-widest ${step >= 2 ? 'text-hokkaido-dark font-bold' : 'text-hokkaido-dark/40'}`}>
            Delivery
          </span>
          <span className={`text-xs uppercase tracking-widest ${step >= 3 ? 'text-hokkaido-dark font-bold' : 'text-hokkaido-dark/40'}`}>
            Payment
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-serif text-hokkaido-dark mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors bg-hokkaido-dark/5"
                      readOnly
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Delivery Options */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-serif text-hokkaido-dark mb-6">Delivery Options</h2>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                    Preferred Delivery Date *
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    required
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-4 font-bold">
                    Delivery Time *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'morning', label: 'Morning (8 AM - 12 PM)' },
                      { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
                      { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="deliveryTime"
                          value={option.value}
                          checked={formData.deliveryTime === option.value}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-hokkaido-red focus:ring-hokkaido-red"
                        />
                        <span className="text-hokkaido-dark group-hover:text-hokkaido-red transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any special delivery instructions or gift message..."
                    className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors resize-none"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-hokkaido-red" />
                  <h2 className="text-2xl font-serif text-hokkaido-dark">Payment Information</h2>
                </div>

                <div className="bg-hokkaido-cream/50 p-4 flex items-center gap-2 text-sm text-hokkaido-dark/70">
                  <Lock className="w-4 h-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength={19}
                    className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    required
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      required
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      maxLength={5}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-hokkaido-dark/70 mb-2 font-bold">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      required
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength={4}
                      className="w-full px-4 py-3 border border-hokkaido-dark/10 focus:border-hokkaido-red focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-4 border border-hokkaido-dark/20 text-hokkaido-dark hover:bg-hokkaido-dark hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="flex-grow bg-hokkaido-red text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-hokkaido-dark transition-all duration-300"
              >
                {step === 3 ? 'Place Order' : 'Continue'}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-hokkaido-cream p-8 sticky top-32">
            <h2 className="text-2xl font-serif text-hokkaido-dark mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                  <div className="flex-grow">
                    <h4 className="text-sm font-serif text-hokkaido-dark">{item.name}</h4>
                    <p className="text-xs text-hokkaido-dark/50">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-hokkaido-red">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 py-6 border-t border-hokkaido-dark/10">
              <div className="flex justify-between text-hokkaido-dark/70">
                <span>Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-hokkaido-dark/70">
                <span>Shipping</span>
                <span className="font-medium">
                  {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-hokkaido-dark/70">
                <span>Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold text-hokkaido-dark pt-6 border-t border-hokkaido-dark/10">
              <span>Total</span>
              <span className="text-hokkaido-red">${finalTotal.toFixed(2)}</span>
            </div>

            {totalPrice < 150 && (
              <p className="mt-6 text-xs text-hokkaido-dark/50">
                Add ${(150 - totalPrice).toFixed(2)} more for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
