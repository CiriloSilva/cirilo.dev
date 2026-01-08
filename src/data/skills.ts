import type { iconMap } from '../utils/iconMap'

type Skill = {
  name: string
  icon: keyof typeof iconMap
}


export const skills: {
  frontend: Skill[]
  backend: Skill[]
  tools: Skill[]
} = {
  frontend: [
    { name: 'React', icon: 'SiReact' },
    { name: 'Vite', icon: 'SiVite' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    { name: 'Next.js', icon: 'SiNextdotjs' },
    { name: 'ReactNative', icon: 'SiReact' },
    { name: 'Expo', icon: 'SiExpo' },
    { name: 'Vue.js', icon: 'SiVuedotjs' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'Bootstrap', icon: 'SiBootstrap' },
    { name: 'HTML', icon: 'SiHtml5' },
    { name: 'CSS', icon: 'SiCss3' },
  ],
  backend: [
    { name: 'Node.js', icon: 'SiNodedotjs' },
    { name: 'Fastify', icon: 'SiFastify' },
    { name: 'Express', icon: 'SiExpress' },
    { name: 'PHP', icon: 'SiPhp' },
    { name: 'Laravel', icon: 'SiLaravel' },
    { name: 'Prisma', icon: 'SiPrisma' },
    { name: 'MySQL', icon: 'SiMysql' },
    { name: 'MongoDB', icon: 'SiMongodb' },
    { name: 'Oracle', icon: 'SiOracle' },
  ],
  tools: [
    { name: 'Git', icon: 'SiGit' },
    { name: 'GitHub', icon: 'SiGithub' },
    { name: 'Postman', icon: 'SiPostman' },
    { name: 'Vercel', icon: 'SiVercel' },
    { name: 'Railway', icon: 'SiRailway' },
    { name: 'Docker', icon: 'SiDocker' },
    { name: 'Kubernetes', icon: 'SiKubernetes' },
    { name: 'Nginx', icon: 'SiNginx' },
  ],
}