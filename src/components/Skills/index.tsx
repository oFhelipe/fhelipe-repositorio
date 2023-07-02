import skillsPtBr from '../../data/skills-pt-br'
import skillsEn from '../../data/skills-en'
import SkillCard from '../SkillCard'
import imagesBySkill from '../SkillCard/imagesBySkill'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { useConfig } from '../../context/ConfigProvider'
import { FormattedMessage } from 'react-intl'

const Skills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const { language } = useConfig()
  const skills = language === 'pt-BR' ? skillsPtBr : skillsEn

  function handleChangeSkillIndex(newIndex: number) {
    setCurrentSkillIndex((oldValue) =>
      skills.length > newIndex ? newIndex : oldValue,
    )
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSkillIndex(
        skillsPtBr.length > currentSkillIndex + 1 ? currentSkillIndex + 1 : 0,
      )
    }, 40000)
    return () => clearTimeout(timeout)
  }, [currentSkillIndex])

  return (
    <S.SkillsContainer id="skills-container">
      <S.SkillInfoContainer>
        <h2 className="gradient-text">
          <FormattedMessage id="skills" />
        </h2>
        <h3>
          <img
            src={imagesBySkill[skills[currentSkillIndex].name].gradient}
            alt="logotipo da tecnologia"
          />{' '}
          {skills[currentSkillIndex].name}
        </h3>
        <p>{skills[currentSkillIndex].description}</p>
      </S.SkillInfoContainer>
      <S.SkillListContainer>
        {skills.map((skill, i) => (
          <SkillCard
            onClick={() => handleChangeSkillIndex(i)}
            key={i}
            name={skill.name}
            isSelected={i === currentSkillIndex}
          />
        ))}
      </S.SkillListContainer>
    </S.SkillsContainer>
  )
}

export default Skills
