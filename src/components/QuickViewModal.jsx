import { useState, useEffect } from 'react';
import { X, Star, Flame, Plus, Minus, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

function QuickViewContent({ product, onClose, onAddToCart }) {
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const multiplier = (product.weightMultiplier && product.weightMultiplier[selectedWeight]) || 1;
  const currentPrice = Math.round(product.price * multiplier);
  const currentOriginalPrice = product.originalPrice ? Math.round(product.originalPrice * multiplier) : null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedWeight);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left: Product Visual */}
      <div className="relative bg-[#FFF7E9] p-6 sm:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#681C22]/10">
        {product.badge && (
          <span className={`absolute top-5 left-5 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${product.badgeColor || 'bg-[#D83A2E] text-white'}`}>
            {product.badge}
          </span>
        )}

        <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white mb-4">
          <img
            src={imgError ? 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80' : product.image}
            alt={product.alt || product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Spice Heat Bar */}
        <div className="w-full max-w-[280px] bg-white p-3 rounded-xl border border-[#681C22]/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-bold text-[#681C22]">
            <Flame className="w-4 h-4 text-[#D83A2E] fill-[#D83A2E]" />
            <span>Spice Level: {product.spiceLevel}</span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((lvl) => (
              <span
                key={lvl}
                className={`w-2.5 h-2.5 rounded-full ${
                  lvl <= (product.spiceRating || 3)
                    ? 'bg-[#D83A2E]'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: Info & Purchase Controls */}
      <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#681C22] uppercase tracking-wider">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>{product.rating}</span>
              <span className="text-[#25221F]/50 font-normal">
                ({product.reviewsCount} reviews)
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#25221F] leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-xs font-medium text-[#D83A2E] mb-3">
            {product.tagline}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display font-black text-3xl text-[#25221F]">
              ₹{currentPrice}
            </span>
            {currentOriginalPrice && (
              <span className="text-sm font-semibold text-[#25221F]/40 line-through">
                ₹{currentOriginalPrice}
              </span>
            )}
            <span className="text-xs text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded-full ml-1">
              Save {currentOriginalPrice ? Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100) : 20}%
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#25221F]/80 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Pack Size / Weight Selection */}
          {product.weightOptions && (
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#681C22] uppercase tracking-wider mb-2">
                Pack Size / Weight
              </label>
              <div className="flex flex-wrap gap-2">
                {product.weightOptions.map((weight) => (
                  <button
                    key={weight}
                    type="button"
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      selectedWeight === weight
                        ? 'bg-[#681C22] text-white border-[#681C22] shadow-sm'
                        : 'bg-white text-[#25221F] border-[#681C22]/20 hover:border-[#681C22]'
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients Pills */}
          {product.ingredients && (
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#681C22] uppercase tracking-wider mb-1.5">
                Authentic Ingredients
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.slice(0, 5).map((ing, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-[#FFF7E9] border border-[#681C22]/10 px-2 py-0.5 rounded-md text-[#25221F]/80 font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-[11px] text-[#25221F]/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Groundnut Oil</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>No Artificial Preservatives</span>
            </div>
          </div>
        </div>

        {/* Quantity Selector & Add to Cart Action */}
        <div className="pt-4 border-t border-[#681C22]/10 flex items-center gap-3">
          <div className="flex items-center border border-[#681C22]/20 rounded-xl bg-white p-1">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#25221F] hover:bg-[#FFF7E9] transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-9 text-center font-bold text-sm text-[#25221F]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#25221F] hover:bg-[#FFF7E9] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex-1 py-3 px-5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#D83A2E] text-white hover:bg-[#B92B20]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag — ₹{currentPrice * quantity}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();

  useEffect(() => {
    if (quickViewProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#681C22]/15 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#25221F] hover:text-[#D83A2E] flex items-center justify-center shadow-md transition-colors border border-[#681C22]/10"
        >
          <X className="w-5 h-5" />
        </button>

        <QuickViewContent
          key={quickViewProduct.id}
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={addToCart}
        />
      </div>
    </div>
  );
}
