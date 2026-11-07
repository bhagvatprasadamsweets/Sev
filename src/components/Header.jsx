import { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header({ onOpenMobileMenu }) {
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF7E9]/95 backdrop-blur-md shadow-sm border-b border-[#681C22]/10 py-3.5'
            : 'bg-[#FFF7E9] py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* MOBILE: Menu Button Left */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={onOpenMobileMenu}
                aria-label="Open navigation menu"
                className="p-2 -ml-2 rounded-xl text-[#25221F] hover:bg-[#681C22]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D83A2E]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* BRAND LOGO: Left on Desktop, Center on Mobile */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, 'hero')}
                className="inline-flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D83A2E] rounded-lg"
              >
                {/* Snack Swirl Icon */}
                <div className="w-9 h-9 rounded-xl bg-[#681C22] flex items-center justify-center text-white shadow-md transform group-hover:rotate-6 transition-transform">
                  <Flame className="w-5 h-5 text-[#F49A24] fill-[#F49A24]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#25221F] leading-none">
                    Crunch<span className="text-[#D83A2E]">Katha</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#681C22]/70 leading-tight">
                    Desi Swag
                  </span>
                </div>
              </a>
            </div>

            {/* CENTER NAVIGATION: Desktop Only */}
            <nav className="hidden lg:flex items-center space-x-9">
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, 'hero')}
                className="text-sm font-semibold text-[#25221F] hover:text-[#D83A2E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D83A2E] after:transition-all focus:outline-none focus:ring-1 focus:ring-[#D83A2E] rounded"
              >
                Home
              </a>
              <a
                href="#categories"
                onClick={(e) => scrollToSection(e, 'categories')}
                className="text-sm font-semibold text-[#25221F] hover:text-[#D83A2E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D83A2E] after:transition-all focus:outline-none focus:ring-1 focus:ring-[#D83A2E] rounded"
              >
                Categories
              </a>
              <a
                href="#shop"
                onClick={(e) => scrollToSection(e, 'shop')}
                className="text-sm font-semibold text-[#25221F] hover:text-[#D83A2E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D83A2E] after:transition-all focus:outline-none focus:ring-1 focus:ring-[#D83A2E] rounded"
              >
                Shop
              </a>
              <a
                href="#story"
                onClick={(e) => scrollToSection(e, 'story')}
                className="text-sm font-semibold text-[#25221F] hover:text-[#D83A2E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D83A2E] after:transition-all focus:outline-none focus:ring-1 focus:ring-[#D83A2E] rounded"
              >
                Our Story
              </a>
              <a
                href="#journal"
                onClick={(e) => scrollToSection(e, 'journal')}
                className="text-sm font-semibold text-[#25221F] hover:text-[#D83A2E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D83A2E] after:transition-all focus:outline-none focus:ring-1 focus:ring-[#D83A2E] rounded"
              >
                Snack Journal
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="text-sm font-semibold text-[#25221F] hover:text-[#D83A2E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D83A2E] after:transition-all focus:outline-none focus:ring-1 focus:ring-[#D83A2E] rounded"
              >
                Contact
              </a>
            </nav>

            {/* RIGHT ICONS: Search, Account, Cart */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search snacks"
                className="p-2 sm:p-2.5 rounded-full text-[#25221F] hover:bg-[#681C22]/10 hover:text-[#D83A2E] transition-all focus:outline-none focus:ring-2 focus:ring-[#D83A2E]"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account Icon */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  aria-label="User account"
                  className="p-2 sm:p-2.5 rounded-full text-[#25221F] hover:bg-[#681C22]/10 hover:text-[#D83A2E] transition-all focus:outline-none focus:ring-2 focus:ring-[#D83A2E]"
                >
                  <User className="w-5 h-5" />
                </button>

                {/* Account Popover */}
                {isAccountOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white shadow-xl border border-[#681C22]/10 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                      <div>
                        <p className="text-xs font-semibold text-[#681C22] uppercase tracking-wider">Namkeen Club</p>
                        <p className="text-sm font-bold text-[#25221F]">Welcome, Foodie!</p>
                      </div>
                      <button
                        onClick={() => setIsAccountOpen(false)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-[#FFF7E9] p-2.5 rounded-xl border border-[#F49A24]/30 text-xs">
                        <span className="font-bold text-[#681C22]">Desi Rewards:</span> 250 Crunch Points
                      </div>
                      <a
                        href="#shop"
                        onClick={(e) => {
                          scrollToSection(e, 'shop');
                          setIsAccountOpen(false);
                        }}
                        className="block py-1.5 px-2 rounded-lg hover:bg-gray-50 text-[#25221F] font-medium"
                      >
                        Previous Orders
                      </a>
                      <a
                        href="#story"
                        onClick={(e) => {
                          scrollToSection(e, 'story');
                          setIsAccountOpen(false);
                        }}
                        className="block py-1.5 px-2 rounded-lg hover:bg-gray-50 text-[#25221F] font-medium"
                      >
                        Chai Club Membership
                      </a>
                      <div className="pt-2 border-t border-gray-100">
                        <button
                          type="button"
                          onClick={() => setIsAccountOpen(false)}
                          className="w-full py-2 px-3 text-xs font-bold text-center text-white bg-[#681C22] rounded-xl hover:bg-[#52151A] transition-colors"
                        >
                          Sign In / Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Shopping Bag Button with Live Badge */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label={`Shopping bag with ${cartCount} items`}
                className="relative inline-flex items-center justify-center p-2 sm:p-2.5 rounded-full bg-[#681C22] text-white hover:bg-[#D83A2E] transition-all transform active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-[#D83A2E] focus:ring-offset-2"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F49A24] text-[#25221F] text-xs font-bold flex items-center justify-center ring-2 ring-[#FFF7E9] animate-pulse">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

