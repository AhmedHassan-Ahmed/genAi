import React from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "Features", "Pricing", "About"];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <div
          className="
          flex items-center justify-between
          px-6 py-3
          rounded-2xl
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.2)]
          relative overflow-hidden
        "
        >
          {/* Gradient glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-2xl opacity-60" />

          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500" />
            <span className="tracking-wide">NOVA</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <button
                key={item}
                className="relative group transition"
              >
                {item}
                <span
                  className="
                  absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-gradient-to-r from-purple-400 to-blue-400
                  transition-all duration-300
                  group-hover:w-full
                "
                />
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-white/70 hover:text-white transition text-sm">
              Sign in
            </button>

            <button
              className="
              relative px-5 py-2 rounded-xl
              bg-gradient-to-r from-purple-500 to-blue-500
              text-white text-sm font-medium
              shadow-lg
              hover:scale-105 active:scale-95
              transition
            "
            >
              <span className="relative z-10">Get Started</span>

              {/* Glow */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-50 -z-10" />
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}