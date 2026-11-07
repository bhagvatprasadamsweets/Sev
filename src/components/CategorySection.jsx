import { Sparkles, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import CategoryCard from './CategoryCard';

export default function CategorySection({ onSelectCategory, onExploreAll }) {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#FFF7E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F49A24]/15 border border-[#F49A24]/20 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
              CURATED COLLECTIONS
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#25221F] tracking-tight leading-[1.05]">
              YOUR KIND OF <span className="text-[#D83A2E]">CRUNCH.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#25221F]/75 mt-3">
              Find the perfect snack for every craving — from midnight munchies to Sunday family chai.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              type="button"
              onClick={onExploreAll}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#681C22] hover:text-[#D83A2E] group transition-colors focus:outline-none"
            >
              <span>View All Namkeen Varieties</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#D83A2E]" />
            </button>
          </div>
        </div>

        {/* 4 Visually Distinctive Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onSelectCategory={onSelectCategory}
              isReversed={idx % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

