export const skills = [
  { name: 'React', category: 'Frontend', level: 95, icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
  { name: 'TypeScript', category: 'Languages', level: 85, icon: '📘', color: 'from-blue-500 to-purple-500' },
  { name: 'JavaScript', category: 'Languages', level: 90, icon: '📜', color: 'from-yellow-400 to-orange-500' },
  { name: 'Tailwind CSS', category: 'Styling', level: 95, icon: '🎨', color: 'from-cyan-400 to-blue-500' },
  { name: 'CSS3', category: 'Styling', level: 92, icon: '💅', color: 'from-pink-400 to-rose-500' },
  { name: 'Next.js', category: 'Frameworks', level: 80, icon: '▲', color: 'from-slate-800 to-slate-900' },
  { name: 'Node.js', category: 'Backend', level: 75, icon: '🟢', color: 'from-green-400 to-emerald-500' },
  { name: 'Express.js', category: 'Backend', level: 72, icon: '🚀', color: 'from-indigo-400 to-purple-500' },
  { name: 'Framer Motion', category: 'Animation', level: 85, icon: '🎬', color: 'from-purple-400 to-pink-500' },
  { name: 'MongoDB', category: 'Database', level: 70, icon: '🍃', color: 'from-green-500 to-teal-500' },
  { name: 'Git', category: 'Tools', level: 90, icon: '📦', color: 'from-orange-400 to-red-500' },
  { name: 'Vite', category: 'Tools', level: 88, icon: '⚡', color: 'from-emerald-400 to-teal-500' },
];

// Group by category
export const skillsByCategory = {
  Frontend: skills.filter(s => s.category === 'Frontend'),
  Styling: skills.filter(s => s.category === 'Styling'),
  Languages: skills.filter(s => s.category === 'Languages'),
  Frameworks: skills.filter(s => s.category === 'Frameworks'),
  Backend: skills.filter(s => s.category === 'Backend'),
  Animation: skills.filter(s => s.category === 'Animation'),
  Database: skills.filter(s => s.category === 'Database'),
  Tools: skills.filter(s => s.category === 'Tools')
};
