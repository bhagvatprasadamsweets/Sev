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
                    alt="Bhagvat Prasadam Sev Logo"
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

        {/* Footer Mobile App Promotion Bar (Matching Exact Footer Background) */}
        <div className="w-full border-t border-[#E8DCC8] bg-[#FFF8E9] py-1.5 sm:py-2 px-3 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2.5 text-center">
            {/* Desktop Typography */}
            <span className="hidden sm:inline text-xs font-semibold text-[#3B2418]">
              Install <strong className="font-bold text-[#3B2418]">Bhagvat Prasadam</strong> App &amp; Get{' '}
              <span className="font-bold text-[#B83220]">2% Extra Discount</span> on App!
            </span>
            <span className="hidden sm:inline text-xs font-medium text-[#7A5F4F]">
              Available on:
            </span>

            {/* Mobile Typography (Compact so both buttons fit on 1 single line on 360px screens) */}
            <span className="sm:hidden text-[11px] font-semibold text-[#3B2418]">
              Install App &amp; Get <span className="font-bold text-[#B83220]">2% Off:</span>
            </span>

            {/* Play Store & App Store Pill Badges */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
              <a
                href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Google Play Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.296 2.296 0 0 1 3 20.575V3.425c0-.623.226-1.196.609-1.611z" fill="#00E676" />
                  <path d="M17.207 8.586L5.05 1.57A2.28 2.28 0 0 0 3.61 1.814l10.184 10.185 3.413-3.413z" fill="#FFD600" />
                  <path d="M3.61 22.186c.427.351.983.473 1.44.244l12.157-7.016-3.414-3.414L3.61 22.186z" fill="#FF3D00" />
                  <path d="M21.577 11.127l-4.37-2.541-3.414 3.414 3.414 3.414 4.37-2.541a1.004 1.004 0 0 0 0-1.746z" fill="#00B0FF" />
                </svg>
                <span>Play Store</span>
              </a>

              <a
                href="https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Apple App Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.7-11.72-13.97-6.3-9.5-11.11-20.4-14.42-32.69-3.32-12.28-4.97-23.77-4.97-34.46 0-15.01 3.8-27.42 11.41-37.22 7.61-9.79 17.06-14.78 28.36-14.97 4.58 0 9.8 1.15 15.66 3.44 5.86 2.3 9.79 3.52 11.79 3.67 1.63 0 5.73-1.32 12.31-3.95 6.58-2.63 12.1-3.79 16.57-3.48 12.28.98 22.19 5.48 29.74 13.51-10.76 6.52-16.03 15.54-15.82 27.05.22 8.91 3.59 16.41 10.11 22.5 6.53 6.09 14.13 9.78 22.82 11.09-2.07 6.3-4.57 12.72-7.51 19.27zM119.22 33.15c0-7.39 2.66-14.34 7.99-20.86 5.33-6.52 11.96-10.65 19.89-12.29.22 1.3.33 2.45.33 3.44 0 7.39-2.82 14.4-8.47 21.03-5.65 6.63-12.39 10.6-20.21 11.89-.11-1.08-.16-2.16-.16-3.21z" />
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip with Thin Light-Gold Top Border */}
        <div className="w-full border-t border-[#E8DCC8]/80 bg-[#FFF8E9] text-center py-3.5 text-xs text-[#7A5F4F] relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1">
            <p>
              © {new Date().getFullYear()} <strong className="text-[#3B2418]">bhagvatprasadam</strong> All Rights Reserved.
              <span className="text-[#9B7B6C] text-xs font-normal">  Powered by <a href="https://megascale.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#F28C28] transition-colors font-medium">Megascale</a></span>
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
