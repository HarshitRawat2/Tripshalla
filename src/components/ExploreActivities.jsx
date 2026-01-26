import { motion } from "framer-motion";
import { Mountain, Tent, Waves, Zap } from "lucide-react";

const activities = [
  {
    title: "Treks",
    desc: "Guided Himalayan treks for beginners & pros",
    icon: Mountain,
  },
  {
    title: "Camps",
    desc: "Mountain & riverside camping experiences",
    icon: Tent,
  },
  {
    title: "Rafting",
    desc: "White-water rafting in Rishikesh",
    icon: Waves,
  },
  {
    title: "Adventure",
    desc: "Bungee, Zipline, Cliff Jumping & more",
    icon: Zap,
  },
];

export default function ExploreActivities() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900">
            What We Specialize In
          </h2>
          <p className="mt-3 text-slate-600">
            Experiences crafted by locals & adventure experts
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 cursor-pointer"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
