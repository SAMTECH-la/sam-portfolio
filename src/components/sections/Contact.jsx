import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiCheck, FiGithub, FiLinkedin, FiMail, FiSend, FiX } from 'react-icons/fi';

// ✅ YOUR REAL EmailJS CREDENTIALS
const SERVICE_ID = 'service_n5sykpk';
const TEMPLATE_ID = 'template_2smd1dk';
const PUBLIC_KEY = 'xOoUj_G_o3u_3WB-B';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Valid email required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be 10+ characters';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrorMessage('Please fix the errors above');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage('Failed to send. Please email directly.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent dark:from-white dark:to-indigo-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            B.Tech CSE 3rd Year | Full Stack Developer | <a href="mailto:samarthkurdukar1@gmail.com" className="hover:underline">samarthkurdukar1@gmail.com</a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FORM */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-14 px-5 py-3 text-lg bg-white border-2 border-gray-200 rounded-2xl shadow-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-200 focus:outline-none hover:border-gray-300 transition-all duration-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-14 px-5 py-3 text-lg bg-white border-2 border-gray-200 rounded-2xl shadow-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-200 focus:outline-none hover:border-gray-300 transition-all duration-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                Your Project *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 text-lg bg-white border-2 border-gray-200 rounded-2xl shadow-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-200 focus:outline-none resize-vertical hover:border-gray-300 transition-all duration-300 dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                placeholder="Tell me about your project - requirements, timeline, budget..."
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              className={`w-full h-16 rounded-3xl font-black text-xl flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl uppercase tracking-wide ${
                status === 'sending'
                  ? 'bg-gray-400 cursor-not-allowed shadow-none text-gray-200'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-purple-500/50 hover:shadow-purple-500/75 hover:shadow-3xl'
              }`}
            >
              {status === 'sending' ? (
                <>
                  <div className="h-7 w-7 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <FiCheck className="h-7 w-7 text-emerald-400 animate-pulse" />
                  <span>Sent Successfully! 🎉</span>
                </>
              ) : (
                <>
                  <FiSend className="h-7 w-7" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {/* Error */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-3xl bg-red-100 border-4 border-red-300 text-red-900 font-bold shadow-2xl dark:bg-red-900/80 dark:border-red-500 dark:text-red-100"
              >
                <div className="flex items-center gap-3">
                  <FiX className="h-7 w-7 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              </motion.div>
            )}
          </motion.form>

          {/* YOUR PERSONAL CONTACT INFO */}
          <motion.div 
            className="space-y-8 lg:pt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <div className="space-y-4">
              <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
             📧 <a href="mailto:samarthkurdukar1@gmail.com" className="hover:underline text-base">samarthkurdukar1@gmail.com</a>

              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
                B.Tech CSE 3rd Year | Full Stack Developer
                <br/>
                <span className="text-sm opacity-75">Messages arrive instantly. Response within 24h.</span>
              </p>
            </div>

            {/* YOUR EMAIL - DIRECT LINK */}
            <motion.a
              href="mailto:samarthkurdukar1@gmail.com"
              className="group block p-8 rounded-3xl border-4 border-gray-200 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/30 hover:border-purple-500 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 bg-white/90 backdrop-blur-xl dark:bg-slate-900/90 dark:border-slate-700 dark:hover:border-purple-400"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl shrink-0 mt-1">
                  <FiMail className="h-10 w-10 text-white" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3 group-hover:text-purple-600 dark:text-gray-400 dark:group-hover:text-purple-400">
                    📧 Primary Email
                  </p>
                  <p className="text-xl font-black text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 break-all">
                    <a href="mailto:samarthkurdukar1@gmail.com" className="hover:underline">samarthkurdukar1@gmail.com</a>
                  </p>
                </div>
              </div>
            </motion.a>

            {/* YOUR LINKEDIN */}
            <motion.a
              href="https://www.linkedin.com/in/samarth-kurdukar-070a71271/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500 hover:-translate-y-1 transition-all duration-400 bg-white/80 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-blue-500 backdrop-blur-xl"
              whileHover={{ x: 8 }}
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                <FiLinkedin className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900 dark:text-white">LinkedIn</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">samarth-kurdukar-070a71271</p>
              </div>
            </motion.a>

            {/* YOUR GITHUB */}
            <motion.a
              href="https://github.com/SAMTECH-la"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:shadow-gray-500/20 hover:border-gray-500 hover:-translate-y-1 transition-all duration-400 bg-white/80 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-gray-500 backdrop-blur-xl"
              whileHover={{ x: 8 }}
            >
              <div className="h-14 w-14 rounded-2xl bg-gray-900 flex items-center justify-center shadow-lg">
                <FiGithub className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900 dark:text-white">@SAMTECH-la</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">9 Repositories</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
