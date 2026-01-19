export const skills = [
  { name: 'React', category: 'Frontend', level: 55, icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
  { name: 'TypeScript', category: 'Languages', level: 50, icon: '📘', color: 'from-blue-500 to-purple-500' },
  { name: 'JavaScript', category: 'Languages', level: 52, icon: '�', color: 'from-yellow-400 to-orange-500' },
  { name: 'Tailwind CSS', category: 'Styling', level: 54, icon: '🎨', color: 'from-cyan-400 to-blue-500' },
  { name: 'CSS3', category: 'Styling', level: 51, icon: '�', color: 'from-pink-400 to-rose-500' },
  { name: 'Next.js', category: 'Frameworks', level: 48, icon: '▲', color: 'from-slate-800 to-slate-900' },
  { name: 'Node.js', category: 'Backend', level: 45, icon: '�', color: 'from-green-400 to-emerald-500' },
  { name: 'Express.js', category: 'Backend', level: 42, icon: '🚀', color: 'from-indigo-400 to-purple-500' },
  { name: 'Framer Motion', category: 'Animation', level: 53, icon: '🎬', color: 'from-purple-400 to-pink-500' },
  { name: 'MongoDB', category: 'Database', level: 40, icon: '🍃', color: 'from-green-500 to-teal-500' },
  { name: 'Git', category: 'Tools', level: 52, icon: '📦', color: 'from-orange-400 to-red-500' },
  { name: 'Vite', category: 'Tools', level: 49, icon: '⚡', color: 'from-emerald-400 to-teal-500' },
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
