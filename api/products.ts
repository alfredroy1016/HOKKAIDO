import { VercelRequest, VercelResponse } from '@vercel/node';

const products = [
  // Birthday Collection
  {
    id: 1,
    name: 'Cheerful Blooms',
    slug: 'cheerful-blooms',
    price: 999,
    category: 'birthday',
    image: '/images/hokkaido-hero-banner.jpg',
    description: 'Bright and cheerful flowers to celebrate their special day',
    includes: ['Fresh seasonal flowers', 'Birthday card', 'Gift wrapping'],
    perfectFor: ['Birthday celebrations', 'Surprise gifts']
  },
  {
    id: 2,
    name: 'Birthday Joy',
    slug: 'birthday-joy',
    price: 1499,
    category: 'birthday',
    image: '/images/hokkaido-collection-banner.png',
    description: 'A joyful arrangement with premium blooms',
    includes: ['Premium flowers', 'Chocolates', 'Birthday card', 'Luxury wrapping'],
    perfectFor: ['Milestone birthdays', 'Special celebrations']
  },
  {
    id: 3,
    name: 'Celebration Bouquet',
    slug: 'celebration-bouquet',
    price: 2999,
    category: 'birthday',
    image: '/images/valentines-packages.jpg',
    description: 'Grand celebration with luxury flowers and gifts',
    includes: ['Luxury flower arrangement', 'Premium chocolates', 'Champagne', 'Gift box'],
    perfectFor: ['Grand celebrations', 'VIP gifts']
  },
  
  // Love & Proposal Collection
  {
    id: 4,
    name: 'Sweet Romance',
    slug: 'sweet-romance',
    price: 1499,
    category: 'love',
    image: '/images/valentine-love-letter.jpg',
    description: 'Delicate roses with handwritten love letter',
    includes: ['Fresh roses', 'Handwritten letter', 'Romantic card'],
    perfectFor: ['First dates', 'Romantic gestures', 'Anniversaries']
  },
  {
    id: 5,
    name: 'Passionate Love',
    slug: 'passionate-love',
    price: 2999,
    category: 'love',
    image: '/images/valentine-luxury-mirror.jpg',
    description: 'Luxury roses with pearls and gold accents',
    includes: ['Premium roses', 'Pearl accessories', 'Luxury packaging', 'Love note'],
    perfectFor: ['Proposals', 'Anniversaries', 'Grand gestures']
  },
  {
    id: 6,
    name: 'Proposal Perfect',
    slug: 'proposal-perfect',
    price: 4999,
    category: 'love',
    image: '/images/valentine-romantic-setup.jpg',
    description: 'Complete romantic setup for the big question',
    includes: ['Luxury roses', 'Candles', 'Champagne', 'Ring holder', 'Complete setup'],
    perfectFor: ['Marriage proposals', 'Engagement celebrations']
  },
  
  // Luxury Roses Collection
  {
    id: 7,
    name: 'Elegant Dozen',
    slug: 'elegant-dozen',
    price: 2999,
    category: 'luxury',
    image: '/images/valentine-roses-gift.jpg',
    description: 'Classic dozen roses in premium presentation',
    includes: ['12 premium roses', 'Luxury box', 'Ribbon', 'Message card'],
    perfectFor: ['Elegant gifts', 'Classic romance']
  },
  {
    id: 8,
    name: 'Grand Gesture',
    slug: 'grand-gesture',
    price: 4999,
    category: 'luxury',
    image: '/images/valentine-scroll-letter.jpg',
    description: 'Impressive arrangement for grand occasions',
    includes: ['24 luxury roses', 'Premium packaging', 'Accessories', 'Personal note'],
    perfectFor: ['Grand gestures', 'VIP occasions']
  },
  {
    id: 9,
    name: 'Ultimate Luxury',
    slug: 'ultimate-luxury',
    price: 7999,
    category: 'luxury',
    image: '/images/valentine-romantic-setup.jpg',
    description: 'The pinnacle of luxury floral arrangements',
    includes: ['50 premium roses', 'Gold accents', 'Luxury box', 'Champagne', 'Complete experience'],
    perfectFor: ['Ultimate luxury', 'Once-in-a-lifetime moments']
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Return all products
  return res.status(200).json(products);
}
