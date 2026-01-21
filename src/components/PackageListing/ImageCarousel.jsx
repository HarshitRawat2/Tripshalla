import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeSlide = (nextIndex) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(nextIndex);
      setAnimating(false);
    }, 250);
  };

  return (
    <div
      className="
        relative
        w-full
        aspect-[16/9]     /* 🔑 SAME HEIGHT FEEL */
        rounded-xl
        overflow-hidden
        bg-slate-200
      "
    >
      {/* IMAGE */}
      <img
        src={images[index]}
        alt=""
        className={`
          absolute inset-0
          h-full w-full object-cover
          transition-all duration-300 ease-in-out
          ${animating ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"}
        `}
      />

      {/* ARROWS */}
      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              changeSlide((index - 1 + images.length) % images.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() =>
              changeSlide((index + 1) % images.length)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
