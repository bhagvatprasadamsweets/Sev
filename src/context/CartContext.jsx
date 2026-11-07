/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CartContext } from './cartContextInstance';
export { useCart } from './useCart';

const CART_STORAGE_KEY = 'bhagvat_gathiya_cart_v1';
const FREE_SHIPPING_THRESHOLD = 299;

export function CartProvider({ children }) {
  // Load initial cart safely from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderSuccessData, setOrderSuccessData] = useState(null);

  // Coupon state
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // decimal e.g. 0.20
  const [couponError, setCouponError] = useState('');
  const [appliedCouponName, setAppliedCouponName] = useState('');

  // Toast notification state
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  // Add to cart with weight option
  const addToCart = (product, quantity = 1, selectedWeight = null) => {
    const weight = selectedWeight || product.weight;
    const unitPrice = product.price;

    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );

      if (itemIndex > -1) {
        // Item exists, update quantity
        const updated = [...prevCart];
        updated[itemIndex].quantity += quantity;
        return updated;
      } else {
        // Add new item
        return [
          ...prevCart,
          {
            id: `${product.id}-${weight}`,
            product,
            quantity,
            selectedWeight: weight,
            unitPrice,
          },
        ];
      }
    });

    showToast(`Added ${quantity}× ${product.name} to your bag! 🛵`);
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }

    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => {
      const itemToRemove = prev.find((item) => item.id === cartItemId);
      if (itemToRemove) {
        showToast(`Removed from your bag`, 'info');
      }
      return prev.filter((item) => item.id !== cartItemId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);

  const discountAmount = Math.round(subtotal * appliedDiscount);

  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 49;

  const orderTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  // Coupon application
  const applyCoupon = (code) => {
    const cleanCode = (code || '').trim().toUpperCase();
    setCouponError('');

    if (!cleanCode) {
      setCouponError('Please enter a coupon code.');
      return false;
    }

    if (cleanCode === 'BHAVNAGAR10') {
      setAppliedDiscount(0.10);
      setAppliedCouponName('BHAVNAGAR10 (10% OFF)');
      showToast('Coupon BHAVNAGAR10 applied! 10% discount unlocked! 🌾');
      return true;
    } else if (cleanCode === 'DESI20') {
      setAppliedDiscount(0.20);
      setAppliedCouponName('DESI20 (20% OFF)');
      showToast('Coupon DESI20 applied! 20% discount unlocked! 🎉');
      return true;
    } else if (cleanCode === 'CHAI10') {
      setAppliedDiscount(0.10);
      setAppliedCouponName('CHAI10 (10% OFF)');
      showToast('Coupon CHAI10 applied! 10% discount unlocked! ☕');
      return true;
    } else if (cleanCode === 'FREESHIP') {
      setAppliedDiscount(0.15);
      setAppliedCouponName('FREESHIP (15% OFF)');
      showToast('Offer applied! 15% discount unlocked! ✨');
      return true;
    } else {
      setCouponError('Invalid code. Try "BHAVNAGAR10" for 10% off!');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedDiscount(0);
    setAppliedCouponName('');
    setCouponCode('');
  };

  // Demo Order Placement
  const placeOrder = (customerDetails) => {
    const orderData = {
      orderId: `BP-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...cart],
      total: orderTotal,
      subtotal,
      discountAmount,
      shippingCost,
      customer: customerDetails,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setOrderSuccessData(orderData);
    clearCart();
    setIsCartOpen(false);
    setIsCheckoutOpen(false);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D83A2E', '#F49A24', '#FFD66B', '#681C22']
      });
    } catch {
      // safe fallback
    }

    showToast('Bhavnagari Gathiya Order Placed! Fresh batch dispatched soon! 🛵');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        discountAmount,
        shippingCost,
        orderTotal,
        remainingForFreeShipping,
        freeShippingProgress,
        FREE_SHIPPING_THRESHOLD,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isCheckoutOpen,
        setIsCheckoutOpen,
        orderSuccessData,
        setOrderSuccessData,
        couponCode,
        setCouponCode,
        appliedDiscount,
        appliedCouponName,
        couponError,
        applyCoupon,
        removeCoupon,
        toast,
        showToast,
        hideToast,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
