import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Package,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Product Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Product Inquiry',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#E5A323]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
       
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            Connect With Our <br />
            <span className="text-[#F28C28]">Farsan Kitchen</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2 leading-relaxed">
            Have questions about our authentic Sev collection (Aaloo Sev, Ratlami Sev, Special Besan Sev), corporate Diwali gifting, or bulk party orders? Our team in Gujarat is delighted to assist you.
          </p>
        </div>

        {/* 2-Column Split: Info Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Contact Channels & Trust (Span 5) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-sm flex items-start gap-3.5 hover:border-[#E5A323] transition-colors">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center text-[#A8681E] shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F28C28] block">
                  CUSTOMER HELPLINE
                </span>
                <a
                  href="tel:+919876543210"
                  className="font-display font-black text-base sm:text-lg text-[#3B2418] hover:text-[#F28C28] transition-colors"
                >
                  +91 98765 43210
                </a>
                <p className="text-xs text-[#7A5F4F] mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Mon to Sat: 9:00 AM to 7:00 PM IST</span>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-sm flex items-start gap-3.5 hover:border-[#E5A323] transition-colors">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center text-[#A8681E] shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F28C28] block">
                  OFFICIAL EMAIL SUPPORT
                </span>
                <a
                  href="mailto:orders@bhagvatprasadam.com"
                  className="font-display font-black text-sm sm:text-base text-[#3B2418] hover:text-[#F28C28] transition-colors break-all"
                >
                  orders@bhagvatprasadam.com
                </a>
                <p className="text-xs text-[#7A5F4F] mt-0.5">
                  Average response time: within 4 business hours
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-sm flex items-start gap-3.5 hover:border-[#E5A323] transition-colors">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center text-[#A8681E] shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F28C28] block">
                  ORIGIN &amp; FACILITY
                </span>
                <h4 className="font-display font-bold text-xs sm:text-sm text-[#3B2418]">
                  Bhagvat Prasadam Farsan Kitchen
                </h4>
                <p className="text-xs text-[#7A5F4F] mt-0.5 leading-relaxed">
                  Nilkanthdham Road, Poicha, Narmada District, Gujarat 393145, India.
                </p>
              </div>
            </div>

            {/* Bulk & Corporate Inquiries Callout */}
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-white to-[#FFF8E9] border border-[#E8DCC8] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#3B2418]">
                <Package className="w-4 h-4 text-[#E5A323]" />
                <h4 className="font-display font-bold text-xs sm:text-sm">
                  Bulk &amp; Festive Gifting Orders
                </h4>
              </div>
              <p className="text-xs text-[#7A5F4F] leading-relaxed">
                Planning wedding favours, corporate Diwali gift hampers, or religious community gatherings? We offer custom batch frying and expedited nationwide shipping.
              </p>
              <div className="pt-0.5 flex items-center gap-1.5 text-xs text-[#2E7D32] font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Pan India express logistics and tamper proof boxes</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Interactive Contact Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E8DCC8] p-5 sm:p-7 md:p-8 shadow-sm">
              
              {isSubmitted ? (
                /* Success Message View */
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 text-[#2E7D32] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-[#3B2418]">
                    Dhanyawad, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-sm text-[#7A5F4F] max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong className="text-[#3B2418]">{formData.subject}</strong> has been received by our Poicha kitchen team. We will reach back to you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-3 px-6 rounded-xl bg-[#FFF8E9] hover:bg-[#E8DCC8]/60 text-[#3B2418] border border-[#E8DCC8] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="border-b border-[#E8DCC8]/70 pb-3 mb-1">
                    <div className="flex items-center gap-2 text-[#3B2418]">
                      <MessageSquare className="w-4 h-4 text-[#E5A323]" />
                      <h3 className="font-display font-black text-xl">
                        Send Us a Direct Message
                      </h3>
                    </div>
                    <p className="text-xs text-[#7A5F4F] mt-1">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-[#3B2418] mb-1.5">
                        Your Full Name <span className="text-[#B83220]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Shah"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF8E9]/60 border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-[#3B2418] mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF8E9]/60 border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Purpose Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-[#3B2418] mb-1.5">
                        Email Address <span className="text-[#B83220]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF8E9]/60 border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-[#3B2418] mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF8E9]/60 border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="General Product Inquiry">General Product Inquiry</option>
                        <option value="Bulk & Festive Gifting">Bulk &amp; Festive Gifting</option>
                        <option value="Order Tracking & Logistics">Order Tracking &amp; Logistics</option>
                        <option value="Wholesale & Retail Supply">Wholesale &amp; Retail Supply</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#3B2418] mb-1.5">
                      Your Message <span className="text-[#B83220]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you need (e.g. bulk quantity requirement, delivery location, or special packaging)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF8E9]/60 border border-[#E8DCC8] text-xs text-[#3B2418] focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 sm:py-3.5 px-6 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                    <p className="text-[11px] text-center text-[#7A5F4F] mt-2.5">
                      🔒 We respect your privacy. Your information is never shared with third parties.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

