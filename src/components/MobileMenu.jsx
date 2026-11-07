import { useEffect } from 'react';
import { X, Flame, ChevronRight, Phone, Mail, Coffee } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    onClose();
    const elem = document.getElementById(sectionId);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div className="relative w-4/5 max-w-sm bg-[#FFF7E9] h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto animate-in slide-in-from-left duration-300 border-r border-[#681C22]/15">
        
        {/* Top bar */}
        <div className="p-5 border-b border-[#681C22]/10 flex items-center justify-between bg-white/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#681C22] flex items-center justify-center text-white">
              <Flame className="w-4 h-4 text-[#FFD66B] fill-[#FFD66B]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight text-[#25221F]">
                Bhagvat <span className="text-[#D83A2E]">Prasadam</span>
              </span>
              <span className="text-[9px] font-bold text-[#681C22] tracking-wider uppercase">
                Bhavnagari Gathiya
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full text-[#25221F] hover:bg-[#681C22]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="px-5 py-4 flex-1 space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#681C22]/60 px-3 py-1">
            Explore Product
          </p>

          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>Product Overview</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>

          <a
            href="#ingredients"
            onClick={(e) => handleLinkClick(e, 'ingredients')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>Four Honest Ingredients</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>

          <a
            href="#banner"
            onClick={(e) => handleLinkClick(e, 'banner')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>The Chai Time Ritual</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>

          <a
            href="#texture"
            onClick={(e) => handleLinkClick(e, 'texture')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>Texture Anatomy</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>

          <a
            href="#heritage"
            onClick={(e) => handleLinkClick(e, 'heritage')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>Heritage &amp; Brass Jara Craft</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>

          <a
            href="#purity"
            onClick={(e) => handleLinkClick(e, 'purity')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>Purity Comparison</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>

          <a
            href="#reviews"
            onClick={(e) => handleLinkClick(e, 'reviews')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>Customer Reviews (4.9★)</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>

          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, 'faq')}
            className="flex items-center justify-between p-3 rounded-xl text-[#25221F] font-bold text-sm hover:bg-white hover:text-[#D83A2E] transition-colors"
          >
            <span>FAQs</span>
            <ChevronRight className="w-4 h-4 text-[#681C22]/40" />
          </a>
        </div>

        {/* Footer in Drawer */}
        <div className="p-5 border-t border-[#681C22]/10 bg-[#FFF7E9] space-y-3">
          <button
            type="button"
            onClick={(e) => handleLinkClick(e, 'banner')}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#681C22] text-[#FFD66B] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#52151A] transition-colors cursor-pointer"
          >
            <Coffee className="w-4 h-4" />
            <span>Discover The Chai Ritual</span>
          </button>

          <div className="pt-2 text-xs text-[#25221F]/70 space-y-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D83A2E]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#D83A2E]" />
              <span>info@bhagvatprasadam.com</span>
            </div>
          </div>
          <p className="text-[10px] text-center text-[#681C22]/60 pt-1">
            Nilkanthdham Poicha Tradition • Bhavnagari Gathiya
          </p>
        </div>

      </div>
    </div>
  );
}
