import { Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { useSevProduct } from '../context/SevProductContext';

export default function Footer() {
  const { activeProduct, products, keys } = useSevProduct();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-[#FFF8E9] text-[#3B2418] border-t border-[#E8DCC8] pt-12 sm:pt-16 pb-0 relative overflow-hidden">
        {/* Ambient Warm Underglow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#E5A323]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-8">
            
            {/* Column 1: Brand Info (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, 'hero')}
                  className="inline-flex items-center gap-2 group cursor-pointer focus:outline-none"
                  title="Bhagvat Prasadam Sev Collection"
                >
                  <img
                    src="/Logo.png"
                    alt="Bhagvat Prasadam Official Logo"
                    className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="font-display font-black text-sm text-[#3B2418]">
                    SEV COLLECTION
                  </span>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#7A5F4F] leading-relaxed max-w-sm">
                Bhagvat Prasadam brings the sacred culinary heritage of authentic Indian Sev (Aaloo Sev, Ratlami Sev, Special Besan Sev) and Kathiyawadi namkeen-making into modern homes across India.
              </p>

              <p className="text-sm font-bold text-[#A8681E] font-display tracking-wide">
                Pure Sing Tel. Sacred Tradition. Unbeatable Crunch.
              </p>
            </div>

            {/* Column 2: 3 Sev Products (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Our Sev Collection
              </h4>
              <ul className="space-y-2 text-xs text-[#5A3B2B] font-medium">
                {keys.map((k) => (
                  <li key={k}>
                    <a
                      href={products[k].buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F28C28] transition-colors flex items-center justify-between group"
                    >
                      <span className="font-bold">{products[k].title} ({products[k].titleHindi})</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#5A3B2B] font-medium">
                <li>
                  <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#product-showcase" onClick={(e) => scrollTo(e, 'product-showcase')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Showcase
                  </a>
                </li>
                <li>
                  <a href="#story" onClick={(e) => scrollTo(e, 'story')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Why Our Sev
                  </a>
                </li>
                <li>
                  <a href="#product-showcase" onClick={(e) => scrollTo(e, 'product-showcase')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Showcase
                  </a>
                </li>
                <li>
                  <a href="#how-to-enjoy" onClick={(e) => scrollTo(e, 'how-to-enjoy')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    How to Enjoy
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Contact Info
              </h4>
              <div className="space-y-2.5 text-xs text-[#5A3B2B]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#A8681E] shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-[#F28C28] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#A8681E] shrink-0" />
                  <a href="mailto:orders@bhagvatprasadam.com" className="hover:text-[#F28C28] transition-colors">
                    orders@bhagvatprasadam.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A8681E] shrink-0 mt-0.5" />
                  <span>
                    Nilkanthdham Road, Poicha, Narmada District, Gujarat 393145
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Screen Minimalist Line-Art Heritage Banner at Bottom of Footer */}
        <div className="w-full bg-[#FFF8E9] overflow-hidden">
          <img
            src="/images/sev/footer-lineart-banner.png"
            alt="Bhagvat Prasadam Authentic Sev Collection Traditional Line Art Banner"
            className="w-full h-auto block select-none"
            loading="lazy"
          />
        </div>

        {/* Bottom Copyright & SEO Semantic Keyword Line */}
        <div className="w-full relative z-10 text-center py-4 text-xs text-[#7A5F4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
            <p>
              © {new Date().getFullYear()} <strong className="text-[#3B2418]">bhagvatprasadam</strong> All Rights Reserved.
              <span className="text-[#9B7B6C] text-xs font-normal">  Powered by <a href="https://megascale.in" target="_blank">Megascale</a></span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Contact Widget */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full bg-[#7A3E1D] hover:bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer ring-4 ring-white/60"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 fill-current" />
      </a>
    </>
  );
}
