import { Sparkles, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function GathiyaStory({ onDiscoverClick }) {
  return (
    <section id="heritage" className="py-20 sm:py-28 bg-[#FFF7E9] relative overflow-hidden border-b border-[#681C22]/10">
      
      {/* Background Soft Atmospheric Ambient Shape */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F49A24]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D83A2E]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Photographic Craft Composition */}
          <div className="lg:col-span-6 relative">
            
            {/* Primary Large Thali Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] w-full max-w-lg bg-white">
              <img
                src={GATHIYA_PRODUCT.images.thali}
                alt="Authentic Bhavnagari Gathiya served on an antique brass thali"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-black uppercase tracking-widest text-[#FFD66B] block">
                  KATHIYAWADI HERITAGE
                </span>
                <span className="text-sm font-semibold">
                  Hand-Pressed Through Traditional Brass Jara
                </span>
              </div>
            </div>

            {/* Supporting Secondary Inset: The Fresh Bowl */}
            <div className="absolute -bottom-8 -right-2 sm:-right-6 w-44 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFF7E9] hidden sm:block bg-white">
              <img
                src={GATHIYA_PRODUCT.images.freshBowl}
                alt="Fresh bowl of Bhavnagari Gathiya"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-white text-[11px] font-bold">
                100% Pure Sing Tel
              </div>
            </div>

            {/* Circular Heritage Seal */}
            <div className="absolute -top-5 -left-3 sm:left-4 bg-[#681C22] text-[#FFD66B] rounded-full p-3.5 shadow-xl border-2 border-[#FFD66B] flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-4 h-4 mx-auto text-[#D83A2E] fill-[#D83A2E]" />
                <span className="text-[9px] font-black block uppercase tracking-wider font-display">
                  TRADITION
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: Editorial Content Block */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
                THE BHAVNAGAR LEGACY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-[1.05] mb-5">
              THE ART OF THE JARA. <br />
              <span className="text-[#D83A2E]">THE SOUL OF GUJARAT.</span>
            </h2>

            {/* Supporting Content */}
            <p className="text-base sm:text-lg text-[#25221F]/80 leading-relaxed mb-4 font-normal">
              In Gujarat, gathiya isn't just a snack; it is an institution. For over a century, the farsan masters of Bhavnagar perfected the rare balance between a delicate, crisp outer skin and a cloud-soft, melt-in-the-mouth interior.
            </p>

            <p className="text-sm text-[#25221F]/70 leading-relaxed mb-6">
              At Bhagvat Prasadam, we honor this culinary heritage in its purest sacred form. Prepared in the holy environment of Nilkanthdham Poicha, each batch begins with stone-milled desi chana besan, kneaded with cold-pressed groundnut oil, Tellicherry black peppercorns, and freshly rubbed ajwain.
            </p>

            {/* Three Craft Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-[#681C22]/10 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h3 className="font-display font-bold text-sm text-[#25221F]">Pure Sing Tel Only</h3>
                </div>
                <p className="text-xs text-[#25221F]/65 leading-relaxed">
                  Never compromised with cheap palm oil. Gives an authentic nutty aroma and zero heavy aftertaste.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#681C22]/10 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-[#F49A24] shrink-0" />
                  <h3 className="font-display font-bold text-sm text-[#25221F]">Brass Jara Technique</h3>
                </div>
                <p className="text-xs text-[#25221F]/65 leading-relaxed">
                  Hand-pressed through customary perforated brass plates directly into slow-heated pure sing tel.
                </p>
              </div>
            </div>

            {/* Editorial Action */}
            <div>
              <button
                type="button"
                onClick={onDiscoverClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#681C22] text-[#FFD66B] hover:bg-[#52151A] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Read Verified Customer Reviews</span>
                <ArrowRight className="w-4 h-4 text-[#FFD66B]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

