import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 bg-slate-50/50 py-6 sm:py-8 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center text-xs sm:text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Sam. Built with React & Tailwind.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/yourusername" aria-label="GitHub" className="text-slate-500 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-slate-100">
            <FiGithub className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-slate-100">
            <FiLinkedin className="h-4 w-4" />
          </a>
          <a href="mailto:hello@yourdomain.com" aria-label="Email" className="text-slate-500 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-slate-100">
            <FiMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
