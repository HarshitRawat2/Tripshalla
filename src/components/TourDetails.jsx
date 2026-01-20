import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { HiOutlineHome, HiOutlineCake, HiOutlineMap } from "react-icons/hi";

export default function TourDetails() {
  const [selectedDuration, setSelectedDuration] = useState("6 days");
  const [selectedRoute, setSelectedRoute] = useState(3); // Index of selected route

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  const durations = [
    { days: "4 days", price: "₹12,526", img: "/src/assets/1.jpg" },
    { days: "6 days", price: "₹25,372", img: "/src/assets/2.jpg" },
    { days: "7 days", price: "₹25,000", img: "/src/assets/3.jpg" },
    { days: "8 days", price: "₹33,047", img: "/src/assets/2.jpg" },
    { days: "9 days", price: "₹40,000", img: "/src/assets/1.jpg" },
  ];

  const routes = [
    "Gangtok → Darjeeling → Siliguri",
    "Gangtok → Lachung → Gangtok",
    "Gangtok → Lachung → Gangtok → Bagdogra",
    "Gangtok → Lachen → Lachung → Gangtok → Siliguri",
  ];

  return (
    <motion.section 
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="max-w-4xl mx-auto p-6 bg-white font-sans text-slate-800"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight mb-6">
        Highlights of North Sikkim | FREE Visit to Bhim Nala Falls
      </h1>

      {/* Itinerary Summary Chips */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <span className="bg-orange-600 text-white px-3 py-1 rounded-full font-bold text-sm">6D/5N</span>
        <div className="flex items-center gap-1 text-sm text-gray-500 border-r pr-4">
          <span className="text-gray-300 text-xl font-bold">2</span> <div>Days in <br/><b>Gangtok</b></div>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500 border-r pr-4">
          <span className="text-gray-300 text-xl font-bold">1</span> <div>Day in <br/><b>Lachen</b></div>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500 border-r pr-4">
          <span className="text-gray-300 text-xl font-bold">1</span> <div>Day in <br/><b>Lachung</b></div>
        </div>
      </div>

      <hr className="mb-6 opacity-50" />

      {/* Amenities */}
      <div className="flex gap-8 mb-8 text-gray-600">
        <div className="flex items-center gap-2"><HiOutlineHome className="text-xl"/> Stay Included</div>
        <div className="flex items-center gap-2"><HiOutlineCake className="text-xl"/> Meals Included</div>
        <div className="flex items-center gap-2"><HiOutlineMap className="text-xl"/> Sightseeing Included</div>
      </div>

      <hr className="mb-8 opacity-50" />

      {/* Duration Selector */}
     <div className="mb-10">
  <h3 className="font-bold text-lg mb-4">Choose Trip Duration</h3>
  <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
    {durations.map((item) => {
      const isSelected = selectedDuration === item.days;
      
      return (
        <div 
          key={item.days}
          onClick={() => setSelectedDuration(item.days)}
          className="min-w-[130px] cursor-pointer group"
        >
          {/* Container with fixed size and border */}
          <div className={`
            relative h-28 rounded-2xl overflow-hidden mb-3 transition-all duration-300 border-2
            ${isSelected ? 'border-orange-500 shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'}
          `}>
            {/* Image scales internally without affecting the container size */}
            <img 
              src={item.img} 
              className={`w-full h-full object-cover transition-transform duration-500 ${isSelected ? 'scale-110' : 'scale-100'}`} 
              alt={item.days} 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
              <span className="text-white font-bold text-sm tracking-tight">{item.days}</span>
            </div>
          </div>

          {/* Text labels */}
          <div className="px-1">
            <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Starting From</p>
            <p className={`font-bold text-sm transition-colors ${isSelected ? 'text-orange-600' : 'text-slate-800'}`}>
              {item.price}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

      {/* Route Selector */}
      <div>
        <h3 className="font-bold text-lg mb-4">Destination Routes</h3>
        <div className="space-y-3">
          {routes.map((route, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={() => setSelectedRoute(idx)}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                selectedRoute === idx 
                ? 'border-orange-500 bg-orange-50/50 text-orange-600' 
                : 'border-gray-100 hover:border-gray-200 text-gray-600'
              }`}
            >
              <p className="text-sm md:text-base font-medium">{route}</p>
              {selectedRoute === idx && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] px-1 rounded-bl-lg">
                  ✓
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}