import { motion } from 'framer-motion';

/**
 * HeroOrbitalAnimation
 * 
 * Recreates the celestial / orbital spice animation from the user reference:
 * - Concentric dashed & dotted orbital rings in warm amber / saffron tones
 * - Decorative planetary / spice nodes placed along the orbit:
 *   - Top: Amber dot with vertical axis tick
 *   - Bottom: Concentric golden halo dot
 *   - Right: Double-ring node (deep red / terracotta core with golden outer ring)
 *   - Left: Twin spice nodes (deep red + amber dots)
 * - Smooth continuous rotation (clockwise outer, counter-clockwise inner)
 * - Soft warm radial solar glow centered behind the hero product card
 */
export default function HeroOrbitalAnimation() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] pointer-events-none select-none z-0 flex items-center justify-center transform-gpu"
    >
      {/* 1. Luminous Warm Solar Radial Aura (Breathing Glow) */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.65, 0.95, 0.65],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-4 sm:inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(229,163,35,0.32)_0%,rgba(242,140,40,0.18)_42%,rgba(255,248,233,0.05)_68%,transparent_75%)] blur-2xl pointer-events-none"
      />

      {/* 2. Secondary Ambient Glow in Center */}
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        className="absolute w-[240px] sm:w-[320px] lg:w-[380px] h-[240px] sm:h-[320px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#E5A323]/25 via-[#F28C28]/20 to-amber-200/25 blur-xl pointer-events-none"
      />

      {/* 3. Primary Rotating Dashed Orbit Ring with Planetary Nodes (Clockwise 65s) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 w-full h-full"
      >
        <svg
          viewBox="0 0 540 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Soft glow filter for nodes */}
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outermost Faint Guide Ring */}
          <circle
            cx="270"
            cy="270"
            r="256"
            stroke="#E5A323"
            strokeWidth="0.8"
            strokeDasharray="3 8"
            opacity="0.3"
          />

          {/* MAIN PROMINENT DASHED ORBIT (Slim, Refined Stroke) */}
          <circle
            cx="270"
            cy="270"
            r="236"
            stroke="#E5A323"
            strokeWidth="1.25"
            strokeDasharray="8 8"
            opacity="0.8"
          />

          {/* Inner Subtle Dashed Ring */}
          <circle
            cx="270"
            cy="270"
            r="215"
            stroke="#F28C28"
            strokeWidth="0.75"
            strokeDasharray="4 8"
            opacity="0.3"
          />

          {/* --- ORBITAL ACCENT NODES (EXACT REFERENCE RECREATION) --- */}

          {/* TOP NODE (12 o'clock, cx=270, cy=34): Amber solid dot with vertical axis tick */}
          <g transform="translate(0, 0)">
            {/* Axis Tick Line */}
            <line
              x1="270"
              y1="18"
              x2="270"
              y2="50"
              stroke="#F28C28"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.75"
            />
            {/* Glowing Amber Dot */}
            <circle
              cx="270"
              cy="34"
              r="6.5"
              fill="#F28C28"
              filter="url(#nodeGlow)"
            />
            <circle
              cx="270"
              cy="34"
              r="2"
              fill="#FFF8E9"
              opacity="0.9"
            />
          </g>

          {/* BOTTOM NODE (6 o'clock, cx=270, cy=506): Concentric Golden Halo Dot */}
          <g transform="translate(0, 0)">
            {/* Radial Tick */}
            <line
              x1="270"
              y1="492"
              x2="270"
              y2="520"
              stroke="#E5A323"
              strokeWidth="1.25"
              strokeLinecap="round"
              opacity="0.65"
            />
            {/* Outer Golden Halo */}
            <circle
              cx="270"
              cy="506"
              r="10"
              stroke="#E5A323"
              strokeWidth="1.5"
              fill="none"
              opacity="0.85"
            />
            {/* Inner Golden Core */}
            <circle
              cx="270"
              cy="506"
              r="5"
              fill="#E5A323"
              filter="url(#nodeGlow)"
            />
          </g>

          {/* RIGHT NODE (~3 o'clock / ~12° above horizontal, cx=501, cy=242): Double-Ring Red/Golden Node */}
          <g transform="translate(0, 0)">
            {/* Outer Amber Halo Ring */}
            <circle
              cx="501"
              cy="242"
              r="9"
              stroke="#F28C28"
              strokeWidth="1.5"
              fill="none"
              opacity="0.9"
            />
            {/* Inner Crimson Core Dot */}
            <circle
              cx="501"
              cy="242"
              r="4.5"
              fill="#B83220"
              filter="url(#nodeGlow)"
            />
          </g>

          {/* LEFT NODE (~9 o'clock / ~16° below horizontal, cx=39, cy=298): Twin Spice Dots (Red & Amber) */}
          <g transform="translate(0, 0)">
            {/* Primary Terracotta Red Dot */}
            <circle
              cx="39"
              cy="295"
              r="5.5"
              fill="#B83220"
              filter="url(#nodeGlow)"
            />
            {/* Adjacent Amber Dot */}
            <circle
              cx="48"
              cy="307"
              r="4"
              fill="#F28C28"
              filter="url(#nodeGlow)"
            />
          </g>

          {/* Four Subtle Intermediate Micro-Markers at 45-degree points */}
          <circle cx="437" cy="103" r="2" fill="#E5A323" opacity="0.4" />
          <circle cx="437" cy="437" r="2" fill="#E5A323" opacity="0.4" />
          <circle cx="103" cy="437" r="2" fill="#E5A323" opacity="0.4" />
          <circle cx="103" cy="103" r="2" fill="#E5A323" opacity="0.4" />
        </svg>
      </motion.div>

      {/* 4. Secondary Counter-Rotating Inner Dotted Orbit (Counter-Clockwise 48s) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 w-full h-full"
      >
        <svg
          viewBox="0 0 540 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Inner Dotted Circle */}
          <circle
            cx="270"
            cy="270"
            r="185"
            stroke="#E5A323"
            strokeWidth="1.25"
            strokeDasharray="4 8"
            opacity="0.4"
          />

          {/* Fine Micro Spoke Accents */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <circle
              key={deg}
              cx="270"
              cy="85"
              r="2.5"
              fill="#F28C28"
              opacity="0.5"
              transform={`rotate(${deg} 270 270)`}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

