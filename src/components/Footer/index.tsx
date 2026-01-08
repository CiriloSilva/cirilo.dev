import { useTranslation } from 'react-i18next'


export function Footer() {
    const { t } = useTranslation()
    return (
    <footer className="border-t border-slate-800 py-8 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Cirilo Silva. {t('footer.rights')}
        </div>
    </footer>
  )
}
