import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section
      className="section-spacing bg-slate-950/40"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          mx-auto
          max-w-4xl
          px-4
          sm:px-6
          text-center
        "
      >
        <h3 className="section-title mb-4">
          {t('contact.title')}
        </h3>

        <p className="text-slate-400 mb-8">
          {t('contact.text')}
        </p>

        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
            sm:justify-center
          "
        >
          <a
            href="mailto:cirilo.dul@gmail.com"
            className="
              flex items-center gap-3
              px-6 py-3
              w-full sm:w-auto
              justify-center
              rounded-lg
              border border-slate-800
              hover:border-purple-400
              hover:text-purple-400
              transition
            "
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://github.com/CiriloSilva"
            target="_blank"
            className="
              flex items-center gap-3
              px-6 py-3
              w-full sm:w-auto
              justify-center
              rounded-lg
              border border-slate-800
              hover:border-purple-400
              hover:text-purple-400
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/cirilo-dulcesil"
            target="_blank"
            className="
              flex items-center gap-3
              px-6 py-3
              w-full sm:w-auto
              justify-center
              rounded-lg
              border border-slate-800
              hover:border-purple-400
              hover:text-purple-400
              transition
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}
