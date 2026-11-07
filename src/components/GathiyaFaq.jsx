import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { GATHIYA_PRODUCT } from '../data/gathiyaProduct';

export default function GathiyaFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFDF8] border-b border-[#681C22]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D83A2E]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight">
            EVERYTHING YOU NEED <br />
            <span className="text-[#D83A2E]">TO KNOW.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {GATHIYA_PRODUCT.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[#681C22]/15 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#25221F]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FFF7E9] flex items-center justify-center text-[#681C22] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D83A2E] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#25221F]/75 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
