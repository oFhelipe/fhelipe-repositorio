import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import * as S from './styles'
import { FormattedMessage } from 'react-intl'
import LanguagePopover from '../LanguagePopover'

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  function handleChangeMenuVisibility() {
    setIsMenuVisible((oldStateValue) => !oldStateValue)
  }
  return (
    <S.HeaderContainer id="home">
      <S.HeaderContentContainer>
        <a href="#home-container">
          <h3>{'<FR />'}</h3>
        </a>
        <S.LeftMenuContainer>
          <button
            title="menu opener"
            id="menu-sandwich-icon"
            onClick={handleChangeMenuVisibility}
          >
            <List size={32} />
          </button>
          <S.MenuContainer isMenuVisible={isMenuVisible}>
            <ul>
              <li onClick={handleChangeMenuVisibility}>
                <a href="#home-container">
                  <FormattedMessage id="home" />
                </a>
              </li>
              <li onClick={handleChangeMenuVisibility}>
                <a href="#about-me-container">
                  <FormattedMessage id="aboutMe" />
                </a>
              </li>
              <li onClick={handleChangeMenuVisibility}>
                <a href="#skills-container">
                  <FormattedMessage id="skills" />
                </a>
              </li>
              <li onClick={handleChangeMenuVisibility}>
                <a href="#projects-container">
                  <FormattedMessage id="projects" />
                </a>
              </li>
              <li onClick={handleChangeMenuVisibility}>
                <a href="#contact-container">
                  <FormattedMessage id="contact" />
                </a>
              </li>
            </ul>
            <button
              title="menu closer"
              id="menu-x-icon"
              onClick={handleChangeMenuVisibility}
            >
              <X size={32} />
            </button>
          </S.MenuContainer>
          <LanguagePopover />
        </S.LeftMenuContainer>
      </S.HeaderContentContainer>
    </S.HeaderContainer>
  )
}

export default Header
