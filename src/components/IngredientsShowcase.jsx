import { Sparkles, Check } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function IngredientsShowcase() {
  return (
    <section id="ingredients" className="py-16 sm:py-24 bg-[#FFF7E9] relative border-b border-[#681C22]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
            FOUR HONEST INGREDIENTS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            NOTHING HIDDEN. <br />
            <span className="text-[#D83A2E]">JUST PURE HERITAGE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#25221F]/70 mt-2 leading-relaxed">
            Take a closer look at our recipe: zero maida, zero palm oil, zero chemical food colorings, and zero artificial preservatives.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GATHIYA_PRODUCT.ingredientsList.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-7 border border-[#681C22]/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF7E9] text-[#681C22] border border-[#681C22]/10 mb-4 inline-block">
                  {item.highlight}
                </span>

                <h3 className="font-display font-black text-xl text-[#25221F] mb-0.5">
                  {item.name}
                </h3>
                <p className="text-xs font-bold text-[#D83A2E] mb-3">
                  {item.role}
                </p>

                <p className="text-xs sm:text-sm text-[#25221F]/70 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% Shuddh &amp; Natural</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
