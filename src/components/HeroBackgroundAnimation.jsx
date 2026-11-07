import { motion } from 'framer-motion';

export default function HeroBackgroundAnimation() {
  // Mobile-safe, responsive floating particles
  // On small screens, we keep particles smaller and placed along margins to prevent obscuring text/buttons
  const particles = [
    // Left side particles
    { id: 1, type: 'sev-arc', top: '10%', left: '4%', sizeMobile: 18, sizeDesktop: 26, duration: 6, delay: 0, rotate: 35 },
    { id: 2, type: 'sparkle', top: '28%', left: '8%', sizeMobile: 12, sizeDesktop: 16, duration: 5.5, delay: 1.5, rotate: 15 },
    { id: 3, type: 'orb', top: '48%', left: '3%', sizeMobile: 8, sizeDesktop: 12, duration: 7, delay: 2.2, rotate: 0 },
    { id: 4, type: 'sev-arc', top: '72%', left: '7%', sizeMobile: 16, sizeDesktop: 24, duration: 7.5, delay: 0.8, rotate: -25 },
    
    // Right side particles (visible on all screens, tucked neatly)
    { id: 5, type: 'sparkle', top: '8%', right: '5%', sizeMobile: 12, sizeDesktop: 18, duration: 6.2, delay: 1.8, rotate: 45 },
    { id: 6, type: 'sev-arc', top: '22%', right: '4%', sizeMobile: 18, sizeDesktop: 28, duration: 6.8, delay: 0.5, rotate: 60 },
    { id: 7, type: 'orb', top: '45%', right: '3%', sizeMobile: 9, sizeDesktop: 14, duration: 7.2, delay: 2.6, rotate: 0 },
    { id: 8, type: 'sev-arc', top: '78%', right: '6%', sizeMobile: 16, sizeDesktop: 24, duration: 8, delay: 1.2, rotate: 10 },
    
    // Center & Ambient particles (Desktop / Tablet only to keep mobile text ultra-clean)
    { id: 9, type: 'sparkle', top: '15%', left: '48%', sizeDesktop: 16, duration: 6.5, delay: 2.0, rotate: 90, desktopOnly: true },
    { id: 10, type: 'orb', top: '84%', left: '42%', sizeDesktop: 12, duration: 7.0, delay: 3.0, rotate: 0, desktopOnly: true },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 transform-gpu"
    >
      {/* 1. Large Top-Right Breathing Aurora Glow (Fully Proportional for Mobile & Desktop) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.55, 0.8, 0.55],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-[240px] sm:w-[450px] md:w-[600px] lg:w-[720px] h-[240px] sm:h-[450px] md:h-[600px] lg:h-[720px] rounded-full bg-gradient-to-br from-[#E5A323]/35 via-[#F28C28]/25 to-amber-200/20 blur-2xl sm:blur-3xl"
      />

      {/* 2. Bottom-Left Warm Terracotta Glow */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-[220px] sm:w-[420px] md:w-[550px] h-[220px] sm:h-[420px] md:h-[550px] rounded-full bg-gradient-to-tr from-[#B83220]/25 via-[#E5A323]/20 to-[#FFF3DF]/30 blur-2xl sm:blur-3xl"
      />

      {/* 3. Central Warm Radiance */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[460px] lg:w-[600px] h-[260px] sm:h-[460px] lg:h-[600px] rounded-full bg-gradient-to-r from-amber-100/20 via-[#E5A323]/10 to-transparent blur-2xl sm:blur-3xl"
      />

      {/* 4. Mobile-Optimized Floating Golden Particles */}
      {particles.map((p) => {
        const style = {
          top: p.top,
          ...(p.left ? { left: p.left } : {}),
          ...(p.right ? { right: p.right } : {}),
        };

        return (
          <motion.div
            key={p.id}
            style={style}
            animate={{
              y: [0, -16, 0],
              x: [0, p.id % 2 === 0 ? 8 : -8, 0],
              rotate: [p.rotate, p.rotate + 30, p.rotate],
              opacity: [0.35, 0.8, 0.35],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            className={`absolute ${p.desktopOnly ? 'hidden sm:block' : 'block'}`}
          >
            {p.type === 'sev-arc' ? (
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-6 sm:h-6 drop-shadow-[0_1px_3px_rgba(229,163,35,0.35)]"
              >
                <path
                  d="M4 22 C10 10 22 26 28 8"
                  stroke="#E5A323"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>
            ) : p.type === 'sparkle' ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 sm:w-4 sm:h-4 drop-shadow-[0_0_5px_rgba(242,140,40,0.4)]"
              >
                <path
                  d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2 Z"
                  fill="#F28C28"
                  className="opacity-70"
                />
              </svg>
            ) : (
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-tr from-[#E5A323] to-[#FFD66B] shadow-[0_0_8px_rgba(229,163,35,0.5)] opacity-60" />
            )}
          </motion.div>
        );
      })}

      {/* 7. Subtle Flowing Light Wave along Bottom Edge */}
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-2 inset-x-0 w-[110%] h-6 sm:h-8 bg-gradient-to-r from-transparent via-[#E5A323]/20 to-transparent blur-sm sm:blur-md"
      />
    </div>
  );
}
