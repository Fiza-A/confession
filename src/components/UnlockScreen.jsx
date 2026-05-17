import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, LockKeyhole } from "lucide-react";

export default function UnlockScreen({ config, onUnlock }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function submitCode(event) {
    event.preventDefault();
    if (code.trim() === config.secretCode) {
      setError("");
      onUnlock();
      return;
    }
    setError("Hint: It is the password I always use for everything.");
  }

  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 romantic-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.82),transparent_32%),radial-gradient(circle_at_18%_74%,rgba(205,180,219,0.35),transparent_28%)]" />
      <motion.form
        onSubmit={submitCode}
        className="glass relative z-20 w-full max-w-md px-6 py-9 text-center shadow-glass sm:px-10"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        <motion.div
          className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-white/55 text-rosePink shadow-glow"
          animate={{ scale: [1, 1.06, 1], rotate: [0, -2, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart size={48} fill="currentColor" />
        </motion.div>
        <p className="mb-2 font-script text-4xl text-rosePink">{config.loverName}</p>
        <h1 className="font-display text-4xl leading-tight text-romanticRed sm:text-5xl">
          Enter the secret code to unlock my heart
        </h1>
        <div className="mt-8 flex items-center gap-3 rounded-full border border-white/70 bg-white/55 px-5 py-3 shadow-inner">
          <LockKeyhole className="shrink-0 text-rosePink" size={22} />
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            type="text"
            maxLength={24}
            className="w-full bg-transparent text-center text-2xl font-semibold tracking-[0.35em] text-romanticRed outline-none placeholder:text-romanticRed/35"
            placeholder="CODE"
            aria-label="Secret code"
          />
        </div>
        {error ? <p className="mt-4 min-h-6 text-sm font-medium text-romanticRed/75">{error}</p> : <div className="mt-4 h-6" />}
        <button className="glow-button mt-4 w-full" type="submit">
          Unlock
        </button>
      </motion.form>
    </motion.section>
  );
}
