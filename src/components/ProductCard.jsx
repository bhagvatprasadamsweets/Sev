import { useState } from 'react';
import { Star, Plus, Eye, Flame, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [isAdded, setIsAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const multiplier = (product.weightMultiplier && product.weightMultiplier[selectedWeight]) || 1;
  const currentPrice = Math.round(product.price * multiplier);
  const currentOriginalPrice = product.originalPrice ? Math.round(product.originalPrice * multiplier) : null;

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1, selectedWeight);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div
      onClick={handleQuickView}
      className="group cursor-pointer rounded-3xl bg-white border border-[#681C22]/10 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top Bar: Badge & Quick View Button */}
      <div className="flex items-center justify-between mb-3 z-10 relative">
        {product.badge ? (
          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${product.badgeColor || 'bg-[#D83A2E] text-white'}`}>
            {product.badge}
          </span>
        ) : (
          <span className="text-[10px] font-bold text-[#681C22]/60 uppercase tracking-wider">
            {product.categoryName}
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickView}
          aria-label={`Quick view ${product.name}`}
          className="w-8 h-8 rounded-full bg-[#FFF7E9] hover:bg-[#681C22] text-[#25221F] hover:text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Image Area with Hover Lift */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FFF7E9] mb-4 flex items-center justify-center border border-[#681C22]/5">
        <img
          src={imgError ? 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80' : product.image}
          alt={product.alt || product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Spice Level Indicator Overlay */}
        <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-white text-[11px] font-medium pointer-events-none">
          <Flame className="w-3.5 h-3.5 text-[#F49A24] fill-[#F49A24]" />
          <span>{product.spiceLevel}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Rating Display */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-[#25221F]">
              {product.rating}
            </span>
            <span className="text-[11px] text-[#25221F]/60">
              ({product.reviewsCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#25221F] group-hover:text-[#D83A2E] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          {/* Short Flavour Description */}
          <p className="text-xs text-[#25221F]/75 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Weight Selector Pills */}
        {product.weightOptions && product.weightOptions.length > 1 && (
          <div className="flex items-center gap-1.5 my-3" onClick={(e) => e.stopPropagation()}>
            {product.weightOptions.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setSelectedWeight(w)}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border transition-all ${
                  selectedWeight === w
                    ? 'bg-[#681C22] text-white border-[#681C22]'
                    : 'bg-[#FFF7E9] text-[#25221F]/80 border-[#681C22]/15 hover:border-[#681C22]'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        )}

        {/* Pricing & Add to Cart Action */}
        <div className="pt-3 border-t border-[#681C22]/10 flex items-center justify-between gap-2 mt-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-black text-xl sm:text-2xl text-[#25221F]">
                ₹{currentPrice}
              </span>
              {currentOriginalPrice && (
                <span className="text-xs font-medium text-[#25221F]/50 line-through">
                  ₹{currentOriginalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#681C22]/70 font-medium block">
              Inclusive of taxes
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D83A2E] ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#D83A2E] text-white hover:bg-[#B92B20]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>ADD</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

