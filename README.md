# 🌸 HOKKAIDO - Premium Luxury Bouquet Brand

> **"Where emotions bloom"**

A luxury bouquet e-commerce platform with WhatsApp-first ordering, featuring Valentine's Day specials, custom bouquet builder, and premium gift packages.

---

## 🎯 **Project Overview**

HOKKAIDO is a premium bouquet brand focused on emotion-driven, luxury floral arrangements with a WhatsApp-first ordering system. The platform features seasonal promotions, custom bouquet creation, and beautifully curated gift packages.

### **Live Features:**
- 💝 Valentine's Day Special (25% OFF)
- 🌹 Curated Collections (Birthday, Love, Luxury)
- ✨ Custom Bouquet Builder
- 📱 WhatsApp Integration
- 🎁 Proposal Gift Packages
- 📖 Brand Story & Philosophy

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- Git

### **Installation**

```bash
# Clone the repository
git clone <repository-url>
cd HOKKAIDO

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### **Running the Application**

#### **Frontend (Development)**
```bash
cd frontend
npm run dev
# Opens at: http://localhost:5173
```

#### **Backend (Development)**
```bash
cd backend
npm run dev
# Runs at: http://localhost:5000
```

#### **Production Build**
```bash
cd frontend
npm run build
npm run preview
```

---

## 📁 **Project Structure**

```
HOKKAIDO/
├── frontend/                 # React + Vite frontend
│   ├── public/
│   │   └── images/          # Product & banner images
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── layout/      # Navbar, Footer
│   │   │   └── product/     # ProductCard, etc.
│   │   ├── contexts/        # React Context (Cart, etc.)
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Valentines.tsx
│   │   │   ├── Collections.tsx
│   │   │   ├── CustomBouquet.tsx
│   │   │   ├── About.tsx
│   │   │   └── ...
│   │   ├── App.tsx          # Main app component
│   │   ├── index.css        # Global styles + theme
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                  # Node.js + Express backend
│   ├── src/
│   │   └── index.ts         # API server & product data
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                # This file
```

---

## 🎨 **Design System**

### **Color Palette**

#### **Valentine's Romantic Theme**
```css
--color-hokkaido-burgundy: #8B1538;   /* Deep romantic red */
--color-hokkaido-wine: #A0153E;       /* Rich passionate red */
--color-hokkaido-gold: #C9A961;       /* Warm luxury gold */
--color-hokkaido-bronze: #D4AF37;     /* Rich metallic accent */
--color-hokkaido-charcoal: #1A1A1A;   /* Deep black */
--color-hokkaido-cream: #F5E6D3;      /* Parchment beige */
--color-hokkaido-pearl: #F8F8F8;      /* Soft white */
```

### **Typography**
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### **Spacing**
- Section padding: 96px (py-24)
- Grid gaps: 32px (gap-8)
- Max width: 1280px (max-w-7xl)

---

## 🗺️ **Site Map**

```
HOKKAIDO
│
├── / (Home)
│   └── Valentine's Day Special
│       ├── Hero Section
│       ├── 3 Packages (25% OFF)
│       ├── Why Choose HOKKAIDO
│       └── Final CTA
│
├── /collections/:category
│   ├── /collections/birthday
│   ├── /collections/love
│   └── /collections/luxury
│
├── /custom-bouquet
│   └── Custom order form
│
├── /about
│   └── Brand story & philosophy
│
├── /valentines
│   └── Valentine's Special (same as /)
│
└── Legacy Pages
    ├── /shop
    ├── /product/:slug
    ├── /cart
    └── /checkout
