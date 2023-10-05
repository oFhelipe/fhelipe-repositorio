import Button from '../Button'
import * as S from './styles'
import github from '../../assets/icons/github.svg'
import linkedIn from '../../assets/icons/linked-in.svg'
import { FormattedMessage } from 'react-intl'

const Contact = () => {
  return (
    <S.ContactContainer data-testid="contact-container" id="contact-container">
      <h1 data-testid="contactMe1">
        <FormattedMessage id="contactMe1" />
      </h1>
      <h1 data-testid="contactMe3">
        <strong className="gradient-text" data-testid="contactMe2">
          <FormattedMessage id="contactMe2" />
        </strong>{' '}
        <FormattedMessage id="contactMe3" />
      </h1>
      <p data-testid="contactMeSubText">
        <FormattedMessage id="contactMeSubText" />
      </p>
      <S.ButtonsContainer>
        <Button data-testid="github-button">
          <a
            data-testid="github-link"
            href="https://github.com/oFhelipe"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
            Github
          </a>
        </Button>
        <Button data-testid="linkedin-button">
          <a
            data-testid="linkedin-link"
            href="https://www.linkedin.com/in/fhelipe-rodrigues/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn" />
            LinkedIn
          </a>
        </Button>
      </S.ButtonsContainer>
    </S.ContactContainer>
  )
}

export default Contact
