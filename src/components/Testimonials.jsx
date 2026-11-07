import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFF7E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
              COMMUNITY VOICES (SAMPLE REVIEWS)
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
              LOVE AT FIRST <span className="text-[#D83A2E]">CRUNCH.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#25221F]/70 mt-2">
              Stories from chai breaks, festive celebrations, and everyday snacking rituals across India.
            </p>
          </div>

          {/* Accessible Prev / Next Controls */}
          <div className="flex items-center gap-3 mt-6 sm:mt-0">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-2xl bg-white border border-[#681C22]/15 text-[#25221F] hover:bg-[#681C22] hover:text-white flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D83A2E]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-2xl bg-white border border-[#681C22]/15 text-[#25221F] hover:bg-[#681C22] hover:text-white flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D83A2E]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop 3-Card Grid + Mobile Carousel */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white p-8 border border-[#681C22]/10 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow"
            >
              <div>
                <Quote className="w-8 h-8 text-[#F49A24]/40 mb-4" />

                <div className="flex text-amber-500 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h3 className="font-display font-bold text-lg text-[#25221F] mb-3 leading-snug">
                  "{item.tagline}"
                </h3>

                <p className="text-sm text-[#25221F]/75 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#681C22]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-[#25221F]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#25221F]/60">
                    {item.city}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-[#681C22] bg-[#FFF7E9] px-2.5 py-1 rounded-full border border-[#681C22]/10">
                  {item.favoriteSnack}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Active Card View */}
        <div className="lg:hidden">
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-[#681C22]/10 shadow-md flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-[#F49A24]/40 mb-3" />

              <div className="flex text-amber-500 mb-3">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <h3 className="font-display font-bold text-lg text-[#25221F] mb-3 leading-snug">
                "{TESTIMONIALS[currentIndex].tagline}"
              </h3>

              <p className="text-sm text-[#25221F]/80 leading-relaxed font-normal">
                {TESTIMONIALS[currentIndex].quote}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#681C22]/10 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-base text-[#25221F]">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-xs text-[#25221F]/60">
                  {TESTIMONIALS[currentIndex].city}
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#681C22] bg-[#FFF7E9] px-2.5 py-1 rounded-full border border-[#681C22]/10">
                {TESTIMONIALS[currentIndex].favoriteSnack}
              </span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-[#D83A2E]' : 'w-2 bg-[#681C22]/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Transparency note */}
        <p className="text-[11px] text-center text-[#25221F]/50 mt-8 italic">
          * Demonstrative sample reviews illustrating customer enthusiasm for authentic Indian namkeen.
        </p>

      </div>
    </section>
  );
}

