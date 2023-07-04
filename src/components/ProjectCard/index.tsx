import { FormattedMessage } from 'react-intl'
import * as S from './styles'

type ProjectCardProps = {
  project: {
    name: string
    description: string
    image: string
    link: string
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { description, image, link, name } = project
  function handleClickOnCard() {
    window.open(link, '_blank')
  }
  return (
    <S.Container onClick={handleClickOnCard}>
      <img src={image} alt="" />
      <S.InfoContainer>
        <h2 className="gradient-text">{name}</h2>
        <p>{description}</p>
      </S.InfoContainer>
      <h3 className="gradient-text">
        {' '}
        <FormattedMessage id="seeProject" />
      </h3>
    </S.Container>
  )
}

export default ProjectCard
