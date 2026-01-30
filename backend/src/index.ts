import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const products = [
  // ========================================
  // LADIES PROPOSAL PACKAGES
  // ========================================
  
  // Classic Tier
  {
    id: 1,
    name: 'Classic Ladies Proposal Package',
    slug: 'classic-ladies-proposal-package',
    price: 2999,
    description: 'A beautiful entry into luxury proposal gifting. Perfect for expressing your love with elegance and thoughtfulness.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Fresh flower bouquet (12 roses)',
      'Premium chocolates box',
      'Scented candle',
      'Classic white gift box',
      'Handwritten message card'
    ],
    perfectFor: ['Proposals', 'First Anniversary', 'Birthday'],
    popular: false
  },
  
  // Signature Tier (Most Popular)
  {
    id: 2,
    name: 'Signature Ladies Proposal Package',
    slug: 'signature-ladies-proposal-package',
    price: 4999,
    description: 'Our most popular choice! A perfectly curated package combining premium flowers, beauty essentials, and luxury presentation.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Premium flower arrangement (24 roses)',
      'Ferrero Rocher chocolate box',
      'Luxury lip care set',
      'Premium scented candle',
      'Elegant gift box with ribbon',
      'Personalized message card',
      'Decorative keepsake item'
    ],
    perfectFor: ['Proposals', 'Anniversaries', 'Romantic Surprises'],
    popular: true
  },
  
  // Luxury Tier
  {
    id: 3,
    name: 'Luxury Ladies Proposal Package',
    slug: 'luxury-ladies-proposal-package',
    price: 7999,
    description: 'The ultimate expression of love. An exquisite collection of premium items in a stunning luxury presentation.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Luxury flower arrangement (50+ premium roses)',
      'Godiva premium chocolate selection',
      'High-end beauty & skincare set',
      'Luxury scented candle collection',
      'Designer jewelry box',
      'Deluxe gift box with silk ribbon',
      'Gold-foil message card',
      'Premium photo frame'
    ],
    perfectFor: ['Proposals', 'Milestone Anniversaries', 'Grand Gestures'],
    popular: false
  },

  // ========================================
  // MEN PROPOSAL PACKAGES
  // ========================================
  
  // Classic Tier
  {
    id: 4,
    name: 'Classic Men Proposal Package',
    slug: 'classic-men-proposal-package',
    price: 3499,
    description: 'A sophisticated gift package designed for the modern gentleman. Thoughtfully curated with premium essentials.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Fresh flower arrangement (minimal style)',
      'Premium chocolates',
      'Grooming essential',
      'Classic black gift box',
      'Personal message card'
    ],
    perfectFor: ['Proposals', 'Anniversaries', 'Special Occasions'],
    popular: false
  },
  
  // Signature Tier (Most Popular)
  {
    id: 5,
    name: 'Signature Men Proposal Package',
    slug: 'signature-men-proposal-package',
    price: 5999,
    description: 'Premium gifting for the discerning gentleman. Features luxury grooming products and elegant accessories.',
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Premium flower bouquet',
      'Branded perfume (50ml)',
      'Ferrero Rocher chocolates',
      'Leather wallet',
      'Premium gift box packaging',
      'Personalized message card',
      'Elegant keepsake item'
    ],
    perfectFor: ['Proposals', 'Special Surprises', 'Thoughtful Gifting'],
    popular: true
  },
  
  // Luxury Tier
  {
    id: 6,
    name: 'Luxury Men Proposal Package',
    slug: 'luxury-men-proposal-package',
    price: 9999,
    description: 'The pinnacle of masculine luxury gifting. An extraordinary collection for extraordinary moments.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Luxury flower arrangement',
      'Designer perfume (100ml)',
      'Gourmet chocolate selection',
      'Premium watch',
      'Leather accessories set',
      'Deluxe gift box with premium finish',
      'Gold-embossed message card',
      'Luxury grooming kit'
    ],
    perfectFor: ['Proposals', 'Milestone Celebrations', 'Grand Gestures'],
    popular: false
  },

  // ========================================
  // COUPLE PACKAGES
  // ========================================
  
  {
    id: 7,
    name: 'Ultimate Couple Package',
    slug: 'ultimate-couple-package',
    price: 9999,
    description: 'The perfect combination of our Signature packages. Celebrate together with matching luxury gift sets for both partners.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Complete Signature Ladies Package',
      'Complete Signature Men Package',
      'Dual premium gift box presentation',
      'Coordinated flower arrangements',
      'Personalized couple message cards',
      'Special anniversary keepsake'
    ],
    perfectFor: ['Engagements', 'Anniversaries', 'Valentine\'s Day', 'Special Celebrations'],
    popular: true
  },
  
  {
    id: 8,
    name: 'Deluxe Anniversary Package',
    slug: 'deluxe-anniversary-package',
    price: 12999,
    description: 'Celebrate your love story with our most luxurious package featuring premium flowers, champagne, gourmet treats, and exclusive keepsakes.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Premium rose bouquet (100+ roses)',
      'Champagne or premium sparkling wine',
      'Gourmet chocolate selection',
      'Luxury scented candles set',
      'Personalized photo album',
      'Deluxe dual gift boxes with silk ribbon',
      'Custom message cards with gold foil',
      'Anniversary keepsake jewelry'
    ],
    perfectFor: ['Anniversaries', 'Milestone Celebrations', 'Romantic Getaways'],
    popular: false
  },

  {
    id: 9,
    name: 'Romantic Escape Package',
    slug: 'romantic-escape-package',
    price: 8999,
    description: 'Perfect for couples planning a romantic getaway. Includes everything you need for an unforgettable experience.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    category: 'Proposal Package',
    type: 'package',
    includes: [
      'Coordinated flower arrangements (His & Hers)',
      'Premium wine or champagne',
      'Gourmet chocolate & snack selection',
      'Luxury bath & body set',
      'Scented candles for ambiance',
      'Romantic playlist curated card',
      'Premium dual gift boxes',
      'Couple\'s keepsake photo frame'
    ],
    perfectFor: ['Romantic Getaways', 'Weekend Surprises', 'Special Dates'],
    popular: false
  },

  // ========================================
  // ADD-ON GIFTS (Individual Flowers)
  // ========================================
  
  {
    id: 10,
    name: 'Royal Red Roses Bouquet',
    slug: 'royal-red-roses',
    price: 1499,
    description: 'A classic bouquet of 24 premium red roses, elegantly wrapped. Perfect as a standalone gift or package add-on.',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Flowers',
    type: 'flower',
    includes: ['24 premium red roses', 'Elegant wrapping', 'Care instructions'],
    perfectFor: ['Add-on Gift', 'Simple Gesture', 'Last-minute Gift']
  },
  
  {
    id: 11,
    name: 'Elegant White Lilies',
    slug: 'elegant-white-lilies',
    price: 1799,
    description: 'Pure white lilies symbolizing devotion and commitment. A sophisticated choice for special moments.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Flowers',
    type: 'flower',
    includes: ['Fresh white lilies', 'Premium wrapping', 'Greeting card'],
    perfectFor: ['Add-on Gift', 'Sympathy', 'Elegant Gesture']
  },
  
  {
    id: 12,
    name: 'Pink Romance Bouquet',
    slug: 'pink-romance-bouquet',
    price: 1299,
    description: 'Soft pink roses and baby\'s breath create a romantic and delicate arrangement.',
    image: 'https://images.unsplash.com/photo-1520483601560-391776ce0df3?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Flowers',
    type: 'flower',
    includes: ['Pink roses', 'Baby\'s breath', 'Satin ribbon'],
    perfectFor: ['Add-on Gift', 'Sweet Gesture', 'Thank You Gift']
  },
  
  {
    id: 13,
    name: 'Seasonal Mixed Bouquet',
    slug: 'seasonal-mixed-bouquet',
    price: 999,
    description: 'A vibrant mix of seasonal flowers, carefully curated by our florists.',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Flowers',
    type: 'flower',
    includes: ['Seasonal flowers', 'Mixed arrangement', 'Simple wrapping'],
    perfectFor: ['Add-on Gift', 'Casual Gift', 'Brightening Someone\'s Day']
  },

  {
    id: 14,
    name: 'Luxury Orchid Arrangement',
    slug: 'luxury-orchid-arrangement',
    price: 2499,
    description: 'Exotic orchids arranged in a premium presentation. A symbol of rare beauty and elegance.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800',
    category: 'Premium Flowers',
    type: 'flower',
    includes: ['Premium orchids', 'Decorative vase', 'Care guide'],
    perfectFor: ['Add-on Gift', 'Luxury Gesture', 'Special Occasions']
  }
];

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/products/:slug', (req: Request, res: Response) => {
  const product = products.find(p => p.slug === req.params.slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Serve static files from React app (for production)
import path from 'path';

if (process.env.NODE_ENV === 'production') {
  // Serve static files from frontend build
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));
  
  // Handle React routing - return index.html for all non-API routes
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
