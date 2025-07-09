import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Carousel from '../components/ui/Carousel';
import ProductCard from '../components/product/ProductCard';
import { mockProducts, mockBlogPosts, mockTestimonials, mockInstagramPosts } from '../utils/mockData';

const Homepage = () => {
  const { t } = useTranslation();

  const bestsellers = mockProducts.filter(p => p.isBestseller);
  const latestBlogPosts = mockBlogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Carousel autoPlay interval={5000}>
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 text-center">
            <img src="/src/assets/hero-1.jpg" alt="Hero Image 1" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="relative z-10 text-gray-900 p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in-up animation-delay-200">
                {t('hero.subtitle')}
              </p>
              <p className="text-md md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
                <Link to="/shop" className="btn-primary">
                  {t('hero.cta1')}
                </Link>
                <Link to="/blog" className="btn-secondary">
                  {t('hero.cta2')}
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 text-center">
            <img src="/src/assets/hero-2.jpg" alt="Hero Image 2" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className="relative z-10 text-gray-900 p-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                {t('sections.quiz')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in-up animation-delay-200">
                {t('sections.quizSub')}
              </p>
              <Link to="/routine-finder" className="btn-primary animate-fade-in-up animation-delay-400">
                {t('sections.quizCta')}
              </Link>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Bestsellers Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            {t('sections.bestsellers')}
          </h2>
          <p className="section-subtitle">
            {t('sections.bestsellersSub')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="btn-secondary">
              {t('common.viewAll')} {t('nav.shopAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Quiz Preview Section */}
      <section className="bg-pink-50 section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">
            {t('sections.quiz')}
          </h2>
          <p className="section-subtitle">
            {t('sections.quizSub')}
          </p>
          <Link to="/routine-finder" className="btn-primary text-lg px-8 py-4">
            {t('sections.quizCta')}
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            {t('sections.blog')}
          </h2>
          <p className="section-subtitle">
            {t('sections.blogSub')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogPosts.map((post) => (
              <div key={post.id} className="blog-card group">
                <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-pink-600 font-medium hover:text-pink-700">
                    {t('blog.readMore')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="btn-secondary">
              {t('common.viewAll')} {t('blog.title')}
            </Link>
          </div>
        </div>
      </section>

      {/* Kits & Routines Section */}
      <section className="bg-purple-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">
            {t('sections.kits')}
          </h2>
          <p className="section-subtitle">
            {t('sections.kitsSub')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Placeholder Kit 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/src/assets/kit-1.jpg" alt="Hydration Kit" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hydration Boost Kit</h3>
              <p className="text-gray-600 mb-4">Everything you need for deeply hydrated skin.</p>
              <Link to="/shop/kits/hydration" className="btn-primary">Shop Kit</Link>
            </div>
            {/* Placeholder Kit 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/src/assets/kit-2.jpg" alt="Anti-Aging Routine" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anti-Aging Routine</h3>
              <p className="text-gray-600 mb-4">Combat signs of aging with this powerful routine.</p>
              <Link to="/shop/kits/anti-aging" className="btn-primary">Shop Kit</Link>
            </div>
            {/* Placeholder Kit 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/src/assets/kit-3.jpg" alt="Acne Solution Set" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Acne Solution Set</h3>
              <p className="text-gray-600 mb-4">Clear and calm your skin with targeted solutions.</p>
              <Link to="/shop/kits/acne" className="btn-primary">Shop Kit</Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/shop/kits" className="btn-secondary">
              {t('common.viewAll')} {t('sections.kits')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            {t('sections.testimonials')}
          </h2>
          <p className="section-subtitle">
            {t('sections.testimonialsSub')}
          </p>
          <Carousel autoPlay interval={7000}>
            {mockTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-center text-center p-8">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />
                <p className="text-lg text-gray-700 italic mb-4 max-w-2xl">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'fill-current' : 'stroke-current'}`} />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-pink-50 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            {t('sections.instagram')}
          </h2>
          <p className="section-subtitle">
            {t('sections.instagramSub')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {mockInstagramPosts.map((post) => (
              <a key={post.id} href="#" target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-lg shadow-md">
                <img src={post.image} alt="Instagram Post" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium"><Instagram className="inline-block w-4 h-4 mr-1" /> {post.likes}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://instagram.com/kbeauty" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

