// src/components/layout/Navbar.jsx
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-40 border-b backdrop-blur-md ${
        theme === 'dark'
          ? 'border-slate-800/60 bg-slate-900/80'
          : 'border-slate-200/60 bg-white/80'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Name */}
        <motion.a
          href="#home"
          className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-slate-900 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-slate-100 dark:via-indigo-400 dark:to-purple-400"
          whileHover={{ scale: 1.05 }}
        >
          &lt;Sam /&gt;
        </motion.a>

        {/* Nav links (desktop) */}
        <motion.div
          className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {links.map(({ href, label }, index) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative hover:text-purple-500 transition-all duration-300 dark:hover:text-purple-400"
            >
              <span>{label}</span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </motion.div>

        {/* Theme toggle */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </motion.header>
  );
}
