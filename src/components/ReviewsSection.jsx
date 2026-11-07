import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Zap, ExternalLink } from 'lucide-react';
import { BHAVNAGRI_PRODUCT, PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = BHAVNAGRI_PRODUCT.reviews;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FFF8E9] border-b border-[#E8DCC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5A323]/20 border border-[#E5A323]/40 text-[#3B2418] text-xs font-black tracking-widest uppercase mb-3">
            COMMUNITY FEEDBACK
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#3B2418] tracking-tight leading-tight">
            Customer Reviews
          </h2>
          <p className="text-sm sm:text-base text-[#7A5F4F] mt-2">
            Real experiences from families across India who take their farsan seriously.
          </p>
        </div>

        {/* Aggregate Ratings Score Card */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E8DCC8] shadow-sm max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="font-display font-black text-5xl text-[#3B2418]">
                {BHAVNAGRI_PRODUCT.rating}
              </span>
              <div>
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#7A5F4F] font-bold mt-0.5">
                  Based on {BHAVNAGRI_PRODUCT.reviewsCount} verified reviews
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Verified Purchases
            </span>
          </div>
        </div>

        {/* Carousel / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-white p-6 border border-[#E8DCC8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    {rev.date}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-[#3B2418] mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-[#3B2418]/75 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DCC8]/60">
                <h5 className="font-display font-bold text-sm text-[#3B2418]">
                  {rev.name}
                </h5>
                <p className="text-xs text-[#7A5F4F]">{rev.location}</p>
                <p className="text-[10px] text-[#F28C28] font-bold mt-1">
                  {rev.variant}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Controls */}
        <div className="flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full bg-white border border-[#E8DCC8] flex items-center justify-center text-[#3B2418] hover:bg-[#E5A323] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-[#7A5F4F]">
            {currentIndex + 1} of {reviews.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="w-10 h-10 rounded-full bg-white border border-[#E8DCC8] flex items-center justify-center text-[#3B2418] hover:bg-[#E5A323] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Buy Now CTA */}
        <div className="mt-10 text-center">
          <a
            href={PRODUCT_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Join 1,890+ Happy Snackers — Buy Mix Chavanu</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>
        </div>

      </div>
    </section>
  );
}

