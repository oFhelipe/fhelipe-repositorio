import styled from 'styled-components'

type MenuContainerProps = {
  isMenuVisible: boolean
}

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.background};
`

export const HeaderContentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.background};
  h3 {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
  }

  @media (min-width: 1023px) {
    #menu-sandwich-icon {
      display: none;
    }
  }
`
export const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  z-index: 9999;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  height: 100%;
  max-width: 400px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.menuBackground};

  @media (max-width: 1023px) {
    position: fixed;
    transition: width 0.2s linear;
    top: 0;
    right: 0;
    width: ${(props) => (props.isMenuVisible ? '100%' : '0px')};
    ul {
      padding: 3rem 1rem 2rem 2rem;
    }
    button {
      margin: 1.2rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 1rem;
    li {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  @media (min-width: 1023px) {
    position: relative;
    background-color: transparent;
    align-items: center;
    padding: 0;
    max-width: inherit;
    width: inherit;
    height: inherit;
    ul {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      li {
        font-size: 0.875rem;
      }
    }
    #menu-x-icon {
      display: none;
    }
  }
`

export const LeftMenuContainer = styled.div`
  display: flex;
  gap: 2rem;
`
