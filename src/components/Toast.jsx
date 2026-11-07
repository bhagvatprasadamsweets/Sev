import { useEffect } from 'react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { useCart } from '../context/useCart';

export default function Toast() {
  const { toast, hideToast } = useCart();

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible, hideToast]);

  if (!toast.visible) return null;

  const isSuccess = toast.type === 'success';
  const isInfo = toast.type === 'info';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full pointer-events-auto animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#3B2418] text-[#FFF8E9] p-4 rounded-2xl shadow-2xl border border-[#E8DCC8]/20 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {isSuccess && (
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          )}
          {isInfo && (
            <div className="w-8 h-8 rounded-full bg-[#E5A323]/20 text-[#E5A323] flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
          )}
          {!isSuccess && !isInfo && (
            <div className="w-8 h-8 rounded-full bg-[#B83220]/20 text-[#B83220] flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
          )}
          <p className="text-xs sm:text-sm font-medium text-[#FFF8E9] leading-snug">
            {toast.message}
          </p>
        </div>

        <button
          type="button"
          onClick={hideToast}
          aria-label="Dismiss notification"
          className="p-1 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
