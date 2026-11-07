import { Star, CheckCircle2 } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function GathiyaReviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FFF7E9] border-b border-[#681C22]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
            <Star className="w-3.5 h-3.5 text-[#F49A24] fill-[#F49A24]" />
            COMMUNITY LOVE
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            PRAISED BY 2,480+ <br />
            <span className="text-[#D83A2E]">GUJARATI SNACK LOVERS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#25221F]/75 mt-3 leading-relaxed">
            Real feedback from households who take their morning tea and Sunday gathiya seriously.
          </p>
        </div>

        {/* Aggregate Score Card */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#681C22]/15 shadow-sm max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-display font-black text-5xl sm:text-6xl text-[#25221F]">
              4.9
            </span>
            <div className="flex text-amber-500 justify-center md:justify-start gap-1 my-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-500 font-bold">
              Based on 2,480+ verified reviews
            </p>
          </div>

          <div className="w-full md:w-1/2 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-12 font-bold">5 Stars</span>
              <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#D83A2E] h-full rounded-full w-[92%]" />
              </div>
              <span className="w-10 text-right text-gray-500 font-bold">92%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 font-bold">4 Stars</span>
              <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#F49A24] h-full rounded-full w-[7%]" />
              </div>
              <span className="w-10 text-right text-gray-500 font-bold">7%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 font-bold">3 Stars</span>
              <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-300 h-full rounded-full w-[1%]" />
              </div>
              <span className="w-10 text-right text-gray-500 font-bold">1%</span>
            </div>
          </div>
        </div>

        {/* Individual Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GATHIYA_PRODUCT.reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-white p-7 border border-[#681C22]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-semibold">{rev.date}</span>
                </div>

                <h4 className="font-display font-bold text-base text-[#25221F] mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-[#25221F]/75 leading-relaxed font-normal">
                  {rev.comment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-display font-bold text-sm text-[#25221F]">
                      {rev.author}
                    </h5>
                    <p className="text-[11px] text-gray-500">{rev.location}</p>
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-[#681C22] font-semibold mt-1">
                  Ordered: {rev.bundleBought}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
