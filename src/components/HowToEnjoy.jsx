import { ExternalLink } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function HowToEnjoy() {
  const { activeProduct } = useSevProduct();

  const rituals = [
    {
      step: '01',
      title: 'Daily Cutting Chai Break',
      gujarati: 'ગરમા-ગરમ કટિંગ ચા સાથે',
      occasion: 'The 4 PM Tea Ritual',
      pairing: 'Steaming Ginger-Cardamom Masala Chai',
      description:
        'A bowl of crunchy Ratlami Sev or Aaloo Sev paired with piping hot cutting chai. The peppery, savory crunch cuts through the sweet warmth of tea for pure tea-time bliss.',
      image: '/images/sev/ratlami/ratlami-3.webp',
    },
    {
      step: '02',
      title: 'Kathiyawadi Sev Tameta Shaak',
      gujarati: 'કાઠિયાવાડી સેવ ટમેટા શાક',
      occasion: 'Traditional Gujarati Meal',
      pairing: 'Warm Bajri Rotla or Soft Phulkas',
      description:
        'The crowned jewel of Saurashtra dining! Simmer ripe tomatoes with spices and top generously with thick Ratlami Sev or Special Besan Sev right before serving.',
      image: '/images/sev/ratlami/ratlami-4.webp',
    },
    {
      step: '03',
      title: 'Street-Style Sev Puri & Bhel',
      gujarati: 'ચાટ, ભેળ અને સેવ પૂરી',
      occasion: 'Zesty Street Food Creation',
      pairing: 'Crispy Puris, Boiled Potatoes & Chutneys',
      description:
        'Shower your homemade Sev Puri, Sukha Bhel, or Dahi Papdi with fine Special Besan Sev and crisp Aaloo Sev for that authentic mouthwatering crunch.',
      image: '/images/sev/besan/besan-4.webp',
    },
    {
      step: '04',
      title: 'Poha, Upma & Khichdi Topping',
      gujarati: 'પૌંઆ અને ખીચડી ઉપર ક્રિસ્પી સેવ',
      occasion: 'Comfort Food Crunch Booster',
      pairing: 'Gujarati Bataka Poha or Warm Khichdi',
      description:
        'Elevate everyday comfort meals! Sprinkle a crisp handful over morning lemon bataka poha or comforting curd-khichdi for an irresistible savory boost.',
      image: '/images/sev/aaloo/aaloo-3.webp',
    },
  ];

  return (
    <section id="how-to-enjoy" className="py-10 sm:py-14 md:py-16 bg-[#FFFDF8] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Elegant Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight mt-2.5">
            How Gujarat Truly Enjoys <br />
            <span className="text-[#F28C28]">Authentic Sev</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2 leading-relaxed">
            Four timeless culinary rituals celebrating the crispness and aromatic spice blends of Bhagvat Prasadam Sev.
          </p>
        </div>

        {/* 4 Lifestyle Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {rituals.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-[#E8DCC8] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF8E9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider">
                    {item.occasion}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 text-left">
                  <div className="text-[11px] font-bold text-[#A8681E] mb-1">
                    {item.gujarati}
                  </div>
                  <h3 className="font-display font-black text-base sm:text-lg text-[#3B2418] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A5F4F] leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Pairing Footer */}
              <div className="p-4 pt-0">
                <div className="p-2.5 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] text-[11px] text-[#3B2418]">
                  <span className="font-bold text-[#A8681E]">Perfect with: </span>
                  {item.pairing}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href={activeProduct.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Order Fresh Sev on Bhagvat Prasadam</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
