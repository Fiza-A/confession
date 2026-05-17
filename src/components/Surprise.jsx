import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Surprise({ config }) {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="section-shell relative bg-creamWhite">
      <SectionHeader
        eyebrow="Secret"
        title="Unlock My Heart"
        copy="One more little surprise, because loving you deserves a secret garden."
      />
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          className="glass relative grid overflow-hidden shadow-glass md:grid-cols-[0.95fr_1.05fr]"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
        >
          {unlocked ? <FloatingHearts burst /> : null}
          <div className="relative min-h-80 overflow-hidden">
            <img
              src={config.featuredImages.surprise}
              alt="Secret promise memory"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-romanticRed/20" />
          </div>
          <div className="px-6 py-10 md:px-12">
            <motion.div
              className="relative mx-auto mb-7 grid h-24 w-24 place-items-center rounded-full border border-white/75 bg-rosePink/12 text-rosePink shadow-glow"
              animate={
                unlocked
                  ? { scale: [1, 1.18, 1], rotate: [0, -8, 8, 0] }
                  : { scale: [1, 1.05, 1] }
              }
              transition={{ duration: unlocked ? 0.9 : 2.4, repeat: unlocked ? 0 : Infinity }}
            >
              <span className="absolute inset-3 rounded-full bg-white/65" />
              <span className="absolute inset-5 rounded-full bg-rosePink shadow-glow" />
              {unlocked ? (
                <Sparkles className="relative z-10 text-white" size={34} />
              ) : (
                <Heart className="relative z-10 text-white" size={38} fill="currentColor" />
              )}
            </motion.div>
            <button
              className="glow-button"
              onClick={() => setUnlocked((current) => !current)}
              type="button"
            >
              {unlocked ? "Hide My Little Surprise" : "Click to Unlock My Heart"}
            </button>
            <AnimatePresence>
              {unlocked ? (
                <motion.div
                  className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-white/75 bg-white/60 p-5 shadow-glass backdrop-blur-xl"
                  initial={{ opacity: 0, scale: 0.82, y: 22, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  <div className="grid gap-5 sm:grid-cols-[0.82fr_1.18fr] sm:items-center">
                    <img
                      src={config.memoryImages[9]}
                      alt="A tiny promise"
                      className="mx-auto h-44 w-full max-w-64 rounded-[1.4rem] border-[7px] border-white object-cover shadow-md"
                    />
                    <div className="text-left">
                      <p className="font-script text-5xl leading-none text-rosePink">Surprise</p>
                      <p className="mt-3 text-lg leading-8 text-romanticRed/78">{config.secretMessage}</p>
                      <p className="mt-4 rounded-full bg-rosePink/12 px-4 py-3 text-center font-semibold text-romanticRed">
                        Tiny promise: one hug, one smile, and one forever with you.
                      </p>
                    </div>
                  </div>
                  <p className="mt-7 text-center font-script text-6xl text-rosePink drop-shadow">
                    You are my forever ♥
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
