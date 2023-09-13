import React from 'react'
import FormationSection from './FormationSection'

export default function Formations() {
  const cursos = [
    {
      id: '66165165165',
      titleSection: 'Back-end',
      cursos: [
        {
          id: '651651',
          courseTitle: 'HTML e CSS: praticando HTML/CSS',
          courseLicensed: 'NEXT',
          courseTopics: [
            {
              id: '1',
              courseTopics: 'Construa um site utilizando HTML e CSS',
            },
            {
              id: '2',
              courseTopics: 'Identifique elementos e estilos através do Figma',
            },
            {
              id: '3',
              courseTopics:
                'Aplique seus conhecimentos adquiridos até agora em um projeto real',
            },
            {
              id: '4',
              courseTopics:
                'Crie um repositório para armazenar o código do projeto',
            },
            {
              id: '5',
              courseTopics:
                'Realize o deploy de um site através do Github Pages ou Vercel',
            },
            {
              id: '6',
              courseTopics: 'Compartilhe o seu projeto com o mundo',
            },
          ],
          certificadoLink: 'LINK DO CERTIFICADO',
        },
        {
          id: '665126513',
          courseTitle: 'HTML e CSS: praticando HTML/CSS',
          courseLicensed: 'NEXT',
          courseTopics: [
            {
              id: '7',
              courseTopics: 'Construa um site utilizando HTML e CSS',
            },
            {
              id: '8',
              courseTopics: 'Identifique elementos e estilos através do Figma',
            },
            {
              id: '9',
              courseTopics:
                'Aplique seus conhecimentos adquiridos até agora em um projeto real',
            },
            {
              id: '10',
              courseTopics:
                'Crie um repositório para armazenar o código do projeto',
            },
            {
              id: '11',
              courseTopics:
                'Realize o deploy de um site através do Github Pages ou Vercel',
            },
            {
              id: '12',
              courseTopics: 'Compartilhe o seu projeto com o mundo',
            },
          ],
          certificadoLink: 'LINK DO CERTIFICADO',
        },
      ],
    },
    {
      id: '661651651651',
      titleSection: 'Front-end',
      cursos: [
        {
          id: '651651',
          courseTitle: 'HTML e CSS: praticando HTML/CSS',
          courseLicensed: 'NEXT',
          courseTopics: [
            {
              id: '1',
              courseTopics: 'Construa um site utilizando HTML e CSS',
            },
            {
              id: '2',
              courseTopics: 'Identifique elementos e estilos através do Figma',
            },
            {
              id: '3',
              courseTopics:
                'Aplique seus conhecimentos adquiridos até agora em um projeto real',
            },
            {
              id: '4',
              courseTopics:
                'Crie um repositório para armazenar o código do projeto',
            },
            {
              id: '5',
              courseTopics:
                'Realize o deploy de um site através do Github Pages ou Vercel',
            },
            {
              id: '6',
              courseTopics: 'Compartilhe o seu projeto com o mundo',
            },
          ],
          certificadoLink: 'LINK DO CERTIFICADO',
        },
        {
          id: '665126513',
          courseTitle: 'HTML e CSS: praticando HTML/CSS',
          courseLicensed: 'NEXT',
          courseTopics: [
            {
              id: '7',
              courseTopics: 'Construa um site utilizando HTML e CSS',
            },
            {
              id: '8',
              courseTopics: 'Identifique elementos e estilos através do Figma',
            },
            {
              id: '9',
              courseTopics:
                'Aplique seus conhecimentos adquiridos até agora em um projeto real',
            },
            {
              id: '10',
              courseTopics:
                'Crie um repositório para armazenar o código do projeto',
            },
            {
              id: '11',
              courseTopics:
                'Realize o deploy de um site através do Github Pages ou Vercel',
            },
            {
              id: '12',
              courseTopics: 'Compartilhe o seu projeto com o mundo',
            },
          ],
          certificadoLink: 'LINK DO CERTIFICADO',
        },
      ],
    },
    {
      id: '6616516516584',
      titleSection: 'Front-end',
      cursos: [
        {
          id: '651651',
          courseTitle: 'HTML e CSS: praticando HTML/CSS',
          courseLicensed: 'NEXT',
          courseTopics: [
            {
              id: '1',
              courseTopics: 'Construa um site utilizando HTML e CSS',
            },
            {
              id: '2',
              courseTopics: 'Identifique elementos e estilos através do Figma',
            },
            {
              id: '3',
              courseTopics:
                'Aplique seus conhecimentos adquiridos até agora em um projeto real',
            },
            {
              id: '4',
              courseTopics:
                'Crie um repositório para armazenar o código do projeto',
            },
            {
              id: '5',
              courseTopics:
                'Realize o deploy de um site através do Github Pages ou Vercel',
            },
            {
              id: '6',
              courseTopics: 'Compartilhe o seu projeto com o mundo',
            },
          ],
          certificadoLink: 'LINK DO CERTIFICADO',
        },
        {
          id: '665126513',
          courseTitle: 'HTML e CSS: praticando HTML/CSS',
          courseLicensed: 'NEXT',
          courseTopics: [
            {
              id: '7',
              courseTopics: 'Construa um site utilizando HTML e CSS',
            },
            {
              id: '8',
              courseTopics: 'Identifique elementos e estilos através do Figma',
            },
            {
              id: '9',
              courseTopics:
                'Aplique seus conhecimentos adquiridos até agora em um projeto real',
            },
            {
              id: '10',
              courseTopics:
                'Crie um repositório para armazenar o código do projeto',
            },
            {
              id: '11',
              courseTopics:
                'Realize o deploy de um site através do Github Pages ou Vercel',
            },
            {
              id: '12',
              courseTopics: 'Compartilhe o seu projeto com o mundo',
            },
          ],
          certificadoLink: 'LINK DO CERTIFICADO',
        },
      ],
    },
  ]
  return cursos.map((e) => (
    <FormationSection
      key={e.id}
      courses={e.cursos}
      titleSection={e.titleSection}
    />
  ))
}
