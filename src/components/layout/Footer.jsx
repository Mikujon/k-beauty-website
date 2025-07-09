import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Truck,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Show success message
  };

  const footerLinks = {
    shop: [
      { label: t('footer.skincare'), href: '/shop/skincare' },
      { label: t('footer.makeup'), href: '/shop/makeup' },
      { label: t('footer.accessories'), href: '/shop/accessories' },
      { label: t('footer.giftSets'), href: '/shop/gift-sets' }
    ],
    about: [
      { label: t('footer.ourStory'), href: '/about' },
      { label: t('footer.careers'), href: '/careers' },
      { label: t('footer.contact'), href: '/contact' },
      { label: t('pages.tenStepRoutine'), href: '/10-step-routine' }
    ],
    support: [
      { label: t('footer.faq'), href: '/faq' },
      { label: t('footer.shipping'), href: '/shipping-returns' },
      { label: t('footer.returns'), href: '/shipping-returns' },
      { label: t('footer.sizeGuide'), href: '/size-guide' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/kbeauty', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/kbeauty', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/kbeauty', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/kbeauty', label: 'YouTube' }
  ];

  const paymentMethods = [
    { name: 'Visa', logo: '💳' },
    { name: 'Mastercard', logo: '💳' },
    { name: 'PayPal', logo: '🅿️' },
    { name: 'Klarna', logo: '🛒' }
  ];

  const trustBadges = [
    { icon: Truck, text: 'Free Shipping €35+' },
    { icon: Shield, text: 'Secure Payment' },
    { icon: Award, text: 'Authentic Products' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="newsletter-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('footer.newsletter')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {t('footer.newsletterText')}
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="btn-primary px-6 py-3 rounded-full"
              >
                {t('footer.subscribe')}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3">
              Get 10% off your first order when you subscribe!
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Shop Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('footer.shop')}</h4>
              <ul className="space-y-2">
                {footerLinks.shop.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('footer.about')}</h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('footer.support')}</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social Column */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('footer.joinUs')}</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+355 69 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>info@kbeauty.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Tirana, Albania</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-3">{t('footer.social')}</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-200"
                      title={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <badge.icon className="w-5 h-5 text-pink-500" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              {t('footer.copyright')}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We accept:</span>
              <div className="flex space-x-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="w-8 h-6 bg-white rounded flex items-center justify-center text-xs"
                    title={method.name}
                  >
                    {method.logo}
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.privacy')}
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.terms')}
              </a>
              <a href="/affiliate" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.affiliate')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

