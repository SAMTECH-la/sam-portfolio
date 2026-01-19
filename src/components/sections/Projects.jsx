import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-200/50 bg-white dark:border-slate-800 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight dark:from-slate-100 dark:via-indigo-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            Hand-picked work showcasing my skills and experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                rotateX: 2
              }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/50 dark:bg-slate-800 dark:border-slate-700 dark:hover:shadow-purple-500/30 dark:hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col">
                {/* Project Title */}
                <motion.h3 
                  className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-purple-500 dark:text-slate-100 dark:group-hover:text-purple-400 leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-base text-slate-600 mb-6 flex-1 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="group/tech rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm hover:shadow-md hover:shadow-slate-200/50 dark:from-slate-800 dark:to-slate-700 dark:text-slate-300 dark:shadow-slate-900/50 dark:hover:shadow-slate-800/50 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons - NEW TAB TARGET="_BLANK" */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/link flex items-center gap-2 flex-1 justify-center px-6 py-3 rounded-2xl border border-slate-300 bg-white text-slate-900 hover:border-purple-400 hover:text-purple-500 hover:shadow-lg hover:shadow-purple-500/20 font-semibold transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-purple-400 dark:hover:text-purple-400 dark:hover:shadow-purple-500/20"
                  >
                    <FiGithub className="h-5 w-5 group-hover/link:rotate-12 transition-transform duration-300" />
                    <span>Code</span>
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/link flex items-center gap-2 flex-1 justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:shadow-2xl hover:shadow-purple-500/40 font-semibold transition-all duration-300"
                  >
                    <FiExternalLink className="h-5 w-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
