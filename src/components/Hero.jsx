import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Coffee, Flame, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/images';
import PackshotGraphic from './PackshotGraphic';

export default function Hero({ onExploreClick, onStoryClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-[#FFF7E9] bg-subtle-pattern"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F49A24]/15 to-[#D83A2E]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-[#FFD66B]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[580px]">
          
          {/* LEFT COLUMN: Editorial Typography & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Small Eyebrow Label */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
                INDIA'S FAVOURITE CRUNCH
              </span>
            </motion.div>

            {/* Oversized Bold Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.95] tracking-tighter text-[#25221F] mb-6"
            >
              CRUNCH <br />
              IN EVERY <br />
              <span className="text-[#D83A2E] inline-block relative">
                BITE.
                {/* Curved underline highlight accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#F49A24]"
                  height="10"
                  viewBox="0 0 200 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C55 2.5 145 2.5 197 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#25221F]/80 max-w-xl leading-relaxed mb-8 font-normal"
            >
              From spicy sev to crispy bhujia, discover the irresistible taste of India's favourite namkeen. Crafted with royal spices, 100% pure groundnut oil, and zero compromises.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                type="button"
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#D83A2E] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-[#D83A2E]/25 hover:bg-[#B92B20] transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D83A2E] focus:ring-offset-2"
              >
                <span>EXPLORE SNACKS</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onStoryClick}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/80 hover:bg-white text-[#25221F] border border-[#681C22]/15 font-bold text-sm tracking-wide uppercase shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#681C22]"
              >
                <span>OUR STORY</span>
              </button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4 border-t border-[#681C22]/10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F49A24]/20 flex items-center justify-center text-[#D83A2E]">
                <Coffee className="w-5 h-5 text-[#681C22]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#25221F] flex items-center gap-1.5">
                  Made for your chai-time cravings.
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                </p>
                <p className="text-xs text-[#25221F]/60">
                  Small-batch fried in Gujarat &amp; Rajasthan daily.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Realistic Commercial Food & Product Composition */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
            {/* Subtle Circular Graphic Backdrop */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border-2 border-dashed border-[#F49A24]/40 animate-[spin_60s_linear_infinite] pointer-events-none" />
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#FFD66B]/30 via-[#F49A24]/20 to-transparent pointer-events-none" />

            {/* Rotating 100% DESI TASTE Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute -top-3 right-4 sm:right-10 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#681C22] text-white p-2 shadow-xl flex items-center justify-center border-2 border-[#FFD66B]"
            >
              <div className="relative w-full h-full rounded-full border border-dashed border-[#FFD66B]/50 flex flex-col items-center justify-center text-center">
                <Flame className="w-4 h-4 text-[#F49A24] fill-[#F49A24] mb-0.5" />
                <span className="text-[10px] font-black tracking-widest text-[#FFD66B] uppercase leading-tight font-display">
                  100% DESI
                </span>
                <span className="text-[9px] font-bold text-white tracking-wider uppercase leading-tight">
                  TASTE
                </span>
                <span className="text-[8px] text-amber-200/80">★ ★ ★ ★ ★</span>
              </div>
            </motion.div>

            {/* Main Stage Composition */}
            <div className="relative w-full max-w-[520px] flex flex-col items-center">
              
              {/* Product Packet & Bowl Arrangement */}
              <div className="relative w-full flex items-center justify-center">
                
                {/* 1. Large Realistic Packet of Namkeen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  className="relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                  <PackshotGraphic
                    productName="Classic Bhujia"
                    tagline="Moth Bean Crispy Crunch"
                    themeColor="#681C22"
                    accentColor="#FFD66B"
                    subColor="#D83A2E"
                    weight="200g"
                    spiceLevel="Medium"
                    size="large"
                  />
                </motion.div>

                {/* 2. Bowl Filled with Crispy Bhujia & Sev (Commercial Food Photo) */}
                <motion.div
                  initial={{ opacity: 0, x: 40, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
                  className="absolute -bottom-6 -right-2 sm:-right-6 z-25 w-52 sm:w-64 h-52 sm:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-[#FFF7E9] ring-2 ring-[#F49A24]/40"
                >
                  <img
                    src={IMAGES.heroBowl}
                    alt="Authentic brass bowl overflowing with crispy golden Indian bhujia and sev"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* 3. Small Cutting Chai Accent Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="absolute -top-4 -left-2 sm:-left-6 z-15 w-24 sm:w-28 h-24 sm:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white rotate-6"
                >
                  <img
                    src={IMAGES.heroChai}
                    alt="Hot cutting chai in traditional glass"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-1.5">
                    <span className="text-[9px] font-bold text-amber-200">Chai Partner</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Flavour & Quality Note Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative z-30 mt-6 sm:-mt-2 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-[#681C22]/10 flex items-center gap-4 max-w-md w-full mx-auto"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D83A2E] text-white flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-[#FFD66B]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#681C22] uppercase tracking-wide">
                      Crispiness Index
                    </span>
                    <span className="text-xs font-black text-[#D83A2E] font-mono">
                      10 / 10
                    </span>
                  </div>
                  <p className="text-xs text-[#25221F]/70 truncate">
                    Double-sifted moth bean flour &amp; tellicherry pepper
                  </p>
                </div>
              </motion.div>

              {/* Loose namkeen & ingredient scatter decorative notes */}
              <div className="flex items-center justify-center gap-4 mt-3 text-[11px] font-semibold text-[#681C22]/70">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83A2E]"></span>
                  Fresh Groundnut Oil
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F49A24]"></span>
                  Asafoetida Infused
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD66B]"></span>
                  Resealable Pouch
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

