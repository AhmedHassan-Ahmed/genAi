import { createContext, useContext } from "react";

/* ================= TYPES ================= */

export type Theme = "dark" | "light" | "red" | "blue";

export interface ThemeConfig {
  bg: string;
  glow: string;
  accent: string;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  config: ThemeConfig;
  isAuto: boolean;
  setIsAuto: (v: boolean) => void;
}

/* ================= THEME MAP ================= */

export const themeMap: Record<Theme, ThemeConfig> = {
  dark: {
    bg: "#0b0b12",
    glow: "#8b5cf6",
    accent: "#6366f1",
  },
  light: {
    bg: "#f8fafc",
    glow: "#60a5fa",
    accent: "#3b82f6",
  },
  red: {
    bg: "#1a0a0a",
    glow: "#ef4444",
    accent: "#f87171",
  },
  blue: {
    bg: "#0a0f1a",
    glow: "#38bdf8",
    accent: "#0ea5e9",
  },
};

/* ================= HELPERS ================= */

export const isValidTheme = (value: string): value is Theme => {
  return ["dark", "light", "red", "blue"].includes(value);
};

export const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/* ================= CONTEXT ================= */

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

/* ================= HOOK ================= */

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return ctx;
}