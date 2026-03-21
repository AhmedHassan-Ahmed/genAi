import {
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

import {
  type Theme,
  ThemeContext,
  themeMap,
  isValidTheme,
  getSystemTheme,
} from "./theme";
/* ================= PROPS ================= */

interface ThemeProviderProps {
  children: ReactNode;
}

/* ================= PROVIDER ================= */

export function ThemeProvider({ children }: ThemeProviderProps) {
  // ✅ Lazy initialization (fixes cascading render issue)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";

    const saved = localStorage.getItem("theme");

    if (saved && isValidTheme(saved)) {
      return saved;
    }

    return getSystemTheme();
  });

  const [isAuto, setIsAuto] = useState(true);

  /* ================= APPLY THEME ================= */

  useEffect(() => {
    const config = themeMap[theme];

    document.body.style.background = config.bg;
    document.documentElement.style.setProperty("--glow-color", config.glow);
    document.documentElement.style.setProperty("--accent-color", config.accent);
  }, [theme]);

  /* ================= SAVE TO LOCALSTORAGE ================= */

  useEffect(() => {
    if (!isAuto) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isAuto]);

  /* ================= SYSTEM THEME LISTENER ================= */

  useEffect(() => {
    if (!isAuto) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [isAuto]);

  /* ================= CONTEXT VALUE ================= */

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        config: themeMap[theme],
        isAuto,
        setIsAuto,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}