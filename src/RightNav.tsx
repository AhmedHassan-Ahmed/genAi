import { motion } from "framer-motion";
import { Sun, Moon, Flame, Droplet } from "lucide-react";
import { useTheme } from "./theme";

const items = [
  { name: "Light", icon: Sun, value: "light" },
  { name: "Dark", icon: Moon, value: "dark" },
  { name: "Red", icon: Flame, value: "red" },
  { name: "Blue", icon: Droplet, value: "blue" },
] as const;

export default function RightNav() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        fixed bottom-[104px] left-1/2 -translate-x-1/2
        h-[58px] w-[92vw] max-w-[320px]
        rounded-[1.25rem]
        backdrop-blur-2xl
        bg-white/10
        border border-white/20
        shadow-[0_25px_70px_rgba(0,0,0,0.35)]
        flex flex-row items-center justify-center
        gap-4 px-4
        z-50

        md:top-1/2 md:right-7 md:left-auto md:bottom-auto
        md:h-[38vh] md:w-[85px] md:max-w-none
        md:-translate-y-1/2 md:translate-x-0
        md:flex-col md:gap-7 md:rounded-[1.8rem] md:px-0 md:py-8
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-600/25 via-pink-500/10 to-blue-600/25 blur-3xl opacity-70" />

      {items.map((item, index) => {
        const Icon = item.icon;
        const active = theme === item.value;

        return (
          <button
            key={item.name}
            onClick={() => setTheme(item.value)}
            className={`
              relative group flex items-center justify-center
              p-3 rounded-[0.9rem] transition-all duration-300 md:p-3.5
              ${
                active
                  ? "bg-white/25 scale-105 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                  : "hover:bg-white/15 hover:scale-105"
              }
            `}
          >
            {/* Active Indicator (Left Side Bar) */}
            <span 
              className={`
                absolute -top-2 h-1 w-6 rounded-full md:-left-2 md:top-auto md:h-6 md:w-1
                bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 md:bg-gradient-to-b
                shadow-[0_0_8px_rgba(168,85,247,0.7)]
                transition-opacity duration-300
                ${active ? "opacity-100" : "opacity-0"}
              `} 
            />

            {/* Hover Glow Background */}
            <span className="absolute inset-0 rounded-[0.9rem] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-lg transition duration-500" />

            {/* Icon with Micro-interaction */}
            <motion.div
              whileHover={{ rotate: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              <Icon className="text-white w-6 h-6 drop-shadow-lg" />
            </motion.div>

            {/* Tooltip */}
            <span
              className="
                absolute bottom-14 hidden md:right-14 md:bottom-auto md:block
                opacity-0 group-hover:opacity-100
                translate-x-2 group-hover:translate-x-0
                transition-all duration-300
                text-white text-sm font-medium
                bg-black/50 backdrop-blur-xl
                px-3 py-1.5 rounded-lg
                whitespace-nowrap pointer-events-none
                shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                border border-white/10
              "
            >
              {item.name}
            </span>

            {/* Index Badge (Top Right) */}
            <span 
              className="
                absolute -top-1 -right-1 
                w-4 h-4 rounded-full 
                bg-gradient-to-r from-purple-500 to-blue-500 
                text-[9px] text-white font-bold 
                flex items-center justify-center 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
                shadow-sm
              "
            >
              {index + 1}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
