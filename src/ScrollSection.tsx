import { motion, useScroll, useTransform } from "framer-motion";
import  { useRef } from "react";

export default function ScrollSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2]);

  return (
    <section ref={ref} className="h-[400vh] relative">
      {/* Background Glows */}
      <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/40 rounded-full blur-[200px] pointer-events-none -z-20" />
      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-pink-600/40 rounded-full blur-[200px] pointer-events-none -z-20" />
      <div className="fixed top-[50%] left-[30%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] pointer-events-none -z-20" />
      <div className="fixed top-[20%] right-[20%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-20" />

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
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            {/* Front */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-purple-600/60 to-purple-800/60 border-4 border-white/30 backdrop-blur-xl shadow-[0_0_100px_rgba(168,85,247,0.5)]"
              style={{ transform: "translateZ(160px)" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">AI</div>
            </div>
            {/* Back */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-blue-600/60 to-blue-800/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateY(180deg) translateZ(160px)" }}
            />
            {/* Right */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-pink-600/60 to-pink-800/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateY(90deg) translateZ(160px)" }}
            />
            {/* Left */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-indigo-600/60 to-indigo-800/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateY(-90deg) translateZ(160px)" }}
            />
            {/* Top */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-purple-500/60 to-pink-600/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateX(90deg) translateZ(160px)" }}
            />
            {/* Bottom */}
            <div
              className="absolute w-full h-full bg-gradient-to-br from-blue-500/60 to-cyan-600/60 border-4 border-white/30 backdrop-blur-xl"
              style={{ transform: "rotateX(-90deg) translateZ(160px)" }}
            />
          </motion.div>
        </div>

        {/* Content - IN FRONT of cube with z-0 */}
        <motion.div style={{ x }} className="flex w-[400%] h-full relative z-0">
          {/* SECTION 1 - Hero */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-8 relative">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-pink-400 text-xl md:text-2xl tracking-[0.4em] uppercase mb-8 font-medium drop-shadow-lg"
            >
              Next Generation AI
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] mb-8 drop-shadow-2xl">
              Transform Your<br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                Digital Reality
              </span>
            </h1>
            <p className="text-white/90 text-2xl md:text-3xl max-w-4xl leading-relaxed mb-12 drop-shadow-lg font-medium">
              Harness the power of neural networks and machine learning to create 
              intelligent experiences that adapt, learn, and evolve.
            </p>
            <div className="flex gap-6">
              <motion.button 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-purple-600/90 to-blue-600/90 rounded-full text-white text-xl font-bold shadow-[0_20px_60px_rgba(168,85,247,0.4)] hover:shadow-[0_30px_80px_rgba(168,85,247,0.6)] transition-all duration-300 backdrop-blur-sm"
              >
                Start Building
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border-2 border-white/40 rounded-full text-white text-xl font-bold hover:bg-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm bg-white/10"
              >
                View Demo
              </motion.button>
            </div>
          </div>

          {/* SECTION 2 - Features */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-8 relative">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-400 text-xl md:text-2xl tracking-[0.4em] uppercase mb-8 font-medium drop-shadow-lg"
            >
              Core Capabilities
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] mb-16 drop-shadow-2xl">
              Intelligent<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                Automation
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
              <motion.div 
                whileHover={{ y: -20, scale: 1.02 }}
                className="p-10 bg-white/15 border-2 border-white/30 rounded-3xl backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="text-6xl mb-6 drop-shadow-lg">🧠</div>
                <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-lg">Neural Processing</h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium">Deep learning models that understand context and predict outcomes with unprecedented accuracy</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -20, scale: 1.02 }}
                className="p-10 bg-white/15 border-2 border-white/30 rounded-3xl backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="text-6xl mb-6 drop-shadow-lg">⚡</div>
                <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-lg">Real-time Analytics</h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium">Process millions of data points in milliseconds with our distributed architecture</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -20, scale: 1.02 }}
                className="p-10 bg-white/15 border-2 border-white/30 rounded-3xl backdrop-blur-md hover:border-pink-500/50 transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="text-6xl mb-6 drop-shadow-lg">🔒</div>
                <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-lg">Secure by Design</h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium">Enterprise-grade security with end-to-end encryption and zero-trust architecture</p>
              </motion.div>
            </div>
          </div>

          {/* SECTION 3 - Stats */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-8 relative">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-pink-400 text-xl md:text-2xl tracking-[0.4em] uppercase mb-8 font-medium drop-shadow-lg"
            >
              Proven Results
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] mb-16 drop-shadow-2xl">
              Ready to<br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Scale Up?
              </span>
            </h1>
            <div className="flex gap-20 text-center mb-16">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-8"
              >
                <div className="text-8xl font-black text-white mb-2 drop-shadow-2xl">10x</div>
                <div className="text-white/90 text-xl font-medium drop-shadow-lg">Faster Processing</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="p-8"
              >
                <div className="text-8xl font-black text-white mb-2 drop-shadow-2xl">99.9%</div>
                <div className="text-white/90 text-xl font-medium drop-shadow-lg">Uptime SLA</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="p-8"
              >
                <div className="text-8xl font-black text-white mb-2 drop-shadow-2xl">500+</div>
                <div className="text-white/90 text-xl font-medium drop-shadow-lg">Enterprise Clients</div>
              </motion.div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-white text-purple-900 rounded-full text-2xl font-black hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_rgba(255,255,255,0.3)]"
            >
              Get Started Free →
            </motion.button>
          </div>

          {/* SECTION 4 - Extra Impact */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-8 relative">
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] drop-shadow-2xl">
              The Future<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Is Here
              </span>
            </h1>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-16 text-white/70 text-6xl drop-shadow-lg"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}