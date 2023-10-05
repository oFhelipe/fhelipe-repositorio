import * as S from './styles'
import fhelipe from '../../assets/images/fhelipe.webp'
import { FormattedMessage } from 'react-intl'

const AboutMe = () => {
  return (
    <S.AboutMeContainer
      id="about-me-container"
      data-testid="about-me-container"
    >
      <S.ImageBackground className="gradient">
        <img src={fhelipe} alt="Fhelipe Rodrigues" />
      </S.ImageBackground>
      <S.InfoBackground>
        <h3 className="gradient-text" data-testid="aboutMe">
          <FormattedMessage id="aboutMe" />
        </h3>
        <h2>Fhelipe Rodrigues</h2>
        <h3 data-testid="function">
          <FormattedMessage id="function" />
        </h3>
        <p data-testid="aboutMeText">
          <FormattedMessage id="aboutMeText" />
        </p>
      </S.InfoBackground>
    </S.AboutMeContainer>
  )
}

export default AboutMe
