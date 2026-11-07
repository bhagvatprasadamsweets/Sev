import { useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Truck } from 'lucide-react';
import { useCart } from '../context/useCart';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    cartCount,
    subtotal,
    discountAmount,
    shippingCost,
    orderTotal,
    remainingForFreeShipping,
    freeShippingProgress,
    updateQuantity,
    removeFromCart,
    clearCart,
    setIsCheckoutOpen,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Drawer */}
      <div className="relative w-full max-w-md bg-[#FFFDF8] h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300 border-l border-[#E8DCC8]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8DCC8] flex items-center justify-between bg-[#FFF8E9]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E5A323] text-[#3B2418] flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display font-black text-lg text-[#3B2418] leading-tight">
                Your Shopping Bag
              </h2>
              <p className="text-xs text-[#7A5F4F] font-semibold">
                {cartCount} {cartCount === 1 ? 'pack' : 'packs'} selected
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="p-2 rounded-full text-[#3B2418] hover:bg-[#E8DCC8]/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-[#F6EFE3] border-b border-[#E8DCC8] text-xs">
          <div className="flex items-center justify-between font-bold mb-1.5">
            <span className="flex items-center gap-1.5 text-[#3B2418]">
              <Truck className="w-4 h-4 text-[#F28C28]" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-emerald-700 font-bold">Free Express Delivery Unlocked! 🎉</span>
              ) : (
                <span>Add ₹{remainingForFreeShipping} more for Free Shipping!</span>
              )}
            </span>
            <span className="text-[#7A5F4F]">{freeShippingProgress}%</span>
          </div>
          <div className="w-full bg-[#FFF8E9] h-2 rounded-full overflow-hidden border border-[#E8DCC8]">
            <div
              className="h-full bg-gradient-to-r from-[#E5A323] to-[#F28C28] rounded-full transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#7A5F4F]">
              <div className="w-20 h-20 rounded-full bg-[#FFF8E9] border-2 border-dashed border-[#E5A323]/50 flex items-center justify-center mb-4 text-[#F28C28]">
                <ShoppingBag className="w-9 h-9" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#3B2418] mb-1">
                Your bag is empty!
              </h3>
              <p className="text-xs max-w-xs mb-6 text-[#7A5F4F]">
                Add fresh Bhavnagri Gathiya to experience authentic Kathiyawadi chai-time crunch.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-[#E5A323] text-[#3B2418] font-bold text-xs uppercase tracking-wider hover:bg-[#F28C28] hover:text-white transition-colors cursor-pointer"
              >
                Explore Pack Sizes
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-[#E8DCC8] shadow-sm"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FFF8E9] shrink-0 border border-[#E8DCC8] p-1">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-display font-bold text-sm text-[#3B2418] truncate leading-tight">
                      {item.product.name}
                    </h4>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                      className="text-gray-400 hover:text-[#B83220] p-1 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#7A5F4F] font-semibold mt-0.5">
                    Pack: {item.selectedWeight}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-display font-black text-sm text-[#3B2418]">
                      ₹{item.unitPrice * item.quantity}
                    </span>

                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#E8DCC8] rounded-lg bg-[#FFF8E9]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-[#3B2418] hover:bg-[#E8DCC8]/50 transition-colors cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-[#3B2418]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-[#3B2418] hover:bg-[#E8DCC8]/50 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary Area */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8DCC8] bg-[#FFF8E9] space-y-3">
            <div className="space-y-1.5 text-xs text-[#3B2418]">
              <div className="flex justify-between">
                <span className="text-[#7A5F4F]">Subtotal</span>
                <span className="font-semibold">₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-[#7A5F4F]">Shipping</span>
                <span>{shippingCost === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingCost}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#3B2418] pt-2 border-t border-[#E8DCC8]">
                <span>Total</span>
                <span className="font-display font-black text-xl text-[#F28C28]">₹{orderTotal}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleProceedCheckout}
              className="w-full py-4 px-6 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#7A5F4F] pt-1">
              <span>🔒 100% Secure Checkout</span>
              <button
                type="button"
                onClick={clearCart}
                className="hover:text-[#B83220] transition-colors cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
