import { Sparkles, Utensils, Coffee, Truck } from 'lucide-react';

export default function BenefitsStrip() {
  const benefits = [
    {
      id: 1,
      title: 'Big Desi Flavours',
      subtitle: 'Roasted whole spices & authentic recipes',
      icon: Sparkles,
      color: 'text-[#D83A2E]'
    },
    {
      id: 2,
      title: 'Freshness You Can Taste',
      subtitle: 'Small-batch fried in pure groundnut oil',
      icon: Utensils,
      color: 'text-[#F49A24]'
    },
    {
      id: 3,
      title: 'Perfect Chai-Time Partner',
      subtitle: 'Crafted to complement hot masala chai',
      icon: Coffee,
      color: 'text-[#681C22]'
    },
    {
      id: 4,
      title: 'Delivered to Your Door',
      subtitle: 'Crispness protected in zip-lock pouches',
      icon: Truck,
      color: 'text-[#25221F]'
    }
  ];

  return (
    <section className="bg-[#FBF1E0] border-y border-[#681C22]/10 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-white/60 hover:bg-white transition-all shadow-sm border border-[#681C22]/5"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF7E9] flex items-center justify-center shrink-0 shadow-inner ${benefit.color}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#25221F] leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[#25221F]/70 mt-0.5 leading-snug line-clamp-2">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

