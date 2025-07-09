// Mock data for products
export const mockProducts = [
  {
    id: 'cosrx-snail-mucin',
    name: 'COSRX Advanced Snail 96 Mucin Power Essence',
    brand: 'COSRX',
    price: 24.99,
    originalPrice: 34.99,
    discount: 30,
    rating: 4.8,
    reviewCount: 1256,
    image: '/src/assets/2rbG8gMeqIk4.jpg',
    images: ['/src/assets/2rbG8gMeqIk4.jpg', '/src/assets/6n4Vko4m3zg8.jpg'],
    category: 'skincare',
    skinType: ['all', 'dry', 'sensitive'],
    skinConcern: ['hydration', 'anti-aging'],
    badges: ['bestseller'],
    inStock: true,
    description: 'A lightweight essence formulated with 96% snail secretion filtrate to repair and regenerate damaged skin.',
    ingredients: 'Snail Secretion Filtrate, Betaine, Butylene Glycol, 1,2-Hexanediol, Sodium Polyacrylate',
    howToUse: 'Apply a small amount to clean skin and gently pat until absorbed.',
    isBestseller: true,
    isNew: false
  },
  {
    id: 'beauty-of-joseon-glow-deep-serum',
    name: 'Beauty of Joseon Glow Deep Serum',
    brand: 'Beauty of Joseon',
    price: 19.99,
    originalPrice: 29.99,
    discount: 30,
    rating: 4.9,
    reviewCount: 2103,
    image: '/src/assets/6Yy46fT32OQN.jpg',
    images: ['/src/assets/6Yy46fT32OQN.jpg', '/src/assets/kXo57mRMU4Hy.jpg'],
    category: 'skincare',
    skinType: ['all', 'oily', 'combination'],
    skinConcern: ['brightening', 'dark-spots'],
    badges: ['bestseller', 'new'],
    inStock: true,
    description: 'A brightening serum with alpha arbutin and niacinamide to reduce dark spots and even skin tone.',
    ingredients: 'Alpha Arbutin, Niacinamide, Rice Bran Water, Alpha Bisabolol',
    howToUse: 'Apply 2-3 drops to face after cleansing and toning.',
    isBestseller: true,
    isNew: true
  },
  {
    id: 'innisfree-green-tea-seed-serum',
    name: 'Innisfree Green Tea Seed Serum',
    brand: 'Innisfree',
    price: 22.99,
    originalPrice: 32.99,
    discount: 30,
    rating: 4.7,
    reviewCount: 889,
    image: '/src/assets/a1t5rl8Am8UU.jpg',
    images: ['/src/assets/a1t5rl8Am8UU.jpg', '/src/assets/s5z2AQ1N4ieN.jpg'],
    category: 'skincare',
    skinType: ['all', 'oily', 'combination'],
    skinConcern: ['hydration', 'antioxidant'],
    badges: ['organic', 'vegan'],
    inStock: true,
    description: 'A hydrating serum infused with fresh green tea from Jeju Island for healthy, glowing skin.',
    ingredients: 'Green Tea Extract, Hyaluronic Acid, Panthenol, Glycerin',
    howToUse: 'Apply to clean skin morning and evening.',
    isBestseller: false,
    isNew: false
  },
  {
    id: 'klairs-vitamin-c-serum',
    name: 'Klairs Freshly Juiced Vitamin Drop',
    brand: 'Klairs',
    price: 18.99,
    originalPrice: 26.99,
    discount: 30,
    rating: 4.6,
    reviewCount: 1567,
    image: '/src/assets/9v05L4Ljdt5H.jpg',
    images: ['/src/assets/9v05L4Ljdt5H.jpg', '/src/assets/G9qHYc5fF96P.jpg'],
    category: 'skincare',
    skinType: ['all', 'dull'],
    skinConcern: ['brightening', 'anti-aging'],
    badges: ['vegan', 'crueltyfree'],
    inStock: true,
    description: 'A gentle vitamin C serum that brightens skin and provides antioxidant protection.',
    ingredients: 'Ascorbic Acid, Centella Asiatica Extract, Sodium Hyaluronate',
    howToUse: 'Use in the evening after cleansing. Start with 2-3 times per week.',
    isBestseller: false,
    isNew: false
  },
  {
    id: 'laneige-water-sleeping-mask',
    name: 'Laneige Water Sleeping Mask',
    brand: 'Laneige',
    price: 32.99,
    originalPrice: 45.99,
    discount: 30,
    rating: 4.8,
    reviewCount: 2234,
    image: '/src/assets/j8HlauijWQHl.jpg',
    images: ['/src/assets/j8HlauijWQHl.jpg', '/src/assets/CC3aUZOqWdHP.jpg'],
    category: 'skincare',
    skinType: ['all', 'dry'],
    skinConcern: ['hydration', 'overnight-care'],
    badges: ['bestseller'],
    inStock: true,
    description: 'An overnight hydrating mask that delivers intense moisture while you sleep.',
    ingredients: 'Hydro Ionized Mineral Water, Sleepscent, Moisture Wrap',
    howToUse: 'Apply as the last step of your evening routine. Leave on overnight.',
    isBestseller: true,
    isNew: false
  },
  {
    id: 'etude-house-sunprise-sunscreen',
    name: 'Etude House Sunprise Mild Airy Finish',
    brand: 'Etude House',
    price: 15.99,
    originalPrice: 22.99,
    discount: 30,
    rating: 4.5,
    reviewCount: 1123,
    image: '/src/assets/XTsJvl7EMC3C.jpg',
    images: ['/src/assets/XTsJvl7EMC3C.jpg', '/src/assets/Cb6O3WQrCIB4.jpg'],
    category: 'skincare',
    skinType: ['all', 'oily'],
    skinConcern: ['sun-protection'],
    badges: ['new'],
    inStock: true,
    description: 'A lightweight sunscreen with SPF50+ PA+++ that provides broad spectrum protection.',
    ingredients: 'Zinc Oxide, Titanium Dioxide, Niacinamide, Centella Asiatica',
    howToUse: 'Apply generously 15 minutes before sun exposure. Reapply every 2 hours.',
    isBestseller: false,
    isNew: true
  }
];

