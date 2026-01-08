import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaBrain, FaLayerGroup, FaBullseye } from 'react-icons/fa'

export function About() {
  const { t } = useTranslation()

  const textLines = t('about.text')
    .split('. ')
    .filter(Boolean)

  const highlightIcons = {
    mindset: FaBrain,
    stack: FaLayerGroup,
    goal: FaBullseye,
  }

  return (
    <section id="about" className="section-spacing bg-slate-950/40">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* TEXTO */}
          <div className="flex flex-col justify-center">
            <h3 className="section-title mb-6">
              {t('about.title')}
            </h3>

            <div className="space-y-3 text-slate-300 leading-relaxed text-justify">
              {textLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {(['mindset', 'stack', 'goal'] as const).map((item, index) => {
              const Icon = highlightIcons[item]

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="rounded-lg border border-slate-800
                             bg-slate-900/40 p-5 transition-all
                             hover:border-purple-400/60 hover:bg-slate-900/60"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-purple-400 text-lg" />
                    <h4 className="text-purple-400 font-medium">
                      {t(`about.highlights.${item}.title`)}
                    </h4>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed text-justify">
                    {t(`about.highlights.${item}.text`)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
