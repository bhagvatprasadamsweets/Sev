import { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/useCart';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    discountAmount,
    shippingCost,
    orderTotal,
    placeOrder,
    orderSuccessData,
    setOrderSuccessData
  } = useCart();

  const [formData, setFormData] = useState({
    name: 'Harshil Mehta',
    phone: '9876543210',
    email: 'harshil@example.com',
    address: 'B-204, Shivalik Residency, Satellite',
    city: 'Ahmedabad',
    pincode: '380015',
    paymentMethod: 'upi'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isCheckoutOpen || orderSuccessData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCheckoutOpen, orderSuccessData]);

  if (!isCheckoutOpen && !orderSuccessData) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      placeOrder(formData);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => {
          if (!isSubmitting) {
            setIsCheckoutOpen(false);
            setOrderSuccessData(null);
          }
        }}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-[#E8DCC8] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            setIsCheckoutOpen(false);
            setOrderSuccessData(null);
          }}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#3B2418] flex items-center justify-center border border-[#E8DCC8] transition-colors shadow-sm cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ORDER SUCCESS VIEW */}
        {orderSuccessData ? (
          <div className="p-8 text-center bg-[#FFF8E9]">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold text-[#E5A323] uppercase tracking-widest bg-[#3B2418] px-3 py-1 rounded-full">
              ORDER CONFIRMED
            </span>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#3B2418] mt-3 mb-2">
              Authentic Gathiya, On The Way!
            </h3>

            <p className="text-sm text-[#7A5F4F] max-w-md mx-auto mb-6">
              Thank you, <strong>{orderSuccessData.customer.name}</strong>. Your order{' '}
              <span className="font-mono font-bold text-[#3B2418]">
                #{orderSuccessData.orderId}
              </span>{' '}
              is being packed fresh in our Nilkanthdham kitchens and will be dispatched within 24 hours.
            </p>

            <div className="rounded-2xl bg-white p-5 max-w-md mx-auto border border-[#E8DCC8] text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between font-bold text-[#3B2418]">
                <span>Delivering to:</span>
                <span>{orderSuccessData.customer.city} - {orderSuccessData.customer.pincode}</span>
              </div>
              <p className="text-gray-500">{orderSuccessData.customer.address}</p>
              <div className="pt-2 border-t border-[#E8DCC8] flex justify-between font-bold text-[#3B2418]">
                <span>Amount Paid:</span>
                <span className="text-[#F28C28]">₹{orderSuccessData.total}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setOrderSuccessData(null);
                setIsCheckoutOpen(false);
              }}
              className="py-3 px-8 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        ) : (
          /* CHECKOUT FORM VIEW */
          <div className="p-6 sm:p-8">
            <h3 className="font-display font-black text-2xl text-[#3B2418] mb-1">
              Complete Your Order
            </h3>
            <p className="text-xs text-[#7A5F4F] mb-6">
              Enter your shipping details for fresh express dispatch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3B2418] mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3B2418] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3B2418] mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3B2418] mb-1">Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3B2418] mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3B2418] mb-1">PIN Code</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323]"
                  />
                </div>
              </div>

              {/* Order Summary Inset */}
              <div className="p-4 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] text-xs space-y-1.5 mt-4">
                <div className="flex justify-between text-[#7A5F4F]">
                  <span>Items ({cart.length})</span>
                  <span>₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#7A5F4F]">
                  <span>Express Shipping</span>
                  <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#3B2418] pt-2 border-t border-[#E8DCC8]">
                  <span>Total Payable:</span>
                  <span className="text-[#F28C28]">₹{orderTotal}</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-[11px] text-[#7A5F4F] justify-center pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Demo Checkout • No payment card details collected</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md mt-4 cursor-pointer"
              >
                {isSubmitting ? 'Processing Order...' : `Confirm & Place Order (₹${orderTotal})`}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
