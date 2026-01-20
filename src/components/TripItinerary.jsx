import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Car, Hotel, ExternalLink, Moon } from "lucide-react";

export default function PackageItinerary({ 
  // You can pass different package data here
  days = [
    {
      day: 1,
      title: "Arrival in Siliguri | Transfer to Gangtok",
      description: "Welcome to Siliguri! Upon arrival at NJP Railway Station, board your transfer for a scenic journey to Gangtok. Post check-in, relax and explore MG Marg.",
      transfer: {
        vehicle: "Transfer in SUV",
        from: "New Jalpaiguri Railway Station / Bagdogra Airport",
        to: "Standard Hotel In Gangtok"
      },
      stay: { hotelName: "Standard Hotel", checkIn: "12:00 PM", checkOut: "11:00 AM", nights: "2N" }
    },
    {
      day: 2,
      title: "Tsomgo Lake & Baba Mandir Excursion",
      description: "After breakfast, head towards Tsomgo Lake, a high-altitude lake. Followed by a visit to the Baba Harbhajan Singh Memorial.",
      transfer: {
        vehicle: "Non-AC Scorpio / Bolero",
        from: "Gangtok Hotel",
        to: "Tsomgo Lake Excursion"
      },
      stay: { hotelName: "Standard Hotel", checkIn: "06:00 PM", checkOut: "11:00 AM", nights: "1N" }
    }
    // Add more days as needed...
  ] 
}) {
  const [openDay, setOpenDay] = useState(0);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 font-sans text-slate-700">
      {days.map((item, idx) => (
        <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
          {/* Header Button */}
          <button
            onClick={() => setOpenDay(openDay === idx ? null : idx)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="bg-[#F37021] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shrink-0">
                Day {item.day}
              </span>
              <span className="font-bold text-slate-800 text-base md:text-lg leading-tight">
                {item.title}
              </span>
            </div>
            <ChevronDown 
              className={`text-slate-400 shrink-0 transition-transform duration-500 ${openDay === idx ? "rotate-180" : ""}`} 
            />
          </button>

          {/* Expandable Content */}
          <AnimatePresence>
            {openDay === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden border-t border-slate-100"
              >
                <div className="p-6 space-y-8">
                  {/* General Description */}
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Transfer Visual Route */}
                  {item.transfer && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Car size={18} className="text-slate-400" />
                        <span className="font-medium">Shared Transfer</span>
                      </div>
                      <h4 className="font-bold text-slate-800">{item.transfer.vehicle}</h4>
                      
                      <div className="relative pl-8 space-y-6">
                        {/* Dotted Line */}
                        <div className="absolute left-[11px] top-2 bottom-2 border-l-2 border-dotted border-slate-300" />
                        
                        {/* From Location */}
                        <div className="relative">
                          <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-orange-400 bg-white" />
                          <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50 flex justify-between items-center group">
                            <div>
                              <p className="text-[10px] font-bold text-orange-400 uppercase tracking-tighter">From</p>
                              <p className="text-sm font-semibold text-slate-700">{item.transfer.from}</p>
                            </div>
                            <ExternalLink size={14} className="text-slate-300" />
                          </div>
                        </div>

                        {/* To Location */}
                        <div className="relative">
                          <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-orange-400 bg-white" />
                          <div className="p-3 border border-slate-200 rounded-lg bg-slate-50/50">
                            <p className="text-[10px] font-bold text-orange-400 uppercase tracking-tighter">To</p>
                            <div className="flex items-center gap-2">
                              <Hotel size={14} className="text-slate-400" />
                              <p className="text-sm font-semibold text-slate-700">{item.transfer.to}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Stay Visual Schedule */}
                  {item.stay && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Hotel size={18} className="text-slate-400" />
                        <span className="font-medium">Stay At</span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg">Check-In At {item.stay.hotelName}</h4>
                      
                      <div className="bg-slate-50/80 rounded-xl p-4 flex items-center justify-between text-center border border-slate-100">
                        <div className="flex-1">
                          <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">Check In</p>
                          <p className="font-bold text-slate-800">{item.stay.checkIn}</p>
                        </div>
                        
                        <div className="flex-[2] px-4">
                          <div className="w-full border-b border-dashed border-slate-300 relative">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-50 px-2 text-[11px] font-bold text-slate-500 flex items-center gap-1">
                              {item.stay.nights} <Moon size={12} className="text-slate-400" />
                            </span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">Check Out</p>
                          <p className="font-bold text-slate-800">{item.stay.checkOut}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}