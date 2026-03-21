import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-6 pt-5">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1480px]"
      >
        <div
          className="
            flex items-center justify-between
            px-10 py-5
            rounded-[1.4rem]
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            shadow-[0_16px_50px_rgba(0,0,0,0.3)]
            relative overflow-hidden
          "
        >
          {/* Gradient glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/25 via-pink-500/15 to-blue-500/25 blur-2xl opacity-70" />

          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4 font-semibold text-white text-[1.45rem]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-[3.25rem] h-[3.25rem] rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-lg shadow-purple-500/30" />
            <span className="tracking-wide">Modern</span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-12 text-[1.15rem] text-white/80">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative group transition-all duration-300 font-medium ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1.5 h-[3px] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                    <span className={`absolute -right-3 top-0 w-1.5 h-1.5 rounded-full bg-purple-400 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="
                px-7 py-3 rounded-[1rem]
                border border-white/25
                bg-white/10
                text-white font-medium text-base
                backdrop-blur-xl
                hover:bg-white/20 hover:border-white/35
                transition-all duration-300
                shadow-lg shadow-black/10
              "
            >
              Sign in
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="
                relative px-7 py-3 rounded-[1rem]
                bg-gradient-to-r from-purple-500  to-blue-500
                text-white text-base font-semibold
                shadow-lg shadow-purple-500/35
                overflow-hidden
                group
              "
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500  to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute inset-0 rounded-[1rem] bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-50 -z-10 group-hover:opacity-70 transition-opacity duration-300" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}