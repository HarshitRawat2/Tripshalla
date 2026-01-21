import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IndiaPackagesDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = (
    <>
      <p className="mb-4">
        Thrillophilia brings to you affordable India tour packages that will give you a chance to explore the land of myriad flavors and traditions in the best way possible. These packages can be customized according to your personal choices giving you more flexibility to explore India in the way you like. You can book south India tour packages to immerse into the splendor of nature, or you can head to the northeastern states to spend some time in quietude.
      </p>
      <p>
        By booking India tourism packages from Thrillophilia you get to indulge into a wealth of sights and activities. The south India tour packages give you a chance to have a backwater ride and help you explore the coffee plantations. If you’re in the lookout for enlightenment and salvation, then there are numerous places to visit in India that lead you to nirvana. India tourism is a confluence of modernity and spirituality, and you can experience it in the...
      </p>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4"
        >
          <p>
            ...vibrant cities of Mumbai and Delhi, or the tranquil temples of Varanasi. From the snow-capped peaks of the Himalayas to the sun-drenched beaches of Goa, India offers a diverse range of experiences for every traveler. Discover the architectural wonders of the Taj Mahal, the royal palaces of Rajasthan, and the ancient caves of Ajanta and Ellora. 
          </p>
        </motion.div>
      )}
    </>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-[#F9F9F9] border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-4">India Packages</h2>
        
        <div className="text-slate-600 text-[15px] leading-relaxed relative">
          {fullText}
          
          <div className="flex justify-end mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-slate-800 font-bold hover:text-orange-600 transition-colors text-sm"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}