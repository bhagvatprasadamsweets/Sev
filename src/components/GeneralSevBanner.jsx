import { ShoppingBag, ExternalLink } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function GeneralSevBanner() {
  const { products, setActiveSevKey } = useSevProduct();

  // Define responsive image map hotspots strictly covering each packet pouch
  const hotspots = [
    {
      id: 'ratlami',
      key: 'ratlami',
      title: 'Ratlami Sev',
      titleHindi: 'रतलामी सेव',
      tagline: 'Bold & Spicy Clove Crunch',
      buyUrl: products?.ratlami?.buyUrl || 'https://www.bhagvatprasadam.com/products/ratlami-sev-authentic-indian-namkeen',
      // Strictly covers the Ratlami Sev pouch packet (x: 145-358px, y: 221-466px in 1024x576)
      style: {
        left: '14.2%',
        width: '20.8%',
        top: '38.4%',
        height: '42.5%',
      },
    },
    {
      id: 'besan',
      key: 'besan',
      title: 'Special Besan Sev',
      titleHindi: 'स्पेशल बेसन सेव',
      tagline: 'Classic Crispy Satvik Chickpea Threads',
      buyUrl: products?.besan?.buyUrl || 'https://www.bhagvatprasadam.com/products/special-besan-sev-traditional-indian-sev',
      // Strictly covers the Special Besan Sev pouch packet (x: 405-618px, y: 221-466px in 1024x576)
      style: {
        left: '39.6%',
        width: '20.8%',
        top: '38.4%',
        height: '42.5%',
      },
    },
    {
      id: 'aaloo',
      key: 'aaloo',
      title: 'Aaloo Sev',
      titleHindi: 'आलू सेव',
      tagline: 'Melt-in-Mouth Savory Potato Sev',
      buyUrl: products?.aaloo?.buyUrl || 'https://www.bhagvatprasadam.com/products/aaloo-sev-crispy-indian-namkeen-snack',
      // Strictly covers the Aaloo Sev pouch packet (x: 665-878px, y: 221-466px in 1024x576)
      style: {
        left: '65.0%',
        width: '20.8%',
        top: '38.4%',
        height: '42.5%',
      },
    },
  ];

  return (
    <section
      id="collection-banner"
      aria-label="Traditional Indian Namkeen Trio Collection"
      className="w-full bg-[#FFF8E9] overflow-hidden relative border-t border-b border-[#E8DCC8]/60"
    >
      {/* Edge-to-Edge Responsive Banner Container */}
      <div className="relative w-full overflow-hidden select-none bg-[#FFF8E9]">
        {/* Banner Graphic */}
        <img
          src="/images/sev/general-sev-collection-banner.webp"
          alt="Traditional Indian Namkeen Ratlami Sev Special Besan Sev Aaloo Sev by Bhagvat Prasadam"
          useMap="#sev-trio-map"
          className="w-full h-auto block select-none"
          loading="eager"
        />

        {/* HTML Image Map (Semantic Fallback) */}
        <map name="sev-trio-map">
          <area
            shape="rect"
            coords="145,221,358,466"
            href={products?.ratlami?.buyUrl}
            alt="Buy Ratlami Sev on Bhagvat Prasadam"
            target="_blank"
            rel="noopener noreferrer"
          />
          <area
            shape="rect"
            coords="405,221,618,466"
            href={products?.besan?.buyUrl}
            alt="Buy Special Besan Sev on Bhagvat Prasadam"
            target="_blank"
            rel="noopener noreferrer"
          />
          <area
            shape="rect"
            coords="665,221,878,466"
            href={products?.aaloo?.buyUrl}
            alt="Buy Aaloo Sev on Bhagvat Prasadam"
            target="_blank"
            rel="noopener noreferrer"
          />
        </map>

        {/* Responsive CSS Percentage-Based Interactive Hotspot Layers strictly on packets */}
        {hotspots.map((spot) => (
          <a
            key={spot.id}
            href={spot.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActiveSevKey(spot.key)}
            title={`Buy ${spot.title} ${spot.titleHindi} ${spot.tagline}`}
            style={spot.style}
            aria-label={`Buy ${spot.title} on Bhagvat Prasadam official store`}
            className="absolute z-20 group cursor-pointer flex flex-col items-center justify-center p-1 sm:p-2 rounded-2xl transition-all duration-300 focus:outline-none"
          >
            {/* Interactive Buy Tooltip Pill */}
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 mx-auto max-w-fit">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DCC8] text-[10px] sm:text-xs font-black text-[#3B2418] shadow-lg group-hover:bg-[#E5A323] transition-colors whitespace-nowrap">
                <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F28C28] group-hover:text-[#3B2418]" />
                <span>Buy {spot.title}</span>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-75" />
              </span>
            </div>
          </a>
        ))}

        {/* Floating Explore Info Hint (Top Right) */}
        <div className="absolute top-3 right-3 sm:top-5 sm:right-6 pointer-events-none z-10 hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-bold border border-white/20">
          <span>Tap any pack to buy</span>
        </div>
      </div>
    </section>
  );
}
