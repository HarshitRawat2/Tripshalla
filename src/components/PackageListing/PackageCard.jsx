import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

export default function PackageCard({ pkg }) {
  return (
    <div className="flex flex-col">
      {/* IMAGE */}
      <ImageCarousel images={pkg.images} rating={pkg.rating} />

      {/* CONTENT */}
      <div className="pt-4">
        {/* Duration + Rating */}
        <div className="flex items-center justify-between text-sm text-slate-500 mb-1">
          <span>{pkg.duration}</span>
          {pkg.rating && (
            <span className="flex items-center gap-1 text-green-600 font-semibold">
              ⭐ {pkg.rating}
              <span className="text-slate-400 font-normal">
                ({pkg.reviews})
              </span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-semibold text-slate-900 leading-snug">
          {pkg.title}
        </h3>

        {/* ROUTE STRIP */}
        <div className="mt-3 bg-[#FFF7EC] rounded-md px-3 py-2 text-sm">
          {pkg.route.map((r, i) => (
            <span key={i} className="font-semibold text-slate-800 mr-2">
              {r}
            </span>
          ))}
        </div>

        {/* PRICE */}
        <div className="mt-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="line-through text-slate-400">
              ₹{pkg.originalPrice.toLocaleString()}
            </span>
            <span className="text-green-600 font-semibold text-xs">
              SAVE ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
            </span>
          </div>

          <div className="mt-1 flex items-end gap-1">
            <span className="text-2xl font-extrabold text-slate-900">
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-sm text-slate-500 mb-1">
              /Adult
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 flex gap-3">
          <button
            className="
              w-12 h-12
              border border-orange-500
              text-orange-500
              rounded-lg
              flex items-center justify-center
            "
          >
            <Phone size={18} />
          </button>

          <Link
            to={`/trek/${pkg.id}`}
            className="
              flex-1
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-lg
              font-semibold
              text-center
            "
          >
            Request Callback
          </Link>
        </div>
      </div>
    </div>
  );
}
