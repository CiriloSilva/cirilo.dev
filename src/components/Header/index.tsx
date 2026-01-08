import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection'


export function Header() {
  const { i18n, t } = useTranslation()

  function toggleLanguage() {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')
  }

  const isPT = i18n.language === 'pt'

  const { scrollY } = useScroll()

  const scaleByScroll = useTransform(
    scrollY,
    [0, 120],
    [1, 0.97]
  )

  const opacityByScroll = useTransform(
    scrollY,
    [0, 120],
    [1, 0.85]
  )

  const activeSection = useActiveSection([
    'about',
    'skills',
    'projects',
    'contact',
  ])

  const isAtTop = window.scrollY < 200




  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-800 z-50">
      <div className="container-section flex items-center justify-between py-4">
        
        {/* Logo */}
        <motion.div 
          style={{
            scale: scaleByScroll,
            opacity: opacityByScroll,
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <a href="#" className="flex items-center gap-2">
            <img
              src="/devicon.svg"
              alt="Logo"
              className="w-5 h-5"
            />
            <span className="flex items-baseline gap-1 font-semibold tracking-tight">
              <span className="text-slate-100 font-semibold transition group-hover:text-purple-300">
                Cirilo
              </span>
              <span className="text-purple-400 font-mono text-sm transition group-hover:text-purple-300">
                .dev
              </span>
            </span>
          </a>
        </motion.div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a
            href="#about"
            className={`
              relative pb-1 transition
              ${
                !isAtTop && activeSection === 'about'
                  ? 'text-purple-400'
                  : 'hover:text-purple-400'
              }
            `}
          >
            {t('nav.about')}

            <span
              className={`
                absolute left-0 -bottom-0.5 h-[2px] bg-purple-400
                transition-all duration-300
                ${
                  activeSection === 'about'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }
              `}
            />
          </a>
          <a
            href="#skills"
            className={`
              relative pb-1 transition
              ${
                activeSection === 'skills'
                  ? 'text-purple-400'
                  : 'hover:text-purple-400'
              }
            `}
          >
            {t('nav.skills')}

            <span
              className={`
                absolute left-0 -bottom-0.5 h-[2px] bg-purple-400
                transition-all duration-300
                ${
                  activeSection === 'skills'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }
              `}
            />
          </a>
          <a
            href="#projects"
            className={`
              relative pb-1 transition
              ${
                activeSection === 'projects'
                  ? 'text-purple-400'
                  : 'hover:text-purple-400'
              }
            `}
          >
            {t('nav.projects')}

            <span
              className={`
                absolute left-0 -bottom-0.5 h-[2px] bg-purple-400
                transition-all duration-300
                ${
                  activeSection === 'projects'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }
              `}
            />
          </a>
          <a
            href="#contact"
            className={`
              relative pb-1 transition
              ${
                activeSection === 'contact'
                  ? 'text-purple-400'
                  : 'hover:text-purple-400'
              }
            `}
          >
            {t('nav.contact')}

            <span
              className={`
                absolute left-0 -bottom-0.5 h-[2px] bg-purple-400
                transition-all duration-300
                ${
                  activeSection === 'contact'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }
              `}
            />
          </a>
        </nav>


        {/* Language switch */}
        <button
          onClick={toggleLanguage}
          title={isPT ? 'Switch to English' : 'Mudar para Português'}
          className="
            flex items-center justify-center
            transition
            hover:scale-110
          "
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={isPT ? 'pt' : 'en'}
              src={isPT ? '/flags/br.svg' : '/flags/us.svg'}
              alt={isPT ? 'Português' : 'English'}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="
                w-6 h-6
                drop-shadow-[0_0_6px_rgba(168,85,247,0.35)]
              "
            />
          </AnimatePresence>
        </button>
      </div>
    </header>
  )
}
