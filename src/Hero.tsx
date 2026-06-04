import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pb-28 pt-36 overflow-hidden sm:px-6 md:px-8 md:py-32">
   
      <div className="absolute top-[-100px] left-[-100px] h-[260px] w-[260px] rounded-full bg-purple-500/30 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-100px] h-[280px] w-[280px] rounded-full bg-pink-500/30 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]" />
      <div className="absolute top-[40%] left-[50%] h-[240px] w-[240px] rounded-full bg-blue-500/20 blur-[90px] md:h-[400px] md:w-[400px] md:blur-[120px]" />

     <ElectricBorder
       color="#7df9ff"
       speed={1}
       chaos={0.12}
       thickness={2}
       style={{ borderRadius: 24 }}
     >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        
        className="
            relative z-10
             w-[1090px] max-w-full
            mx-auto
            rounded-[2rem]
             border border-white/20
             bg-white/10
             backdrop-blur-xl
             shadow-[0_30px_100px_rgba(0,0,0,0.4)]
             p-6 sm:p-10 md:p-16 lg:p-20
             text-center
        "

      >
        {/* Heading */}
        <h1 className="text-[clamp(2.25rem,10vw,4.5rem)] font-semibold text-white leading-tight">
          Build Powerful Systems <br />
          <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
            With Modern Engineering
          </span>
        </h1>

        <p className="mt-6 text-white/70 max-w-[42rem] mx-auto text-base leading-relaxed sm:text-lg md:mt-8 md:text-[1.25rem]">
          A next-generation platform for designing, developing, and scaling
          high-performance applications with clean architecture and advanced
          tooling.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:mt-10 md:gap-6">
          {/* Primary */}
          <motion.button
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              px-6 py-3.5 rounded-[1rem]
              bg-gradient-to-r from-purple-500 to-blue-500
              text-white font-medium text-base md:px-8 md:py-4 md:text-[1.15rem]
              shadow-lg
              hover:scale-105 active:scale-95
              transition
            "
          >
            Get Started
          </motion.button>

          {/* Secondary */}
          <motion.button
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              px-6 py-3.5 rounded-[1rem]
              border border-white/20
              bg-white/5
              text-white/80 text-base md:px-8 md:py-4 md:text-[1.15rem]
              backdrop-blur-md
              hover:bg-white/10
              transition
            "
          >
            Watch Demo
          </motion.button>
        </div>
      </motion.div>
      </ElectricBorder>
    </section>
  );
}
