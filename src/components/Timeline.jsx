import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

export default function Timeline({ config }) {
  return (
    <section className="section-shell relative bg-softBlush">
      <SectionHeader
        eyebrow="Our story"
        title="Today, Tomorrow, Forever"
        copy="A soft timeline for the moments that made us feel inevitable."
      />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          className="absolute left-5 top-4 h-[calc(100%-2rem)] w-1 rounded-full bg-gradient-to-b from-rosePink via-lavender to-roseGold md:left-1/2 md:-translate-x-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1 }}
          style={{ transformOrigin: "top" }}
        />
        <div className="space-y-8">
          {config.timelineEvents.map((event, index) => (
            <motion.article
              key={event.title}
              className={`relative flex gap-5 md:items-center ${index % 2 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.65 }}
            >
              <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-rosePink shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                <Sparkles size={21} />
              </div>
              <div className="glass ml-0 w-full p-6 shadow-glass md:w-[calc(50%-2.75rem)]">
                <h3 className="font-display text-2xl text-romanticRed">{event.title}</h3>
                <p className="mt-3 leading-7 text-romanticRed/70">{event.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
