import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FinalMessage({ config }) {
  const [showToast, setShowToast] = useState(false);

  function showForeverToast() {
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2600);
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24">
      <img
        src={config.featuredImages.final}
        alt="Final romantic memory"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl"
      />
      <img
        src={config.featuredImages.final}
        alt="Final romantic memory with both faces visible"
        className="absolute inset-0 mx-auto h-full max-h-screen w-full object-contain opacity-90"
      />
      <div className="absolute inset-0 bg-romanticRed/58" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.35),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(157,23,77,0.72))]" />
      <motion.div
        className="relative z-20 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-6 font-script text-6xl text-white md:text-8xl">{config.myName}</p>
        <h2 className="font-display text-4xl leading-tight text-white drop-shadow md:text-7xl">
          {config.finalMessage}
        </h2>
        <button className="glow-button mt-10 inline-flex items-center gap-3" onClick={showForeverToast} type="button">
          <Heart size={20} fill="currentColor" />
          Forever Yours
        </button>
      </motion.div>
      <AnimatePresence>
        {showToast ? (
          <motion.div
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/70 bg-white/80 px-6 py-4 text-center font-semibold text-romanticRed shadow-glass backdrop-blur-xl"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.95 }}
          >
            My heart is already yours.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
