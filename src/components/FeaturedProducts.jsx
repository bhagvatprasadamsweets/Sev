import { useState } from 'react';
import { SlidersHorizontal, Flame } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts({ selectedCategory, onSelectCategory }) {
  const [sortBy, setSortBy] = useState('featured');

  const filterTabs = [
    { id: 'all', label: 'All Munchies' },
    { id: 'bhujia-sev', label: 'Bhujia & Sev' },
    { id: 'spicy-mixtures', label: 'Spicy Mixtures' },
    { id: 'traditional-snacks', label: 'Traditional Snacks' },
    { id: 'chivda-farsan', label: 'Chivda & Farsan' }
  ];

  // Filter products by selected category
  const filteredProducts = PRODUCTS.filter((item) => {
    if (selectedCategory === 'all' || !selectedCategory) return true;
    return item.category === selectedCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured
  });

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FFFDF8] border-t border-[#681C22]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D83A2E]/10 border border-[#D83A2E]/20 text-[#D83A2E] text-xs font-bold tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#D83A2E] fill-[#D83A2E]" />
            FRESH FROM THE KADHAI
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            MEET YOUR NEW <span className="text-[#D83A2E]">CRAVINGS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#25221F]/75 mt-3">
            Snack favourites that never stay on the shelf for long. Made fresh every day with authentic Indian recipes.
          </p>
        </div>

        {/* Filter Tabs & Sorting Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-[#681C22]/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectCategory(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  (selectedCategory === tab.id || (!selectedCategory && tab.id === 'all'))
                    ? 'bg-[#681C22] text-white shadow-md'
                    : 'bg-[#FFF7E9] text-[#25221F]/75 hover:bg-[#681C22]/10 hover:text-[#681C22]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <SlidersHorizontal className="w-4 h-4 text-[#681C22]/70" />
            <span className="text-xs font-bold text-[#681C22]/80 uppercase tracking-wide">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs sm:text-sm font-semibold bg-white border border-[#681C22]/15 rounded-xl px-3 py-1.5 text-[#25221F] focus:outline-none focus:ring-2 focus:ring-[#D83A2E]"
            >
              <option value="featured">Featured Favorites</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center text-xs text-[#25221F]/60 flex items-center justify-center gap-3">
          <span>• 100% Vegetarian</span>
          <span>• Sealed for Maximum Crunch</span>
          <span>• No Artificial Food Colors</span>
        </div>

      </div>
    </section>
  );
}
