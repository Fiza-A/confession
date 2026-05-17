import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

export default function Reasons({ config }) {
  return (
    <section className="section-shell bg-creamWhite">
      <SectionHeader
        eyebrow="Reasons"
        title="Why I Love You"
        copy="Every reason is small on its own. Together, they are everything."
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {config.reasonsILoveYou.map((reason, index) => (
          <motion.div
            key={reason}
            className="glass min-h-44 p-6 shadow-glass"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.07, duration: 0.6 }}
            whileHover={{ y: -7, scale: 1.02 }}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-rosePink/15 text-rosePink">
              <Heart size={23} fill="currentColor" />
            </div>
            <p className="text-xl font-semibold leading-relaxed text-romanticRed">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
