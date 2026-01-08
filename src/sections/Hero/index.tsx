import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="container-section">
        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-5xl md:text-6xl font-bold text-slate-100 mb-4"
        >
          Cirilo Silva
        </motion.h1>

        {/* Cargo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl md:text-3xl text-purple-400 font-medium mb-6"
        >
          {t('hero.title')}
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 max-w-2xl mx-auto mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center gap-6"
        >
          {/* Ver Projetos */}
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-purple-600 hover:bg-purple-800 text-white font-medium
              shadow-lg shadow-purple-600/20 transition"
          >
            {t('hero.projects')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/CiriloSilva"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
              border border-slate-700 hover:border-purple-400
              text-slate-200 hover:text-purple-400 transition"
          >
            <FaGithub />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
