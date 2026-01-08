import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { projects } from '../../data/projects'
import { ProjectCard } from '../../components/ProjectCard'

export function Projects() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6 section-divider" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container-section"
      >
        <h3 className="section-title mb-12">
          {t('projects.title')}
        </h3>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