```

---

## 💝 **Valentine's Day Special**

### **Current Promotion**
- **Discount:** 25% OFF all packages
- **Valid Until:** February 14, 2026
- **Packages:**
  1. Ladies Proposal Package - ₹4,499 (was ₹5,999)
  2. Men Proposal Package - ₹5,249 (was ₹6,999)
  3. Couple's Ultimate Package - ₹8,999 (was ₹11,999)

### **Features**
- Handwritten message cards
- Premium gift box packaging
- Fresh premium bouquets
- Luxury add-ons (chocolates, perfume, etc.)

---

## 📱 **WhatsApp Integration**

### **Business Number**
+91 9995071211

### **Integration Points**
1. Home page hero CTA
2. Valentine's package order buttons
3. Collection product cards
4. Custom bouquet form submission
5. Sticky floating button (all pages)

### **Message Format**
```
Hi! I'd like to order the "Ladies Proposal Package" Valentine's Special (₹4,499) from HOKKAIDO.
```

---

## 🛍️ **Collections**

### **Birthday Bouquets**
- Cheerful Blooms - ₹999
- Birthday Joy - ₹1,499
- Celebration Bouquet - ₹2,999

### **Love & Proposal**
- Sweet Romance - ₹1,499
- Passionate Love - ₹2,999
- Proposal Perfect - ₹4,999

### **Luxury Roses**
- Elegant Dozen - ₹2,999
- Grand Gesture - ₹4,999
- Ultimate Luxury - ₹7,999

---

## ✨ **Custom Bouquet Builder**

### **Form Fields**
- Personal Information (Name, Phone)
- Occasion (dropdown)
- Preferred Flowers
- Color Theme
- Budget Range
- Delivery Date
- Special Requests

### **Submission**
- Formats data into WhatsApp message
- Opens WhatsApp with pre-filled details
- Direct conversation for custom quote

---

## 🎯 **Key Features**

### **1. Emotion-First Design**
- Romantic gradients
- Soft, warm colors
- Elegant typography
- Minimal clutter

### **2. WhatsApp-First Ordering**
- No complex checkout
- Personal conversation
- Quick response
- Trust building

### **3. Premium Positioning**
- Luxury aesthetic
- High-quality images
- Refined copy
- Exclusive feel

### **4. Mobile-Optimized**
- Responsive design
- Touch-friendly buttons
- Fast loading
- Smooth animations

---

## 🔧 **Tech Stack**

### **Frontend**
- **Framework:** React 18 + Vite
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** React Context API
- **Language:** TypeScript

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Dev Tools:** ts-node-dev
- **CORS:** Enabled for frontend

### **Development Tools**
- **Package Manager:** npm
- **Build Tool:** Vite
- **TypeScript:** v5.9.3
- **ESLint:** Code quality

---

## 📦 **Dependencies**

### **Frontend**
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.29.1",
  "framer-motion": "^11.18.0",
  "lucide-react": "^0.469.0",
  "tailwindcss": "^4.1.7"
}
```

### **Backend**
```json
{
  "express": "^4.21.2",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "typescript": "^5.9.3"
}
```

---

## 🌐 **API Endpoints**

### **Base URL**
`http://localhost:5000`

### **Endpoints**

#### **Get All Products**
```
GET /api/products
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "slug": "product-slug",
    "price": 999,
    "category": "birthday",
    "image": "image-url",
    "description": "Product description",
    "includes": ["item1", "item2"],
    "perfectFor": ["occasion1", "occasion2"]
  }
]
```

---

## 🎨 **Image Assets**

### **Location**
`frontend/public/images/`

### **Key Images**
- `hokkaido-hero-banner.jpg` - Main hero bouquet
- `hokkaido-collection-banner.png` - Complete collection
- `valentines-packages.jpg` - Proposal packages
- `valentine-roses-gift.jpg` - Red roses with gift
- `valentine-love-letter.jpg` - Handwritten letter
- `valentine-luxury-mirror.jpg` - Gold mirror with pearls
- `valentine-scroll-letter.jpg` - Vintage scroll
- `valentine-romantic-setup.jpg` - Complete romantic scene

---

## 🚀 **Deployment**

### **Frontend (Vercel/Netlify)**

#### **Vercel**
```bash
npm install -g vercel
cd frontend
vercel
```

