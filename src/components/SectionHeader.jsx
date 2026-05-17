import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-rosePink">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight text-romanticRed md:text-6xl">{title}</h2>
      {copy ? <p className="mx-auto mt-4 max-w-2xl text-base text-romanticRed/70 md:text-lg">{copy}</p> : null}
    </motion.div>
  );
}
