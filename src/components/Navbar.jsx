import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ShoppingBag } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeProduct } = useSevProduct();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and prevent background touch scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isMobileMenuOpen]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Our Story', href: 'story' },
    { name: 'Why Our Sev', href: 'why-us' },
    { name: 'Showcase', href: 'product-showcase' },
    { name: 'Details', href: 'details' },
    { name: 'How to Enjoy', href: 'how-to-enjoy' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF8E9]/95 backdrop-blur-md shadow-sm border-b border-[#E8DCC8] py-2 sm:py-2.5'
            : 'bg-[#FFF8E9] py-2.5 sm:py-3.5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Hamburger Trigger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="p-2 -ml-2 rounded-xl text-[#3B2418] hover:bg-[#E8DCC8]/40 transition-colors cursor-pointer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo (Left) */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <a
                href="#hero"
                onClick={(e) => scrollTo(e, 'hero')}
                className="inline-flex items-center gap-2 group cursor-pointer focus:outline-none py-1"
                title="Bhagvat Prasadam Authentic Sev Collection"
              >
                <img
                  src="/Logo.png"
                  alt="Bhagvat Prasadam Official Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
                <span className="hidden sm:inline-block font-display font-black text-sm tracking-tight text-[#3B2418]">
                  SEV COLLECTION
                </span>
              </a>
            </div>

            {/* Navigation Links (Center - Desktop) */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-xs font-bold uppercase tracking-wider text-[#3B2418] hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Buy Now Button */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href={activeProduct.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                title="Buy Now on Bhagvat Prasadam"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Buy Now</span>
              </a>
            </div>

            {/* Symmetrical Spacer for Mobile Layout to Keep Logo Centered */}
            <div className="w-10 sm:hidden" aria-hidden="true" />

          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop with touch scroll cancellation */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity touch-none"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel with internal scroll only */}
          <div className="relative w-4/5 max-w-sm bg-[#FFF8E9] h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto overscroll-contain animate-in slide-in-from-left duration-300 border-r border-[#E8DCC8]">
            {/* Drawer Top */}
            <div className="p-4 border-b border-[#E8DCC8] flex items-center justify-between bg-white/60">
              <a
                href="#hero"
                onClick={(e) => scrollTo(e, 'hero')}
                className="inline-flex items-center gap-2 cursor-pointer"
                title="Bhagvat Prasadam Sev"
              >
                <img
                  src="/Logo.png"
                  alt="Bhagvat Prasadam"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-display font-black text-xs text-[#3B2418]">
                  SEV COLLECTION
                </span>
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full text-[#3B2418] hover:bg-[#E8DCC8]/40 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <div className="px-5 py-4 flex-1 space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A5F4F] px-3 py-1">
                Navigation
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-[#3B2418] font-bold text-sm hover:bg-white hover:text-[#F28C28] transition-colors"
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Drawer Footer with Buy Now Button */}
            <div className="p-4 border-t border-[#E8DCC8] bg-[#FFF8E9] space-y-2">
              <a
                href={activeProduct.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E5A323] text-[#3B2418] font-black text-xs uppercase tracking-wider shadow-md hover:bg-[#F28C28] hover:text-white transition-colors cursor-pointer"
              >
                <span>Buy Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-center text-[#7A5F4F] pt-1">
                100% Pure Sing Tel Nilkanthdham Poicha Tradition
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
