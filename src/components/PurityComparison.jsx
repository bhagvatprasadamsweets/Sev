import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function PurityComparison() {
  return (
    <section id="purity" className="py-20 sm:py-28 bg-[#FFFDF8] border-b border-[#681C22]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D83A2E]" />
            PURITY &amp; INGREDIENT HONESTY
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            NOT ALL GATHIYA IS <br />
            <span className="text-[#D83A2E]">CREATED EQUAL.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#25221F]/75 mt-3 leading-relaxed">
            See how Bhagvat Prasadam's sacred Nilkanthdham tradition compares to factory mass-produced supermarket namkeen.
          </p>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="rounded-3xl overflow-hidden border border-[#681C22]/15 shadow-xl bg-white">
          
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#681C22] text-white p-4 sm:p-6 items-center">
            <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm font-black uppercase tracking-wider text-amber-200">
              Quality Standards
            </div>
            <div className="col-span-4 sm:col-span-4 text-center font-display font-black text-xs sm:text-lg text-white flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FFD66B]" />
              <span>Bhagvat Prasadam</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-center text-xs sm:text-sm font-bold text-white/60">
              Ordinary Market Packets
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {GATHIYA_PRODUCT.purityComparison.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-[#FFF7E9]/40 transition-colors"
              >
                {/* Metric */}
                <div className="col-span-4 sm:col-span-4 pr-2">
                  <h4 className="font-display font-bold text-xs sm:text-base text-[#25221F]">
                    {row.metric}
                  </h4>
                </div>

                {/* Bhagvat Prasadam Column (Winner) */}
                <div className="col-span-4 sm:col-span-4 px-2 sm:px-4 text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#681C22] bg-[#FFF7E9] px-2.5 py-1.5 rounded-xl border border-[#F49A24]/30 w-full justify-center">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="line-clamp-2">{row.bhagvat}</span>
                  </div>
                </div>

                {/* Ordinary Market Column */}
                <div className="col-span-4 sm:col-span-4 px-2 sm:px-4 text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-xl border border-gray-200 w-full justify-center">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="line-clamp-2">{row.commercial}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="bg-[#FFF7E9] p-4 text-center border-t border-[#681C22]/10 text-xs font-semibold text-[#681C22]">
            ✓ Made with authentic Bhavnagar karigar traditions under Nilkanthdham Poicha culinary guidance.
          </div>
        </div>

      </div>
    </section>
  );
}

