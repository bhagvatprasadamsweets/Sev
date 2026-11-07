import { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(val).toLowerCase());
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address (e.g. name@domain.com).');
      return;
    }

    setStatus('loading');

    // Simulate front-end API connection
    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#D83A2E', '#F49A24', '#FFD66B']
        });
      } catch {
        // safe fallback
      }
    }, 600);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FFF2D8] border-t border-[#681C22]/10 relative overflow-hidden">
      
      {/* Decorative Blur Element */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#F49A24]/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#681C22]/10 border border-[#681C22]/15 text-[#681C22] text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D83A2E]" />
          CHAI &amp; FARSAN DISPATCH
        </div>

        {/* Heading & Subtitle */}
        <h2 className="font-display font-black text-3xl sm:text-5xl text-[#25221F] tracking-tight leading-tight mb-3">
          FRESH BATCH NOTIFICATIONS <br />
          <span className="text-[#D83A2E]">IN YOUR INBOX.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#25221F]/75 max-w-lg mx-auto mb-8 leading-relaxed">
          Be the first to know about freshly fried festival batches, regional namkeen releases, and sacred Nilkanthdham kitchen updates.
        </p>

        {/* Success State */}
        {status === 'success' ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg mx-auto shadow-lg border border-emerald-300 text-center animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#25221F] mb-1">
              Welcome to the Farsan Circle!
            </h3>
            <p className="text-xs text-[#25221F]/80 mb-2">
              We've registered <strong>{email}</strong> for our upcoming daily batch dispatch notices.
            </p>
            <p className="text-[11px] text-[#681C22] font-semibold">
              Authentic Bhavnagar Taste • Nilkanthdham Tradition
            </p>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white border border-[#681C22]/20 text-sm text-[#25221F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D83A2E] shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#D83A2E] text-white font-bold text-sm tracking-wide uppercase hover:bg-[#B92B20] transition-all shadow-md shadow-[#D83A2E]/20 shrink-0 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D83A2E] cursor-pointer"
              >
                {status === 'loading' ? (
                  <span>Joining...</span>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-red-600 font-semibold mt-3">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-[11px] text-[#25221F]/60 mt-4">
              🔒 We respect your privacy. No spam ever — unsubscribe with one click at any time.
            </p>
          </form>
        )}

      </div>
    </section>
  );
}
