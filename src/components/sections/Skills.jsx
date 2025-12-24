import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillsByCategory } from '../../data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = Object.keys(skillsByCategory);

  return (
    <section id="skills" className="py-16 border-t border-slate-200/50 bg-gradient-to-b from-white to-slate-50/50 dark:border-slate-800/50 dark:from-slate-900 dark:to-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
            Skills by Category
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Technologies organized by expertise area
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/50 hover:shadow-purple-500/75'
                  : 'bg-white/70 text-slate-700 hover:bg-white hover:shadow-xl border border-slate-200/50 hover:border-purple-400/50 dark:bg-slate-900/70 dark:text-slate-300 dark:border-slate-700/50 dark:hover:border-purple-400/50'
              }`}
            >
              {category}
              <span className="ml-1 text-xs opacity-75">({skillsByCategory[category].length})</span>
            </motion.button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            variants={containerVariants}
            initial={{ opacity: 0, scale: 0.95 }}
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {skillsByCategory[activeCategory].map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ 
                  y: -6, 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5 
                }}
                className={`group relative overflow-hidden rounded-2xl p-4 h-28 backdrop-blur-xl border transition-all duration-400 cursor-pointer shadow-lg hover:shadow-2xl ${
                  hoveredSkill === skill.name
                    ? `border-transparent bg-gradient-to-br ${skill.color} shadow-2xl shadow-purple-500/40`
                    : 'border-white/30 bg-white/70 hover:border-purple-400/50 dark:border-slate-700/50 dark:bg-slate-900/70 dark:hover:border-purple-400/50'
                }`}
              >
                {/* Rotating gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  {/* Icon */}
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-white dark:text-slate-100 dark:group-hover:text-white mb-1 leading-tight px-1">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Circle */}
                  <div className="w-12 h-12 relative">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        strokeWidth="2.5"
                        stroke="hsl(210 40% 96%)"
                        className="dark:stroke-slate-800/50"
                      />
                      <motion.circle
                        cx="24"
                        cy="24"
                        r="22"
                        fill="none"
                        stroke="url(#skillGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="138.23"
                        initial={{ strokeDashoffset: 138.23 }}
                        whileInView={{ strokeDashoffset: 138.23 * (1 - skill.level / 100) }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    
                    <defs className="absolute inset-0">
                      <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                    
                    {/* Percentage */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-black text-slate-900 group-hover:text-white dark:text-slate-100 dark:group-hover:text-white leading-none">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Category Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => {
            const categorySkills = skillsByCategory[category];
            const avgLevel = Math.round(categorySkills.reduce((a, b) => a + b.level, 0) / categorySkills.length);
            
            return (
              <motion.div
                key={category}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group rounded-xl border border-white/30 bg-white/60 p-4 backdrop-blur-xl hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 dark:border-slate-700/50 dark:bg-slate-900/60 cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xl">📁</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {categorySkills.length}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider group-hover:text-purple-600 dark:text-slate-400 dark:group-hover:text-purple-400 truncate">
                  {category}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{avgLevel}% avg</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
