import React from "react";

const steps = [
  {
    step: "01",
    title: "Route Selection",
    description:
      "We carefully choose trekking routes based on safety, scenic beauty, and overall experience — not popularity alone.",
  },
  {
    step: "02",
    title: "Thoughtful Planning",
    description:
      "From stays to food and daily schedules, we plan only what truly matters to keep the journey smooth and comfortable.",
  },
  {
    step: "03",
    title: "Clear Communication",
    description:
      "You know exactly what’s included, what to expect, and how your trek will unfold — with no hidden surprises.",
  },
  {
    step: "04",
    title: "On-Ground Support",
    description:
      "Our team ensures proper coordination and care during the trek, so you can focus on the experience, not logistics.",
  },
  {
    step: "05",
    title: "Continuous Improvement",
    description:
      "We learn from every journey, improve our process, and always travel with respect for nature and local communities.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-amber-500 font-semibold uppercase tracking-wide">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-emerald-900">
            Our Approach to Creating Meaningful Treks
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A simple, honest process shaped by real trekking experience and care
            for every traveler.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group bg-emerald-50 rounded-2xl p-8 hover:shadow-md transition"
            >
              <div className="text-emerald-700 font-bold text-xl mb-3">
                {item.step}
              </div>

              <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 h-[2px] w-0 bg-emerald-600 group-hover:w-14 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-20 text-center text-emerald-800 font-medium text-lg">
          Simple process. Honest intent. Journeys done the right way.
        </p>
      </div>
    </section>
  );
}
