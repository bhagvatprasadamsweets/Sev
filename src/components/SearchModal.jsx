import { useState, useEffect, useRef } from 'react';
import { Search, X, Plus, Star } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart, setQuickViewProduct } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  const handleClose = () => {
    setQuery('');
    setIsSearchOpen(false);
  };

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.ingredients && item.ingredients.some((i) => i.toLowerCase().includes(q)))
        );
      })
    : PRODUCTS.slice(0, 4); // show top 4 featured if empty

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#681C22]/15 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Header Input */}
        <div className="p-4 sm:p-6 border-b border-[#681C22]/10 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D83A2E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bhujia, sev, chivda, farsan, ingredients..."
            className="w-full text-base sm:text-lg font-medium text-[#25221F] placeholder:text-gray-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close search"
            className="w-8 h-8 rounded-full bg-[#FFF7E9] text-[#25221F] hover:bg-[#681C22] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-[#FFF7E9] border-b border-[#681C22]/10 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="font-bold text-[#681C22] shrink-0">Popular:</span>
          {['Classic Bhujia', 'Chatpata Sev', 'Chivda', 'Spicy Peanut', 'Masala Chana'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-white border border-[#681C22]/10 text-[#25221F] hover:border-[#D83A2E] whitespace-nowrap transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3">
          <p className="text-xs font-bold text-[#681C22]/70 uppercase tracking-wider mb-2">
            {query.trim() ? `Search Results (${results.length})` : 'Recommended Snacks'}
          </p>

          {results.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="font-semibold text-base">No snacks found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for "sev", "bhujia", "peanuts" or "chivda".</p>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setQuickViewProduct(item);
                  handleClose();
                }}
                className="group flex items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-[#681C22]/10 hover:border-[#D83A2E] cursor-pointer transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#FFF7E9] shrink-0 border border-[#681C22]/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-sm text-[#25221F] group-hover:text-[#D83A2E] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#25221F]/60 truncate">
                      {item.tagline}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-display font-black text-xs text-[#25221F]">
                        ₹{item.price}
                      </span>
                      <span className="text-[10px] text-gray-400">({item.weight})</span>
                      <span className="flex items-center gap-0.5 text-[10px] text-amber-500 font-bold">
                        <Star className="w-3 h-3 fill-current" />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item, 1, item.weight);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#D83A2E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B92B20] transition-colors shrink-0 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ADD</span>
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
