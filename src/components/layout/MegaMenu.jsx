import React from 'react';
import { useTranslation } from 'react-i18next';
import { mockBrands } from '../../utils/mockData';

const MegaMenu = ({ menuType }) => {
  const { t } = useTranslation();

  const menuContent = {
    shopAll: {
      title: t('nav.shopAll'),
      columns: [
        {
          title: 'Categories',
          items: [
            { label: 'Skincare', href: '/shop/skincare' },
            { label: 'Makeup', href: '/shop/makeup' },
            { label: 'Accessories', href: '/shop/accessories' },
            { label: 'Gift Sets', href: '/shop/gift-sets' },
            { label: 'New Arrivals', href: '/shop/new' },
            { label: 'Best Sellers', href: '/shop/bestsellers' }
          ]
        },
        {
          title: 'Featured Brands',
          items: mockBrands.filter(brand => brand.featured).map(brand => ({
            label: brand.name,
            href: `/brands/${brand.id}`
          }))
        },
        {
          title: 'Special Offers',
          items: [
            { label: 'Sale Items', href: '/shop/sale' },
            { label: 'Bundle Deals', href: '/shop/bundles' },
            { label: 'Student Discount', href: '/student-discount' },
            { label: 'Loyalty Program', href: '/loyalty' }
          ]
        }
      ],
      featured: {
        title: 'Featured Collection',
        image: '/src/assets/2rbG8gMeqIk4.jpg',
        description: 'Discover our curated selection of K-Beauty essentials',
        cta: 'Shop Now',
        href: '/collections/featured'
      }
    },
    skinType: {
      title: t('nav.skinType'),
      columns: [
        {
          title: 'Skin Types',
          items: [
            { label: 'Dry Skin', href: '/skin-type/dry' },
            { label: 'Oily Skin', href: '/skin-type/oily' },
            { label: 'Combination Skin', href: '/skin-type/combination' },
            { label: 'Sensitive Skin', href: '/skin-type/sensitive' },
            { label: 'Normal Skin', href: '/skin-type/normal' },
            { label: 'Mature Skin', href: '/skin-type/mature' }
          ]
        },
        {
          title: 'Recommended Products',
          items: [
            { label: 'Hydrating Essences', href: '/products/essences' },
            { label: 'Gentle Cleansers', href: '/products/cleansers' },
            { label: 'Moisturizers', href: '/products/moisturizers' },
            { label: 'Serums', href: '/products/serums' }
          ]
        }
      ],
      featured: {
        title: 'Skin Type Quiz',
        image: '/src/assets/6Yy46fT32OQN.jpg',
        description: 'Not sure about your skin type? Take our quiz!',
        cta: 'Start Quiz',
        href: '/routine-finder'
      }
    },
    skinConcern: {
      title: t('nav.skinConcern'),
      columns: [
        {
          title: 'Common Concerns',
          items: [
            { label: 'Acne & Breakouts', href: '/skin-concern/acne' },
            { label: 'Anti-Aging', href: '/skin-concern/aging' },
            { label: 'Dark Spots', href: '/skin-concern/dark-spots' },
            { label: 'Hydration', href: '/skin-concern/hydration' },
            { label: 'Brightening', href: '/skin-concern/brightening' },
            { label: 'Pore Care', href: '/skin-concern/pores' }
          ]
        },
        {
          title: 'Targeted Solutions',
          items: [
            { label: 'Vitamin C Serums', href: '/products/vitamin-c' },
            { label: 'Retinol Products', href: '/products/retinol' },
            { label: 'Niacinamide', href: '/products/niacinamide' },
            { label: 'Hyaluronic Acid', href: '/products/hyaluronic-acid' }
          ]
        }
      ],
      featured: {
        title: 'Concern-Specific Routines',
        image: '/src/assets/kXo57mRMU4Hy.jpg',
        description: 'Get personalized product recommendations',
        cta: 'Find Solutions',
        href: '/routine-finder'
      }
    },
    brands: {
      title: t('nav.brands'),
      columns: [
        {
          title: 'Popular Brands',
          items: mockBrands.map(brand => ({
            label: brand.name,
            href: `/brands/${brand.id}`,
            description: brand.description
          }))
        },
        {
          title: 'Brand Categories',
          items: [
            { label: 'Luxury Brands', href: '/brands/luxury' },
            { label: 'Affordable Brands', href: '/brands/affordable' },
            { label: 'Organic Brands', href: '/brands/organic' },
            { label: 'Vegan Brands', href: '/brands/vegan' }
          ]
        }
      ],
      featured: {
        title: 'Brand Spotlight',
        image: '/src/assets/a1t5rl8Am8UU.jpg',
        description: 'Discover this month\'s featured brand',
        cta: 'Explore Brand',
        href: '/brands/featured'
      }
    }
  };

  const content = menuContent[menuType];
  if (!content) return null;

  return (
    <div className="mega-menu w-screen max-w-4xl bg-white rounded-lg shadow-lg border border-gray-100 p-6">
      <div className="grid grid-cols-4 gap-6">
        {/* Content Columns */}
        {content.columns.map((column, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
              {column.title}
            </h3>
            <ul className="space-y-2">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href={item.href}
                    className="mega-menu-item block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1"
                  >
                    {item.label}
                    {item.description && (
                      <span className="block text-xs text-gray-400 mt-1">
                        {item.description}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Featured Section */}
        {content.featured && (
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4">
            <div className="aspect-w-16 aspect-h-9 mb-3">
              <img
                src={content.featured.image}
                alt={content.featured.title}
                className="w-full h-24 object-cover rounded-md"
              />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm mb-2">
              {content.featured.title}
            </h4>
            <p className="text-xs text-gray-600 mb-3">
              {content.featured.description}
            </p>
            <a
              href={content.featured.href}
              className="inline-block bg-pink-500 text-white text-xs font-medium px-3 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200"
            >
              {content.featured.cta}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;

