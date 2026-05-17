import { motion } from "framer-motion";

export default function Hero({ config }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-24">
      <div className="absolute inset-0 romantic-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.88),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(255,107,157,0.22),transparent_26%),linear-gradient(180deg,transparent_70%,#fffafc_100%)]" />
      <div className="relative z-20 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 font-script text-5xl text-rosePink md:text-7xl">{config.loverName}</p>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.03] text-romanticRed sm:text-6xl lg:text-8xl">
            For the One Who Owns My Heart
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-romanticRed/72 md:text-xl">
            I made this little world just for you, because you mean more to me than words can ever say.
          </p>
        </motion.div>
        <motion.div
          className="relative mx-auto h-[520px] w-full max-w-sm md:max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          <div className="absolute inset-5 rounded-[3rem] bg-white/45 blur-2xl" />
          <motion.div
            className="absolute left-4 top-8 h-[420px] w-[72%] rotate-[-7deg] overflow-hidden rounded-[2.3rem] border-[10px] border-white bg-white shadow-glass"
            animate={{ y: [0, -12, 0], rotate: [-7, -5, -7] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={config.featuredImages.hero}
              alt="A favorite romantic memory"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-0 h-72 w-[58%] rotate-[8deg] overflow-hidden rounded-[2rem] border-[9px] border-white bg-white shadow-glow"
            animate={{ y: [0, 12, 0], rotate: [8, 6, 8] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={config.memoryImages[5]} alt="A soft couple memory" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            className="glass absolute bottom-4 left-0 max-w-[15rem] px-5 py-4 shadow-glass"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="mb-3 block text-4xl text-rosePink">♥</span>
            <p className="font-display text-2xl leading-tight text-romanticRed">Every photo says what words cannot.</p>
            <p className="mt-2 font-script text-4xl text-rosePink">{config.myName}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
