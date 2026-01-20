import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

/**
 * PackageSummary Component
 * @param {Object} data - Data fetched from backend
 * @param {Array} data.inclusions - List of strings for inclusions
 * @param {Array} data.exclusions - List of strings for exclusions
 */
export default function PackageSummary({ 
  data = {
    inclusions: [
      "3 nights stay in Gangtok with breakfast",
      "Half-Day Gangtok Sightseeing Tour on a Shared basis",
      "1 night stay in Lachen with breakfast, lunch, and dinner",
      "North Sikkim Sightseeing Tour on a Shared basis",
      "1 night stay in Lachung with breakfast, lunch, and dinner",
      "Visit to Yumthang Valley",
      "Permits",
      "Daily Breakfast"
    ],
    exclusions: [
      "Expenses of a personal nature.",
      "Meals not mentioned in the itinerary or inclusions",
      "Entrance fees of all sightseeing places to be visited"
    ]
  } 
}) {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 font-sans">
      {/* Decorative Header */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-200" />
        <h2 
          className="text-4xl md:text-5xl text-amber-500/80"
          style={{ fontFamily: "'Kaushan Script', cursive" }}
        >
          End Of Trip
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-200" />
      </div>

      {/* Main Content Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm bg-white"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6">
          What’s inside the package?
        </h3>
        
        <hr className="mb-8 border-slate-100" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 -translate-x-1/2" />

          {/* Inclusions Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 mb-4 px-2">Inclusions</h4>
            <ul className="space-y-4">
              {data.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 
                    className="text-emerald-500 shrink-0 mt-0.5" 
                    size={18} 
                  />
                  <span className="text-[14px] leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions Column */}
          <div className="space-y-6 md:pl-8">
            <h4 className="font-bold text-slate-900 mb-4 px-2">Exclusions</h4>
            <ul className="space-y-4">
              {data.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <XCircle 
                    className="text-red-500 shrink-0 mt-0.5" 
                    size={18} 
                  />
                  <span className="text-[14px] leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}