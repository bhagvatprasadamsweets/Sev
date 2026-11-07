import { Sparkles, CheckCircle2 } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function NutritionAndIngredients() {
  return (
    <section id="nutrition" className="py-20 sm:py-28 bg-[#FFFDF8] border-b border-[#681C22]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
            CLEAN LABEL TRANSPARENCY
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            INGREDIENTS &amp; <br />
            <span className="text-[#D83A2E]">NUTRITION FACTS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#25221F]/75 mt-3 leading-relaxed">
            Every batch of Bhagvat Prasadam Bhavnagari Gathiya is made with pure, whole-food ingredients you would find in an authentic Kathiyawadi home kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Ingredients & Highlights (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border border-[#681C22]/15 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#D83A2E] block mb-1">
                Authentic Recipe
              </span>
              <h3 className="font-display font-black text-2xl text-[#25221F]">
                100% Honest Ingredients
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {GATHIYA_PRODUCT.ingredients.map((ing, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFF7E9] border border-[#681C22]/10 text-xs font-bold text-[#25221F]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>

            {/* Purity Guarantee Badges */}
            <div className="pt-4 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-[#FFF7E9] border border-[#681C22]/10">
                <span className="font-display font-black text-lg text-[#681C22] block">0%</span>
                <span className="text-[10px] text-gray-600 font-bold uppercase">Palm Oil</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FFF7E9] border border-[#681C22]/10">
                <span className="font-display font-black text-lg text-[#681C22] block">0g</span>
                <span className="text-[10px] text-gray-600 font-bold uppercase">Trans Fats</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FFF7E9] border border-[#681C22]/10">
                <span className="font-display font-black text-lg text-[#681C22] block">60 Days</span>
                <span className="text-[10px] text-gray-600 font-bold uppercase">Shelf Life</span>
              </div>
            </div>
          </div>

          {/* Right: Nutrition Facts Table (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border border-[#681C22]/15 shadow-sm">
            <div className="border-b-4 border-black pb-3 mb-4">
              <h3 className="font-display font-black text-3xl text-black uppercase tracking-tight">
                Nutrition Facts
              </h3>
              <p className="text-xs text-gray-500 font-bold">
                Serving Size: Approx 30g • Servings per 500g pouch: ~16
              </p>
            </div>

            <div className="flex justify-between items-baseline border-b-2 border-black pb-2 mb-3">
              <span className="font-black text-sm uppercase">Energy Value</span>
              <span className="font-black text-2xl font-mono">530 kcal</span>
            </div>

            <div className="divide-y divide-gray-200 text-xs">
              {GATHIYA_PRODUCT.nutritionPer100g.map((row, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-gray-700">{row.label}</span>
                  <span className="font-bold text-black font-mono">{row.value}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-gray-400 mt-4 leading-tight">
              * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
