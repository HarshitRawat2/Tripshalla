import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * PolicyAccordion Component
 * Reusable for Confirmation, Refund, Cancellation, and Payment policies.
 * * @param {Array} policies - Array of objects { title: string, points: string[] }
 */
export default function PolicyAccordion({ policies = [
  {
    "id": "confirmation",
    "title": "Confirmation Policy",
    "points": [
      "The customer receives a confirmation voucher via email within 24 hours of successful booking",
      "In case the preferred slots are unavailable, an alternate schedule of the customer's preference will be arranged and a new confirmation voucher will be sent via email.",
      "Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed."
    ]
  },
  {
    "id": "refund",
    "title": "Refund Policy",
    "points": [
      "The applicable refund amount will be processed within 10 business days.",
      "All applicable refunds will be done in the traveler's Thrillophilia wallet as Thrillcash."
    ]
  },
  {
    "id": "cancellation",
    "title": "Cancellation Policy",
    "points": [
      "If cancellation are made 30 days before the date of travel then 25.0% of total tour cost will be charged as cancellation fees",
      "If cancellation are made 15 days to 30 days before the date of travel then 50.0% of total tour cost will be charged as cancellation fees",
      "If cancellation are made 0 days to 15 days before the date of travel then 100.0% of total tour cost will be charged as cancellation fees",
      "In the event of unforeseen weather conditions, union issues, government restrictions, or any other circumstances beyond human control, certain trips or activities may be cancelled. In such cases, alternate feasible options will be provided. However, a cash refund will not be available."
    ]
  },
  {
    "id": "payment",
    "title": "Payment Policy",
    "points": [
      "100.0% of total tour cost will have to be paid 0 days before the date of booking"
    ]
  }
] }) {
  const [openIndex, setOpenIndex] = useState(null);

  // If no policies are provided by backend, don't render the section
  if (!policies || policies.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-4 bg-white font-sans text-slate-700">
      <div className="divide-y divide-slate-100">
        {policies.map((policy, index) => (
          <div key={index} className="py-2">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left transition-all group"
            >
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#F37021] transition-colors">
                {policy.title}
              </h3>
              <ChevronDown 
                className={`text-slate-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#F37021]" : ""
                }`} 
                size={22}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-4">
                    <ul className="space-y-4">
                      {policy.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-3 items-start">
                          {/* Bullet Point matching your design */}
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                          <p className="text-[15px] leading-relaxed text-slate-500">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}