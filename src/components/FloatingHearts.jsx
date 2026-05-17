import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${5 + ((index * 17) % 88)}%`,
  delay: (index % 6) * 0.65,
  duration: 9 + (index % 5),
  size: 14 + (index % 4) * 6,
}));

export default function FloatingHearts({ burst = false }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute bottom-[-48px] text-rosePink/35 drop-shadow"
          style={{ left: heart.left, fontSize: heart.size }}
          initial={{ y: 80, opacity: 0, rotate: -12, scale: burst ? 1.4 : 1 }}
          animate={{
            y: burst ? [-20, -360, -680] : [-20, -420, -760],
            x: [0, heart.id % 2 ? 34 : -28, heart.id % 3 ? -18 : 22],
            opacity: [0, 0.72, 0],
            rotate: [-12, 10, -8],
          }}
          transition={{
            duration: burst ? 3.2 : heart.duration,
            repeat: burst ? 0 : Infinity,
            ease: "easeInOut",
            delay: heart.delay,
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
