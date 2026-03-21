import { motion } from "framer-motion";
import { LayoutDashboard, Sparkles, Sliders, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Features", icon: Sparkles, path: "/features" },
  { name: "Pricing", icon: Sliders, path: "/pricing" },
  { name: "About", icon: Settings, path: "/about" },
];

export default function SideNav() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        fixed bottom-5 left-1/2 -translate-x-1/2
        h-[75px] w-[92vw] max-w-[360px]
        rounded-[1.8rem]
        backdrop-blur-2xl
        bg-white/10
        border border-white/20
        shadow-[0_25px_70px_rgba(0,0,0,0.35)]
        flex flex-row items-center justify-center px-5 gap-6
        z-50

        /* Desktop */
        md:top-1/2 md:-translate-y-1/2 md:left-7 md:translate-x-0
        md:h-[40vh] md:w-[95px] md:rounded-[1.8rem]
        md:flex-col md:py-8 md:gap-7 md:px-0
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-600/25 via-pink-500/10 to-blue-600/25 blur-3xl opacity-70" />

     
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative group flex items-center justify-center
               p-3 md:p-3.5 rounded-[0.9rem] transition-all duration-300
               ${
                 isActive
                   ? "bg-white/25 scale-105 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                   : "hover:bg-white/15 hover:scale-105"
               }`
            }
          >
            {/* Glow */}
            <span className="absolute inset-0 rounded-[0.9rem] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-lg transition duration-500" />

            {/* Indicator */}
            <span className="absolute -left-2 w-1 h-6 rounded-full bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 opacity-0 group-[.active]:opacity-100 shadow-[0_0_8px_rgba(168,85,247,0.7)]" />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="text-white w-6 h-6 md:w-7 md:h-7 relative z-10 drop-shadow-lg" />
            </motion.div>

            {/* Tooltip */}
            <span
              className="
                absolute left-14 md:left-20
                opacity-0 group-hover:opacity-100
                translate-x-2 group-hover:translate-x-0
                transition-all duration-300
                text-white text-xs md:text-sm font-medium
                bg-black/50 backdrop-blur-xl
                px-3 py-1.5 rounded-lg
                whitespace-nowrap pointer-events-none
                shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                border border-white/10
              "
            >
              {item.name}
            </span>

            {/* Index */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-[9px] text-white font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {index + 1}
            </span>
          </NavLink>
        );
      })}
    </motion.div>
  );
}