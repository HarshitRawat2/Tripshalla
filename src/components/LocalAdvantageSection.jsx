import { motion } from "framer-motion";
import { Mountain, Home, Bike, Headset, Map, ShieldCheck } from "lucide-react";

const advantages = [
  {
    title: "Local Uttarakhand Experts",
    desc: "Born & based teams who know terrain, weather & routes",
    icon: Mountain,
  },
  {
    title: "Camps, Hostels & Stays",
    desc: "Trusted local partners & handpicked properties",
    icon: Home,
  },
  {
    title: "Bike & Scooty Rentals",
    desc: "Easy rentals for local exploration & flexibility",
    icon: Bike,
  },
  {
    title: "24/7 On-Trip Support",
    desc: "Call or WhatsApp us anytime during your journey",
    icon: Headset,
  },
  {
    title: "Curated Itineraries",
    desc: "Not copied plans — real routes & experiences",
    icon: Map,
  },
  {
    title: "Safety-First Adventures",
    desc: "Verified guides, equipment & backup planning",
    icon: ShieldCheck,
  },
];

export default function LocalAdvantageSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Why Travel With <span className="text-orange-500">Us</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm">
            We are not a marketplace — we are your local travel partner in
            Uttarakhand
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Icon className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
