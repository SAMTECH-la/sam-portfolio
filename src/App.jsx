import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  // Don't render until mounted (prevents flash)
  if (!theme) return null;

  return (
    <div className={`min-h-screen antialiased ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-50' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900'
    }`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
