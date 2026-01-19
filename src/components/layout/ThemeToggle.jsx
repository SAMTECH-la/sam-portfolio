import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex h-14 w-14 items-center justify-center 
        rounded-full overflow-hidden
        bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 
        shadow-2xl shadow-purple-500/50 transition-all duration-500
        hover:shadow-purple-500/75
        dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 
        dark:shadow-indigo-500/50 dark:hover:shadow-indigo-500/75"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Inner Circle */}
      <div
        className="absolute inset-[3px] rounded-full bg-gradient-to-br 
        from-slate-50 to-slate-100 shadow-xl 
        dark:from-slate-900 dark:to-slate-950"
      />

      {/* Sun Icon (Light Mode) */}
      <motion.div
        className="relative z-10 text-yellow-400"
        initial={false}
        animate={{
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0.6 : 1,
          rotate: isDark ? -90 : 0,
        }}
        transition={{ duration: 0.35 }}
      >
        <FiSun size={26} />
      </motion.div>

      {/* Moon Icon (Dark Mode) */}
      <motion.div
        className="absolute z-10 text-slate-200"
        initial={false}
        animate={{
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.6,
          rotate: isDark ? 0 : 90,
        }}
        transition={{ duration: 0.35 }}
      >
        <FiMoon size={24} />
      </motion.div>
    </motion.button>
  );
}
