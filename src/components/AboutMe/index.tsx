import * as S from './styles'
import fhelipe from '../../assets/images/fhelipe.webp'
import { FormattedMessage } from 'react-intl'

const AboutMe = () => {
  return (
    <S.AboutMeContainer id="about-me-container">
      <S.ImageBackground className="gradient">
        <img src={fhelipe} alt="Fhelipe Rodrigues" />
      </S.ImageBackground>
      <S.InfoBackground>
        <h3 className="gradient-text">
          <FormattedMessage id="aboutMe" />
        </h3>
        <h2>Fhelipe Rodrigues</h2>
        <h3>
          <FormattedMessage id="fullstack" values={{ br: '' }} />
        </h3>
        <p>
          <FormattedMessage id="aboutMeText" />
        </p>
      </S.InfoBackground>
    </S.AboutMeContainer>
  )
}

export default AboutMe
