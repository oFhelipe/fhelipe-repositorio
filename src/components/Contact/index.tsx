import Button from '../Button'
import * as S from './styles'
import github from '../../assets/icons/github.svg'
import linkedIn from '../../assets/icons/linked-in.svg'
import { FormattedMessage } from 'react-intl'

const Contact = () => {
  return (
    <S.ContactContainer id="contact-container">
      <h1>
        <FormattedMessage id="contactMe1" />
      </h1>
      <h1>
        <strong className="gradient-text">
          <FormattedMessage id="contactMe2" />
        </strong>{' '}
        <FormattedMessage id="contactMe3" />
      </h1>
      <p>
        <FormattedMessage id="contactMeSubText" />
      </p>
      <S.ButtonsContainer>
        <a href="https://github.com/oFhelipe" target="_blank" rel="noreferrer">
          <Button>
            <img src={github} alt="github" />
            <p>Github</p>
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/fhelipe-rodrigues/"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <img src={linkedIn} alt="linkedIn" />
            <p>LinkedIn</p>
          </Button>
        </a>
      </S.ButtonsContainer>
    </S.ContactContainer>
  )
}

export default Contact
