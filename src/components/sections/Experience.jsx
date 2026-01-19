import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-white dark:via-purple-400 dark:to-pink-400">
            Experience & Education
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            My professional journey so far
          </p>
        </div>

        <div className="relative hidden sm:block">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={item.title} className="relative flex gap-3 sm:gap-6">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 shadow-xl">
                  <span className="text-xl font-bold text-white uppercase tracking-wider">
                    {item.type === 'Experience' ? 'E' : 'E'}
                  </span>
                </div>
                
                <div className="flex flex-1 flex-col pb-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {item.company}
                  </p>
                  
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
