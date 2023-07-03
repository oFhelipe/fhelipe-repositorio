import ProjectCard from '../ProjectCard'
import * as S from './styles'
import { useRef } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { FormattedMessage } from 'react-intl'
import projectsPtBR from '../../data/projects-pt-br'
import projectsEn from '../../data/projects-en'
import { useConfig } from '../../context/ConfigProvider'

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const projectListContainerRef = useRef<HTMLDivElement>(null)
  const { language } = useConfig()
  const projects = language === 'pt-BR' ? projectsPtBR : projectsEn

  function handleClickOnPassButton(direction: 'left' | 'right') {
    const scrollContainer = scrollContainerRef.current
    const projectListContainer = projectListContainerRef.current
    const isLeftDirection = direction === 'right'

    if (scrollContainer && projectListContainer) {
      let containerScrollLeftValue = scrollContainer.scrollLeft
      const projectCard =
        projectListContainer.querySelector<HTMLDivElement>(':first-child')

      if (isLeftDirection) {
        containerScrollLeftValue += projectCard!.offsetWidth + 16
      } else {
        containerScrollLeftValue -= projectCard!.offsetWidth + 16
      }

      scrollContainerRef.current.scrollLeft = containerScrollLeftValue
    }
  }

  return (
    <S.ProjectsContainer id="projects-container">
      <h3 className="gradient-text">
        <FormattedMessage id="projects" />
      </h3>
      <S.CarrouselContainerContainer ref={scrollContainerRef}>
        <S.ProjectsListContainer ref={projectListContainerRef}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </S.ProjectsListContainer>
      </S.CarrouselContainerContainer>
      <S.LeftButton
        title="left carrousel container"
        onClick={() => handleClickOnPassButton('left')}
      >
        <CaretLeft size={32} />
      </S.LeftButton>
      <S.RightButton
        title="right carrousel container"
        onClick={() => handleClickOnPassButton('right')}
      >
        <CaretRight size={32} />
      </S.RightButton>
    </S.ProjectsContainer>
  )
}

export default Projects
