import { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";

export default function RetroModeToggle({ className = "" }) {
  const [retro, setRetro] = useState(false);

  useEffect(() => {
    if (retro) {
      document.body.classList.add("retro-mode");
    } else {
      document.body.classList.remove("retro-mode");
    }
    return () => document.body.classList.remove("retro-mode");
  }, [retro]);

  return (
    <button
      className={
        "fixed bottom-8 right-8 z-50 bg-black bg-opacity-80 border-green-500 border-2 rounded-full p-4 flex items-center justify-center shadow-lg hover:scale-110 transition-all " +
        (retro ? "animate-pulse border-4" : "") +
        className
      }
      title="Toggle Retro Mode"
      onClick={() => setRetro((v) => !v)}
    >
      <FaPowerOff className="text-green-400 text-2xl" />
      <span className="ml-2 text-green-300 font-mono text-lg select-none">{retro ? "RETRO ON" : "RETRO"}</span>
    </button>
  );
}