import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05, rotate: 180 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1.5 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/75 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 dark:shadow-indigo-500/50 dark:hover:shadow-indigo-500/75 transition-all duration-500"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Background */}
      <div className="absolute inset-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl backdrop-blur-xl dark:from-slate-900 dark:to-slate-950" />
      
      {/* Sun Icon (Light Mode) */}
      <motion.div
        className="relative z-10 h-7 w-7 text-yellow-400 drop-shadow-lg"
        initial={false}
        animate={{ 
          opacity: theme === 'dark' ? 1 : 0, 
          scale: theme === 'dark' ? 1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
      >
        <FiSun />
      </motion.div>
      
      {/* Moon Icon (Dark Mode) */}
      <motion.div
        className="relative z-10 h-7 w-7 text-slate-900 drop-shadow-lg"
        initial={false}
        animate={{ 
          opacity: theme === 'light' ? 1 : 0, 
          scale: theme === 'light' ? 1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
      >
        <FiMoon />
      </motion.div>
    </motion.button>
  );
}
