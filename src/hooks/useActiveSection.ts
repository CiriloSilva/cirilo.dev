// src/hooks/useActiveSection.ts
import { useEffect, useState } from 'react'

type Section = {
  id: string
  top: number
}

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>('')

    useEffect(() => {
    function calculateSections(): Section[] {
        return sectionIds
        .map(id => {
            const el = document.getElementById(id)
            if (!el) return null

            const rect = el.getBoundingClientRect()
            const top = rect.top + window.scrollY

            return { id, top }
        })
        .filter(Boolean) as Section[]
    }

    let sections = calculateSections()

    function onScroll() {
        const scrollPosition = window.scrollY + window.innerHeight / 3

        // HERO → nenhum ativo
        if (scrollPosition < sections[0].top - 100) {
        setActiveSection('')
        return
        }
        
        const pageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10

        // Se chegou no fim da página → Contact ativo
        if (pageBottom) {
        setActiveSection(sections[sections.length - 1].id)
        return
        }

        for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top) {
            setActiveSection(sections[i].id)
            return
        }
        }
    }

    function onResize() {
        sections = calculateSections()
        onScroll()
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)

    onScroll()

    return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onResize)
    }
    }, [sectionIds])

    return activeSection
}
