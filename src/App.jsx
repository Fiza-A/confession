import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero.jsx";
import LoveLetter from "./components/LoveLetter.jsx";
import Memories from "./components/Memories.jsx";
import Reasons from "./components/Reasons.jsx";
import Timeline from "./components/Timeline.jsx";
import Surprise from "./components/Surprise.jsx";
import FinalMessage from "./components/FinalMessage.jsx";
import UnlockScreen from "./components/UnlockScreen.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";
import { loveConfig } from "./data/loveConfig.js";

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-creamWhite text-romanticRed">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <UnlockScreen key="unlock" config={loveConfig} onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <div key="site" className="relative">
            <FloatingHearts />
            <Hero config={loveConfig} />
            <LoveLetter config={loveConfig} />
            <Memories config={loveConfig} />
            <Reasons config={loveConfig} />
            <Timeline config={loveConfig} />
            <Surprise config={loveConfig} />
            <FinalMessage config={loveConfig} />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
