import { motion } from 'framer-motion';
import { useState } from 'react';
import { certifications } from '../../data/certifications';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState(null);
  return (
    <section id="certifications" className="py-16 border-t border-slate-200/50 bg-white dark:border-slate-800 dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
            Certifications
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Professional certifications and completed courses
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02
              }}
              onHoverStart={() => setHoveredCert(cert.name)}
              onHoverEnd={() => setHoveredCert(null)}
              className={`group relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-xl border transition-all duration-400 cursor-pointer shadow-lg hover:shadow-2xl bg-gradient-to-br ${cert.color} hover:opacity-90 h-72 sm:h-80 md:h-80`}
            >
              {/* Certificate Image - Shows only on hover */}
              {hoveredCert === cert.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-20"
                >
                  <img 
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              )}

              {/* Background overlay */}
              <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/20 group-hover:bg-white/20 dark:group-hover:bg-slate-900/30 transition-colors duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {cert.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {cert.name}
                </h3>
                
                <p className="text-sm text-white/90 mb-4">
                  {cert.issuer}
                </p>

                {/* Date Badge */}
                <div className="mt-auto pt-4 border-t border-white/30">
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    {cert.date}
                  </p>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-8 rounded-2xl border border-slate-200/50 bg-white/70 px-8 py-6 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/70">
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {certifications.length}
              </div>
              <p className="text-xs font-semibold text-slate-600 uppercase dark:text-slate-400">
                Certifications
              </p>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800" />
            <div>
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                2023-2024
              </div>
              <p className="text-xs font-semibold text-slate-600 uppercase dark:text-slate-400">
                Latest Period
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
