import { motion } from 'framer-motion';
import profileImage from '../../assets/profileee.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="grid min-h-screen grid-cols-1 items-center gap-8 py-12 sm:gap-10 sm:py-16 md:grid-cols-2 md:gap-12 md:py-32 lg:py-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="space-y-8">
        <motion.span 
          variants={itemVariants}
          className="inline-block rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text px-4 py-2 text-xs font-bold uppercase tracking-wider text-transparent shadow-lg"
        >
          Web Developer
        </motion.span>
        
        <motion.div variants={itemVariants}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-slate-900 via-purple-600 to-pink-600 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:from-slate-100 dark:via-indigo-400 dark:to-purple-400"
          >
            Hi, I'm <span>Sam</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="max-w-lg text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300"
          >
            I craft <span className="font-black text-slate-900 dark:text-slate-100">beautiful</span> and{' '}
            <span className="font-black text-slate-900 dark:text-slate-100">performant</span> web experiences.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 font-black text-sm sm:text-base md:text-xl text-slate-900 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/75 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-3xl border-2 border-slate-200/50 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 font-bold text-sm sm:text-base md:text-xl text-slate-900 backdrop-blur-xl hover:border-purple-500 hover:text-purple-500 hover:shadow-2xl hover:shadow-purple-500/25 dark:border-slate-700/50 dark:text-slate-100 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <motion.div 
          animate={{ 
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-orange-400/30 p-2 shadow-2xl backdrop-blur-3xl border border-white/20"
        >
          <img 
            src={profileImage}
            alt="Profile"
            className="h-full w-full rounded-full object-cover shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