// Mock data for blog posts
export const mockBlogPosts = [
  {
    id: 'korean-skincare-routine-guide',
    title: 'The Complete Guide to Korean Skincare Routine',
    slug: 'korean-skincare-routine-guide',
    excerpt: 'Discover the secrets behind the famous 10-step Korean skincare routine and how to adapt it for your skin type.',
    content: 'Full article content here...',
    featuredImage: '/src/assets/hW9LMdB8vJ8J.jpg',
    category: 'routines',
    tags: ['skincare', 'routine', 'k-beauty'],
    publishDate: '2024-01-15',
    readTime: 8,
    author: 'Dr. Sarah Kim',
    relatedProducts: ['cosrx-snail-mucin', 'beauty-of-joseon-glow-deep-serum']
  },
  {
    id: 'vitamin-c-benefits-skincare',
    title: 'Why Vitamin C Should Be in Your Skincare Routine',
    slug: 'vitamin-c-benefits-skincare',
    excerpt: 'Learn about the amazing benefits of vitamin C for your skin and how to incorporate it into your daily routine.',
    content: 'Full article content here...',
    featuredImage: '/src/assets/PgSdeq2u9nnE.jpg',
    category: 'ingredients',
    tags: ['vitamin-c', 'brightening', 'antioxidants'],
    publishDate: '2024-01-10',
    readTime: 6,
    author: 'Emma Chen',
    relatedProducts: ['klairs-vitamin-c-serum']
  },
  {
    id: 'snail-mucin-skincare-benefits',
    title: 'Snail Mucin: The K-Beauty Ingredient That Actually Works',
    slug: 'snail-mucin-skincare-benefits',
    excerpt: 'Everything you need to know about snail mucin and why it\'s become a staple in Korean skincare.',
    content: 'Full article content here...',
    featuredImage: '/src/assets/mvQh4sM6815s.jpg',
    category: 'ingredients',
    tags: ['snail-mucin', 'hydration', 'healing'],
    publishDate: '2024-01-05',
    readTime: 7,
    author: 'Dr. Sarah Kim',
    relatedProducts: ['cosrx-snail-mucin']
  }
];

// Mock data for testimonials
export const mockTestimonials = [
  {
    id: 1,
    name: 'Maria Rossi',
    location: 'Milano, Italy',
    rating: 5,
    text: 'I\'ve been using K-Beauty products for 6 months and my skin has never looked better! The glow is real.',
    image: '/src/assets/KX9QX9ixn6ql.jpg',
    products: ['cosrx-snail-mucin', 'beauty-of-joseon-glow-deep-serum']
  },
  {
    id: 2,
    name: 'Ana Krasniqi',
    location: 'Tirana, Albania',
    rating: 5,
    text: 'Produktet janë të shkëlqyera! Lëkura ime duket shumë më e shëndetshme dhe e ndritur.',
    image: '/src/assets/XLiTDNDpsb1F.jpg',
    products: ['laneige-water-sleeping-mask']
  },
  {
    id: 3,
    name: 'Sophie Martin',
    location: 'Paris, France',
    rating: 5,
    text: 'The 10-step routine seemed overwhelming at first, but now I can\'t imagine my life without it!',
    image: '/src/assets/9MiS21fRzlMF.jpg',
    products: ['innisfree-green-tea-seed-serum', 'etude-house-sunprise-sunscreen']
  }
];

