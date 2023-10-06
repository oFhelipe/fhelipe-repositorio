import { useConfig } from '../../providers/ConfigProvider'
import * as S from './styles'

type SkillCardProps = {
  name: string
  isSelected: boolean
  onClick: () => void
}

const SkillCard = ({ name, isSelected = false, onClick }: SkillCardProps) => {
  const { theme } = useConfig()
  return (
    <S.SkillCardContainer
      data-testid={`skill_${name}`}
      $isSelected={isSelected}
    >
      <S.SkillImage
        data-testid={`skill_image_${name}`}
        $isSelected={isSelected}
        name={name}
        $themeName={theme}
        onClick={onClick}
      />
      {isSelected && <S.Loading />}
    </S.SkillCardContainer>
  )
}

export default SkillCard
