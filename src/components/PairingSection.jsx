import { Flame, Salad, Soup, Coffee, Sparkles } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function PairingSection() {
  const icons = {
    Flame: Flame,
    Salad: Salad,
    Soup: Soup,
    Coffee: Coffee
  };

  return (
    <section id="pairings" className="py-20 sm:py-28 bg-[#FFF7E9] border-b border-[#681C22]/10 relative overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F49A24]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
            THE AUTHENTIC RITUAL
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            HOW GUJARAT SAVOURS <br />
            <span className="text-[#D83A2E]">BHAVNAGARI GATHIYA.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#25221F]/75 mt-3 leading-relaxed">
            In Saurashtra, enjoying gathiya isn't just snacking — it is a cherished morning and evening communion. Here is the quartet that completes the plate.
          </p>
        </div>

        {/* 4 Cultural Accompaniments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {GATHIYA_PRODUCT.pairingRituals.map((ritual, idx) => {
            const Icon = icons[ritual.icon] || Flame;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white p-7 border border-[#681C22]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF7E9] border border-[#681C22]/10 flex items-center justify-center text-[#D83A2E] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-black text-xl text-[#25221F] mb-2 leading-tight">
                    {ritual.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#25221F]/70 leading-relaxed font-normal">
                    {ritual.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#681C22]/10 text-[11px] font-bold text-[#681C22] uppercase tracking-wider">
                  Mandatory Sidekick
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Spread Gallery */}
        <div className="rounded-3xl overflow-hidden bg-white border border-[#681C22]/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-64 sm:h-96 relative overflow-hidden">
            <img
              src={GATHIYA_PRODUCT.images.traditionalThali}
              alt="Traditional Gujarati brass platter loaded with fresh Bhavnagari gathiya, chillies, sambharo, and chai"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-white font-bold text-sm">
                Kathiyawadi Thali Setup • Nilkanthdham Poicha Tradition
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-bold text-[#D83A2E] uppercase tracking-wider mb-2">
              Sunday Morning Tradition
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#25221F] mb-3 leading-snug">
              Dip, Crunch, Sip, Repeat.
            </h3>
            <p className="text-xs sm:text-sm text-[#25221F]/75 leading-relaxed mb-6">
              Nothing awakens the soul quite like dipping warm, pepper-flecked Bhavnagari gathiya into a bowl of sweet-tangy Gujarati kadhi, chasing it with a crunch of mustard papaya sambharo, and washing it down with Kadak masala chai.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FFF7E9] border border-[#F49A24]/30 text-xs text-[#681C22] font-semibold">
              💡 <strong>Pro Tip:</strong> Order our 1.5kg Feast Trio to receive a complimentary sachet of Sambharo spice blend!
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

