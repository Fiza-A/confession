import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader.jsx";

export default function Memories({ config }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex === null ? null : config.memoryImages[activeIndex];
  const activeCaption = activeIndex === null ? "" : config.memoryCaptions[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? config.memoryImages.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === config.memoryImages.length - 1 ? 0 : current + 1));
  }

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="section-shell relative bg-softBlush">
      <SectionHeader
        eyebrow="Our memories"
        title="A Gallery Made of Us"
        copy="Every tiny frame is a real piece of your story."
      />
      <div className="mx-auto grid max-w-7xl auto-rows-[13rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {config.memoryImages.map((image, index) => (
          <motion.article
            key={image}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 p-2 shadow-glass backdrop-blur-xl ${
              index === 0 || index === 13 || index === 15
                ? "sm:col-span-2 sm:row-span-2"
                : index === 4 || index === 11
                  ? "sm:col-span-2"
                  : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: (index % 8) * 0.05, duration: 0.6 }}
            whileHover={{ y: -8, rotate: index % 2 ? 0.8 : -0.8 }}
          >
            <button
              type="button"
              className="relative h-full w-full overflow-hidden rounded-[1.35rem] text-left focus:outline-none focus:ring-4 focus:ring-rosePink/40"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${config.memoryCaptions[index]}`}
            >
              <img
                src={image}
                alt={config.memoryCaptions[index]}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-romanticRed/82 via-romanticRed/12 to-transparent opacity-85 transition group-hover:opacity-95" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-script text-4xl leading-none drop-shadow">{index + 1}</p>
                <h3 className="mt-1 font-display text-2xl leading-tight drop-shadow">{config.memoryCaptions[index]}</h3>
              </div>
            </button>
          </motion.article>
        ))}
      </div>
      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-romanticRed/80 px-4 py-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={activeCaption}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-romanticRed shadow-glass transition hover:bg-white"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label="Close image viewer"
          >
            <X size={25} />
          </button>
          <button
            type="button"
            className="absolute left-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/85 text-romanticRed shadow-glass transition hover:bg-white md:left-8"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <motion.div
            className="relative max-h-[88vh] w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={activeCaption}
              className="mx-auto max-h-[82vh] w-auto rounded-[1.75rem] border-[10px] border-white object-contain shadow-glass"
            />
            <div className="mx-auto mt-4 w-fit rounded-full border border-white/55 bg-white/80 px-6 py-3 text-center text-romanticRed shadow-glass backdrop-blur-xl">
              <p className="font-display text-xl">{activeCaption}</p>
              <p className="text-sm text-romanticRed/65">
                {activeIndex + 1} / {config.memoryImages.length}
              </p>
            </div>
          </motion.div>
          <button
            type="button"
            className="absolute right-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/85 text-romanticRed shadow-glass transition hover:bg-white md:right-8"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
