import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import { iconMap } from '../../utils/iconMap'
import { useTranslation } from 'react-i18next'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'

import type { IconType } from 'react-icons'

type Skill = {
  name: string
  icon: keyof typeof iconMap
}

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon]

  return (
    <motion.li
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="
        flex items-center gap-3
        px-4 py-3
        min-h-[48px]
        rounded-lg
        bg-slate-800/60 border border-slate-700
        text-slate-200 cursor-default
        hover:border-purple-400/60
        hover:shadow-lg hover:shadow-purple-500/20
        transition-colors
        text-sm

        max-sm:justify-center
      "
    >
      {Icon && <Icon className="text-purple-400 text-xl" />}
      <span className="text-sm font-medium">
        {skill.name}
      </span>
    </motion.li>
  )
}


function SkillGroup({
  title,
  items,
  icon: Icon,
}: {
  title: string
  items: Skill[]
  icon: IconType
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="rounded-xl border border-slate-800 bg-slate-800/40 p-6"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Coluna esquerda */}
        <div className="md:w-40 flex items-center gap-3 text-purple-400 shrink-0">
          <Icon className="text-xl" />
          <h4 className="text-lg font-semibold">
            {title}
          </h4>
        </div>

        {/* Skills */}
        <ul
          className="
            flex flex-wrap gap-3 flex-1

            max-sm:grid
            max-sm:grid-cols-2
          "
        >
          {items.map(skill => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </motion.div>
  )
}


export function Skills() {
  const { t } = useTranslation()

  return (
    <section className="section-spacing" id="skills">
      <div className="container-section">
        <h3 className="section-title mb-12">
          {t('skills.title')}
        </h3>

        <div className="space-y-8">
          <SkillGroup
            title="Front-end"
            items={skills.frontend}
            icon={FaCode}
          />

          <SkillGroup
            title="Back-end"
            items={skills.backend}
            icon={FaServer}
          />

          <SkillGroup
            title="Ferramentas"
            items={skills.tools}
            icon={FaTools}
          />
        </div>

      </div>
    </section>
  )
}
