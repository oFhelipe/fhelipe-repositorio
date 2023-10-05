import { CaretDown } from '@phosphor-icons/react'
import Button from '../Button'
import * as S from './styles'
import { FormattedMessage } from 'react-intl'

const Home = () => {
  return (
    <S.HomeContainer id="home-container">
      <S.InfoContainer>
        <h3>
          <FormattedMessage id="iam" />
        </h3>
        <h1 className="gradient-text">
          <FormattedMessage id="fullstack" />
        </h1>
        <p>
          <FormattedMessage id="whatIDo" />
        </p>
        <Button>
          <a href="#contact-container">
            <FormattedMessage id="contactMeCTA" />
          </a>
        </Button>
      </S.InfoContainer>
      <CaretDown size={48} />
    </S.HomeContainer>
  )
}

export default Home
