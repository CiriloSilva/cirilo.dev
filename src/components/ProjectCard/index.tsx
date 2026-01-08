import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: string
  title: string
  techs: string[]
  github: string
  website?: string | null
}

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()


  return (
    <div className="
        rounded-2xl
        bg-gradient-to-b from-slate-900 to-slate-950
        border border-slate-800
        p-8
        flex flex-col justify-between
        transition
        hover:-translate-y-1
        hover:border-purple-500/40
        hover:shadow-xl hover:shadow-purple-500/10
    ">
      <div>
        <h4 className="text-2xl font-semibold text-slate-100 mb-3">
          {project.title}
        </h4>

        <p className="text-slate-400 text-sm mb-4">
          {t(`projects.${project.id}.description`)}
        </p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {project.techs.map(tech => (
            <li
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-lg
            border border-slate-700
            text-slate-300
            hover:border-purple-400
            hover:text-purple-400
            transition
          ">
            <FaGithub className="w-4 h-4" />
          GitHub
        </a>

        {project.website && (
          <a
            href={project.website}
            target="_blank"
            className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-lg
                bg-purple-600
                hover:bg-purple-800
                text-white
                shadow-lg shadow-purple-600/20
                transition
            ">
            <FaExternalLinkAlt className="w-4 h-4" />
            Website
          </a>
        )}
      </div>
    </div>
  )
}
