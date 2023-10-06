import { CaretDown } from '@phosphor-icons/react'
import Button from '../Button'
import * as S from './styles'
import { FormattedMessage } from 'react-intl'

const Home = () => {
  return (
    <S.HomeContainer data-testid="home-container" id="home-container">
      <S.InfoContainer>
        <h3 data-testid="iam">
          <FormattedMessage id="iam" />
        </h3>
        <h1 data-testid="fullstack" className="gradient-text">
          <FormattedMessage id="fullstack" />
        </h1>
        <p data-testid="whatIDo">
          <FormattedMessage id="whatIDo" />
        </p>
        <Button data-testid="contactMeCTA">
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
