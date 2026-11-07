import { useState } from 'react';
import { Star, Flame, Plus, Minus, ShoppingBag, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import PackshotGraphic from './PackshotGraphic';

export default function BestsellerSpotlight() {
  const { addToCart } = useCart();
  const spotlightProduct = PRODUCTS.find((p) => p.id === 'classic-bhujia') || PRODUCTS[0];

  const [selectedWeight, setSelectedWeight] = useState('200g');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const multiplier = (spotlightProduct.weightMultiplier && spotlightProduct.weightMultiplier[selectedWeight]) || 1;
  const currentPrice = Math.round(spotlightProduct.price * multiplier);
  const currentOriginalPrice = spotlightProduct.originalPrice ? Math.round(spotlightProduct.originalPrice * multiplier) : null;

  const handleAdd = () => {
    addToCart(spotlightProduct, quantity, selectedWeight);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <section id="spotlight" className="py-20 sm:py-28 bg-[#FFF2D8] border-y border-[#681C22]/10 relative overflow-hidden">
      
      {/* Background Subtle Sunburst Rings */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFD66B]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-3xl p-6 sm:p-12 lg:p-14 shadow-xl border border-[#681C22]/10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Oversized Product Image & Pack Composition */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* Visual Packshot Graphic + Authentic Food Bowl */}
            <div className="relative flex items-center justify-center w-full">
              
              <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <PackshotGraphic
                  productName="Classic Bhujia"
                  tagline="Moth Bean Crispy Crunch"
                  themeColor="#681C22"
                  accentColor="#FFD66B"
                  subColor="#D83A2E"
                  weight={selectedWeight}
                  spiceLevel="Medium"
                  size="large"
                />
              </div>

              {/* Floating Bestseller Stamp */}
              <div className="absolute -top-3 -left-2 sm:left-4 bg-[#D83A2E] text-white p-3 rounded-full shadow-lg border-2 border-white flex flex-col items-center justify-center">
                <Flame className="w-4 h-4 text-[#FFD66B] fill-[#FFD66B]" />
                <span className="text-[9px] font-black uppercase tracking-wider">No. 1 Pick</span>
              </div>

              {/* Bowl detail inset */}
              <div className="absolute -bottom-6 -right-2 sm:right-4 w-36 sm:w-44 h-36 sm:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src={spotlightProduct.image}
                  alt={spotlightProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

          {/* RIGHT: Product Details & Purchase Form */}
          <div className="lg:col-span-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D83A2E]/10 border border-[#D83A2E]/20 text-[#D83A2E] text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
              SIGNATURE SPOTLIGHT
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-[1.05] mb-4">
              THE CLASSIC THAT <br />
              <span className="text-[#D83A2E]">NEVER MISSES.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#25221F]/80 leading-relaxed mb-6 font-normal">
              Golden, crispy and perfectly spiced. A timeless namkeen favourite for every tea break. Made with double-milled moth dal, freshly ground black pepper, and Hing from Rajasthan.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#25221F]">4.9 / 5.0</span>
              <span className="text-xs text-[#25221F]/60">
                (Based on 1,420+ authentic snack lover ratings)
              </span>
            </div>

            {/* Flavour Notes Pills */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#681C22] uppercase tracking-wider mb-2">
                Flavour Architecture
              </label>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-xl bg-[#FFF7E9] text-xs font-semibold text-[#681C22] border border-[#681C22]/15">
                  ✓ Bikaneri Moth Bean Dal
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#FFF7E9] text-xs font-semibold text-[#681C22] border border-[#681C22]/15">
                  ✓ Tellicherry Black Pepper
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#FFF7E9] text-xs font-semibold text-[#681C22] border border-[#681C22]/15">
                  ✓ Pure Asafoetida (Hing)
                </span>
              </div>
            </div>

            {/* Weight Pack Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#681C22] uppercase tracking-wider mb-2">
                Select Pack Size
              </label>
              <div className="flex gap-2">
                {spotlightProduct.weightOptions.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setSelectedWeight(w)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                      selectedWeight === w
                        ? 'bg-[#681C22] text-white border-[#681C22] shadow-sm'
                        : 'bg-[#FFF7E9] text-[#25221F] border-[#681C22]/15 hover:border-[#681C22]'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Add to Bag Controls */}
            <div className="pt-4 border-t border-[#681C22]/10 flex flex-wrap items-center gap-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#25221F]">
                    ₹{currentPrice * quantity}
                  </span>
                  {currentOriginalPrice && (
                    <span className="text-sm font-bold text-[#25221F]/40 line-through">
                      ₹{currentOriginalPrice * quantity}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-[#681C22]/70 font-semibold block">
                  Free shipping eligible
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center border border-[#681C22]/20 rounded-xl bg-[#FFF7E9] p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-[#25221F] hover:bg-[#681C22]/10 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-bold text-sm text-[#25221F]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-[#25221F] hover:bg-[#681C22]/10 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 min-w-[200px] py-4 px-6 rounded-2xl font-bold text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 ${
                  isAdded
                    ? 'bg-emerald-600 text-white shadow-emerald-600/25'
                    : 'bg-[#D83A2E] text-white hover:bg-[#B92B20] shadow-[#D83A2E]/25'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Your Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add {quantity} to Bag</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

