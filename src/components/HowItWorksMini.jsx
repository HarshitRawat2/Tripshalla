import { motion } from "framer-motion";
import { MapPin, PhoneCall, Backpack } from "lucide-react";

const steps = [
  {
    title: "Choose Experience",
    desc: "Pick treks, camps, rafting or adventure activities in Uttarakhand",
    icon: MapPin,
  },
  {
    title: "Talk to an Expert",
    desc: "Connect with our local travel expert for guidance & best price",
    icon: PhoneCall,
  },
  {
    title: "Travel Stress-Free",
    desc: "We handle stays, rentals & on-trip support",
    icon: Backpack,
  },
];

export default function HowItWorksMini() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          How It <span className="text-orange-500">Works</span>
        </h2>
        <p className="mt-3 text-slate-500 text-sm">
          Simple steps to plan your Uttarakhand adventure
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition"
            >
              {/* Number */}
              <span className="absolute -top-4 left-6 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Step {i + 1}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Icon className="text-orange-500" size={26} />
              </div>

              <h3 className="font-bold text-lg text-slate-800">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
