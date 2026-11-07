import { CheckCircle2, ShieldCheck, Leaf, Activity, PackageCheck } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function ProductDetailsAccordion() {
  const { activeProduct } = useSevProduct();

  return (
    <section id="details" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#3B2418] tracking-tight mt-2.5">
            {activeProduct.title} Details &amp; Facts
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Verified nutritional breakdown, 100% pure Sing Tel ingredients, and crispness storage facts for authentic {activeProduct.title}.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          
          {/* COLUMN 1: Product Specifications & Ingredients */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Card 1: Specifications */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <ShieldCheck className="w-5 h-5 text-[#E5A323]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Product Specifications ({activeProduct.title})
                </h3>
              </div>
              <div className="divide-y divide-[#E8DCC8]/50 text-xs sm:text-sm">
                {activeProduct.specs.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between gap-4">
                    <span className="text-[#7A5F4F]">{item.label}</span>
                    <span className="font-bold text-[#3B2418] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Ingredients */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <Leaf className="w-5 h-5 text-[#2E7D32]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Ingredients &amp; Spices
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#3B2418] mb-3.5">
                {activeProduct.ingredientsList.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
              <div className="p-2.5 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] text-xs text-[#7A5F4F]">
                <strong>Allergen Advice:</strong> Contains Groundnut Oil (Sing Tel) &amp; Gram Flour. 100% Pure Vegetarian &amp; Satvik recipe.
              </div>
            </div>

          </div>

          {/* COLUMN 2: Nutritional Facts & Storage Guarantee */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Card 3: Nutrition Information Table */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <Activity className="w-5 h-5 text-[#B83220]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Nutritional Value (Approx. per 100g)
                </h3>
              </div>
              <div className="divide-y divide-[#E8DCC8]/50 text-xs sm:text-sm">
                {activeProduct.nutritionData.map((nut, idx) => (
                  <div
                    key={idx}
                    className={`py-2 flex justify-between gap-4 ${
                      nut.isSub ? 'pl-4 text-[#7A5F4F]' : 'font-bold text-[#3B2418]'
                    }`}
                  >
                    <span>{nut.name}</span>
                    <span className="font-mono">{nut.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Packaging & Freshness Assurance */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <PackageCheck className="w-5 h-5 text-[#E5A323]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Packaging &amp; Freshness Guarantee
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#7A5F4F]">
                <p>
                  <strong>60 Days Shelf Life:</strong> Packed fresh in food-grade multi-layer barrier foil pouches equipped with a heavy-duty resealable zipper to keep moisture out and lock in maximum crunch.
                </p>
                <p>
                  <strong>Direct Courier Dispatch:</strong> Dispatched within 24 hours across all pincodes in India via express surface couriers.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
