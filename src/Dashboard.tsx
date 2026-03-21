import { motion } from "framer-motion";
import { useTheme } from "./theme";

export default function Dashboard() {
  const { theme } = useTheme();

  const aiFeatures = [
    {
      title: "Neural Core",
      description:
        "Deep learning inference engine with real-time pattern recognition.",
      color: "text-[#5f74ff]",
      glow: "shadow-[#5f74ff]/20",
    },
    {
      title: "Vision AI",
      description:
        "Computer vision processing with 99.7% object detection accuracy.",
      color: "text-[#5f74ff]",
      glow: "shadow-[#5f74ff]/20",
    },
    {
      title: "NLP Engine",
      description:
        "Natural language understanding with contextual sentiment analysis.",
      color: "text-[#5f74ff]",
      glow: "shadow-[#5f74ff]/20",
    },
    {
      title: "Predictive",
      description:
        "Forecasting models powered by transformer architecture.",
      color: "text-[#5f74ff]",
      glow: "shadow-[#5f74ff]/20",
    },
  ];

  return (
    <div
      className="
        fixed inset-0
        md:left-[90px] md:right-[90px]
        lg:left-[110px] lg:right-[110px]
        xl:left-[130px] xl:right-[130px]
        flex items-center justify-center
        p-7 md:p-12
        pointer-events-none
      "
    >
      <div
        className="
          w-full max-w-[1450px]
          mx-auto
          grid grid-cols-1 md:grid-cols-3
          gap-7 md:gap-9
          pointer-events-auto
        "
      >
        {/* BIG MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`
            col-span-1 md:col-span-2 md:row-span-2
            rounded-[1.75rem]
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            p-9 md:p-12
            shadow-[0_25px_90px_rgba(0,0,0,0.35)]

            ${
              theme === "light"
                ? "bg-white/10 border border-white/20 text-white"
                : "bg-white/10 border border-white/20 text-white"
            }

            ${theme === "red" && "bg-red-500/10 border-red-400/20 text-red-200"}
            ${theme === "blue" && "bg-blue-500/10 border-blue-400/20 text-blue-200"}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl opacity-50" />

          <h2 className="text-white text-[1.75rem] md:text-[2.25rem] mb-6">
            Gen AI Dashboard
          </h2>

          <p
            className={`${
              theme === "light"
                ? "text-[oklch(0.62_0.21_261.56)]"
                : "text-white/70"
            } text-[1.05rem] md:text-[1.2rem] mb-7 leading-relaxed`}
          >
            Generate content, analyze data, and build intelligent workflows.
          </p>
        </motion.div>

        {/* SMALL CARDS */}
        {aiFeatures.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`
              rounded-[1.35rem]
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-7 md:p-8
              shadow-[0_12px_45px_rgba(0,0,0,0.35)]
              ${feature.glow}
              hover:scale-[1.02]
              transition-transform duration-300
              relative z-10

              ${
                theme === "light"
                  ? "bg-white/10 border border-white/20 text-white"
                  : "bg-white/10 border border-white/20 text-white"
              }

              ${theme === "red" && "bg-red-500/10 border-red-400/20 text-red-200"}
              ${theme === "blue" && "bg-blue-500/10 border-blue-400/20 text-blue-200"}
            `}
          >
            <h3
              className={`
                text-[0.95rem] md:text-[1.1rem] mb-4 font-semibold
                ${
                  theme === "light"
                    ? "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                    : "text-white/70"
                }
              `}
            >
              {feature.title}
            </h3>

            <p
              className={`text-[0.95rem] ${
                theme === "light"
                  ? "text-[oklch(0.62_0.21_261.56)]"
                  : "text-white/70"
              } leading-relaxed`}
            >
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}