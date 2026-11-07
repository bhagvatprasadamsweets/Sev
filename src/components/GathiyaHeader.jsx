import { useState, useEffect } from 'react';
import { Menu, Flame, ArrowRight } from 'lucide-react';

export default function GathiyaHeader({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF7E9]/95 backdrop-blur-md shadow-sm border-b border-[#681C22]/10 py-3'
          : 'bg-[#FFF7E9] py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={onOpenMobileMenu}
              aria-label="Open menu"
              className="p-2 -ml-2 rounded-xl text-[#25221F] hover:bg-[#681C22]/10 transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo Brand: Bhagvat Prasadam Bhavnagari Gathiya */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, 'hero')}
              className="inline-flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#681C22] flex items-center justify-center text-white shadow-md transform group-hover:rotate-6 transition-transform">
                <Flame className="w-5 h-5 text-[#FFD66B] fill-[#FFD66B]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#25221F] leading-none">
                  Bhagvat <span className="text-[#D83A2E]">Prasadam</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-black text-[#681C22]/80 leading-tight">
                  Bhavnagari Gathiya
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7">
            <a
              href="#ingredients"
              onClick={(e) => scrollTo(e, 'ingredients')}
              className="text-xs font-bold text-[#25221F] hover:text-[#D83A2E] transition-colors"
            >
              Ingredients
            </a>
            <a
              href="#banner"
              onClick={(e) => scrollTo(e, 'banner')}
              className="text-xs font-bold text-[#25221F] hover:text-[#D83A2E] transition-colors"
            >
              The Ritual
            </a>
            <a
              href="#texture"
              onClick={(e) => scrollTo(e, 'texture')}
              className="text-xs font-bold text-[#25221F] hover:text-[#D83A2E] transition-colors"
            >
              Texture Anatomy
            </a>
            <a
              href="#heritage"
              onClick={(e) => scrollTo(e, 'heritage')}
              className="text-xs font-bold text-[#25221F] hover:text-[#D83A2E] transition-colors"
            >
              Heritage &amp; Craft
            </a>
            <a
              href="#purity"
              onClick={(e) => scrollTo(e, 'purity')}
              className="text-xs font-bold text-[#25221F] hover:text-[#D83A2E] transition-colors"
            >
              Why It's Pure
            </a>
            <a
              href="#reviews"
              onClick={(e) => scrollTo(e, 'reviews')}
              className="text-xs font-bold text-[#25221F] hover:text-[#D83A2E] transition-colors"
            >
              Reviews (4.9★)
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollTo(e, 'faq')}
              className="text-xs font-bold text-[#25221F] hover:text-[#D83A2E] transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Right: Clean Editorial Action Button */}
          <div className="flex items-center space-x-3">
            <a
              href="#banner"
              onClick={(e) => scrollTo(e, 'banner')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#681C22] text-[#FFD66B] text-xs font-bold uppercase tracking-wider hover:bg-[#52151A] transition-colors shadow-sm cursor-pointer"
            >
              <span>The Morning Ritual</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFD66B]" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
