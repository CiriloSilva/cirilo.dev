export type Project = {
  id: string
  title: string
  techs: string[]
  github: string
  website?: string
}

export const projects: Project[] = [
  {
    id: 'thinkless',
    title: 'ThinkLess',
    techs: [
      'React',
      'TypeScript',
      'Node.js',
      'Fastify',
      'Prisma',
      'MySQL'
    ],
    github: 'https://github.com/CiriloSilva/thinkless'
  },
  {
    id: 'pontus',
    title: 'Pontus',
    techs: [
      'React',
      'Node.js',
      'Fastify',
      'MySQL',
      'NFC',
      'Vercel',
      'Railway',
    ],
    github: 'https://github.com/CiriloSilva/pontus',
    website: 'https://pontus-eight.vercel.app/',
  }
]
