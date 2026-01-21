import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryModal({ isOpen, onClose }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔗 Later: Supabase insert here
    setShowSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* 1. Backdrop (Dimmer) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 2. The Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Get a Callback</h3>
              <p className="text-sm text-slate-500 mt-1">
                Get exclusive offers & expert assistance
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 placeholder:text-slate-400 focus:ring-orange-400 outline-none transition-all"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 placeholder:text-slate-400 focus:ring-orange-400 outline-none transition-all"
              />

              {/* Phone */}
              <div className="flex gap-3">
                <input
                  value="+91"
                  readOnly
                  className="w-[70px] px-3 py-3 rounded-xl border border-slate-200 placeholder:text-slate-400 bg-slate-50 text-center text-slate-500"
                />
                <input
                  required
                  placeholder="Phone Number"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 placeholder:text-slate-400 focus:ring-orange-400 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 placeholder:text-slate-400 focus:ring-orange-400 outline-none transition-all"
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Travellers"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 placeholder:text-slate-400 focus:ring-orange-400 outline-none transition-all"
                />
              </div>

              <textarea
                rows="3"
                placeholder="Message (Optional)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 placeholder:text-slate-400 focus:ring-orange-400 outline-none transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 placeholder:text-slate-400 hover:bg-orange-600 transition-all text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 mt-2 active:scale-95"
              >
                Send Enquiry
              </button>
            </form>

            {/* Success Overlay within the Modal */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white rounded-3xl z-30 flex flex-col items-center justify-center p-8 text-center"
                >
                  <CheckCircle2 size={60} className="text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank you!</h3>
                  <p className="text-slate-600 mb-8">
                    Our expert will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setShowSuccess(false);
                      onClose();
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all"
                  >
                    Got it!
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}