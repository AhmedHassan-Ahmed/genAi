import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4.2, duration: 0.8 }}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black" />

      {/* ✨ Glow blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full animate-pulse top-10 right-10" />

      {/* 🔥 3D Welcome Text */}
      <motion.h1
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="
          text-5xl md:text-7xl font-bold
          text-white
          tracking-widest
          [transform-style:preserve-3d]
        "
      >
        <motion.span
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          WELCOME
        </motion.span>
      </motion.h1>

      {/* ✨ particles (simple) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: "-100vh",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}