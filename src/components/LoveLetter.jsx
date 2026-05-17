import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";

export default function LoveLetter({ config }) {
  const letterImages = [
    config.featuredImages.letter,
    ...config.memoryImages.slice(9, 13),
    config.memoryImages[15],
  ];
  const [selectedImage, setSelectedImage] = useState(letterImages[0]);

  return (
    <section id="love-letter" className="section-shell relative bg-creamWhite">
      <SectionHeader
        eyebrow="Love letter"
        title="A Little Piece of My Heart"
        copy="Some feelings deserve a quiet, beautiful place to live."
      />
      <motion.div
        className="relative mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-[#fff8ee]/80 shadow-glass backdrop-blur-xl md:grid-cols-[0.82fr_1.18fr]"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75 }}
      >
        <div className="relative min-h-80 overflow-hidden md:min-h-full">
          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt="A love letter memory"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-romanticRed/45 via-transparent to-white/15" />
          <p className="absolute bottom-6 left-6 right-6 font-script text-5xl leading-none text-white drop-shadow">
            kept close
          </p>
        </div>
        <div className="relative p-7 md:p-12">
          <span className="absolute left-7 top-6 text-3xl text-rosePink/35">♥</span>
          <span className="absolute bottom-7 right-8 text-4xl text-lavender/60">♥</span>
          <p className="typewriter mx-auto max-w-2xl whitespace-normal font-display text-2xl leading-relaxed text-romanticRed md:text-3xl">
            {config.loveLetterText}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {letterImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`h-20 w-16 overflow-hidden rounded-xl border-4 shadow-md transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-rosePink/35 ${
                  selectedImage === image ? "border-rosePink scale-105 shadow-glow" : "border-white"
                }`}
                onClick={() => setSelectedImage(image)}
                aria-label={`Show love letter image ${index + 1}`}
              >
                <img src={image} alt="Tiny memory" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <p className="mt-8 text-right font-script text-5xl text-rosePink">Forever yours ♥</p>
        </div>
      </motion.div>
    </section>
  );
}
