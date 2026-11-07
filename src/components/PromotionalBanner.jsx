import { ArrowRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';
import PackshotGraphic from './PackshotGraphic';

export default function PromotionalBanner({ onCtaClick }) {
  return (
    <section className="py-16 sm:py-24 bg-[#681C22] text-white relative overflow-hidden">
      
      {/* Background Decorative Rings & Ambient Highlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#D83A2E]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#F49A24]/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Text Side */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFD66B] text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              THE CRUNCHKATHA PROMISE
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter leading-[0.95] mb-5">
              GOOD MOOD. <br />
              <span className="text-[#FFD66B]">GREAT NAMKEEN.</span>
            </h2>

            <p className="text-base sm:text-xl text-white/80 max-w-lg mb-8 leading-relaxed">
              Make every chai break a little more delicious. Premium moth bean bhujia, royal mixture, and crispy chivda delivered directly to your doorstep.
            </p>

            <button
              type="button"
              onClick={onCtaClick}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#D83A2E] text-white font-bold text-sm tracking-wide uppercase shadow-xl shadow-black/20 hover:bg-[#B92B20] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FFD66B]"
            >
              <span>FIND YOUR FAVOURITE</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right / Visual Side: Attractive Packshot & Chai Photography */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Visual Packshot Container */}
            <div className="relative flex items-center justify-center">
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <PackshotGraphic
                  productName="Khatta Meetha Mix"
                  tagline="Royal Sweet & Tangy Crunch"
                  themeColor="#F49A24"
                  accentColor="#FFD66B"
                  weight="250g"
                  spiceLevel="Tangy"
                  size="large"
                />
              </div>

              {/* Chai pairing circular accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#681C22] hidden sm:block">
                <img
                  src={IMAGES.heroChai}
                  alt="Chai tea companion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
