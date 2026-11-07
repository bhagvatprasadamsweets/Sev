import { Sparkles, Utensils, Award } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function TextureBreakdown() {
  return (
    <section id="texture" className="py-20 sm:py-28 bg-[#FFFDF8] border-b border-[#681C22]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D83A2E]/10 border border-[#D83A2E]/20 text-[#D83A2E] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            THE ARTISANAL SECRET
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            WHY BHAVNAGARI GATHIYA IS <br />
            <span className="text-[#D83A2E]">IN A LEAGUE OF ITS OWN.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#25221F]/75 mt-3 leading-relaxed">
            Unlike commercial sev that turns hard or sharp, true Bhavnagari gathiya possesses a delicate duality: a light crispy shell that yields instantly into a cloud-soft, peppery melt.
          </p>
        </div>

        {/* 4 Step Visual Anatomy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GATHIYA_PRODUCT.sensoryAnatomy.map((step) => (
            <div
              key={step.step}
              className="group rounded-3xl bg-white p-7 border border-[#681C22]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Pill & Step Number */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-3xl text-[#681C22]/20 group-hover:text-[#D83A2E] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF7E9] text-[#681C22] border border-[#681C22]/10">
                    {step.tag}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-[#25221F] group-hover:text-[#D83A2E] transition-colors mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#25221F]/70 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-[#681C22]/10 flex items-center justify-between text-xs text-[#681C22]">
                <span className="font-bold">Original Kathiyawadi Method</span>
                <Award className="w-4 h-4 text-[#F49A24]" />
              </div>
            </div>
          ))}
        </div>

        {/* Sensory Quote Banner */}
        <div className="mt-12 rounded-2xl bg-[#FFF7E9] p-6 sm:p-8 border border-[#681C22]/15 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#681C22] text-[#FFD66B] flex items-center justify-center shrink-0">
            <Utensils className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="font-display font-bold text-base sm:text-lg text-[#25221F]">
              "A true gathiya should melt in your mouth without any effort, leaving only the warmth of Tellicherry pepper behind."
            </p>
            <p className="text-xs text-[#681C22] font-semibold mt-1">
              — Bhagvat Prasadam Master Farsan Karigar (Nilkanthdham Poicha)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

