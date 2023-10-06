import styled from 'styled-components'
import imagesBySkill from './imagesBySkill'

type SkillCardContainerProps = {
  $isSelected: boolean
}

type SkillImageProps = {
  name: string
  $themeName: string
  $isSelected: boolean
}

export const SkillCardContainer = styled.div<SkillCardContainerProps>`
  height: 5rem;
  width: 5rem;
  border-radius: 8px;
  position: relative;
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.loadingColor + '0d'
      : props.theme.colors.cardBackground};

  background: linear-gradient(
        ${(props) => props.theme.colors.cardBackground},
        ${(props) => props.theme.colors.cardBackground}
      )
      padding-box,
    ${(props) =>
        props.$isSelected
          ? props.theme.colors.gradient
          : props.theme.colors.cardBorder}
      border-box;
  border: 1.5px solid transparent;

  &:hover {
    background: linear-gradient(
          ${(props) => props.theme.colors.cardBackground},
          ${(props) => props.theme.colors.cardBackground}
        )
        padding-box,
      ${(props) =>
          props.$isSelected
            ? props.theme.colors.gradient
            : props.theme.colors.cardBorderHover}
        border-box;
  }
`

export const Loading = styled.span`
  position: absolute;
  border-radius: 8px;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.loadingColor + '10'};
  height: 100%;
  animation: loadingAnimation 40s linear infinite;
`

export const SkillImage = styled.div<SkillImageProps>`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-image: ${(props) => {
    const image = imagesBySkill[props.name]
    if (props.$isSelected) {
      return `url(${image.gradient})`
    }

    if (props.$themeName === 'dark') {
      return `url(${image.dark})`
    }

    return `url(${image.light})`
  }};

  &:hover {
    background-image: ${(props) => {
      const image = imagesBySkill[props.name]
      if (props.$isSelected) {
        return `url(${image.gradient})`
      }

      if (props.$themeName === 'dark') {
        return `url(${image['dark-hover']})`
      }

      return `url(${image['light-hover']})`
    }};
  }
`
