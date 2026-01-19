export default function About() {
  return (
    <section id="about" className="border-t border-slate-200/50 bg-white py-20 dark:border-slate-800 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-slate-900 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-white dark:via-purple-400 dark:to-pink-400">
              About Me
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-200">
              <p>
                I’m Samarth V. Kurdukar, an aspiring 3rd-year B.Tech student at Pimpri Chinchwad University with strong skills in HTML, CSS, JavaScript, and hands-on experience in PHP and MySQL. I enjoy building responsive, dynamic web applications and continuously improving my full-stack development skills.
              </p>
              <p>
                I enjoy turning complex problems into simple, beautiful interfaces. When not coding,
                I'm exploring new design trends or contributing to open source projects.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              What I Do
            </h3>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>• Modern UI/UX with React & Tailwind CSS</p>
              <p>• Performance optimization & accessibility</p>
              <p>• Full-stack development </p>
              <p>• Mobile-first responsive design</p>
              <p>• Component libraries & design systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