// Mock data for Instagram posts
export const mockInstagramPosts = [
  {
    id: 1,
    image: '/src/assets/KT8pxKsgmoPh.jpg',
    caption: 'Morning glow with our bestselling serum ✨',
    likes: 1234,
    products: ['beauty-of-joseon-glow-deep-serum']
  },
  {
    id: 2,
    image: '/src/assets/A2YKAaM0YWih.jpg',
    caption: 'Self-care Sunday vibes 🌸',
    likes: 987,
    products: ['laneige-water-sleeping-mask']
  },
  {
    id: 3,
    image: '/src/assets/fMShcJ99avhP.jpg',
    caption: 'Glass skin goals achieved! 💎',
    likes: 2156,
    products: ['cosrx-snail-mucin']
  },
  {
    id: 4,
    image: '/src/assets/BM8ttGW0Y7tf.jpg',
    caption: 'Natural beauty enhanced 🌿',
    likes: 1567,
    products: ['innisfree-green-tea-seed-serum']
  }
];

// Mock data for quiz questions
export const mockQuizQuestions = [
  {
    id: 1,
    question: 'What is your skin type?',
    options: [
      { id: 'dry', label: 'Dry - Often feels tight and flaky' },
      { id: 'oily', label: 'Oily - Shiny and prone to breakouts' },
      { id: 'combination', label: 'Combination - Oily T-zone, dry cheeks' },
      { id: 'sensitive', label: 'Sensitive - Easily irritated and reactive' }
    ]
  },
  {
    id: 2,
    question: 'What is your main skin concern?',
    options: [
      { id: 'acne', label: 'Acne and breakouts' },
      { id: 'aging', label: 'Fine lines and wrinkles' },
      { id: 'dark-spots', label: 'Dark spots and hyperpigmentation' },
      { id: 'hydration', label: 'Dryness and dehydration' },
      { id: 'dullness', label: 'Dull and tired-looking skin' }
    ]
  },
  {
    id: 3,
    question: 'How much time do you want to spend on your routine?',
    options: [
      { id: 'minimal', label: '5 minutes - Quick and simple' },
      { id: 'moderate', label: '10-15 minutes - Balanced approach' },
      { id: 'extensive', label: '20+ minutes - Full Korean routine' }
    ]
  }
];

// Mock data for routine recommendations
export const mockRoutineRecommendations = {
  'dry-hydration-minimal': {
    title: 'Hydrating Essentials',
    description: 'A simple 3-step routine for dry, dehydrated skin',
    products: ['cosrx-snail-mucin', 'laneige-water-sleeping-mask'],
    steps: [
      'Cleanse with gentle cleanser',
      'Apply hydrating essence',
      'Seal with overnight mask'
    ]
  },
  'oily-acne-moderate': {
    title: 'Acne-Fighting Routine',
    description: 'A balanced approach to clear, healthy skin',
    products: ['beauty-of-joseon-glow-deep-serum', 'etude-house-sunprise-sunscreen'],
    steps: [
      'Double cleanse',
      'Apply brightening serum',
      'Moisturize',
      'Protect with SPF'
    ]
  }
  // Add more combinations as needed
};

// Mock data for brands
export const mockBrands = [
  {
    id: 'cosrx',
    name: 'COSRX',
    description: 'Cosmetics + RX, simple ingredients for sensitive skin',
    logo: '/src/assets/brand-cosrx.jpg',
    featured: true
  },
  {
    id: 'beauty-of-joseon',
    name: 'Beauty of Joseon',
    description: 'Traditional Korean beauty secrets with modern science',
    logo: '/src/assets/brand-boj.jpg',
    featured: true
  },
  {
    id: 'innisfree',
    name: 'Innisfree',
    description: 'Natural beauty from Jeju Island',
    logo: '/src/assets/brand-innisfree.jpg',
    featured: true
  },
  {
    id: 'klairs',
    name: 'Klairs',
    description: 'Simple, honest skincare for sensitive skin',
    logo: '/src/assets/brand-klairs.jpg',
    featured: false
  },
  {
    id: 'laneige',
    name: 'Laneige',
    description: 'Water science for beautiful skin',
    logo: '/src/assets/brand-laneige.jpg',
    featured: true
  },
  {
    id: 'etude-house',
    name: 'Etude House',
    description: 'Sweet, playful beauty for everyone',
    logo: '/src/assets/brand-etude.jpg',
    featured: false
  }
];

// Helper functions
export const getProductById = (id) => {
  return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return mockProducts.filter(product => product.category === category);
};

export const getBestsellerProducts = () => {
  return mockProducts.filter(product => product.isBestseller);
};

export const getNewProducts = () => {
  return mockProducts.filter(product => product.isNew);
};

export const getBlogPostById = (id) => {
  return mockBlogPosts.find(post => post.id === id);
};

export const getBlogPostsByCategory = (category) => {
  return mockBlogPosts.filter(post => post.category === category);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

