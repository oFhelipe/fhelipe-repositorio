import { CaretDown } from '@phosphor-icons/react'
import Button from '../Button'
import * as S from './styles'
import { FormattedMessage } from 'react-intl'

const Home = () => {
  return (
    <S.HomeContainer id="home-container">
      <S.InfoContainer>
        <h3>
          <FormattedMessage id="iam" values={{ name: 'Fhelipe Rodrigues' }} />
        </h3>
        <h1 className="gradient-text">
          <FormattedMessage id="fullstack" values={{ br: <br /> }} />
        </h1>
        <p>
          <FormattedMessage id="whatIDo" />
        </p>
        <a href="#contact-container">
          <Button>
            <FormattedMessage id="contactMeCTA" />
          </Button>
        </a>
      </S.InfoContainer>
      <CaretDown size={48} />
    </S.HomeContainer>
  )
}

export default Home
