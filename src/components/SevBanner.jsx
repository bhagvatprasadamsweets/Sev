import { ExternalLink, ShoppingBag } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function SevBanner() {
  const { activeProduct } = useSevProduct();

  const currentBanner = activeProduct.bannerImage || '/images/sev/aaloo/aaloo-banner.webp';

  return (
    <section id="promo-banner" className="py-6 sm:py-8 md:py-10 bg-[#FFF8E9] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clickable Banner with Direct Product Buy Link */}
        <a
          href={activeProduct.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam Official Store`}
          className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8DCC8] hover:border-[#E5A323] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
        >
          {/* High-Resolution Promotional Banner Image */}
          <div className="relative w-full aspect-[1024/426] overflow-hidden bg-[#FFF8E9]">
            <img
              src={currentBanner}
              alt={`${activeProduct.title} Bhagvat Prasadam Authentic Indian Namkeen Snack`}
              className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Floating "Order Online" Callout Badge (Bottom-Right) */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl border border-[#E8DCC8] flex items-center gap-2 text-xs sm:text-sm font-black text-[#3B2418] shadow-lg group-hover:bg-[#E5A323] group-hover:text-[#3B2418] transition-all transform group-hover:scale-105">
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F28C28] group-hover:text-[#3B2418]" />
              <span>Buy {activeProduct.title} Online</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}
