import rishikeshGuide from "../json/Guides.json";
import { Bike, MapPin, Clock, Phone } from "lucide-react";

export default function Guides() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900">
          {rishikeshGuide.hero.title}
        </h1>
        <p className="mt-3 text-emerald-600 font-bold text-lg">
          {rishikeshGuide.hero.subtitle}
        </p>
        <p className="mt-4 max-w-2xl text-slate-600">
          {rishikeshGuide.hero.description}
        </p>
      </section>

      {/* WHY SCOOTY */}
      <section className="bg-emerald-50 border-y border-emerald-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-black text-emerald-800 flex items-center gap-2">
            <Bike /> {rishikeshGuide.whyScooty.title}
          </h2>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rishikeshGuide.whyScooty.points.map((p, i) => (
              <li
                key={i}
                className="bg-white rounded-xl p-4 font-semibold text-slate-700 shadow-sm"
              >
                ✔ {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PLACES */}
      {rishikeshGuide.categories.map((cat) => (
        <section key={cat.id} className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-black text-slate-800 mb-8">
            {cat.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {cat.places.map((place, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-emerald-700">
                  {place.name}
                </h3>

                <p className="mt-2 text-slate-600">{place.description}</p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {place.best_time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {place.distance}
                  </span>
                </div>

                {place.tips && (
                  <p className="mt-3 text-sm text-amber-600 font-semibold">
                    Tip: {place.tips}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* BIKE RENTAL CTA */}
      <section className="bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-black">
            {rishikeshGuide.bikeRental.title}
          </h2>

          <p className="mt-4 max-w-2xl">
            {rishikeshGuide.bikeRental.description}
          </p>

          <ul className="mt-6 space-y-2 font-semibold">
            {rishikeshGuide.bikeRental.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href={`tel:${rishikeshGuide.bikeRental.cta.call}`}
              className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-black flex items-center gap-2"
            >
              <Phone size={18} /> Call for Rental
            </a>

            <a
              href={`https://wa.me/${rishikeshGuide.bikeRental.cta.call.replace(
                "+",
                "",
              )}?text=${encodeURIComponent(
                rishikeshGuide.bikeRental.cta.whatsappText,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-6 py-3 rounded-xl font-bold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL TIPS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-slate-800 mb-6">
          Local Travel Tips
        </h2>

        <ul className="space-y-2 text-slate-700 font-semibold">
          {rishikeshGuide.localTips.map((tip, i) => (
            <li key={i}>• {tip}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
