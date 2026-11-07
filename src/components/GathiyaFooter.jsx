import { Flame, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export default function GathiyaFooter() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#681C22] text-white pt-16 sm:pt-20 pb-20 sm:pb-12 border-t-4 border-[#D83A2E] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D83A2E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-white text-[#681C22] flex items-center justify-center shadow-md">
                <Flame className="w-6 h-6 text-[#D83A2E] fill-[#D83A2E]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl text-white leading-none">
                  Bhagvat <span className="text-[#FFD66B]">Prasadam</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-amber-200">
                  Bhavnagari Gathiya
                </span>
              </div>
            </div>

            <p className="text-base font-semibold text-[#FFD66B] font-display">
              "Crispy Outside. Pillowy Inside. Har Bite Mein Kathiyawadi Swag."
            </p>

            <p className="text-xs text-white/70 leading-relaxed max-w-md">
              Honoring the sacred culinary traditions of Nilkanthdham Poicha and Bhavnagar, Gujarat. Prepared strictly in cold-pressed groundnut oil, using 100% pure desi besan, coarsely cracked Tellicherry black pepper, and fragrant ajwain.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#D83A2E] text-white flex items-center justify-center transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#D83A2E] text-white flex items-center justify-center transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#D83A2E] text-white flex items-center justify-center transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-[#FFD66B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-white transition-colors">
                  Product Overview &amp; Formats
                </a>
              </li>
              <li>
                <a href="#ingredients" onClick={(e) => scrollTo(e, 'ingredients')} className="hover:text-white transition-colors">
                  Four Honest Ingredients
                </a>
              </li>
              <li>
                <a href="#banner" onClick={(e) => scrollTo(e, 'banner')} className="hover:text-white transition-colors">
                  The Chai Time Ritual
                </a>
              </li>
              <li>
                <a href="#texture" onClick={(e) => scrollTo(e, 'texture')} className="hover:text-white transition-colors">
                  Dual Texture Anatomy
                </a>
              </li>
              <li>
                <a href="#heritage" onClick={(e) => scrollTo(e, 'heritage')} className="hover:text-white transition-colors">
                  Heritage &amp; Brass Jara Craft
                </a>
              </li>
              <li>
                <a href="#purity" onClick={(e) => scrollTo(e, 'purity')} className="hover:text-white transition-colors">
                  Purity vs Market Packets
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => scrollTo(e, 'reviews')} className="hover:text-white transition-colors">
                  Customer Reviews (2,480+)
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-[#FFD66B]">
              Kitchen &amp; Order Support
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFD66B] shrink-0 mt-0.5" />
                <span>Bhagvat Prasadam Farsan Kendra, Nilkanthdham Poicha, Rajpipla Highway, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFD66B] shrink-0" />
                <span>+91 98765 43210 (Toll Free Customer Care)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFD66B] shrink-0" />
                <span>orders@bhagvatprasadam.com</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider block mb-1">
                Safe &amp; Authenticated Delivery
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono font-bold text-white/85">
                <span className="px-2 py-0.5 rounded bg-white/10">UPI</span>
                <span className="px-2 py-0.5 rounded bg-white/10">RuPay</span>
                <span className="px-2 py-0.5 rounded bg-white/10">Visa</span>
                <span className="px-2 py-0.5 rounded bg-white/10">Mastercard</span>
                <span className="px-2 py-0.5 rounded bg-white/10">Cash on Delivery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 Bhagvat Prasadam. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-[#D83A2E] fill-[#D83A2E]" /> for authentic Gujarati farsan lovers.
          </p>
        </div>

      </div>
    </footer>
  );
}
