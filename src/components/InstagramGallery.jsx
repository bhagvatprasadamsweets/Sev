import { useState } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { InstagramIcon } from './SocialIcons';

export default function InstagramGallery() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="journal" className="py-20 sm:py-28 bg-[#FFFDF8] border-t border-[#681C22]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D83A2E]/10 border border-[#D83A2E]/20 text-[#D83A2E] text-xs font-bold tracking-widest uppercase mb-3">
            <InstagramIcon className="w-3.5 h-3.5" />
            SNACK JOURNAL &amp; COMMUNITY
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            SNACK. SHARE. <span className="text-[#D83A2E]">REPEAT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#25221F]/75 mt-2">
            Tag <strong className="text-[#681C22]">@crunchkatha</strong> with your chai and munch moments to be featured on our community board.
          </p>
        </div>

        {/* 6 Responsive Image Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#FFF7E9] border border-[#681C22]/10 cursor-pointer shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Stats */}
              <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <InstagramIcon className="w-6 h-6 text-[#FFD66B] mb-2" />
                <p className="text-[11px] font-bold leading-tight line-clamp-2 mb-2">
                  {item.title}
                </p>

                <div className="flex items-center justify-center gap-3 text-xs font-semibold text-white/90">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {item.comments}
                  </span>
                </div>
              </div>

              {/* Instagram Icon Badge Top Right */}
              <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                <InstagramIcon className="w-3 h-3 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Profile Link Anchor */}
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#681C22] hover:text-[#D83A2E] transition-colors focus:outline-none"
          >
            <span>Follow our snack stories on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
