import { motion, useScroll, useTransform } from "framer-motion";
import  { useRef } from "react";

export default function ScrollSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2]);

  return (
    <section ref={ref} className="h-[400vh] relative">
      {/* Background Glows */}
      <div className="fixed top-[-160px] left-[-160px] h-[320px] w-[320px] rounded-full bg-purple-600/40 blur-[140px] pointer-events-none -z-20 md:top-[-200px] md:left-[-200px] md:h-[600px] md:w-[600px] md:blur-[200px]" />
      <div className="fixed bottom-[-180px] right-[-180px] h-[360px] w-[360px] rounded-full bg-pink-600/40 blur-[140px] pointer-events-none -z-20 md:bottom-[-200px] md:right-[-200px] md:h-[700px] md:w-[700px] md:blur-[200px]" />
      <div className="fixed top-[50%] left-[30%] h-[280px] w-[280px] rounded-full bg-blue-600/30 blur-[110px] pointer-events-none -z-20 md:h-[500px] md:w-[500px] md:blur-[150px]" />
      <div className="fixed top-[20%] right-[20%] h-[240px] w-[240px] rounded-full bg-cyan-500/20 blur-[90px] pointer-events-none -z-20 md:h-[400px] md:w-[400px] md:blur-[120px]" />

      <div className="sticky top-0 h-screen overflow-hidden [perspective:2000px]">
        {/* 3D Cube - Original style, positioned BEHIND text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <motion.div
            style={{
              rotateX,
              rotateY,
              scale,
              transformStyle: "preserve-3d",
            }}
            className="relative h-48 w-48 [--cube-z:6rem] sm:h-72 sm:w-72 sm:[--cube-z:9rem] md:h-96 md:w-96 md:[--cube-z:160px]"
          >
            {/* Front */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-purple-600/60 to-purple-800/60 border-4 border-white/30 backdrop-blur-xl shadow-[0_0_100px_rgba(168,85,247,0.5)]"
              style={{ transform: "translateZ(var(--cube-z))" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold md:text-6xl">AI</div>
            </div>
            {/* Back */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-blue-600/60 to-blue-800/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateY(180deg) translateZ(var(--cube-z))" }}
            />
            {/* Right */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-pink-600/60 to-pink-800/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateY(90deg) translateZ(var(--cube-z))" }}
            />
            {/* Left */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-indigo-600/60 to-indigo-800/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateY(-90deg) translateZ(var(--cube-z))" }}
            />
            {/* Top */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-purple-500/60 to-pink-600/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateX(90deg) translateZ(var(--cube-z))" }}
            />
            {/* Bottom */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-blue-500/60 to-cyan-600/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateX(-90deg) translateZ(var(--cube-z))" }}
            />
          </motion.div>
        </div>

        {/* Content - IN FRONT of cube with z-0 */}
        <motion.div style={{ x }} className="flex w-[400%] h-full relative z-0">
          {/* SECTION 1 - Hero */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 pb-24 pt-36 relative sm:px-8 md:px-8 md:py-0">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-pink-400 text-sm tracking-[0.24em] uppercase mb-5 font-medium drop-shadow-lg sm:text-xl sm:tracking-[0.4em] md:mb-8 md:text-2xl"
            >
              Next Generation AI
            </motion.span>
            <h1 className="text-[clamp(3rem,16vw,4.5rem)] md:text-9xl font-black text-white leading-[0.9] mb-6 md:mb-8 drop-shadow-2xl">
              Transform Your<br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                Digital Reality
              </span>
            </h1>
            <p className="text-white/90 text-base sm:text-xl md:text-3xl max-w-4xl leading-relaxed mb-8 md:mb-12 drop-shadow-lg font-medium">
              Harness the power of neural networks and machine learning to create 
              intelligent experiences that adapt, learn, and evolve.
            </p>
            <div className="flex w-full max-w-md flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-6">
              <motion.button 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-purple-600/90 to-blue-600/90 rounded-full text-white text-base md:text-xl font-bold shadow-[0_20px_60px_rgba(168,85,247,0.4)] hover:shadow-[0_30px_80px_rgba(168,85,247,0.6)] transition-all duration-300 backdrop-blur-sm"
              >
                Start Building
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-12 md:py-5 border-2 border-white/40 rounded-full text-white text-base md:text-xl font-bold hover:bg-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm bg-white/10"
              >
                View Demo
              </motion.button>
            </div>
          </div>

          {/* SECTION 2 - Features */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 pb-24 pt-36 relative sm:px-8 md:px-8 md:py-0">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-400 text-sm tracking-[0.24em] uppercase mb-5 font-medium drop-shadow-lg sm:text-xl sm:tracking-[0.4em] md:mb-8 md:text-2xl"
            >
              Core Capabilities
            </motion.span>
            <h1 className="text-[clamp(3rem,16vw,4.5rem)] md:text-9xl font-black text-white leading-[0.9] mb-8 md:mb-16 drop-shadow-2xl">
              Intelligent<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                Automation
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-7xl">
              <motion.div 
                whileHover={{ y: -20, scale: 1.02 }}
                className="p-5 sm:p-6 md:p-10 bg-white/15 border-2 border-white/30 rounded-3xl backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="text-4xl md:text-6xl mb-4 md:mb-6 drop-shadow-lg">🧠</div>
                <h3 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4 drop-shadow-lg">Neural Processing</h3>
                <p className="text-white/90 text-sm md:text-lg leading-relaxed font-medium">Deep learning models that understand context and predict outcomes with unprecedented accuracy</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -20, scale: 1.02 }}
                className="p-5 sm:p-6 md:p-10 bg-white/15 border-2 border-white/30 rounded-3xl backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="text-4xl md:text-6xl mb-4 md:mb-6 drop-shadow-lg">⚡</div>
                <h3 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4 drop-shadow-lg">Real-time Analytics</h3>
                <p className="text-white/90 text-sm md:text-lg leading-relaxed font-medium">Process millions of data points in milliseconds with our distributed architecture</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -20, scale: 1.02 }}
                className="p-5 sm:p-6 md:p-10 bg-white/15 border-2 border-white/30 rounded-3xl backdrop-blur-md hover:border-pink-500/50 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="text-4xl md:text-6xl mb-4 md:mb-6 drop-shadow-lg">🔒</div>
                <h3 className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4 drop-shadow-lg">Secure by Design</h3>
                <p className="text-white/90 text-sm md:text-lg leading-relaxed font-medium">Enterprise-grade security with end-to-end encryption and zero-trust architecture</p>
              </motion.div>
            </div>
          </div>

          {/* SECTION 3 - Stats */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 pb-24 pt-36 relative sm:px-8 md:px-8 md:py-0">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-pink-400 text-sm tracking-[0.24em] uppercase mb-5 font-medium drop-shadow-lg sm:text-xl sm:tracking-[0.4em] md:mb-8 md:text-2xl"
            >
              Proven Results
            </motion.span>
            <h1 className="text-[clamp(3rem,16vw,4.5rem)] md:text-9xl font-black text-white leading-[0.9] mb-8 md:mb-16 drop-shadow-2xl">
              Ready to<br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Scale Up?
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:flex md:gap-20 text-center mb-8 md:mb-16">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-3 md:p-8"
              >
                <div className="text-4xl md:text-8xl font-black text-white mb-1 md:mb-2 drop-shadow-2xl">10x</div>
                <div className="text-white/90 text-sm md:text-xl font-medium drop-shadow-lg">Faster Processing</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="p-3 md:p-8"
              >
                <div className="text-4xl md:text-8xl font-black text-white mb-1 md:mb-2 drop-shadow-2xl">99.9%</div>
                <div className="text-white/90 text-sm md:text-xl font-medium drop-shadow-lg">Uptime SLA</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="p-3 md:p-8"
              >
                <div className="text-4xl md:text-8xl font-black text-white mb-1 md:mb-2 drop-shadow-2xl">500+</div>
                <div className="text-white/90 text-sm md:text-xl font-medium drop-shadow-lg">Enterprise Clients</div>
              </motion.div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 md:px-16 md:py-6 bg-white text-purple-900 rounded-full text-base md:text-2xl font-black hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(255,255,255,0.3)]"
            >
              Get Started Free →
            </motion.button>
          </div>

          {/* SECTION 4 - Extra Impact */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 pb-24 pt-36 relative sm:px-8 md:px-8 md:py-0">
            <h1 className="text-[clamp(3rem,16vw,4.5rem)] md:text-9xl font-black text-white leading-[0.9] drop-shadow-2xl">
              The Future<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Is Here
              </span>
            </h1>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-10 md:mt-16 text-white/70 text-4xl md:text-6xl drop-shadow-lg"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