#### **Netlify**
```bash
npm install -g netlify-cli
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

### **Backend (Heroku/Railway)**

#### **Environment Variables**
```env
PORT=5000
NODE_ENV=production
```

#### **Deploy to Railway**
```bash
railway login
railway init
railway up
```

---

## 📊 **Business Model**

### **Revenue Streams**
1. **Individual Orders** (₹999 - ₹7,999)
2. **Custom Bouquets** (₹2,000 - ₹10,000+)
3. **Corporate & Events** (₹10,000+)

### **Order Flow**
1. Customer sees bouquet on Instagram/Website
2. Clicks WhatsApp button
3. Personal conversation with team
4. Payment via UPI/Bank transfer
5. Delivery with handwritten note

### **Marketing Channels**
- Instagram: @hokkaido_bangalore
- WhatsApp status updates
- Customer testimonials
- Referral program

---

## 🎯 **Brand Voice**

### **Tone**
- Elegant & refined
- Warm & personal
- Romantic & emotional
- Premium & exclusive

### **Key Messages**
- "Where emotions bloom"
- "Pure love, expressed through flowers"
- "Some moments deserve more than words"
- "True luxury is never loud"

---

## 📱 **Social Media**

- **Instagram:** @hokkaido_bangalore
- **WhatsApp:** +91 9995071211
- **Location:** Bangalore, India

---

## 🔐 **Environment Variables**

### **Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000
VITE_WHATSAPP_NUMBER=919995071211
```

### **Backend (.env)**
```env
PORT=5000
NODE_ENV=development
```

---

## 🐛 **Troubleshooting**

### **Port Already in Use**
```bash
# Kill process on port 5173 (frontend)
npx kill-port 5173

# Kill process on port 5000 (backend)
npx kill-port 5000
```

### **Module Not Found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Build Errors**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

## 📝 **Development Workflow**

### **1. Feature Development**
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test locally

# Commit and push
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

### **2. Code Quality**
```bash
# Run linter
npm run lint

# Format code
npm run format
```

### **3. Testing**
```bash
# Test frontend
cd frontend
npm run dev

# Test backend
cd backend
npm run dev

# Test WhatsApp integration
# Test all CTAs
# Test mobile responsiveness
```

---

## 🎓 **Learning Resources**

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Express.js](https://expressjs.com)

---

## 📄 **License**

This project is proprietary and confidential.

---

## 👥 **Contact**

**HOKKAIDO Team**
- **WhatsApp:** +91 9995071211
- **Instagram:** @hokkaido_bangalore
- **Location:** Bangalore, India

---

## 🙏 **Acknowledgments**

- Design inspiration from luxury floral brands
- Color palette extracted from romantic imagery
- Typography choices for emotional impact
- WhatsApp integration for personal touch

---

## 📈 **Roadmap**

### **Phase 1: Core Launch** ✅
- ✅ Home page redesign
- ✅ Valentine's special
- ✅ Collections pages
- ✅ Custom bouquet form
- ✅ WhatsApp integration
- ✅ About page

### **Phase 2: Content** (Next)
- ⏳ Corporate & Events page
- ⏳ FAQ section
- ⏳ Testimonials
- ⏳ Blog/Stories

### **Phase 3: Optimization**
- ⏳ SEO optimization
- ⏳ Performance tuning
- ⏳ Analytics integration
- ⏳ A/B testing

### **Phase 4: Automation**
- ⏳ Payment gateway
- ⏳ Order management system
- ⏳ Customer database
- ⏳ Email notifications

---

## 🎉 **Current Status**

**✅ LIVE & READY FOR VALENTINE'S SEASON!**

- Valentine's Special as home page
- 25% OFF promotion active
- WhatsApp ordering functional
- Mobile-optimized
- Premium aesthetic
- 5 romantic images integrated
- Burgundy & gold theme

**Ready to dominate Valentine's Day 2026!** 💝🌹

---

**Built with ❤️ by the HOKKAIDO team**

*"Where emotions bloom"* 🌸
