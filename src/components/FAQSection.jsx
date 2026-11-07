import { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';
import { useSevProduct } from '../context/SevProductContext';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const { activeProduct } = useSevProduct();

  const toggle = (i) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  const faqs = [
    {
      q: 'What is the difference between Aaloo Sev, Ratlami Sev, and Special Besan Sev?',
      a: 'All three belong to our authentic Sev collection but offer distinct taste profiles: Aaloo Sev is crafted with farm-fresh potatoes and chana besan for a delicate, melt-in-mouth savory crunch. Ratlami Sev is thick, spicy, and infused with signature freshly cracked cloves (laung), black pepper, and hing. Special Besan Sev is the classic fine golden chickpea thread, mildly seasoned with ajwain and haldi, perfect for chaats, poha, and daily tea snacking.'
    },
    {
      q: 'What cooking oil is used to fry Bhagvat Prasadam Sev?',
      a: 'Every batch of our Sev is slow-fried strictly in 100% pure cold-pressed groundnut oil (Sing Tel). We never use palm oil, cottonseed oil, or vanaspati dalda. Sing Tel provides a clean, nutty aroma and light crunch with zero greasy residue.'
    },
    {
      q: 'What pack sizes and prices are available?',
      a: 'All three Sev varieties are available in 4 convenient packaging options: 1kg Mega Pack at ₹425 (MRP ₹550), 800gm Family Pack at ₹340 (MRP ₹440), 400gm Pouch at ₹170 (MRP ₹221), and 200gm Trial Pack at ₹85 (MRP ₹110). The 1kg pack provides the best value with a 23% savings.'
    },
    {
      q: 'How long does the Sev remain fresh and crispy?',
      a: 'Our Sev stays fresh, crisp, and fragrant for up to 60 days from the date of packing. Each pouch is made of heavy multi-layer barrier foil with a resealable zipper. Simply press the zip shut after snacking or store in an airtight container.'
    },
    {
      q: 'Is Bhagvat Prasadam Sev 100% vegetarian and Satvik?',
      a: 'Yes, 100%. All products by Bhagvat Prasadam are crafted adhering to sacred Satvik hygiene standards in Nilkanthdham Poicha, Gujarat, using pure vegetarian ingredients.'
    },
    {
      q: 'How fast is nationwide delivery across India?',
      a: 'Orders are freshly packed and dispatched within 24 hours. Express surface couriers deliver across major Indian cities and towns within 2 to 4 business days in protective, tamper-evident packaging.'
    },
    {
      q: 'Can I order in bulk for Diwali, weddings, or corporate gifting?',
      a: 'Yes! We specialize in bulk festive hampers and corporate gifting across India. You can select larger quantities directly through our online store or contact our Gujarat helpline for customized gift boxes.'
    }
  ];

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-16 bg-white border-b border-[#E8DCC8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight mt-2.5">
            Authentic Sev FAQs
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Everything you need to know about our recipes, Sing Tel purity, pack sizes, shelf life, and online delivery across India.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(i);
                    }
                  }}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#E5A323] cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#3B2418]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-[#E8DCC8] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E5A323] text-white border-transparent' : 'text-[#7A5F4F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#7A5F4F] leading-relaxed border-t border-[#E8DCC8]/60 bg-white/70 animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href={activeProduct.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Order {activeProduct.title} on Bhagvat Prasadam</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
