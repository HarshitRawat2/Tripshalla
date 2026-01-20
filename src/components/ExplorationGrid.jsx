import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { HiOutlinePhotograph } from "react-icons/hi"; // Using react-icons for the button

export default function ExplorationGrid({
  items = [
    { src: "/src/assets/1.jpg", label: "", type: "large" },
    { src: "/src/assets/2.jpg", label: "Destinations", type: "small" },
    { src: "/src/assets/3.jpg", label: "Stays", type: "small" },
    { src: "/src/assets/2.jpg", label: "Activity & Sightseeing", type: "small" },
    { src: "/src/assets/1.jpg", label: "", type: "small" },
  ],
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  // Animation Variants (Matching your style)
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4" ref={containerRef}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px] md:h-[550px]"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Main Large Image (Left Side) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group shadow-lg"
          >
            <img
              src={items[0].src}
              alt="Main exploration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Top Middle Image */}
          <motion.div variants={itemVariants} className="relative rounded-xl overflow-hidden group shadow-md">
            <img src={items[1].src} alt={items[1].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
              {items[1].label}
            </span>
          </motion.div>

          {/* Top Right Image */}
          <motion.div variants={itemVariants} className="relative rounded-xl overflow-hidden group shadow-md">
            <img src={items[2].src} alt={items[2].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
              {items[2].label}
            </span>
          </motion.div>

          {/* Bottom Middle Image */}
          <motion.div variants={itemVariants} className="relative rounded-xl overflow-hidden group shadow-md">
            <img src={items[3].src} alt={items[3].label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md leading-tight">
              {items[3].label}
            </span>
          </motion.div>

          {/* Bottom Right Image with Button */}
          <motion.div variants={itemVariants} className="relative rounded-xl overflow-hidden group shadow-md">
            <img src={items[4].src} alt="View all" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10" />
            
            {/* View All Button */}
            <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold text-sm shadow-xl hover:bg-white transition-colors duration-300">
              <HiOutlinePhotograph className="text-lg" />
              View All Images
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}