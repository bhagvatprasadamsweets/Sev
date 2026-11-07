import { useState, useEffect } from 'react';
import { ShoppingBag, Check, Zap } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';
import { useCart } from '../context/useCart';

export default function StickyBottomBar() {
  const { addToCart, setIsCartOpen } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBundleId, setSelectedBundleId] = useState('pack-500g');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedBundle =
    GATHIYA_PRODUCT.bundles.find((b) => b.id === selectedBundleId) ||
    GATHIYA_PRODUCT.bundles[1];

  const handleAddToCart = () => {
    addToCart(
      {
        id: `gathiya-${selectedBundle.id}`,
        name: `Bhavnagari Gathiya (${selectedBundle.weight})`,
        price: selectedBundle.price,
        originalPrice: selectedBundle.originalPrice,
        image: GATHIYA_PRODUCT.images.freshBowl,
        weight: selectedBundle.weight,
        badge: selectedBundle.badge,
        categoryName: 'Bhavnagari Gathiya'
      },
      1,
      selectedBundle.weight
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => {
      setIsCartOpen(true);
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#681C22]/15 shadow-2xl py-3 px-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Product Thumbnail & Name */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#FFF7E9] border border-[#681C22]/15 shrink-0 hidden xs:block">
            <img
              src={GATHIYA_PRODUCT.images.freshBowl}
              alt="Bhavnagari Gathiya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-display font-black text-sm text-[#25221F] truncate leading-tight">
              Bhavnagari Gathiya
            </h4>
            <p className="text-[11px] text-[#681C22] font-semibold truncate hidden sm:block">
              100% Groundnut Oil • 60-Day Fresh Zip Pouch
            </p>
          </div>
        </div>

        {/* Center: Bundle / Weight Picker */}
        <div className="flex items-center gap-2">
          <select
            value={selectedBundleId}
            onChange={(e) => setSelectedBundleId(e.target.value)}
            className="text-xs sm:text-sm font-bold bg-[#FFF7E9] border border-[#681C22]/20 rounded-xl px-2.5 py-2 text-[#25221F] focus:outline-none focus:ring-2 focus:ring-[#D83A2E]"
          >
            {GATHIYA_PRODUCT.bundles.map((b) => (
              <option key={b.id} value={b.id}>
                {b.weight} — ₹{b.price}
              </option>
            ))}
          </select>

          <div className="text-right hidden md:block">
            <span className="font-display font-black text-lg text-[#25221F]">
              ₹{selectedBundle.price}
            </span>
            <span className="text-xs text-gray-400 line-through ml-1.5">
              ₹{selectedBundle.originalPrice}
            </span>
          </div>
        </div>

        {/* Right: CTAs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wide transition-all shadow-sm flex items-center gap-1.5 ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#D83A2E] text-white hover:bg-[#B92B20]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="hidden sm:inline-flex py-2.5 px-4 rounded-xl bg-[#681C22] text-white hover:bg-[#52151A] font-bold text-xs uppercase tracking-wide transition-all items-center gap-1.5 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-[#FFD66B] fill-[#FFD66B]" />
            <span>Buy Now</span>
          </button>
        </div>

      </div>
    </div>
  );
}
